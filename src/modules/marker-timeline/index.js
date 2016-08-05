import { subscribe, publish } from 'minpubsub';

const timeToSeconds = time => {
  const t = time.split(':');
  const h = parseFloat(t[0]) * 60 * 60;
  const m = parseFloat(t[1]) * 60;
  const s = parseFloat(t[2]);
  return h + m + s;
};

// const thumbnails = url => fetch(url)
// .then(data => data.text())
// .then(text => text.replace('WEBVTT\n\n', '').split('\n\n'))
// .then(arry => arry.map(thumb => thumb.split('\n')))
// .then(arry => arry.map(thumb => ({
//   type: 'thumb',
//   start: timeToSeconds(thumb[0].split(' --> ')[0]),
//   end: timeToSeconds(thumb[0].split(' --> ')[1]),
//   url: thumb[1],
// })));

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


const updateActiveMarker = time => {
  // Find active caption mark in timeline
  const $targetCaption = [...document.querySelectorAll('marker-timeline mark-[type="caption"]')]
  .find(x => time < parseFloat(x.getAttribute('end')));
  // Remove active class from any active caption mark
  [...document.querySelectorAll('marker-timeline mark-[type="caption"].active')]
  .forEach(x => x.classList.remove('active'));
  // Add active class to found marks
  $targetCaption.classList.add('active');
};

export default {
  initialize() {
    subscribe('markers:fetched', this.render('marker-timeline'));
    subscribe('video:tick', updateActiveMarker);
    subscribe('video:seekTo', updateActiveMarker);
  },
  render(selector) {
    return (data) => {
      const container = document.querySelector(selector);
      const fragment = document.createDocumentFragment();
      const template = mark => `<span>${mark.title}</span>`;
      container.innerHTML = '';
      data.forEach(mark => {
        const div = document.createElement('mark-');
        const duration = (mark.end - mark.start);
        if (mark.type === 'caption') div.style.flex = `${duration} ${duration} auto`;
        div.setAttribute('type', mark.type);
        div.setAttribute('start', mark.start);
        div.setAttribute('end', mark.end);
        div.innerHTML = template(mark);
        div.addEventListener('click', () => {
          publish('video:seekTo', [mark.start]);
        });
        fragment.appendChild(div);
      });
      container.appendChild(fragment);
    };
  },
};
