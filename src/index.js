import 'babel-polyfill';
import 'whatwg-fetch';
import { subscribe, publish } from 'minpubsub';

import PlaybackRates from './modules/playback-rates';
import PlayButton from './modules/play-button';
import NextChapterButton from './modules/next-chapter-button';
import SeekBackButton from './modules/seek-back-button';
import CaptionsButton from './modules/captions-button';
import FullscreenButton from './modules/fullscreen-button';
import DownloadLinks from './modules/download-links';
import ProgressTimer from './modules/progress-timer';

import VideoMain from './modules/video-main';
import VideoTimeout from './modules/video-timeout';
import VideoCameras from './modules/video-cameras';
import VideoScreenshot from './modules/video-screenshot';
import MarkerSearch from './modules/marker-search';
import MarkerTimeline from './modules/marker-timeline';
import MarkerTeleprompter from './modules/marker-teleprompter';
import MarkerList from './modules/marker-list';
import LanguageSelect from './modules/language-select';
import ThumbnailPreview from './modules/thumbnail-preview';

import { markers } from './modules/marker-fetch';
import { thumbs } from './modules/thumbnail-fetch';

import { secondsToYoutubeTime,
         youTubeTimeToSeconds,
         youTubeIsReachable,
         youTubeTimeFromUrl } from './helpers/youtube.js';

import { cdnEpisodefromUrl } from './helpers/cdn.js';
const $ = selector => document.querySelector(selector);

module.exports = (() => {

  // Determine if youtube is accessible
  youTubeIsReachable()
  .catch(() => document.querySelector('video-main').classList.add('blocked'));

  // Extract the url on page load
  const targetEpisode = cdnEpisodefromUrl();
  window.history.replaceState(null, null, targetEpisode);

  // Control components
  const $controls = $('video-controls');
  $controls.appendChild(SeekBackButton())
  $controls.appendChild(PlayButton())
  $controls.appendChild(NextChapterButton())
  $controls.appendChild(ProgressTimer())
  $controls.appendChild(PlaybackRates())
  $controls.appendChild(CaptionsButton())
  $controls.appendChild(DownloadLinks())
  $controls.appendChild(FullscreenButton())

  MarkerSearch.render('marker-search');
  VideoMain.render('video-main', '');

  MarkerList.initialize();
  MarkerTeleprompter.initialize();
  MarkerTimeline.initialize();
  ThumbnailPreview.initialize();
  VideoTimeout.initialize();

  subscribe('player:loadVideo', (id, lang = 'en') => {
    // Fetch episode data from CDN based on URL
    fetch(`https://cdn.cs50.net${id}/index.json`)
    .then(data => data.json())
    .then(ep => {
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
      const screenshotSources = ep.sources.filter(x => x.label === '720p');
      // Render components based on what episode data exists
      publish('video:loadVideoById', [youtubeVideoId, youTubeTimeFromUrl()]);
      markers(chaptersFile, captionsFile);
      thumbs(thumbnailsFile);
      VideoCameras.render('video-cameras', ep.youtube);
      if(screenshotSources.length === 2) VideoScreenshot.render('video-screenshot', id);
      if (downloadLinks) publish('downloads:loaded', [downloadLinks]);
      if (captionsFile) {
        const availableLanguages = ep.captions.map(x => x.srclang);
        LanguageSelect.render('language-select', availableLanguages, lang);
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
    const chaptersFileUrl = resourceUrl(ep.chapters, lang);
    const captionsFileUrl = resourceUrl(ep.captions, lang);
    markers(chaptersFileUrl, captionsFileUrl);
    window.ga('send', 'event', 'language', 'changed', lang);
  });

  subscribe('video:seekTo', time => {
    window.history.replaceState({}, '', `?t=${secondsToYoutubeTime(time)}`);
  });

  subscribe('video:tick', time => {
    window.history.replaceState({}, '', `?t=${secondsToYoutubeTime(time)}`);
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

  document.onkeyup = (evt) => {
    evt = evt || window.event;
    if (evt.keyCode === 27) {
      const $dialog = document.querySelector('dialog');
      const $dialogTrigger = document.querySelector('dialog-trigger');
      $dialog.classList.remove('open');
      $dialogTrigger.classList.remove('open');
    }
    if (evt.keyCode === 32) {
      const $elem = document.querySelector('play-button button');
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

  publish('player:loadVideo', [targetEpisode, 'en']);
})();
