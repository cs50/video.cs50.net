import { subscribe } from 'minpubsub';
import { Fetch, Node, Draw } from '../../helpers/xs.js';
import { secondsToHHMMSS } from '../../helpers/youtube.js';

export default () => {

  const $container = document.createElement('progress-timer');
  $container.innerHTML = '<span>00:00</span>&nbsp;/&nbsp;<span>00:00</span>';

  subscribe('video:tick', (current, duration) => {
    if (current && duration) {
      $container.innerHTML = '';
      Fetch([{current, duration}])
      .then(Node(({current, duration}) => `
        <span>${secondsToHHMMSS(current)}</span>
        &nbsp;/&nbsp;
        <span>${secondsToHHMMSS(duration)}</span>
      `))
      .then(Draw($container));
    }
  });

  return $container;
};
