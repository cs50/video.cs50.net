import { publish } from 'minpubsub';
const $ = selector => document.querySelector(selector);
export default () => {

  const $favicon = document.querySelector('link[rel*="icon"]');
  $favicon.href = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAC61BMVEVMaXH////////////////////////////////////////////////////////////////////+///////9///5///4///3+vrx+Pfr7u/i4uHr7e3n5ebn6OfZ09Td2tvTx8nl3t/MvL7k2Nrj29zIsbTb09Ti2tvBpKjDq666l5u4kpfKtbjGrrK4jZK0hYysdn+nZW+lXmi7l5yfTFeeJjeXOkabNkSqaHGoVGClQVCfRFGQCRyUCByfBBqkAxqUDB+MECGHFCSaDCCgCyCjDCGZEiWVFCaeECSoDCKOGCmiESamECWcFSigFCemEieiFCiMHi+WGiuqESaRHS2kFSmtESecGSuoFCmjGCyIJTOtFCqgGi59KzerFiuYHzCkGi2TIjKRIzOcHjClGi2pGS2NJjWkHC9sNj2rGS6kHS+kHTCYIzOnHTCTJzaCLzqaJDSfIjOQKTduOUB7Mz6ZJzeLLjuTLDqiJTeZKjqGNEBsQUaTLz2aLj6ONEGfLj6ZMUB4QUmGPUebOUZ4SlCLQ0yASVGIRk6SRVCPR1F8UFaGTleVSlSTT1huYWOOU1yTUltyY2WMXGJ/YmZrbGtyaWqWWmKGYmd5am2hWmR9bW96cXKVZWtwe3l9dXaBdHWbanGEdXd5fHunZ3GScXalbHSJeXuYdHiob3eYd3uLfX97hoWTfICDhYWafYKJh4eOhYWFiomgfoOLioqSiYqMjY2XioyIkpCOkZCRkJCcjI6Nl5WUlJSOmZeXlZWek5SWl5ibnJuTop+gnJyfoaGnnp+ko6OhpqSmpqagqaecrKmjrKurqamqrq6msa+urq6wsLCstLKysrK1tbW2ubm6uLixv7y9vLy/wMDCwsLExMS/yMfGxsa7zMnHyMfLysrMzMzGz87Qz8/S0dHU09PY19fa2trc3d3f39/i4uLl5OTn5+fr6ent7Ozv7u7u8O/z7u7q9fTx8vLx/Pr4+fn1///9/Pz5//////9aOxzvAAAAPHRSTlMACQ4PFhsiMT5FUV1mbXR4fYGUmKOst7/F0dXa3OHh4uPl6uvr7fDw9Pf4+Pn5+vv7+/z8/f7+/v7+/v6Ps493AAADFklEQVQ4EQXBW2scVQDA8f+cc2ZmZy/Z2VyamKppQogoLYgNQYVeoMUHP4GP4ptfxu/QBx8E36QgtKjQhzbgBW+1a9eg2XTv2dnZ2bnPmfH3Mzj8pN8CAAAAAACCjYddhU4jEwCgAEABhQKilkaBamexR01GlXJbgjIIUqOuU1ynrUDB40N1tJ2H2K4/9kC719c9TUNOz5MmKGD0+e5b0jeaajY4/da4d3J1J/Pqrexs9oUNks79zw6KdiszKicTh+x9vCYbpSVsa9U5/rHvSTrvBNvipbscztfKZe/lytrUs2kme7uz1WnZ9QQ8OfWbnb5QuRRl/7fuWBvj8RpKkH5fGQi4F8He0CllmqN1WVCVkEZUcQQo0MdO3v6wvKJNbbktXO3c1HHzoDRaJ1GFgNFt10vbeX2rGRjH7x2/mxfrDbO2Ewdbt31Q5Hs/f5CeiYlsmvONi/PaP695Z4HXridJ+KtjoCi+E+12f2WRyfqwN0ibCc8jy45s68WjOwmKInn9zxahS4oZ+fvBuCJMNtXCYbL1OEeRafrgnOcNtNmhVfyNNL2oFePkUY4i047ToJLJclJwYevCkLbVPNAGYShSFLl/1LOxBlfX7nbQU6tdml4vf7VTkO51cxQ6fvimbQerw8bdHVGMrHXKV5t+N7Wi+JmfoSCK7dQc3D7O5DJuVUIuhbWf3ui9keoqBAHJ8npR2eUqkNNfVsPZ4o+FCi+XTlbcnCQgoZKDhrH7tG69bTWa47idCXPy+7N9LzqdRiCA8HISgoMu9ULpzA0iU0F4chkACsiD4Fp/Y8spXdNwSyE2vHxz62znS78AJEAmRXL//bxWM0Vq1KWesz//azTwABRA5Q8//WGv9ryhQr/R0Ajnp0fVuQ+ABKAw/m3HV+woGBTaS+La6psbT+cxAAYAsLl7FG0TYJFBtLz19cQHAAkAxGV+beo6LS3cBv6dr2YLAEACAKRFcPJfTZpmlYxvPbhcAABIAIAq1qOPXgjUfHb5ZLYEAEACAECcdishLsXFcB4BAIACAACCLM49opGfAwAA/wMaNpaexrEE+AAAAABJRU5ErkJggg==';

  // Keyboard shortcuts

  document.onkeyup = (evt) => {
    evt = evt || window.event;
    switch (evt.keyCode) {
      case 32:
      case 75:
        const $elem = $('play-button button');
        if ($elem.classList.contains('playing')) publish('video:pause');
        else publish('video:play');
      break;
      case 9: isTabbing(); break;
      case 27: document.body.classList.remove('dialog-open'); break;
      case 70: publish('video:fullscreen'); break;
      case 39: publish('video:seekBy', [5]); break;
      case 37: publish('video:seekBy', [-5]); break;
      case 38: publish('video:volumeBy', [5]); break;
      case 40: publish('video:volumeBy', [-5]); break;
      case 77: publish('video:toggleMute'); break;
      case 67: publish('captions:toggle'); break;
      }
    }

    // Idle mouse listener
    const hidePlayerChrome = () =>
      document.body.getAttribute('experience') === 'vr' || document.body.classList.contains('is-tabbing')
      ? null : document.body.classList.add('mouse-idle');
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

};

