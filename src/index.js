import 'babel-polyfill';
import 'whatwg-fetch';
import { subscribe, publish } from 'minpubsub';

import VideoMain from './components/video-main';
import VideoAlt from './components/video-alt';
import VideoExp from './components/video-exp';
import VideoControls from './components/video-controls';

import ScreenshotButton from './components/screenshot-button';
import ExperienceModes from './components/experience-modes';
import SidebarButton from './components/sidebar-button';
import ThumbnailPreview from './components/thumbnail-preview';
import BreakOverlay from './components/break-overlay';
import BreakToggle from './components/break-toggle';
import ExplainedChaptersToggleButton from './components/explained-chapters-toggle-button';

import MarkerSearch from './components/marker-search';
import MarkerTimeline from './components/marker-timeline';
import MarkerTeleprompter from './components/marker-teleprompter';
import DownloadLinks from './components/download-links';
import MarkerList from './components/marker-list';
import MarkerListExplained from './components/marker-list-explained';
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
  captions,
  chapters,
  markers,
  thumbs,
  explained,
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

  const $wrapper = $('.wrapper');
  $wrapper.appendChild(SidebarButton());

  const $main = $('main');
  $main.appendChild(BreakOverlay());

  const $control = $('control-bar');
  $control.appendChild(MarkerTeleprompter());
  $control.appendChild(MarkerTimeline());
  $control.appendChild(ExperienceModes());
  $control.appendChild(ScreenshotButton());
  $control.appendChild(VideoControls());
  $control.appendChild(ThumbnailPreview());

  const $dialog = $('dialog');
  $dialog.appendChild(MarkerList());
  $dialog.appendChild(MarkerListExplained());

  const $dialogRow = $('dialog row-:first-child');
  $dialogRow.appendChild(MarkerSearch());
  $dialogRow.appendChild(LanguageSelect());

  const $dialogRow2 = $('dialog row-:nth-child(2)');
  $dialogRow2.appendChild(BreakToggle());
  $dialogRow2.appendChild(ExplainedChaptersToggleButton());

  const cdnUrl = 'https://cdn.cs50.net';
  const corsAnywhere = 'https://cors-anywhere.herokuapp.com';

  subscribe('player:loadVideo', (id, lang = 'en') => {
    id = id.replace(/\/$/, '')
    const prefix = `${cdnUrl}${id}`

    // Fetch episode data from CDN based on URL
    fetch(`${prefix}/metadata.json`)
    .then((res) => {
        if (res.status !== 200) {
          return fetch(`${prefix}/index.json`);
        }

        return res;
    })
    .then(data => data.json())
    .then(ep => {
      const mainVideoId = ep.youtube && ep.youtube.main;

      // Render components based on what episode data exists
      publish('video:loadMainVideoById', [mainVideoId, youTubeTimeFromUrl()]);
      publish('youtube:fetched', [
        Object.assign({}, ep.youtube, { explained: ep.explained })
      ]);

      const idSuffix = id.split('/').pop();
      const lectureBasename = prefix.indexOf('lecture') > 0 && `lecture${idSuffix}`;

      explained(`${langPrefix}/${lang}/explained.vtt`);

      const langPrefix = `${prefix}/lang`;

      // e.g., lecture/0 => assumes lecture0.srt
      // e.g., shorts/data_types => assumes data_types.srt
      const srtFilename = `${lectureBasename || idSuffix}.srt`;

      // Fetch available languages
      // Bypass CORS policy
      fetch(
        `${corsAnywhere}/${langPrefix}`,
        {
          headers: {
            'Origin': window.location.origin
          }
        }
      )
      .then((res) => {
        if (res.status === 200) {
          return res.text();
        }
      })
      .then((html) => {
        const dom = new DOMParser().parseFromString(html, 'text/html');
        const langs = [...dom.querySelectorAll('tr[data-basename]')];
        if (langs && langs.length && langs[0].dataset.basename.startsWith('.')) {
          // Remove "../"
          langs.splice(0, 1);
        }

        publish('languages:fetched', [langs.map((l) => l.dataset.basename.replace(/\/$/, '')), lang]);
        subscribe('player:changeLanguage', (lang) => {
          Promise.all([
            chapters(`${langPrefix}/${lang}/index.vtt`),

            // Try "lectureX.srt" or fallback to "weekX.srt"
            captions(`${langPrefix}/${lang}/${srtFilename}`)
              .then((captions_) => {
                if (captions_ && captions_.length) {
                  return Promise.resolve(captions_);
                }
                else {
                  return captions(`${langPrefix}/${lang}/${srtFilename.replace('lecture', 'week')}`);
                }
              })
          ])
          .then((results) => {
            markers(results[0].concat(results[1]));
          })
        });

        // Set captions language initially
        if (lang) {
          publish('player:changeLanguage', [lang]);
        }
      })

      // Try "lecture0.vtt" or fallback to "week0.vtt"
      thumbs(`${prefix}/${lectureBasename}.vtt`).then((data) => {
        if (data && !data.length) {
            thumbs(`${prefix}/${lectureBasename.replace('lecture', 'week')}.vtt`);
        }
      })
    });
  });

  documentHelpers();

  VideoMain();
  VideoAlt();
  VideoExp();

  publish('player:loadVideo', [targetEpisode, 'en']);

})();
