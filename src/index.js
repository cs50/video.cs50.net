import 'babel-polyfill';
import 'whatwg-fetch';
import { subscribe, publish } from 'minpubsub';

import VideoPlayback from './modules/video-playback';
import VideoMain from './modules/video-main';
import VideoDownload from './modules/video-download';
import VideoTimeout from './modules/video-timeout';
import VideoTimer from './modules/video-timer';
import VideoCameras from './modules/video-cameras';
import MarkerSearch from './modules/marker-search';
import MarkerTimeline from './modules/marker-timeline';
import MarkerTeleprompter from './modules/marker-teleprompter';
import MarkerList from './modules/marker-list';
import LanguageSelect from './modules/language-select';
import ThumbnailPreview from './modules/thumbnail-preview';

import { markers } from './modules/marker-fetch';
import { thumbs } from './modules/thumbnail-fetch';

const getQueryParams = qs => {
  qs = qs.split('+').join(' ');
  const params = {};
  let tokens;
  const re = /[?&]?([^=]+)=([^&]*)/g;
  while (tokens = re.exec(qs)) {
    params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
  }
  return params;
};

const getEpisodeData = url => fetch(url)
.then(data => data.json())
.then(({ youtube, captions, chapters, downloads, thumbnails }) => ({
  youtube, captions, chapters, thumbnails, downloads,
}));

const secondsToYoutubeTime = sec => (sec > 3600 ?
  `${Math.floor(sec / 3600)}h${Math.floor((sec / 60) % 60)}m${Math.floor(sec % 60)}s` :
  `${Math.floor(sec / 60)}m${Math.floor(sec % 60)}s`);

const youTubeTimeToSeconds = time => {
  const hours = time.match(/\d+h/) ? parseFloat(time.match(/\d+h/)[0]) : 0;
  const mins = parseFloat(time.match(/\d+m/)[0]);
  const secs = parseFloat(time.match(/\d+s/)[0]);
  return (hours * 3600) + (mins * 60) + secs;
};

