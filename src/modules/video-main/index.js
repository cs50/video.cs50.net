import YouTubePlayer from 'youtube-player';
import { subscribe, publish } from 'minpubsub';

export default {
  render(selector) {
    const container = document.querySelector(selector);
    container.innerHTML = '';
    const fragment = document.createDocumentFragment();
    const $div = document.createElement('div');
    $div.setAttribute('id', 'main-youtube-player');
    fragment.appendChild($div);
    container.appendChild(fragment);

    const player = YouTubePlayer('main-youtube-player', {
      width: '100%',
      height: '100%',
      playerVars: {
        rel: 0,
        showinfo: 0,
        controls: 0,
      },
    });

    player.addEventListener('onStateChange', e => {
      const $playButton = document.querySelector('.video-play-pause');
      if (e.data === 1) $playButton.classList.add('playing');
      if (e.data === 2) $playButton.classList.remove('playing');
    });

    const tick = () => player.getCurrentTime()
    .then(time => {
      publish('video:tick', [time]);
    });

    subscribe('video:seekBy', sec =>
      player.getCurrentTime()
      .then(time => player.seekTo(time + sec)));

    subscribe('video:seekNextChapter', () =>
    player.getCurrentTime()
    .then(time => {
      const nextChapter = [...document.querySelectorAll('mark-[type="chapter"]')]
      .find(x => x.getAttribute('start') > time);
      publish('video:seekTo', [nextChapter.getAttribute('start')]);
    }));

    subscribe('video:seekTo', time => {
      player.seekTo(time);
      publish('video:tick', [time]);
    });

    subscribe('video:play', player.playVideo);
    subscribe('video:pause', player.pauseVideo);
    subscribe('video:setPlaybackRate', player.setPlaybackRate);
    subscribe('video:loadVideoById', player.cueVideoById);

    setInterval(() => player.getPlayerState()
    .then(state => (state === 1 ? tick() : false))
    , 1000);

    document.querySelector('video-main').addEventListener('click', () => {
      player.getPlayerState()
      .then(state => (state === 1 ? player.pauseVideo() : player.playVideo()));
    });
  },
};
