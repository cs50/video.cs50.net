import { subscribe, publish } from 'minpubsub';

let $progressIndicator;
let $seekIndicator;

const setProgress = (time, duration) => {
  const progress = (time / duration) * 100;
  $progressIndicator.style.left = `${progress}%`;
};

export default {
  initialize() {
    const container = document.querySelector('marker-timeline');
    const progressIndicator = document.createElement('progress-indicator');
    const seekIndicator = document.createElement('seek-indicator');

    container.appendChild(seekIndicator);
    container.appendChild(progressIndicator);

    $progressIndicator = container.querySelector('progress-indicator');
    $seekIndicator = container.querySelector('seek-indicator');

    subscribe('markers:fetched', this.render('marker-timeline'));
    subscribe('video:tick', setProgress);
    container.addEventListener('click', (e) => {
      const pos = (e.pageX - container.offsetLeft) / container.offsetWidth;
      setProgress(e.pageX - container.offsetLeft, container.offsetWidth);
      publish('video:seekToPercent', [pos]);
    });
    container.addEventListener('mousemove', (e) => {
      const pos = (e.pageX - container.offsetLeft) / container.offsetWidth;
      $seekIndicator.style.display = 'block';
      $seekIndicator.style.left = `${e.pageX}px`;
      publish('timeline:mouseover', [pos, e]);
    });
    container.addEventListener('mouseleave', () => {
      publish('timeline:mouseleave');
      $seekIndicator.style.display = 'none';
    });
  },
  render(selector) {
    return (data) => {
      const container = document.querySelector(selector);
      const fragment = document.createDocumentFragment();
      const template = mark => `<span>${mark.title}</span>`;
      const length = data[data.length - 1].end;

      [...container.querySelectorAll('chapter-')]
      .forEach(x => container.removeChild(x));

      data.forEach(mark => {
        const pos = mark.start / length;
        if (mark.type === 'chapter') {
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
