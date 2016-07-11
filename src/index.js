import 'whatwg-fetch';


// Import components required for app
import Chapter from './modules/chapter';
import Timeline from './modules/timeline';
import Search from './modules/search';
import Video from './modules/video';
import Download from './modules/download';
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
  Video.init('video-player', 'zFenJJtAEzE');
  // Initialize download button with mp4 file and filename
  Download.init('chapter-download', [{
    href: 'http://cdn.cs50.net/2015/fall/lectures/0/w/week0w-720p.mp4',
    name: 'Week-0-Wednesday',
  }]);
  // Initialize playback speed widget with no options
  Playback.init('chapter-playback', [{}]);
};
