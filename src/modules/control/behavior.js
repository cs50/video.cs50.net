import { publish } from 'minpubsub';

export default {
  seekBy() {
    // Reques that the video seek back 10 seconds
    publish('video:seekBy', [-10]);
  },
  seekNext() {
    // Request that the next chapter is made active
    publish('video:seekNextChapter');
  },
};
