import { publish } from 'minpubsub';

const addUniqueClass = (a, x) => {
  [...a.parentNode.childNodes]
  .map(sib => (sib.classList ? sib.classList.remove(x) : sib));
  a.classList.add(x);
};

export default {
  adjustSpeed() {
    publish('video:playbackSpeed', [this.dataset.speed]);
    addUniqueClass(this, 'active');
  },
};
