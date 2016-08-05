import { subscribe } from 'minpubsub';

export default {
  initialize() {
    subscribe('thumbnails:fetched', data => this.collection = data);
    subscribe('timeline:mouseover', this.render('thumb-preview'));
    subscribe('timeline:mouseleave', this.hide('thumb-preview'));
  },
  render(selector) {
    return (data, e) => {
      const container = document.querySelector(selector);
      const thumb = this.collection.find(x => x.start > data);
      container.style.opacity = 1;
      container.style.left = `${e.pageX - 100}px`;
      container.style.top = `${e.pageY - 100}px`;
      container.style.background = `url(${thumb.url})`;
    };
  },
  hide(selector) {
    return () => {
      const container = document.querySelector(selector);
      container.style.opacity = '';
      container.style.left = '-200px';
    };
  },
};
