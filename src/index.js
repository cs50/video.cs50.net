import 'whatwg-fetch';
import { subscribe, publish } from 'minpubsub';

// Import components required for app
import Chapter from './modules/chapter';
import Timeline from './modules/timeline';
import Search from './modules/search';
import Video from './modules/video';
import Playback from './modules/playback';
import Control from './modules/control';
import Download from './modules/download';

import Episodes from '../data/episodes/index.json';
import EpisodeList from './modules/episode-list';
import VideoPlayback from './modules/video-playback';
import MarkerSearch from './modules/marker-search';

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
  // Render episode-list
  // Render video-playback
  EpisodeList.render('episode-list', Episodes);
  VideoPlayback.render('video-playback', [0.75, 1, 1.5, 2, 3]);
  MarkerSearch.render('marker-search');

  subscribe('player:loadVideo', id => {
    console.log('Loading Video', id);
    // Get episode object from episodes
    // Render chapter-list
    // Render chapter-timeline
    // Render video-download
    // Update episode-list
    // Update video-player
  });

  subscribe('video:setPlaybackRate', rate => {
    console.log('Setting Video Playback Rate', rate);
  });

  // // Initialize chapter-list with the chapters JSON file
  // Chapter.init('chapter-list', '/chapters/output.json');
  // // Initialize chapter-timeline with the chapters JSON file
  // Control.init('video-controls', [{}]);
  // Download.init('video-download', [{
  //   name: 'S15E01',
  //   href: 'http://cdn.cs50.net/2015/fall/lectures/0/w/week0w-720p.mp4',
  // }]);
  // Timeline.init('chapter-timeline', '/chapters/output.json');
  // // Initialize chapter-search with target chapter-list
  // Search.init('chapter-search', [{ target: 'chapter-list' }]);
  // // Initialize video-player with youtube video ID
  // Video.init('video-main', { vid: 'zFenJJtAEzE', controls: 0 });
  // Video.init('video-support', { vid: 'BRpel-vjckA', controls: 0, mute: true });
  // // Initialize playback speed widget with no options
  // Playback.init('chapter-playback', [{}]);

  // const $aside = document.querySelector('aside');
  // let hider;
  // document.addEventListener('mousemove', () => {
  //   if (hider !== null) clearTimeout(hider);
  //   $aside.classList.remove('hidden');
  //   hider = setTimeout(() => {
  //     $aside.classList.add('hidden');
  //   }, 3000);
  // });
};
