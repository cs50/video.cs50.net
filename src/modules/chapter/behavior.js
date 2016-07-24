import { publish } from 'minpubsub';

export default {
  seekTo() {
    // Request that the video seek to start of this chapter
    publish('video:seekTo', [this.parentNode.dataset.start]);
  },
  seekToPhrase() {
    // Request that the video seek to start of this phrase
    publish('video:seekTo', [this.dataset.start]);
  },
  seekNext() {
    // Find the correct active phrse for time
    const targetChapter = this.querySelector('chapter-.active').nextSibling;
    if (targetChapter) {
      publish('video:seekTo', [targetChapter.dataset.start]);
    }
  },
  updateActivePhrase(time) {
    // Find the correct active phrse for time
    const targetPhrase =
      [...this.querySelectorAll('phrase-')]
      .find(x => time < parseFloat(x.dataset.end));
    if (targetPhrase) {
      // Remove active class from all phrases
      [...this.querySelectorAll('.active')]
      .map(x => x.classList.remove('active'));
      // Add active class to target phrase
      targetPhrase.classList.add('active');
      targetPhrase.parentNode.parentNode.classList.add('active');
    }
  },
};
