import { subscribe, publish } from 'minpubsub';
import { Fetch, Node, Bind, Draw } from '../../helpers/xs.js';

const actions = {
  search(e) {
    // Get all markers in document
    const $markers = document.querySelectorAll('mark-');
    const pattern = e.target.value.trim();
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
        let str = x.lastElementChild.textContent;
        if (i < a.length - 1) str += ` ${a[i + 1].lastElementChild.textContent}`;
        // Lowercase caption text to make search case insensitive
        str = str.toLowerCase();
        const io = str.indexOf(pattern);
        // There was a match in this or the next caption
        if (io !== -1) {
          // The match starts in the next caption
          if (io > x.lastElementChild.textContent.length) return false;
          // The match starts in this caption
          x.classList.add('matched');
          const matchElem = x.lastElementChild;
          const matchText = matchElem.textContent.substr(io, pattern.length);
          // Hightlight from the start of match to end of match
          matchElem.innerHTML = matchElem.innerHTML.replace(matchText, `<b>${matchText}</b>`);
          // The match ends in the next capton
          if ((io + pattern.length) > x.lastElementChild.textContent.length) {
            const nextCaption = a[i + 1];
            const overlap = (io + pattern.length) - x.lastElementChild.textContent.length - 1;
            const nextElem = nextCaption.lastElementChild;
            const overlapText = nextElem.textContent.substr(0, overlap);
            // Mark next caption as matched
            nextCaption.classList.add('matched');
            // Highlight from start of match till end of this caption
            nextElem.innerHTML = nextElem.innerHTML.replace(overlapText, `<b>${overlapText}</b>`);
          }
          return true;
        }
        // There was no match in this or the next caption
        return false;
      });
      window.ga('send', 'event', 'search', window.location.pathname, e.target.value);
    }
  }
};

export default () => {
  const $container = document.createElement('marker-search');

  Fetch([{}])
  .then(Node(() => `
    <svg viewBox="0 0 1 1"><use xlink:href="#icon-search"></use></svg>
    <input placeholder="Search Video.." />
  `))
  .then(Bind('input')('keyup')(actions.search))
  .then(Draw($container));

  return $container;
};
