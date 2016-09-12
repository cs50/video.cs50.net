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
    const disableBreaks = () => {
      document.querySelector('break-toggle input').checked = false;
      hideOverlay();
    };
    const showOverlay = next => {
      let counter = 10;
      $container.innerHTML = `<section>
        <h3>Coming up Next</h3>
        <h1>${next}</h1>
        <div>
          <button class='cancel'>Pause</button>
          <button class='continue'>Continue (<span>${counter}</span>)</button>
        </div>
        <button class='continue-no-breaks'>Continue without breaks</button>
      </section>`;

      const $counter = $container.querySelector('span');
      const $continue = $container.querySelector('.continue');
      const $cancel = $container.querySelector('.cancel');
      const $continueNoBreaks = $container.querySelector('.continue-no-breaks');

      $continue.addEventListener('click', hideOverlay);
      $cancel.addEventListener('click', stopTimer);
      $continueNoBreaks.addEventListener('click', disableBreaks);

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
