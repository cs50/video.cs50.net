const $ = selector => document.querySelector(selector);
export default () => {

  // Keyboard shortcuts

  document.onkeyup = (evt) => {
    evt = evt || window.event;
    if (evt.keyCode === 27) {
      const $dialog = $('dialog');
      const $dialogTrigger = $('sidebar-button button');
      $dialog.classList.remove('open');
      $dialogTrigger.classList.remove('open');
    }
    if (evt.keyCode === 32) {
      const $elem = $('play-button button');
      if ($elem.classList.contains('playing')) publish('video:pause');
      else publish('video:play');
    }
    if (evt.keyCode === 39) publish('video:seekBy', [5]);
    if (evt.keyCode === 37) publish('video:seekBy', [-5]);
  };

  // Idle mouse listener

  const hidePlayerChrome = () =>
    document.body.classList.add('mouse-idle');
  const showPlayerChrome = () =>
    document.body.classList.remove('mouse-idle');

  let timer;
  document.onmousemove = (e) => {
    const elem = document.elementFromPoint(e.clientX, e.clientY);
    showPlayerChrome();
    clearTimeout(timer);
    if (elem.tagName === 'VIDEO-MAIN' || elem.tagName === 'VIDEO-ALT') {
      timer = setTimeout(hidePlayerChrome, 3000);
    }
  };
  document.onmouseleave = () => {
    timer = setTimeout(hidePlayerChrome, 3000);
  };

}
