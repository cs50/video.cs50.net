import { publish } from 'minpubsub';

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
    }
  },
};
