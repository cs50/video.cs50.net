import { subscribe, publish } from 'minpubsub';

export default {
  initialize() {
    let timer;
    const $container = document.querySelector('video-timeout');
    const hideOverlay = () => {
      $container.classList.add('hidden');
      publish('video:play');
    };
    const stopTimer = () => {
      clearTimeout(timer);
    };
    const showOverlay = next => {
      let counter = 5;
      $container.innerHTML = `<section>
        <h3>Coming up Next</h3>
        <h1>${next}</h1>
        <div>
          <button class='cancel'>Pause</button>
          <button class='continue'>Continue (<span>${counter}</span>)</button>
        </div>
      </section>`;

      const $counter = $container.querySelector('span');
      const $continue = $container.querySelector('.continue');
      const $cancel = $container.querySelector('.cancel');

      $continue.addEventListener('click', hideOverlay);
      $cancel.addEventListener('click', stopTimer);

      $container.classList.remove('hidden');
      timer = setInterval(() => {
        $counter.innerHTML = counter--;
        if (counter === -1) {
          clearTimeout(timer);
          hideOverlay();
        }
      }, 1000);
      publish('video:pause');
    };
    subscribe('video:timeout', showOverlay);
    subscribe('video:hideTimeout', hideOverlay);
  },
};
