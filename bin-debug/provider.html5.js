/*!
JW Player version 8.2.0
Copyright (c) 2018, JW Player, All Rights Reserved 
https://github.com/jwplayer/jwplayer/blob/v8.2.0/README.md

This source code and its use and distribution is subject to the terms and conditions of the applicable license agreement. 
https://www.jwplayer.com/tos/

This product includes portions of other software. For the full text of licenses, see below:

JW Player Third Party Software Notices and/or Additional Terms and Conditions

**************************************************************************************************
The following software is used under Apache License 2.0
**************************************************************************************************

vtt.js v0.13.0
Copyright (c) 2018 Mozilla (http://mozilla.org)
https://github.com/mozilla/vtt.js/blob/v0.13.0/LICENSE

* * *

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.

You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and
limitations under the License.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

**************************************************************************************************
The following software is used under MIT license
**************************************************************************************************

Underscore.js v1.6.0
Copyright (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative
https://github.com/jashkenas/underscore/blob/1.6.0/LICENSE

Backbone backbone.events.js v1.1.2
Copyright (c) 2010-2014 Jeremy Ashkenas, DocumentCloud
https://github.com/jashkenas/backbone/blob/1.1.2/LICENSE

Promise Polyfill v7.1.0
Copyright (c) 2014 Taylor Hakes and Forbes Lindesay
https://github.com/taylorhakes/promise-polyfill/blob/v7.1.0/LICENSE

can-autoplay.js v3.0.0
Copyright (c) 2017 video-dev
https://github.com/video-dev/can-autoplay/blob/v3.0.0/LICENSE

* * *

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

**************************************************************************************************
The following software is used under W3C license
**************************************************************************************************

Intersection Observer v0.5.0
Copyright (c) 2016 Google Inc. (http://google.com)
https://github.com/w3c/IntersectionObserver/blob/v0.5.0/LICENSE.md

* * *

W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE
Status: This license takes effect 13 May, 2015.

This work is being provided by the copyright holders under the following license.

License
By obtaining and/or copying this work, you (the licensee) agree that you have read, understood, and will comply with the following terms and conditions.

Permission to copy, modify, and distribute this work, with or without modification, for any purpose and without fee or royalty is hereby granted, provided that you include the following on ALL copies of the work or portions thereof, including modifications:

The full text of this NOTICE in a location viewable to users of the redistributed or derivative work.

Any pre-existing intellectual property disclaimers, notices, or terms and conditions. If none exist, the W3C Software and Document Short Notice should be included.

Notice of any changes or modifications, through a copyright statement on the new code or document such as "This software or document includes material copied from or derived from [title and URI of the W3C document]. Copyright © [YEAR] W3C® (MIT, ERCIM, Keio, Beihang)."

Disclaimers
THIS WORK IS PROVIDED "AS IS," AND COPYRIGHT HOLDERS MAKE NO REPRESENTATIONS OR WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY OR FITNESS FOR ANY PARTICULAR PURPOSE OR THAT THE USE OF THE SOFTWARE OR DOCUMENT WILL NOT INFRINGE ANY THIRD PARTY PATENTS, COPYRIGHTS, TRADEMARKS OR OTHER RIGHTS.

COPYRIGHT HOLDERS WILL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF ANY USE OF THE SOFTWARE OR DOCUMENT.

The name and trademarks of copyright holders may NOT be used in advertising or publicity pertaining to the work without specific, written prior permission. Title to copyright in this work will at all times remain with copyright holders.
*/
webpackJsonpjwplayer([6],{

/***/ 176:
/*!*************************************!*\
  !*** ./src/js/utils/time-ranges.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = endOfRange;
function endOfRange(timeRanges) {
    if (!timeRanges || !timeRanges.length) {
        return 0;
    }

    return timeRanges.end(timeRanges.length - 1);
}

/***/ }),

/***/ 177:
/*!*********************************************!*\
  !*** ./src/js/providers/data-normalizer.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.qualityLevel = qualityLevel;
function qualityLevel(level) {
    return {
        bitrate: level.bitrate,
        label: level.label,
        width: level.width,
        height: level.height
    };
}

/***/ }),

/***/ 178:
/*!**************************************************!*\
  !*** ./src/js/providers/video-listener-mixin.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _events = __webpack_require__(/*! events/events */ 5);

var _helpers = __webpack_require__(/*! utils/helpers */ 6);

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This will trigger the events required by jwplayer model to
//  properly follow the state of the video tag
//
// Assumptions
//  1. All functions are bound to the "this" of the provider
//  2. The provider has an attribute "video" which is the video tag

var VideoListenerMixin = {
    canplay: function canplay() {
        this.trigger(_events.MEDIA_BUFFER_FULL);
    },
    play: function play() {
        this.stallTime = -1;
        if (!this.video.paused && this.state !== _events.STATE_PLAYING) {
            this.setState(_events.STATE_LOADING);
        }
    },
    loadedmetadata: function loadedmetadata() {
        var metadata = {
            duration: this.getDuration(),
            height: this.video.videoHeight,
            width: this.video.videoWidth
        };
        var drmUsed = this.drmUsed;
        if (drmUsed) {
            metadata.drm = drmUsed;
        }
        this.trigger(_events.MEDIA_META, metadata);
    },
    timeupdate: function timeupdate() {
        var height = this.video.videoHeight;
        if (height !== this._helperLastVideoHeight) {
            if (this.adaptation) {
                this.adaptation({
                    size: {
                        width: this.video.videoWidth,
                        height: height
                    }
                });
            }
        }
        this._helperLastVideoHeight = height;

        var position = this.getCurrentTime();
        var duration = this.getDuration();
        if (isNaN(duration)) {
            return;
        }

        if (!this.seeking && !this.video.paused && (this.state === _events.STATE_STALLED || this.state === _events.STATE_LOADING) && this.stallTime !== this.getCurrentTime()) {
            this.stallTime = -1;
            this.setState(_events.STATE_PLAYING);
        }

        var timeEventObject = {
            position: position,
            duration: duration,
            currentTime: this.video.currentTime,
            metadata: {
                currentTime: this.video.currentTime
            }
        };
        if (this.getPtsOffset) {
            var ptsOffset = this.getPtsOffset();
            if (ptsOffset >= 0) {
                timeEventObject.metadata.mpegts = ptsOffset + position;
            }
        }

        // only emit time events when playing or seeking
        if (this.state === _events.STATE_PLAYING || this.seeking) {
            this.trigger(_events.MEDIA_TIME, timeEventObject);
        }
    },
    click: function click(evt) {
        this.trigger(_events.CLICK, evt);
    },
    volumechange: function volumechange() {
        var video = this.video;

        this.trigger(_events.MEDIA_VOLUME, {
            volume: Math.round(video.volume * 100)
        });

        this.trigger(_events.MEDIA_MUTE, {
            mute: video.muted
        });
    },
    seeked: function seeked() {
        if (!this.seeking) {
            return;
        }
        this.seeking = false;
        this.trigger(_events.MEDIA_SEEKED);
    },
    playing: function playing() {
        // When stalling, STATE_PLAYING is only set on timeupdate
        // because Safari and Firefox will fire "playing" before playback recovers from stalling
        if (this.stallTime === -1) {
            // Here setting STATE_PLAYING ensures a quick recovery from STATE_LOADING after seeking
            this.setState(_events.STATE_PLAYING);
        }
        this.trigger(_events.PROVIDER_FIRST_FRAME);
    },
    pause: function pause() {
        // Sometimes the browser will fire "complete" and then a "pause" event
        if (this.state === _events.STATE_COMPLETE) {
            return;
        }
        if (this.video.ended) {
            return;
        }
        if (this.video.error) {
            return;
        }
        // If "pause" fires before "complete", we still don't want to propagate it
        if (this.video.currentTime === this.video.duration) {
            return;
        }
        this.setState(_events.STATE_PAUSED);
    },
    progress: function progress() {
        var dur = this.getDuration();
        if (dur <= 0 || dur === Infinity) {
            return;
        }
        var buf = this.video.buffered;
        if (!buf || buf.length === 0) {
            return;
        }

        var buffered = _helpers2.default.between(buf.end(buf.length - 1) / dur, 0, 1);
        this.trigger(_events.MEDIA_BUFFER, {
            bufferPercent: buffered * 100,
            position: this.getCurrentTime(),
            duration: dur
        });
    },
    ratechange: function ratechange() {
        this.trigger(_events.MEDIA_RATE_CHANGE, { playbackRate: this.video.playbackRate });
    },
    ended: function ended() {
        this._helperLastVideoHeight = 0;
        if (this.state !== _events.STATE_IDLE && this.state !== _events.STATE_COMPLETE) {
            this.trigger(_events.MEDIA_COMPLETE);
        }
    },
    loadeddata: function loadeddata() {
        // If we're not rendering natively text tracks will be provided from another source - don't duplicate them here
        if (this.renderNatively) {
            this.setTextTracks(this.video.textTracks);
        }
    },
    error: function error() {
        var code = this.video.error && this.video.error.code || -1;
        var message = {
            1: 'Unknown operation aborted',
            2: 'Unknown network error',
            3: 'Unknown decode error',
            4: 'File could not be played'
        }[code] || 'Unknown';
        this.trigger(_events.MEDIA_ERROR, {
            code: code,
            message: 'Error loading media: ' + message
        });
    }
};

exports.default = VideoListenerMixin;

/***/ }),

/***/ 179:
/*!*************************************************!*\
  !*** ./src/js/providers/video-actions-mixin.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _css = __webpack_require__(/*! utils/css */ 24);

var _timeRanges = __webpack_require__(/*! utils/time-ranges */ 176);

