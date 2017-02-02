import { subscribe } from 'minpubsub';
import { secondsToHHMMSS } from '../../helpers/youtube.js';

export default () => {
  const $container = document.createElement('thumb-preview');
  let collection = [];

  const hide = (selector) => {
    $container.style.left = '-1000px';
  };

  const render = (data, e) => {
    if (collection.length > 0) {
      data = data * collection[collection.length - 1].end;
      const thumb = collection.find(x => x.start > data);
      const dimensions = thumb.url.split(',');
      const width = dimensions[2];
      const height = dimensions[3];
      const top = dimensions[1];
      $container.style.bottom = '4rem';
      $container.style.width = `${width}px`;
      $container.style.height = `${height}px`;
      $container.style.left = `${e.pageX - 100}px`;
      $container.style.background = `#121212 url(${thumb.url})`;
      $container.style.backgroundPosition = `0 ${top}px`;
      $container.dataset.time = secondsToHHMMSS(data);
    }
  };

  subscribe('thumbnails:fetched', data => collection = data);
  subscribe('timeline:mouseover', render);
  subscribe('timeline:mouseleave', hide);

  return $container;
}
