import { publish, subscribe } from 'minpubsub';
import { Fetch, Node, Bind, Draw } from '../../helpers/xs.js';

const action = {
  select(e) {
    const iframe = document.querySelector('.primary iframe');
    const requestFullScreen = iframe.requestFullScreen || iframe.mozRequestFullScreen || iframe.webkitRequestFullScreen;
    if (requestFullScreen) {
      requestFullScreen.bind(iframe)();
    }
    window.ga('send', 'event', 'control', 'fullscreen');
  }
}

export default () => {
  const $container = document.createElement('fullscreen-button');

  Fetch([{}])
  .then(Node(() => `
    <button>
      <svg viewBox="0 0 1 1"><use xlink:href="#icon-fullscreen"></use></svg>
    </button>
  `))
  .then(Bind('button')('click')(action.select))
  .then(Draw($container));

  return $container;
}
