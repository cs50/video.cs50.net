import { publish, subscribe } from 'minpubsub';
import { Fetch, Node, Bind, Draw } from '../../helpers/xs.js';

const action = {
  toggle(e) {
    e.currentTarget.classList.contains('playing') ?
      publish('video:pause') : publish('video:play');
    e.currentTarget.classList.toggle('playing');
  }
}

export default () => {
  const $container = document.createElement('play-button');

  Fetch([{}])
  .then(Node(() => `
    <button>
      <svg viewBox="0 0 1 1"><use xlink:href="#icon-play"></use></svg>
      <svg viewBox="0 0 1 1"><use xlink:href="#icon-pause"></use></svg>
    </button>
  `))
  .then(Bind('button')('click')(action.toggle))
  .then(Draw($container));

  subscribe('video:playing', () =>
    $container.querySelector('button').classList.add('playing')
  );

  subscribe('video:paused', () =>
    $container.querySelector('button').classList.remove('playing')
  );

  return $container;
}
