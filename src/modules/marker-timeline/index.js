import { subscribe, publish } from 'minpubsub';

const setProgress = (time, duration) => {
  const container = document.querySelector('marker-timeline');
  const progress = (time / duration) * 100;
  container.style['background-image'] =
    `linear-gradient(to right,
      #333 0px,
      #333 ${progress}%,
      #a41034 ${progress}%,
      #a41034 ${progress + 0.25}%,
      #333 ${progress + 0.25}%,
      #333 100%)`;
};

export default {
  initialize() {
    const container = document.querySelector('marker-timeline');
    subscribe('markers:fetched', this.render('marker-timeline'));
    subscribe('video:tick', setProgress);
    container.addEventListener('click', (e) => {
      const pos = (e.pageX - container.offsetLeft) / container.offsetWidth;
      setProgress(e.pageX - container.offsetLeft, container.offsetWidth);
      publish('video:seekToPercent', [pos]);
    });
    container.addEventListener('mousemove', (e) => {
      const pos = (e.pageX - container.offsetLeft) / container.offsetWidth;
      publish('timeline:mouseover', [pos, e]);
    });
    container.addEventListener('mouseleave', () => {
      publish('timeline:mouseleave');
    });
  },
  render(selector) {
    return (data) => {
      const container = document.querySelector(selector);
      const fragment = document.createDocumentFragment();
      const template = mark => `<span>${mark.title}</span>`;
      const length = data[data.length - 1].end;

      container.innerHTML = '';
      data.forEach(mark => {
        const pos = mark.start / length;
        if (mark.type === 'chapter') {
          document.querySelector('.seek-next').classList.remove('hidden');
          const div = document.createElement('chapter-');
          div.setAttribute('title', mark.title);
          div.addEventListener('click', (e) => {
            e.stopPropagation();
            setProgress(e.pageX - container.offsetLeft, container.offsetWidth);
            publish('video:seekTo', [mark.start + 5]);
            window.ga('send', 'event', 'chapter', 'click', mark.title, mark.start);
          });
          div.addEventListener('mousemove', (e) => {
            e.stopPropagation();
            publish('timeline:mouseleave');
          });
          div.style.left = `${pos * 100}%`;
          div.setAttribute('type', mark.type);
          div.setAttribute('start', mark.start);
          div.setAttribute('end', mark.end);
          div.innerHTML = template(mark);
          fragment.appendChild(div);
        }
      });

      container.appendChild(fragment);
    };
  },
};
