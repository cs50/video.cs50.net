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
        }).filter((x, i, a) => {
          // Caption has already been marked as a match
          if (x.classList.contains('matched')) return true;
          // Caption string plus the next one if exists
          let str = x.textContent;
          if (i < a.length - 1) {
            str += ` ${a[i + 1].textContent}`;
          }
          // Lowercase caption text to make search case insensitive
          str = str.toLowerCase();
          const io = str.indexOf(e.target.value);
          // There was a match in this or the next caption
          if (io !== -1) {
            // The match starts in the next caption
            if (io > x.textContent.length) return false;
            // The match starts in this caption
            x.classList.add('matched');
            // Hightlight from the start of match to end of match
            x.firstElementChild.innerHTML = x.firstElementChild.innerHTML
            .replace(x.textContent.substr(io, e.target.value.length),
            `<b>${x.textContent.substr(io, e.target.value.length)}</b>`);
            // The match ends in the next capton
            if ((io + e.target.value.length) > x.textContent.length) {
              const overlap = (io + e.target.value.length) - x.textContent.length - 1;
              // Mark next caption as matched
              a[i + 1].classList.add('matched');
              // Highlight from start of match till end of this caption
              a[i + 1].firstElementChild.innerHTML = a[i + 1].firstElementChild.innerHTML
              .replace(a[i + 1].textContent.substr(0, overlap),
              `<b>${a[i + 1].textContent.substr(0, overlap)}</b>`);
            }
            return true;
          }
          // There was no match in this or the next caption
          return false;
        });
        // .forEach(x => {
        //   x.classList.add('matched');
        //   x.firstElementChild.innerHTML = x.firstElementChild.innerHTML
        //   .replace(pattern, `<b>${x.firstElementChild.textContent.match(pattern)}</b>`);
        // });
      }
    });
    fragment.appendChild($input);
    container.appendChild(fragment);
  },
};
