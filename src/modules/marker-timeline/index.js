import { subscribe, publish } from 'minpubsub';

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

      container.addEventListener('mouseover', (e) => {
        const target = document.querySelectorAll(':hover');
        const time = target[target.length - 1].getAttribute('start');
        publish('timeline:mouseover', [time, e]);
      });
      container.addEventListener('mouseleave', () => {
        publish('timeline:mouseleave');
      });

      container.appendChild(fragment);
    };
  },
};