let tabTimer;
const isTabbing = function () {
  let a = document.activeElement;
  const els = [];
  while (a) {
    els.unshift(a);
    a = a.parentNode;
  }
  const isDialogElement = els.filter(x => x.tagName === 'DIALOG').length;
  if(isDialogElement) document.body.classList.add('dialog-open');
  if(tabTimer) clearTimeout(tabTimer);
  document.body.classList.add('is-tabbing');
  document.body.classList.remove('mouse-idle');
  tabTimer = setTimeout(_ => {
    document.body.classList.add('mouse-idle');
    document.body.classList.remove('is-tabbing');
    document.body.classList.remove('dialog-open');
  }, 3000);
}

export const draggable = function(e) {
  // Elements initial width and height
  const h = this.offsetHeight;
  const w = this.offsetWidth;
  // Elements original position
  const t = this.offsetTop;
  const l = this.offsetLeft;
  // Click position within element
  const y = t + h - e.pageY;
  const x = l + w - e.pageX;

  const hasMoved = () =>
    !(t === this.offsetTop && l === this.offsetLeft);

  const hasResized = () =>
    !(w === this.offsetWidth && h === this.offsetHeight);

  const follow = (e) => {
    // Set top/left of element according to mouse position
    this.style.top = `${e.pageY + y - h}px`;
    this.style.left = `${e.pageX + x - w}px`;
  }

  const resize = (e) => {
    // Set width/height of element according to mouse position
    const size = e.pageX - l + x;
    const min = 150;

    this.style.width = `${size > min ? size : min}px`;
    //this.style.height = `${(e.pageY - t + y)}px`;
  }

  const unresize = (e) => {
    // Remove listeners that were bound to document
    document.removeEventListener('mousemove', resize);
    document.removeEventListener("mouseup", unresize);
    // Emit events according to interaction
    if (hasResized(e)) this.dispatchEvent(new Event('resized'));
    else this.dispatchEvent(new Event('clicked'));
    e.preventDefault();
  }

  const unfollow = (e) => {
    // Remove listeners that were bound to document
    document.removeEventListener('mousemove', follow);
    document.removeEventListener("mouseup", unfollow);
    // Emit events according to interaction
    if (hasMoved(e)) this.dispatchEvent(new Event('moved'));
    else this.dispatchEvent(new Event('clicked'));
    e.preventDefault();
  }

  // Add follow listener if not resizing
  if (x > 23 && y > 23) {
    document.addEventListener("mousemove", follow);
    document.addEventListener("mouseup", unfollow);
    e.preventDefault();
  } else {
    document.addEventListener("mousemove", resize);
    document.addEventListener("mouseup", unresize);
    e.preventDefault();
  }
}

export const isMobile = () => {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

export const isIframe = () => {
  try {
    return window.self !== window.top;
  } catch (e) { return true; }
};
