import { publish } from 'minpubsub';

const addUniqueClass = (a, x) => {
  [...a.parentNode.childNodes]
  .map(sib => (sib.classList ? sib.classList.remove(x) : sib));
  a.classList.add(x);
};

export default {
  seekToPhrase() {
    publish('video:seekTo', [this.dataset.start]);
    addUniqueClass(this, 'active');
    addUniqueClass(this.parentNode, 'active');
  },
  update(time) {
    if (this.dataset.start < time && time < this.dataset.end) {
      const activePhrase = [...this.querySelectorAll('phrase-')]
      .filter(x => x.dataset.start < time && time < x.dataset.end)[0];
      addUniqueClass(this, 'active');
      if (activePhrase) {
        addUniqueClass(activePhrase, 'active');
      }
    }
  },
};
