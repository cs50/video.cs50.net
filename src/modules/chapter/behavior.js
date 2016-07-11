import { publish } from 'minpubsub';

// Add class to a node and ensure that
// none of its siblings has that class
const addUniqueClass = (a, x) => {
  [...a.parentNode.childNodes]
  .map(sib => (sib.classList ? sib.classList.remove(x) : sib));
  a.classList.add(x);
};

export default {
  seekTo() {
    // Request that the video seek to start of this chapter
    publish('video:seekTo', [this.parentNode.dataset.start]);
    // Make this chapter active
    addUniqueClass(this.parentNode, 'active');
  },
  seekToPhrase() {
    // Request that the video seek to start of this phrase
    publish('video:seekTo', [this.dataset.start]);
    // Make this phrase active
    addUniqueClass(this, 'active');
  },
  seekNext() {
    // If this chapter is active and there is a next chapter
    if (this.classList.contains('active') && this.nextSibling !== null) {
      // Request that the video seek to start of next chapter
      publish('video:seekTo', [this.nextSibling.dataset.start]);
      // Make next chapter active
      addUniqueClass(this.nextSibling, 'active');
    }
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
        // Make found phrase active
        addUniqueClass(activePhrase, 'active');
      }
    }
  },
};
