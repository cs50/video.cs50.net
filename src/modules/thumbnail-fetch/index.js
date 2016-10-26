import { publish } from 'minpubsub';

const timeToSeconds = time => {
  const t = time.split(':');
  const h = parseFloat(t[0]) * 60 * 60;
  const m = parseFloat(t[1]) * 60;
  const s = parseFloat(t[2]);
  return h + m + s;
};

export const thumbs = obj => obj ? fetch(obj.src)
.then(data => data.text())
.then(text => text.replace('WEBVTT\n\n', '').split('\n\n'))
.then(arry => arry.map(thumb => thumb.split('\n')))
.then(arry => arry.map(thumb => ({
  type: 'thumb',
  start: timeToSeconds(thumb[0].split(' --> ')[0]),
  end: timeToSeconds(thumb[0].split(' --> ')[1]),
  url: thumb[1],
})))
.then(data => publish('thumbnails:fetched', [data])) : [];
