import { publish } from 'minpubsub';
import { secondsToYoutubeTime } from './youtube.js';

const timeToSeconds = time => {
  const t = time.split(':');
  const h = parseFloat(t[0]) * 60 * 60;
  const m = parseFloat(t[1]) * 60;
  const s = parseFloat(t[2]);
  return h + m + s;
};

const chapters = obj => obj ? fetch(obj.src)
  .then(data => data.text())
  .then(text => text ? text.replace('WEBVTT\n\n', '').split('\n\n') : [])
  .then(arry => arry.map(chapter => chapter.split('\n')))
  .then(arry => arry.map(chapter => ({
    type: 'chapter',
    id: chapter[0],
    start: timeToSeconds(chapter[1].split(' --> ')[0]),
    end: timeToSeconds(chapter[1].split(' --> ')[1]),
    title: chapter[2],
  })))
  .then(chapters => {
    publish('chapters:loaded', [chapters])
    return chapters;
  }) : [];

const captions = obj => obj ? fetch(obj.src)
  .then(data => data.text())
  .then(text => text.replace(/\n\n\n/g, '\n\n'))
  .then(text => text ? text.split('\n\n') : [])
  .then(arry => arry.map(caption => caption.split('\n')))
  .then(arry => arry.filter(caption => caption[1] !== undefined))
  .then(arry => arry.map(caption => ({
    type: 'caption',
    id: caption[0],
    start: timeToSeconds(caption[1].split(' --> ')[0].replace(',', '.')),
    end: timeToSeconds(caption[1].split(' --> ')[1].replace(',', '.')),
    title: caption.slice(2)
          .join(' ')
          .replace('>> ', '')
          .replace('-', '') || '[NO SPEECH]',
  })))
  .then(captions => {
    publish('captions:loaded', [captions])
    return captions;
  }) : [];

// Extract CDN path from widow url or default
export const cdnEpisodefromUrl = () =>
  window.location.pathname === '/' ?
    window.location.pathname.replace(/\//, '/2016/fall/lectures/0'):
    window.location.pathname.replace(/\/$/, '');

// Take a screenshot of given episode at given timestamp
export const videoScreenshotFromUrl = (url, time) =>
  new Promise((resolve) => {
    // Create a video element with source and seek to time
    let video = document.createElement('video');
    video.src = url;
    video.crossOrigin = 'Anonymous';
    video.currentTime = time;
    video.muted = true;
    video.play();

    video.addEventListener('loadeddata', () => {

      // Pause the video at time
      video.pause();

      // Create canvas and draw current frame to it
      const canvas = document.createElement('canvas');
      canvas.width = 1680;
      canvas.height = 720;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Ascii to binary conversion of canvas image
      const image = canvas.toDataURL('image/jpeg');
      const data = atob(image.substring('data:image/jpeg;base64,'.length));
      const asArray = new Uint8Array(data.length);
      for (let i = 0, len = data.length; i < len; ++i) {
        asArray[i] = data.charCodeAt(i);
      }

      // Create a blob from binary array
      const f = new Blob([asArray.buffer], { type: 'application/octet-stream' });
      const a = document.createElement('a');
      window.URL = window.URL || window.webkitURL;
      a.href = window.URL.createObjectURL(f);
      a.download = `Screenshot${cdnEpisodefromUrl()}-at-${secondsToYoutubeTime(time)}.png`;
      document.body.appendChild(a);
      a.click();

      // Remove the temporary link and free video element
      document.body.removeChild(document.body.lastElementChild);
      video = null;

      // Resolve promise
      resolve();

    });
  });

export const markers = (chaptersUrl, captionsUrl) =>
  Promise.all([chapters(chaptersUrl), captions(captionsUrl)])
  .then(values => [].concat(values[0], values[1]))
  .then(items => items.sort((a, b) => {
    if (a.start > b.start) { return 1; }
    if (a.start < b.start) { return -1; }
    return 0;
  }))
  .then(markers => markers.length > 0 ?
    publish('markers:fetched', [markers]) : null
  );

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

export const explained = src => src ? fetch(src)
  .then(data => data.text())
  .then(text => text ? text.replace('WEBVTT\n\n', '').split('\n\n') : [])
  .then(arry => arry.map(explained => explained.split('\n')))
  .then(arry => arry.map(explained => ({
    title: explained[2],
    youtube: {
      main: explained[3],
      vr: explained[4],
    },
    start: timeToSeconds(explained[1].split(' --> ')[0]),
    end: timeToSeconds(explained[1].split(' --> ')[1])
   })))
  .then(data => publish('explained:fetched', [data])) : [];