var _timeRanges2 = _interopRequireDefault(_timeRanges);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VideoActionsMixin = {
    container: null,

    volume: function volume(vol) {
        vol = Math.max(Math.min(vol / 100, 1), 0);
        this.video.volume = vol;
    },
    mute: function mute(state) {
        this.video.muted = !!state;
        if (!this.video.muted) {
            // Remove muted attribute once user unmutes so the video element doesn't get
            // muted by the browser when the src changes or on replay
            this.video.removeAttribute('muted');
        }
    },
    resize: function resize(width, height, stretching) {
        if (!width || !height || !this.video.videoWidth || !this.video.videoHeight) {
            return false;
        }
        if (stretching === 'uniform') {
            // snap video to edges when the difference in aspect ratio is less than 9%
            var playerAspectRatio = width / height;
            var videoAspectRatio = this.video.videoWidth / this.video.videoHeight;
            var objectFit = null;
            if (Math.abs(playerAspectRatio - videoAspectRatio) < 0.09) {
                objectFit = 'fill';
            }
            (0, _css.style)(this.video, {
                objectFit: objectFit,
                width: null,
                height: null
            });
        }
        return false;
    },
    getContainer: function getContainer() {
        return this.container;
    },
    setContainer: function setContainer(element) {
        this.container = element;
        if (this.video.parentNode !== element) {
            element.appendChild(this.video);
        }
    },
    remove: function remove() {
        this.stop();
        this.destroy();
        var container = this.container;
        if (container && container === this.video.parentNode) {
            container.removeChild(this.video);
        }
    },
    atEdgeOfLiveStream: function atEdgeOfLiveStream() {
        if (!this.isLive()) {
            return false;
        }

        // currentTime doesn't always get to the end of the buffered range
        var timeFudge = 2;
        return (0, _timeRanges2.default)(this.video.buffered) - this.video.currentTime <= timeFudge;
    }
};

exports.default = VideoActionsMixin;

/***/ }),

/***/ 180:
/*!**************************************************!*\
  !*** ./src/js/providers/video-attached-mixin.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var VideoAttachedMixin = {
    attachMedia: function attachMedia() {
        this.eventsOn_();
    },
    detachMedia: function detachMedia() {
        this.eventsOff_();

        return this.video;
    }
};

exports.default = VideoAttachedMixin;

/***/ }),

/***/ 181:
/*!******************************************!*\
  !*** ./src/js/providers/tracks-mixin.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _tracksLoader = __webpack_require__(/*! controller/tracks-loader */ 93);

var _tracksHelper = __webpack_require__(/*! controller/tracks-helper */ 94);

var _id3Parser = __webpack_require__(/*! providers/utils/id3Parser */ 182);

var _environment = __webpack_require__(/*! environment/environment */ 11);

var _events = __webpack_require__(/*! events/events */ 5);

var _underscore = __webpack_require__(/*! utils/underscore */ 0);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Used across all providers for loading tracks and handling browser track-related events
var Tracks = {
    _itemTracks: null,
    _textTracks: null,
    _tracksById: null,
    _cuesByTrackId: null,
    _cachedVTTCues: null,
    _metaCuesByTextTime: null,
    _currentTextTrackIndex: -1,
    _unknownCount: 0,
    _activeCuePosition: null,
    _initTextTracks: _initTextTracks,
    addTracksListener: addTracksListener,
    clearTracks: clearTracks,
    clearCueData: clearCueData,
    disableTextTrack: disableTextTrack,
    enableTextTrack: enableTextTrack,
    getSubtitlesTrack: getSubtitlesTrack,
    removeTracksListener: removeTracksListener,
    addTextTracks: addTextTracks,
    setTextTracks: setTextTracks,
    setupSideloadedTracks: setupSideloadedTracks,
    setSubtitlesTrack: setSubtitlesTrack,
    textTrackChangeHandler: null,
    addTrackHandler: null,
    addCuesToTrack: addCuesToTrack,
    addCaptionsCue: addCaptionsCue,
    addVTTCue: addVTTCue,
    addVTTCuesToTrack: addVTTCuesToTrack,
    renderNatively: false
};

function setTextTracks(tracks) {
    this._currentTextTrackIndex = -1;
    if (!tracks) {
        return;
    }

    if (!this._textTracks) {
        this._initTextTracks();
    } else {
        // Remove the 608 captions track that was mutated by the browser
        this._unknownCount = 0;
        this._textTracks = _underscore2.default.reject(this._textTracks, function (track) {
            var trackId = track._id;
            if (this.renderNatively && trackId && trackId.indexOf('nativecaptions') === 0) {
                delete this._tracksById[trackId];
                return true;
            } else if (track.name && track.name.indexOf('Unknown') === 0) {
                this._unknownCount++;
            }
        }, this);

        // Remove the ID3 track from the cache
        delete this._tracksById.nativemetadata;
    }

    // filter for 'subtitles' or 'captions' tracks
    if (tracks.length) {
        var i = 0;
        var len = tracks.length;

        for (i; i < len; i++) {
            var track = tracks[i];
            if (!track._id) {
                if (track.kind === 'captions' || track.kind === 'metadata') {
                    track._id = 'native' + track.kind + i;
                    if (!track.label && track.kind === 'captions') {
                        // track label is read only in Safari
                        // 'captions' tracks without a label need a name in order for the cc menu to work
                        var labelInfo = (0, _tracksHelper.createLabel)(track, this._unknownCount);
                        track.name = labelInfo.label;
                        this._unknownCount = labelInfo.unknownCount;
                    }
                } else {
                    track._id = (0, _tracksHelper.createId)(track, this._textTracks.length);
                }
                if (this._tracksById[track._id]) {
                    // tracks without unique ids must not be marked as "inuse"
                    continue;
                }
                track.inuse = true;
            }
            if (!track.inuse || this._tracksById[track._id]) {
                continue;
            }
            // setup TextTrack
            if (track.kind === 'metadata') {
                // track mode needs to be "hidden", not "showing", so that cues don't display as captions in Firefox
                track.mode = 'hidden';
                track.oncuechange = _cueChangeHandler.bind(this);
                this._tracksById[track._id] = track;
            } else if (_kindSupported(track.kind)) {
                var mode = track.mode;
                var cue;

                // By setting the track mode to 'hidden', we can determine if the track has cues
                track.mode = 'hidden';

                if (!track.cues.length && track.embedded) {
                    // There's no method to remove tracks added via: video.addTextTrack.
                    // This ensures the 608 captions track isn't added to the CC menu until it has cues
                    continue;
                }

                track.mode = mode;

                // Parsed cues may not have been added to this track yet
                if (this._cuesByTrackId[track._id] && !this._cuesByTrackId[track._id].loaded) {
                    var cues = this._cuesByTrackId[track._id].cues;
                    while (cue = cues.shift()) {
                        _addCueToTrack(this.renderNatively, track, cue);
                    }
                    track.mode = mode;
                    this._cuesByTrackId[track._id].loaded = true;
                }

                _addTrackToList.call(this, track);
            }
        }
    }

    if (this.renderNatively) {
        // Only bind and set this.textTrackChangeHandler once so that removeEventListener works
        this.textTrackChangeHandler = this.textTrackChangeHandler || textTrackChangeHandler.bind(this);
        this.addTracksListener(this.video.textTracks, 'change', this.textTrackChangeHandler);

        if (_environment.Browser.edge || _environment.Browser.firefox || _environment.Browser.safari) {
            // Listen for TextTracks added to the videotag after the onloadeddata event in Edge and Firefox
            this.addTrackHandler = this.addTrackHandler || addTrackHandler.bind(this);
            this.addTracksListener(this.video.textTracks, 'addtrack', this.addTrackHandler);
        }
    }

    if (this._textTracks.length) {
        this.trigger('subtitlesTracks', { tracks: this._textTracks });
    }
}

function setupSideloadedTracks(itemTracks) {
    // Add tracks if we're starting playback or resuming after a midroll

    if (!this.renderNatively) {
        return;
    }
    // Determine if the tracks are the same and the embedded + sideloaded count = # of tracks in the controlbar
    var alreadyLoaded = itemTracks === this._itemTracks;
    if (!alreadyLoaded) {
        (0, _tracksLoader.cancelXhr)(this._itemTracks);
    }
    this._itemTracks = itemTracks;
    if (!itemTracks) {
        return;
    }

    if (!alreadyLoaded) {
        this.disableTextTrack();
        _clearSideloadedTextTracks.call(this);
        this.addTextTracks(itemTracks);
    }
}

function getSubtitlesTrack() {
    return this._currentTextTrackIndex;
}

function setSubtitlesTrack(menuIndex) {
    if (!this.renderNatively) {
        if (this.setCurrentSubtitleTrack) {
            this.setCurrentSubtitleTrack(menuIndex - 1);
        }
        return;
    }

    if (!this._textTracks) {
        return;
    }

    // 0 = 'Off'
    if (menuIndex === 0) {
        _underscore2.default.each(this._textTracks, function (track) {
            track.mode = track.embedded ? 'hidden' : 'disabled';
        });
    }

    // Track index is 1 less than controlbar index to account for 'Off' = 0.
    // Prevent unnecessary track change events
    if (this._currentTextTrackIndex === menuIndex - 1) {
        return;
    }

    // Turn off current track
    this.disableTextTrack();

    // Set the provider's index to the model's index, then show the selected track if it exists
    this._currentTextTrackIndex = menuIndex - 1;

    if (this._textTracks[this._currentTextTrackIndex]) {
        this._textTracks[this._currentTextTrackIndex].mode = 'showing';
    }

    // Update the model index since the track change may have come from a browser event
    this.trigger('subtitlesTrackChanged', {
        currentTrack: this._currentTextTrackIndex + 1,
        tracks: this._textTracks
    });
}

function addCaptionsCue(cueData) {
    if (!cueData.text || !cueData.begin || !cueData.end) {
        return;
    }
    var trackId = cueData.trackid.toString();
    var track = this._tracksById && this._tracksById[trackId];
    if (!track) {
        track = {
            kind: 'captions',
            _id: trackId,
            data: []
        };
        this.addTextTracks([track]);
        this.trigger('subtitlesTracks', { tracks: this._textTracks });
    }

    var cueId;

    if (cueData.useDTS) {
        // There may not be any 608 captions when the track is first created
        // Need to set the source so position is determined from metadata
        if (!track.source) {
            track.source = cueData.source || 'mpegts';
        }
    }
    cueId = cueData.begin + '_' + cueData.text;

    var cue = this._metaCuesByTextTime[cueId];
    if (!cue) {
        cue = {
            begin: cueData.begin,
            end: cueData.end,
            text: cueData.text
        };
        this._metaCuesByTextTime[cueId] = cue;
        var vttCue = (0, _tracksLoader.convertToVTTCues)([cue])[0];
        track.data.push(vttCue);
    }
}

