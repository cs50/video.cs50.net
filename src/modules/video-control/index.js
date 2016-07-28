import { subscribe, publish } from 'minpubsub';

export default {
  render(selector, data) {
    const container = document.querySelector('video-playback');
    const fragment = document.createDocumentFragment();
    const title = document.createElement('h1');
    container.innerHTML = '';
    title.innerHTML = 'Speed';
    fragment.appendChild(title);
    data.forEach(rate => {
      const $button = document.createElement('button');
      $button.innerHTML = rate;
      $button.setAttribute('rate', rate);
      $button.addEventListener('click', (e) => {
        publish('video:setPlaybackRate', [rate]);
        // Remove active class from other rates
        [...e.currentTarget.parentNode.children]
        .forEach(x => x.classList.remove('active'));
        // Make this rate active
        $button.classList.add('active');
      });
      fragment.appendChild($button);
    });
    container.appendChild(fragment);
  },
};
