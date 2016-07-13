import YouTubePlayer from 'youtube-player';
import xml2js from 'xml2js';
import { subscribe, publish } from 'minpubsub';

const getQueryParams = qs => {
  qs = qs.split('+').join(' ');
  const params = {};
  let tokens;
  const re = /[?&]?([^=]+)=([^&]*)/g;
  while (tokens = re.exec(qs)) {
    params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
  }
  return params;
};

const secondsToYoutubeTime = sec =>
  `${Math.floor(sec / 60)}m${Math.floor(sec % 60)}s`;

const youTubeTimeToSeconds = time => {
  const mins = parseFloat(time.match(/\d+m/)[0]);
  const secs = parseFloat(time.match(/\d+s/)[0]);
  return (mins * 60) + secs;
};

export default {
  init(dest, vid) {
    const startTime = getQueryParams(document.location.search).t ?
      youTubeTimeToSeconds(getQueryParams(document.location.search).t) : 0;
    const player = YouTubePlayer(dest, {
      width: '100%',
      height: '100%',
      playerVars: {
        rel: 0,
        showinfo: 0,
      },
    });

    player.loadVideoById(vid);
    player.seekTo(startTime);
    player.playVideo();

    // Fetch video description (chapters)
    fetch(`https://www.googleapis.com/youtube/v3/videos?id=${vid}&key=AIzaSyBJB0_EuZdaddGDTyOC1oO3CXCRq9_EAiA&part=snippet`)
    .then(data => data.json())
    .then(json => json.items[0].snippet.description)
    .then(desc => `
${desc}

# Chapter Index

00:00 | Intro
00:10 | Teaser Video
02:33 | Welcome to CS50
07:01 | Binary
09:38 | Binary Bulbs
16:24 | Searching (Tearing) a Phone Book
20:36 | Computational Thinking
23:35 | Pseudocode
26:40 | Mark Zuckerberg's CS50 Lecture
29:36 | Staff Introductions
34:56 | Course Overview
42:00 | Selfie Stick Introductions
44:52 | Outro`)
    .then(desc => {
      const chapters = desc.split('\n')
      .filter(x => x.match(/\d+:\d+\s\|\s/))
      .map((x, index, arr) => ({
        id: index,
        start: x.split(' | ')[0],
        end: arr[index + 1] ? arr[index + 1].split(' | ')[0] : null,
        title: x.split(' | ')[1],
      }));
      console.log(chapters);
    });

    // Fetch video captions
    fetch(`https://video.google.com/timedtext?lang=en&v=${vid}`)
    .then(data => data.text())
    .then(text => xml2js.parseString(text, (err, res) => {
      const captions = res.transcript.text
      .filter(x => x._ !== undefined)
      .map(x => ({
        start: parseFloat(x.$.start).toFixed(2),
        dur: parseFloat(x.$.dur).toFixed(2),
        end: (parseFloat(x.$.start) + parseFloat(x.$.dur)).toFixed(2),
        caption: x._,
      }));
      console.log(captions);
    }));

    subscribe('video:seekTo', time => {
      player.seekTo(time);
      publish('video:tick', [time]);
    });

    subscribe('video:playbackSpeed', time =>
      player.setPlaybackRate(time));

    subscribe('video:seekBy', sec =>
      player.getCurrentTime()
      .then(time => player.seekTo(time - sec)));

    const tick = () => player.getCurrentTime()
      .then(time => {
        publish('video:tick', [time]);
        window.history.replaceState({}, '',
          `?t=${secondsToYoutubeTime(time)}`);
      });

    setInterval(() => player.getPlayerState()
      .then(state => ((state === 1 || state === 3) ? tick() : false))
    , 500);
  },
};
