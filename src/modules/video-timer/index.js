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
    const $container = document.querySelector('video-timer');
    $container.innerHTML = '<span>0:00</span>&nbsp;/&nbsp;<span>0:00</span>';
    subscribe('video:tick', (current, duration) => {
      if (current && duration) {
        $container.innerHTML = `<span>${secondsToTime(current)}</span>&nbsp;/&nbsp;<span>${secondsToTime(duration)}</span>`;
      }
    });
  },
};
