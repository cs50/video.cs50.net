import { publish } from 'minpubsub';

export default {
  seekBy() {
    publish('video:seekBy', [10]);
  },
  seekNext() {
    publish('chapter:next');
  },
  filterChapters() {
    const pattern = new RegExp(this.value, 'i');
    if (this.value.length < 1) {
      [...document.querySelectorAll('chapter-')]
      .concat([...document.querySelectorAll('phrase-')])
      .map(x => ((x.classList.remove('searched')) ? x : x))
      .map(x => ((x.classList.remove('matched')) ? x : x));
    } else {
      [...document.querySelectorAll('chapter-')]
      .concat([...document.querySelectorAll('phrase-')])
      .map(x => ((x.classList.add('searched')) ? x : x))
      .map(x => ((x.classList.remove('matched')) ? x : x))
      .filter(x => x.textContent.match(pattern))
      .map(x => ((x.classList.add('matched')) ? x : x));
    }
  },
};
