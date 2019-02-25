import { subscribe, publish } from 'minpubsub';
import BreakToggle from '../break-toggle';

export default () => {
  let timer;
  let data = [];
  const $container = document.createElement('break-overlay');
  $container.setAttribute('hidden', true);
  $container.setAttribute('role', 'dialog');

  const hideOverlay = () => {
    //window.ga('send', 'event', 'break', 'continued');
    $container.setAttribute('hidden', true);
    $container.classList.remove('stopped');
    publish('video:play');
  };

  const stopTimer = () => {
    //window.ga('send', 'event', 'break', 'taken');
    $container.classList.add('stopped');
    clearTimeout(timer);
  };

  const disableBreaks = () => {
    //window.ga('send', 'event', 'break', 'disabled');
    document.querySelector('break-toggle input').checked = false;
    hideOverlay();
  };

  const setup = (chapters) => {
    data = chapters;
  }

  const check = (time) => {
    const next = data.find(x => x.start - 1 === Math.floor(time));
    if (next && document.body.getAttribute('breaks') === 'true') {
      data = data.filter(x => x.start - 1 !== Math.floor(time));
      showOverlay(next);
    }
  }

  const showOverlay = ({title}) => {
    $container.innerHTML = `
    <section>
      <h3>Next Chapter</h3>
      <h1>${title}</h1>
      <div>
        <button class='cancel'>
          <svg viewBox="0 0 1 1"><use xlink:href="#icon-pause"></use></svg>
        </button>
        <button class='continue'>Continue Watching</button>
      </div>
    </section>`;

    $container.querySelector('section').appendChild(BreakToggle());

    const $continue = $container.querySelector('.continue');
    const $cancel = $container.querySelector('.cancel');
    const $title = $container.querySelector('h1');

    $continue.addEventListener('click', hideOverlay);
    $cancel.addEventListener('click', stopTimer);

    $container.removeAttribute('hidden');
    timer = setTimeout(hideOverlay, 10000);
    publish('video:pause');

    $cancel.focus();
  };

  subscribe('chapters:loaded', setup);
  subscribe('video:tick', check);
  return $container;
};
