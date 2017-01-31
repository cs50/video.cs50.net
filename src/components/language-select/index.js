import { publish } from 'minpubsub';
import { Fetch, Node, Bind, Draw } from '../../helpers/xs.js';

export default (languages=[], selected) => {
  const $container = document.querySelector('language-select');
  const $select = document.createElement('select');
  $container.appendChild($select);

  const render = () => {
    $select.innerHTML = '';
    Fetch(languages)
    .then(Node(lang => `
      <option value='${lang}' ${ lang === selected ? 'selected' : '' }>${lang}</option>
    `))
    .then(Draw($select));
  };

  $select.addEventListener('change', () =>
    publish('player:changeLanguage', [$select.value])
  );

  render();
  return $container;
}