module.exports = () => {
  // Determine if youtube is accessible
  const image = new Image();
  image.onerror = () => {
    document.querySelector('video-main').classList.add('blocked');
  };
  image.src = 'https://youtube.com/favicon.ico';

  // Extract the url on page load
  const targetEpisode = window.location.pathname === '/' ?
    '/2016/fall/lectures/0' : window.location.pathname.replace(/\/$/, '');
  const targetLanguage = 'en';

  window.history.replaceState(null, null, targetEpisode);

  VideoPlayback.render('video-playback', [
    { rate: 1, label: '1' },
    { rate: 1.5, label: '1.5' },
    { rate: 2, label: '2' },
  ]);
  MarkerSearch.render('marker-search');
  VideoMain.render('video-main', '');

  MarkerList.initialize();
  MarkerTeleprompter.initialize();
  MarkerTimeline.initialize();
  ThumbnailPreview.initialize();
  VideoTimeout.initialize();
  VideoTimer.initialize();

  subscribe('player:loadVideo', (id, lang = 'en') => {
    const startTime = getQueryParams(document.location.search).t ?
    youTubeTimeToSeconds(getQueryParams(document.location.search).t) : 0;
    // Fetch episode data from CDN based on URL
    getEpisodeData(`https://cdn.cs50.net${id}/index.json`)
    .then(ep => {
      const toHttps = url => url.replace('http://', 'https://');
      localStorage.setItem('episode', JSON.stringify(ep));
      const youtubeVideoId = ep.youtube ? ep.youtube.main : null;
      const chaptersFile = typeof ep.chapters === 'object' ?
        ep.chapters.find(x => x.srclang === 'en') : null;
      const captionsFile = typeof ep.captions === 'object' ?
        ep.captions.find(x => x.srclang === 'en') : null;
      const thumbnailsFile = typeof ep.thumbnails === 'object' ?
        ep.thumbnails.find(x => x.type === 'text/vtt') : null;
      const downloadLinks = typeof ep.downloads === 'object' ?
        ep.downloads.filter(x => x.label.match('MP4')) : null;

      VideoCameras.render('video-cameras', ep.youtube);

      // Render components based on what episode data exists
      publish('video:loadVideoById', [youtubeVideoId, startTime]);
      if (thumbnailsFile) thumbs(toHttps(thumbnailsFile.src));
      if (downloadLinks) VideoDownload.render('video-download', downloadLinks);
      if (chaptersFile && captionsFile) {
        const availableLanguages = ep.captions.map(x => x.srclang);
        LanguageSelect.render('language-select', availableLanguages, lang);
        markers(toHttps(chaptersFile.src), toHttps(captionsFile.src));
      }
    });
  });

  subscribe('player:changeLanguage', (lang) => {
    const ep = JSON.parse(localStorage.getItem('episode'));
    const resourceUrl = (resource, y) => {
      const desiredUrl = resource.find(x => x.srclang === y);
      const defaultUrl = resource.find(x => x.srclang === 'en');
      return desiredUrl !== undefined ? desiredUrl : defaultUrl;
    };
    const chaptersFileUrl = resourceUrl(ep.chapters, lang).src.replace('http://', 'https://');
    const captionsFileUrl = resourceUrl(ep.captions, lang).src.replace('http://', 'https://');
    markers(chaptersFileUrl, captionsFileUrl);
    window.ga('send', 'event', 'language', 'changed', lang);
  });

  subscribe('video:seekTo', time => {
    window.history.replaceState({}, '', `?t=${secondsToYoutubeTime(time)}`);
  });

  subscribe('video:tick', time => {
    window.history.replaceState({}, '', `?t=${secondsToYoutubeTime(time)}`);
  });

  document.querySelector('.video-captions').addEventListener('click', (e) => {
    document.querySelector('marker-teleprompter').classList.toggle('hidden');
    e.currentTarget.classList.toggle('active');
    if (e.currentTarget.classList.contains('active')) {
      window.ga('send', 'event', 'captions', 'enabled');
    }
  });

  document.querySelector('.video-fullscreen').addEventListener('click', () => {
    const iframe = document.querySelector('iframe');
    const requestFullScreen = iframe.requestFullScreen || iframe.mozRequestFullScreen || iframe.webkitRequestFullScreen;
    if (requestFullScreen) {
      requestFullScreen.bind(iframe)();
    }
    window.ga('send', 'event', 'control', 'fullscreen');
  });

  document.querySelector('.seek-back').addEventListener('click', () => {
    publish('video:seekBy', [-10]);
  });

  document.querySelector('.seek-next').addEventListener('click', () => {
    publish('video:seekNextChapter');
  });

  document.querySelector('.video-play-pause').addEventListener('click', (e) => {
    if (e.currentTarget.classList.contains('playing')) {
      publish('video:pause');
    } else {
      publish('video:play');
    }
    e.currentTarget.classList.toggle('playing');
  });

  document.querySelector('dialog-trigger').addEventListener('click', () => {
    const $dialog = document.querySelector('dialog');
    const $dialogTrigger = document.querySelector('dialog-trigger');
    const $input = document.querySelector('marker-search input');
    // Is going to open dialog
    if (!$dialog.classList.contains('open')) {
      // Find active marker
      let $marker = document.querySelector('marker-list [type="chapter"].active');
      if ($marker && $marker.classList.contains('folded')) {
        // Find active chapter
        while ($marker.getAttribute('type') !== 'chapter') {
          $marker = $marker.previousElementSibling;
        }
        // Scroll to active chapter
        if ($marker !== undefined && $marker.getAttribute('start') !== '0') {
          $marker.scrollIntoView();
        }
      } else if ($marker) {
        // Scroll to active marker
        $marker.previousElementSibling.scrollIntoView();
      }
      $input.focus();
      window.ga('send', 'event', 'sidebar', 'open');
    }

    $dialog.classList.toggle('open');
    $dialogTrigger.classList.toggle('open');
  });

  document.onkeydown = (evt) => {
    evt = evt || window.event;
    if (evt.keyCode === 27) {
      const $dialog = document.querySelector('dialog');
      const $dialogTrigger = document.querySelector('dialog-trigger');
      $dialog.classList.remove('open');
      $dialogTrigger.classList.remove('open');
    }
    if (evt.keyCode === 32) {
      const $elem = document.querySelector('.video-play-pause');
      if ($elem.classList.contains('playing')) {
        publish('video:pause');
      } else publish('video:play');
    }
    if (evt.keyCode === 39) publish('video:seekBy', [5]);
    if (evt.keyCode === 37) publish('video:seekBy', [-5]);
  };

  const hidePlayerChrome = () => {
    const $dialogTrigger = document.querySelector('dialog-trigger');
    const $main = document.querySelector('main');
    const $video = document.querySelector('video-main');
    if ($video.getAttribute('camera') !== 'vr') {
      $dialogTrigger.classList.add('hidden');
      $main.classList.add('hidden');
    }
  };

  const showPlayerChrome = () => {
    const $dialogTrigger = document.querySelector('dialog-trigger');
    const $main = document.querySelector('main');
    $dialogTrigger.classList.remove('hidden');
    $main.classList.remove('hidden');
  };

  let timer;
  document.onmousemove = (e) => {
    const elem = document.elementFromPoint(e.clientX, e.clientY);
    showPlayerChrome();
    clearTimeout(timer);
    if (elem.tagName === 'VIDEO-MAIN' || elem.tagName === 'VIDEO-ALT') {
      timer = setTimeout(hidePlayerChrome, 3000);
    }
  };

  document.onmouseleave = () => {
    timer = setTimeout(hidePlayerChrome, 3000);
  };

  publish('player:loadVideo', [targetEpisode, targetLanguage]);
};
