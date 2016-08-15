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
import { thumbnails } from './modules/thumbnail-fetch';

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

  subscribe('player:loadVideo', (id, lang) => {
    const startTime = getQueryParams(document.location.search).t ?
    youTubeTimeToSeconds(getQueryParams(document.location.search).t) : 0;
    markers(Episodes[id], lang);
    thumbnails(Episodes[id].thumbnails);
    VideoDownload.render('video-download', Episodes[id].download);
    LanguageSelect.render('language-select', Episodes[id], lang);
    publish('video:loadVideoById', [Episodes[id].youtube.main, startTime]);
    window.history.replaceState({}, '', `/2015/${id}/${lang}`);
  });

  subscribe('player:changeLanguage', (id, lang) => {
    markers(Episodes[id], lang);
    window.history.replaceState({}, '', `/2015/${id}/${lang}`);
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

  document.querySelector('dialog-trigger').addEventListener('click', (e) => {
    const $dialog = e.currentTarget;
    const $input = document.querySelector('marker-search input');
    $dialog.classList.toggle('open');
    if (e.currentTarget.classList.contains('open')) {
      setTimeout(() => $input.focus(), 300);
    } else $input.blur();
  });

  document.onkeydown = (evt) => {
    evt = evt || window.event;
    if (evt.keyCode === 27) {
      const $dialog = document.querySelector('dialog-trigger');
      $dialog.classList.remove('open');
    }
  };

  let timer;
  const $dialogTrigger = document.querySelector('dialog-trigger');
  const $main = document.querySelector('main');
  document.onmousemove = () => {
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
