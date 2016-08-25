import { publish } from 'minpubsub';

const timeToSeconds = time => {
  const t = time.split(':');
  const h = parseFloat(t[0]) * 60 * 60;
  const m = parseFloat(t[1]) * 60;
  const s = parseFloat(t[2]);
  return h + m + s;
};

export const thumbs = url => fetch(url)
.then(data => data.text())
.then(text => text.replace('WEBVTT\n\n', '').split('\n\n'))
.then(arry => arry.map(thumb => thumb.split('\n')))
.then(arry => arry.map(thumb => ({
  type: 'thumb',
  start: timeToSeconds(thumb[0].split(' --> ')[0]),
  end: timeToSeconds(thumb[0].split(' --> ')[1]),
  url: thumb[1],
})))
.then(data => publish('thumbnails:fetched', [data]));


// thumbnails(data.thumbnails)
// .then(thumbs => {
//   const container = document.querySelector('marker-timeline');
//   const preview = document.querySelector('thumb-preview');
//   container.addEventListener('mouseover', (e) => {
//     const target = document.querySelectorAll(':hover');
//     const time = target[target.length - 1].getAttribute('start');
//     const thumb = thumbs.find(x => x.start > time);
//     preview.style.opacity = 1;
//     preview.style.left = `${e.pageX - 100}px`;
//     preview.style.top = `${e.pageY - 100}px`;
//     preview.style.background = `url(${thumb.url})`;
//   });
//   container.addEventListener('mouseout', () => {
//     preview.style.opacity = '';
//     preview.style.left = '-200px';
//   });
// });
