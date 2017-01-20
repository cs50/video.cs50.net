import { publish, subscribe } from 'minpubsub';
import { Fetch, Node, Bind, Draw } from '../../helpers/xs.js';

export default () => {
  const $container = document.createElement('next-chapter-button');
  let data;

  const request = () =>
    publish('video:getCurrentTime', [':nextChapterButton']);

  const setup = (chapters) => {
    $container.querySelector('button').removeAttribute('hidden')
    data = chapters;
  }

  const select = (time) => {
    const next = data.find(x => x.start > time);
    publish('video:seekTo', [next.start]);
    window.ga('send', 'event', 'video', 'seekNext', window.location.pathname, time);
  }

  Fetch([{ hidden: true }])
  .then(Node(({hidden}) => `
    <button ${ hidden ? 'hidden' : '' }>
      <svg viewBox="0 0 1 1"><use xlink:href="#icon-next"></use></svg>
    </button>
  `))
  .then(Bind('button')('click')(request))
  .then(Draw($container));

  subscribe('chapters:loaded', setup);
  subscribe('video:currentTime:nextChapterButton', select);

  return $container;
}
