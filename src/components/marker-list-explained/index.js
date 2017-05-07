import { subscribe, publish } from 'minpubsub';
import { Fetch, Node, Draw } from '../../helpers/xs.js';
import { secondsToYoutubeTime,
         secondsToHHMMSS } from '../../helpers/youtube.js';

export default () => {
  const $container = document.createElement('marker-list-explained');
  $container.style.display = 'none';
  $container.setAttribute('role', 'tree');
  let markers = [];
  $container.addEventListener('click', (e) => {
    if(e.target && e.target.nodeName === 'A') {
      e.preventDefault();
      const $parent = e.target.parentNode.parentNode;
      if($parent.getAttribute('type') === 'chapter' && $parent.nextElementSibling.getAttribute('type') === 'caption') {
        const nextCaption = $parent.nextElementSibling.querySelector('a');
        publish('video:seekTo', [nextCaption.getAttribute('start')]);
      } else {
        publish('video:seekTo', [e.target.getAttribute('start')]);
      }
    }
    if(e.target && e.target.nodeName === 'BUTTON') {
      const id = e.target.parentNode.getAttribute('chapter');
      [...$container.querySelectorAll(`mark-[chapter="${id}"]`)]
        .forEach(x => x.classList.toggle('folded'));
    }
  });

  const highlight = (time) => {
    const activeMarkIndex = markers.findIndex(x => x.type === 'caption' && time < x.end);
    if(activeMarkIndex > -1) {
      [...$container.querySelectorAll('mark-.active')]
      .forEach(x => x.classList.remove('active'));
      const mark = $container.querySelector(`mark-:nth-child(${activeMarkIndex})`);
      mark.classList.add('active');
    }
  }

  const render = (data=[]) => {
    markers = data;
    const hasCaptions = !!markers.find(x => x.type === 'caption');
    if(hasCaptions) $container.setAttribute('captions', true);
    let chapter = 0;
    $container.innerHTML = '';
    Fetch(markers)
    .then(Node(({type, start, end, title}) => type === 'chapter' ?
      `<mark- type='explained' chapter='${++chapter}' class='folded' role='treeitem'>
        <button>
          <svg><use xlink:href='#icon-left-arrow' /></svg>
          <svg><use xlink:href='#icon-down-arrow' /></svg>
        </button>
       </mark->` :
      `<mark- type='explained' chapter='${chapter}' class='folded'>
        <div>
          <a start='${start}' href='?t=${secondsToYoutubeTime(start)}'>${title}</a>
          <span>${secondsToHHMMSS(start)}</span>
        </div>
       </mark->`
    ))
    .then(Draw($container));
  }

  subscribe('explained:fetched', render);
  subscribe('video:tick', highlight);
  return $container;
}
