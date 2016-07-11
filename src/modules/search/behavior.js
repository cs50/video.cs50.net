import { publish } from 'minpubsub';

export default {
  seekBy() {
    // Reques that the video seek back 10 seconds
    publish('video:seekBy', [10]);
  },
  seekNext() {
    // Request that the next chapter is made active
    publish('chapter:next');
  },
  filterChapters() {
    // Get search term from input value
    const pattern = new RegExp(this.value, 'i');
    // If we are just trying to search for one character
    if (this.value.length < 1) {
      // Select all chapters and phrases in the dom
      // Remove class searched and matched from all
      [...document.querySelectorAll('chapter-')]
      .concat([...document.querySelectorAll('phrase-')])
      .map(x => ((x.classList.remove('searched')) ? x : x))
      .map(x => ((x.classList.remove('matched')) ? x : x));
    } else {
      // Select all chapters and phrases in the dom
      // Add class searched to every potential target node
      // Remove matched class present from any previous search
      // Filter phrases and chapters by pattern
      // Add class matched to any elements that passed through the filter
      [...document.querySelectorAll('chapter-')]
      .concat([...document.querySelectorAll('phrase-')])
      .map(x => ((x.classList.add('searched')) ? x : x))
      .map(x => ((x.classList.remove('matched')) ? x : x))
      .filter(x => x.textContent.match(pattern))
      .map(x => ((x.classList.add('matched')) ? x : x));
    }
  },
};
