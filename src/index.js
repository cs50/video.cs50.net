import 'whatwg-fetch';
import { subscribe, publish } from 'minpubsub';

import Episodes from '../data/episodes/index.json';
import EpisodeList from './modules/episode-list';
import VideoPlayback from './modules/video-playback';
import VideoMain from './modules/video-main';
import VideoDownload from './modules/video-download';
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

const secondsToYoutubeTime = sec =>
  `${Math.floor(sec / 60)}m${Math.floor(sec % 60)}s`;

const youTubeTimeToSeconds = time => {
  const mins = parseFloat(time.match(/\d+m/)[0]);
  const secs = parseFloat(time.match(/\d+s/)[0]);
  return (mins * 60) + secs;
};

module.exports = () => {
  // Extract the url on page load
  const targetEpisode = window.location.pathname.split('/')[2] || 0;
  const targetLanguage = window.location.pathname.split('/')[3] || 'en';
  // Modify the / url
  if (targetEpisode === 0) {
    window.history.replaceState({}, '', `/2015/${targetEpisode}/${targetLanguage}`);
  }

  EpisodeList.render('episode-list', Episodes);
  VideoPlayback.render('video-playback', [
    { rate: 0.75, label: '3/4' },
    { rate: 1, label: '1' },
    { rate: 1.5, label: '3/2' },
    { rate: 2, label: '2' },
  ]);
  MarkerSearch.render('marker-search');
  VideoMain.render('video-main', '');

  MarkerList.initialize();
  MarkerTeleprompter.initialize();
  MarkerTimeline.initialize();
  ThumbnailPreview.initialize();

  subscribe('player:loadVideo', (id, lang = 'en') => {
    const startTime = getQueryParams(document.location.search).t ?
    youTubeTimeToSeconds(getQueryParams(document.location.search).t) : 0;
    getEpisodeData('https://cdn.cs50.net/2015/fall/lectures/0/f/index.json')
    .then(ep => {
      localStorage.setItem('episode', JSON.stringify(ep));
      const chaptersFileUrl = ep.chapters.find(x => x.srclang === 'en').src.replace('http://', 'https://');
      const captionsFileUrl = ep.captions.find(x => x.srclang === 'en').src.replace('http://', 'https://');
      const thumbnailsFileUrl = ep.thumbnails.find(x => x.type === 'text/vtt').src.replace('http://', 'https://');
      const youtubeVideoId = ep.youtube.main;
      const downloadLinks = ep.downloads.filter(x => x.label.match('MP4'));
      const availableLanguages = ep.captions.map(x => x.srclang);
      markers(chaptersFileUrl, captionsFileUrl);
      thumbs(thumbnailsFileUrl);
      VideoDownload.render('video-download', downloadLinks);
      LanguageSelect.render('language-select', availableLanguages, lang);
      publish('video:loadVideoById', [youtubeVideoId, startTime]);
      window.history.replaceState({}, '', `/2015/${id}/${lang}`);
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
  });

  subscribe('video:seekTo', time => {
    window.history.replaceState({}, '', `?t=${secondsToYoutubeTime(time)}`);
  });

  subscribe('video:tick', time => {
    window.history.replaceState({}, '', `?t=${secondsToYoutubeTime(time)}`);
  });

  window.onpopstate = () => {
    publish('player:loadVideo', [window.location.pathname.split('/')[2]]);
  };

  document.querySelector('.video-captions').addEventListener('click', (e) => {
    document.querySelector('marker-teleprompter').classList.toggle('hidden');
    e.currentTarget.classList.toggle('active');
  });

  document.querySelector('.video-fullscreen').addEventListener('click', () => {
    const iframe = document.querySelector('iframe');
    const requestFullScreen = iframe.requestFullScreen || iframe.mozRequestFullScreen || iframe.webkitRequestFullScreen;
    if (requestFullScreen) {
      requestFullScreen.bind(iframe)();
    }
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
    $dialog.classList.toggle('open');
    $dialogTrigger.classList.toggle('open');
    if ($dialog.classList.contains('open')) {
      setTimeout(() => $input.focus(), 300);
    } else $input.blur();
  });

  document.onkeydown = (evt) => {
    evt = evt || window.event;
    if (evt.keyCode === 27) {
      const $dialog = document.querySelector('dialog');
      const $dialogTrigger = document.querySelector('dialog-trigger');
      $dialog.classList.remove('open');
      $dialogTrigger.classList.remove('open');
    }
  };

  let timer;
  document.onmousemove = () => {
    const $dialogTrigger = document.querySelector('dialog-trigger');
    const $main = document.querySelector('main');
    clearTimeout(timer);
    $dialogTrigger.classList.remove('hidden');
    $main.classList.remove('hidden');
    timer = setTimeout(() => {
      $dialogTrigger.classList.add('hidden');
      $main.classList.add('hidden');
    }, 3000);
  };

  publish('player:loadVideo', [targetEpisode, targetLanguage]);
};
