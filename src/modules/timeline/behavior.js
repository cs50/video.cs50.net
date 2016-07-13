import { publish } from 'minpubsub';

// Add class to a node and ensure that
// none of its siblings has that class
const addUniqueClass = (a, x) => {
  [...a.parentNode.childNodes]
  .map(sib => (sib.classList ? sib.classList.remove(x) : sib));
  a.classList.add(x);
};

export default {
  seekToPhrase() {
    // Request that the video seek to start of this phrase
    publish('video:seekTo', [this.dataset.start]);
    // Remove active class from all other phrases
    [...document.querySelectorAll('chapter-timeline phrase-.active')]
    .map(x => x.classList.remove('active'));
    // Make this phrase active
    this.classList.add('active');
  },
  update(time) {
    // If the current video time is within the start and end time of this chapter
    if (this.dataset.start < time && time < this.dataset.end) {
      // Make this chapter active
      addUniqueClass(this, 'active');
      // Look for a potential phrase to make active
      const activePhrase = [...this.querySelectorAll('phrase-')]
      .filter(x => x.dataset.start < time && time < x.dataset.end)[0];
      // If the current video time is within the start and end time of a phrase
      if (activePhrase) {
        // Remove active class from all other phrases
        [...document.querySelectorAll('chapter-timeline phrase-')]
        .map(x => x.classList.remove('active'));
        // Make found phrase active
        addUniqueClass(activePhrase, 'active');
      }
    }
  },
};