function addVTTCue(cueData) {
    if (!this._tracksById) {
        this._initTextTracks();
    }

    var trackId = cueData.track ? cueData.track : 'native' + cueData.type;
    var track = this._tracksById[trackId];
    var label = cueData.type === 'captions' ? 'Unknown CC' : 'ID3 Metadata';
    var vttCue = cueData.cue;

    if (!track) {
        var itemTrack = {
            kind: cueData.type,
            _id: trackId,
            label: label,
            embedded: true
        };

        track = _createTrack.call(this, itemTrack);

        if (this.renderNatively || track.kind === 'metadata') {
            this.setTextTracks(this.video.textTracks);
        } else {
            addTextTracks.call(this, [track]);
        }
    }
    if (_cacheVTTCue.call(this, track, vttCue)) {
        if (this.renderNatively || track.kind === 'metadata') {
            _addCueToTrack(this.renderNatively, track, vttCue);
        } else {
            track.data.push(vttCue);
        }
    }
}

function addCuesToTrack(cueData) {
    // convert cues coming from the flash provider into VTTCues, then append them to track
    var track = this._tracksById[cueData.name];
    if (!track) {
        return;
    }

    track.source = cueData.source;
    var cues = cueData.captions || [];
    var cuesToConvert = [];
    var sort = false;

    for (var i = 0; i < cues.length; i++) {
        var cue = cues[i];
        var cueId = cueData.name + '_' + cue.begin + '_' + cue.end;
        if (!this._metaCuesByTextTime[cueId]) {
            this._metaCuesByTextTime[cueId] = cue;
            cuesToConvert.push(cue);
            sort = true;
        }
    }
    if (sort) {
        cuesToConvert.sort(function (a, b) {
            return a.begin - b.begin;
        });
    }
    var vttCues = (0, _tracksLoader.convertToVTTCues)(cuesToConvert);
    Array.prototype.push.apply(track.data, vttCues);
}

function addTracksListener(tracks, eventType, handler) {
    if (!tracks) {
        return;
    }
    // Always remove existing listener
    removeTracksListener(tracks, eventType, handler);

    if (this.instreamMode) {
        return;
    }

    if (tracks.addEventListener) {
        tracks.addEventListener(eventType, handler);
    } else {
        tracks['on' + eventType] = handler;
    }
}

function removeTracksListener(tracks, eventType, handler) {
    if (!tracks) {
        return;
    }
    if (tracks.removeEventListener) {
        tracks.removeEventListener(eventType, handler);
    } else {
        tracks['on' + eventType] = null;
    }
}

function clearTracks() {
    (0, _tracksLoader.cancelXhr)(this._itemTracks);
    var metadataTrack = this._tracksById && this._tracksById.nativemetadata;
    if (this.renderNatively || metadataTrack) {
        _removeCues(this.renderNatively, this.video.textTracks);
        if (metadataTrack) {
            metadataTrack.oncuechange = null;
        }
    }

    this._itemTracks = null;
    this._textTracks = null;
    this._tracksById = null;
    this._cuesByTrackId = null;
    this._metaCuesByTextTime = null;
    this._unknownCount = 0;
    this._currentTextTrackIndex = -1;
    this._activeCuePosition = null;
    if (this.renderNatively) {
        // Removing listener first to ensure that removing cues does not trigger it unnecessarily
        this.removeTracksListener(this.video.textTracks, 'change', this.textTrackChangeHandler);
        _removeCues(this.renderNatively, this.video.textTracks);
    }
}

// Clear track cues to prevent duplicates
function clearCueData(trackId) {
    var cachedVTTCues = this._cachedVTTCues;
    if (cachedVTTCues && cachedVTTCues[trackId]) {
        cachedVTTCues[trackId] = {};
        if (this._tracksById) {
            this._tracksById[trackId].data = [];
        }
    }
}

function disableTextTrack() {
    if (this._textTracks) {
        var track = this._textTracks[this._currentTextTrackIndex];
        if (track) {
            // FF does not remove the active cue from the dom when the track is hidden, so we must disable it
            track.mode = 'disabled';
            var trackId = track._id;
            if (trackId && trackId.indexOf('nativecaptions') === 0) {
                track.mode = 'hidden';
            }
        }
    }
}

function enableTextTrack() {
    if (this._textTracks) {
        var track = this._textTracks[this._currentTextTrackIndex];
        if (track) {
            track.mode = 'showing';
        }
    }
}

function textTrackChangeHandler() {
    var textTracks = this.video.textTracks;
    var inUseTracks = _underscore2.default.filter(textTracks, function (track) {
        return (track.inuse || !track._id) && _kindSupported(track.kind);
    });
    if (!this._textTracks || _tracksModified.call(this, inUseTracks)) {
        this.setTextTracks(textTracks);
        return;
    }
    // If a caption/subtitle track is showing, find its index
    var selectedTextTrackIndex = -1;
    for (var i = 0; i < this._textTracks.length; i++) {
        if (this._textTracks[i].mode === 'showing') {
            selectedTextTrackIndex = i;
            break;
        }
    }

    // Notifying the model when the index changes keeps the current index in sync in iOS Fullscreen mode
    if (selectedTextTrackIndex !== this._currentTextTrackIndex) {
        this.setSubtitlesTrack(selectedTextTrackIndex + 1);
    }
}

// Used in MS Edge to get tracks from the videotag as they're added
function addTrackHandler() {
    this.setTextTracks(this.video.textTracks);
}

function addTextTracks(tracksArray) {
    var _this = this;

    if (!tracksArray) {
        return;
    }

    if (!this._textTracks) {
        this._initTextTracks();
    }

    tracksArray.forEach(function (itemTrack) {
        // only add valid and supported kinds https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track
        if (itemTrack.kind && !_kindSupported(itemTrack.kind)) {
            return;
        }
        var textTrackAny = _createTrack.call(_this, itemTrack);
        _addTrackToList.call(_this, textTrackAny);
        if (itemTrack.file) {
            itemTrack.data = [];
            (0, _tracksLoader.loadFile)(itemTrack, function (vttCues) {
                _this.addVTTCuesToTrack(textTrackAny, vttCues);
            }, function (error) {
                _this.trigger(_events.ERROR, {
                    message: 'Captions failed to load',
                    reason: error
                });
            });
        }
    });

    if (this._textTracks && this._textTracks.length) {
        this.trigger('subtitlesTracks', { tracks: this._textTracks });
    }
}

function addVTTCuesToTrack(track, vttCues) {
    if (!this.renderNatively) {
        return;
    }

    var textTrack = this._tracksById[track._id];
    // the track may not be on the video tag yet
    if (!textTrack) {

        if (!this._cuesByTrackId) {
            this._cuesByTrackId = {};
        }
        this._cuesByTrackId[track._id] = { cues: vttCues, loaded: false };
        return;
    }
    // Cues already added
    if (this._cuesByTrackId[track._id] && this._cuesByTrackId[track._id].loaded) {
        return;
    }

    var cue;
    this._cuesByTrackId[track._id] = { cues: vttCues, loaded: true };

    while (cue = vttCues.shift()) {
        _addCueToTrack(this.renderNatively, textTrack, cue);
    }
}

// ////////////////////
// //// PRIVATE METHODS
// ////////////////////

function _addCueToTrack(renderNatively, track, vttCue) {
    if (!(_environment.Browser.ie && renderNatively) || !window.TextTrackCue) {
        track.addCue(vttCue);
        return;
    }
    // There's no support for the VTTCue interface in IE/Edge.
    // We need to convert VTTCue to TextTrackCue before adding them to the TextTrack
    // This unfortunately removes positioning properties from the cues
    var textTrackCue = new window.TextTrackCue(vttCue.startTime, vttCue.endTime, vttCue.text);
    track.addCue(textTrackCue);
}

function _removeCues(renderNatively, tracks) {
    if (tracks && tracks.length) {
        _underscore2.default.each(tracks, function (track) {
            // Let IE & Edge handle cleanup of non-sideloaded text tracks for native rendering
            if (_environment.Browser.ie && renderNatively && /^(native|subtitle|cc)/.test(track._id)) {
                return;
            }

            // Cues are inaccessible if the track is disabled. While hidden,
            // we can remove cues while the track is in a non-visible state
            // Set to disabled before hidden to ensure active cues disappear
            track.mode = 'disabled';
            track.mode = 'hidden';
            for (var i = track.cues.length; i--;) {
                track.removeCue(track.cues[i]);
            }
            if (!track.embedded) {
                track.mode = 'disabled';
            }
            track.inuse = false;
        });
    }
}

function _kindSupported(kind) {
    return kind === 'subtitles' || kind === 'captions';
}

function _initTextTracks() {
    this._textTracks = [];
    this._tracksById = {};
    this._metaCuesByTextTime = {};
    this._cuesByTrackId = {};
    this._cachedVTTCues = {};
    this._unknownCount = 0;
}

function _createTrack(itemTrack) {
    var track;
    var labelInfo = (0, _tracksHelper.createLabel)(itemTrack, this._unknownCount);
    var label = labelInfo.label;
    this._unknownCount = labelInfo.unknownCount;

    if (this.renderNatively || itemTrack.kind === 'metadata') {
        var tracks = this.video.textTracks;
        // TextTrack label is read only, so we'll need to create a new track if we don't
        // already have one with the same label
        track = _underscore2.default.findWhere(tracks, { label: label });

        if (!track) {
            track = this.video.addTextTrack(itemTrack.kind, label, itemTrack.language || '');
        }

        track.default = itemTrack.default;
        track.mode = 'disabled';
        track.inuse = true;
    } else {
        track = itemTrack;
        track.data = track.data || [];
    }

    if (!track._id) {
        track._id = (0, _tracksHelper.createId)(itemTrack, this._textTracks.length);
    }

    return track;
}

function _addTrackToList(track) {
    this._textTracks.push(track);
    this._tracksById[track._id] = track;
}

function _clearSideloadedTextTracks() {
    // Clear VTT textTracks
    if (!this._textTracks) {
        return;
    }
    var nonSideloadedTracks = _underscore2.default.filter(this._textTracks, function (track) {
        return track.embedded || track.groupid === 'subs';
    });
    this._initTextTracks();
    _underscore2.default.each(nonSideloadedTracks, function (track) {
        this._tracksById[track._id] = track;
    });
    this._textTracks = nonSideloadedTracks;
}

