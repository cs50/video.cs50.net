import { publish } from 'minpubsub';

// Add class to a node and ensure that
// none of its siblings has that class
const addUniqueClass = (a, x) => {
  [...a.parentNode.childNodes]
  .map(sib => (sib.classList ? sib.classList.remove(x) : sib));
  a.classList.add(x);
};

export default {
  adjustSpeed() {
    // Request that the video adjust its playback speed
    publish('video:playbackSpeed', [this.dataset.speed]);
    // Make this playback speed button active
    addUniqueClass(this, 'active');
  },
};
