import YouTubePlayer from 'youtube-player';
import { subscribe, publish } from 'minpubsub';
import { draggable, isMobile, isIframe } from '../../helpers/document.js';

export default () => {
  const $container = document.querySelector('video-main');
  const $wrapper = document.createElement('video-');

  // Assign random ID to wrapper
  const id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
  $wrapper.setAttribute('id', id);

  // Append wrapper element to be replaced by iframe
  $container.appendChild($wrapper);

  // Activate dragging if not primary video
  $container.addEventListener('mousedown', (e) => {
    if(!$container.classList.contains('primary')) {
      draggable.apply($container, [e]);
    } else $container.dispatchEvent(new Event('clicked', e));
  });

  // Add click handler to $container::after element
  $container.addEventListener('clicked', () => {
    if($container.classList.contains('primary')) {
      player.getPlayerState().then(
        state => state === 1 ? publish('video:pause') : publish('video:play')
      );
    } else {
      $container.nextElementSibling.style.left = $container.style.left;
      $container.nextElementSibling.style.top = $container.style.top;
      $container.nextElementSibling.classList.remove('primary');
      $container.style.top = null;
      $container.style.left = null;
      $container.style.width = null;
      $container.classList.add('primary');
    }
  });

  // Initialize player in wrapper
  const player = YouTubePlayer(id, {
    width: '100%',
    height: '100%',
    playerVars: {
      rel: 0,
      showinfo: 0,
      controls: 0,
      html5: 1,
      playsinline: 1,
    },
  });

  // Emit state if player is interacted with directly
  player.addEventListener('onStateChange', e => {
    if (e.data === 1) publish('video:playing');
    if (e.data === 2) publish('video:paused');
  });

  // Poll the player for current state
  const tick = () => Promise.all([
    player.getCurrentTime(),
    player.getDuration(),
    player.getPlayerState(),
  ]).then(data =>
    publish('video:tick', [data[0], data[1], data[2]])
  );

  setInterval(tick, 1000);

  // Expose actions on video channel
  subscribe('video:play', player.playVideo);
  subscribe('video:pause', player.pauseVideo);
  subscribe('video:toggleMute', () =>
    player.isMuted().then(muted =>
      muted ? player.unMute() : player.mute()
    )
  );
  subscribe('video:setPlaybackRate', player.setPlaybackRate);
  subscribe('video:seekTo', (time) =>
    player.seekTo(time) && setTimeout(tick, 100)
  );
  subscribe('video:volumeTo', (percent) =>
    player.setVolume(percent)
  );

  // Proxy volumeBy to offset currentVolume by percent
  subscribe('video:volumeBy', percent =>
    player.getVolume().then(volume =>
      publish('video:volumeTo', [volume + percent])
    )
  );

  // Proxy seekTo to offset currentTime by seconds
  subscribe('video:seekBy', sec =>
    player.getCurrentTime().then(time =>
      publish('video:seekTo', [time + sec])
    )
  );

  // Proxy seekTo to calculate percentage of duration
  subscribe('video:seekToPercent', percent =>
    player.getDuration().then(duration =>
      publish('video:seekTo', [duration * percent])
    )
  );

  // Load video from start time or queue if on mobile
  subscribe('video:loadMainVideoById', (id, start=0) => {
    if (isMobile() || isIframe()) {
      player.cueVideoById(id, start);
    } else player.loadVideoById(id, start);
  });

  // Respond to any requests for the players current time
  subscribe('video:getCurrentTime', (requester) =>
    player.getCurrentTime().then(
      time => publish(`video:currentTime${requester}`, [time])
    )
  );

  subscribe('video:fullscreen', () => {
    const iframe = document.querySelector('.primary iframe');
    const requestFullScreen = iframe.requestFullScreen || iframe.mozRequestFullScreen || iframe.webkitRequestFullScreen;
    if (requestFullScreen) {
      requestFullScreen.bind(iframe)();
    }
    window.ga('send', 'event', 'control', 'fullscreen');
  });

}