function _cueChangeHandler(e) {
    var activeCues = e.currentTarget.activeCues;
    if (!activeCues || !activeCues.length) {
        return;
    }

    // Get the most recent start time. Cues are sorted by start time in ascending order by the browser
    var startTime = activeCues[activeCues.length - 1].startTime;
    // Prevent duplicate meta events for the same list of cues since the cue change handler fires once
    // for each activeCue in Safari
    if (this._activeCuePosition === startTime) {
        return;
    }
    var dataCues = [];

    _underscore2.default.each(activeCues, function (cue) {
        if (cue.startTime < startTime) {
            return;
        }
        if (cue.data || cue.value) {
            dataCues.push(cue);
        } else if (cue.text) {
            this.trigger('meta', {
                metadataTime: startTime,
                metadata: JSON.parse(cue.text)
            });
        }
    }, this);

    if (dataCues.length) {
        var id3Data = (0, _id3Parser.parseID3)(dataCues);
        this.trigger('meta', {
            metadataTime: startTime,
            metadata: id3Data
        });
    }
    this._activeCuePosition = startTime;
}

function _cacheVTTCue(track, vttCue) {
    var trackKind = track.kind;
    if (!this._cachedVTTCues[track._id]) {
        this._cachedVTTCues[track._id] = {};
    }
    var cachedCues = this._cachedVTTCues[track._id];
    var cacheKeyTime;

    switch (trackKind) {
        case 'captions':
        case 'subtitles':
            // VTTCues should have unique start and end times, even in cases where there are multiple
            // active cues. This is safer than ensuring text is unique, which may be violated on seek.
            // Captions within .05s of each other are treated as unique to account for
            // quality switches where start/end times are slightly different.
            cacheKeyTime = Math.floor(vttCue.startTime * 20);
            var cacheLine = '_' + vttCue.line;
            var cacheValue = Math.floor(vttCue.endTime * 20);
            var cueExists = cachedCues[cacheKeyTime + cacheLine] || cachedCues[cacheKeyTime + 1 + cacheLine] || cachedCues[cacheKeyTime - 1 + cacheLine];

            if (cueExists && Math.abs(cueExists - cacheValue) <= 1) {
                return false;
            }

            cachedCues[cacheKeyTime + cacheLine] = cacheValue;
            return true;
        case 'metadata':
            var text = vttCue.data ? new Uint8Array(vttCue.data).join('') : vttCue.text;
            cacheKeyTime = vttCue.startTime + text;
            if (cachedCues[cacheKeyTime]) {
                return false;
            }

            cachedCues[cacheKeyTime] = vttCue.endTime;
            return true;
        default:
            return false;
    }
}

function _tracksModified(inUseTracks) {
    // Need to add new textTracks coming from the video tag
    if (inUseTracks.length > this._textTracks.length) {
        return true;
    }

    // Tracks may have changed in Safari after an ad
    for (var i = 0; i < inUseTracks.length; i++) {
        var track = inUseTracks[i];
        if (!track._id || !this._tracksById[track._id]) {
            return true;
        }
    }

    return false;
}

exports.default = Tracks;

/***/ }),

/***/ 182:
/*!*********************************************!*\
  !*** ./src/js/providers/utils/id3Parser.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.utf8ArrayToStr = utf8ArrayToStr;
exports.syncSafeInt = syncSafeInt;
exports.parseID3 = parseID3;

var friendlyNames = {
    TIT2: 'title',
    TT2: 'title',
    WXXX: 'url',
    TPE1: 'artist',
    TP1: 'artist',
    TALB: 'album',
    TAL: 'album'
};

function utf8ArrayToStr(array, startingIndex) {
    // Based on code by Masanao Izumo <iz@onicos.co.jp>
    // posted at http://www.onicos.com/staff/iz/amuse/javascript/expert/utf.txt

    var len = array.length;
    var c = void 0;
    var char2 = void 0;
    var char3 = void 0;
    var out = '';
    var i = startingIndex || 0;
    while (i < len) {
        c = array[i++];
        // If the character is 3 (END_OF_TEXT) or 0 (NULL) then skip it
        if (c === 0x00 || c === 0x03) {
            continue;
        }
        switch (c >> 4) {
            case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:
                // 0xxxxxxx
                out += String.fromCharCode(c);
                break;
            case 12:case 13:
                // 110x xxxx   10xx xxxx
                char2 = array[i++];
                out += String.fromCharCode((c & 0x1F) << 6 | char2 & 0x3F);
                break;
            case 14:
                // 1110 xxxx  10xx xxxx  10xx xxxx
                char2 = array[i++];
                char3 = array[i++];
                out += String.fromCharCode((c & 0x0F) << 12 | (char2 & 0x3F) << 6 | (char3 & 0x3F) << 0);
                break;
            default:
        }
    }
    return out;
}

function utf16BigEndianArrayToStr(array, startingIndex) {
    var lastDoubleByte = array.length - 1;
    var out = '';
    var i = startingIndex || 0;
    while (i < lastDoubleByte) {
        if (array[i] === 254 && array[i + 1] === 255) {
            // Byte order mark
        } else {
            out += String.fromCharCode((array[i] << 8) + array[i + 1]);
        }
        i += 2;
    }
    return out;
}

function syncSafeInt(sizeArray) {
    var size = arrayToInt(sizeArray);
    return size & 0x0000007F | (size & 0x00007F00) >> 1 | (size & 0x007F0000) >> 2 | (size & 0x7F000000) >> 3;
}

function arrayToInt(array) {
    var sizeString = '0x';
    for (var i = 0; i < array.length; i++) {
        if (array[i] < 16) {
            sizeString += '0';
        }
        sizeString += array[i].toString(16);
    }
    return parseInt(sizeString);
}

function parseID3() {
    var activeCues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    return activeCues.reduce(function (data, cue) {
        if (!('value' in cue)) {
            // Cue is not in Safari's key/data format
            if ('data' in cue && cue.data instanceof ArrayBuffer) {
                // EdgeHTML 13.10586 cue point format - contains raw data in an ArrayBuffer.

                var oldCue = cue;
                var array = new Uint8Array(oldCue.data);
                var arrayLength = array.length;

                cue = { value: { key: '', data: '' } };

                var i = 10;
                while (i < 14 && i < array.length) {
                    if (array[i] === 0) {
                        break;
                    }
                    cue.value.key += String.fromCharCode(array[i]);
                    i++;
                }

                // If the first byte is 3 (END_OF_TEXT) or 0 (NULL) then skip it
                var startPos = 19;
                var firstByte = array[startPos];
                if (firstByte === 0x03 || firstByte === 0x00) {
                    firstByte = array[++startPos];
                    arrayLength--;
                }

                var infoDelimiterPosition = 0;
                // Find info/value pair delimiter if present.
                // If first byte shows theres utf 16 encoding, there is no info since info cannot be utf 16 encoded
                if (firstByte !== 0x01 && firstByte !== 0x02) {
                    for (var j = startPos + 1; j < arrayLength; j++) {
                        if (array[j] === 0x00) {
                            infoDelimiterPosition = j - startPos;
                            break;
                        }
                    }
                }

                if (infoDelimiterPosition > 0) {
                    var info = utf8ArrayToStr(array.subarray(startPos, startPos += infoDelimiterPosition), 0);
                    if (cue.value.key === 'PRIV') {
                        if (info === 'com.apple.streaming.transportStreamTimestamp') {
                            var ptsIs33Bit = syncSafeInt(array.subarray(startPos, startPos += 4)) & 0x00000001;
                            var transportStreamTimestamp = syncSafeInt(array.subarray(startPos, startPos += 4)) + (ptsIs33Bit ? 0x100000000 : 0);
                            cue.value.data = transportStreamTimestamp;
                        } else {
                            cue.value.data = utf8ArrayToStr(array, startPos + 1);
                        }
                        cue.value.info = info;
                    } else {
                        cue.value.info = info;
                        cue.value.data = utf8ArrayToStr(array, startPos + 1);
                    }
                } else {
                    var encoding = array[startPos];
                    if (encoding === 1 || encoding === 2) {
                        cue.value.data = utf16BigEndianArrayToStr(array, startPos + 1);
                    } else {
                        cue.value.data = utf8ArrayToStr(array, startPos + 1);
                    }
                }
            }
        }

        // These friendly names mapping provides compatibility with our implementation prior to 7.3
        if (friendlyNames.hasOwnProperty(cue.value.key)) {
            data[friendlyNames[cue.value.key]] = cue.value.data;
        }
        /* The meta event includes a metadata object with flattened cue key/data pairs
         * If a cue also includes an info field, then create a collection of info/data pairs for the cue key
         *   TLEN: 03:50                                        // key: "TLEN", data: "03:50"
         *   WXXX: {"artworkURL":"http://domain.com/cover.jpg"} // key: "WXXX", info: "artworkURL" ...
         */
        if (cue.value.info) {
            var collection = data[cue.value.key];
            if (collection !== Object(collection)) {
                collection = {};
                data[cue.value.key] = collection;
            }
            collection[cue.value.info] = cue.value.data;
        } else {
            data[cue.value.key] = cue.value.data;
        }
        return data;
    }, {});
}

/***/ }),

/***/ 77:
/*!****************************************!*\
  !*** ./src/js/parsers/captions/srt.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Srt;

var _strings = __webpack_require__(/*! utils/strings */ 1);

// Component that loads and parses an SRT file

function Srt(data) {
    // Trim whitespace and split the list by returns.
    var _captions = [];
    data = (0, _strings.trim)(data);
    var list = data.split('\r\n\r\n');
    if (list.length === 1) {
        list = data.split('\n\n');
    }

    for (var i = 0; i < list.length; i++) {
        if (list[i] === 'WEBVTT') {
            continue;
        }
        // Parse each entry
        var entry = _entry(list[i]);
        if (entry.text) {
            _captions.push(entry);
        }
    }

    return _captions;
}

/* Parse a single captions entry. */
function _entry(data) {
    var entry = {};
    var array = data.split('\r\n');
    if (array.length === 1) {
        array = data.split('\n');
    }
    var idx = 1;
    if (array[0].indexOf(' --> ') > 0) {
        idx = 0;
    }
    if (array.length > idx + 1 && array[idx + 1]) {
        // This line contains the start and end.
        var line = array[idx];
        var index = line.indexOf(' --> ');
        if (index > 0) {
            entry.begin = (0, _strings.seconds)(line.substr(0, index));
            entry.end = (0, _strings.seconds)(line.substr(index + 5));
            // Remaining lines contain the text
            entry.text = array.slice(idx + 1).join('\r\n');
        }
    }
    return entry;
}

