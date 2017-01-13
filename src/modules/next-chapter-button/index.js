import { publish, subscribe } from 'minpubsub';
import { Fetch, Node, Bind, Draw } from '../../helpers/xs.js';

const action = {
  select(e) { publish('video:seekNextChapter'); }
}

export default () => {
  const $container = document.createElement('next-chapter-button');

  Fetch([{ hidden: true }])
  .then(Node(({hidden}) => `
    <button ${ hidden ? 'hidden' : '' }>
      <svg viewBox="0 0 1 1"><use xlink:href="#icon-next"></use></svg>
    </button>
  `))
  .then(Bind('button')('click')(action.select))
  .then(Draw($container));

  subscribe('chapters:loaded', () =>
    $container.querySelector('button').removeAttribute('hidden')
  );

  return $container;
}
