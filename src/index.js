import 'babel-polyfill';
import 'whatwg-fetch';
import { subscribe, publish } from 'minpubsub';

import VideoMain from './components/video-main';
import VideoAlt from './components/video-alt';
import VideoControls from './components/video-controls';

import ScreenshotButton from './components/screenshot-button';
import ExperienceModes from './components/experience-modes';
import ExplainedOverlay from './components/explained-overlay';
import SidebarButton from './components/sidebar-button';
import ThumbnailPreview from './components/thumbnail-preview';
import BreakOverlay from './components/break-overlay';
import BreakToggle from './components/break-toggle';

import MarkerSearch from './components/marker-search';
import MarkerTimeline from './components/marker-timeline';
import MarkerTeleprompter from './components/marker-teleprompter';
import DownloadLinks from './components/download-links';
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
  const queryString = document.location.search;
  const targetEpisode = cdnEpisodefromUrl();
  window.history.replaceState(null, null, targetEpisode+queryString);

  // Ensure url times stays synced with player
  subscribe('video:tick', time =>
    time > 0 ? window.history.replaceState({}, '', `?t=${secondsToYoutubeTime(time)}`) : null
  );

  const $body = $('body');
  $body.appendChild(SidebarButton());

  const $main = $('main');
  $main.appendChild(BreakOverlay());
  $main.appendChild(ExplainedOverlay());

  const $control = $('control-bar');
  $control.appendChild(MarkerTeleprompter());
  $control.appendChild(MarkerTimeline());
  $control.appendChild(ExperienceModes());
  $control.appendChild(ScreenshotButton());
  $control.appendChild(VideoControls());
  $control.appendChild(ThumbnailPreview());

  const $dialog = $('dialog');
  $dialog.appendChild(MarkerList())

  const $dialogRow = $('dialog row-:first-child');
  $dialogRow.appendChild(MarkerSearch());
  $dialogRow.appendChild(LanguageSelect());

  const $dialogRow2 = $('dialog row-:nth-child(2)');
  $dialogRow2.appendChild(BreakToggle());
  $dialogRow2.appendChild(DownloadLinks());

  subscribe('player:loadVideo', (id, lang = 'en') => {
    // Fetch episode data from CDN based on URL
    fetch(`https://cdn.cs50.net${id}/index.json`)
    .then(data => data.json())
    .then(ep => {
      localStorage.setItem('episode', JSON.stringify(ep));
      const mainVideoId = ep.youtube ? ep.youtube.main : null;
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
      publish('video:loadMainVideoById', [mainVideoId, youTubeTimeFromUrl()]);
      publish('youtube:fetched', [ep.youtube]);
      publish('explained:fetched', [[{
        title: 'This is CS50',
        youtube: {
          main: 'o4SGkB_8fFs',
          vr: 'o4SGkB_8fFs',
        },
        start: 10,
      },{
        title: 'Binary',
        youtube: {
          main: 'a8Fyf3gwvfM',
          vr: 'a8Fyf3gwvfM',
        },
        start: 30,
      }]]);
      markers(chaptersFile, captionsFile);
      thumbs(thumbnailsFile);
      if(screenshotSources.length === 2) publish('screenshots:fetched', [screenshotSources]);
      if (downloadLinks) publish('downloads:loaded', [downloadLinks]);
      if (captionsFile) {
        const availableLanguages = ep.captions.map(x => x.srclang);
        publish('languages:fetched', [availableLanguages, lang]);
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
  VideoMain();
  VideoAlt();

  publish('player:loadVideo', [targetEpisode, 'en']);

})();
