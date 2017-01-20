import { subscribe, publish } from 'minpubsub';
import { Fetch, Node, Draw } from '../../helpers/xs.js';
import { secondsToYoutubeTime,
         secondsToHHMMSS } from '../../helpers/youtube.js';

export default () => {
  const $container = document.createElement('marker-list');
  $container.addEventListener('click', (e) => {
    if(e.target && e.target.nodeName === 'A') {
      e.preventDefault();
      publish('video:seekTo', [e.target.getAttribute('start')]);
    }
    if(e.target && e.target.nodeName === 'BUTTON') {
      const id = e.target.parentNode.getAttribute('chapter');
      [...$container.querySelectorAll(`mark-[chapter="${id}"]`)]
        .forEach(x => x.getAttribute('folded') ?
          x.removeAttribute('folded') :
          x.setAttribute('folded', true)
        );
    }
  });

  const render = (data=[]) => {
    const hasCaptions = !!data.find(x => x.type === 'caption');
    if(hasCaptions) $container.setAttribute('captions', true);
    let chapter = 0;
    $container.innerHTML = '';
    Fetch(data)
    .then(Node(({type, start, end, title}) => type === 'chapter' ?
      `<mark- type='${type}' chapter='${++chapter}' folded='true' >
        <div>
          <a start='${start}' href='?t=${secondsToYoutubeTime(start)}'>${title}</a>
          <span>${Math.ceil((end - start) / 60)} mins</span>
        </div>
        <button>
          <svg><use xlink:href='#icon-left-arrow' /></svg>
          <svg><use xlink:href='#icon-down-arrow' /></svg>
        </button>
       </mark->` :
      `<mark- type='${type}' chapter='${chapter}' folded='true'>
        <span>${secondsToHHMMSS(start)}</span>
        <a start='${start}' href='?t=${secondsToYoutubeTime(start)}'>${title}</a>
       </mark->`
    ))
    .then(Draw($container));
  }

  subscribe('markers:fetched', render);
  return $container;
}
