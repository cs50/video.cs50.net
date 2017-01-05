import { subscribe } from 'minpubsub';

const screenshotVideo = (src, time) => new Promise((resolve) => {
  // Create a video element with source and seek to time
  let video = document.createElement('video');
  video.src = src;
  video.crossOrigin = 'Anonymous';
  video.currentTime = time;
  video.play().then(() => {
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
    a.download = 'screenshot.png';
    document.body.appendChild(a);
    a.click();

    // Remove the temporary link and free video element
    document.body.removeChild(document.body.lastElementChild);
    video = null;
    resolve();
  });
});

export default {
  render(selector, id) {
    const episode = id.split('/').pop();
    const $container = document.querySelector(selector);
    const $button = document.createElement('button');
    $button.innerHTML = `
      <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 3L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.17L15 3H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M12 17l1.25-2.75L16 13l-2.75-1.25L12 9l-1.25 2.75L8 13l2.75 1.25z"/>
      </svg>
      <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
      </svg>
    `;

    let currentTime;
    subscribe('video:tick', (time) => {
      currentTime = time;
    });

    $button.addEventListener('click', () => {
      const video = document.querySelector('main .primary');
      const mode = document.querySelector('video-main').getAttribute('camera');
      let url;
      if (mode === 'ms') {
        const src = video.tagName === 'VIDEO-MAIN' ? 'a' : 'b';
        url = `https://cdn.cs50.net/2016/fall/lectures/${episode}/week${episode}-${src}-720p.mp4`;
      } else {
        url = `https://cdn.cs50.net/2016/fall/lectures/${episode}/week${episode}-720p.mp4`;
      }
      $container.classList.add('working');
      screenshotVideo(url, currentTime)
        .then(() => $container.classList.remove('working'));
    });

    $container.appendChild($button);
  },
};
