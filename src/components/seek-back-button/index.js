import { publish, subscribe } from 'minpubsub';
import { Fetch, Node, Bind, Draw } from '../../helpers/xs.js';

const action = {
  seek(e) { publish('video:seekBy', [this.data.amount]); }
}

export default () => {
  const $container = document.createElement('seek-back-button');

  Fetch([{ amount: -10 }])
  .then(Node(() => `
    <button>
      <svg viewBox="0 0 1 1"><use xlink:href="#icon-history"></use></svg>
    </button>
  `))
  .then(Bind('button')('click')(action.seek))
  .then(Draw($container));

  return $container;
}