/***/ }),

/***/ 8:
/*!***********************************!*\
  !*** ./src/js/providers/html5.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dataNormalizer = __webpack_require__(/*! providers/data-normalizer */ 177);

var _environment = __webpack_require__(/*! environment/environment */ 11);

var _html5AndroidHls = __webpack_require__(/*! providers/html5-android-hls */ 44);

var _events = __webpack_require__(/*! events/events */ 5);

var _videoListenerMixin = __webpack_require__(/*! providers/video-listener-mixin */ 178);

var _videoListenerMixin2 = _interopRequireDefault(_videoListenerMixin);

var _videoActionsMixin = __webpack_require__(/*! providers/video-actions-mixin */ 179);

var _videoActionsMixin2 = _interopRequireDefault(_videoActionsMixin);

var _videoAttachedMixin = __webpack_require__(/*! providers/video-attached-mixin */ 180);

var _videoAttachedMixin2 = _interopRequireDefault(_videoAttachedMixin);

var _css = __webpack_require__(/*! utils/css */ 24);

var _helpers = __webpack_require__(/*! utils/helpers */ 6);

var _helpers2 = _interopRequireDefault(_helpers);

var _dom = __webpack_require__(/*! utils/dom */ 23);

var _underscore = __webpack_require__(/*! utils/underscore */ 0);

var _underscore2 = _interopRequireDefault(_underscore);

var _default = __webpack_require__(/*! providers/default */ 45);

var _default2 = _interopRequireDefault(_default);

var _backbone = __webpack_require__(/*! utils/backbone.events */ 7);

var _backbone2 = _interopRequireDefault(_backbone);

var _tracksMixin = __webpack_require__(/*! providers/tracks-mixin */ 181);

var _tracksMixin2 = _interopRequireDefault(_tracksMixin);

var _timeRanges = __webpack_require__(/*! utils/time-ranges */ 176);

var _timeRanges2 = _interopRequireDefault(_timeRanges);

var _playPromise = __webpack_require__(/*! providers/utils/play-promise */ 95);

