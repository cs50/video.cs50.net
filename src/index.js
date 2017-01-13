import 'babel-polyfill';
import 'whatwg-fetch';
import { subscribe, publish } from 'minpubsub';

// Control components
import PlaybackRates from './modules/playback-rates';
import PlayButton from './modules/play-button';
import NextChapterButton from './modules/next-chapter-button';
import SeekBackButton from './modules/seek-back-button';
import CaptionsButton from './modules/captions-button';
import FullscreenButton from './modules/fullscreen-button';
import DownloadLinks from './modules/download-links';
import ProgressTimer from './modules/progress-timer';
import SidebarButton from './modules/sidebar-button';

// Advanced components
import VideoCameras from './modules/video-cameras';
import VideoScreenshot from './modules/video-screenshot';

// Video components
import VideoMain from './modules/video-main';
import VideoTimeout from './modules/video-timeout';
import ThumbnailPreview from './modules/thumbnail-preview';

// Marker components
import MarkerSearch from './modules/marker-search';
import MarkerTimeline from './modules/marker-timeline';
import MarkerTeleprompter from './modules/marker-teleprompter';
import MarkerList from './modules/marker-list';
import LanguageSelect from './modules/language-select';

import { markers } from './modules/marker-fetch';
import { thumbs } from './modules/thumbnail-fetch';

import { secondsToYoutubeTime,
         youTubeTimeToSeconds,
         youTubeIsReachable,
         youTubeTimeFromUrl } from './helpers/youtube.js';

import { cdnEpisodefromUrl } from './helpers/cdn.js';
import documentHelpers from './helpers/document.js';

const $ = selector => document.querySelector(selector);

module.exports = (() => {

  // Determine if youtube is accessible
  youTubeIsReachable()
  .catch(() => $('video-main').classList.add('blocked'));

  // Extract the url on page load
  const targetEpisode = cdnEpisodefromUrl();
  window.history.replaceState(null, null, targetEpisode);

  // Ensure url times stays synced with player
  subscribe('video:tick', time => {
    window.history.replaceState({}, '', `?t=${secondsToYoutubeTime(time)}`);
  });

  // Control components
  const $controls = $('video-controls');
  $controls.appendChild(SeekBackButton())
  $controls.appendChild(PlayButton())
  $controls.appendChild(NextChapterButton())
  $controls.appendChild(ProgressTimer())
  $controls.appendChild(PlaybackRates())
  $controls.appendChild(CaptionsButton())
  $controls.appendChild(DownloadLinks())
  $controls.appendChild(FullscreenButton())

  const $body = $('body');
  $body.appendChild(SidebarButton());

  MarkerSearch.render('marker-search');
  VideoMain.render('video-main', '');

  MarkerList.initialize();
  MarkerTeleprompter.initialize();
  MarkerTimeline.initialize();
  ThumbnailPreview.initialize();
  VideoTimeout.initialize();

  subscribe('player:loadVideo', (id, lang = 'en') => {
    // Fetch episode data from CDN based on URL
    fetch(`https://cdn.cs50.net${id}/index.json`)
    .then(data => data.json())
    .then(ep => {
      localStorage.setItem('episode', JSON.stringify(ep));
      const youtubeVideoId = ep.youtube ? ep.youtube.main : null;
      const chaptersFile = typeof ep.chapters === 'object' ?
        ep.chapters.find(x => x.srclang === 'en') : null;
      const captionsFile = typeof ep.captions === 'object' ?
        ep.captions.find(x => x.srclang === 'en') : null;
      const thumbnailsFile = typeof ep.thumbnails === 'object' ?
        ep.thumbnails.find(x => x.type === 'text/vtt') : null;
      const downloadLinks = typeof ep.downloads === 'object' ?
        ep.downloads.filter(x => x.label.match('MP4')) : null;
      const screenshotSources = ep.sources.filter(x => x.label === '720p');
      // Render components based on what episode data exists
      publish('video:loadVideoById', [youtubeVideoId, youTubeTimeFromUrl()]);
      markers(chaptersFile, captionsFile);
      thumbs(thumbnailsFile);
      VideoCameras.render('video-cameras', ep.youtube);
      if(screenshotSources.length === 2) VideoScreenshot.render('video-screenshot', id);
      if (downloadLinks) publish('downloads:loaded', [downloadLinks]);
      if (captionsFile) {
        const availableLanguages = ep.captions.map(x => x.srclang);
        LanguageSelect.render('language-select', availableLanguages, lang);
      }
    });
  });

  subscribe('player:changeLanguage', (lang) => {
    const ep = JSON.parse(localStorage.getItem('episode'));
    const resourceUrl = (resource, y) => {
      const desiredUrl = resource.find(x => x.srclang === y);
      const defaultUrl = resource.find(x => x.srclang === 'en');
      return desiredUrl !== undefined ? desiredUrl : defaultUrl;
    };
    const chaptersFileUrl = resourceUrl(ep.chapters, lang);
    const captionsFileUrl = resourceUrl(ep.captions, lang);
    markers(chaptersFileUrl, captionsFileUrl);
    window.ga('send', 'event', 'language', 'changed', lang);
  });

  documentHelpers();
  publish('player:loadVideo', [targetEpisode, 'en']);

})();
