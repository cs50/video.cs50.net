import YouTubePlayer from 'youtube-player';
import { subscribe, publish } from 'minpubsub';
import { draggable, isMobile, isIframe } from '../../helpers/document.js';

export default () => {
  const $container = document.querySelector('video-exp');
  const $wrapper = document.createElement('video-');

  // Assign random ID to wrapper
  const id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
  $wrapper.setAttribute('id', id);

  // Append wrapper element to be replaced by iframe
  $container.appendChild($wrapper);

  // Initialize player in wrapper
  const player = YouTubePlayer(id, {
    width: '100%',
    height: '100%',
    playerVars: {
      rel: 0,
      showinfo: 0,
      controls: 0,
      html5: 1,
    },
  });

  // Array of explained video meta
  var data = [];
  var currentId;
  const setup = (xs) => { data = xs; };
  const showing = () => $container.classList.contains('showing');
  const render = (time) => {

    const explained = data.find(x => time > x.start && time < x.end) || false;
    const exMode = document.body.getAttribute('experience') === 'ex';
    const IdHasChanged = explained && currentId !== explained.youtube.main;

    if((exMode && explained && !showing()) || (exMode && IdHasChanged)) {
      currentId = explained.youtube.main;
      $container.classList.add('showing');
      player.loadVideoById(currentId, time - explained.start);
      publish('video:muteMainVideo');
    } else if (!exMode || (exMode && !explained && showing())) {
      $container.classList.remove('showing');
      player.pauseVideo();
      publish('video:unmuteMainVideo');
    }

  };

  // Expose actions on video channel
  subscribe('video:play', () => showing() ? player.playVideo() : null);
  subscribe('video:pause', () => showing() ? player.pauseVideo() : null);
  subscribe('video:seekTo', time => {
    const explained = data.find(x => time > x.start && time < x.end) || false;
    if(explained && currentId === explained.youtube.main)
      player.seekTo(time - explained.start)
    else render()
  });

  subscribe('video:setPlaybackRate', player.setPlaybackRate);
  subscribe('video:tick', render);
  subscribe('explained:fetched', setup);

}
