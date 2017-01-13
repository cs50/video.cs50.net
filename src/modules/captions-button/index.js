import { publish, subscribe } from 'minpubsub';
import { Fetch, Node, Bind, Draw } from '../../helpers/xs.js';

const action = {
  toggle(e) {
    document.querySelector('marker-teleprompter').classList.toggle('hidden');
    e.currentTarget.classList.toggle('active');
    if (e.currentTarget.classList.contains('active')) {
      window.ga('send', 'event', 'captions', 'enabled');
    }
  }
}

export default () => {
  const $container = document.createElement('seek-back-button');

  Fetch([{ hidden: true }])
  .then(Node(({hidden}) => `
    <button ${ hidden ? 'hidden' : '' }>
      <svg viewBox="0 0 1 1"><use xlink:href="#icon-captions"></use></svg>
    </button>
  `))
  .then(Bind('button')('click')(action.toggle))
  .then(Draw($container));

  subscribe('captions:loaded', () =>
    $container.querySelector('button').removeAttribute('hidden')
  );

  return $container;
}
