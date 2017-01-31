import { publish, subscribe } from 'minpubsub';
import { Fetch, Node, Bind, Draw } from '../../helpers/xs.js';

export default () => {
  const $container = document.createElement('language-select');
  const $select = document.createElement('select');
  $container.appendChild($select);

  const render = (languages=[], selected) => {
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

  subscribe('languages:fetched', render);
  return $container;
}
