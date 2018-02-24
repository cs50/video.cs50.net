import YouTubePlayer from 'youtube-player';
import { subscribe, publish } from 'minpubsub';
import { draggable, isMobile, isIframe } from '../../helpers/document.js';

export default (targetEpisode) => {
  const $container = document.querySelector('video-alt');
  const $wrapper = document.createElement('video-');
  const $resize = document.createElement('resize-');

  // Assign random ID to wrapper
  const id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
  $wrapper.setAttribute('id', id);

  // Append wrapper element to be replaced by iframe
  $container.appendChild($wrapper);
  $container.appendChild($resize);

  // Add wide to class so that we know how to properly resize in document helpers
  // Also start off the component with the right dimensions
  if (targetEpisode.includes('web') || targetEpisode.includes('mobile') ||
    targetEpisode.includes('games')) {
      // Starting width and height for VideoAlt when it instantiates
      let width = 300;
      let height = width * 9/16;

      $container.className += ' wide';
      $container.style.width = `${width}px`;
      $container.style.height = `${height}px`;
  }

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
      $container.previousElementSibling.style.left = $container.style.left;
      $container.previousElementSibling.style.top = $container.style.top;
      $container.previousElementSibling.style.width = $container.style.width;

      if ($container.classList.contains('wide')) {
        $container.previousElementSibling.style.height = $container.style.height;
      }

      $container.style.top = null;
      $container.style.left = null;

      if ($container.classList.contains('wide')) {
        $container.style.width = '100%';
        $container.style.height = '100%';
      } else {
        $container.style.width = null;
      }
      
      $container.previousElementSibling.classList.remove('primary');
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

  // Mute support video, use audio from main
  player.mute();

  $container.style.left = '2rem';
  $container.style.top = '2rem';

  // Expose actions on video channel
  subscribe('video:play', player.playVideo);
  subscribe('video:pause', player.pauseVideo);
  subscribe('video:setPlaybackRate', player.setPlaybackRate);
  subscribe('video:seekTo', player.seekTo);
  subscribe('video:hideAltVideo', () => {
    player.pauseVideo();
    $container.previousElementSibling.classList.add('primary');
    $container.classList.remove('primary');
    $container.previousElementSibling.style.left = null;
    $container.previousElementSibling.style.top = null;
    $container.previousElementSibling.style.width = null;
  });

  // Load video from start time by ID or queue if on mobile
  subscribe('video:loadAltVideoById', (id, start=0) =>
    player.loadVideoById(id, start)
  );
}
