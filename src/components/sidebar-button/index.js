import { publish, subscribe } from 'minpubsub';
import { Fetch, Node, Bind, Draw } from '../../helpers/xs.js';

const action = {
  toggle(e) {
    document.body.classList.toggle('dialog-open');
    //window.ga('send', 'event', 'sidebar', 'open');

    if (e.currentTarget.hasAttribute('active')) {
        e.currentTarget.removeAttribute('active');
    } else {
        e.currentTarget.setAttribute('active', true);
    }
  }
}

export default () => {
  const $container = document.createElement('sidebar-button');

  Fetch([{ hidden: true }])
  .then(Node(({hidden}) => `
    <button ${ hidden ? 'hidden' : '' }>
      <svg viewBox="0 0 1 1"><use xlink:href="#icon-toc"></use></svg>
    </button>
  `))
  .then(Bind('button')('click')(action.toggle))
  .then(Draw($container));

  subscribe('markers:fetched', () =>
    $container.querySelector('button').removeAttribute('hidden')
  );

  return $container;
}
