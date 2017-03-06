import { subscribe, publish } from 'minpubsub';
import { Fetch, Node, Bind, Draw } from '../../helpers/xs.js';

export default () => {
  const $container = document.createElement('explained-overlay');
  const show = () => $container.removeAttribute('hidden');
  const hide = () => $container.setAttribute('hidden', true);


  const actions = {
    load(e) {
      publish('video:pause')
    },
  }

  var data = [];

  const setup = (xs) => { data = xs; }
  const render = (time) => {
    const caption = data.find(x => Math.abs(time - x.start) < 5) || null;
    if(caption && $container.getAttribute('hidden') === 'true') {
      show();
      $container.innerHTML = '';
      Fetch([caption])
      .then(Node(({start, title, youtube}) => `
        <title->
          <img src='https://img.youtube.com/vi/${youtube.main}/sddefault.jpg' />
          <a href='https://youtube.com/watch/${youtube.main}' target='_blank' data-url='${youtube.main}'>${title} Explained</a>
        </title->
        <a href='https://youtube.com/watch/${youtube.vr}' target='_blank'>
          <button>
            <svg viewBox="0 0 1 1"><use xlink:href="#icon-vr"></use></svg>
          </button>
        </a>
      `))
      .then(Bind('a')('click')(actions.load))
      .then(Bind('button')('click')(actions.load))
      .then(Draw($container))
    } else if(!caption) hide();
  }

  subscribe('explained:fetched', setup);
  subscribe('video:tick', render);

  hide();
  return $container;
}
