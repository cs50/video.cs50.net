import 'whatwg-fetch';
import { subscribe, publish } from 'minpubsub';

import Episodes from '../data/episodes/index.json';
import EpisodeList from './modules/episode-list';
import VideoPlayback from './modules/video-playback';
import VideoMain from './modules/video-main';
import VideoDownload from './modules/video-download';
import MarkerSearch from './modules/marker-search';
import MarkerTimeline from './modules/marker-timeline';
import MarkerList from './modules/marker-list';
import VideoControls from './modules/control';

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

export default () => {
  // Extract the url on page load
  const targetEpisode = window.location.pathname.split('/')[2] || 0;
  // Modify the / url
  if (targetEpisode === 0) {
    window.history.replaceState({}, '', '/2015/0');
  }

  EpisodeList.render('episode-list', Episodes);
  VideoPlayback.render('video-playback', [
    { rate: 0.75, label: '3/4' },
    { rate: 1, label: '1' },
    { rate: 1.5, label: '3/2' },
    { rate: 2, label: '2' },
    { rate: 3, label: '3' },
  ]);
  MarkerSearch.render('marker-search');
  VideoMain.render('video-main', '');
  VideoControls.init('video-controls', [{}]);
  VideoControls.init('video-controls.mobile', [{}]);

  subscribe('player:loadVideo', id => {
    const startTime = getQueryParams(document.location.search).t ?
    youTubeTimeToSeconds(getQueryParams(document.location.search).t) : 0;
    VideoDownload.render('video-download', Episodes[id].download);
    MarkerTimeline.render('marker-timeline', Episodes[id]);
    MarkerList.render('marker-list', Episodes[id]);
    publish('video:loadVideoById', [Episodes[id].youtube.main, startTime]);
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

  publish('player:loadVideo', [targetEpisode]);
};
