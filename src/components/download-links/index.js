import { subscribe } from 'minpubsub';
import { Fetch, Node, Bind, Draw } from '../../helpers/xs.js';

const action = {
  select(e) {
    window.ga('send', 'event', 'download', window.location.pathname, this.data.label);
  }
}

export default () => {

  const $container = document.createElement('download-links');
  $container.innerHTML = `
    <button>
      <svg viewBox="0 0 1 1"><use xlink:href="#icon-download"></use></svg>
    </button>
    <div></div>
  `;

  $container.addEventListener('click', () => {
    $container.classList.toggle('open');
  });

  subscribe('downloads:loaded', (data) => {
    Fetch(data)
    .then(Node(({ label, src }) => `
      <a href='${ src }' download>
        ${ label.replace('MP4 (', '').replace(')', '') }
      </a>
    `))
    .then(Bind('a')('click')(action.select))
    .then(Draw($container.querySelector('div')));
  });

  return $container;
}