var _playPromise2 = _interopRequireDefault(_playPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clearTimeout = window.clearTimeout;
var MIN_DVR_DURATION = 120;
var _name = 'html5';

function _setupListeners(eventsHash, videoTag) {
    Object.keys(eventsHash).forEach(function (eventName) {
        videoTag.removeEventListener(eventName, eventsHash[eventName]);
        videoTag.addEventListener(eventName, eventsHash[eventName]);
    });
}

function _removeListeners(eventsHash, videoTag) {
    Object.keys(eventsHash).forEach(function (eventName) {
        videoTag.removeEventListener(eventName, eventsHash[eventName]);
    });
}

function VideoProvider(_playerId, _playerConfig, mediaElement) {
    // Current media state
    this.state = _events.STATE_IDLE;

    // Are we buffering due to seek, or due to playback?
    this.seeking = false;

    // Always render natively in iOS and Safari, where HLS is supported.
    // Otherwise, use native rendering when set in the config for browsers that have adequate support.
    // FF, IE & Edge are excluded due to styling/positioning drawbacks.
    // The following issues need to be addressed before we enable native rendering in Edge:
    // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/8120475/
    // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12079271/
    function renderNatively(configRenderNatively) {
        if (_environment.OS.iOS || _environment.Browser.safari) {
            return true;
        }
        return configRenderNatively && _environment.Browser.chrome;
    }

    var _this = this;

    var MediaEvents = {
        progress: function progress() {
            _videoListenerMixin2.default.progress.call(_this);
            checkStaleStream();
        },
        timeupdate: function timeupdate() {
            if (_positionBeforeSeek !== _videotag.currentTime) {
                _setPositionBeforeSeek(_videotag.currentTime);
                _videoListenerMixin2.default.timeupdate.call(_this);
            }
            checkStaleStream();
            if (_environment.Browser.ie) {
                checkVisualQuality();
            }
        },


        resize: checkVisualQuality,

        ended: function ended() {
            _currentQuality = -1;
            clearTimeouts();
            _videoListenerMixin2.default.ended.call(_this);
        },
        loadedmetadata: function loadedmetadata() {
            var duration = _this.getDuration();
            if (_androidHls && duration === Infinity) {
                duration = 0;
            }
            var metadata = {
                duration: duration,
                height: _videotag.videoHeight,
                width: _videotag.videoWidth
            };
            _this.trigger(_events.MEDIA_META, metadata);
            checkVisualQuality();
        },
        durationchange: function durationchange() {
            if (_androidHls) {
                return;
            }
            _videoListenerMixin2.default.progress.call(_this);
        },
        loadeddata: function loadeddata() {
            _videoListenerMixin2.default.loadeddata.call(_this);
            _setAudioTracks(_videotag.audioTracks);
            _checkDelayedSeek(_this.getDuration());
        },
        canplay: function canplay() {
            _canSeek = true;
            if (!_androidHls) {
                _setMediaType();
            }
            if (_environment.Browser.ie && _environment.Browser.version.major === 9) {
                // In IE9, set tracks here since they are not ready
                // on load
                _this.setTextTracks(_this._textTracks);
            }
            _videoListenerMixin2.default.canplay.call(_this);
        },
        seeking: function seeking() {
            var offset = _seekOffset !== null ? _seekOffset : _this.getCurrentTime();
            var position = _positionBeforeSeek;
            _setPositionBeforeSeek(offset);
            _seekOffset = null;
            _delayedSeek = 0;
            _this.seeking = true;
            _this.trigger(_events.MEDIA_SEEK, {
                position: position,
                offset: offset
            });
        },
        seeked: function seeked() {
            _videoListenerMixin2.default.seeked.call(_this);
        },
        waiting: function waiting() {
            if (_this.seeking) {
                _this.setState(_events.STATE_LOADING);
            } else if (_this.state === _events.STATE_PLAYING) {
                if (_this.atEdgeOfLiveStream()) {
                    _this.setPlaybackRate(1);
                }
                _this.stallTime = _this.getCurrentTime();
                _this.setState(_events.STATE_STALLED);
            }
        },
        webkitbeginfullscreen: function webkitbeginfullscreen(e) {
            _fullscreenState = true;
            _sendFullscreen(e);
        },
        webkitendfullscreen: function webkitendfullscreen(e) {
            _fullscreenState = false;
            _sendFullscreen(e);
        }
    };
    Object.keys(_videoListenerMixin2.default).forEach(function (eventName) {
        if (!MediaEvents[eventName]) {
            var mixinEventHandler = _videoListenerMixin2.default[eventName];
            MediaEvents[eventName] = function (e) {
                mixinEventHandler.call(_this, e);
            };
        }
    });

    _extends(this, _backbone2.default, _videoActionsMixin2.default, _videoAttachedMixin2.default, _tracksMixin2.default, {
        renderNatively: renderNatively(_playerConfig.renderCaptionsNatively),
        eventsOn_: function eventsOn_() {
            _setupListeners(MediaEvents, _videotag);
        },
        eventsOff_: function eventsOff_() {
            _removeListeners(MediaEvents, _videotag);
        },
        detachMedia: function detachMedia() {
            _videoAttachedMixin2.default.detachMedia.call(_this);
            clearTimeouts();
            // Stop listening to track changes so disabling the current track doesn't update the model
            this.removeTracksListener(_videotag.textTracks, 'change', this.textTrackChangeHandler);
            // Prevent tracks from showing during ad playback
            this.disableTextTrack();
            return _videotag;
        },
        attachMedia: function attachMedia() {
            _videoAttachedMixin2.default.attachMedia.call(_this);
            _canSeek = false;
            // If we were mid-seek when detached, we want to allow it to resume
            this.seeking = false;
            // In case the video tag was modified while we shared it
            _videotag.loop = false;
            // If there was a showing track, re-enable it
            this.enableTextTrack();
            if (this.renderNatively) {
                this.setTextTracks(this.video.textTracks);
            }
            this.addTracksListener(_videotag.textTracks, 'change', this.textTrackChangeHandler);
        },
        isLive: function isLive() {
            return _videotag.duration === Infinity;
        }
    });

    var _videotag = mediaElement;
    var visualQuality = { level: {} };
    // Prefer the config timeout, which is allowed to be 0 and null by default
    var _staleStreamDuration = _playerConfig.liveTimeout !== null ? _playerConfig.liveTimeout : 3 * 10 * 1000;

    var _canSeek = false; // true on valid time event
    var _delayedSeek = 0;
    var _seekOffset = null;
    var _positionBeforeSeek = null;
    var _levels = void 0;
    var _currentQuality = -1;
    var _fullscreenState = false;
    var _beforeResumeHandler = _helpers2.default.noop;
    var _audioTracks = null;
    var _currentAudioTrackIndex = -1;
    var _staleStreamTimeout = -1;
    var _stale = false;
    var _lastEndOfBuffer = null;
    var _androidHls = false;

    this.isSDK = !!_playerConfig.sdkplatform;
    this.video = _videotag;
    this.supportsPlaybackRate = true;

    function checkVisualQuality() {
        var level = visualQuality.level;
        if (level.width !== _videotag.videoWidth || level.height !== _videotag.videoHeight) {
            level.width = _videotag.videoWidth;
            level.height = _videotag.videoHeight;
            _setMediaType();
            if (!level.width || !level.height || _currentQuality === -1) {
                return;
            }
            visualQuality.reason = visualQuality.reason || 'auto';
            visualQuality.mode = _levels[_currentQuality].type === 'hls' ? 'auto' : 'manual';
            visualQuality.bitrate = 0;
            level.index = _currentQuality;
            level.label = _levels[_currentQuality].label;
            _this.trigger(_events.MEDIA_VISUAL_QUALITY, visualQuality);
            visualQuality.reason = '';
        }
    }

    function _setPositionBeforeSeek(position) {
        _positionBeforeSeek = _convertTime(position);
    }

    _this.getCurrentTime = function () {
        return _convertTime(_videotag.currentTime);
    };

    function _convertTime(position) {
        if (_this.getDuration() < 0) {
            position -= _getSeekableEnd();
        }
        return position;
    }

    _this.getDuration = function () {
        var duration = _videotag.duration;
        // Don't sent time event on Android before real duration is known
        if (_androidHls && duration === Infinity && _videotag.currentTime === 0 || isNaN(duration)) {
            return 0;
        }
        var end = _getSeekableEnd();
        if (_this.isLive() && end) {
            var seekableDuration = end - _getSeekableStart();
            if (seekableDuration !== Infinity && seekableDuration > MIN_DVR_DURATION) {
                // Player interprets negative duration as DVR
                duration = -seekableDuration;
            }
        }
        return duration;
    };

    function _checkDelayedSeek(duration) {
        // Don't seek when _delayedSeek is set to -1 in _completeLoad
        if (_delayedSeek && _delayedSeek !== -1 && duration && duration !== Infinity) {
            _this.seek(_delayedSeek);
        }
    }

    function _getPublicLevels(levels) {
        var publicLevels;
        if (_helpers2.default.typeOf(levels) === 'array' && levels.length > 0) {
            publicLevels = _underscore2.default.map(levels, function (level, i) {
                return {
                    label: level.label || i
                };
            });
        }
        return publicLevels;
    }

    function _setLevels(levels) {
        _levels = levels;
        _currentQuality = _pickInitialQuality(levels);
    }

    function _pickInitialQuality(levels) {
        var currentQuality = Math.max(0, _currentQuality);
        var label = _playerConfig.qualityLabel;
        if (levels) {
            for (var i = 0; i < levels.length; i++) {
                if (levels[i].default) {
                    currentQuality = i;
                }
                if (label && levels[i].label === label) {
                    return i;
                }
            }
        }
        visualQuality.reason = 'initial choice';

        if (!visualQuality.level.width || !visualQuality.level.height) {
            visualQuality.level = {};
        }

        return currentQuality;
    }

    function _play() {
        return _videotag.play() || (0, _playPromise2.default)(_videotag);
    }

    function _completeLoad(startTime) {
        _delayedSeek = 0;
        clearTimeouts();

        var previousSource = _videotag.src;
        var sourceElement = document.createElement('source');
        sourceElement.src = _levels[_currentQuality].file;
        var sourceChanged = sourceElement.src !== previousSource;

        if (sourceChanged) {
            _setVideotagSource(_levels[_currentQuality]);
            // Do not call load if src was not set. load() will cancel any active play promise.
            if (previousSource) {
                _videotag.load();
            }
        } else if (startTime === 0 && _videotag.currentTime > 0) {
            // Load event is from the same video as before
            // restart video without dispatching seek event
            _delayedSeek = -1;
            _this.seek(startTime);
        }

        if (startTime > 0) {
            _this.seek(startTime);
        }

        var publicLevels = _getPublicLevels(_levels);
        if (publicLevels) {
            _this.trigger(_events.MEDIA_LEVELS, {
                levels: publicLevels,
                currentQuality: _currentQuality
            });
        }
        if (_levels.length && _levels[0].type !== 'hls') {
            _this.sendMediaType(_levels);
        }
    }

    function _setVideotagSource(source) {
        _audioTracks = null;
        _currentAudioTrackIndex = -1;
        if (!visualQuality.reason) {
            visualQuality.reason = 'initial choice';
            visualQuality.level = {};
        }
        _canSeek = false;

        var sourceElement = document.createElement('source');
        sourceElement.src = source.file;
        var sourceChanged = _videotag.src !== sourceElement.src;
        if (sourceChanged) {
            _videotag.src = source.file;
        }
    }

    function _clearVideotagSource() {
        if (_videotag) {
            _this.disableTextTrack();
            _videotag.removeAttribute('preload');
            _videotag.removeAttribute('src');
            (0, _dom.emptyElement)(_videotag);
            (0, _css.style)(_videotag, {
                objectFit: ''
            });
            _currentQuality = -1;
            // Don't call load in iE9/10 and check for load in PhantomJS
            if (!_environment.Browser.msie && 'load' in _videotag) {
                _videotag.load();
            }
        }
    }

    function _getSeekableStart() {
        var index = _videotag.seekable ? _videotag.seekable.length : 0;
        var start = Infinity;

        while (index--) {
            start = Math.min(start, _videotag.seekable.start(index));
        }
        return start;
    }

    function _getSeekableEnd() {
        var index = _videotag.seekable ? _videotag.seekable.length : 0;
        var end = 0;

        while (index--) {
            end = Math.max(end, _videotag.seekable.end(index));
        }
        return end;
    }

    this.stop = function () {
        clearTimeouts();
        _clearVideotagSource();
        this.clearTracks();
        // IE/Edge continue to play a video after changing video.src and calling video.load()
        // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/5383483/ (not fixed in Edge 14)
        if (_environment.Browser.ie) {
            _videotag.pause();
        }
        this.setState(_events.STATE_IDLE);
    };

    this.destroy = function () {
        _beforeResumeHandler = _helpers2.default.noop;
        _removeListeners(MediaEvents, _videotag);
        this.removeTracksListener(_videotag.audioTracks, 'change', _audioTrackChangeHandler);
        this.removeTracksListener(_videotag.textTracks, 'change', _this.textTrackChangeHandler);
        this.off();
    };

    this.init = function (item) {
        _setLevels(item.sources);
        var source = _levels[_currentQuality];
        _androidHls = (0, _html5AndroidHls.isAndroidHls)(source);
        if (_androidHls) {
            // Playback rate is broken on Android HLS
            _this.supportsPlaybackRate = false;
            // Android HLS doesnt update its times correctly so it always falls in here.  Do not allow it to stall.
            MediaEvents.waiting = _helpers2.default.noop;
        }
        _this.eventsOn_();
        // the loadeddata event determines the mediaType for HLS sources
        if (_levels.length && _levels[0].type !== 'hls') {
            this.sendMediaType(_levels);
        }
        visualQuality.reason = '';
    };

    this.preload = function (item) {
        _setLevels(item.sources);
        var source = _levels[_currentQuality];
        var preload = source.preload || 'metadata';
        if (preload !== 'none') {
            _videotag.setAttribute('preload', preload);
            _setVideotagSource(source);
        }
    };

    this.load = function (item) {
        _setLevels(item.sources);
        _completeLoad(item.starttime, item.duration || 0);
        this.setupSideloadedTracks(item.tracks);
    };

    this.play = function () {
        _beforeResumeHandler();
        return _play();
    };

    this.pause = function () {
        clearTimeouts();
        _beforeResumeHandler = function _beforeResumeHandler() {
            var unpausing = _videotag.paused && _videotag.currentTime;
            if (unpausing && _this.isLive()) {
                var end = _getSeekableEnd();
                var seekableDuration = end - _getSeekableStart();
                var isLiveNotDvr = seekableDuration < MIN_DVR_DURATION;
                var behindLiveEdge = end - _videotag.currentTime;
                if (isLiveNotDvr && end && (behindLiveEdge > 15 || behindLiveEdge < 0)) {
                    // resume playback at edge of live stream
                    _seekOffset = Math.max(end - 10, end - seekableDuration);
                    _setPositionBeforeSeek(_videotag.currentTime);
                    _videotag.currentTime = _seekOffset;
                }
            }
        };
        _videotag.pause();
    };

    this.seek = function (seekPos) {
        if (seekPos < 0) {
            seekPos += _getSeekableStart() + _getSeekableEnd();
        }
        if (!_canSeek) {
            _canSeek = !!_getSeekableEnd();
        }
        if (_canSeek) {
            _delayedSeek = 0;
            // setting currentTime can throw an invalid DOM state exception if the video is not ready
            try {
                _this.seeking = true;
                _seekOffset = seekPos;
                _setPositionBeforeSeek(_videotag.currentTime);
                _videotag.currentTime = seekPos;
            } catch (e) {
                _this.seeking = false;
                _delayedSeek = seekPos;
            }
        } else {
            _delayedSeek = seekPos;
            // Firefox isn't firing canplay event when in a paused state
            // https://bugzilla.mozilla.org/show_bug.cgi?id=1194624
            if (_environment.Browser.firefox && _videotag.paused) {
                _play();
            }
        }
    };

    function _audioTrackChangeHandler() {
        var _selectedAudioTrackIndex = -1;
        for (var i = 0; i < _videotag.audioTracks.length; i++) {
            if (_videotag.audioTracks[i].enabled) {
                _selectedAudioTrackIndex = i;
                break;
            }
        }
        _setCurrentAudioTrack(_selectedAudioTrackIndex);
    }

    function _sendFullscreen(e) {
        _this.trigger('fullscreenchange', {
            target: e.target,
            jwstate: _fullscreenState
        });
    }

    this.setVisibility = function (state) {
        state = !!state;
        if (state || _environment.OS.android) {
            // Changing visibility to hidden on Android < 4.2 causes
            // the pause event to be fired. This causes audio files to
            // become unplayable. Hence the video tag is always kept
            // visible on Android devices.
            (0, _css.style)(_this.container, {
                visibility: 'visible',
                opacity: 1
            });
        } else {
            (0, _css.style)(_this.container, {
                visibility: '',
                opacity: 0
            });
        }
    };

    this.resize = function (width, height, stretching) {
        if (!width || !height || !_videotag.videoWidth || !_videotag.videoHeight) {
            return;
        }
        var styles = {
            objectFit: '',
            width: '',
            height: ''
        };
        if (stretching === 'uniform') {
            // snap video to edges when the difference in aspect ratio is less than 9%
            var playerAspectRatio = width / height;
            var videoAspectRatio = _videotag.videoWidth / _videotag.videoHeight;
            if (Math.abs(playerAspectRatio - videoAspectRatio) < 0.09) {
                styles.objectFit = 'fill';
                stretching = 'exactfit';
            }
        }
        // Prior to iOS 9, object-fit worked poorly
        // object-fit is not implemented in IE or Android Browser in 4.4 and lower
        // http://caniuse.com/#feat=object-fit
        // feature detection may work for IE but not for browsers where object-fit works for images only
        var fitVideoUsingTransforms = _environment.Browser.ie || _environment.OS.iOS && _environment.OS.version.major < 9 || _environment.Browser.androidNative;
        if (fitVideoUsingTransforms) {
            // Use transforms to center and scale video in container
            var x = -Math.floor(_videotag.videoWidth / 2 + 1);
            var y = -Math.floor(_videotag.videoHeight / 2 + 1);
            var scaleX = Math.ceil(width * 100 / _videotag.videoWidth) / 100;
            var scaleY = Math.ceil(height * 100 / _videotag.videoHeight) / 100;
            if (stretching === 'none') {
                scaleX = scaleY = 1;
            } else if (stretching === 'fill') {
                scaleX = scaleY = Math.max(scaleX, scaleY);
            } else if (stretching === 'uniform') {
                scaleX = scaleY = Math.min(scaleX, scaleY);
            }
            styles.width = _videotag.videoWidth;
            styles.height = _videotag.videoHeight;
            styles.top = styles.left = '50%';
            styles.margin = 0;
            (0, _css.transform)(_videotag, 'translate(' + x + 'px, ' + y + 'px) scale(' + scaleX.toFixed(2) + ', ' + scaleY.toFixed(2) + ')');
        }
        (0, _css.style)(_videotag, styles);
    };

    this.setFullscreen = function (state) {
        state = !!state;

        // This implementation is for iOS and Android WebKit only
        // This won't get called if the player container can go fullscreen
        if (state) {
            var status = _helpers2.default.tryCatch(function () {
                var enterFullscreen = _videotag.webkitEnterFullscreen || _videotag.webkitEnterFullScreen;
                if (enterFullscreen) {
                    enterFullscreen.apply(_videotag);
                }
            });

            if (status instanceof _helpers2.default.Error) {
                // object can't go fullscreen
                return false;
            }
            return _this.getFullScreen();
        }

        var exitFullscreen = _videotag.webkitExitFullscreen || _videotag.webkitExitFullScreen;
        if (exitFullscreen) {
            exitFullscreen.apply(_videotag);
        }

        return state;
    };

    _this.getFullScreen = function () {
        return _fullscreenState || !!_videotag.webkitDisplayingFullscreen;
    };

    this.setCurrentQuality = function (quality) {
        if (_currentQuality === quality) {
            return;
        }
        if (quality >= 0) {
            if (_levels && _levels.length > quality) {
                _currentQuality = quality;
                visualQuality.reason = 'api';
                visualQuality.level = {};
                this.trigger(_events.MEDIA_LEVEL_CHANGED, {
                    currentQuality: quality,
                    levels: _getPublicLevels(_levels)
                });

                // The playerConfig is not updated automatically, because it is a clone
                // from when the provider was first initialized
                _playerConfig.qualityLabel = _levels[quality].label;

                var time = _videotag.currentTime || 0;
                var duration = _this.getDuration();
                _completeLoad(time, duration);
                _play();
            }
        }
    };

    this.setPlaybackRate = function (playbackRate) {
        // Set defaultPlaybackRate so that we do not send ratechange events when setting src
        _videotag.playbackRate = _videotag.defaultPlaybackRate = playbackRate;
    };

    this.getPlaybackRate = function () {
        return _videotag.playbackRate;
    };

    this.getCurrentQuality = function () {
        return _currentQuality;
    };

    this.getQualityLevels = function () {
        return _underscore2.default.map(_levels, function (level) {
            return (0, _dataNormalizer.qualityLevel)(level);
        });
    };

    this.getName = function () {
        return { name: _name };
    };
    this.setCurrentAudioTrack = _setCurrentAudioTrack;

    this.getAudioTracks = _getAudioTracks;

    this.getCurrentAudioTrack = _getCurrentAudioTrack;

    function _setAudioTracks(tracks) {
        _audioTracks = null;
        if (!tracks) {
            return;
        }
        if (tracks.length) {
            for (var i = 0; i < tracks.length; i++) {
                if (tracks[i].enabled) {
                    _currentAudioTrackIndex = i;
                    break;
                }
            }
            if (_currentAudioTrackIndex === -1) {
                _currentAudioTrackIndex = 0;
                tracks[_currentAudioTrackIndex].enabled = true;
            }
            _audioTracks = _underscore2.default.map(tracks, function (track) {
                var _track = {
                    name: track.label || track.language,
                    language: track.language
                };
                return _track;
            });
        }
        _this.addTracksListener(tracks, 'change', _audioTrackChangeHandler);
        if (_audioTracks) {
            _this.trigger('audioTracks', { currentTrack: _currentAudioTrackIndex, tracks: _audioTracks });
        }
    }

    function _setCurrentAudioTrack(index) {
        if (_videotag && _videotag.audioTracks && _audioTracks && index > -1 && index < _videotag.audioTracks.length && index !== _currentAudioTrackIndex) {
            _videotag.audioTracks[_currentAudioTrackIndex].enabled = false;
            _currentAudioTrackIndex = index;
            _videotag.audioTracks[_currentAudioTrackIndex].enabled = true;
            _this.trigger('audioTrackChanged', { currentTrack: _currentAudioTrackIndex,
                tracks: _audioTracks });
        }
    }

    function _getAudioTracks() {
        return _audioTracks || [];
    }

    function _getCurrentAudioTrack() {
        return _currentAudioTrackIndex;
    }

    function _setMediaType() {
        // Send mediaType when format is HLS. Other types are handled earlier by default.js.
        if (_levels[0].type === 'hls') {
            var mediaType = 'video';
            if (_videotag.videoHeight === 0) {
                // Safari will report videoHeight as 0 for HLS streams until readyState indicates that the browser has data
                if ((_environment.OS.iOS || _environment.Browser.safari) && _videotag.readyState < 2) {
                    return;
                }
                mediaType = 'audio';
            }
            _this.trigger(_events.MEDIA_TYPE, { mediaType: mediaType });
        }
    }

    // If we're live and the buffer end has remained the same for some time, mark the stream as stale and check if the stream is over
    function checkStaleStream() {
        // Never kill a stale live stream if the timeout was configured to 0
        if (_staleStreamDuration === 0) {
            return;
        }
        var endOfBuffer = (0, _timeRanges2.default)(_videotag.buffered);
        var live = _this.isLive();

        // Don't end if we have noting buffered yet, or cannot get any information about the buffer
        if (live && endOfBuffer && _lastEndOfBuffer === endOfBuffer) {
            if (_staleStreamTimeout === -1) {
                _staleStreamTimeout = setTimeout(function () {
                    _stale = true;
                    checkStreamEnded();
                }, _staleStreamDuration);
            }
        } else {
            clearTimeouts();
            _stale = false;
        }

        _lastEndOfBuffer = endOfBuffer;
    }

    function checkStreamEnded() {
        if (_stale && _this.atEdgeOfLiveStream()) {
            _this.trigger(_events.MEDIA_ERROR, {
                message: 'The live stream is either down or has ended'
            });
            return true;
        }

        return false;
    }

    function clearTimeouts() {
        clearTimeout(_staleStreamTimeout);
        _staleStreamTimeout = -1;
    }
}

_extends(VideoProvider.prototype, _default2.default);

VideoProvider.getName = function () {
    return { name: 'html5' };
};

exports.default = VideoProvider;

/***/ }),

