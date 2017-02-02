import { subscribe, publish } from 'minpubsub';
import { Fetch, Node, Bind, Draw } from '../../helpers/xs.js';
import { youTubeTimeFromUrl } from '../../helpers/youtube.js';

export default () => {
  const $container = document.createElement('marker-timeline');
  const percent = (pageX) => (pageX - $container.offsetLeft) / $container.offsetWidth;

  const setProgress = (time=0, duration=0) => {
    const $progressIndicator = $container.querySelector('progress-indicator');
    if($progressIndicator) {
      const progress = (time / duration) * 100;
      $progressIndicator.style.width = `${progress}%`;
    }
  };

  const seekTo = (e) => {
    if(e.target.tagName === 'CHAPTER-') {
      publish('video:seekTo', [e.target.getAttribute('start')]);
    } else publish('video:seekToPercent', [percent(e.pageX)]);
  }

  const showThumb = (e) => {
    if(e.target.tagName !== 'CHAPTER-') {
      const $seekIndicator = $container.querySelector('seek-indicator');
      $seekIndicator.style.display = 'block';
      $seekIndicator.style.left = `${e.pageX}px`;
      publish('timeline:mouseover', [percent(e.pageX), e]);
    } else hideThumb();
  }

  const hideThumb = () => {
    const $seekIndicator = $container.querySelector('seek-indicator');
    $seekIndicator.style.display = 'none';
    publish('timeline:mouseleave');
  }

  const render = (chapters=[]) => {
    $container.innerHTML = '';
    const duration = chapters.length > 0 ? chapters[chapters.length - 1].end : 0;
    Fetch(chapters)
    .then(Node(() => `
      ${ chapters.map(x =>
        `<chapter- title="${x.title}" start="${x.start}" style="left:${(x.start/duration)*100}%"></chapter->`
      ).join('') }
      <progress-indicator></progress-indicator>
      <seek-indicator></seek-indicator>
    `))
    .then(Draw($container))
    .then(() => setProgress(youTubeTimeFromUrl(), duration));
  }

  $container.addEventListener('click', seekTo);
  $container.addEventListener('mousemove', showThumb);
  $container.addEventListener('mouseleave', hideThumb);

  subscribe('chapters:loaded', render);
  subscribe('video:tick', setProgress);

  render();
  return $container;
}
