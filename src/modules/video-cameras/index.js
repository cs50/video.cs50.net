import { publish } from 'minpubsub';

export default {
  render(selector, data) {
    const container = document.querySelector(selector);
    const fragment = document.createDocumentFragment();
    Object.keys(data).forEach(key => {
      const $button = document.createElement('button');
      $button.innerHTML = key;
      if (key === 'main') $button.classList.add('active');
      $button.addEventListener('click', (e) => {
        publish('video:swapCamera', [data[key]]);
        // Remove active class from other keys
        [...e.currentTarget.parentNode.children]
        .forEach(x => x.classList.remove('active'));
        // Make this key active
        $button.classList.add('active');
        document.querySelector('video-main').setAttribute('camera', key);
        window.ga('send', 'event', 'camera', 'swap', key);
      });
      fragment.appendChild($button);
    });
    container.appendChild(fragment);
  },
};