/***/ 93:
/*!********************************************!*\
  !*** ./src/js/controller/tracks-loader.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadFile = loadFile;
exports.cancelXhr = cancelXhr;
exports.convertToVTTCues = convertToVTTCues;

var _vttcue = __webpack_require__(/*! parsers/captions/vttcue */ 96);

var _vttcue2 = _interopRequireDefault(_vttcue);

var _coreLoader = __webpack_require__(/*! ../api/core-loader */ 12);

var _helpers = __webpack_require__(/*! utils/helpers */ 6);

var _helpers2 = _interopRequireDefault(_helpers);

var _parsers = __webpack_require__(/*! parsers/parsers */ 13);

var _srt = __webpack_require__(/*! parsers/captions/srt */ 77);

var _srt2 = _interopRequireDefault(_srt);

var _dfxp = __webpack_require__(/*! parsers/captions/dfxp */ 98);

var _dfxp2 = _interopRequireDefault(_dfxp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadFile(track, successHandler, errorHandler) {
    track.xhr = _helpers2.default.ajax(track.file, function (xhr) {
        xhrSuccess(xhr, track, successHandler, errorHandler);
    }, errorHandler);
}

function cancelXhr(tracks) {
    if (tracks) {
        tracks.forEach(function (track) {
            var xhr = track.xhr;
            if (xhr) {
                xhr.onload = null;
                xhr.onreadystatechange = null;
                xhr.onerror = null;
                if ('abort' in xhr) {
                    xhr.abort();
                }
            }
            delete track.xhr;
        });
    }
}

function convertToVTTCues(cues) {
    // VTTCue is available natively or polyfilled where necessary
    return cues.map(function (cue) {
        return new _vttcue2.default(cue.begin, cue.end, cue.text);
    });
}

function xhrSuccess(xhr, track, successHandler, errorHandler) {
    var xmlRoot = xhr.responseXML ? xhr.responseXML.firstChild : null;
    var cues;
    var vttCues;

    // IE9 sets the firstChild element to the root <xml> tag
    if (xmlRoot) {
        if ((0, _parsers.localName)(xmlRoot) === 'xml') {
            xmlRoot = xmlRoot.nextSibling;
        }
        // Ignore all comments
        while (xmlRoot.nodeType === xmlRoot.COMMENT_NODE) {
            xmlRoot = xmlRoot.nextSibling;
        }
    }

    try {
        if (xmlRoot && (0, _parsers.localName)(xmlRoot) === 'tt') {
            // parse dfxp track
            cues = (0, _dfxp2.default)(xhr.responseXML);
            vttCues = convertToVTTCues(cues);
            delete track.xhr;
            successHandler(vttCues);
        } else {
            // parse VTT/SRT track
            var responseText = xhr.responseText;
            if (responseText.indexOf('WEBVTT') >= 0) {
                // make VTTCues from VTT track
                loadVttParser().then(function (VTTParser) {
                    var parser = new VTTParser(window);
                    vttCues = [];
                    parser.oncue = function (cue) {
                        vttCues.push(cue);
                    };

                    parser.onflush = function () {
                        delete track.xhr;
                        successHandler(vttCues);
                    };

                    // Parse calls onflush internally
                    parser.parse(responseText);
                }).catch(function (error) {
                    delete track.xhr;
                    errorHandler(error);
                });
            } else {
                // make VTTCues from SRT track
                cues = (0, _srt2.default)(responseText);
                vttCues = convertToVTTCues(cues);
                delete track.xhr;
                successHandler(vttCues);
            }
        }
    } catch (error) {
        delete track.xhr;
        errorHandler(error);
    }
}

function loadVttParser() {
    return __webpack_require__.e/* require.ensure */(8/*! vttparser */).then((function (require) {
        return __webpack_require__(/*! parsers/captions/vttparser */ 97).default;
    }).bind(null, __webpack_require__)).catch(_coreLoader.chunkLoadErrorHandler);
}

/***/ }),

