import { publish, subscribe } from 'minpubsub';
import { Fetch, Node, Bind, Draw } from '../../helpers/xs.js';

const action = {
  toggle(e) {
    const $dialog = document.querySelector('dialog');
    const $input = document.querySelector('marker-search input');
    e.currentTarget.classList.toggle('open');
    $dialog.classList.toggle('open');
    $input.focus();
    window.ga('send', 'event', 'sidebar', 'open');
  }
}

export default () => {
  const $container = document.createElement('sidebar-button');

  Fetch([{ hidden: true }])
  .then(Node(({hidden}) => `
    <button ${ hidden ? 'hidden' : '' }>
      <svg viewBox="0 0 1 1"><use xlink:href="#icon-toc"></use></svg>
      <svg viewBox="0 0 1 1"><use xlink:href="#icon-forward"></use></svg>
    </button>
  `))
  .then(Bind('button')('click')(action.toggle))
  .then(Draw($container));

  subscribe('markers:fetched', () =>
    $container.querySelector('button').removeAttribute('hidden')
  );

  // subscribe('chrome:hidden', () =>
  //   $container.querySelector('button').setAttribute('hidden', true)
  // );
  //
  // subscribe('chrome:shown', () =>
  //   $container.querySelector('button').removeAttribute('hidden')
  // );

  return $container;
}
