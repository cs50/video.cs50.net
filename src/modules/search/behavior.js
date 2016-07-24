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

    // Remove all highlights
    [...document.querySelectorAll('.matched b')]
    .forEach(x => (x.outerHTML = x.innerHTML));
    // Remove all searched classes
    [...document.querySelectorAll('.searched')]
    .forEach(x => x.classList.remove('searched'));
    // Remove all matched classes
    [...document.querySelectorAll('.matched')]
    .forEach(x => x.classList.remove('matched'));

    if (this.value.length > 1) {
      // Select all chapters in the dom
      // Add class searched to all chapters
      // Filter by data-title
      // Add matched class to matched nodes
      [...document.querySelectorAll('chapter-')]
      .map(x => (x.classList.add('searched') ? x : x))
      .filter(x => x.dataset.title.match(pattern))
      .map(x => (x.classList.add('matched') ? x : x));
      // Select all phrases in the dom
      // Add class searched to all phrases
      // Filter by text-content
      // Add matched class to matched nodes
      // Add matched class to the containing chapter
      // Wrap matched text in tag to highlight
      [...document.querySelectorAll('phrase-')]
      .map(x => (x.classList.add('searched') ? x : x))
      .filter(x => x.textContent.match(pattern))
      .map(x => (x.classList.add('matched') ? x : x))
      .map(x => (x.parentNode.parentNode.classList.add('matched') ? x : x))
      .map(x => {
        x.innerHTML = x.innerHTML
        .replace(pattern, `<b>${x.textContent.match(pattern)}</b>`);
        return x;
      });
    }
  },
};
