import { subscribe, publish } from 'minpubsub';

export default {
  render(selector) {
    // Clear container element
    const container = document.querySelector(selector);
    const fragment = document.createDocumentFragment();
    container.innerHTML = '<svg viewBox="0 0 1 1"><use xlink:href="#icon-search"></use></svg>';
    const $input = document.createElement('input');
    $input.setAttribute('placeholder', 'Search');
    $input.addEventListener('keyup', (e) => {
      // Get all markers in document
      const $markers = document.querySelectorAll('mark-');
      const pattern = new RegExp(e.target.value, 'i');
      // Remove any highlighted text
      [...document.querySelectorAll('.matched b')]
      .forEach(x => (x.outerHTML = x.innerHTML));
      // Remove all old searched and matched
      [...$markers].forEach(x => {
        x.classList.remove('searched');
        x.classList.remove('matched');
        return x;
      });
      // If the search term was more than one character
      if (e.target.value.length > 1) {
        [...$markers].map(x => {
          x.classList.add('searched');
          x.classList.remove('matched');
          return x;
        }).filter(x => x.textContent.match(pattern))
        .forEach(x => {
          x.classList.add('matched');
          x.firstElementChild.innerHTML = x.firstElementChild.innerHTML
          .replace(pattern, `<b>${x.firstElementChild.textContent.match(pattern)}</b>`);
        });
      }
    });
    fragment.appendChild($input);
    container.appendChild(fragment);
  },
};
