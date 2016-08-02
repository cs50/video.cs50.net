import { subscribe, publish } from 'minpubsub';

const secondsToYoutubeTime = sec =>
  `${Math.floor(sec / 60)}m${Math.floor(sec % 60)}s`;

const timeToSeconds = time => {
  const t = time.split(':');
  const h = parseFloat(t[0]) * 60 * 60;
  const m = parseFloat(t[1]) * 60;
  const s = parseFloat(t[2]);
  return h + m + s;
};

const secondsToTime = seconds => {
  const h = parseInt(seconds / 3600, 10) % 24;
  const m = parseInt(seconds / 60, 10) % 60;
  const s = Math.floor(seconds % 60);
  return h > 0 ?
    `${h < 10 ? `0${h}` : h}:${m < 10 ? `0${m}` : m}:${s < 10 ? `0${s}` : s}` :
    `${m < 10 ? `0${m}` : m}:${s < 10 ? `0${s}` : s}`;
};

const chapters = url => fetch(url)
.then(data => data.text())
.then(text => text.replace('WEBVTT\n\n', '').split('\n\n'))
.then(arry => arry.map(chapter => chapter.split('\n')))
.then(arry => arry.map(chapter => ({
  type: 'chapter',
  id: chapter[0],
  start: timeToSeconds(chapter[1].split(' --> ')[0]),
  end: timeToSeconds(chapter[1].split(' --> ')[1]),
  title: chapter[2],
})));

const captions = url => fetch(url)
.then(data => data.text())
.then(text => text.split('\n\n'))
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
})));

const markers = (ep, lang) => Promise.all([chapters(ep.chapters), captions(ep.captions[lang])])
.then(values => values[0].concat(values[1]))
.then(items => items.sort((a, b) => {
  if (a.start > b.start) { return 1; }
  if (a.start < b.start) { return -1; }
  return 0;
}));

const updateActiveMarker = time => {
  // Find active caption mark in timeline
  const target = [...document.querySelectorAll('marker-list mark-[type="caption"]')]
  .find(x => time < parseFloat(x.getAttribute('end')));
  // Remove active class from any active caption mark
  [...document.querySelectorAll('marker-list mark-[type="caption"].active')]
  .forEach(x => x.classList.remove('active'));
  // Add active class to found marks
  target.classList.add('active');
};

const scrollToMarker = time => {
  // Find active caption mark in timeline
  const target = [...document.querySelectorAll('marker-list mark-[type="caption"]')]
  .find(x => time < parseFloat(x.getAttribute('end')));
  target.scrollIntoView();
  target.parentNode.scrollTop -= 50;
};

export default {
  render(selector, data, lang) {
    markers(data, lang)
    .then(marks => {
      const container = document.querySelector('marker-list');
      const frag = document.createDocumentFragment();
      const captionTemplate = mark => `<span>${secondsToTime(mark.start)}</span><a href='/2015/${data.episode}?t=${secondsToYoutubeTime(mark.start)}'>${mark.title}</a>`;
      const chapterTemplate = mark => `
        <h1>${mark.title}</h1>
        <span>${Math.floor((mark.end - mark.start) / 60)} mins</span>
      `;
      container.innerHTML = '';
      marks.forEach(mark => {
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
      subscribe('video:tick', updateActiveMarker);
      subscribe('video:seekTo', updateActiveMarker);
      subscribe('marker:scrollTo', scrollToMarker);
    });
  },
};
