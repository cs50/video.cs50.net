import { subscribe } from 'minpubsub';
import { Fetch, Node, Draw } from '../../helpers/xs.js';

export default () => {
  const $container = document.createElement('marker-teleprompter');
  const show = () => $container.removeAttribute('hidden');
  const hide = () => $container.setAttribute('hidden', true);

  var data = [];

  const setup = (xs) => { data = xs; }
  const render = (time) => {
    if(time > 0) {
      const caption = data.find(x => time < x.end) || data[0];
      $container.innerHTML = '';
      Fetch([caption])
      .then(Node(({start, title}) => `
        <a>${title}</a>
      `))
      .then(Draw($container))
    }
  }

  subscribe('captions:loaded', setup);
  subscribe('video:tick', render);
  subscribe('captions:hide', hide);
  subscribe('captions:show', show);

  hide();
  return $container;
}
