import { publish, subscribe } from 'minpubsub';
import { Fetch, Node, Bind, Draw } from '../../helpers/xs.js';

const action = {
  toggle(e) {
    e.currentTarget.classList.toggle('active');
    if(this.data.active = !this.data.active) {
      window.ga('send', 'event', 'captions', 'enabled');
      publish('captions:show');
    } else publish('captions:hide');
  }
}

export default () => {
  const $container = document.createElement('captions-button');
  $container.setAttribute('hidden', true);

  const show = () => $container.removeAttribute('hidden');

  Fetch([{ active: false }])
  .then(Node(({active}) => `
    <button>
      <svg viewBox="0 0 1 1"><use xlink:href="#icon-captions"></use></svg>
    </button>
  `))
  .then(Bind('button')('click')(action.toggle))
  .then(Draw($container));

  subscribe('captions:loaded', show);
  return $container;
}
