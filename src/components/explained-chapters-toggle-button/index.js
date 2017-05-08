import { publish, subscribe } from 'minpubsub';
import { Fetch, Node, Bind, Draw } from '../../helpers/xs.js';

const action = {
  select(e) {
      const $markers = document.querySelector('marker-list');
      const $markersExplained = document.querySelector('marker-list-explained');

      if (e.currentTarget.hasAttribute('active')) {
          e.currentTarget.removeAttribute('active');
          $markers.style.display = 'block';
          $markersExplained.style.display = 'none';
      } else {
          e.currentTarget.setAttribute('active', true);
          $markers.style.display = 'none';
          $markersExplained.style.display = 'block';
      }
  }
}

export default () => {
  const $container = document.createElement('explained-chapters-toggle-button');

  Fetch([{}])
  .then(Node(() => `
    <button>
      <svg viewBox="0 0 1 1"><use xlink:href="#icon-explained"></use></svg>
    </button>
  `))
  .then(Bind('button')('click')(action.select))
  .then(Draw($container))
  .then(console.log("Explained toggle button added!"));

  return $container;
}
