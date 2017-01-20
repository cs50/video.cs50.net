import { subscribe, publish } from 'minpubsub';

export default () => {
  let timer;
  let data = [];
  const $container = document.createElement('break-overlay');
  $container.setAttribute('hidden', true);

  const hideOverlay = () => {
    window.ga('send', 'event', 'break', 'continued');
    $container.setAttribute('hidden', true);
    publish('video:play');
  };

  const stopTimer = () => {
    window.ga('send', 'event', 'break', 'taken');
    clearTimeout(timer);
  };

  const disableBreaks = () => {
    window.ga('send', 'event', 'break', 'disabled');
    document.querySelector('break-toggle input').checked = false;
    hideOverlay();
  };

  const setup = (chapters) => {
    data = chapters;
  }

  const check = (time) => {
    const next = data.find(x => x.start - 1 === Math.floor(time));
    if (next) {
      data = data.filter(x => x.start - 1 !== Math.floor(time));
      showOverlay(next);
    }
  }

  const showOverlay = ({title}) => {
    publish('video:pause');

    let counter = 9;
    $container.innerHTML = `<section>
      <h3>Next Chapter</h3>
      <h1>${title}</h1>
      <div>
        <button class='cancel'>
          <svg viewBox="0 0 1 1"><use xlink:href="#icon-pause"></use></svg>
        </button>
        <button class='continue'>
          Continue Watching &nbsp;(<span>${counter}</span>)
        </button>
      </div>
      <break-toggle>
        <label>
          <input type="checkbox" checked />
          <span>Breaks between chapters</span>
        </label>
      </break-toggle>
    </section>`;

    const $counter = $container.querySelector('span');
    const $continue = $container.querySelector('.continue');
    const $cancel = $container.querySelector('.cancel');
    //const $continueNoBreaks = $container.querySelector('.continue-no-breaks');

    $continue.addEventListener('click', hideOverlay);
    $cancel.addEventListener('click', stopTimer);
    //$continueNoBreaks.addEventListener('click', disableBreaks);

    $container.removeAttribute('hidden');
    timer = setInterval(() => {
      $counter.innerHTML = counter--;
      if (counter === -1) {
        clearTimeout(timer);
        hideOverlay();
      }
    }, 1000);
  };

  subscribe('chapters:loaded', setup);
  subscribe('video:tick', check);
  return $container;
};
