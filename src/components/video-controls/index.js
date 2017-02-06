import SeekBackButton from '../seek-back-button';
import PlayButton from '../play-button';
import NextChapterButton from '../next-chapter-button';
import ProgressTimer from '../progress-timer';
import PlaybackRates from '../playback-rates';
import CaptionsButton from '../captions-button';
import FullscreenButton from '../fullscreen-button';

const append = container => children =>
  children.forEach(child => container.appendChild(child))

export default () => {
  const $container = document.createElement('video-controls');

  append($container)([
    SeekBackButton(),
    PlayButton(),
    NextChapterButton(),
    ProgressTimer(),
    PlaybackRates(),
    CaptionsButton(),
    FullscreenButton(),
  ]);

  return $container;
}
