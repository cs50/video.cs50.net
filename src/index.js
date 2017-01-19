import 'babel-polyfill';
import 'whatwg-fetch';
import { subscribe, publish } from 'minpubsub';

import VideoMain from './components/video-main';
import VideoControls from './components/video-controls';

import ScreenshotButton from './components/screenshot-button';
import ExperienceModes from './components/experience-modes';
import SidebarButton from './components/sidebar-button';
import ThumbnailPreview from './components/thumbnail-preview';
import BreakOverlay from './components/break-overlay';

import MarkerSearch from './components/marker-search';
import MarkerTimeline from './components/marker-timeline';
import MarkerTeleprompter from './components/marker-teleprompter';
import MarkerList from './components/marker-list';
import LanguageSelect from './components/language-select';

import documentHelpers from './helpers/document.js';
import {
  secondsToYoutubeTime,
  youTubeTimeToSeconds,
  youTubeIsReachable,
  youTubeTimeFromUrl,
} from './helpers/youtube.js';

import {
  cdnEpisodefromUrl,
  markers,
  thumbs,
} from './helpers/cdn.js';


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

  // Body Components
  const $body = $('body');
  $body.appendChild(SidebarButton())
  const $main = $('main');
  $main.appendChild(BreakOverlay())
  // Control components
  const $control = $('control-bar');
  $control.appendChild(MarkerTeleprompter())
  $control.appendChild(ExperienceModes())
  $control.appendChild(ScreenshotButton())
  $control.appendChild(VideoControls());

  MarkerSearch.render('marker-search');
  VideoMain.render('video-main', '');

  MarkerList.initialize();
  MarkerTimeline.initialize();
  ThumbnailPreview.initialize();

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
      publish('youtube:fetched', [ep.youtube]);
      markers(chaptersFile, captionsFile);
      thumbs(thumbnailsFile);
      if(screenshotSources.length === 2) publish('screenshots:fetched', [screenshotSources]);
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
