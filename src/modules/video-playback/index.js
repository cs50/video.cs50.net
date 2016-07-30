import { publish } from 'minpubsub';

export default {
  render(selector, data) {
    const container = document.querySelector('video-playback');
    const fragment = document.createDocumentFragment();
    const title = document.createElement('button');
    container.innerHTML = '';
    title.innerHTML = '<svg viewBox="0 0 1 1"><use xlink:href="#icon-speed"></use></svg>';
    const div = document.createElement('div');
    data.forEach(rate => {
      const $button = document.createElement('button');
      $button.innerHTML = rate.label;
      $button.setAttribute('rate', rate.rate);
      $button.addEventListener('click', (e) => {
        publish('video:setPlaybackRate', [rate.rate]);
        // Remove active class from other rates
        [...e.currentTarget.parentNode.children]
        .forEach(x => x.classList.remove('active'));
        // Make this rate active
        $button.classList.add('active');
      });
      div.appendChild($button);
    });
    fragment.appendChild(div);
    fragment.appendChild(title);
    container.appendChild(fragment);
  },
};
