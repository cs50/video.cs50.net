import { publish } from 'minpubsub';

export default {
  render(selector, data) {
    const container = document.querySelector(selector);
    const fragment = document.createDocumentFragment();

    if (data.main) {
      const $ex1 = document.createElement('button');
      $ex1.innerHTML = '<svg viewBox="0 0 1 1"><use xlink:href="#icon-videocam"></use></svg>';
      $ex1.classList.add('active');

      $ex1.addEventListener('click', (e) => {
        publish('video:swapCamera', ['pr', data]);
        // Remove active class from other keys
        [...e.currentTarget.parentNode.children]
        .forEach(x => x.classList.remove('active'));
        $ex1.classList.add('active');
      });

      fragment.appendChild($ex1);
    }

    if (data.cameras && data.screens) {
      const $ex2 = document.createElement('button');
      $ex2.innerHTML = '<svg viewBox="0 0 1 1"><use xlink:href="#icon-featured-video"></use></svg>';

      $ex2.addEventListener('click', (e) => {
        publish('video:swapCamera', ['ms', data]);
        // Remove active class from other keys
        [...e.currentTarget.parentNode.children]
        .forEach(x => x.classList.remove('active'));
        $ex2.classList.add('active');
      });

      fragment.appendChild($ex2);
    }

    if (data.vr) {
      const $ex3 = document.createElement('button');
      $ex3.innerHTML = '<svg viewBox="0 0 1 1"><use xlink:href="#icon-3d"></use></svg>';

      $ex3.addEventListener('click', (e) => {
        publish('video:swapCamera', ['vr', data]);
        // Remove active class from other keys
        [...e.currentTarget.parentNode.children]
        .forEach(x => x.classList.remove('active'));
        $ex3.classList.add('active');
      });

      fragment.appendChild($ex3);
    }

    container.appendChild(fragment);
  },
};
