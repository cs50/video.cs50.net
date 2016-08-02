import { subscribe, publish } from 'minpubsub';

export default {
  render(selector, data, active) {
    const container = document.querySelector('language-select');
    const fragment = document.createDocumentFragment();
    container.innerHTML = '';
    const $select = document.createElement('select');
    $select.addEventListener('change', () => {
      publish('player:changeLanguage', [data.episode, $select.value]);
    });
    Object.keys(data.captions).forEach(lang => {
      const $option = document.createElement('option');
      $option.innerHTML = lang;
      if (lang === active) $option.selected = true;
      $option.setAttribute('value', lang);
      $select.appendChild($option);
    });
    fragment.appendChild($select);
    container.appendChild(fragment);
  },
};
