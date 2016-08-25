import { subscribe, publish } from 'minpubsub';

const secondsToYoutubeTime = sec =>
  `${Math.floor(sec / 60)}m${Math.floor(sec % 60)}s`;

const secondsToTime = seconds => {
  const h = parseInt(seconds / 3600, 10) % 24;
  const m = parseInt(seconds / 60, 10) % 60;
  const s = Math.floor(seconds % 60);
  return h > 0 ?
    `${h < 10 ? `0${h}` : h}:${m < 10 ? `0${m}` : m}:${s < 10 ? `0${s}` : s}` :
    `${m < 10 ? `0${m}` : m}:${s < 10 ? `0${s}` : s}`;
};

const updateActiveMarker = time => {
  // Find active caption mark in timeline
  const target = [...document.querySelectorAll('marker-list mark-[type="caption"]')]
  .find(x => time < parseFloat(x.getAttribute('end')));
  if (target) {
    // Remove active class from any active caption mark
    [...document.querySelectorAll('marker-list mark-[type="caption"].active')]
    .forEach(x => x.classList.remove('active'));
    // Add active class to found marks
    target.classList.add('active');
  }
};

export default {
  initialize() {
    subscribe('markers:fetched', this.render('marker-list'));
    subscribe('video:tick', updateActiveMarker);
  },
  render(selector) {
    return data => {
      const container = document.querySelector(selector);
      const trigger = document.querySelector('dialog-trigger');
      trigger.removeAttribute('disabled');
      const frag = document.createDocumentFragment();
      const captionTemplate = mark => `
        <span>${secondsToTime(mark.start)}</span>
        <a href='?t=${secondsToYoutubeTime(mark.start)}'>${mark.title}</a>
      `;
      const chapterTemplate = mark => `
        <h1>${mark.title}</h1>
        <span>${Math.floor((mark.end - mark.start) / 60)} mins</span>
      `;
      container.innerHTML = '';
      data.forEach(mark => {
        const $marker = document.createElement('mark-');
        $marker.setAttribute('type', mark.type);
        $marker.setAttribute('start', mark.start);
        $marker.setAttribute('end', mark.end);
        $marker.innerHTML = mark.type === 'caption' ? captionTemplate(mark) : chapterTemplate(mark);
        $marker.addEventListener('click', (e) => {
          e.preventDefault();
          publish('video:seekTo', [mark.start]);
        });
        frag.appendChild($marker);
      });
      container.appendChild(frag);
    };
  },
};
