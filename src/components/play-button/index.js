import { publish, subscribe } from 'minpubsub';
import { Fetch, Node, Bind, Draw } from '../../helpers/xs.js';

const action = {
  toggle(e) {
    this.data.playing ? publish('video:pause') : publish('video:play');
    this.data.playing = !this.data.playing;
    e.target.classList.toggle('playing');
  }
}

export default () => {
  const $container = document.createElement('play-button');

  Fetch([{ playing: false }])
  .then(Node(({playing}) => `
    <button class='${ playing ? 'playing' : '' }'>
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
