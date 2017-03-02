import { publish, subscribe } from 'minpubsub';
import { Fetch, Node, Bind, Draw } from '../../helpers/xs.js';

const action = {
  select(e) {
    publish('video:fullscreen');
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
