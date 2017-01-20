import { subscribe, publish } from 'minpubsub';
import { videoScreenshotFromUrl,
         cdnEpisodefromUrl } from '../../helpers/cdn.js';
import { Fetch, Node, Bind, Draw } from '../../helpers/xs.js';

const action = {
  request(e) { publish('video:getCurrentTime', [':screenshotButton']); },
  screenshot(time) {
    const $elem = document.querySelector('screenshot-button button');
    const episode = cdnEpisodefromUrl().split('/').pop();
    $elem.classList.add('working');
    videoScreenshotFromUrl(episode, time)
    .then(() => $elem.classList.remove('working'))
  }
}

export default () => {
  const $container = document.createElement('screenshot-button');
  const render = () =>
  Fetch([{}])
  .then(Node(() => `
    <button>
      <svg viewBox="0 0 1 1"><use xlink:href="#icon-screenshot"></use></svg>
      <svg viewBox="0 0 1 1"><use xlink:href="#icon-working"></use></svg>
    </button>
  `))
  .then(Bind('button')('click')(action.request))
  .then(Draw($container));

  subscribe('video:currentTime:screenshotButton', action.screenshot);
  subscribe('screenshots:fetched', render);
  return $container;
}
