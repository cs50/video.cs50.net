import { publish } from 'minpubsub';
const $ = selector => document.querySelector(selector);
export default () => {

  const $favicon = document.querySelector('link[rel*="icon"]');
  $favicon.href = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAC61BMVEVMaXH////////////////////////////////////////////////////////////////////+///////9///5///4///3+vrx+Pfr7u/i4uHr7e3n5ebn6OfZ09Td2tvTx8nl3t/MvL7k2Nrj29zIsbTb09Ti2tvBpKjDq666l5u4kpfKtbjGrrK4jZK0hYysdn+nZW+lXmi7l5yfTFeeJjeXOkabNkSqaHGoVGClQVCfRFGQCRyUCByfBBqkAxqUDB+MECGHFCSaDCCgCyCjDCGZEiWVFCaeECSoDCKOGCmiESamECWcFSigFCemEieiFCiMHi+WGiuqESaRHS2kFSmtESecGSuoFCmjGCyIJTOtFCqgGi59KzerFiuYHzCkGi2TIjKRIzOcHjClGi2pGS2NJjWkHC9sNj2rGS6kHS+kHTCYIzOnHTCTJzaCLzqaJDSfIjOQKTduOUB7Mz6ZJzeLLjuTLDqiJTeZKjqGNEBsQUaTLz2aLj6ONEGfLj6ZMUB4QUmGPUebOUZ4SlCLQ0yASVGIRk6SRVCPR1F8UFaGTleVSlSTT1huYWOOU1yTUltyY2WMXGJ/YmZrbGtyaWqWWmKGYmd5am2hWmR9bW96cXKVZWtwe3l9dXaBdHWbanGEdXd5fHunZ3GScXalbHSJeXuYdHiob3eYd3uLfX97hoWTfICDhYWafYKJh4eOhYWFiomgfoOLioqSiYqMjY2XioyIkpCOkZCRkJCcjI6Nl5WUlJSOmZeXlZWek5SWl5ibnJuTop+gnJyfoaGnnp+ko6OhpqSmpqagqaecrKmjrKurqamqrq6msa+urq6wsLCstLKysrK1tbW2ubm6uLixv7y9vLy/wMDCwsLExMS/yMfGxsa7zMnHyMfLysrMzMzGz87Qz8/S0dHU09PY19fa2trc3d3f39/i4uLl5OTn5+fr6ent7Ozv7u7u8O/z7u7q9fTx8vLx/Pr4+fn1///9/Pz5//////9aOxzvAAAAPHRSTlMACQ4PFhsiMT5FUV1mbXR4fYGUmKOst7/F0dXa3OHh4uPl6uvr7fDw9Pf4+Pn5+vv7+/z8/f7+/v7+/v6Ps493AAADFklEQVQ4EQXBW2scVQDA8f+cc2ZmZy/Z2VyamKppQogoLYgNQYVeoMUHP4GP4ptfxu/QBx8E36QgtKjQhzbgBW+1a9eg2XTv2dnZ2bnPmfH3Mzj8pN8CAAAAAACCjYddhU4jEwCgAEABhQKilkaBamexR01GlXJbgjIIUqOuU1ynrUDB40N1tJ2H2K4/9kC719c9TUNOz5MmKGD0+e5b0jeaajY4/da4d3J1J/Pqrexs9oUNks79zw6KdiszKicTh+x9vCYbpSVsa9U5/rHvSTrvBNvipbscztfKZe/lytrUs2kme7uz1WnZ9QQ8OfWbnb5QuRRl/7fuWBvj8RpKkH5fGQi4F8He0CllmqN1WVCVkEZUcQQo0MdO3v6wvKJNbbktXO3c1HHzoDRaJ1GFgNFt10vbeX2rGRjH7x2/mxfrDbO2Ewdbt31Q5Hs/f5CeiYlsmvONi/PaP695Z4HXridJ+KtjoCi+E+12f2WRyfqwN0ibCc8jy45s68WjOwmKInn9zxahS4oZ+fvBuCJMNtXCYbL1OEeRafrgnOcNtNmhVfyNNL2oFePkUY4i047ToJLJclJwYevCkLbVPNAGYShSFLl/1LOxBlfX7nbQU6tdml4vf7VTkO51cxQ6fvimbQerw8bdHVGMrHXKV5t+N7Wi+JmfoSCK7dQc3D7O5DJuVUIuhbWf3ui9keoqBAHJ8npR2eUqkNNfVsPZ4o+FCi+XTlbcnCQgoZKDhrH7tG69bTWa47idCXPy+7N9LzqdRiCA8HISgoMu9ULpzA0iU0F4chkACsiD4Fp/Y8spXdNwSyE2vHxz62znS78AJEAmRXL//bxWM0Vq1KWesz//azTwABRA5Q8//WGv9ryhQr/R0Ajnp0fVuQ+ABKAw/m3HV+woGBTaS+La6psbT+cxAAYAsLl7FG0TYJFBtLz19cQHAAkAxGV+beo6LS3cBv6dr2YLAEACAKRFcPJfTZpmlYxvPbhcAABIAIAq1qOPXgjUfHb5ZLYEAEACAECcdishLsXFcB4BAIACAACCLM49opGfAwAA/wMaNpaexrEE+AAAAABJRU5ErkJggg==';

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
    $('video-main').getAttribute('camera') === 'vr' ? null :
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
  document.onmouseenter = showPlayerChrome;
}

export const draggable = function(e) {
  const h = this.offsetHeight;
  const w = this.offsetWidth;
  const t = this.offsetTop;
  const l = this.offsetLeft;
  const y = t + h - e.pageY;
  const x = l + w - e.pageX;
  const hasMoved = () => !(t === this.offsetTop && l === this.offsetLeft);
  const follow = (e) => {
    this.style.top = `${e.pageY + y - h}px`;
    this.style.left = `${e.pageX + x - w}px`;
  };
  const unfollow = (e) => {
    document.removeEventListener('mousemove', follow);
    document.removeEventListener('mouseup', unfollow);
    if (!hasMoved(e)) this.dispatchEvent(new Event('clicked', e));
    else this.dispatchEvent(new Event('moved', e));
  };
  if (x > 5 && y > 5) {
    document.addEventListener('mousemove', follow);
    document.addEventListener('mouseup', unfollow);
    e.preventDefault();
  }
};
