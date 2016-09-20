import { publish } from 'minpubsub';

export default {
  render(selector, data) {
    const container = document.querySelector('video-playback');
    const fragment = document.createDocumentFragment();
    data.forEach(rate => {
      const $button = document.createElement('button');
      $button.innerHTML = rate.label;
      if (rate.rate === 1) $button.classList.add('active');
      $button.setAttribute('rate', rate.rate);
      $button.addEventListener('click', (e) => {
        publish('video:setPlaybackRate', [rate.rate]);
        // Remove active class from other rates
        [...e.currentTarget.parentNode.children]
        .forEach(x => x.classList.remove('active'));
        // Make this rate active
        $button.classList.add('active');
        window.ga('send', 'event', 'speed', 'changed', rate.rate);
      });
      fragment.appendChild($button);
    });
    container.appendChild(fragment);
  },
};
