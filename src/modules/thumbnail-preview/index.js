import { subscribe } from 'minpubsub';

const secondsToTime = seconds => {
  const h = parseInt(seconds / 3600, 10) % 24;
  const m = parseInt(seconds / 60, 10) % 60;
  const s = Math.floor(seconds % 60);
  return h > 0 ?
    `${h < 10 ? `0${h}` : h}:${m < 10 ? `0${m}` : m}:${s < 10 ? `0${s}` : s}` :
    `${m < 10 ? `0${m}` : m}:${s < 10 ? `0${s}` : s}`;
};

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
      const httpsThumbUrl = thumb.url.replace('http://', 'https://');
      const dimensions = httpsThumbUrl.split(',');
      const width = dimensions[dimensions.length - 2];
      const height = dimensions[dimensions.length - 1];
      container.style.opacity = 1;
      container.style.width = `${width}px`;
      container.style.height = `${height}px`;
      container.style.left = `${e.pageX - 100}px`;
      container.style.top = `${e.pageY - 130}px`;
      container.style.background = `url(${httpsThumbUrl})`;
      container.dataset.time = secondsToTime(data);
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
