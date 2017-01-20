import { subscribe } from 'minpubsub';
import { secondsToHHMMSS } from '../../helpers/youtube.js';

export default {
  initialize() {
    subscribe('thumbnails:fetched', data => this.collection = data);
    subscribe('timeline:mouseover', this.render('thumb-preview'));
    subscribe('timeline:mouseleave', this.hide('thumb-preview'));
  },
  render(selector) {
    return (data, e) => {
      if (this.collection) {
        data = data * this.collection[this.collection.length - 1].end;
        const container = document.querySelector(selector);
        const thumb = this.collection.find(x => x.start > data);
        const dimensions = thumb.url.split(',');
        const width = dimensions[2];
        const height = dimensions[3];
        const top = dimensions[1];

        container.style.position = 'absolute';
        container.style.bottom = '4rem';
        container.style.opacity = 1;
        container.style.width = `${width}px`;
        container.style.height = `${height}px`;
        container.style.left = `${e.pageX - 100}px`;
        container.style.background = `#121212 url(${thumb.url})`;
        container.style.backgroundPosition = `0 ${top}px`;
        container.dataset.time = secondsToHHMMSS(data);
      }
    };
  },
  hide(selector) {
    return () => {
      const container = document.querySelector(selector);
      container.style.opacity = '';
      container.style.left = '-1000px';
    };
  },
};