/***/ 94:
/*!********************************************!*\
  !*** ./src/js/controller/tracks-helper.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createId = createId;
exports.createLabel = createLabel;
function createId(track, tracksCount) {
    var trackId;
    var prefix = track.kind || 'cc';
    if (track.default || track.defaulttrack) {
        trackId = 'default';
    } else {
        trackId = track._id || track.file || prefix + tracksCount;
    }
    return trackId;
}

function createLabel(track, unknownCount) {
    var label = track.label || track.name || track.language;
    if (!label) {
        label = 'Unknown CC';
        unknownCount += 1;
        if (unknownCount > 1) {
            label += ' [' + unknownCount + ']';
        }
    }
    return { label: label, unknownCount: unknownCount };
}

/***/ }),

/***/ 95:
/*!************************************************!*\
  !*** ./src/js/providers/utils/play-promise.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createPlayPromise;

var _promise = __webpack_require__(/*! polyfills/promise */ 4);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createPlayPromise(video) {
    return new _promise2.default(function (resolve, reject) {
        if (video.paused) {
            return reject(new Error('Play refused.'));
        }
        var removeEventListeners = function removeEventListeners() {
            video.removeEventListener('playing', listener);
            video.removeEventListener('pause', listener);
            video.removeEventListener('abort', listener);
            video.removeEventListener('error', listener);
        };
        var listener = function listener(e) {
            removeEventListeners();
            if (e.type === 'playing') {
                resolve();
            } else {
                reject(new Error('The play() request was interrupted by a "' + e.type + '" event.'));
            }
        };

        video.addEventListener('playing', listener);
        video.addEventListener('abort', listener);
        video.addEventListener('error', listener);
        video.addEventListener('pause', listener);
    });
}

/***/ }),

/***/ 96:
/*!*******************************************!*\
  !*** ./src/js/parsers/captions/vttcue.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Copyright 2013 vtt.js Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

var VTTCue = window.VTTCue;

function findDirectionSetting(value) {
    if (typeof value !== 'string') {
        return false;
    }
    var directionSetting = {
        '': true,
        lr: true,
        rl: true
    };
    var dir = directionSetting[value.toLowerCase()];
    return dir ? value.toLowerCase() : false;
}

function findAlignSetting(value) {
    if (typeof value !== 'string') {
        return false;
    }
    var alignSetting = {
        start: true,
        middle: true,
        end: true,
        left: true,
        right: true
    };
    var align = alignSetting[value.toLowerCase()];
    return align ? value.toLowerCase() : false;
}

if (!VTTCue) {
    var autoKeyword = 'auto';

    VTTCue = function VTTCue(startTime, endTime, text) {
        var cue = this;

        /**
         * Shim implementation specific properties. These properties are not in
         * the spec.
         */

        // Lets us know when the VTTCue's data has changed in such a way that we need
        // to recompute its display state. This lets us compute its display state
        // lazily.
        cue.hasBeenReset = false;

        /**
         * VTTCue and TextTrackCue properties
         * http://dev.w3.org/html5/webvtt/#vttcue-interface
         */

        var _id = '';
        var _pauseOnExit = false;
        var _startTime = startTime;
        var _endTime = endTime;
        var _text = text;
        var _region = null;
        var _vertical = '';
        var _snapToLines = true;
        var _line = autoKeyword;
        var _lineAlign = 'start';
        var _position = autoKeyword;
        var _size = 100;
        var _align = 'middle';

        Object.defineProperty(cue, 'id', {
            enumerable: true,
            get: function get() {
                return _id;
            },
            set: function set(value) {
                _id = '' + value;
            }
        });

        Object.defineProperty(cue, 'pauseOnExit', {
            enumerable: true,
            get: function get() {
                return _pauseOnExit;
            },
            set: function set(value) {
                _pauseOnExit = !!value;
            }
        });

        Object.defineProperty(cue, 'startTime', {
            enumerable: true,
            get: function get() {
                return _startTime;
            },
            set: function set(value) {
                if (typeof value !== 'number') {
                    throw new TypeError('Start time must be set to a number.');
                }
                _startTime = value;
                this.hasBeenReset = true;
            }
        });

        Object.defineProperty(cue, 'endTime', {
            enumerable: true,
            get: function get() {
                return _endTime;
            },
            set: function set(value) {
                if (typeof value !== 'number') {
                    throw new TypeError('End time must be set to a number.');
                }
                _endTime = value;
                this.hasBeenReset = true;
            }
        });

        Object.defineProperty(cue, 'text', {
            enumerable: true,
            get: function get() {
                return _text;
            },
            set: function set(value) {
                _text = '' + value;
                this.hasBeenReset = true;
            }
        });

        Object.defineProperty(cue, 'region', {
            enumerable: true,
            get: function get() {
                return _region;
            },
            set: function set(value) {
                _region = value;
                this.hasBeenReset = true;
            }
        });

        Object.defineProperty(cue, 'vertical', {
            enumerable: true,
            get: function get() {
                return _vertical;
            },
            set: function set(value) {
                var setting = findDirectionSetting(value);
                // Have to check for false because the setting an be an empty string.
                if (setting === false) {
                    throw new SyntaxError('An invalid or illegal string was specified.');
                }
                _vertical = setting;
                this.hasBeenReset = true;
            }
        });

        Object.defineProperty(cue, 'snapToLines', {
            enumerable: true,
            get: function get() {
                return _snapToLines;
            },
            set: function set(value) {
                _snapToLines = !!value;
                this.hasBeenReset = true;
            }
        });

        Object.defineProperty(cue, 'line', {
            enumerable: true,
            get: function get() {
                return _line;
            },
            set: function set(value) {
                if (typeof value !== 'number' && value !== autoKeyword) {
                    throw new SyntaxError('An invalid number or illegal string was specified.');
                }
                _line = value;
                this.hasBeenReset = true;
            }
        });

        Object.defineProperty(cue, 'lineAlign', {
            enumerable: true,
            get: function get() {
                return _lineAlign;
            },
            set: function set(value) {
                var setting = findAlignSetting(value);
                if (!setting) {
                    throw new SyntaxError('An invalid or illegal string was specified.');
                }
                _lineAlign = setting;
                this.hasBeenReset = true;
            }
        });

        Object.defineProperty(cue, 'position', {
            enumerable: true,
            get: function get() {
                return _position;
            },
            set: function set(value) {
                if (value < 0 || value > 100) {
                    throw new Error('Position must be between 0 and 100.');
                }
                _position = value;
                this.hasBeenReset = true;
            }
        });

        Object.defineProperty(cue, 'size', {
            enumerable: true,
            get: function get() {
                return _size;
            },
            set: function set(value) {
                if (value < 0 || value > 100) {
                    throw new Error('Size must be between 0 and 100.');
                }
                _size = value;
                this.hasBeenReset = true;
            }
        });

        Object.defineProperty(cue, 'align', {
            enumerable: true,
            get: function get() {
                return _align;
            },
            set: function set(value) {
                var setting = findAlignSetting(value);
                if (!setting) {
                    throw new SyntaxError('An invalid or illegal string was specified.');
                }
                _align = setting;
                this.hasBeenReset = true;
            }
        });

        /**
         * Other <track> spec defined properties
         */

        // http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#text-track-cue-display-state
        cue.displayState = undefined;
    };

    /**
     * VTTCue methods
     */

    VTTCue.prototype.getCueAsHTML = function () {
        // Assume WebVTT.convertCueToDOMTree is on the global.
        var WebVTT = window.WebVTT;
        return WebVTT.convertCueToDOMTree(window, this.text);
    };
}

exports.default = VTTCue;

/***/ }),

/***/ 98:
/*!*****************************************!*\
  !*** ./src/js/parsers/captions/dfxp.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Dfxp;

var _strings = __webpack_require__(/*! utils/strings */ 1);

// Component that loads and parses an DFXP file

function Dfxp(xmlDoc) {
    validate(xmlDoc);
    var _captions = [];
    var paragraphs = xmlDoc.getElementsByTagName('p');
    // Default frameRate is 30
    var frameRate = 30;
    var tt = xmlDoc.getElementsByTagName('tt');
    if (tt && tt[0]) {
        var parsedFrameRate = parseFloat(tt[0].getAttribute('ttp:frameRate'));
        if (!isNaN(parsedFrameRate)) {
            frameRate = parsedFrameRate;
        }
    }
    validate(paragraphs);
    if (!paragraphs.length) {
        paragraphs = xmlDoc.getElementsByTagName('tt:p');
        if (!paragraphs.length) {
            paragraphs = xmlDoc.getElementsByTagName('tts:p');
        }
    }

    for (var i = 0; i < paragraphs.length; i++) {
        var p = paragraphs[i];

        var breaks = p.getElementsByTagName('br');
        for (var j = 0; j < breaks.length; j++) {
            var b = breaks[j];
            b.parentNode.replaceChild(xmlDoc.createTextNode('\r\n'), b);
        }

        var rawText = p.innerHTML || p.textContent || p.text || '';
        var text = (0, _strings.trim)(rawText).replace(/>\s+</g, '><').replace(/(<\/?)tts?:/g, '$1').replace(/<br.*?\/>/g, '\r\n');
        if (text) {
            var begin = p.getAttribute('begin');
            var dur = p.getAttribute('dur');
            var end = p.getAttribute('end');

            var entry = {
                begin: (0, _strings.seconds)(begin, frameRate),
                text: text
            };
            if (end) {
                entry.end = (0, _strings.seconds)(end, frameRate);
            } else if (dur) {
                entry.end = entry.begin + (0, _strings.seconds)(dur, frameRate);
            }
            _captions.push(entry);
        }
    }
    if (!_captions.length) {
        parseError();
    }
    return _captions;
}

function validate(object) {
    if (!object) {
        parseError();
    }
}

function parseError() {
    throw new Error('Invalid DFXP file');
}

/***/ })

});
//# sourceMappingURL=provider.html5.f82a441d96b8dc3242ba.map