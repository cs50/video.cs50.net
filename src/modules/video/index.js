import YouTubePlayer from 'youtube-player';
import { subscribe, publish } from 'minpubsub';

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


export default {
  init(dest, vid) {
    const startTime = getQueryParams(document.location.search).t || 0;
    const player = YouTubePlayer(dest, {
      width: '100%',
      height: '100%',
      playerVars: {
        rel: 0,
        showinfo: 0,
      },
    });

    player.loadVideoById(vid);
    player.seekTo(startTime);
    player.playVideo();

    subscribe('video:seekTo', time =>
      player.seekTo(time));

    subscribe('video:playbackSpeed', time =>
      player.setPlaybackRate(time));

    subscribe('video:seekBy', sec =>
      player.getCurrentTime()
      .then(time => player.seekTo(time - sec)));

    const tick = () => player.getCurrentTime()
      .then(time => {
        publish('video:tick', [time]);
        window.history.replaceState({}, '', `?t=${Math.floor(time)}`);
      });

    setInterval(() => player.getPlayerState()
      .then(state => (state === 1 ? tick() : false))
    , 1000);
  },
};
