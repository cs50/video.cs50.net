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
        controls: 1,
      },
    });

    const tick = () => player.getCurrentTime()
    .then(time => {
      publish('video:tick', [time]);
    });

    subscribe('video:seekTo', player.seekTo);
    subscribe('video:setPlaybackRate', player.setPlaybackRate);
    subscribe('video:loadVideoById', player.loadVideoById);

    setInterval(() => player.getPlayerState()
    .then(state => (state === 1 ? tick() : false))
    , 1000);
  },
};