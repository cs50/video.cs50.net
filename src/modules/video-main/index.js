import YouTubePlayer from 'youtube-player';
import { subscribe, publish } from 'minpubsub';

export default {
  render(selector) {
    const container = document.querySelector(selector);
    container.innerHTML = '';
    const fragment = document.createDocumentFragment();
    const $div = document.createElement('div');
    $div.setAttribute('id', 'main-youtube-player');
    fragment.appendChild($div);
    container.appendChild(fragment);

    const player = YouTubePlayer('main-youtube-player', {
      width: '100%',
      height: '100%',
      playerVars: {
        rel: 0,
        showinfo: 0,
        controls: 0,
      },
    });

    player.addEventListener('onStateChange', e => {
      const $playButton = document.querySelector('.video-play-pause');
      if (e.data === 1) $playButton.classList.add('playing');
      if (e.data === 2) $playButton.classList.remove('playing');
    });

    const tick = () => player.getCurrentTime()
    .then(time => {
      publish('video:tick', [time]);
    });

    subscribe('video:seekBy', sec =>
      player.getCurrentTime()
      .then(time => player.seekTo(time + sec)));

    subscribe('video:seekNextChapter', () =>
    player.getCurrentTime()
    .then(time => {
      const nextChapter = [...document.querySelectorAll('mark-[type="chapter"]')]
      .find(x => x.getAttribute('start') > time);
      publish('video:seekTo', [nextChapter.getAttribute('start')]);
    }));

    subscribe('video:seekTo', time => {
      player.seekTo(time);
      publish('video:tick', [time]);
      publish('video:hideTimeout');
      player.playVideo();
    });

    subscribe('video:play', player.playVideo);
    subscribe('video:pause', player.pauseVideo);
    subscribe('video:setPlaybackRate', player.setPlaybackRate);
    subscribe('video:loadVideoById', (id, start) => {
      const mobilecheck = () => {
        let check = false;
        /*eslint-disable */
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
        /*eslint-enable */
        return check;
      };
      if (mobilecheck()) player.cueVideoById(id, start);
      else player.loadVideoById(id, start);
    });

    setInterval(() => player.getPlayerState()
    .then(state => (state === 1 ? tick() : false))
    , 1000);

    document.querySelector('video-main').addEventListener('click', () => {
      player.getPlayerState()
      .then(state => (state === 1 ? player.pauseVideo() : player.playVideo()));
    });
  },
};
