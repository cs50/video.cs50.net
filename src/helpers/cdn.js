import { publish } from 'minpubsub';
import { secondsToYoutubeTime } from './youtube.js';

const timeToSeconds = time => {
  const t = time.split(':');
  const h = parseFloat(t[0]) * 60 * 60;
  const m = parseFloat(t[1]) * 60;
  const s = parseFloat(t[2]);
  return h + m + s;
};

async function fetchAndParseVTT(url, ev, mapCallback=((l)=>{})) {
  const res = await fetch(url);
  if (res.status !== 200) {
    return [];
  }

  const items = (await res.text())
    .replace('WEBVTT\n\n', '')
    .split('\n\n')
    .map(i => i.split('\n'))
    .map(l => mapCallback(l));

  if (ev) {
    publish(ev, [items]);
  }

  return items;
}

export const chapters = (url) => {
  return fetchAndParseVTT(url, 'chapters:loaded', (chapter) => {
    if (chapter[0].match(' --> ')) {
      return {
        type: 'chapter',
        start: timeToSeconds(chapter[0].split(' --> ')[0]),
        end: timeToSeconds(chapter[0].split(' --> ')[1]),
        title: chapter[1],
      };
    }

    return {
      type: 'chapter',
      id: chapter[0],
      start: timeToSeconds(chapter[1].split(' --> ')[0]),
      end: timeToSeconds(chapter[1].split(' --> ')[1]),
      title: chapter[2],
    };
  })
};

export const captions = async (url, ev='captions:loaded') => {
  const res = await fetch(url);
  if (res.status !== 200) {
    return [];
  }

  const captions_ = (await res.text())
    .replace(/\n\n\n/g, '\n\n')
    .split('\n\n')
    .map(caption => caption.split('\n'))
    .filter(caption => caption[1] !== undefined)
    .map(caption => ({
      type: 'caption',
      id: caption[0],
      start: timeToSeconds(caption[1].split(' --> ')[0].replace(',', '.')),
      end: timeToSeconds(caption[1].split(' --> ')[1].replace(',', '.')),
      title: caption.slice(2)
            .join(' ')
            .replace('>> ', '')
            .replace('-', '') || '[NO SPEECH]',
    }));

  publish(ev, [captions_]);
  return captions_;
}

const expCaptions = (url) => captions(url, 'exp:captions:loaded');

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
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

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

export const markers = (items) => {
  if (items.length) {
    items.sort((a, b) => {
      if (a.start > b.start) {
        return 1;
      }
      else if (a.start < b.start) {
        return -1;
      }

      return 0;
    });

    publish('markers:fetched', [items]);
    return items;
  }

  return null;
}

export const thumbs = (url) => {
  return fetchAndParseVTT(url, 'thumbnails:fetched', (t) => ({
    type: 'thumb',
    start: timeToSeconds(t[0].split(' --> ')[0]),
    end: timeToSeconds(t[0].split(' --> ')[1]),
    url: t[1],
  }));
}

export const explained = (url) => {
  return fetchAndParseVTT(url, 'explained:fetched', (l) => ({
    title: explained[2],
    youtube: {
      main: explained[3],
    },
    captions: explained[4],
    start: timeToSeconds(explained[1].split(' --> ')[0]),
    end: timeToSeconds(explained[1].split(' --> ')[1])
  }));
}
