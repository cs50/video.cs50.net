import 'whatwg-fetch';


// Import components required for app
import Chapter from './modules/chapter';
import Timeline from './modules/timeline';
import Search from './modules/search';
import Video from './modules/video';
import Playback from './modules/playback';

/*
{
  id: 'zFenJJtAEzE',
  chapters: '/cdn/week0w/chapters/file.vtt',
  thumbs: '/cdn/week0w/thumbnails/file.vtt',
  thumbs: '/cdn/week0w/subtitles/file.vtt',
  transcript: '/cdn/week0w/transcript/file.txt',
  download: '/cdn/week0w/mp4/file.mp4'
}
*/

export default () => {
  // Initialize chapter-list with the chapters JSON file
  Chapter.init('chapter-list', '/chapters/output.json');
  // Initialize chapter-timeline with the chapters JSON file
  Timeline.init('chapter-timeline', '/chapters/output.json');
  // Initialize chapter-search with target chapter-list
  Search.init('chapter-search', [{ target: 'chapter-list' }]);
  // Initialize video-player with youtube video ID
  Video.init('video-main', { vid: 'zFenJJtAEzE', controls: 1 });
  Video.init('video-support', { vid: 'zFenJJtAEzE', controls: 0 });
  // Initialize playback speed widget with no options
  Playback.init('chapter-playback', [{}]);
};
