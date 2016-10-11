import { publish } from 'minpubsub';

export default {
  render(selector, data) {
    const container = document.querySelector(selector);
    const fragment = document.createDocumentFragment();

    if (data.main) {
      const $ex1 = document.createElement('button');
      $ex1.innerHTML = 'EX1';
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
      $ex2.innerHTML = 'EX2';

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
      $ex3.innerHTML = 'EX3';

      $ex3.addEventListener('click', (e) => {
        publish('video:swapCamera', ['vr', data]);
        // Remove active class from other keys
        [...e.currentTarget.parentNode.children]
        .forEach(x => x.classList.remove('active'));
        $ex3.classList.add('active');
      });

      fragment.appendChild($ex3);
    }

    // Object.keys(data).forEach(key => {
    //   const $button = document.createElement('button');
    //   $button.innerHTML = key;
    //   if (key === 'main') $button.classList.add('active');
    //   $button.addEventListener('click', (e) => {
    //     publish('video:swapCamera', [data[key]]);
    //     // Remove active class from other keys
    //     [...e.currentTarget.parentNode.children]
    //     .forEach(x => x.classList.remove('active'));
    //     // Make this key active
    //     $button.classList.add('active');
    //     document.querySelector('video-main').setAttribute('camera', key);
    //     window.ga('send', 'event', 'camera', 'swap', key);
    //   });
    //   fragment.appendChild($button);
    // });
    container.appendChild(fragment);
  },
};
