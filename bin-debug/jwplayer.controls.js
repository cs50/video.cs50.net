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
webpackJsonpjwplayer([4],[
/* 0 */,
/* 1 */,
/* 2 */
/*!******************************************!*\
  !*** ./src/js/view/controls/controls.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _environment = __webpack_require__(/*! environment/environment */ 11);

var _constants = __webpack_require__(/*! view/constants */ 78);

var _events = __webpack_require__(/*! events/events */ 5);

var _backbone = __webpack_require__(/*! utils/backbone.events */ 7);

var _backbone2 = _interopRequireDefault(_backbone);

var _helpers = __webpack_require__(/*! utils/helpers */ 6);

var _helpers2 = _interopRequireDefault(_helpers);

var _date = __webpack_require__(/*! utils/date */ 25);

var _button = __webpack_require__(/*! view/controls/components/button */ 75);

var _button2 = _interopRequireDefault(_button);

var _controlbar = __webpack_require__(/*! view/controls/controlbar */ 100);

var _controlbar2 = _interopRequireDefault(_controlbar);

var _displayContainer = __webpack_require__(/*! view/controls/display-container */ 129);

var _displayContainer2 = _interopRequireDefault(_displayContainer);

var _nextuptooltip = __webpack_require__(/*! view/controls/nextuptooltip */ 135);

var _nextuptooltip2 = _interopRequireDefault(_nextuptooltip);

var _rightclick = __webpack_require__(/*! view/controls/rightclick */ 137);

var _rightclick2 = _interopRequireDefault(_rightclick);

var _settingsMenu = __webpack_require__(/*! view/controls/settings-menu */ 139);

var _breakpoint = __webpack_require__(/*! view/utils/breakpoint */ 82);

var _icons = __webpack_require__(/*! view/controls/icons */ 74);

var _errorContainer = __webpack_require__(/*! view/error-container */ 35);

var _errorContainer2 = _interopRequireDefault(_errorContainer);

var _players = __webpack_require__(/*! api/players */ 26);

var _players2 = _interopRequireDefault(_players);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__webpack_require__(/*! css/controls.less */ 147);

var ACTIVE_TIMEOUT = _environment.OS.mobile ? 4000 : 2000;

_errorContainer2.default.cloneIcon = _icons.cloneIcon;
_players2.default.forEach(function (api) {
    if (api.getState() === _events.STATE_ERROR) {
        var errorIconContainer = api.getContainer().querySelector('.jw-error-msg .jw-icon');
        if (errorIconContainer && !errorIconContainer.hasChildNodes()) {
            errorIconContainer.appendChild(_errorContainer2.default.cloneIcon('error'));
        }
    }
});

var reasonInteraction = function reasonInteraction() {
    return { reason: 'interaction' };
};

var Controls = function () {
    function Controls(context, playerContainer) {
        var _this = this;

        _classCallCheck(this, Controls);

        _extends(this, _backbone2.default);

        // Alphabetic order
        // Any property on the prototype should be initialized here first
        this.activeTimeout = -1;
        this.inactiveTime = 0;
        this.context = context;
        this.controlbar = null;
        this.displayContainer = null;
        this.backdrop = null;
        this.enabled = true;
        this.instreamState = null;
        this.keydownCallback = null;
        this.keyupCallback = null;
        this.blurCallback = null;
        this.mute = null;
        this.nextUpToolTip = null;
        this.playerContainer = playerContainer;
        this.rightClickMenu = null;
        this.settingsMenu = null;
        this.showing = false;
        this.unmuteCallback = null;
        this.logo = null;
        this.div = null;
        this.dimensions = {};
        this.userInactiveTimeout = function () {
            // Rerun at the scheduled time if remaining time is greater than the display refresh rate
            var remainingTime = _this.inactiveTime - (0, _date.now)();
            if (_this.inactiveTime && remainingTime > 16) {
                _this.activeTimeout = setTimeout(_this.userInactiveTimeout, remainingTime);
                return;
            }
            _this.userInactive();
        };
    }

    _createClass(Controls, [{
        key: 'enable',
        value: function enable(api, model) {
            var _this2 = this;

            var element = this.context.createElement('div');
            element.className = 'jw-controls jw-reset';
            this.div = element;

            var backdrop = this.context.createElement('div');
            backdrop.className = 'jw-controls-backdrop jw-reset';
            this.backdrop = backdrop;

            this.logo = this.playerContainer.querySelector('.jw-logo');

            var touchMode = model.get('touchMode');

            // Display Buttons
            if (!this.displayContainer) {
                var displayContainer = new _displayContainer2.default(model, api);

                displayContainer.buttons.display.on('click tap enter', function () {
                    _this2.trigger(_events.DISPLAY_CLICK);
                    _this2.userActive(1000);
                    api.playToggle(reasonInteraction());
                });

                this.div.appendChild(displayContainer.element());
                this.displayContainer = displayContainer;
            }

            // Touch UI mode when we're on mobile and we have a percentage height or we can fit the large UI in
            if (touchMode) {
                _helpers2.default.addClass(this.playerContainer, 'jw-flag-touch');
            } else {
                this.rightClickMenu = new _rightclick2.default();
                model.change('flashBlocked', function (modelChanged, isBlocked) {
                    if (isBlocked) {
                        _this2.rightClickMenu.destroy();
                    } else {
                        _this2.rightClickMenu.setup(modelChanged, _this2.playerContainer, _this2.playerContainer);
                    }
                }, this);
            }

            // Controlbar
            var controlbar = this.controlbar = new _controlbar2.default(api, model);
            controlbar.on(_events.USER_ACTION, function () {
                return _this2.userActive();
            });
            controlbar.on('nextShown', function (data) {
                this.trigger('nextShown', data);
            }, this);

            // Next Up Tooltip
            if (model.get('nextUpDisplay') && !controlbar.nextUpToolTip) {
                var nextUpToolTip = new _nextuptooltip2.default(model, api, this.playerContainer);
                nextUpToolTip.on('all', this.trigger, this);
                nextUpToolTip.setup(this.context);
                controlbar.nextUpToolTip = nextUpToolTip;

                // NextUp needs to be behind the controlbar to not block other tooltips
                this.div.appendChild(nextUpToolTip.element());
            }

            this.div.appendChild(controlbar.element());

            // Settings Menu
            var lastState = null;
            var visibilityChangeHandler = function visibilityChangeHandler(visible, evt) {
                var state = model.get('state');
                var settingsInteraction = { reason: 'settingsInteraction' };
                var isKeyEvent = (evt && evt.sourceEvent || evt || {}).type === 'keydown';

                _helpers2.default.toggleClass(_this2.div, 'jw-settings-open', visible);
                if ((0, _breakpoint.getBreakpoint)(model.get('containerWidth')) < 2) {
                    if (visible && state === _events.STATE_PLAYING) {
                        // Pause playback on open if we're currently playing
                        api.pause(settingsInteraction);
                    } else if (!visible && state === _events.STATE_PAUSED && lastState === _events.STATE_PLAYING) {
                        // Resume playback on close if we are paused and were playing before
                        api.play(settingsInteraction);
                    }
                }

                // Trigger userActive so that a dismissive click outside the player can hide the controlbar
                var activeTimeout = visible || isKeyEvent ? 0 : ACTIVE_TIMEOUT;
                _this2.userActive(activeTimeout);
                lastState = state;

                var settingsButton = _this2.controlbar.elements.settingsButton;
                if (!visible && isKeyEvent && settingsButton) {
                    settingsButton.element().focus();
                }
            };
            var settingsMenu = this.settingsMenu = (0, _settingsMenu.createSettingsMenu)(controlbar, visibilityChangeHandler);
            (0, _settingsMenu.setupSubmenuListeners)(settingsMenu, controlbar, model, api);

            if (_environment.OS.mobile) {
                this.div.appendChild(settingsMenu.element());
            } else {
                this.div.insertBefore(settingsMenu.element(), controlbar.element());
            }

            // Unmute Autoplay behavior.
            var setupUnmuteAutoplay = function setupUnmuteAutoplay(_model) {
                if (_model.get('autostartMuted')) {
                    var unmuteCallback = function unmuteCallback() {
                        return _this2.unmuteAutoplay(api, _model);
                    };

                    // Show unmute botton only on mobile.
                    if (_environment.OS.mobile) {
                        _this2.mute = (0, _button2.default)('jw-autostart-mute jw-off', unmuteCallback, _model.get('localization').unmute, [(0, _icons.cloneIcon)('volume-0')]);
                        _this2.mute.show();
                        _this2.div.appendChild(_this2.mute.element());
                    }

                    // Set mute state in the controlbar
                    controlbar.renderVolume(true, _model.get('volume'));
                    // Hide the controlbar until the autostart flag is removed
                    _helpers2.default.addClass(_this2.playerContainer, 'jw-flag-autostart');

                    _model.on('change:autostartFailed change:autostartMuted change:mute', unmuteCallback, _this2);
                    _this2.unmuteCallback = unmuteCallback;
                }
            };
            model.once('change:autostartMuted', setupUnmuteAutoplay);
            setupUnmuteAutoplay(model);

            // Keyboard Commands
            function adjustSeek(amount) {
                var min = 0;
                var max = model.get('duration');
                var position = model.get('position');
                if (model.get('streamType') === 'DVR') {
                    min = max;
                    max = Math.max(position, _constants.dvrSeekLimit);
                }
                var newSeek = _helpers2.default.between(position + amount, min, max);
                api.seek(newSeek, reasonInteraction());
            }

            function adjustVolume(amount) {
                var newVol = _helpers2.default.between(model.get('volume') + amount, 0, 100);
                api.setVolume(newVol);
            }

            function onEscape() {
                if (model.get('fullscreen')) {
                    api.setFullscreen(false);
                    this.playerContainer.blur();
                    this.userInactive();
                    return;
                }

                var related = api.getPlugin('related');
                if (related) {
                    related.close({ type: 'escape' });
                }
            }

            var handleKeydown = function handleKeydown(evt) {
                // If Meta keys return
                if (evt.ctrlKey || evt.metaKey) {
                    // Let event bubble upwards
                    return true;
                }

                switch (evt.keyCode) {
                    case 27:
                        // Esc
                        onEscape();
                        break;
                    case 13: // enter
                    case 32:
                        // space
                        api.playToggle(reasonInteraction());
                        break;
                    case 37:
                        // left-arrow, if not adMode
                        if (!_this2.instreamState) {
                            adjustSeek(-5);
                        }
                        break;
                    case 39:
                        // right-arrow, if not adMode
                        if (!_this2.instreamState) {
                            adjustSeek(5);
                        }
                        break;
                    case 38:
                        // up-arrow
                        adjustVolume(10);
                        break;
                    case 40:
                        // down-arrow
                        adjustVolume(-10);
                        break;
                    case 67:
                        // c-key
                        {
                            var captionsList = api.getCaptionsList();
                            var listLength = captionsList.length;
                            if (listLength) {
                                var nextIndex = (api.getCurrentCaptions() + 1) % listLength;
                                api.setCurrentCaptions(nextIndex);
                            }
                        }
                        break;
                    case 77:
                        // m-key
                        api.setMute();
                        break;
                    case 70:
                        // f-key
                        api.setFullscreen();
                        break;
                    default:
                        if (evt.keyCode >= 48 && evt.keyCode <= 59) {
                            // if 0-9 number key, move to n/10 of the percentage of the video
                            var number = evt.keyCode - 48;
                            var newSeek = number / 10 * model.get('duration');
                            api.seek(newSeek, reasonInteraction());
                        }
                }

                if (/13|32|37|38|39|40/.test(evt.keyCode)) {
                    // Prevent keypresses from scrolling the screen
                    evt.preventDefault();
                    return false;
                }
            };
            this.playerContainer.addEventListener('keydown', handleKeydown);
            this.keydownCallback = handleKeydown;

            // keep controls active when navigating inside the player
            var handleKeyup = function handleKeyup(evt) {
                if (!_this2.instreamState) {
                    var isTab = evt.keyCode === 9;
                    if (isTab) {
                        var insideContainer = _this2.playerContainer.contains(evt.target);
                        var activeTimeout = insideContainer ? 0 : ACTIVE_TIMEOUT;
                        _this2.userActive(activeTimeout);
                    }
                }
            };
            this.playerContainer.addEventListener('keyup', handleKeyup);
            this.keyupCallback = handleKeyup;

            // Hide controls when focus leaves the player
            var blurCallback = function blurCallback(evt) {
                var focusedElement = evt.relatedTarget || document.querySelector(':focus');
                if (!focusedElement) {
                    return;
                }
                var insideContainer = _this2.playerContainer.contains(focusedElement);
                if (!insideContainer) {
                    _this2.userInactive();
                }
            };
            this.playerContainer.addEventListener('blur', blurCallback, true);
            this.blurCallback = blurCallback;

            // Show controls when enabled
            this.userActive();

            this.playerContainer.appendChild(this.div);

            this.addBackdrop();
        }
    }, {
        key: 'disable',
        value: function disable(model) {
            this.off();

            if (model) {
                model.off(null, null, this);
            }

            clearTimeout(this.activeTimeout);
            this.activeTimeout = -1;

            if (this.div.parentNode) {
                _helpers2.default.removeClass(this.playerContainer, 'jw-flag-touch');
                this.playerContainer.removeChild(this.div);
            }
            if (this.rightClickMenu) {
                this.rightClickMenu.destroy();
            }

            if (this.keydownCallback) {
                this.playerContainer.removeEventListener('keydown', this.keydownCallback);
            }

            if (this.keyupCallback) {
                this.playerContainer.removeEventListener('keyup', this.keyupCallback);
            }

            if (this.blurCallback) {
                this.playerContainer.removeEventListener('blur', this.blurCallback);
            }

            var nextUpToolTip = this.nextUpToolTip;
            if (nextUpToolTip) {
                nextUpToolTip.destroy();
            }

            var settingsMenu = this.settingsMenu;
            if (settingsMenu) {
                settingsMenu.destroy();
                this.div.removeChild(settingsMenu.element());
            }

            this.removeBackdrop();
        }
    }, {
        key: 'controlbarHeight',
        value: function controlbarHeight() {
            if (!this.dimensions.cbHeight) {
                this.dimensions.cbHeight = this.controlbar.element().clientHeight;
            }
            return this.dimensions.cbHeight;
        }
    }, {
        key: 'element',
        value: function element() {
            return this.div;
        }
    }, {
        key: 'resize',
        value: function resize() {
            this.dimensions = {};
        }
    }, {
        key: 'unmuteAutoplay',
        value: function unmuteAutoplay(api, model) {
            var autostartSucceeded = !model.get('autostartFailed');
            var mute = model.get('mute');

            // If autostart succeeded, it means the user has chosen to unmute the video,
            // so we should update the model, setting mute to false
            if (autostartSucceeded) {
                mute = false;
            } else {
                // Don't try to play again when viewable since it will keep failing
                model.set('playOnViewable', false);
            }
            if (this.unmuteCallback) {
                model.off('change:autostartFailed change:autostartMuted change:mute', this.unmuteCallback);
                this.unmuteCallback = null;
            }
            model.set('autostartFailed', undefined);
            model.set('autostartMuted', undefined);
            api.setMute(mute);
            // the model's mute value may not have changed. ensure the controlbar's mute button is in the right state
            this.controlbar.renderVolume(mute, model.get('volume'));
            this.mute.hide();
            _helpers2.default.removeClass(this.playerContainer, 'jw-flag-autostart');
            this.userActive();
        }
    }, {
        key: 'mouseMove',
        value: function mouseMove(event) {
            var insideControlbar = this.controlbar.element().contains(event.target);
            var insideNextUp = this.controlbar.nextUpToolTip && this.controlbar.nextUpToolTip.element().contains(event.target);
            var insideLogo = this.logo && this.logo.contains(event.target);
            var activeTimeout = insideControlbar || insideNextUp || insideLogo ? 0 : ACTIVE_TIMEOUT;

            this.userActive(activeTimeout);
        }
    }, {
        key: 'userActive',
        value: function userActive() {
            var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ACTIVE_TIMEOUT;

            if (timeout > 0) {
                this.inactiveTime = (0, _date.now)() + timeout;
                if (this.activeTimeout === -1) {
                    this.activeTimeout = setTimeout(this.userInactiveTimeout, timeout);
                }
            } else {
                clearTimeout(this.activeTimeout);
                this.activeTimeout = -1;
                this.inactiveTime = 0;
            }
            if (!this.showing) {
                _helpers2.default.removeClass(this.playerContainer, 'jw-flag-user-inactive');
                this.showing = true;
                this.trigger('userActive');
            }
        }
    }, {
        key: 'userInactive',
        value: function userInactive() {
            clearTimeout(this.activeTimeout);
            this.activeTimeout = -1;
            if (this.settingsMenu.visible) {
                return;
            }
            this.inactiveTime = 0;
            this.showing = false;
            _helpers2.default.addClass(this.playerContainer, 'jw-flag-user-inactive');
            this.trigger('userInactive');
        }
    }, {
        key: 'addBackdrop',
        value: function addBackdrop() {
            // Put the backdrop element on top of overlays during instream mode
            // otherwise keep it behind captions and on top of preview poster
            var element = this.instreamState ? this.div : this.playerContainer.querySelector('.jw-captions');
            this.playerContainer.insertBefore(this.backdrop, element);
        }
    }, {
        key: 'removeBackdrop',
        value: function removeBackdrop() {
            var parent = this.backdrop.parentNode;
            if (parent) {
                parent.removeChild(this.backdrop);
            }
        }
    }, {
        key: 'setupInstream',
        value: function setupInstream() {
            this.instreamState = true;
            // Call Controls.userActivity to display the UI temporarily for the start of the ad
            this.userActive();
            this.addBackdrop();
            if (this.settingsMenu) {
                this.settingsMenu.close();
            }
            _helpers2.default.removeClass(this.playerContainer, 'jw-flag-autostart');
        }
    }, {
        key: 'destroyInstream',
        value: function destroyInstream(model) {
            this.instreamState = null;
            this.addBackdrop();
            if (model.get('autostartMuted')) {
                _helpers2.default.addClass(this.playerContainer, 'jw-flag-autostart');
            }
        }
    }]);

    return Controls;
}();

exports.default = Controls;

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */
/*!****************************!*\
  !*** ./src/js/utils/ui.js ***!
  \****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.getPointerType = getPointerType;

var _environment = __webpack_require__(/*! environment/environment */ 11);

var _events = __webpack_require__(/*! events/events */ 5);

var _backbone = __webpack_require__(/*! utils/backbone.events */ 7);

var _backbone2 = _interopRequireDefault(_backbone);

var _date = __webpack_require__(/*! utils/date */ 25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TouchEvent = window.TouchEvent;
var PointerEvent = window.PointerEvent;
var _supportsPointerEvents = 'PointerEvent' in window && !_environment.OS.android;
var _supportsTouchEvents = 'ontouchstart' in window;
var _useMouseEvents = !_supportsPointerEvents && !(_supportsTouchEvents && _environment.OS.mobile);
var _isOSXFirefox = _environment.Browser.firefox && _environment.OS.mac;

function getCoord(e, c) {
    return (/touch/.test(e.type) ? (e.originalEvent || e).changedTouches[0]['page' + c] : e['page' + c]
    );
}

function isRightClick(evt) {
    var e = evt || window.event;

    if (!(evt instanceof MouseEvent)) {
        return false;
    }

    if ('which' in e) {
        // Gecko (Firefox), WebKit (Safari/Chrome) & Opera
        return e.which === 3;
    } else if ('button' in e) {
        // IE and Opera
        return e.button === 2;
    }

    return false;
}

function isEnterKey(evt) {
    var e = evt || window.event;

    if (e instanceof KeyboardEvent && e.keyCode === 13) {
        evt.stopPropagation();
        return true;
    }

    return false;
}

function normalizeUIEvent(type, srcEvent, target) {
    var source = void 0;

    if (srcEvent instanceof MouseEvent || !srcEvent.touches && !srcEvent.changedTouches) {
        source = srcEvent;
    } else if (srcEvent.touches && srcEvent.touches.length) {
        source = srcEvent.touches[0];
    } else {
        source = srcEvent.changedTouches[0];
    }

    return {
        type: type,
        sourceEvent: srcEvent,
        target: srcEvent.target,
        currentTarget: target,
        pageX: source.pageX,
        pageY: source.pageY
    };
}

// Preventdefault to prevent click events
function preventDefault(evt) {
    // Because sendEvent from utils.eventdispatcher clones evt objects instead of passing them
    //  we cannot call evt.preventDefault() on them
    if (!(evt instanceof MouseEvent) && !(evt instanceof TouchEvent)) {
        return;
    }
    if (evt.preventManipulation) {
        evt.preventManipulation();
    }
    // prevent scrolling
    if (evt.preventDefault) {
        evt.preventDefault();
    }
}

var UI = function UI(elem, options) {
    var _elem = elem;
    var _hasMoved = false;
    var _startX = 0;
    var _startY = 0;
    var _lastClickTime = 0;
    var _doubleClickDelay = 300;
    var _touchListenerTarget = void 0;
    var _pointerId = void 0;

    options = options || {};

    var listenerOptions = _environment.Features.passiveEvents ? { passive: !options.preventScrolling } : false;

    var interactEndDelegate = function interactEndDelegate(event) {
        return interactEndHandler(event);
    };

    // If its not mobile, add mouse listener.  Add touch listeners so touch devices that aren't Android or iOS
    // (windows phones) still get listeners just in case they want to use them.
    if (_supportsPointerEvents) {
        elem.addEventListener('pointerdown', interactStartHandler, listenerOptions);
        if (options.useHover) {
            elem.addEventListener('pointerover', overHandler);
            elem.addEventListener('pointerout', pointerOutHandler);
        }
        if (options.useMove) {
            elem.addEventListener('pointermove', moveHandler);
        }
    } else {
        if (_useMouseEvents) {
            elem.addEventListener('mousedown', interactStartHandler, listenerOptions);
            if (options.useHover) {
                elem.addEventListener('mouseover', overHandler);
                elem.addEventListener('mouseout', outHandler);
            }
            if (options.useMove) {
                elem.addEventListener('mousemove', moveHandler);
            }
        }

        // Always add this, in case we don't properly identify the device as mobile
        elem.addEventListener('touchstart', interactStartHandler, listenerOptions);
    }

    elem.addEventListener('keydown', keyHandler);
    if (options.useFocus) {
        elem.addEventListener('focus', overHandler);
        elem.addEventListener('blur', outHandler);
    }

    // overHandler and outHandler not assigned in touch situations
    function overHandler(evt) {
        if (evt.pointerType !== 'touch') {
            triggerEvent(_events.OVER, evt);
        }
    }

    function moveHandler(evt) {
        if (evt.pointerType !== 'touch') {
            triggerEvent(_events.MOVE, evt);
        }
    }

    function pointerOutHandler(evt) {
        if (evt.pointerType !== 'touch' && 'x' in evt) {
            // elementFromPoint to handle an issue where setPointerCapture is causing a pointerout event
            var x = evt.x,
                y = evt.y;

            var overElement = document.elementFromPoint(x, y);
            if (!elem.contains(overElement)) {
                triggerEvent(_events.OUT, evt);
            }
        }
    }

    function outHandler(evt) {
        triggerEvent(_events.OUT, evt);
    }

    function keyHandler(evt) {
        if (isEnterKey(evt)) {
            triggerEvent(_events.ENTER, evt);
        }
    }

    function setEventListener(element, eventName, callback) {
        element.removeEventListener(eventName, callback);
        element.addEventListener(eventName, callback);
    }

    function interactStartHandler(evt) {
        _touchListenerTarget = evt.target;
        _startX = getCoord(evt, 'X');
        _startY = getCoord(evt, 'Y');

        if (!isRightClick(evt)) {

            if (evt.type === 'pointerdown' && evt.isPrimary) {
                if (options.preventScrolling) {
                    _pointerId = evt.pointerId;
                    elem.setPointerCapture(_pointerId);
                }
                setEventListener(elem, 'pointermove', interactDragHandler, listenerOptions);
                setEventListener(elem, 'pointercancel', interactEndHandler);

                // Listen for mouseup after mouse pointer down because pointerup doesn't fire on swf objects
                if (evt.pointerType === 'mouse' && _touchListenerTarget.nodeName === 'OBJECT') {
                    setEventListener(document, 'mouseup', interactEndDelegate);
                } else {
                    setEventListener(elem, 'pointerup', interactEndHandler);
                }
            } else if (evt.type === 'mousedown') {
                setEventListener(document, 'mousemove', interactDragHandler, listenerOptions);

                // Handle clicks in OSX Firefox over Flash 'object'
                if (_isOSXFirefox && evt.target.nodeName.toLowerCase() === 'object') {
                    setEventListener(elem, 'click', interactEndHandler);
                } else {
                    setEventListener(document, 'mouseup', interactEndDelegate);
                }
            } else if (evt.type === 'touchstart') {
                setEventListener(_touchListenerTarget, 'touchmove', interactDragHandler, listenerOptions);
                setEventListener(_touchListenerTarget, 'touchcancel', interactEndHandler);
                setEventListener(_touchListenerTarget, 'touchend', interactEndHandler);
            }

            // Prevent scrolling the screen while dragging on mobile.
            if (options.preventScrolling) {
                preventDefault(evt);
            }
        }
    }

    function interactDragHandler(evt) {
        var movementThreshold = 6;

        if (_hasMoved) {
            triggerEvent(_events.DRAG, evt);
        } else {
            var endX = getCoord(evt, 'X');
            var endY = getCoord(evt, 'Y');
            var moveX = endX - _startX;
            var moveY = endY - _startY;
            if (moveX * moveX + moveY * moveY > movementThreshold * movementThreshold) {
                triggerEvent(_events.DRAG_START, evt);
                _hasMoved = true;
                triggerEvent(_events.DRAG, evt);
            }
        }

        // Prevent scrolling the screen dragging while dragging on mobile.
        if (options.preventScrolling) {
            preventDefault(evt);
        }
    }

    function interactEndHandler(evt) {
        var isPointerEvent = evt.type === 'pointerup' || evt.type === 'pointercancel';
        if (isPointerEvent && options.preventScrolling) {
            elem.releasePointerCapture(_pointerId);
        }
        elem.removeEventListener('pointermove', interactDragHandler);
        elem.removeEventListener('pointercancel', interactEndHandler);
        elem.removeEventListener('pointerup', interactEndHandler);
        document.removeEventListener('mousemove', interactDragHandler);
        document.removeEventListener('mouseup', interactEndDelegate);
        if (_touchListenerTarget) {
            _touchListenerTarget.removeEventListener('touchmove', interactDragHandler);
            _touchListenerTarget.removeEventListener('touchcancel', interactEndHandler);
            _touchListenerTarget.removeEventListener('touchend', interactEndHandler);
        }

        if (_hasMoved) {
            triggerEvent(_events.DRAG_END, evt);
        } else if ((!options.directSelect || evt.target === elem) && evt.type.indexOf('cancel') === -1) {
            if (evt.type === 'mouseup' || evt.type === 'click' || isPointerEvent && evt.pointerType === 'mouse') {
                triggerEvent(_events.CLICK, evt);
            } else {
                triggerEvent(_events.TAP, evt);
                if (evt.type === 'touchend') {
                    // preventDefault to not dispatch the 300ms delayed click after a tap
                    preventDefault(evt);
                }
            }
        }

        _touchListenerTarget = null;
        _hasMoved = false;
    }

    var self = this;
    function triggerEvent(type, srcEvent) {
        var evt = void 0;
        if (options.enableDoubleTap && (type === _events.CLICK || type === _events.TAP)) {
            if ((0, _date.now)() - _lastClickTime < _doubleClickDelay) {
                var doubleType = type === _events.CLICK ? _events.DOUBLE_CLICK : _events.DOUBLE_TAP;
                evt = normalizeUIEvent(doubleType, srcEvent, _elem);
                self.trigger(doubleType, evt);
                _lastClickTime = 0;
            } else {
                _lastClickTime = (0, _date.now)();
            }
        }
        evt = normalizeUIEvent(type, srcEvent, _elem);
        self.trigger(type, evt);
    }

    this.triggerEvent = triggerEvent;

    this.destroy = function () {
        this.off();
        elem.removeEventListener('touchstart', interactStartHandler);
        elem.removeEventListener('mousedown', interactStartHandler);
        elem.removeEventListener('keydown', keyHandler);

        if (_touchListenerTarget) {
            _touchListenerTarget.removeEventListener('touchmove', interactDragHandler);
            _touchListenerTarget.removeEventListener('touchcancel', interactEndHandler);
            _touchListenerTarget.removeEventListener('touchend', interactEndHandler);
            _touchListenerTarget = null;
        }

        if (_supportsPointerEvents) {
            if (options.preventScrolling) {
                elem.releasePointerCapture(_pointerId);
            }
            elem.removeEventListener('pointerover', overHandler);
            elem.removeEventListener('pointerdown', interactStartHandler);
            elem.removeEventListener('pointermove', interactDragHandler);
            elem.removeEventListener('pointermove', moveHandler);
            elem.removeEventListener('pointercancel', interactEndHandler);
            elem.removeEventListener('pointerout', pointerOutHandler);
            elem.removeEventListener('pointerup', interactEndHandler);
        }

        elem.removeEventListener('click', interactEndHandler);
        elem.removeEventListener('mouseover', overHandler);
        elem.removeEventListener('mousemove', moveHandler);
        elem.removeEventListener('mouseout', outHandler);
        document.removeEventListener('mousemove', interactDragHandler);
        document.removeEventListener('mouseup', interactEndDelegate);

        if (options.useFocus) {
            elem.removeEventListener('focus', overHandler);
            elem.removeEventListener('blur', outHandler);
        }
    };

    return this;
};

// Expose what the source of the event is so that we can ensure it's handled correctly.
// This returns only 'touch' or 'mouse'. 'pen' will be treated as a mouse.
function getPointerType(evt) {
    if (_supportsTouchEvents && evt instanceof TouchEvent || _supportsPointerEvents && evt instanceof PointerEvent && evt.pointerType === 'touch') {
        return 'touch';
    }

    return 'mouse';
}

_extends(UI.prototype, _backbone2.default);

exports.default = UI;

/***/ }),
/* 74 */
/*!***************************************!*\
  !*** ./src/js/view/controls/icons.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cloneIcon = cloneIcon;
exports.cloneIcons = cloneIcons;

var _buffer = __webpack_require__(/*! assets/SVG/buffer.svg */ 101);

var _buffer2 = _interopRequireDefault(_buffer);

var _replay = __webpack_require__(/*! assets/SVG/replay.svg */ 102);

var _replay2 = _interopRequireDefault(_replay);

var _playbackError = __webpack_require__(/*! assets/SVG/playback-error.svg */ 103);

var _playbackError2 = _interopRequireDefault(_playbackError);

var _play = __webpack_require__(/*! assets/SVG/play.svg */ 104);

var _play2 = _interopRequireDefault(_play);

var _pause = __webpack_require__(/*! assets/SVG/pause.svg */ 105);

var _pause2 = _interopRequireDefault(_pause);

var _rewind = __webpack_require__(/*! assets/SVG/rewind-10.svg */ 106);

var _rewind2 = _interopRequireDefault(_rewind);

var _next = __webpack_require__(/*! assets/SVG/next.svg */ 107);

var _next2 = _interopRequireDefault(_next);

var _volume = __webpack_require__(/*! assets/SVG/volume-0.svg */ 108);

var _volume2 = _interopRequireDefault(_volume);

var _volume3 = __webpack_require__(/*! assets/SVG/volume-50.svg */ 109);

var _volume4 = _interopRequireDefault(_volume3);

var _volume5 = __webpack_require__(/*! assets/SVG/volume-100.svg */ 110);

var _volume6 = _interopRequireDefault(_volume5);

var _captionsOn = __webpack_require__(/*! assets/SVG/captions-on.svg */ 111);

var _captionsOn2 = _interopRequireDefault(_captionsOn);

var _captionsOff = __webpack_require__(/*! assets/SVG/captions-off.svg */ 112);

var _captionsOff2 = _interopRequireDefault(_captionsOff);

var _airplayOn = __webpack_require__(/*! assets/SVG/airplay-on.svg */ 113);

var _airplayOn2 = _interopRequireDefault(_airplayOn);

var _airplayOff = __webpack_require__(/*! assets/SVG/airplay-off.svg */ 114);

var _airplayOff2 = _interopRequireDefault(_airplayOff);

var _playbackRate = __webpack_require__(/*! assets/SVG/playback-rate.svg */ 115);

var _playbackRate2 = _interopRequireDefault(_playbackRate);

var _settings = __webpack_require__(/*! assets/SVG/settings.svg */ 116);

var _settings2 = _interopRequireDefault(_settings);

var _audioTracks = __webpack_require__(/*! assets/SVG/audio-tracks.svg */ 117);

var _audioTracks2 = _interopRequireDefault(_audioTracks);

var _quality = __webpack_require__(/*! assets/SVG/quality-100.svg */ 118);

var _quality2 = _interopRequireDefault(_quality);

var _fullscreenNot = __webpack_require__(/*! assets/SVG/fullscreen-not.svg */ 119);

var _fullscreenNot2 = _interopRequireDefault(_fullscreenNot);

var _fullscreen = __webpack_require__(/*! assets/SVG/fullscreen.svg */ 120);

var _fullscreen2 = _interopRequireDefault(_fullscreen);

var _close = __webpack_require__(/*! assets/SVG/close.svg */ 121);

var _close2 = _interopRequireDefault(_close);

var _jwLogo = __webpack_require__(/*! assets/SVG/jw-logo.svg */ 122);

var _jwLogo2 = _interopRequireDefault(_jwLogo);

var _svgParser = __webpack_require__(/*! utils/svgParser */ 76);

var _svgParser2 = _interopRequireDefault(_svgParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import ARROW_ICON from 'assets/SVG/arror.svg';

// import QUALITY_ICON_25 from 'assets/SVG/quality-25.svg';
// import QUALITY_ICON_50 from 'assets/SVG/quality-50.svg';
// import QUALITY_ICON_75 from 'assets/SVG/quality-75.svg';

// import STOP_ICON from 'assets/SVG/stop.svg';
var collection = null;

function cloneIcon(name) {
    var icon = getCollection().querySelector(nameToClass(name));
    if (icon) {
        return clone(icon);
    }
    if (true) {
        throw new Error('Icon not found ' + name);
    }
    return null;
}

function cloneIcons(names) {
    var icons = getCollection().querySelectorAll(names.split(',').map(nameToClass).join(','));
    if (true && !icons.length) {
        throw new Error('Icons not found ' + names);
    }
    return Array.prototype.map.call(icons, function (icon) {
        return clone(icon);
    });
}

function nameToClass(name) {
    return '.jw-svg-icon-' + name;
}

function clone(icon) {
    return icon.cloneNode(true);
}

function getCollection() {
    if (!collection) {
        collection = parseCollection();
    }
    return collection;
}

function parseCollection() {
    return (0, _svgParser2.default)('<xml>' + _buffer2.default + _replay2.default + _playbackError2.default + _play2.default + _pause2.default + _rewind2.default + _next2.default + _volume2.default + _volume4.default + _volume6.default + _captionsOn2.default + _captionsOff2.default + _airplayOn2.default + _airplayOff2.default + _playbackRate2.default + _settings2.default + _audioTracks2.default + _quality2.default + _fullscreenNot2.default + _fullscreen2.default + _close2.default + _jwLogo2.default + '</xml>');
}

/***/ }),
/* 75 */
/*!***************************************************!*\
  !*** ./src/js/view/controls/components/button.js ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (icon, apiAction, ariaText, svgIcons) {
    var _element = document.createElement('div');
    _element.className = 'jw-icon jw-icon-inline jw-button-color jw-reset ' + icon;
    _element.setAttribute('role', 'button');
    _element.setAttribute('tabindex', '0');

    if (ariaText) {
        _element.setAttribute('aria-label', ariaText);
    }

    _element.style.display = 'none';

    if (apiAction) {
        new _ui2.default(_element).on('click tap enter', function (event) {
            apiAction(event);
        });
    }

    // Prevent button from being focused on mousedown so that the tooltips don't remain visible until
    // the user interacts with another element on the page
    _element.addEventListener('mousedown', function (e) {
        e.preventDefault();
    });

    if (svgIcons) {
        Array.prototype.forEach.call(svgIcons, function (svgIcon) {
            if (typeof svgIcon === 'string') {
                _element.appendChild((0, _svgParser2.default)(svgIcon));
            } else {
                _element.appendChild(svgIcon);
            }
        });
    }

    return {
        element: function element() {
            return _element;
        },
        toggle: function toggle(m) {
            if (m) {
                this.show();
            } else {
                this.hide();
            }
        },
        show: function show() {
            _element.style.display = '';
        },
        hide: function hide() {
            _element.style.display = 'none';
        }
    };
};

var _ui = __webpack_require__(/*! utils/ui */ 73);

var _ui2 = _interopRequireDefault(_ui);

var _svgParser = __webpack_require__(/*! utils/svgParser */ 76);

var _svgParser2 = _interopRequireDefault(_svgParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 76 */
/*!***********************************!*\
  !*** ./src/js/utils/svgParser.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = svgParse;
var parser = void 0;

function svgParse(svgXml) {
    if (!parser) {
        parser = new DOMParser();
    }

    return parser.parseFromString(svgXml, 'image/svg+xml').documentElement;
}

/***/ }),
/* 77 */
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
/* 78 */
/*!**********************************!*\
  !*** ./src/js/view/constants.js ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var dvrSeekLimit = exports.dvrSeekLimit = -25;

/***/ }),
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */
/*!*****************************************!*\
  !*** ./src/js/view/utils/breakpoint.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getBreakpoint = getBreakpoint;
exports.setBreakpoint = setBreakpoint;

var _dom = __webpack_require__(/*! utils/dom */ 23);

function getBreakpoint(width) {
    var breakpoint = 0;

    if (width >= 1280) {
        breakpoint = 7;
    } else if (width >= 960) {
        breakpoint = 6;
    } else if (width >= 800) {
        breakpoint = 5;
    } else if (width >= 640) {
        breakpoint = 4;
    } else if (width >= 540) {
        breakpoint = 3;
    } else if (width >= 420) {
        breakpoint = 2;
    } else if (width >= 320) {
        breakpoint = 1;
    }

    return breakpoint;
}

function setBreakpoint(playerElement, breakpointNumber) {
    var breakpointClass = 'jw-breakpoint-' + breakpointNumber;
    (0, _dom.replaceClass)(playerElement, /jw-breakpoint-\d+/, breakpointClass);
}

/***/ }),
/* 83 */
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 84 */
/*!******************************!*\
  !*** ./src/js/utils/aria.js ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (element, ariaLabel) {
    if (!element || !ariaLabel) {
        return;
    }

    element.setAttribute('aria-label', ariaLabel);
    element.setAttribute('role', 'button');
    element.setAttribute('tabindex', '0');
};

/***/ }),
/* 85 */
/*!***************************************************!*\
  !*** ./src/js/view/controls/components/slider.js ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slider = __webpack_require__(/*! view/controls/templates/slider */ 125);

var _slider2 = _interopRequireDefault(_slider);

var _environment = __webpack_require__(/*! environment/environment */ 11);

var _backbone = __webpack_require__(/*! utils/backbone.events */ 7);

var _backbone2 = _interopRequireDefault(_backbone);

var _ui = __webpack_require__(/*! utils/ui */ 73);

var _ui2 = _interopRequireDefault(_ui);

var _helpers = __webpack_require__(/*! utils/helpers */ 6);

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var getRailBounds = function getRailBounds(elementRail) {
    var bounds = _helpers2.default.bounds(elementRail);
    // Partial workaround of Android 'inert-visual-viewport'
    // https://bugs.chromium.org/p/chromium/issues/detail?id=489206
    var pageXOffset = window.pageXOffset;
    if (pageXOffset && _environment.OS.android && document.body.parentElement.getBoundingClientRect().left >= 0) {
        bounds.left -= pageXOffset;
        bounds.right -= pageXOffset;
    }
    return bounds;
};

var Slider = function () {
    function Slider(className, orientation) {
        _classCallCheck(this, Slider);

        _extends(this, _backbone2.default);

        this.className = className + ' jw-background-color jw-reset';
        this.orientation = orientation;

        this.dragStartListener = this.dragStart.bind(this);
        this.dragMoveListener = this.dragMove.bind(this);
        this.dragEndListener = this.dragEnd.bind(this);

        this.tapListener = this.tap.bind(this);
    }

    _createClass(Slider, [{
        key: 'setup',
        value: function setup() {
            this.el = _helpers2.default.createElement((0, _slider2.default)(this.className, 'jw-slider-' + this.orientation));

            this.elementRail = this.el.getElementsByClassName('jw-slider-container')[0];
            this.elementBuffer = this.el.getElementsByClassName('jw-buffer')[0];
            this.elementProgress = this.el.getElementsByClassName('jw-progress')[0];
            this.elementThumb = this.el.getElementsByClassName('jw-knob')[0];

            this.userInteract = new _ui2.default(this.element(), { preventScrolling: true });

            this.userInteract.on('dragStart', this.dragStartListener);
            this.userInteract.on('drag', this.dragMoveListener);
            this.userInteract.on('dragEnd', this.dragEndListener);

            this.userInteract.on('tap click', this.tapListener);
        }
    }, {
        key: 'dragStart',
        value: function dragStart() {
            this.trigger('dragStart');
            this.railBounds = getRailBounds(this.elementRail);
        }
    }, {
        key: 'dragEnd',
        value: function dragEnd(evt) {
            this.dragMove(evt);
            this.trigger('dragEnd');
        }
    }, {
        key: 'dragMove',
        value: function dragMove(evt) {
            var bounds = this.railBounds = this.railBounds ? this.railBounds : getRailBounds(this.elementRail);
            var dimension = void 0;
            var percentage = void 0;

            if (this.orientation === 'horizontal') {
                dimension = evt.pageX;
                if (dimension < bounds.left) {
                    percentage = 0;
                } else if (dimension > bounds.right) {
                    percentage = 100;
                } else {
                    percentage = _helpers2.default.between((dimension - bounds.left) / bounds.width, 0, 1) * 100;
                }
            } else {
                dimension = evt.pageY;
                if (dimension >= bounds.bottom) {
                    percentage = 0;
                } else if (dimension <= bounds.top) {
                    percentage = 100;
                } else {
                    percentage = _helpers2.default.between((bounds.height - (dimension - bounds.top)) / bounds.height, 0, 1) * 100;
                }
            }

            var updatedPercent = this.limit(percentage);
            this.render(updatedPercent);
            this.update(updatedPercent);

            return false;
        }
    }, {
        key: 'tap',
        value: function tap(evt) {
            this.railBounds = getRailBounds(this.elementRail);
            this.dragMove(evt);
        }
    }, {
        key: 'limit',
        value: function limit(percentage) {
            // modules that extend Slider can set limits on the percentage (TimeSlider)
            return percentage;
        }
    }, {
        key: 'update',
        value: function update(percentage) {
            this.trigger('update', { percentage: percentage });
        }
    }, {
        key: 'render',
        value: function render(percentage) {
            percentage = Math.max(0, Math.min(percentage, 100));

            if (this.orientation === 'horizontal') {
                this.elementThumb.style.left = percentage + '%';
                this.elementProgress.style.width = percentage + '%';
            } else {
                this.elementThumb.style.bottom = percentage + '%';
                this.elementProgress.style.height = percentage + '%';
            }
        }
    }, {
        key: 'updateBuffer',
        value: function updateBuffer(percentage) {
            this.elementBuffer.style.width = percentage + '%';
        }
    }, {
        key: 'element',
        value: function element() {
            return this.el;
        }
    }]);

    return Slider;
}();

exports.default = Slider;

/***/ }),
/* 86 */
/*!****************************************************!*\
  !*** ./src/js/view/controls/components/tooltip.js ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _backbone = __webpack_require__(/*! utils/backbone.events */ 7);

var _backbone2 = _interopRequireDefault(_backbone);

var _aria = __webpack_require__(/*! utils/aria */ 84);

var _aria2 = _interopRequireDefault(_aria);

var _dom = __webpack_require__(/*! utils/dom */ 23);

var _svgParser = __webpack_require__(/*! utils/svgParser */ 76);

var _svgParser2 = _interopRequireDefault(_svgParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tooltip = function () {
    function Tooltip(name, ariaText, elementShown, svgIcons) {
        var _this = this;

        _classCallCheck(this, Tooltip);

        _extends(this, _backbone2.default);
        this.el = document.createElement('div');
        var className = 'jw-icon jw-icon-tooltip ' + name + ' jw-button-color jw-reset';
        if (!elementShown) {
            className += ' jw-hidden';
        }

        (0, _aria2.default)(this.el, ariaText);

        this.el.className = className;
        this.container = document.createElement('div');
        this.container.className = 'jw-overlay jw-reset';
        this.openClass = 'jw-open';
        this.componentType = 'tooltip';

        this.el.appendChild(this.container);
        if (svgIcons && svgIcons.length > 0) {
            Array.prototype.forEach.call(svgIcons, function (svgIcon) {
                if (typeof svgIcon === 'string') {
                    _this.el.appendChild((0, _svgParser2.default)(svgIcon));
                } else {
                    _this.el.appendChild(svgIcon);
                }
            });
        }
    }

    _createClass(Tooltip, [{
        key: 'addContent',
        value: function addContent(elem) {
            if (this.content) {
                this.removeContent();
            }

            this.content = elem;
            this.container.appendChild(elem);
        }
    }, {
        key: 'removeContent',
        value: function removeContent() {
            if (this.content) {
                this.container.removeChild(this.content);
                this.content = null;
            }
        }
    }, {
        key: 'hasContent',
        value: function hasContent() {
            return !!this.content;
        }
    }, {
        key: 'element',
        value: function element() {
            return this.el;
        }
    }, {
        key: 'openTooltip',
        value: function openTooltip(evt) {
            this.trigger('open-' + this.componentType, evt, { isOpen: true });
            this.isOpen = true;
            (0, _dom.toggleClass)(this.el, this.openClass, this.isOpen);
        }
    }, {
        key: 'closeTooltip',
        value: function closeTooltip(evt) {
            this.trigger('close-' + this.componentType, evt, { isOpen: false });
            this.isOpen = false;
            (0, _dom.toggleClass)(this.el, this.openClass, this.isOpen);
        }
    }, {
        key: 'toggleOpenState',
        value: function toggleOpenState(evt) {
            if (this.isOpen) {
                this.closeTooltip(evt);
            } else {
                this.openTooltip(evt);
            }
        }
    }]);

    return Tooltip;
}();

exports.default = Tooltip;

/***/ }),
/* 87 */
/*!***********************************************************!*\
  !*** ./src/js/view/controls/components/simple-tooltip.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SimpleTooltip = SimpleTooltip;

var _dom = __webpack_require__(/*! utils/dom */ 23);

function SimpleTooltip(attachToElement, name, text, openCallback) {
    var tooltipElement = document.createElement('div');
    tooltipElement.className = 'jw-reset jw-tooltip jw-tooltip-' + name;

    var textElement = document.createElement('div');
    textElement.className = 'jw-text';
    textElement.textContent = text;

    tooltipElement.appendChild(textElement);
    attachToElement.appendChild(tooltipElement);

    var instance = {
        open: function open() {
            if (instance.touchEvent) {
                return;
            }

            tooltipElement.setAttribute('aria-expanded', 'true');
            (0, _dom.addClass)(tooltipElement, 'jw-open');

            if (openCallback) {
                openCallback();
            }
        },
        close: function close() {
            if (instance.touchEvent) {
                return;
            }

            tooltipElement.setAttribute('aria-expanded', 'false');
            (0, _dom.removeClass)(tooltipElement, 'jw-open');
        },
        setText: function setText(newText) {
            tooltipElement.querySelector('.jw-text').textContent = newText;
        }
    };

    attachToElement.addEventListener('mouseover', instance.open);
    attachToElement.addEventListener('focus', instance.open);
    attachToElement.addEventListener('blur', instance.close);
    attachToElement.addEventListener('mouseout', instance.close);
    attachToElement.addEventListener('touchstart', function () {
        instance.touchEvent = true;
    }, {
        passive: true
    });

    return instance;
}

/***/ }),
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */
/*!********************************************!*\
  !*** ./src/js/view/controls/controlbar.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _icons = __webpack_require__(/*! view/controls/icons */ 74);

var _environment = __webpack_require__(/*! environment/environment */ 11);

var _constants = __webpack_require__(/*! view/constants */ 78);

var _customButton = __webpack_require__(/*! view/controls/components/custom-button */ 123);

var _customButton2 = _interopRequireDefault(_customButton);

var _helpers = __webpack_require__(/*! utils/helpers */ 6);

var _helpers2 = _interopRequireDefault(_helpers);

var _underscore = __webpack_require__(/*! utils/underscore */ 0);

var _underscore2 = _interopRequireDefault(_underscore);

var _events = __webpack_require__(/*! events/events */ 5);

var _backbone = __webpack_require__(/*! utils/backbone.events */ 7);

var _backbone2 = _interopRequireDefault(_backbone);

var _ui = __webpack_require__(/*! utils/ui */ 73);

var _ui2 = _interopRequireDefault(_ui);

var _aria = __webpack_require__(/*! utils/aria */ 84);

var _aria2 = _interopRequireDefault(_aria);

var _timeslider = __webpack_require__(/*! view/controls/components/timeslider */ 124);

var _timeslider2 = _interopRequireDefault(_timeslider);

var _volumetooltip = __webpack_require__(/*! view/controls/components/volumetooltip */ 128);

var _volumetooltip2 = _interopRequireDefault(_volumetooltip);

var _button = __webpack_require__(/*! view/controls/components/button */ 75);

var _button2 = _interopRequireDefault(_button);

var _simpleTooltip = __webpack_require__(/*! view/controls/components/simple-tooltip */ 87);

var _dom = __webpack_require__(/*! utils/dom */ 23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function text(name, role) {
    var element = document.createElement('span');
    element.className = 'jw-text jw-reset ' + name;
    if (role) {
        element.setAttribute('role', role);
    }
    return element;
}

function textIcon(name, role) {
    var element = document.createElement('div');
    element.className = 'jw-icon jw-icon-inline jw-text jw-reset ' + name;
    if (role) {
        element.setAttribute('role', role);
    }
    return element;
}

function div(classes) {
    var element = document.createElement('div');
    element.className = 'jw-reset ' + classes;
    return element;
}

function createCastButton(castToggle, localization) {

    if (_environment.Browser.safari) {
        var airplayButton = (0, _button2.default)('jw-icon-airplay jw-off', castToggle, localization.airplay, (0, _icons.cloneIcons)('airplay-off,airplay-on'));

        (0, _simpleTooltip.SimpleTooltip)(airplayButton.element(), 'airplay', localization.airplay);

        return airplayButton;
    }

    if (!_environment.Browser.chrome || _environment.OS.iOS) {
        return;
    }

    var castButton = document.createElement('button', 'google-cast-button');
    castButton.setAttribute('type', 'button');
    castButton.setAttribute('tabindex', '-1');

    var _element = document.createElement('div');
    _element.className = 'jw-reset jw-icon jw-icon-inline jw-icon-cast jw-button-color';
    _element.style.display = 'none';
    _element.style.cursor = 'pointer';
    _element.appendChild(castButton);
    (0, _aria2.default)(_element, localization.cast);

    (0, _simpleTooltip.SimpleTooltip)(_element, 'chromecast', localization.cast);

    return {
        element: function element() {
            return _element;
        },
        toggle: function toggle(m) {
            if (m) {
                this.show();
            } else {
                this.hide();
            }
        },
        show: function show() {
            _element.style.display = '';
        },
        hide: function hide() {
            _element.style.display = 'none';
        },
        button: castButton
    };
}

function reasonInteraction() {
    return { reason: 'interaction' };
}

function buttonsInFirstNotInSecond(buttonsA, buttonsB) {
    return buttonsA.filter(function (a) {
        return !buttonsB.some(function (b) {
            return b.id + b.btnClass === a.id + a.btnClass && a.callback === b.callback;
        });
    });
}

var appendChildren = function appendChildren(container, elements) {
    elements.forEach(function (e) {
        if (e.element) {
            e = e.element();
        }
        container.appendChild(e);
    });
};

var Controlbar = function () {
    function Controlbar(_api, _model) {
        var _this = this;

        _classCallCheck(this, Controlbar);

        _extends(this, _backbone2.default);
        this._api = _api;
        this._model = _model;
        this._isMobile = _environment.OS.mobile;
        var localization = _model.get('localization');
        var timeSlider = new _timeslider2.default(_model, _api);
        var volumeTooltip = void 0;
        var muteButton = void 0;

        var play = localization.play;
        var next = localization.next;
        var vol = localization.volume;
        var rewind = localization.rewind;

        // Do not show the volume toggle in the mobile SDKs or <iOS10
        if (!_model.get('sdkplatform') && !(_environment.OS.iOS && _environment.OS.version.major < 10)) {
            // Clone icons so that can be used in VolumeTooltip
            var svgIcons = (0, _icons.cloneIcons)('volume-0,volume-100');
            muteButton = (0, _button2.default)('jw-icon-volume', function () {
                _api.setMute();
            }, vol, svgIcons);
        }

        // Do not initialize volume slider or tooltip on mobile
        if (!this._isMobile) {
            volumeTooltip = new _volumetooltip2.default(_model, 'jw-icon-volume', vol, (0, _icons.cloneIcons)('volume-0,volume-50,volume-100'));
        }

        var nextButton = (0, _button2.default)('jw-icon-next', function () {
            _api.next();
        }, next, (0, _icons.cloneIcons)('next'));

        var settingsButton = (0, _button2.default)('jw-icon-settings jw-settings-submenu-button', function (event) {
            _this.trigger('settingsInteraction', 'quality', true, event);
        }, localization.settings, (0, _icons.cloneIcons)('settings'));
        settingsButton.element().setAttribute('aria-haspopup', 'true');

        var captionsButton = (0, _button2.default)('jw-icon-cc jw-settings-submenu-button', function (event) {
            _this.trigger('settingsInteraction', 'captions', false, event);
        }, localization.cc, (0, _icons.cloneIcons)('cc-off,cc-on'));
        captionsButton.element().setAttribute('aria-haspopup', 'true');

        var liveButton = (0, _button2.default)('jw-text-live', function () {
            _this.goToLiveEdge();
        }, localization.liveBroadcast);
        liveButton.element().textContent = localization.liveBroadcast;

        var elements = this.elements = {
            alt: text('jw-text-alt', 'status'),
            play: (0, _button2.default)('jw-icon-playback', function () {
                _api.playToggle(reasonInteraction());
            }, play, (0, _icons.cloneIcons)('play,pause')),
            rewind: (0, _button2.default)('jw-icon-rewind', function () {
                _this.rewind();
            }, rewind, (0, _icons.cloneIcons)('rewind')),
            live: liveButton,
            next: nextButton,
            elapsed: textIcon('jw-text-elapsed', 'timer'),
            countdown: textIcon('jw-text-countdown', 'timer'),
            time: timeSlider,
            duration: textIcon('jw-text-duration', 'timer'),
            mute: muteButton,
            volumetooltip: volumeTooltip,
            cast: createCastButton(function () {
                _api.castToggle();
            }, localization),
            fullscreen: (0, _button2.default)('jw-icon-fullscreen', function () {
                _api.setFullscreen();
            }, localization.fullscreen, (0, _icons.cloneIcons)('fullscreen-off,fullscreen-on')),
            spacer: div('jw-spacer'),
            buttonContainer: div('jw-button-container'),
            settingsButton: settingsButton,
            captionsButton: captionsButton
        };

        // Add text tooltips
        var captionsTip = (0, _simpleTooltip.SimpleTooltip)(captionsButton.element(), 'captions', localization.cc);
        var onCaptionsChanged = function onCaptionsChanged(model) {
            var currentCaptions = model.get('captionsList')[model.get('captionsIndex')];
            var newText = localization.cc;
            if (currentCaptions && currentCaptions.label !== 'Off') {
                newText = currentCaptions.label;
            }
            captionsTip.setText(newText);
        };

        var nextUpTip = (0, _simpleTooltip.SimpleTooltip)(elements.next.element(), 'next', localization.nextUp, function () {
            var nextUp = _model.get('nextUp');

            _this.trigger('nextShown', {
                mode: nextUp.mode,
                ui: 'nextup',
                itemsShown: [nextUp],
                feedData: nextUp.feedData,
                reason: 'hover'
            });
        });
        (0, _simpleTooltip.SimpleTooltip)(elements.rewind.element(), 'rewind', localization.rewind);
        (0, _simpleTooltip.SimpleTooltip)(elements.settingsButton.element(), 'settings', localization.settings);
        (0, _simpleTooltip.SimpleTooltip)(elements.fullscreen.element(), 'fullscreen', localization.fullscreen);

        // Filter out undefined elements
        var buttonLayout = [elements.play, elements.rewind, elements.next, elements.volumetooltip, elements.mute, elements.alt, elements.live, elements.elapsed, elements.countdown, elements.duration, elements.spacer, elements.cast, elements.captionsButton, elements.settingsButton, elements.fullscreen].filter(function (e) {
            return e;
        });

        var layout = [elements.time, elements.buttonContainer].filter(function (e) {
            return e;
        });

        var menus = this.menus = [elements.volumetooltip].filter(function (e) {
            return e;
        });

        this.el = document.createElement('div');
        this.el.className = 'jw-controlbar jw-reset';

        appendChildren(elements.buttonContainer, buttonLayout);
        appendChildren(this.el, layout);

        var logo = _model.get('logo');
        if (logo && logo.position === 'control-bar') {
            this.addLogo(logo);
        }

        // Initial State
        elements.play.show();
        elements.fullscreen.show();
        if (elements.mute) {
            elements.mute.show();
        }

        // Listen for model changes
        _model.change('volume', this.onVolume, this);
        _model.change('mute', this.onMute, this);
        _model.change('duration', this.onDuration, this);
        _model.change('position', this.onElapsed, this);
        _model.change('fullscreen', this.onFullscreen, this);
        _model.change('streamType', this.onStreamTypeChange, this);
        _model.change('dvrLive', function (model, dvrLive) {
            _helpers2.default.toggleClass(_this.elements.live.element(), 'jw-dvr-live', dvrLive === false);
        }, this);
        _model.change('altText', this.setAltText, this);
        _model.change('customButtons', this.updateButtons, this);
        _model.on('change:captionsIndex', onCaptionsChanged, this);
        _model.on('change:captionsList', onCaptionsChanged, this);
        _model.change('nextUp', function (model, nextUp) {
            var tipText = localization.nextUp;
            if (nextUp && nextUp.title) {
                tipText += ': ' + nextUp.title;
            }
            nextUpTip.setText(tipText);
            elements.next.toggle(!!nextUp);
        });
        _model.change('audioMode', this.onAudioMode, this);
        if (elements.cast) {
            _model.change('castAvailable', this.onCastAvailable, this);
            _model.change('castActive', this.onCastActive, this);
        }

        // Event listeners
        // Volume sliders do not exist on mobile so don't assign listeners to them.
        if (elements.volumetooltip) {
            elements.volumetooltip.on('update', function (pct) {
                var val = pct.percentage;
                this._api.setVolume(val);
            }, this);
            elements.volumetooltip.on('toggleValue', function () {
                this._api.setMute();
            }, this);
        }

        if (elements.cast && elements.cast.button) {
            new _ui2.default(elements.cast.element()).on('click tap enter', function (evt) {
                // controlbar cast button needs to manually trigger a click
                // on the native cast button for taps and enter key
                if (evt.type !== 'click') {
                    elements.cast.button.click();
                }
                this._model.set('castClicked', true);
            }, this);
        }

        new _ui2.default(elements.duration).on('click tap enter', function () {
            if (this._model.get('streamType') === 'DVR') {
                // Seek to "Live" position within live buffer, but not before current position
                var currentPosition = this._model.get('position');
                this._api.seek(Math.max(_constants.dvrSeekLimit, currentPosition), reasonInteraction());
            }
        }, this);

        // When the control bar is interacted with, trigger a user action event
        new _ui2.default(this.el).on('click tap drag', function () {
            this.trigger(_events.USER_ACTION);
        }, this);
        _underscore2.default.each(menus, function (ele) {
            ele.on('open-tooltip', this.closeMenus, this);
        }, this);
    }

    _createClass(Controlbar, [{
        key: 'onVolume',
        value: function onVolume(model, pct) {
            this.renderVolume(model.get('mute'), pct);
        }
    }, {
        key: 'onMute',
        value: function onMute(model, muted) {
            this.renderVolume(muted, model.get('volume'));
        }
    }, {
        key: 'renderVolume',
        value: function renderVolume(muted, vol) {
            // mute, volume, and volumetooltip do not exist on mobile devices.
            if (this.elements.mute) {
                _helpers2.default.toggleClass(this.elements.mute.element(), 'jw-off', muted);
                _helpers2.default.toggleClass(this.elements.mute.element(), 'jw-full', !muted);
            }
            if (this.elements.volumetooltip) {
                this.elements.volumetooltip.volumeSlider.render(muted ? 0 : vol);
                _helpers2.default.toggleClass(this.elements.volumetooltip.element(), 'jw-off', muted);
                _helpers2.default.toggleClass(this.elements.volumetooltip.element(), 'jw-full', vol >= 75 && !muted);
            }
        }
    }, {
        key: 'onCastAvailable',
        value: function onCastAvailable(model, val) {
            this.elements.cast.toggle(val);
        }
    }, {
        key: 'onCastActive',
        value: function onCastActive(model, val) {
            this.elements.fullscreen.toggle(!val);
            if (this.elements.cast.button) {
                _helpers2.default.toggleClass(this.elements.cast.button, 'jw-off', !val);
            }
        }
    }, {
        key: 'onElapsed',
        value: function onElapsed(model, position) {
            var elapsedTime = void 0;
            var countdownTime = void 0;
            var duration = model.get('duration');
            if (model.get('streamType') === 'DVR') {
                var currentPosition = Math.ceil(position);
                elapsedTime = countdownTime = currentPosition >= _constants.dvrSeekLimit ? '' : '-' + _helpers2.default.timeFormat(-position);
                model.set('dvrLive', currentPosition >= _constants.dvrSeekLimit);
            } else {
                elapsedTime = _helpers2.default.timeFormat(position);
                countdownTime = _helpers2.default.timeFormat(duration - position);
            }
            this.elements.elapsed.textContent = elapsedTime;
            this.elements.countdown.textContent = countdownTime;
        }
    }, {
        key: 'onDuration',
        value: function onDuration(model, val) {
            this.elements.duration.textContent = _helpers2.default.timeFormat(Math.abs(val));
        }
    }, {
        key: 'onFullscreen',
        value: function onFullscreen(model, val) {
            _helpers2.default.toggleClass(this.elements.fullscreen.element(), 'jw-off', val);
            this.elements.play.element().focus();
        }
    }, {
        key: 'onAudioMode',
        value: function onAudioMode(model, val) {
            var timeSlider = this.elements.time.element();
            if (val) {
                this.elements.buttonContainer.insertBefore(timeSlider, this.elements.elapsed);
            } else {
                (0, _dom.prependChild)(this.el, timeSlider);
            }
        }
    }, {
        key: 'element',
        value: function element() {
            return this.el;
        }
    }, {
        key: 'setAltText',
        value: function setAltText(model, altText) {
            this.elements.alt.textContent = altText;
        }

        // Close menus if it has no event.  Otherwise close all but the event's target.

    }, {
        key: 'closeMenus',
        value: function closeMenus(evt) {
            _underscore2.default.each(this.menus, function (ele) {
                if (!evt || evt.target !== ele.el) {
                    ele.closeTooltip(evt);
                }
            });
        }
    }, {
        key: 'rewind',
        value: function rewind() {
            var currentPosition = this._model.get('position');
            var duration = this._model.get('duration');
            var rewindPosition = currentPosition - 10;
            var startPosition = 0;

            // duration is negative in DVR mode
            if (this._model.get('streamType') === 'DVR') {
                startPosition = duration;
            }
            // Seek 10s back. Seek value should be >= 0 in VOD mode and >= (negative) duration in DVR mode
            this._api.seek(Math.max(rewindPosition, startPosition), reasonInteraction());
        }
    }, {
        key: 'onStreamTypeChange',
        value: function onStreamTypeChange(model, streamType) {
            // Hide rewind button when in LIVE mode
            this.elements.rewind.toggle(streamType !== 'LIVE');
            this.elements.live.toggle(streamType === 'LIVE' || streamType === 'DVR');
            this.elements.duration.style.display = streamType === 'DVR' ? 'none' : '';
            var duration = model.get('duration');
            this.onDuration(model, duration);
        }
    }, {
        key: 'addLogo',
        value: function addLogo(logo) {
            var buttonContainer = this.elements.buttonContainer;

            var logoButton = new _customButton2.default(logo.file, 'Logo', function () {
                if (logo.link) {
                    window.open(logo.link, '_blank');
                }
            }, 'logo', 'jw-logo-button');

            if (!logo.link) {
                logoButton.element().setAttribute('tabindex', '-1');
            }
            buttonContainer.insertBefore(logoButton.element(), buttonContainer.querySelector('.jw-spacer').nextSibling);
        }
    }, {
        key: 'goToLiveEdge',
        value: function goToLiveEdge() {
            if (this._model.get('streamType') === 'DVR') {
                // Seek to "Live" position within live buffer, but not before current position
                var currentPosition = this._model.get('position');
                this._api.seek(Math.max(_constants.dvrSeekLimit, currentPosition), reasonInteraction());
            }
        }
    }, {
        key: 'updateButtons',
        value: function updateButtons(model, newButtons, oldButtons) {
            // If buttons are undefined exit, buttons are only removed if newButtons is an array
            if (!newButtons) {
                return;
            }

            var buttonContainer = this.elements.buttonContainer;

            var addedButtons = void 0;
            var removedButtons = void 0;

            // On model.change these obects are the same and all buttons need to be added
            if (newButtons === oldButtons || !oldButtons) {
                addedButtons = newButtons;
            } else {
                addedButtons = buttonsInFirstNotInSecond(newButtons, oldButtons);
                removedButtons = buttonsInFirstNotInSecond(oldButtons, newButtons);

                this.removeButtons(buttonContainer, removedButtons);
            }

            for (var i = addedButtons.length - 1; i >= 0; i--) {
                var buttonProps = addedButtons[i];
                var newButton = new _customButton2.default(buttonProps.img, buttonProps.tooltip, buttonProps.callback, buttonProps.id, buttonProps.btnClass);

                if (buttonProps.tooltip) {
                    (0, _simpleTooltip.SimpleTooltip)(newButton.element(), buttonProps.id, buttonProps.tooltip);
                }

                var firstButton = void 0;
                if (newButton.id === 'related') {
                    firstButton = this.elements.settingsButton.element();
                } else if (newButton.id === 'share') {
                    firstButton = buttonContainer.querySelector('[button="related"]') || this.elements.settingsButton.element();
                } else {
                    firstButton = this.elements.spacer.nextSibling;
                    if (firstButton && firstButton.getAttribute('button') === 'logo') {
                        firstButton = firstButton.nextSibling;
                    }
                }
                buttonContainer.insertBefore(newButton.element(), firstButton);
            }
        }
    }, {
        key: 'removeButtons',
        value: function removeButtons(buttonContainer, buttonsToRemove) {
            for (var i = buttonsToRemove.length; i--;) {
                var buttonElement = buttonContainer.querySelector('[button="' + buttonsToRemove[i].id + '"]');
                if (buttonElement) {
                    buttonContainer.removeChild(buttonElement);
                }
            }
        }
    }, {
        key: 'toggleCaptionsButtonState',
        value: function toggleCaptionsButtonState(active) {
            var captionsButton = this.elements.captionsButton;
            if (!captionsButton) {
                return;
            }

            _helpers2.default.toggleClass(captionsButton.element(), 'jw-off', !active);
        }
    }]);

    return Controlbar;
}();

exports.default = Controlbar;

/***/ }),
/* 101 */
/*!***********************************!*\
  !*** ./src/assets/SVG/buffer.svg ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"jw-svg-icon jw-svg-icon-buffer\" viewBox=\"0 0 240 240\" focusable=\"false\"><path d=\"M120,186.667a66.667,66.667,0,0,1,0-133.333V40a80,80,0,1,0,80,80H186.667A66.846,66.846,0,0,1,120,186.667Z\"></path></svg>"

/***/ }),
/* 102 */
/*!***********************************!*\
  !*** ./src/assets/SVG/replay.svg ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "<svg class=\"jw-svg-icon jw-svg-icon-replay\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 240 240\" focusable=\"false\"><path d=\"M120,41.9v-20c0-5-4-8-8-4l-44,28a5.865,5.865,0,0,0-3.3,7.6A5.943,5.943,0,0,0,68,56.8l43,29c5,4,9,1,9-4v-20a60,60,0,1,1-60,60H40a80,80,0,1,0,80-79.9Z\"></path></svg>"

/***/ }),
/* 103 */
/*!*******************************************!*\
  !*** ./src/assets/SVG/playback-error.svg ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"jw-svg-icon jw-svg-icon-error\" viewBox=\"0 0 36 36\" style=\"width:100%;height:100%;\" focusable=\"false\"><path fill=\"#FFF\" d=\"M34.6 20.2L10 33.2 27.6 16l7 3.7a.4.4 0 0 1 .2.5.4.4 0 0 1-.2.2zM33.3 0L21 12.2 9 6c-.2-.3-.6 0-.6.5V25L0 33.6 2.5 36 36 2.7z\"></path></svg>"

/***/ }),
/* 104 */
/*!*********************************!*\
  !*** ./src/assets/SVG/play.svg ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"jw-svg-icon jw-svg-icon-play\" viewBox=\"0 0 240 240\" focusable=\"false\"><path d=\"M62.8,199.5c-1,0.8-2.4,0.6-3.3-0.4c-0.4-0.5-0.6-1.1-0.5-1.8V42.6c-0.2-1.3,0.7-2.4,1.9-2.6c0.7-0.1,1.3,0.1,1.9,0.4l154.7,77.7c2.1,1.1,2.1,2.8,0,3.8L62.8,199.5z\"></path></svg>"

/***/ }),
/* 105 */
/*!**********************************!*\
  !*** ./src/assets/SVG/pause.svg ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"jw-svg-icon jw-svg-icon-pause\" viewBox=\"0 0 240 240\" focusable=\"false\"><path d=\"M100,194.9c0.2,2.6-1.8,4.8-4.4,5c-0.2,0-0.4,0-0.6,0H65c-2.6,0.2-4.8-1.8-5-4.4c0-0.2,0-0.4,0-0.6V45c-0.2-2.6,1.8-4.8,4.4-5c0.2,0,0.4,0,0.6,0h30c2.6-0.2,4.8,1.8,5,4.4c0,0.2,0,0.4,0,0.6V194.9z M180,45.1c0.2-2.6-1.8-4.8-4.4-5c-0.2,0-0.4,0-0.6,0h-30c-2.6-0.2-4.8,1.8-5,4.4c0,0.2,0,0.4,0,0.6V195c-0.2,2.6,1.8,4.8,4.4,5c0.2,0,0.4,0,0.6,0h30c2.6,0.2,4.8-1.8,5-4.4c0-0.2,0-0.4,0-0.6V45.1z\"></path></svg>"

/***/ }),
/* 106 */
/*!**************************************!*\
  !*** ./src/assets/SVG/rewind-10.svg ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "<svg class=\"jw-svg-icon jw-svg-icon-rewind\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 240 240\" focusable=\"false\"><path d=\"M113.2,131.078a21.589,21.589,0,0,0-17.7-10.6,21.589,21.589,0,0,0-17.7,10.6,44.769,44.769,0,0,0,0,46.3,21.589,21.589,0,0,0,17.7,10.6,21.589,21.589,0,0,0,17.7-10.6,44.769,44.769,0,0,0,0-46.3Zm-17.7,47.2c-7.8,0-14.4-11-14.4-24.1s6.6-24.1,14.4-24.1,14.4,11,14.4,24.1S103.4,178.278,95.5,178.278Zm-43.4,9.7v-51l-4.8,4.8-6.8-6.8,13-13a4.8,4.8,0,0,1,8.2,3.4v62.7l-9.6-.1Zm162-130.2v125.3a4.867,4.867,0,0,1-4.8,4.8H146.6v-19.3h48.2v-96.4H79.1v19.3c0,5.3-3.6,7.2-8,4.3l-41.8-27.9a6.013,6.013,0,0,1-2.7-8,5.887,5.887,0,0,1,2.7-2.7l41.8-27.9c4.4-2.9,8-1,8,4.3v19.3H209.2A4.974,4.974,0,0,1,214.1,57.778Z\"></path></svg>"

/***/ }),
/* 107 */
/*!*********************************!*\
  !*** ./src/assets/SVG/next.svg ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"jw-svg-icon jw-svg-icon-next\" viewBox=\"0 0 240 240\" focusable=\"false\"><path d=\"M165,60v53.3L59.2,42.8C56.9,41.3,55,42.3,55,45v150c0,2.7,1.9,3.8,4.2,2.2L165,126.6v53.3h20v-120L165,60L165,60z\"></path></svg>"

/***/ }),
/* 108 */
/*!*************************************!*\
  !*** ./src/assets/SVG/volume-0.svg ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "<svg class=\"jw-svg-icon jw-svg-icon-volume-0\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 240 240\" focusable=\"false\"><path d=\"M116.4,42.8v154.5c0,2.8-1.7,3.6-3.8,1.7l-54.1-48.1H28.9c-2.8,0-5.2-2.3-5.2-5.2V94.2c0-2.8,2.3-5.2,5.2-5.2h29.6l54.1-48.1C114.6,39.1,116.4,39.9,116.4,42.8z M212.3,96.4l-14.6-14.6l-23.6,23.6l-23.6-23.6l-14.6,14.6l23.6,23.6l-23.6,23.6l14.6,14.6l23.6-23.6l23.6,23.6l14.6-14.6L188.7,120L212.3,96.4z\"></path></svg>"

/***/ }),
/* 109 */
/*!**************************************!*\
  !*** ./src/assets/SVG/volume-50.svg ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "<svg class=\"jw-svg-icon jw-svg-icon-volume-50\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 240 240\" focusable=\"false\"><path d=\"M116.4,42.8v154.5c0,2.8-1.7,3.6-3.8,1.7l-54.1-48.1H28.9c-2.8,0-5.2-2.3-5.2-5.2V94.2c0-2.8,2.3-5.2,5.2-5.2h29.6l54.1-48.1C114.7,39.1,116.4,39.9,116.4,42.8z M178.2,120c0-22.7-18.5-41.2-41.2-41.2v20.6c11.4,0,20.6,9.2,20.6,20.6c0,11.4-9.2,20.6-20.6,20.6v20.6C159.8,161.2,178.2,142.7,178.2,120z\"></path></svg>"

/***/ }),
/* 110 */
/*!***************************************!*\
  !*** ./src/assets/SVG/volume-100.svg ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "<svg class=\"jw-svg-icon jw-svg-icon-volume-100\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 240 240\" focusable=\"false\"><path d=\"M116.5,42.8v154.4c0,2.8-1.7,3.6-3.8,1.7l-54.1-48H29c-2.8,0-5.2-2.3-5.2-5.2V94.3c0-2.8,2.3-5.2,5.2-5.2h29.6l54.1-48C114.8,39.2,116.5,39.9,116.5,42.8z\"></path><path d=\"M136.2,160v-20c11.1,0,20-8.9,20-20s-8.9-20-20-20V80c22.1,0,40,17.9,40,40S158.3,160,136.2,160z\"></path><path d=\"M216.2,120c0-44.2-35.8-80-80-80v20c33.1,0,60,26.9,60,60s-26.9,60-60,60v20C180.4,199.9,216.1,164.1,216.2,120z\"></path></svg>"

/***/ }),
/* 111 */
/*!****************************************!*\
  !*** ./src/assets/SVG/captions-on.svg ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"jw-svg-icon jw-svg-icon-cc-on\" viewBox=\"0 0 240 240\" focusable=\"false\"><path d=\"M215,40H25c-2.7,0-5,2.2-5,5v150c0,2.7,2.2,5,5,5h190c2.7,0,5-2.2,5-5V45C220,42.2,217.8,40,215,40z M108.1,137.7c0.7-0.7,1.5-1.5,2.4-2.3l6.6,7.8c-2.2,2.4-5,4.4-8,5.8c-8,3.5-17.3,2.4-24.3-2.9c-3.9-3.6-5.9-8.7-5.5-14v-25.6c0-2.7,0.5-5.3,1.5-7.8c0.9-2.2,2.4-4.3,4.2-5.9c5.7-4.5,13.2-6.2,20.3-4.6c3.3,0.5,6.3,2,8.7,4.3c1.3,1.3,2.5,2.6,3.5,4.2l-7.1,6.9c-2.4-3.7-6.5-5.9-10.9-5.9c-2.4-0.2-4.8,0.7-6.6,2.3c-1.7,1.7-2.5,4.1-2.4,6.5v25.6C90.4,141.7,102,143.5,108.1,137.7z M152.9,137.7c0.7-0.7,1.5-1.5,2.4-2.3l6.6,7.8c-2.2,2.4-5,4.4-8,5.8c-8,3.5-17.3,2.4-24.3-2.9c-3.9-3.6-5.9-8.7-5.5-14v-25.6c0-2.7,0.5-5.3,1.5-7.8c0.9-2.2,2.4-4.3,4.2-5.9c5.7-4.5,13.2-6.2,20.3-4.6c3.3,0.5,6.3,2,8.7,4.3c1.3,1.3,2.5,2.6,3.5,4.2l-7.1,6.9c-2.4-3.7-6.5-5.9-10.9-5.9c-2.4-0.2-4.8,0.7-6.6,2.3c-1.7,1.7-2.5,4.1-2.4,6.5v25.6C135.2,141.7,146.8,143.5,152.9,137.7z\"></path></svg>"

/***/ }),
/* 112 */
/*!*****************************************!*\
  !*** ./src/assets/SVG/captions-off.svg ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"jw-svg-icon jw-svg-icon-cc-off\" viewBox=\"0 0 240 240\" focusable=\"false\"><path d=\"M99.4,97.8c-2.4-0.2-4.8,0.7-6.6,2.3c-1.7,1.7-2.5,4.1-2.4,6.5v25.6c0,9.6,11.6,11.4,17.7,5.5c0.7-0.7,1.5-1.5,2.4-2.3l6.6,7.8c-2.2,2.4-5,4.4-8,5.8c-8,3.5-17.3,2.4-24.3-2.9c-3.9-3.6-5.9-8.7-5.5-14v-25.6c0-2.7,0.5-5.3,1.5-7.8c0.9-2.2,2.4-4.3,4.2-5.9c5.7-4.5,13.2-6.2,20.3-4.6c3.3,0.5,6.3,2,8.7,4.3c1.3,1.3,2.5,2.6,3.5,4.2l-7.1,6.9C107.9,100,103.8,97.8,99.4,97.8z M144.1,97.8c-2.4-0.2-4.8,0.7-6.6,2.3c-1.7,1.7-2.5,4.1-2.4,6.5v25.6c0,9.6,11.6,11.4,17.7,5.5c0.7-0.7,1.5-1.5,2.4-2.3l6.6,7.8c-2.2,2.4-5,4.4-8,5.8c-8,3.5-17.3,2.4-24.3-2.9c-3.9-3.6-5.9-8.7-5.5-14v-25.6c0-2.7,0.5-5.3,1.5-7.8c0.9-2.2,2.4-4.3,4.2-5.9c5.7-4.5,13.2-6.2,20.3-4.6c3.3,0.5,6.3,2,8.7,4.3c1.3,1.3,2.5,2.6,3.5,4.2l-7.1,6.9C152.6,100,148.5,97.8,144.1,97.8L144.1,97.8z M200,60v120H40V60H200 M215,40H25c-2.7,0-5,2.2-5,5v150c0,2.7,2.2,5,5,5h190c2.7,0,5-2.2,5-5V45C220,42.2,217.8,40,215,40z\"></path></svg>"

/***/ }),
/* 113 */
/*!***************************************!*\
  !*** ./src/assets/SVG/airplay-on.svg ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"jw-svg-icon jw-svg-icon-airplay-on\" viewBox=\"0 0 240 240\"><path d=\"M229.9,40v130c0.2,2.6-1.8,4.8-4.4,5c-0.2,0-0.4,0-0.6,0h-44l-17-20h46V55H30v100h47l-17,20h-45c-2.6,0.2-4.8-1.8-5-4.4c0-0.2,0-0.4,0-0.6V40c-0.2-2.6,1.8-4.8,4.4-5c0.2,0,0.4,0,0.6,0h209.8c2.6-0.2,4.8,1.8,5,4.4C229.9,39.7,229.9,39.9,229.9,40z M104.9,122l15-18l15,18l11,13h44V75H50v60h44L104.9,122z M179.9,205l-60-70l-60,70H179.9z\"></path></svg>"

/***/ }),
/* 114 */
/*!****************************************!*\
  !*** ./src/assets/SVG/airplay-off.svg ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"jw-svg-icon jw-svg-icon-airplay-off\" viewBox=\"0 0 240 240\"><path d=\"M210,55v100h-50l20,20h45c2.6,0.2,4.8-1.8,5-4.4c0-0.2,0-0.4,0-0.6V40c0.2-2.6-1.8-4.8-4.4-5c-0.2,0-0.4,0-0.6,0H15c-2.6-0.2-4.8,1.8-5,4.4c0,0.2,0,0.4,0,0.6v130c-0.2,2.6,1.8,4.8,4.4,5c0.2,0,0.4,0,0.6,0h45l20-20H30V55H210 M60,205l60-70l60,70H60L60,205z\"></path></svg>"

/***/ }),
/* 115 */
/*!******************************************!*\
  !*** ./src/assets/SVG/playback-rate.svg ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"jw-svg-icon jw-svg-icon-playback-rate\" viewBox=\"0 0 240 240\" focusable=\"false\"><path d=\"M158.83,48.83A71.17,71.17,0,1,0,230,120,71.163,71.163,0,0,0,158.83,48.83Zm45.293,77.632H152.34V74.708h12.952v38.83h38.83ZM35.878,74.708h38.83V87.66H35.878ZM10,113.538H61.755V126.49H10Zm25.878,38.83h38.83V165.32H35.878Z\"></path></svg>"

/***/ }),
/* 116 */
/*!*************************************!*\
  !*** ./src/assets/SVG/settings.svg ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "<svg class=\"jw-svg-icon jw-svg-icon-settings\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 240 240\" focusable=\"false\"><path d=\"M204,145l-25-14c0.8-3.6,1.2-7.3,1-11c0.2-3.7-0.2-7.4-1-11l25-14c2.2-1.6,3.1-4.5,2-7l-16-26c-1.2-2.1-3.8-2.9-6-2l-25,14c-6-4.2-12.3-7.9-19-11V35c0.2-2.6-1.8-4.8-4.4-5c-0.2,0-0.4,0-0.6,0h-30c-2.6-0.2-4.8,1.8-5,4.4c0,0.2,0,0.4,0,0.6v28c-6.7,3.1-13,6.7-19,11L56,60c-2.2-0.9-4.8-0.1-6,2L35,88c-1.6,2.2-1.3,5.3,0.9,6.9c0,0,0.1,0,0.1,0.1l25,14c-0.8,3.6-1.2,7.3-1,11c-0.2,3.7,0.2,7.4,1,11l-25,14c-2.2,1.6-3.1,4.5-2,7l16,26c1.2,2.1,3.8,2.9,6,2l25-14c5.7,4.6,12.2,8.3,19,11v28c-0.2,2.6,1.8,4.8,4.4,5c0.2,0,0.4,0,0.6,0h30c2.6,0.2,4.8-1.8,5-4.4c0-0.2,0-0.4,0-0.6v-28c7-2.3,13.5-6,19-11l25,14c2.5,1.3,5.6,0.4,7-2l15-26C206.7,149.4,206,146.7,204,145z M120,149.9c-16.5,0-30-13.4-30-30s13.4-30,30-30s30,13.4,30,30c0.3,16.3-12.6,29.7-28.9,30C120.7,149.9,120.4,149.9,120,149.9z\"></path></svg>"

/***/ }),
/* 117 */
/*!*****************************************!*\
  !*** ./src/assets/SVG/audio-tracks.svg ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "<svg class=\"jw-svg-icon jw-svg-icon-audio-tracks\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 240 240\" focusable=\"false\"><path d=\"M35,34h160v20H35V34z M35,94h160V74H35V94z M35,134h60v-20H35V134z M160,114c-23.4-1.3-43.6,16.5-45,40v50h20c5.2,0.3,9.7-3.6,10-8.9c0-0.4,0-0.7,0-1.1v-20c0.3-5.2-3.6-9.7-8.9-10c-0.4,0-0.7,0-1.1,0h-10v-10c1.5-17.9,17.1-31.3,35-30c17.9-1.3,33.6,12.1,35,30v10H185c-5.2-0.3-9.7,3.6-10,8.9c0,0.4,0,0.7,0,1.1v20c-0.3,5.2,3.6,9.7,8.9,10c0.4,0,0.7,0,1.1,0h20v-50C203.5,130.6,183.4,112.7,160,114z\"></path></svg>"

/***/ }),
/* 118 */
/*!****************************************!*\
  !*** ./src/assets/SVG/quality-100.svg ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "<svg class=\"jw-svg-icon jw-svg-icon-quality-100\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 240 240\" focusable=\"false\"><path d=\"M55,200H35c-3,0-5-2-5-4c0,0,0,0,0-1v-30c0-3,2-5,4-5c0,0,0,0,1,0h20c3,0,5,2,5,4c0,0,0,0,0,1v30C60,198,58,200,55,200L55,200z M110,195v-70c0-3-2-5-4-5c0,0,0,0-1,0H85c-3,0-5,2-5,4c0,0,0,0,0,1v70c0,3,2,5,4,5c0,0,0,0,1,0h20C108,200,110,198,110,195L110,195z M160,195V85c0-3-2-5-4-5c0,0,0,0-1,0h-20c-3,0-5,2-5,4c0,0,0,0,0,1v110c0,3,2,5,4,5c0,0,0,0,1,0h20C158,200,160,198,160,195L160,195z M210,195V45c0-3-2-5-4-5c0,0,0,0-1,0h-20c-3,0-5,2-5,4c0,0,0,0,0,1v150c0,3,2,5,4,5c0,0,0,0,1,0h20C208,200,210,198,210,195L210,195z\"></path></svg>"

/***/ }),
/* 119 */
/*!*******************************************!*\
  !*** ./src/assets/SVG/fullscreen-not.svg ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"jw-svg-icon jw-svg-icon-fullscreen-off\" viewBox=\"0 0 240 240\" focusable=\"false\"><path d=\"M109.2,134.9l-8.4,50.1c-0.4,2.7-2.4,3.3-4.4,1.4L82,172l-27.9,27.9l-14.2-14.2l27.9-27.9l-14.4-14.4c-1.9-1.9-1.3-3.9,1.4-4.4l50.1-8.4c1.8-0.5,3.6,0.6,4.1,2.4C109.4,133.7,109.4,134.3,109.2,134.9L109.2,134.9z M172.1,82.1L200,54.2L185.8,40l-27.9,27.9l-14.4-14.4c-1.9-1.9-3.9-1.3-4.4,1.4l-8.4,50.1c-0.5,1.8,0.6,3.6,2.4,4.1c0.5,0.2,1.2,0.2,1.7,0l50.1-8.4c2.7-0.4,3.3-2.4,1.4-4.4L172.1,82.1z\"></path></svg>"

/***/ }),
/* 120 */
/*!***************************************!*\
  !*** ./src/assets/SVG/fullscreen.svg ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"jw-svg-icon jw-svg-icon-fullscreen-on\" viewBox=\"0 0 240 240\" focusable=\"false\"><path d=\"M96.3,186.1c1.9,1.9,1.3,4-1.4,4.4l-50.6,8.4c-1.8,0.5-3.7-0.6-4.2-2.4c-0.2-0.6-0.2-1.2,0-1.7l8.4-50.6c0.4-2.7,2.4-3.4,4.4-1.4l14.5,14.5l28.2-28.2l14.3,14.3l-28.2,28.2L96.3,186.1z M195.8,39.1l-50.6,8.4c-2.7,0.4-3.4,2.4-1.4,4.4l14.5,14.5l-28.2,28.2l14.3,14.3l28.2-28.2l14.5,14.5c1.9,1.9,4,1.3,4.4-1.4l8.4-50.6c0.5-1.8-0.6-3.6-2.4-4.2C197,39,196.4,39,195.8,39.1L195.8,39.1z\"></path></svg>"

/***/ }),
/* 121 */
/*!**********************************!*\
  !*** ./src/assets/SVG/close.svg ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"jw-svg-icon jw-svg-icon-close\" viewBox=\"0 0 240 240\" focusable=\"false\"><path d=\"M134.8,120l48.6-48.6c2-1.9,2.1-5.2,0.2-7.2c0,0-0.1-0.1-0.2-0.2l-7.4-7.4c-1.9-2-5.2-2.1-7.2-0.2c0,0-0.1,0.1-0.2,0.2L120,105.2L71.4,56.6c-1.9-2-5.2-2.1-7.2-0.2c0,0-0.1,0.1-0.2,0.2L56.6,64c-2,1.9-2.1,5.2-0.2,7.2c0,0,0.1,0.1,0.2,0.2l48.6,48.7l-48.6,48.6c-2,1.9-2.1,5.2-0.2,7.2c0,0,0.1,0.1,0.2,0.2l7.4,7.4c1.9,2,5.2,2.1,7.2,0.2c0,0,0.1-0.1,0.2-0.2l48.7-48.6l48.6,48.6c1.9,2,5.2,2.1,7.2,0.2c0,0,0.1-0.1,0.2-0.2l7.4-7.4c2-1.9,2.1-5.2,0.2-7.2c0,0-0.1-0.1-0.2-0.2L134.8,120z\"></path></svg>"

/***/ }),
/* 122 */
/*!************************************!*\
  !*** ./src/assets/SVG/jw-logo.svg ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"jw-svg-icon jw-svg-icon-jwplayer-logo\" viewBox=\"0 0 992 1024\"><path d=\"M144 518.4c0 6.4-6.4 6.4-6.4 0l-3.2-12.8c0 0-6.4-19.2-12.8-38.4 0-6.4-6.4-12.8-9.6-22.4-6.4-6.4-16-9.6-28.8-6.4-9.6 3.2-16 12.8-16 22.4s0 16 0 25.6c3.2 25.6 22.4 121.6 32 140.8 9.6 22.4 35.2 32 54.4 22.4 22.4-9.6 28.8-35.2 38.4-54.4 9.6-25.6 60.8-166.4 60.8-166.4 6.4-12.8 9.6-12.8 9.6 0 0 0 0 140.8-3.2 204.8 0 25.6 0 67.2 9.6 89.6 6.4 16 12.8 28.8 25.6 38.4s28.8 12.8 44.8 12.8c6.4 0 16-3.2 22.4-6.4 9.6-6.4 16-12.8 25.6-22.4 16-19.2 28.8-44.8 38.4-64 25.6-51.2 89.6-201.6 89.6-201.6 6.4-12.8 9.6-12.8 9.6 0 0 0-9.6 256-9.6 355.2 0 25.6 6.4 48 12.8 70.4 9.6 22.4 22.4 38.4 44.8 48s48 9.6 70.4-3.2c16-9.6 28.8-25.6 38.4-38.4 12.8-22.4 25.6-48 32-70.4 19.2-51.2 35.2-102.4 51.2-153.6s153.6-540.8 163.2-582.4c0-6.4 0-9.6 0-12.8 0-9.6-6.4-19.2-16-22.4-16-6.4-32 0-38.4 12.8-6.4 16-195.2 470.4-195.2 470.4-6.4 12.8-9.6 12.8-9.6 0 0 0 0-156.8 0-288 0-70.4-35.2-108.8-83.2-118.4-22.4-3.2-44.8 0-67.2 12.8s-35.2 32-48 54.4c-16 28.8-105.6 297.6-105.6 297.6-6.4 12.8-9.6 12.8-9.6 0 0 0-3.2-115.2-6.4-144-3.2-41.6-12.8-108.8-67.2-115.2-51.2-3.2-73.6 57.6-86.4 99.2-9.6 25.6-51.2 163.2-51.2 163.2v3.2z\"></path></svg>"

/***/ }),
/* 123 */
/*!**********************************************************!*\
  !*** ./src/js/view/controls/components/custom-button.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _css = __webpack_require__(/*! utils/css */ 24);

var _ui = __webpack_require__(/*! utils/ui */ 73);

var _ui2 = _interopRequireDefault(_ui);

var _svgParser = __webpack_require__(/*! utils/svgParser */ 76);

var _svgParser2 = _interopRequireDefault(_svgParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var collection = {};

function getCachedIcon(svg) {
    if (!collection[svg]) {
        var icons = Object.keys(collection);
        if (icons.length > 10) {
            delete collection[icons[0]];
        }
        var element = (0, _svgParser2.default)(svg);
        collection[svg] = element;
    }
    return collection[svg].cloneNode(true);
}

var CustomButton = function () {
    function CustomButton(img, ariaText, callback, id, btnClass) {
        _classCallCheck(this, CustomButton);

        var buttonElement = document.createElement('div');
        buttonElement.className = 'jw-icon jw-icon-inline jw-button-color jw-reset ' + (btnClass || '');
        buttonElement.setAttribute('button', id);
        buttonElement.setAttribute('role', 'button');
        buttonElement.setAttribute('tabindex', '0');
        if (ariaText) {
            buttonElement.setAttribute('aria-label', ariaText);
        }

        var iconElement = void 0;
        if (img && img.substring(0, 4) === '<svg') {
            iconElement = getCachedIcon(img);
        } else {
            iconElement = document.createElement('div');
            iconElement.className = 'jw-icon jw-button-image jw-button-color jw-reset';
            if (img) {
                (0, _css.style)(iconElement, {
                    backgroundImage: 'url(' + img + ')'
                });
            }
        }

        buttonElement.appendChild(iconElement);

        new _ui2.default(buttonElement).on('click tap enter', callback, this);

        // Prevent button from being focused on mousedown so that the tooltips don't remain visible until
        // the user interacts with another element on the page
        buttonElement.addEventListener('mousedown', function (e) {
            e.preventDefault();
        });

        this.id = id;
        this.buttonElement = buttonElement;
    }

    _createClass(CustomButton, [{
        key: 'element',
        value: function element() {
            return this.buttonElement;
        }
    }, {
        key: 'toggle',
        value: function toggle(show) {
            if (show) {
                this.show();
            } else {
                this.hide();
            }
        }
    }, {
        key: 'show',
        value: function show() {
            this.buttonElement.style.display = '';
        }
    }, {
        key: 'hide',
        value: function hide() {
            this.buttonElement.style.display = 'none';
        }
    }]);

    return CustomButton;
}();

exports.default = CustomButton;

/***/ }),
/* 124 */
/*!*******************************************************!*\
  !*** ./src/js/view/controls/components/timeslider.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(/*! view/constants */ 78);

var _underscore = __webpack_require__(/*! utils/underscore */ 0);

var _underscore2 = _interopRequireDefault(_underscore);

var _helpers = __webpack_require__(/*! utils/helpers */ 6);

var _helpers2 = _interopRequireDefault(_helpers);

var _ui = __webpack_require__(/*! utils/ui */ 73);

var _ui2 = _interopRequireDefault(_ui);

var _slider = __webpack_require__(/*! view/controls/components/slider */ 85);

var _slider2 = _interopRequireDefault(_slider);

var _tooltip = __webpack_require__(/*! view/controls/components/tooltip */ 86);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _chapters = __webpack_require__(/*! view/controls/components/chapters.mixin */ 126);

var _chapters2 = _interopRequireDefault(_chapters);

var _thumbnails = __webpack_require__(/*! view/controls/components/thumbnails.mixin */ 127);

var _thumbnails2 = _interopRequireDefault(_thumbnails);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TimeTip = function (_Tooltip) {
    _inherits(TimeTip, _Tooltip);

    function TimeTip() {
        _classCallCheck(this, TimeTip);

        return _possibleConstructorReturn(this, (TimeTip.__proto__ || Object.getPrototypeOf(TimeTip)).apply(this, arguments));
    }

    _createClass(TimeTip, [{
        key: 'setup',
        value: function setup() {
            this.text = document.createElement('span');
            this.text.className = 'jw-text jw-reset';
            this.img = document.createElement('div');
            this.img.className = 'jw-time-thumb jw-reset';
            this.containerWidth = 0;
            this.textLength = 0;
            this.dragJustReleased = false;

            var wrapper = document.createElement('div');
            wrapper.className = 'jw-time-tip jw-reset';
            wrapper.appendChild(this.img);
            wrapper.appendChild(this.text);

            this.addContent(wrapper);
        }
    }, {
        key: 'image',
        value: function image(style) {
            _helpers2.default.style(this.img, style);
        }
    }, {
        key: 'update',
        value: function update(txt) {
            this.text.textContent = txt;
        }
    }, {
        key: 'getWidth',
        value: function getWidth() {
            if (!this.containerWidth) {
                this.setWidth();
            }

            return this.containerWidth;
        }
    }, {
        key: 'setWidth',
        value: function setWidth(width) {
            var tolerance = 16; // add a little padding so the tooltip isn't flush against the edge

            if (width) {
                this.containerWidth = width + tolerance;
                return;
            }

            if (!this.container) {
                return;
            }

            this.containerWidth = _helpers2.default.bounds(this.container).width + tolerance;
        }
    }, {
        key: 'resetWidth',
        value: function resetWidth() {
            this.containerWidth = 0;
        }
    }]);

    return TimeTip;
}(_tooltip2.default);

function reasonInteraction() {
    return { reason: 'interaction' };
}

var TimeSlider = function (_Slider) {
    _inherits(TimeSlider, _Slider);

    function TimeSlider(_model, _api) {
        _classCallCheck(this, TimeSlider);

        var _this2 = _possibleConstructorReturn(this, (TimeSlider.__proto__ || Object.getPrototypeOf(TimeSlider)).call(this, 'jw-slider-time', 'horizontal'));

        _this2._model = _model;
        _this2._api = _api;

        _this2.timeTip = new TimeTip('jw-tooltip-time', null, true);
        _this2.timeTip.setup();

        _this2.cues = [];

        // Store the attempted seek, until the previous one completes
        _this2.seekThrottled = _underscore2.default.throttle(_this2.performSeek, 400);
        _this2.mobileHoverDistance = 5;

        _this2.setup();
        return _this2;
    }

    // These overwrite Slider methods


    _createClass(TimeSlider, [{
        key: 'setup',
        value: function setup() {
            _get(TimeSlider.prototype.__proto__ || Object.getPrototypeOf(TimeSlider.prototype), 'setup', this).apply(this, arguments);

            this._model.on('change:duration', this.onDuration, this).on('change:cues', this.addCues, this).change('playlistItem', this.onPlaylistItem, this).change('position', this.onPosition, this).change('buffer', this.onBuffer, this).change('streamType', this.onStreamType, this);

            this.elementRail.appendChild(this.timeTip.element());

            // Show the tooltip on while dragging (touch) moving(mouse), or moving over(mouse)
            this.elementUI = new _ui2.default(this.el, { useHover: true, useMove: true }).on('drag move over', this.showTimeTooltip.bind(this), this).on('dragEnd out', this.hideTimeTooltip.bind(this), this);
        }
    }, {
        key: 'limit',
        value: function limit(percent) {
            if (this.activeCue && _underscore2.default.isNumber(this.activeCue.pct)) {
                return this.activeCue.pct;
            }
            var duration = this._model.get('duration');
            if (this.streamType === 'DVR') {
                var position = (1 - percent / 100) * duration;
                var currentPosition = this._model.get('position');
                var updatedPosition = Math.min(position, Math.max(_constants.dvrSeekLimit, currentPosition));
                var updatedPercent = updatedPosition * 100 / duration;
                return 100 - updatedPercent;
            }
            return percent;
        }
    }, {
        key: 'update',
        value: function update(percent) {
            this.seekTo = percent;
            this.seekThrottled();
            _get(TimeSlider.prototype.__proto__ || Object.getPrototypeOf(TimeSlider.prototype), 'update', this).apply(this, arguments);
        }
    }, {
        key: 'dragStart',
        value: function dragStart() {
            this._model.set('scrubbing', true);
            _get(TimeSlider.prototype.__proto__ || Object.getPrototypeOf(TimeSlider.prototype), 'dragStart', this).apply(this, arguments);
        }
    }, {
        key: 'dragEnd',
        value: function dragEnd() {
            _get(TimeSlider.prototype.__proto__ || Object.getPrototypeOf(TimeSlider.prototype), 'dragEnd', this).apply(this, arguments);
            this._model.set('scrubbing', false);
        }
    }, {
        key: 'onBuffer',
        value: function onBuffer(model, pct) {
            this.updateBuffer(pct);
        }
    }, {
        key: 'onPosition',
        value: function onPosition(model, position) {
            this.updateTime(position, model.get('duration'));
        }
    }, {
        key: 'onDuration',
        value: function onDuration(model, duration) {
            this.updateTime(model.get('position'), duration);
            this.drawCues();
        }
    }, {
        key: 'onStreamType',
        value: function onStreamType(model, streamType) {
            this.streamType = streamType;
        }
    }, {
        key: 'updateTime',
        value: function updateTime(position, duration) {
            var pct = 0;
            if (duration) {
                if (this.streamType === 'DVR') {
                    pct = (duration - position) / duration * 100;
                } else if (this.streamType === 'VOD' || !this.streamType) {
                    // Default to VOD behavior if streamType isn't set
                    pct = position / duration * 100;
                }
            }
            this.render(pct);
        }
    }, {
        key: 'onPlaylistItem',
        value: function onPlaylistItem(model, playlistItem) {
            if (!playlistItem) {
                return;
            }
            this.reset();
            this.addCues(model, model.get('cues'));

            var tracks = playlistItem.tracks;
            _underscore2.default.each(tracks, function (track) {
                if (track && track.kind && track.kind.toLowerCase() === 'thumbnails') {
                    this.loadThumbnails(track.file);
                } else if (track && track.kind && track.kind.toLowerCase() === 'chapters') {
                    this.loadChapters(track.file);
                }
            }, this);
        }
    }, {
        key: 'performSeek',
        value: function performSeek() {
            var percent = this.seekTo;
            var duration = this._model.get('duration');
            var position;
            if (duration === 0) {
                this._api.play(reasonInteraction());
            } else if (this.streamType === 'DVR') {
                position = (100 - percent) / 100 * duration;
                this._api.seek(position, reasonInteraction());
            } else {
                position = percent / 100 * duration;
                this._api.seek(Math.min(position, duration - 0.25), reasonInteraction());
            }
        }
    }, {
        key: 'showTimeTooltip',
        value: function showTimeTooltip(evt) {
            var _this3 = this;

            var duration = this._model.get('duration');
            if (duration === 0) {
                return;
            }

            var playerWidth = this._model.get('containerWidth');
            var railBounds = _helpers2.default.bounds(this.elementRail);
            var position = evt.pageX ? evt.pageX - railBounds.left : evt.x;
            position = _helpers2.default.between(position, 0, railBounds.width);
            var pct = position / railBounds.width;
            var time = duration * pct;

            // For DVR we need to swap it around
            if (duration < 0) {
                time = duration - time;
            }

            var timetipText;

            // With touch events, we never will get the hover events on the cues that cause cues to be active.
            // Therefore use the info we about the scroll position to detect if there is a nearby cue to be active.
            if ((0, _ui.getPointerType)(evt.sourceEvent) === 'touch') {
                this.activeCue = this.cues.reduce(function (closeCue, cue) {
                    if (Math.abs(position - parseInt(cue.pct) / 100 * railBounds.width) < _this3.mobileHoverDistance) {
                        return cue;
                    }
                    return closeCue;
                }, undefined);
            }

            if (this.activeCue) {
                timetipText = this.activeCue.text;
            } else {
                var allowNegativeTime = true;
                timetipText = _helpers2.default.timeFormat(time, allowNegativeTime);

                // If DVR and within live buffer
                if (duration < 0 && time > _constants.dvrSeekLimit) {
                    timetipText = 'Live';
                }
            }
            var timeTip = this.timeTip;

            timeTip.update(timetipText);
            if (this.textLength !== timetipText.length) {
                // An activeCue may cause the width of the timeTip container to change
                this.textLength = timetipText.length;
                timeTip.resetWidth();
            }
            this.showThumbnail(time);

            _helpers2.default.addClass(timeTip.el, 'jw-open');

            var timeTipWidth = timeTip.getWidth();
            var widthPct = railBounds.width / 100;
            var tolerance = playerWidth - railBounds.width;
            var timeTipPct = 0;
            if (timeTipWidth > tolerance) {
                // timeTip may go outside the bounds of the player. Determine the % of tolerance needed
                timeTipPct = (timeTipWidth - tolerance) / (2 * 100 * widthPct);
            }
            var safePct = Math.min(1 - timeTipPct, Math.max(timeTipPct, pct)).toFixed(3) * 100;
            _helpers2.default.style(timeTip.el, { left: safePct + '%' });
        }
    }, {
        key: 'hideTimeTooltip',
        value: function hideTimeTooltip() {
            _helpers2.default.removeClass(this.timeTip.el, 'jw-open');
        }
    }, {
        key: 'addCues',
        value: function addCues(model, cues) {
            var _this4 = this;

            if (cues && cues.length) {
                cues.forEach(function (ele) {
                    _this4.addCue(ele);
                });
                this.drawCues();
            } else {
                this.resetChapters();
            }
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.resetThumbnails();
            this.timeTip.resetWidth();
            this.textLength = 0;
        }
    }]);

    return TimeSlider;
}(_slider2.default);

_extends(TimeSlider.prototype, _chapters2.default, _thumbnails2.default);

exports.default = TimeSlider;

/***/ }),
/* 125 */
/*!**************************************************!*\
  !*** ./src/js/view/controls/templates/slider.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var orientation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    return '<div class="' + className + ' ' + orientation + ' jw-reset" aria-hidden="true">' + '<div class="jw-slider-container jw-reset">' + '<div class="jw-rail jw-reset"></div>' + '<div class="jw-buffer jw-reset"></div>' + '<div class="jw-progress jw-reset"></div>' + '<div class="jw-knob jw-reset"></div>' + '</div>' + '</div>';
};

/***/ }),
/* 126 */
/*!***********************************************************!*\
  !*** ./src/js/view/controls/components/chapters.mixin.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _helpers = __webpack_require__(/*! utils/helpers */ 6);

var _helpers2 = _interopRequireDefault(_helpers);

var _srt = __webpack_require__(/*! parsers/captions/srt */ 77);

var _srt2 = _interopRequireDefault(_srt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cue = function () {
    function Cue(time, text) {
        _classCallCheck(this, Cue);

        this.time = time;
        this.text = text;
        this.el = document.createElement('div');
        this.el.className = 'jw-cue jw-reset';
    }

    _createClass(Cue, [{
        key: 'align',
        value: function align(duration) {
            // If a percentage, use it, else calculate the percentage
            if (this.time.toString().slice(-1) === '%') {
                this.pct = this.time;
            } else {
                var percentage = this.time / duration * 100;
                this.pct = percentage + '%';
            }

            this.el.style.left = this.pct;
        }
    }]);

    return Cue;
}();

var ChaptersMixin = {

    loadChapters: function loadChapters(file) {
        _helpers2.default.ajax(file, this.chaptersLoaded.bind(this), this.chaptersFailed, {
            plainText: true
        });
    },

    chaptersLoaded: function chaptersLoaded(evt) {
        var _this = this;

        var data = (0, _srt2.default)(evt.responseText);
        if (Array.isArray(data)) {
            data.forEach(function (obj) {
                return _this.addCue(obj);
            });
            this.drawCues();
        }
    },

    chaptersFailed: function chaptersFailed() {},

    addCue: function addCue(obj) {
        this.cues.push(new Cue(obj.begin, obj.text));
    },

    drawCues: function drawCues() {
        var _this2 = this;

        // We won't want to draw them until we have a duration
        var duration = this._model.get('duration');
        if (!duration || duration <= 0) {
            return;
        }

        this.cues.forEach(function (cue) {
            cue.align(duration);
            cue.el.addEventListener('mouseover', function () {
                _this2.activeCue = cue;
            });
            cue.el.addEventListener('mouseout', function () {
                _this2.activeCue = null;
            });
            _this2.elementRail.appendChild(cue.el);
        });
    },

    resetChapters: function resetChapters() {
        this.cues.forEach(function (cue) {
            if (cue.el.parentNode) {
                cue.el.parentNode.removeChild(cue.el);
            }
        });
        this.cues = [];
    }
};

exports.default = ChaptersMixin;

/***/ }),
/* 127 */
/*!*************************************************************!*\
  !*** ./src/js/view/controls/components/thumbnails.mixin.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _underscore = __webpack_require__(/*! utils/underscore */ 0);

var _underscore2 = _interopRequireDefault(_underscore);

var _helpers = __webpack_require__(/*! utils/helpers */ 6);

var _helpers2 = _interopRequireDefault(_helpers);

var _srt = __webpack_require__(/*! parsers/captions/srt */ 77);

var _srt2 = _interopRequireDefault(_srt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Thumbnail(obj) {
    this.begin = obj.begin;
    this.end = obj.end;
    this.img = obj.text;
}

var ThumbnailsMixin = {
    loadThumbnails: function loadThumbnails(file) {
        if (!file) {
            return;
        }
        this.vttPath = file.split('?')[0].split('/').slice(0, -1).join('/');
        // Only load the first individual image file so we can get its dimensions. All others are loaded when
        // they're set as background-images.
        this.individualImage = null;
        _helpers2.default.ajax(file, this.thumbnailsLoaded.bind(this), this.thumbnailsFailed.bind(this), {
            plainText: true
        });
    },

    thumbnailsLoaded: function thumbnailsLoaded(evt) {
        var data = (0, _srt2.default)(evt.responseText);
        if (_underscore2.default.isArray(data)) {
            _underscore2.default.each(data, function (obj) {
                this.thumbnails.push(new Thumbnail(obj));
            }, this);
            this.drawCues();
        }
    },

    thumbnailsFailed: function thumbnailsFailed() {},

    chooseThumbnail: function chooseThumbnail(seconds) {
        var idx = _underscore2.default.sortedIndex(this.thumbnails, { end: seconds }, _underscore2.default.property('end'));
        if (idx >= this.thumbnails.length) {
            idx = this.thumbnails.length - 1;
        }
        var url = this.thumbnails[idx].img;
        if (url.indexOf('://') < 0) {
            url = this.vttPath ? this.vttPath + '/' + url : url;
        }

        return url;
    },

    loadThumbnail: function loadThumbnail(seconds) {
        var url = this.chooseThumbnail(seconds);
        var style = {
            margin: '0 auto',
            backgroundPosition: '0 0'
        };

        var hashIndex = url.indexOf('#xywh');
        if (hashIndex > 0) {
            try {
                var matched = /(.+)#xywh=(\d+),(\d+),(\d+),(\d+)/.exec(url);
                url = matched[1];
                style.backgroundPosition = matched[2] * -1 + 'px ' + matched[3] * -1 + 'px';
                style.width = matched[4];
                this.timeTip.setWidth(+style.width);
                style.height = matched[5];
            } catch (e) {
                // this.vttFailed('Could not parse thumbnail');
                return;
            }
        } else if (!this.individualImage) {
            this.individualImage = new Image();
            this.individualImage.onload = _underscore2.default.bind(function () {
                this.individualImage.onload = null;
                this.timeTip.image({ width: this.individualImage.width, height: this.individualImage.height });
                this.timeTip.setWidth(this.individualImage.width);
            }, this);
            this.individualImage.src = url;
        }

        style.backgroundImage = 'url("' + url + '")';

        return style;
    },

    showThumbnail: function showThumbnail(seconds) {
        // Don't attempt to set thumbnail for small players or when a thumbnail doesn't exist
        if (this._model.get('containerWidth') <= 420 || this.thumbnails.length < 1) {
            return;
        }
        this.timeTip.image(this.loadThumbnail(seconds));
    },

    resetThumbnails: function resetThumbnails() {
        this.timeTip.image({
            backgroundImage: '',
            width: 0,
            height: 0
        });
        this.thumbnails = [];
    }
};

exports.default = ThumbnailsMixin;

/***/ }),
/* 128 */
/*!**********************************************************!*\
  !*** ./src/js/view/controls/components/volumetooltip.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tooltip = __webpack_require__(/*! view/controls/components/tooltip */ 86);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _slider = __webpack_require__(/*! view/controls/components/slider */ 85);

var _slider2 = _interopRequireDefault(_slider);

var _ui = __webpack_require__(/*! utils/ui */ 73);

var _ui2 = _interopRequireDefault(_ui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VolumeTooltip = function (_Tooltip) {
    _inherits(VolumeTooltip, _Tooltip);

    function VolumeTooltip(_model, name, ariaText, svgIcons) {
        _classCallCheck(this, VolumeTooltip);

        var _this = _possibleConstructorReturn(this, (VolumeTooltip.__proto__ || Object.getPrototypeOf(VolumeTooltip)).call(this, name, ariaText, true, svgIcons));

        _this._model = _model;
        _this.volumeSlider = new _slider2.default('jw-slider-volume jw-volume-tip', 'vertical');
        _this.volumeSlider.setup();
        _this.volumeSlider.element().classList.remove('jw-background-color');

        _this.addContent(_this.volumeSlider.element());

        _this.volumeSlider.on('update', function (evt) {
            this.trigger('update', evt);
        }, _this);

        new _ui2.default(_this.el, { useHover: true, directSelect: true, useFocus: true }).on('click enter', _this.toggleValue, _this).on('tap', _this.toggleOpenState, _this).on('over', _this.openTooltip, _this).on('out', _this.closeTooltip, _this);

        _this._model.on('change:volume', _this.onVolume, _this);
        return _this;
    }

    _createClass(VolumeTooltip, [{
        key: 'toggleValue',
        value: function toggleValue() {
            this.trigger('toggleValue');
        }
    }]);

    return VolumeTooltip;
}(_tooltip2.default);

exports.default = VolumeTooltip;

/***/ }),
/* 129 */
/*!***************************************************!*\
  !*** ./src/js/view/controls/display-container.js ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _displayContainer = __webpack_require__(/*! view/controls/templates/display-container */ 130);

var _displayContainer2 = _interopRequireDefault(_displayContainer);

var _rewindDisplayIcon = __webpack_require__(/*! view/controls/rewind-display-icon */ 132);

var _rewindDisplayIcon2 = _interopRequireDefault(_rewindDisplayIcon);

var _playDisplayIcon = __webpack_require__(/*! view/controls/play-display-icon */ 133);

var _playDisplayIcon2 = _interopRequireDefault(_playDisplayIcon);

var _nextDisplayIcon = __webpack_require__(/*! view/controls/next-display-icon */ 134);

var _nextDisplayIcon2 = _interopRequireDefault(_nextDisplayIcon);

var _icons = __webpack_require__(/*! view/controls/icons */ 74);

var _helpers = __webpack_require__(/*! utils/helpers */ 6);

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DisplayContainer = function () {
    function DisplayContainer(model, api) {
        _classCallCheck(this, DisplayContainer);

        this.el = _helpers2.default.createElement((0, _displayContainer2.default)(model.get('localization')));

        var container = this.el.querySelector('.jw-display-controls');
        var buttons = {};

        addButton('rewind', (0, _icons.cloneIcons)('rewind'), _rewindDisplayIcon2.default, container, buttons, model, api);
        addButton('display', (0, _icons.cloneIcons)('play,pause,buffer,replay'), _playDisplayIcon2.default, container, buttons, model, api);
        addButton('next', (0, _icons.cloneIcons)('next'), _nextDisplayIcon2.default, container, buttons, model, api);

        this.container = container;
        this.buttons = buttons;
    }

    _createClass(DisplayContainer, [{
        key: 'element',
        value: function element() {
            return this.el;
        }
    }]);

    return DisplayContainer;
}();

exports.default = DisplayContainer;


function addButton(name, iconElements, ButtonClass, container, buttons, model, api) {
    var buttonElement = container.querySelector('.jw-display-icon-' + name);
    var iconContainer = container.querySelector('.jw-icon-' + name);
    iconElements.forEach(function (icon) {
        iconContainer.appendChild(icon);
    });
    buttons[name] = new ButtonClass(model, api, buttonElement);
}

/***/ }),
/* 130 */
/*!*************************************************************!*\
  !*** ./src/js/view/controls/templates/display-container.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _displayIcon = __webpack_require__(/*! view/controls/templates/display-icon */ 131);

var _displayIcon2 = _interopRequireDefault(_displayIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (localization) {
    return '<div class="jw-display jw-reset">' + '<div class="jw-display-container jw-reset">' + '<div class="jw-display-controls jw-reset">' + (0, _displayIcon2.default)('rewind', localization.rewind) + (0, _displayIcon2.default)('display', localization.playback) + (0, _displayIcon2.default)('next', localization.next) + '</div>' + '</div>' + '</div>';
};

/***/ }),
/* 131 */
/*!********************************************************!*\
  !*** ./src/js/view/controls/templates/display-icon.js ***!
  \********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var iconName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var ariaLabel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    return '<div class="jw-display-icon-container jw-display-icon-' + iconName + ' jw-reset">' + ('<div class="jw-icon jw-icon-' + iconName + ' jw-button-color jw-reset" role="button" tabindex="0" aria-label="' + ariaLabel + '"></div>') + '</div>';
};

/***/ }),
/* 132 */
/*!*****************************************************!*\
  !*** ./src/js/view/controls/rewind-display-icon.js ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ui = __webpack_require__(/*! utils/ui */ 73);

var _ui2 = _interopRequireDefault(_ui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RewindDisplayIcon = function () {
    function RewindDisplayIcon(model, api, element) {
        _classCallCheck(this, RewindDisplayIcon);

        this.el = element;

        new _ui2.default(this.el).on('click tap enter', function () {
            var currentPosition = model.get('position');
            var duration = model.get('duration');
            var rewindPosition = currentPosition - 10;
            var startPosition = 0;

            // duration is negative in DVR mode
            if (model.get('streamType') === 'DVR') {
                startPosition = duration;
            }
            // Seek 10s back. Seek value should be >= 0 in VOD mode and >= (negative) duration in DVR mode
            api.seek(Math.max(rewindPosition, startPosition));
        });
    }

    _createClass(RewindDisplayIcon, [{
        key: 'element',
        value: function element() {
            return this.el;
        }
    }]);

    return RewindDisplayIcon;
}();

exports.default = RewindDisplayIcon;

/***/ }),
/* 133 */
/*!***************************************************!*\
  !*** ./src/js/view/controls/play-display-icon.js ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _backbone = __webpack_require__(/*! utils/backbone.events */ 7);

var _backbone2 = _interopRequireDefault(_backbone);

var _ui = __webpack_require__(/*! utils/ui */ 73);

var _ui2 = _interopRequireDefault(_ui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PlayDisplayIcon = function () {
    function PlayDisplayIcon(_model, api, element) {
        var _this = this;

        _classCallCheck(this, PlayDisplayIcon);

        _extends(this, _backbone2.default);

        var localization = _model.get('localization');
        var iconDisplay = element.getElementsByClassName('jw-icon-display')[0];
        element.style.cursor = 'pointer';
        this.icon = iconDisplay;
        this.el = element;

        new _ui2.default(this.el).on('click tap enter', function (evt) {
            _this.trigger(evt.type);
        });

        _model.on('change:state', function (model, newstate) {
            var newstateLabel = void 0;
            switch (newstate) {
                case 'buffering':
                    newstateLabel = localization.buffer;
                    break;
                case 'playing':
                    newstateLabel = localization.pause;
                    break;
                case 'paused':
                    newstateLabel = localization.playback;
                    break;
                case 'complete':
                    newstateLabel = localization.replay;
                    break;
                default:
                    newstateLabel = '';
                    break;
            }
            if (newstateLabel === '') {
                iconDisplay.removeAttribute('aria-label');
            } else {
                iconDisplay.setAttribute('aria-label', newstateLabel);
            }
        });
    }

    _createClass(PlayDisplayIcon, [{
        key: 'element',
        value: function element() {
            return this.el;
        }
    }]);

    return PlayDisplayIcon;
}();

exports.default = PlayDisplayIcon;

/***/ }),
/* 134 */
/*!***************************************************!*\
  !*** ./src/js/view/controls/next-display-icon.js ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ui = __webpack_require__(/*! utils/ui */ 73);

var _ui2 = _interopRequireDefault(_ui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NextDisplayIcon = function () {
    function NextDisplayIcon(model, api, element) {
        _classCallCheck(this, NextDisplayIcon);

        new _ui2.default(element).on('click tap enter', function () {
            api.next();
        });

        model.change('nextUp', function (nextUpChangeModel, nextUp) {
            element.style.visibility = nextUp ? '' : 'hidden';
        });

        this.el = element;
    }

    _createClass(NextDisplayIcon, [{
        key: 'element',
        value: function element() {
            return this.el;
        }
    }]);

    return NextDisplayIcon;
}();

exports.default = NextDisplayIcon;

/***/ }),
/* 135 */
/*!***********************************************!*\
  !*** ./src/js/view/controls/nextuptooltip.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _nextup = __webpack_require__(/*! view/controls/templates/nextup */ 136);

var _nextup2 = _interopRequireDefault(_nextup);

var _dom = __webpack_require__(/*! utils/dom */ 23);

var _ui = __webpack_require__(/*! utils/ui */ 73);

var _ui2 = _interopRequireDefault(_ui);

var _backbone = __webpack_require__(/*! utils/backbone.events */ 7);

var _backbone2 = _interopRequireDefault(_backbone);

var _helpers = __webpack_require__(/*! utils/helpers */ 6);

var _helpers2 = _interopRequireDefault(_helpers);

var _icons = __webpack_require__(/*! view/controls/icons */ 74);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NextUpTooltip = function () {
    function NextUpTooltip(_model, _api, playerElement) {
        _classCallCheck(this, NextUpTooltip);

        _extends(this, _backbone2.default);
        this._model = _model;
        this._api = _api;
        this._playerElement = playerElement;
        this.nextUpText = _model.get('localization').nextUp;
        this.nextUpClose = _model.get('localization').nextUpClose;
        this.state = 'tooltip';
        this.enabled = false;
        this.shown = false;
        this.reset();
    }

    _createClass(NextUpTooltip, [{
        key: 'setup',
        value: function setup(context) {
            this.container = context.createElement('div');
            this.container.className = 'jw-nextup-container jw-reset';
            var element = _helpers2.default.createElement((0, _nextup2.default)());
            element.querySelector('.jw-nextup-close').appendChild((0, _icons.cloneIcon)('close'));
            this.addContent(element);

            this.closeButton = this.content.querySelector('.jw-nextup-close');
            this.closeButton.setAttribute('aria-label', this.nextUpClose);
            this.tooltip = this.content.querySelector('.jw-nextup-tooltip');

            var viewModel = this._model;
            var playerViewModel = viewModel.player;
            // Next Up is hidden until we get a valid NextUp item from the nextUp event
            this.enabled = false;

            // Events
            viewModel.on('change:nextUp', this.onNextUp, this);

            // Listen for duration changes to determine the offset from the end for when next up should be shown
            playerViewModel.change('duration', this.onDuration, this);
            // Listen for position changes so we can show the tooltip when the offset has been crossed
            playerViewModel.change('position', this.onElapsed, this);

            playerViewModel.change('streamType', this.onStreamType, this);

            playerViewModel.change('state', function (stateChangeModel, state) {
                if (state === 'complete') {
                    this.toggle(false);
                }
            }, this);

            // Close button
            new _ui2.default(this.closeButton, { directSelect: true }).on('click tap enter', function () {
                this.nextUpSticky = false;
                this.toggle(false);
            }, this);
            // Tooltip
            new _ui2.default(this.tooltip).on('click tap', this.click, this);
        }
    }, {
        key: 'loadThumbnail',
        value: function loadThumbnail(url) {
            this.nextUpImage = new Image();
            this.nextUpImage.onload = function () {
                this.nextUpImage.onload = null;
            }.bind(this);
            this.nextUpImage.src = url;

            return {
                backgroundImage: 'url("' + url + '")'
            };
        }
    }, {
        key: 'click',
        value: function click() {
            this.reset();
            this._api.next();
        }
    }, {
        key: 'toggle',
        value: function toggle(show, reason) {
            if (!this.enabled) {
                return;
            }
            (0, _dom.toggleClass)(this.container, 'jw-nextup-sticky', !!this.nextUpSticky);
            if (this.shown !== show) {
                this.shown = show;
                (0, _dom.toggleClass)(this.container, 'jw-nextup-container-visible', show);
                (0, _dom.toggleClass)(this._playerElement, 'jw-flag-nextup', show);
                var nextUp = this._model.get('nextUp');
                if (show && nextUp) {
                    this.trigger('nextShown', {
                        mode: nextUp.mode,
                        ui: 'nextup',
                        itemsShown: [nextUp],
                        feedData: nextUp.feedData,
                        reason: reason
                    });
                }
            }
        }
    }, {
        key: 'setNextUpItem',
        value: function setNextUpItem(nextUpItem) {
            var _this = this;

            // Give the previous item time to complete its animation
            setTimeout(function () {
                // Set thumbnail
                _this.thumbnail = _this.content.querySelector('.jw-nextup-thumbnail');
                (0, _dom.toggleClass)(_this.content, 'jw-nextup-thumbnail-visible', !!nextUpItem.image);
                if (nextUpItem.image) {
                    var thumbnailStyle = _this.loadThumbnail(nextUpItem.image);
                    _helpers2.default.style(_this.thumbnail, thumbnailStyle);
                }

                // Set header
                _this.header = _this.content.querySelector('.jw-nextup-header');
                _this.header.innerText = _this.nextUpText;

                // Set title
                _this.title = _this.content.querySelector('.jw-nextup-title');
                var title = nextUpItem.title;
                _this.title.innerText = title ? _helpers2.default.createElement(title).textContent : '';

                // Set duration
                if (nextUpItem.duration) {
                    _this.duration = _this.content.querySelector('.jw-nextup-duration');
                    var duration = nextUpItem.duration;
                    _this.duration.innerText = duration ? _helpers2.default.createElement(duration).textContent : '';
                }
            }, 500);
        }
    }, {
        key: 'onNextUp',
        value: function onNextUp(model, nextUp) {
            this.reset();
            if (!nextUp) {
                return;
            }

            this.enabled = !!(nextUp.title || nextUp.image);

            if (this.enabled) {
                if (!nextUp.showNextUp) {
                    // The related plugin will countdown the nextUp item
                    this.nextUpSticky = false;
                    this.toggle(false);
                }
                this.setNextUpItem(nextUp);
            }
        }
    }, {
        key: 'onDuration',
        value: function onDuration(model, duration) {
            if (!duration) {
                return;
            }

            // Use nextupoffset if set or default to 10 seconds from the end of playback
            var offset = _helpers2.default.seconds(model.get('nextupoffset') || -10);
            if (offset < 0) {
                // Determine offset from the end. Duration may change.
                offset += duration;
            }

            this.offset = offset;
        }
    }, {
        key: 'onElapsed',
        value: function onElapsed(model, val) {
            var nextUpSticky = this.nextUpSticky;
            if (!this.enabled || nextUpSticky === false) {
                return;
            }
            // Show nextup during VOD streams if:
            // - in playlist mode but not playing an ad
            // - autoplaying in related mode and autoplaytimer is set to 0
            var showUntilEnd = val >= this.offset;
            if (showUntilEnd && nextUpSticky === undefined) {
                // show if nextUpSticky is unset
                this.nextUpSticky = showUntilEnd;
                this.toggle(showUntilEnd, 'time');
            } else if (!showUntilEnd && nextUpSticky) {
                // reset if there was a backward seek
                this.reset();
            }
        }
    }, {
        key: 'onStreamType',
        value: function onStreamType(model, streamType) {
            if (streamType !== 'VOD') {
                this.nextUpSticky = false;
                this.toggle(false);
            }
        }
    }, {
        key: 'element',
        value: function element() {
            return this.container;
        }
    }, {
        key: 'addContent',
        value: function addContent(elem) {
            if (this.content) {
                this.removeContent();
            }
            this.content = elem;
            this.container.appendChild(elem);
        }
    }, {
        key: 'removeContent',
        value: function removeContent() {
            if (this.content) {
                this.container.removeChild(this.content);
                this.content = null;
            }
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.nextUpSticky = undefined;
            this.toggle(false);
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this.off();
            this._model.off(null, null, this);
        }
    }]);

    return NextUpTooltip;
}();

exports.default = NextUpTooltip;

/***/ }),
/* 136 */
/*!**************************************************!*\
  !*** ./src/js/view/controls/templates/nextup.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var header = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var closeAriaLabel = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

    return '<div class="jw-nextup jw-background-color jw-reset">' + '<div class="jw-nextup-tooltip jw-reset">' + '<div class="jw-nextup-thumbnail jw-reset"></div>' + '<div class="jw-nextup-body jw-reset">' + ('<div class="jw-nextup-header jw-reset">' + header + '</div>') + ('<div class="jw-nextup-title jw-reset">' + title + '</div>') + ('<div class="jw-nextup-duration jw-reset">' + duration + '</div>') + '</div>' + '</div>' + ('<button type="button" class="jw-icon jw-nextup-close jw-reset" aria-label="' + closeAriaLabel + '"></button>') + '</div>';
};

/***/ }),
/* 137 */
/*!********************************************!*\
  !*** ./src/js/view/controls/rightclick.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rightclick = __webpack_require__(/*! view/controls/templates/rightclick */ 138);

var _rightclick2 = _interopRequireDefault(_rightclick);

var _icons = __webpack_require__(/*! view/controls/icons */ 74);

var _version = __webpack_require__(/*! version */ 17);

var _browser = __webpack_require__(/*! utils/browser */ 28);

var _dom = __webpack_require__(/*! utils/dom */ 23);

var _ui = __webpack_require__(/*! utils/ui */ 73);

var _ui2 = _interopRequireDefault(_ui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function createDomElement(html) {
    var element = (0, _dom.createElement)(html);
    var logoContainer = element.querySelector('.jw-rightclick-logo');
    if (logoContainer) {
        logoContainer.appendChild((0, _icons.cloneIcon)('jwplayer-logo'));
    }
    return element;
}

var RightClick = function () {
    function RightClick() {
        _classCallCheck(this, RightClick);
    }

    _createClass(RightClick, [{
        key: 'buildArray',
        value: function buildArray() {
            var semverParts = _version.version.split('+');
            var majorMinorPatchPre = semverParts[0];

            var menu = {
                items: [{
                    title: 'Powered by <span class="jw-reset">JW Player ' + majorMinorPatchPre + '</span>',
                    featured: true,
                    showLogo: true,
                    link: 'https://jwplayer.com/learn-more'
                }]
            };

            var provider = this.model.get('provider');
            if (provider && provider.name.indexOf('flash') >= 0) {
                var text = 'Flash Version ' + (0, _browser.flashVersion)();
                menu.items.push({
                    title: text,
                    link: 'http://www.adobe.com/software/flash/about/'
                });
            }

            return menu;
        }
    }, {
        key: 'rightClick',
        value: function rightClick(evt) {
            this.lazySetup();

            if (this.mouseOverContext) {
                // right click on menu item should execute it
                return false;
            }

            this.hideMenu();
            this.showMenu(evt);

            return false;
        }
    }, {
        key: 'getOffset',
        value: function getOffset(evt) {
            var playerBounds = (0, _dom.bounds)(this.playerElement);
            var x = evt.pageX - playerBounds.left;
            var y = evt.pageY - playerBounds.top;

            return { x: x, y: y };
        }
    }, {
        key: 'showMenu',
        value: function showMenu(evt) {
            var _this = this;

            // Offset relative to player element
            var off = this.getOffset(evt);

            this.el.style.left = off.x + 'px';
            this.el.style.top = off.y + 'px';

            (0, _dom.addClass)(this.playerElement, 'jw-flag-rightclick-open');
            (0, _dom.addClass)(this.el, 'jw-open');
            clearTimeout(this._menuTimeout);
            this._menuTimeout = setTimeout(function () {
                return _this.hideMenu();
            }, 3000);
            return false;
        }
    }, {
        key: 'hideMenu',
        value: function hideMenu() {
            this.elementUI.off('out', this.hideMenu, this);
            if (this.mouseOverContext) {
                // If mouse is over the menu, hide the menu when mouse moves out
                this.elementUI.on('out', this.hideMenu, this);
                return;
            }
            (0, _dom.removeClass)(this.playerElement, 'jw-flag-rightclick-open');
            (0, _dom.removeClass)(this.el, 'jw-open');
        }
    }, {
        key: 'lazySetup',
        value: function lazySetup() {
            var html = (0, _rightclick2.default)(this.buildArray());
            if (this.el) {
                if (this.html !== html) {
                    this.html = html;
                    var newEl = createDomElement(html);
                    (0, _dom.emptyElement)(this.el);
                    for (var i = newEl.childNodes.length; i--;) {
                        this.el.appendChild(newEl.firstChild);
                    }
                }
                return;
            }

            this.html = html;
            this.el = createDomElement(this.html);

            this.layer.appendChild(this.el);

            this.hideMenuHandler = this.hideMenu.bind(this);
            this.addOffListener(this.playerElement);
            this.addOffListener(document);

            // Track if the mouse is above the menu or not
            this.elementUI = new _ui2.default(this.el, { useHover: true }).on('over', function () {
                this.mouseOverContext = true;
            }, this).on('out', function () {
                this.mouseOverContext = false;
            }, this);
        }
    }, {
        key: 'setup',
        value: function setup(_model, _playerElement, layer) {
            this.playerElement = _playerElement;
            this.model = _model;
            this.mouseOverContext = false;
            this.layer = layer;

            // Defer the rest of setup until the first click
            _playerElement.oncontextmenu = this.rightClick.bind(this);
        }
    }, {
        key: 'addOffListener',
        value: function addOffListener(element) {
            element.addEventListener('mousedown', this.hideMenuHandler);
            element.addEventListener('touchstart', this.hideMenuHandler);
            element.addEventListener('pointerdown', this.hideMenuHandler);
        }
    }, {
        key: 'removeOffListener',
        value: function removeOffListener(element) {
            element.removeEventListener('mousedown', this.hideMenuHandler);
            element.removeEventListener('touchstart', this.hideMenuHandler);
            element.removeEventListener('pointerdown', this.hideMenuHandler);
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            clearTimeout(this._menuTimeout);
            if (this.el) {
                this.hideMenu();
                this.elementUI.off();
                this.removeOffListener(this.playerElement);
                this.removeOffListener(document);
                this.hideMenuHandler = null;
                this.el = null;
            }

            if (this.playerElement) {
                this.playerElement.oncontextmenu = null;
                this.playerElement = null;
            }

            if (this.model) {
                this.model = null;
            }
        }
    }]);

    return RightClick;
}();

exports.default = RightClick;

/***/ }),
/* 138 */
/*!******************************************************!*\
  !*** ./src/js/view/controls/templates/rightclick.js ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (menu) {
    var _menu$items = menu.items,
        items = _menu$items === undefined ? [] : _menu$items;

    var itemsHtml = items.map(function (item) {
        return rightClickItem(item.link, item.title, item.featured, item.showLogo);
    }).join('');

    return '<div class="jw-rightclick jw-reset">' + ('<ul class="jw-rightclick-list jw-reset">' + itemsHtml + '</ul>') + '</div>';
};

var rightClickItem = function rightClickItem() {
    var link = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var featured = arguments[2];
    var showLogo = arguments[3];

    var logo = showLogo ? '<span class="jw-rightclick-logo jw-reset"></span>' : '';
    return '<li class="jw-reset jw-rightclick-item ' + (featured ? 'jw-featured' : '') + '">' + ('<a href="' + link + '" class="jw-rightclick-link jw-reset" target="_blank">' + logo + title + '</a>') + '</li>';
};

/***/ }),
/* 139 */
/*!***********************************************!*\
  !*** ./src/js/view/controls/settings-menu.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createSettingsMenu = createSettingsMenu;
exports.setupSubmenuListeners = setupSubmenuListeners;

var _menu = __webpack_require__(/*! view/controls/components/settings/menu */ 140);

var _submenuFactory = __webpack_require__(/*! view/utils/submenu-factory */ 142);

function createSettingsMenu(controlbar, onVisibility) {
    var settingsButton = controlbar.elements.settingsButton;
    var onSubmenuAdded = function onSubmenuAdded() {
        settingsButton.show();
    };
    var onMenuEmpty = function onMenuEmpty() {
        settingsButton.hide();
    };

    var settingsMenu = (0, _menu.SettingsMenu)(onVisibility, onSubmenuAdded, onMenuEmpty);

    controlbar.on('settingsInteraction', function (submenuName, isDefault, event) {
        var submenu = settingsMenu.getSubmenu(submenuName);
        if (!submenu && !isDefault) {
            // Do nothing if activating an invalid submenu
            // An invalid submenu is one which does not exist
            // The default submenu may not exist, but this case has defined behavior
            return;
        }

        if (settingsMenu.visible) {
            if (isDefault || submenu.active) {
                // Close the submenu if clicking the default button (the gear) or if we're already at that submenu
                settingsMenu.close();
            } else {
                // Tab to the newly activated submenu
                settingsMenu.activateSubmenu(submenuName);
            }
        } else {
            if (submenu) {
                // Activate the selected submenu
                settingsMenu.activateSubmenu(submenuName);
            } else {
                // Activate the first submenu if clicking the default button
                settingsMenu.activateFirstSubmenu();
            }
            settingsMenu.open(isDefault, event);
        }
    });

    return settingsMenu;
}

function setupSubmenuListeners(settingsMenu, controlbar, viewModel, api) {
    var model = viewModel.player;

    var activateSubmenuItem = function activateSubmenuItem(submenuName, itemIndex) {
        var submenu = settingsMenu.getSubmenu(submenuName);
        if (submenu) {
            submenu.activateItem(itemIndex);
        }
    };

    var onAudiotracksChanged = function onAudiotracksChanged(changedModel, audioTracks) {
        if (!audioTracks || audioTracks.length <= 1) {
            (0, _submenuFactory.removeAudioTracksSubmenu)(settingsMenu);
            return;
        }

        (0, _submenuFactory.addAudioTracksSubmenu)(settingsMenu, audioTracks, function (index) {
            return api.setCurrentAudioTrack(index);
        }, model.get('currentAudioTrack'), model.get('localization').audioTracks);
    };

    var onQualitiesChanged = function onQualitiesChanged(changedModel, levels) {
        if (!levels || levels.length <= 1) {
            (0, _submenuFactory.removeQualitiesSubmenu)(settingsMenu);
            return;
        }

        (0, _submenuFactory.addQualitiesSubmenu)(settingsMenu, levels, function (index) {
            return api.setCurrentQuality(index);
        }, model.get('currentLevel'), model.get('localization').hd);
    };

    var onCaptionsChanged = function onCaptionsChanged(changedModel, captionsList) {
        var controlbarButton = controlbar.elements.captionsButton;
        if (!captionsList || captionsList.length <= 1) {
            (0, _submenuFactory.removeCaptionsSubmenu)(settingsMenu);
            controlbarButton.hide();
            return;
        }

        (0, _submenuFactory.addCaptionsSubmenu)(settingsMenu, captionsList, function (index) {
            return api.setCurrentCaptions(index);
        }, model.get('captionsIndex'), model.get('localization').cc);
        controlbar.toggleCaptionsButtonState(!!model.get('captionsIndex'));
        controlbarButton.show();
    };

    var setupPlaybackRatesMenu = function setupPlaybackRatesMenu(changedModel, playbackRates) {
        var showPlaybackRateControls = model.get('supportsPlaybackRate') && model.get('streamType') !== 'LIVE' && model.get('playbackRateControls') && playbackRates.length > 1;

        if (!showPlaybackRateControls) {
            (0, _submenuFactory.removePlaybackRatesSubmenu)(settingsMenu);
            return;
        }

        (0, _submenuFactory.addPlaybackRatesSubmenu)(settingsMenu, playbackRates, function (playbackRate) {
            return api.setPlaybackRate(playbackRate);
        }, model.get('playbackRate'), model.get('localization').playbackRates);
    };

    // Quality Levels
    model.change('levels', onQualitiesChanged, settingsMenu);
    model.on('change:currentLevel', function (changedModel, currentQuality) {
        activateSubmenuItem('quality', currentQuality);
    }, settingsMenu);

    // Audio Tracks
    model.change('audioTracks', onAudiotracksChanged, settingsMenu);
    model.on('change:currentAudioTrack', function (changedModel, currentAudioTrack) {
        activateSubmenuItem('audioTracks', currentAudioTrack);
    }, settingsMenu);

    // Captions
    model.change('captionsList', onCaptionsChanged, settingsMenu);
    model.change('captionsIndex', function (changedModel, index) {
        var captionsSubmenu = settingsMenu.getSubmenu('captions');
        if (captionsSubmenu) {
            captionsSubmenu.activateItem(index);
            controlbar.toggleCaptionsButtonState(!!index);
        }
    }, settingsMenu);

    // Playback Rates
    model.change('playbackRates', setupPlaybackRatesMenu, settingsMenu);
    model.change('playbackRate', function (changedModel, playbackRate) {
        var rates = model.get('playbackRates');
        if (rates) {
            activateSubmenuItem('playbackRates', rates.indexOf(playbackRate));
        }
    }, settingsMenu);

    // Remove the audio tracks, qualities, and playback rates submenus when casting
    model.on('change:castActive', function (changedModel, active, previousState) {
        if (active === previousState) {
            return;
        }

        if (active) {
            (0, _submenuFactory.removeAudioTracksSubmenu)(settingsMenu);
            (0, _submenuFactory.removeQualitiesSubmenu)(settingsMenu);
            (0, _submenuFactory.removePlaybackRatesSubmenu)(settingsMenu);
        } else {
            onAudiotracksChanged(model, model.get('audioTracks'));
            onQualitiesChanged(model, model.get('levels'));
            setupPlaybackRatesMenu(model, model.get('playbackRates'));
        }
    }, settingsMenu);

    model.on('change:streamType', function () {
        setupPlaybackRatesMenu(model, model.get('playbackRates'));
    }, settingsMenu);
}

/***/ }),
/* 140 */
/*!**********************************************************!*\
  !*** ./src/js/view/controls/components/settings/menu.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SettingsMenu = SettingsMenu;

var _icons = __webpack_require__(/*! view/controls/icons */ 74);

var _button = __webpack_require__(/*! view/controls/components/button */ 75);

var _button2 = _interopRequireDefault(_button);

var _menu = __webpack_require__(/*! view/controls/templates/settings/menu */ 141);

var _menu2 = _interopRequireDefault(_menu);

var _dom = __webpack_require__(/*! utils/dom */ 23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SettingsMenu(onVisibility, onSubmenuAdded, onMenuEmpty) {
    var documentClickHandler = function documentClickHandler(e) {
        // Close if anything other than the settings menu has been clicked
        // Let the display (jw-video) handles closing itself (display clicks do not pause if the menu is open)
        // Don't close if the user has dismissed the nextup tooltip via it's close button (the tooltip overlays the menu)
        var targetClass = e.target.className;
        if (!targetClass.match(/jw-(settings|video|nextup-close|sharing-link)/)) {
            instance.close();
        }
    };

    var visible = void 0;
    var active = null;
    var submenus = {};

    var settingsMenuElement = (0, _dom.createElement)((0, _menu2.default)());

    var closeOnEnter = function closeOnEnter(evt) {
        if (evt && evt.keyCode === 27) {
            instance.close(evt);
            evt.stopPropagation();
        }
    };
    settingsMenuElement.addEventListener('keydown', closeOnEnter);

    var closeButton = (0, _button2.default)('jw-settings-close', function () {
        instance.close();
    }, 'Close Settings', [(0, _icons.cloneIcon)('close')]);

    var closeOnButton = function closeOnButton(evt) {
        // Close settings menu when enter is pressed on the close button
        // or when tab key is pressed since it is the last element in topbar
        if (evt.keyCode === 13 || evt.keyCode === 9 && !evt.shiftKey) {
            instance.close(evt);
        }
    };
    closeButton.show();
    closeButton.element().addEventListener('keydown', closeOnButton);

    var topbarElement = settingsMenuElement.querySelector('.jw-settings-topbar');
    topbarElement.appendChild(closeButton.element());

    var instance = {
        open: function open(isDefault, event) {
            visible = true;
            onVisibility(visible, event);
            settingsMenuElement.setAttribute('aria-expanded', 'true');
            addDocumentListeners(documentClickHandler);

            if (isDefault) {
                if (event && event.type === 'enter') {
                    active.categoryButtonElement.focus();
                }
            } else {
                active.element().firstChild.focus();
            }
        },
        close: function close(event) {
            visible = false;
            onVisibility(visible, event);

            active = null;
            deactivateAllSubmenus(submenus);

            settingsMenuElement.setAttribute('aria-expanded', 'false');
            removeDocumentListeners(documentClickHandler);
        },
        toggle: function toggle() {
            if (visible) {
                this.close();
            } else {
                this.open();
            }
        },
        addSubmenu: function addSubmenu(submenu) {
            if (!submenu) {
                return;
            }
            var name = submenu.name;
            submenus[name] = submenu;

            if (submenu.isDefault) {
                (0, _dom.prependChild)(topbarElement, submenu.categoryButtonElement);
                submenu.categoryButtonElement.addEventListener('keydown', function (evt) {
                    // close settings menu if you shift-tab on the first category button element
                    if (evt.keyCode === 9 && evt.shiftKey) {
                        instance.close(evt);
                    }
                });
            } else {
                // sharing should always be the last submenu
                var sharingButton = topbarElement.querySelector('.jw-submenu-sharing');
                topbarElement.insertBefore(submenu.categoryButtonElement, sharingButton || closeButton.element());
            }

            settingsMenuElement.appendChild(submenu.element());

            onSubmenuAdded();
        },
        getSubmenu: function getSubmenu(name) {
            return submenus[name];
        },
        removeSubmenu: function removeSubmenu(name) {
            var submenu = submenus[name];
            if (!submenu || submenu.element().parentNode !== settingsMenuElement) {
                return;
            }
            settingsMenuElement.removeChild(submenu.element());
            topbarElement.removeChild(submenu.categoryButtonElement);
            submenu.destroy();
            delete submenus[name];

            if (!Object.keys(submenus).length) {
                this.close();
                onMenuEmpty();
            }
        },
        activateSubmenu: function activateSubmenu(name) {
            var submenu = submenus[name];
            if (!submenu || submenu.active) {
                return;
            }

            deactivateAllSubmenus(submenus);
            submenu.activate();
            active = submenu;

            if (!submenu.isDefault) {
                active.element().firstChild.focus();
            }
        },
        activateFirstSubmenu: function activateFirstSubmenu() {
            var firstSubmenuName = Object.keys(submenus)[0];
            this.activateSubmenu(firstSubmenuName);
        },
        element: function element() {
            return settingsMenuElement;
        },
        destroy: function destroy() {
            this.close();
            settingsMenuElement.removeEventListener('keydown', closeOnEnter);
            closeButton.element().removeEventListener('keydown', closeOnButton);
            (0, _dom.emptyElement)(settingsMenuElement);
        }
    };

    Object.defineProperties(instance, {
        visible: {
            enumerable: true,
            get: function get() {
                return visible;
            }
        }
    });

    return instance;
}

var addDocumentListeners = function addDocumentListeners(handler) {
    document.addEventListener('mouseup', handler);
    document.addEventListener('pointerup', handler);
    document.addEventListener('touchstart', handler);
};

var removeDocumentListeners = function removeDocumentListeners(handler) {
    document.removeEventListener('mouseup', handler);
    document.removeEventListener('pointerup', handler);
    document.removeEventListener('touchstart', handler);
};

var deactivateAllSubmenus = function deactivateAllSubmenus(submenus) {
    Object.keys(submenus).forEach(function (name) {
        submenus[name].deactivate();
    });
};

/***/ }),
/* 141 */
/*!*********************************************************!*\
  !*** ./src/js/view/controls/templates/settings/menu.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    return "<div class=\"jw-reset jw-settings-menu\" role=\"menu\" aria-expanded=\"false\">" + "<div class=\"jw-reset jw-settings-topbar\" role=\"menubar\">" + "</div>" + "</div>";
};

/***/ }),
/* 142 */
/*!**********************************************!*\
  !*** ./src/js/view/utils/submenu-factory.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.makeSubmenu = undefined;
exports.addCaptionsSubmenu = addCaptionsSubmenu;
exports.removeCaptionsSubmenu = removeCaptionsSubmenu;
exports.addAudioTracksSubmenu = addAudioTracksSubmenu;
exports.removeAudioTracksSubmenu = removeAudioTracksSubmenu;
exports.addQualitiesSubmenu = addQualitiesSubmenu;
exports.removeQualitiesSubmenu = removeQualitiesSubmenu;
exports.addPlaybackRatesSubmenu = addPlaybackRatesSubmenu;
exports.removePlaybackRatesSubmenu = removePlaybackRatesSubmenu;

var _icons = __webpack_require__(/*! view/controls/icons */ 74);

var _submenu = __webpack_require__(/*! view/controls/components/settings/submenu */ 143);

var _submenu2 = _interopRequireDefault(_submenu);

var _contentItem = __webpack_require__(/*! view/controls/components/settings/content-item */ 145);

var _contentItem2 = _interopRequireDefault(_contentItem);

var _button = __webpack_require__(/*! view/controls/components/button */ 75);

var _button2 = _interopRequireDefault(_button);

var _simpleTooltip = __webpack_require__(/*! view/controls/components/simple-tooltip */ 87);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AUDIO_TRACKS_SUBMENU = 'audioTracks';
var CAPTIONS_SUBMENU = 'captions';
var QUALITIES_SUBMENU = 'quality';
var PLAYBACK_RATE_SUBMENU = 'playbackRates';
var DEFAULT_SUBMENU = QUALITIES_SUBMENU;

var makeSubmenu = exports.makeSubmenu = function makeSubmenu(settingsMenu, name, contentItems, icon, tooltipText) {
    var submenu = settingsMenu.getSubmenu(name);
    if (submenu) {
        submenu.replaceContent(contentItems);
    } else {
        var categoryButton = (0, _button2.default)('jw-settings-' + name, function () {
            settingsMenu.activateSubmenu(name);
            submenu.element().children[0].focus();
        }, name, [icon]);
        var categoryButtonElement = categoryButton.element();
        categoryButtonElement.setAttribute('role', 'menuitemradio');
        categoryButtonElement.setAttribute('aria-checked', 'false');

        // Qualities submenu is the default submenu
        submenu = (0, _submenu2.default)(name, categoryButton, name === DEFAULT_SUBMENU);
        submenu.addContent(contentItems);
        if (!('ontouchstart' in window)) {
            (0, _simpleTooltip.SimpleTooltip)(categoryButtonElement, name, tooltipText);
        }
        settingsMenu.addSubmenu(submenu);
    }

    return submenu;
};

function addCaptionsSubmenu(settingsMenu, captionsList, action, initialSelectionIndex, tooltipText) {
    var captionsContentItems = captionsList.map(function (track, index) {
        var contentItemElement = (0, _contentItem2.default)(track.id, track.label, function (evt) {
            action(index);
            settingsMenu.close(evt);
        });

        return contentItemElement;
    });

    var captionsSubmenu = makeSubmenu(settingsMenu, CAPTIONS_SUBMENU, captionsContentItems, (0, _icons.cloneIcon)('cc-off'), tooltipText);
    captionsSubmenu.activateItem(initialSelectionIndex);
}

function removeCaptionsSubmenu(settingsMenu) {
    settingsMenu.removeSubmenu(CAPTIONS_SUBMENU);
}

function addAudioTracksSubmenu(settingsMenu, audioTracksList, action, initialSelectionIndex, tooltipText) {
    var audioTracksItems = audioTracksList.map(function (track, index) {
        return (0, _contentItem2.default)(track.name, track.name, function (evt) {
            action(index);
            settingsMenu.close(evt);
        });
    });

    var audioTracksSubmenu = makeSubmenu(settingsMenu, AUDIO_TRACKS_SUBMENU, audioTracksItems, (0, _icons.cloneIcon)('audio-tracks'), tooltipText);
    audioTracksSubmenu.activateItem(initialSelectionIndex);
}

function removeAudioTracksSubmenu(settingsMenu) {
    settingsMenu.removeSubmenu(AUDIO_TRACKS_SUBMENU);
}

function addQualitiesSubmenu(settingsMenu, qualitiesList, action, initialSelectionIndex, tooltipText) {
    var qualitiesItems = qualitiesList.map(function (track, index) {
        return (0, _contentItem2.default)(track.label, track.label, function (evt) {
            action(index);
            settingsMenu.close(evt);
        });
    });

    var qualitiesSubmenu = makeSubmenu(settingsMenu, QUALITIES_SUBMENU, qualitiesItems, (0, _icons.cloneIcon)('quality-100'), tooltipText);
    qualitiesSubmenu.activateItem(initialSelectionIndex);
}

function removeQualitiesSubmenu(settingsMenu) {
    settingsMenu.removeSubmenu(QUALITIES_SUBMENU);
}

function addPlaybackRatesSubmenu(settingsMenu, rateList, action, initialSelectionIndex, tooltipText) {
    var rateItems = rateList.map(function (playbackRate) {
        return (0, _contentItem2.default)(playbackRate, playbackRate + 'x', function (evt) {
            action(playbackRate);
            settingsMenu.close(evt);
        });
    });

    var playbackRatesSubmenu = makeSubmenu(settingsMenu, PLAYBACK_RATE_SUBMENU, rateItems, (0, _icons.cloneIcon)('playback-rate'), tooltipText);
    playbackRatesSubmenu.activateItem(initialSelectionIndex);
}

function removePlaybackRatesSubmenu(settingsMenu) {
    settingsMenu.removeSubmenu(PLAYBACK_RATE_SUBMENU);
}

/***/ }),
/* 143 */
/*!*************************************************************!*\
  !*** ./src/js/view/controls/components/settings/submenu.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = SettingsSubmenu;

var _submenu = __webpack_require__(/*! view/controls/templates/settings/submenu */ 144);

var _submenu2 = _interopRequireDefault(_submenu);

var _dom = __webpack_require__(/*! utils/dom */ 23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SettingsSubmenu(name, categoryButton, isDefault) {

    var active = void 0;
    var contentItems = [];
    var submenuElement = (0, _dom.createElement)((0, _submenu2.default)(name));
    var categoryButtonElement = categoryButton.element();

    categoryButtonElement.setAttribute('name', name);
    categoryButtonElement.className += ' jw-submenu-' + name;
    categoryButton.show();

    // return focus to topbar element when tabbing after the first or last item
    var onFocus = function onFocus(evt) {
        var focus = categoryButtonElement && evt.keyCode === 9 && (evt.srcElement === contentItems[0].element() && evt.shiftKey || evt.srcElement === contentItems[contentItems.length - 1].element() && !evt.shiftKey);

        if (focus) {
            categoryButtonElement.focus();
        }
    };

    var instance = {
        addContent: function addContent(items) {
            if (!items) {
                return;
            }
            items.forEach(function (item) {
                submenuElement.appendChild(item.element());
            });

            contentItems = items;

            contentItems[0].element().addEventListener('keydown', onFocus);
            contentItems[contentItems.length - 1].element().addEventListener('keydown', onFocus);
        },
        replaceContent: function replaceContent(items) {
            instance.removeContent();
            this.addContent(items);
        },
        removeContent: function removeContent() {
            contentItems[0].element().removeEventListener('keydown', onFocus);
            contentItems[contentItems.length - 1].element().removeEventListener('keydown', onFocus);

            (0, _dom.emptyElement)(submenuElement);
            contentItems = [];
        },
        activate: function activate() {
            (0, _dom.toggleClass)(submenuElement, 'jw-settings-submenu-active', true);
            submenuElement.setAttribute('aria-expanded', 'true');
            categoryButtonElement.setAttribute('aria-checked', 'true');
            active = true;
        },
        deactivate: function deactivate() {
            (0, _dom.toggleClass)(submenuElement, 'jw-settings-submenu-active', false);
            submenuElement.setAttribute('aria-expanded', 'false');
            categoryButtonElement.setAttribute('aria-checked', 'false');
            active = false;
        },
        activateItem: function activateItem() {
            var itemOrdinal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            var item = contentItems[itemOrdinal];
            if (!item || item.active) {
                return;
            }
            deactivateAllItems(contentItems);
            item.activate();
        },
        element: function element() {
            return submenuElement;
        },
        destroy: function destroy() {
            if (!contentItems) {
                return;
            }
            contentItems.forEach(function (item) {
                item.destroy();
            });
            this.removeContent();
        }
    };

    Object.defineProperties(instance, {
        name: {
            enumerable: true,
            get: function get() {
                return name;
            }
        },
        active: {
            enumerable: true,
            get: function get() {
                return active;
            }
        },
        categoryButtonElement: {
            enumerable: true,
            get: function get() {
                return categoryButtonElement;
            }
        },
        isDefault: {
            enumerable: true,
            get: function get() {
                return isDefault;
            }
        }
    });

    return instance;
}

var deactivateAllItems = function deactivateAllItems(items) {
    items.forEach(function (item) {
        item.deactivate();
    });
};

/***/ }),
/* 144 */
/*!************************************************************!*\
  !*** ./src/js/view/controls/templates/settings/submenu.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    return "<div class=\"jw-reset jw-settings-submenu\" role=\"menu\" aria-expanded=\"false\">" + "</div>";
};

/***/ }),
/* 145 */
/*!******************************************************************!*\
  !*** ./src/js/view/controls/components/settings/content-item.js ***!
  \******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = SettingsContentItem;

var _contentItem = __webpack_require__(/*! view/controls/templates/settings/content-item */ 146);

var _contentItem2 = _interopRequireDefault(_contentItem);

var _dom = __webpack_require__(/*! utils/dom */ 23);

var _ui = __webpack_require__(/*! utils/ui */ 73);

var _ui2 = _interopRequireDefault(_ui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SettingsContentItem(name, content, action) {
    var active = void 0;
    var contentItemElement = (0, _dom.createElement)((0, _contentItem2.default)(content));
    var contentItemUI = new _ui2.default(contentItemElement);
    contentItemUI.on('click tap enter', function (evt) {
        action(evt);
    });

    var instance = {
        activate: function activate() {
            (0, _dom.toggleClass)(contentItemElement, 'jw-settings-item-active', true);
            contentItemElement.setAttribute('aria-checked', 'true');
            active = true;
        },
        deactivate: function deactivate() {
            (0, _dom.toggleClass)(contentItemElement, 'jw-settings-item-active', false);
            contentItemElement.setAttribute('aria-checked', 'false');
            active = false;
        },
        element: function element() {
            return contentItemElement;
        },
        uiElement: function uiElement() {
            return contentItemUI;
        },
        destroy: function destroy() {
            this.deactivate();
            contentItemUI.destroy();
        }
    };

    Object.defineProperty(instance, 'active', {
        enumerable: true,
        get: function get() {
            return active;
        }
    });

    return instance;
}

/***/ }),
/* 146 */
/*!*****************************************************************!*\
  !*** ./src/js/view/controls/templates/settings/content-item.js ***!
  \*****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (content) {
    return "<button type=\"button\" class=\"jw-reset jw-settings-content-item\" role=\"menuitemradio\" aria-checked=\"false\">" + ("" + content) + "</button>";
};

/***/ }),
/* 147 */
/*!*******************************!*\
  !*** ./src/css/controls.less ***!
  \*******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/postcss-loader/lib!../../node_modules/less-loader/dist/cjs.js??ref--0-3!./controls.less */ 148);
if(typeof content === 'string') content = [['all-players', content, '']];
// add the styles to the DOM
__webpack_require__(/*! ../../node_modules/simple-style-loader/addStyles.js */ 33).style(content,'all-players');
if(content.locals) module.exports = content.locals;

/***/ }),
/* 148 */
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/lib!./node_modules/less-loader/dist/cjs.js?{"compress":true,"strictMath":true,"noIeCompat":true}!./src/css/controls.less ***!
  \****************************************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ 83)(undefined);
// imports


// module
exports.push([module.i, ".jw-overlays,.jw-controls,.jw-controls-backdrop,.jw-settings-submenu{height:100%;width:100%}.jw-settings-menu .jw-icon::after,.jw-icon-settings::after,.jw-icon-volume::after,.jw-settings-menu .jw-icon.jw-button-color::after{position:absolute;right:0}.jw-overlays,.jw-controls,.jw-controls-backdrop{top:0;position:absolute;left:0}.jw-settings-menu .jw-icon::after,.jw-icon-settings::after,.jw-icon-volume::after,.jw-settings-menu .jw-icon.jw-button-color::after{position:absolute;bottom:0;left:0}.jw-nextup-close{position:absolute;top:0;right:0}.jw-overlays,.jw-controls{position:absolute;bottom:0;right:0}.jw-settings-menu .jw-icon::after,.jw-icon-settings::after,.jw-icon-volume::after,.jw-time-tip::after,.jw-settings-menu .jw-icon.jw-button-color::after,.jw-text-live::before,.jw-controlbar .jw-tooltip::after,.jw-settings-menu .jw-tooltip::after{content:\"\";display:block}.jw-svg-icon{height:24px;width:24px;fill:currentColor;pointer-events:none}.jw-icon{height:44px;width:44px;background-color:transparent}.jw-icon-airplay .jw-svg-icon-airplay-off{display:none}.jw-off.jw-icon-airplay .jw-svg-icon-airplay-off{display:block}.jw-icon-airplay .jw-svg-icon-airplay-on{display:block}.jw-off.jw-icon-airplay .jw-svg-icon-airplay-on{display:none}.jw-icon-cc .jw-svg-icon-cc-off{display:none}.jw-off.jw-icon-cc .jw-svg-icon-cc-off{display:block}.jw-icon-cc .jw-svg-icon-cc-on{display:block}.jw-off.jw-icon-cc .jw-svg-icon-cc-on{display:none}.jw-icon-fullscreen .jw-svg-icon-fullscreen-off{display:none}.jw-off.jw-icon-fullscreen .jw-svg-icon-fullscreen-off{display:block}.jw-icon-fullscreen .jw-svg-icon-fullscreen-on{display:block}.jw-off.jw-icon-fullscreen .jw-svg-icon-fullscreen-on{display:none}.jw-icon-volume .jw-svg-icon-volume-0{display:none}.jw-off.jw-icon-volume .jw-svg-icon-volume-0{display:block}.jw-icon-volume .jw-svg-icon-volume-100{display:none}.jw-full.jw-icon-volume .jw-svg-icon-volume-100{display:block}.jw-icon-volume .jw-svg-icon-volume-50{display:block}.jw-off.jw-icon-volume .jw-svg-icon-volume-50,.jw-full.jw-icon-volume .jw-svg-icon-volume-50{display:none}.jw-settings-menu .jw-icon::after,.jw-icon-settings::after,.jw-icon-volume::after{height:100%;width:24px;box-shadow:inset 0 -3px 0 -1px currentColor;margin:auto;opacity:0;transition:opacity 150ms cubic-bezier(0, -0.25, .25, 1)}.jw-settings-menu .jw-icon[aria-checked=\"true\"]::after,.jw-settings-open .jw-icon-settings::after,.jw-icon-volume.jw-open::after{opacity:1}.jw-overlays,.jw-controls{pointer-events:none}.jw-controls-backdrop{display:block;background:linear-gradient(to bottom, transparent, rgba(0,0,0,0.4) 77%, rgba(0,0,0,0.4) 100%) 100% 100% / 100% 240px no-repeat transparent;transition:opacity 250ms cubic-bezier(0, -0.25, .25, 1),background-size 250ms cubic-bezier(0, -0.25, .25, 1);pointer-events:none}.jw-overlays{cursor:auto}.jw-controls{overflow:hidden}.jw-flag-small-player .jw-controls{text-align:center}.jw-text{height:1em;font-family:Arial,Helvetica,sans-serif;font-size:.75em;font-style:normal;font-weight:normal;color:#fff;text-align:center;font-variant:normal;font-stretch:normal}.jw-controlbar,.jw-skip,.jw-display-icon-container,.jw-display-icon-container .jw-icon,.jw-nextup-container,.jw-autostart-mute,.jw-overlays .jw-plugin{pointer-events:all}.jwplayer .jw-display-icon-container,.jw-error .jw-display-icon-container{width:auto;height:auto;box-sizing:content-box}.jw-display{display:table;height:100%;padding:57px 0;position:relative;width:100%}.jw-flag-dragging .jw-display{display:none}.jw-state-idle:not(.jw-flag-cast-available) .jw-display{padding:0}.jw-display-container{display:table-cell;height:100%;text-align:center;vertical-align:middle}.jw-display-controls{display:inline-block}.jwplayer .jw-display-icon-container{float:left}.jw-display-icon-container{display:inline-block}.jw-display-icon-container .jw-icon{height:75px;width:75px;cursor:pointer;display:flex;justify-content:center;align-items:center}.jw-display-icon-container .jw-icon .jw-svg-icon{height:33px;width:33px;padding:0;position:relative}.jw-display-icon-container .jw-icon .jw-svg-icon-rewind{padding:.2em .05em}.jw-breakpoint-0 .jw-display-icon-next,.jw-breakpoint-0 .jw-display-icon-rewind{display:none}.jw-breakpoint-0 .jw-display .jw-icon,.jw-breakpoint-0 .jw-display .jw-svg-icon{width:44px;height:44px;line-height:44px}.jw-breakpoint-0 .jw-display .jw-icon:before,.jw-breakpoint-0 .jw-display .jw-svg-icon:before{width:22px;height:22px}.jw-breakpoint-1 .jw-display-icon-container{padding:5.5px;margin:0 22px}.jw-breakpoint-1 .jw-display .jw-icon,.jw-breakpoint-1 .jw-display .jw-svg-icon{width:44px;height:44px;line-height:44px}.jw-breakpoint-1 .jw-display .jw-icon:before,.jw-breakpoint-1 .jw-display .jw-svg-icon:before{width:22px;height:22px}.jw-breakpoint-1 .jw-display .jw-icon.jw-icon-rewind:before{width:33px;height:33px}.jw-breakpoint-2 .jw-display .jw-icon,.jw-breakpoint-3 .jw-display .jw-icon,.jw-breakpoint-2 .jw-display .jw-svg-icon,.jw-breakpoint-3 .jw-display .jw-svg-icon{width:77px;height:77px;line-height:77px}.jw-breakpoint-2 .jw-display .jw-icon:before,.jw-breakpoint-3 .jw-display .jw-icon:before,.jw-breakpoint-2 .jw-display .jw-svg-icon:before,.jw-breakpoint-3 .jw-display .jw-svg-icon:before{width:38.5px;height:38.5px}.jw-breakpoint-4 .jw-display .jw-icon,.jw-breakpoint-5 .jw-display .jw-icon,.jw-breakpoint-6 .jw-display .jw-icon,.jw-breakpoint-7 .jw-display .jw-icon,.jw-breakpoint-4 .jw-display .jw-svg-icon,.jw-breakpoint-5 .jw-display .jw-svg-icon,.jw-breakpoint-6 .jw-display .jw-svg-icon,.jw-breakpoint-7 .jw-display .jw-svg-icon{width:88px;height:88px;line-height:88px}.jw-breakpoint-4 .jw-display .jw-icon:before,.jw-breakpoint-5 .jw-display .jw-icon:before,.jw-breakpoint-6 .jw-display .jw-icon:before,.jw-breakpoint-7 .jw-display .jw-icon:before,.jw-breakpoint-4 .jw-display .jw-svg-icon:before,.jw-breakpoint-5 .jw-display .jw-svg-icon:before,.jw-breakpoint-6 .jw-display .jw-svg-icon:before,.jw-breakpoint-7 .jw-display .jw-svg-icon:before{width:44px;height:44px}.jw-controlbar{display:flex;flex-flow:row wrap;align-items:center;justify-content:center;position:absolute;left:0;bottom:0;width:100%;border:none;border-radius:0;background-size:auto;box-shadow:none;max-height:72px;transition:250ms cubic-bezier(0, -0.25, .25, 1);transition-property:opacity,visibility;transition-delay:0s}.jw-controlbar .jw-button-image{background:no-repeat 50% 50%;background-size:contain;max-height:24px}.jw-controlbar .jw-spacer{flex:1 1 auto;align-self:stretch}.jw-controlbar .jw-icon.jw-button-color:hover{color:#fff}.jw-button-container{display:flex;flex-flow:row nowrap;flex:1 1 auto;align-items:center;justify-content:center;width:100%;padding:0 12px}.jw-slider-horizontal{background-color:transparent}.jw-icon-inline{position:relative}.jw-icon-inline,.jw-icon-tooltip{height:44px;width:44px;align-items:center;display:flex;justify-content:center}.jw-icon-inline:not(.jw-text),.jw-icon-tooltip,.jw-slider-horizontal{cursor:pointer}.jw-text-elapsed,.jw-text-duration{justify-content:flex-start;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.jw-icon-tooltip{position:relative}.jw-knob:hover,.jw-icon-inline:hover,.jw-icon-tooltip:hover,.jw-icon-display:hover,.jw-option:before:hover{color:#fff}.jw-time-tip,.jw-controlbar .jw-tooltip,.jw-settings-menu .jw-tooltip{pointer-events:none}.jw-icon-cast{display:none;margin:0;padding:0}.jw-icon-cast button{background-color:transparent;border:none;padding:0;width:24px;height:24px;cursor:pointer}.jw-icon-inline.jw-icon-volume{display:none}.jwplayer .jw-text-countdown{display:none}.jw-flag-small-player .jw-display{padding-top:44px;padding-bottom:66px}.jw-flag-small-player:not(.jw-flag-audio-player):not(.jw-flag-ads) .jw-controlbar .jw-button-container>.jw-icon-rewind,.jw-flag-small-player:not(.jw-flag-audio-player):not(.jw-flag-ads) .jw-controlbar .jw-button-container>.jw-icon-next,.jw-flag-small-player:not(.jw-flag-audio-player):not(.jw-flag-ads) .jw-controlbar .jw-button-container>.jw-icon-playback{display:none}.jw-flag-ads-vpaid:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controlbar,.jw-flag-user-inactive.jw-state-playing:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controlbar,.jw-flag-user-inactive.jw-state-buffering:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controlbar{visibility:hidden;pointer-events:none;opacity:0;transition-delay:0s,250ms}.jw-flag-ads-vpaid:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controls-backdrop,.jw-flag-user-inactive.jw-state-playing:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controls-backdrop,.jw-flag-user-inactive.jw-state-buffering:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controls-backdrop{opacity:0}.jwplayer:not(.jw-flag-ads):not(.jw-flag-live).jw-breakpoint-0 .jw-text-countdown{display:flex}.jwplayer:not(.jw-flag-ads):not(.jw-flag-live).jw-breakpoint-0 .jw-text-elapsed,.jwplayer:not(.jw-flag-ads):not(.jw-flag-live).jw-breakpoint-0 .jw-text-duration{display:none}.jwplayer:not(.jw-breakpoint-0) .jw-text-duration:before{content:\"/\";padding-right:1ch;padding-left:1ch}.jwplayer:not(.jw-flag-user-inactive) .jw-controlbar{will-change:transform}.jwplayer:not(.jw-flag-user-inactive) .jw-controlbar .jw-text{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.jw-slider-container{display:flex;align-items:center;position:relative;touch-action:none}.jw-rail,.jw-buffer,.jw-progress{position:absolute;cursor:pointer}.jw-progress{background-color:#f2f2f2}.jw-rail{background-color:rgba(255,255,255,0.3)}.jw-buffer{background-color:rgba(255,255,255,0.3)}.jw-knob{height:13px;width:13px;background-color:#fff;border-radius:50%;box-shadow:0 0 10px rgba(0,0,0,0.4);opacity:1;pointer-events:none;position:absolute;-webkit-transform:translate(-50%, -50%) scale(0);transform:translate(-50%, -50%) scale(0);transition:150ms cubic-bezier(0, -0.25, .25, 1);transition-property:opacity,-webkit-transform;transition-property:opacity,transform;transition-property:opacity,transform,-webkit-transform}.jw-flag-dragging .jw-slider-time .jw-knob,.jw-icon-volume:active .jw-slider-volume .jw-knob{box-shadow:0 0 26px rgba(0,0,0,0.2),0 0 10px rgba(0,0,0,0.4),0 0 0 6px rgba(255,255,255,0.2)}.jw-slider-horizontal,.jw-slider-vertical{display:flex}.jw-slider-horizontal .jw-slider-container{height:5px;width:100%}.jw-slider-horizontal .jw-rail,.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-progress,.jw-slider-horizontal .jw-cue,.jw-slider-horizontal .jw-knob{top:50%}.jw-slider-horizontal .jw-rail,.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-progress,.jw-slider-horizontal .jw-cue{-webkit-transform:translate(0, -50%);transform:translate(0, -50%)}.jw-slider-horizontal .jw-rail,.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-progress{height:5px}.jw-slider-horizontal .jw-rail{width:100%}.jw-slider-vertical{align-items:center;flex-direction:column}.jw-slider-vertical .jw-slider-container{height:88px;width:5px}.jw-slider-vertical .jw-rail,.jw-slider-vertical .jw-buffer,.jw-slider-vertical .jw-progress,.jw-slider-vertical .jw-knob{left:50%}.jw-slider-vertical .jw-rail,.jw-slider-vertical .jw-buffer,.jw-slider-vertical .jw-progress{height:100%;width:5px;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform:translate(-50%, 0);transform:translate(-50%, 0);transition:-webkit-transform 150ms ease-in-out;transition:transform 150ms ease-in-out;transition:transform 150ms ease-in-out, -webkit-transform 150ms ease-in-out;bottom:0}.jw-slider-vertical .jw-knob{-webkit-transform:translate(-50%, 50%);transform:translate(-50%, 50%)}.jw-slider-time{height:17px;width:100%;align-items:center;background:transparent none;padding:0 12px;z-index:1}.jw-slider-time .jw-rail,.jw-slider-time .jw-buffer,.jw-slider-time .jw-progress,.jw-slider-time .jw-cue{-webkit-backface-visibility:hidden;backface-visibility:hidden;height:100%;-webkit-transform:translate(0, -50%) scale(1, .6);transform:translate(0, -50%) scale(1, .6);transition:-webkit-transform 150ms ease-in-out;transition:transform 150ms ease-in-out;transition:transform 150ms ease-in-out, -webkit-transform 150ms ease-in-out}.jw-slider-time .jw-cue{background-color:rgba(33,33,33,0.8);cursor:pointer;position:absolute;width:6px}.jw-slider-time:hover .jw-rail,.jw-flag-dragging .jw-slider-time .jw-rail,.jw-flag-touch .jw-slider-time .jw-rail,.jw-slider-time:hover .jw-buffer,.jw-flag-dragging .jw-slider-time .jw-buffer,.jw-flag-touch .jw-slider-time .jw-buffer,.jw-slider-time:hover .jw-progress,.jw-flag-dragging .jw-slider-time .jw-progress,.jw-flag-touch .jw-slider-time .jw-progress,.jw-slider-time:hover .jw-cue,.jw-flag-dragging .jw-slider-time .jw-cue,.jw-flag-touch .jw-slider-time .jw-cue{-webkit-transform:translate(0, -50%) scale(1, 1);transform:translate(0, -50%) scale(1, 1)}.jw-slider-time:hover .jw-knob,.jw-flag-dragging .jw-slider-time .jw-knob,.jw-flag-touch .jw-slider-time .jw-knob{-webkit-transform:translate(-50%, -50%) scale(1);transform:translate(-50%, -50%) scale(1)}.jw-slider-time .jw-rail{background-color:rgba(255,255,255,0.2)}.jw-slider-time .jw-buffer{background-color:rgba(255,255,255,0.4)}.jw-flag-touch .jw-slider-time::before{height:44px;width:100%;content:\"\";position:absolute;display:block;bottom:calc(100% - 17px);left:0}.jwplayer .jw-rightclick{display:none;position:absolute;white-space:nowrap}.jwplayer .jw-rightclick.jw-open{display:block}.jwplayer .jw-rightclick .jw-rightclick-list{border-radius:1px;list-style:none;margin:0;padding:0}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item{background-color:rgba(0,0,0,0.8);border-bottom:1px solid #444;margin:0}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item .jw-rightclick-logo{color:#fff;display:inline-flex;padding:0 10px 0 0;vertical-align:middle}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item .jw-rightclick-logo .jw-svg-icon{height:20px;width:20px}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item .jw-rightclick-link{border:none;color:#fff;display:block;font-size:11px;line-height:1em;padding:15px 23px;text-decoration:none}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item:last-child{border-bottom:none}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item:hover{cursor:pointer}.jwplayer .jw-rightclick .jw-rightclick-list .jw-featured{vertical-align:middle}.jwplayer .jw-rightclick .jw-rightclick-list .jw-featured .jw-rightclick-link{color:#d2d2d2}.jwplayer .jw-rightclick .jw-rightclick-list .jw-featured .jw-rightclick-link span{color:#fff}.jw-icon-tooltip.jw-open .jw-overlay{opacity:1;transition-delay:0s;visibility:visible}.jw-slider-time .jw-overlay:before{height:1em;top:auto}.jw-volume-tip{padding:13px 0 26px}.jw-time-tip,.jw-controlbar .jw-tooltip,.jw-settings-menu .jw-tooltip{height:auto;width:100%;box-shadow:0 0 10px rgba(0,0,0,0.4);color:#fff;display:block;margin:0 0 14px;pointer-events:none;position:relative;z-index:0}.jw-time-tip::after,.jw-controlbar .jw-tooltip::after,.jw-settings-menu .jw-tooltip::after{top:100%;position:absolute;left:50%;height:14px;width:14px;border-radius:1px;background-color:currentColor;-webkit-transform-origin:75% 50%;transform-origin:75% 50%;-webkit-transform:translate(-50%, -50%) rotate(45deg);transform:translate(-50%, -50%) rotate(45deg);z-index:-1}.jw-time-tip .jw-text,.jw-controlbar .jw-tooltip .jw-text,.jw-settings-menu .jw-tooltip .jw-text{background-color:#fff;border-radius:1px;color:#000;font-size:10px;height:auto;line-height:1;padding:7px 10px;display:inline-block;min-width:100%;vertical-align:middle}.jw-controlbar .jw-overlay{position:absolute;bottom:100%;left:50%;margin:0;min-height:44px;min-width:44px;opacity:0;transition:150ms cubic-bezier(0, -0.25, .25, 1);transition-property:opacity,visibility;transition-delay:0s,150ms;-webkit-transform:translate(-50%, 0);transform:translate(-50%, 0);visibility:hidden;width:100%;z-index:1}.jw-controlbar .jw-overlay .jw-contents{position:relative}.jw-controlbar .jw-option{position:relative;white-space:nowrap;cursor:pointer;list-style:none;height:1.5em;font-family:inherit;line-height:1.5em;padding:0 .5em;font-size:.8em;margin:0}.jw-controlbar .jw-option::before{padding-right:.125em}.jw-controlbar .jw-tooltip,.jw-settings-menu .jw-tooltip{position:absolute;bottom:100%;left:50%;opacity:0;-webkit-transform:translate(-50%, 0);transform:translate(-50%, 0);transition:100ms 0s cubic-bezier(0, -0.25, .25, 1);transition-property:opacity,visibility,-webkit-transform;transition-property:opacity,transform,visibility;transition-property:opacity,transform,visibility,-webkit-transform;visibility:hidden;white-space:nowrap;width:auto;z-index:1}.jw-controlbar .jw-tooltip.jw-open,.jw-settings-menu .jw-tooltip.jw-open,.jw-controlbar .jw-icon:focus>.jw-tooltip,.jw-settings-menu .jw-icon:focus>.jw-tooltip{opacity:1;-webkit-transform:translate(-50%, -10px);transform:translate(-50%, -10px);transition-duration:150ms;transition-delay:500ms,0s,500ms;visibility:visible}.jw-controlbar .jw-tooltip.jw-tooltip-fullscreen,.jw-settings-menu .jw-tooltip.jw-tooltip-fullscreen{left:auto;right:0;-webkit-transform:translate(0, 0);transform:translate(0, 0)}.jw-controlbar .jw-tooltip.jw-tooltip-fullscreen.jw-open,.jw-settings-menu .jw-tooltip.jw-tooltip-fullscreen.jw-open{-webkit-transform:translate(0, -10px);transform:translate(0, -10px)}.jw-controlbar .jw-tooltip.jw-tooltip-fullscreen::after,.jw-settings-menu .jw-tooltip.jw-tooltip-fullscreen::after{left:auto;right:9px}.jw-tooltip-time{height:auto;width:0;bottom:100%;line-height:normal;padding:0;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.jw-tooltip-time .jw-overlay{bottom:0;min-height:0;width:auto}.jw-tooltip{bottom:57px;display:none;position:absolute}.jw-tooltip .jw-text{height:100%;white-space:nowrap;text-overflow:ellipsis;max-width:246px;overflow:hidden}.jw-flag-audio-player .jw-tooltip{display:none}.jw-flag-small-player .jw-time-thumb{display:none}.jw-skip{color:rgba(255,255,255,0.8);cursor:default;position:absolute;display:flex;right:.75em;bottom:56px;padding:.5em;border:1px solid #333;background-color:#000;align-items:center;height:2em}.jw-skip.jw-skippable{cursor:pointer;padding:.25em .75em}.jw-skip.jw-skippable:hover{cursor:pointer;color:#fff}.jw-skip.jw-skippable .jw-skip-icon{display:inline;height:24px;width:24px;margin:0}.jw-skip .jw-skip-icon{display:none;margin-left:-0.75em;padding:0 .5em}.jw-skip .jw-skip-icon .jw-svg-icon-next{display:block;padding:0}.jw-skip .jw-text,.jw-skip .jw-skip-icon{vertical-align:middle;font-size:.7em}.jw-skip .jw-text{font-weight:bold}.jw-cast{background-size:cover;display:none;height:100%;position:relative;width:100%}.jw-cast-container{background:linear-gradient(180deg, rgba(25,25,25,0.75), rgba(25,25,25,0.25), rgba(25,25,25,0));left:0;padding:20px 20px 80px;position:absolute;top:0;width:100%}.jw-cast-text{color:#fff;font-size:1.6em}.jw-breakpoint-0 .jw-cast-text{font-size:1.15em}.jw-breakpoint-1 .jw-cast-text,.jw-breakpoint-2 .jw-cast-text,.jw-breakpoint-3 .jw-cast-text{font-size:1.3em}.jw-nextup-container{position:absolute;bottom:66px;left:0;background-color:transparent;cursor:pointer;margin:0 auto;padding:12px;pointer-events:none;right:0;text-align:right;visibility:hidden;width:100%}.jw-flag-small-player .jw-nextup-container,.jw-settings-open .jw-nextup-container{display:none}.jw-nextup{background:#333;border-radius:0;box-shadow:0 0 10px rgba(0,0,0,0.5);color:rgba(255,255,255,0.8);display:inline-block;max-width:280px;overflow:hidden;opacity:0;position:relative;width:64%;pointer-events:all;-webkit-transform:translate(0, -5px);transform:translate(0, -5px);transition:150ms cubic-bezier(0, -0.25, .25, 1);transition-property:opacity,-webkit-transform;transition-property:opacity,transform;transition-property:opacity,transform,-webkit-transform;transition-delay:0s}.jw-nextup:hover .jw-nextup-tooltip{color:#fff}.jw-nextup.jw-nextup-thumbnail-visible{max-width:400px}.jw-nextup.jw-nextup-thumbnail-visible .jw-nextup-thumbnail{display:block}.jw-nextup-container-visible{visibility:visible}.jw-nextup-container-visible .jw-nextup{opacity:1;-webkit-transform:translate(0, 0);transform:translate(0, 0);transition-delay:0s,0s,150ms}.jw-nextup-tooltip{display:flex;height:80px}.jw-nextup-thumbnail{width:120px;background-position:center;background-size:cover;flex:0 0 auto;display:none}.jw-nextup-body{flex:1 1 auto;overflow:hidden;padding:.75em .875em;display:flex;flex-flow:column wrap;justify-content:space-between}.jw-nextup-header,.jw-nextup-title{font-size:14px;line-height:1.35}.jw-nextup-header{font-weight:bold}.jw-nextup-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}.jw-nextup-duration{align-self:flex-end;text-align:right;font-size:12px}.jw-nextup-close{height:24px;width:24px;border:none;color:rgba(255,255,255,0.8);cursor:pointer;margin:6px;visibility:hidden}.jw-nextup-close:hover{color:#fff}.jw-nextup-sticky .jw-nextup-close{visibility:visible}.jw-autostart-mute{position:absolute;bottom:0;right:12px;height:44px;width:44px;background-color:rgba(33,33,33,0.4);padding:5px 4px 5px 6px;display:none}.jwplayer.jw-flag-autostart:not(.jw-flag-media-audio) .jw-nextup{display:none}.jw-settings-menu{display:none;position:absolute;flex-flow:column nowrap;align-items:flex-start;right:12px;bottom:57px;max-width:284px;background-color:#333;pointer-events:auto}.jw-settings-open .jw-settings-menu{display:flex}.jw-breakpoint-7 .jw-settings-menu,.jw-breakpoint-6 .jw-settings-menu,.jw-breakpoint-5 .jw-settings-menu{height:232px;width:284px;max-height:232px}.jw-breakpoint-4 .jw-settings-menu,.jw-breakpoint-3 .jw-settings-menu{height:192px;width:284px;max-height:192px}.jw-breakpoint-2 .jw-settings-menu{height:179px;width:284px;max-height:179px}.jw-flag-small-player .jw-settings-menu{bottom:0;right:0;height:100%;width:100%;max-width:none}.jw-settings-menu .jw-icon.jw-button-color::after{height:100%;width:24px;box-shadow:inset 0 -3px 0 -1px currentColor;margin:auto;opacity:0;transition:opacity 150ms cubic-bezier(0, -0.25, .25, 1)}.jw-settings-menu .jw-icon.jw-button-color[aria-checked=\"true\"]::after{opacity:1}.jw-settings-topbar{display:flex;flex:0 0 auto;align-items:center;width:100%;background-color:rgba(0,0,0,0.4);padding:3px 5px 0}.jw-settings-topbar .jw-settings-close{margin-left:auto}.jw-settings-submenu{display:none;flex:1 1 auto;overflow-y:auto;padding:8px 20px 0 5px}.jw-settings-submenu.jw-settings-submenu-active{display:block}.jw-settings-submenu::-webkit-scrollbar{background-color:transparent;width:6px}.jw-settings-submenu::-webkit-scrollbar-thumb{background-color:#fff;border:1px solid #333;border-radius:6px}.jw-flag-touch .jw-settings-submenu{overflow-y:scroll;-webkit-overflow-scrolling:touch}.jw-settings-content-item{color:rgba(255,255,255,0.8);width:100%;font-size:12px;line-height:1;padding:7px 0 7px 15px;cursor:pointer}.jw-settings-content-item.jw-settings-item-active{color:#fff;font-weight:bold}.jw-settings-content-item:hover,.jw-settings-content-item:focus{color:#fff}.jw-settings-content-item:focus{outline:none}.jw-flag-small-player .jw-settings-content-item{line-height:1.75}.jw-breakpoint-2 .jw-settings-open .jw-display-container,.jw-flag-small-player .jw-settings-open .jw-display-container,.jw-flag-touch .jw-settings-open .jw-display-container{display:none}.jw-breakpoint-2 .jw-settings-open.jw-controls,.jw-flag-small-player .jw-settings-open.jw-controls,.jw-flag-touch .jw-settings-open.jw-controls{z-index:1}.jw-flag-small-player .jw-settings-open .jw-controlbar{display:none}.jw-settings-open .jw-icon-settings::after{opacity:1}.jw-settings-open .jw-tooltip-settings{display:none}.jw-sharing-link{cursor:pointer}.jw-state-idle:not(.jw-flag-cast-available) .jw-display{padding:0}.jw-state-idle .jw-controls{background:rgba(0,0,0,0.4)}.jw-state-idle.jw-flag-cast-available:not(.jw-flag-audio-player) .jw-controlbar .jw-slider-time,.jw-state-idle.jw-flag-cardboard-available .jw-controlbar .jw-slider-time,.jw-state-idle.jw-flag-cast-available:not(.jw-flag-audio-player) .jw-controlbar .jw-icon:not(.jw-icon-cardboard):not(.jw-icon-cast):not(.jw-icon-airplay),.jw-state-idle.jw-flag-cardboard-available .jw-controlbar .jw-icon:not(.jw-icon-cardboard):not(.jw-icon-cast):not(.jw-icon-airplay){display:none}.jwplayer.jw-state-buffering .jw-display-icon-display .jw-icon{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.jwplayer.jw-state-buffering .jw-display-icon-display .jw-icon .jw-svg-icon-buffer{display:block}@-webkit-keyframes spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.jwplayer.jw-state-buffering .jw-icon-playback .jw-svg-icon-play{display:none}.jwplayer.jw-state-buffering .jw-icon-display .jw-svg-icon-pause{display:none}.jwplayer.jw-state-playing .jw-display .jw-icon-display .jw-svg-icon-play,.jwplayer.jw-state-playing .jw-icon-playback .jw-svg-icon-play{display:none}.jwplayer.jw-state-playing .jw-display .jw-icon-display .jw-svg-icon-pause,.jwplayer.jw-state-playing .jw-icon-playback .jw-svg-icon-pause{display:block}.jwplayer.jw-state-playing.jw-flag-user-inactive:not(.jw-flag-audio-player):not(.jw-flag-casting):not(.jw-flag-media-audio) .jw-controls-backdrop{opacity:0}.jwplayer.jw-state-playing.jw-flag-user-inactive:not(.jw-flag-audio-player):not(.jw-flag-casting):not(.jw-flag-media-audio) .jw-logo-bottom-left,.jwplayer.jw-state-playing.jw-flag-user-inactive:not(.jw-flag-audio-player):not(.jw-flag-casting):not(.jw-flag-media-audio):not(.jw-flag-autostart) .jw-logo-bottom-right{bottom:0}.jwplayer.jw-state-paused .jw-svg-icon-pause,.jwplayer.jw-state-idle .jw-svg-icon-pause,.jwplayer.jw-state-error .jw-svg-icon-pause,.jwplayer.jw-state-complete .jw-svg-icon-pause{display:none}.jwplayer.jw-state-error .jw-icon-display .jw-svg-icon-play,.jwplayer.jw-state-complete .jw-icon-display .jw-svg-icon-play,.jwplayer.jw-state-buffering .jw-icon-display .jw-svg-icon-play{display:none}.jwplayer:not(.jw-state-buffering) .jw-svg-icon-buffer{display:none}.jwplayer:not(.jw-state-complete) .jw-svg-icon-replay{display:none}.jwplayer:not(.jw-state-error) .jw-svg-icon-error{display:none}.jwplayer.jw-state-complete .jw-display .jw-icon-display .jw-svg-icon-replay{display:block}.jwplayer.jw-state-complete .jw-display .jw-text{display:none}.jwplayer.jw-state-complete .jw-controls{background:rgba(0,0,0,0.4);height:100%}.jw-state-idle .jw-icon-display .jw-svg-icon-pause,.jwplayer.jw-state-paused .jw-icon-playback .jw-svg-icon-pause,.jwplayer.jw-state-paused .jw-icon-display .jw-svg-icon-pause,.jwplayer.jw-state-complete .jw-icon-playback .jw-svg-icon-pause{display:none}.jw-state-idle .jw-display-icon-rewind,.jwplayer.jw-state-buffering .jw-display-icon-rewind,.jwplayer.jw-state-complete .jw-display-icon-rewind,body .jw-error .jw-display-icon-rewind,body .jwplayer.jw-state-error .jw-display-icon-rewind,.jw-state-idle .jw-display-icon-next,.jwplayer.jw-state-buffering .jw-display-icon-next,.jwplayer.jw-state-complete .jw-display-icon-next,body .jw-error .jw-display-icon-next,body .jwplayer.jw-state-error .jw-display-icon-next{display:none}body .jw-error .jw-icon-display,body .jwplayer.jw-state-error .jw-icon-display{cursor:default}body .jw-error .jw-icon-display .jw-svg-icon-error,body .jwplayer.jw-state-error .jw-icon-display .jw-svg-icon-error{display:block}body .jw-error .jw-icon-container{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}body .jwplayer.jw-state-error.jw-flag-audio-player .jw-preview{display:none}body .jwplayer.jw-state-error.jw-flag-audio-player .jw-title{padding-top:4px}body .jwplayer.jw-state-error.jw-flag-audio-player .jw-title-primary{width:auto;display:inline-block;padding-right:.5ch}body .jwplayer.jw-state-error.jw-flag-audio-player .jw-title-secondary{width:auto;display:inline-block;padding-left:0}body .jwplayer.jw-state-error .jw-controlbar,.jwplayer.jw-state-idle:not(.jw-flag-audio-player):not(.jw-flag-cast-available):not(.jw-flag-cardboard-available) .jw-controlbar{display:none}body .jwplayer.jw-state-error .jw-settings-menu,.jwplayer.jw-state-idle:not(.jw-flag-audio-player):not(.jw-flag-cast-available):not(.jw-flag-cardboard-available) .jw-settings-menu{height:100%;top:0;bottom:0}body .jwplayer.jw-state-error .jw-display,.jwplayer.jw-state-idle:not(.jw-flag-audio-player):not(.jw-flag-cast-available):not(.jw-flag-cardboard-available) .jw-display{padding:0}body .jwplayer.jw-state-error .jw-logo-bottom-left,.jwplayer.jw-state-idle:not(.jw-flag-audio-player):not(.jw-flag-cast-available):not(.jw-flag-cardboard-available) .jw-logo-bottom-left,body .jwplayer.jw-state-error .jw-logo-bottom-right,.jwplayer.jw-state-idle:not(.jw-flag-audio-player):not(.jw-flag-cast-available):not(.jw-flag-cardboard-available) .jw-logo-bottom-right{bottom:0}.jwplayer.jw-state-playing.jw-flag-user-inactive .jw-display{visibility:hidden;pointer-events:none;opacity:0}.jwplayer.jw-state-playing:not(.jw-flag-touch):not(.jw-flag-small-player):not(.jw-flag-casting) .jw-display,.jwplayer.jw-state-paused:not(.jw-flag-touch):not(.jw-flag-small-player):not(.jw-flag-casting):not(.jw-flag-play-rejected) .jw-display{display:none}.jwplayer.jw-state-paused.jw-flag-play-rejected:not(.jw-flag-touch):not(.jw-flag-small-player):not(.jw-flag-casting) .jw-display-icon-rewind,.jwplayer.jw-state-paused.jw-flag-play-rejected:not(.jw-flag-touch):not(.jw-flag-small-player):not(.jw-flag-casting) .jw-display-icon-next{display:none}.jwplayer.jw-state-buffering .jw-display-icon-display .jw-text,.jwplayer.jw-state-complete .jw-display .jw-text{display:none}.jwplayer.jw-flag-casting:not(.jw-flag-audio-player) .jw-cast{display:block}.jwplayer.jw-flag-casting.jw-flag-airplay-casting .jw-display-icon-container{display:none}.jwplayer.jw-flag-casting .jw-icon-hd,.jwplayer.jw-flag-casting .jw-captions,.jwplayer.jw-flag-casting .jw-icon-fullscreen,.jwplayer.jw-flag-casting .jw-icon-audio-tracks{display:none}.jwplayer.jw-flag-casting.jw-flag-airplay-casting .jw-icon-volume{display:none}.jwplayer.jw-flag-casting.jw-flag-airplay-casting .jw-icon-airplay{color:#fff}.jw-state-playing.jw-flag-casting:not(.jw-flag-audio-player) .jw-display,.jw-state-paused.jw-flag-casting:not(.jw-flag-audio-player) .jw-display{display:table}.jwplayer.jw-flag-cast-available .jw-icon-cast,.jwplayer.jw-flag-cast-available .jw-icon-airplay{display:flex}.jwplayer.jw-flag-cardboard-available .jw-icon-cardboard{display:flex}.jwplayer.jw-flag-live .jw-display-icon-rewind{visibility:hidden}.jwplayer.jw-flag-live .jw-controlbar .jw-text-elapsed,.jwplayer.jw-flag-live .jw-controlbar .jw-text-duration,.jwplayer.jw-flag-live .jw-controlbar .jw-text-countdown,.jwplayer.jw-flag-live .jw-controlbar .jw-slider-time{display:none}.jwplayer.jw-flag-live .jw-controlbar .jw-text-alt{display:flex}.jwplayer.jw-flag-live .jw-controlbar .jw-overlay:after{display:none}.jwplayer.jw-flag-live .jw-nextup-container{bottom:44px}.jwplayer.jw-flag-live .jw-text-elapsed,.jwplayer.jw-flag-live .jw-text-duration{display:none}.jw-text-live{height:24px;width:auto;align-items:center;border-radius:1px;color:rgba(255,255,255,0.8);display:flex;font-size:12px;font-weight:bold;margin-right:10px;padding:0 1ch;text-rendering:geometricPrecision;text-transform:uppercase;transition:150ms cubic-bezier(0, -0.25, .25, 1);transition-property:box-shadow,color}.jw-text-live::before{height:8px;width:8px;background-color:currentColor;border-radius:50%;margin-right:6px;opacity:1;transition:opacity 150ms cubic-bezier(0, -0.25, .25, 1)}.jw-text-live.jw-dvr-live{box-shadow:inset 0 0 0 2px currentColor}.jw-text-live.jw-dvr-live::before{opacity:.5}.jw-text-live.jw-dvr-live:hover{color:#fff}.jwplayer.jw-flag-controls-hidden .jw-logo.jw-hide{visibility:hidden;pointer-events:none;opacity:0}.jwplayer.jw-flag-controls-hidden:not(.jw-flag-casting) .jw-logo-top-right{top:0}.jwplayer.jw-flag-controls-hidden .jw-plugin{bottom:.5em}.jwplayer.jw-flag-controls-hidden .jw-nextup-container{bottom:0}.jw-flag-controls-hidden .jw-controlbar,.jw-flag-controls-hidden .jw-display{visibility:hidden;pointer-events:none;opacity:0;transition-delay:0s,250ms}.jw-flag-controls-hidden .jw-controls-backdrop{opacity:0}.jw-flag-controls-hidden .jw-logo{visibility:visible}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing .jw-logo.jw-hide{visibility:hidden;pointer-events:none;opacity:0}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing:not(.jw-flag-casting) .jw-logo-top-right{top:0}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing .jw-plugin{bottom:.5em}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing .jw-nextup-container{bottom:0}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing .jw-captions{max-height:none}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing video::-webkit-media-text-track-container{max-height:none}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing .jw-media{cursor:none;-webkit-cursor-visibility:auto-hide}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing.jw-flag-casting .jw-display{display:table}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing:not(.jw-flag-ads) .jw-autostart-mute{display:flex}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-flag-casting .jw-nextup-container{bottom:66px}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-flag-casting.jw-state-idle .jw-nextup-container{display:none}.jw-flag-media-audio .jw-preview{display:block}.jwplayer.jw-flag-ads .jw-preview,.jwplayer.jw-flag-ads .jw-logo,.jwplayer.jw-flag-ads .jw-captions.jw-captions-enabled,.jwplayer.jw-flag-ads .jw-nextup-container,.jwplayer.jw-flag-ads .jw-text-duration,.jwplayer.jw-flag-ads .jw-text-elapsed{display:none}.jwplayer.jw-flag-ads video::-webkit-media-text-track-container{display:none}.jwplayer.jw-flag-ads.jw-flag-small-player .jw-display-icon-rewind,.jwplayer.jw-flag-ads.jw-flag-small-player .jw-display-icon-next,.jwplayer.jw-flag-ads.jw-flag-small-player .jw-display-icon-display{display:none}.jwplayer.jw-flag-ads.jw-flag-small-player.jw-state-buffering .jw-display-icon-display{display:inline-block}.jwplayer.jw-flag-ads .jw-controlbar{flex-wrap:wrap-reverse}.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time{height:auto;padding:0;pointer-events:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-slider-container{height:5px}.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-rail,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-knob,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-buffer,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-cue,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-icon-settings{display:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-progress{-webkit-transform:none;transform:none;top:auto}.jwplayer.jw-flag-ads .jw-controlbar .jw-tooltip,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-tooltip:not(.jw-icon-volume),.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-inline:not(.jw-icon-playback):not(.jw-icon-fullscreen):not(.jw-icon-volume){display:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-volume-tip{padding:13px 0}.jwplayer.jw-flag-ads .jw-controlbar .jw-text-alt{display:flex}.jwplayer.jw-flag-ads.jw-flag-ads.jw-state-playing.jw-flag-touch:not(.jw-flag-ads-vpaid) .jw-controls .jw-controlbar,.jwplayer.jw-flag-ads.jw-flag-ads.jw-state-playing.jw-flag-touch:not(.jw-flag-ads-vpaid).jw-flag-autostart .jw-controls .jw-controlbar{display:flex;pointer-events:all;visibility:visible;opacity:1}.jwplayer.jw-flag-ads.jw-flag-ads.jw-state-playing.jw-flag-touch:not(.jw-flag-ads-vpaid).jw-flag-user-inactive .jw-controls-backdrop,.jwplayer.jw-flag-ads.jw-flag-ads.jw-state-playing.jw-flag-touch:not(.jw-flag-ads-vpaid).jw-flag-autostart.jw-flag-user-inactive .jw-controls-backdrop{opacity:1;background-size:100% 60px}.jwplayer.jw-flag-ads .jw-nextup-container{bottom:44px}.jwplayer.jw-flag-ads .jw-icon,.jwplayer.jw-flag-ads .jw-slider-horizontal{pointer-events:all}.jwplayer.jw-flag-ads-vpaid .jw-display-container,.jwplayer.jw-flag-touch.jw-flag-ads-vpaid .jw-display-container,.jwplayer.jw-flag-ads-vpaid .jw-skip,.jwplayer.jw-flag-touch.jw-flag-ads-vpaid .jw-skip{display:none}.jwplayer.jw-flag-ads-vpaid.jw-flag-small-player .jw-controls{background:none}.jwplayer.jw-flag-ads-vpaid.jw-flag-small-player .jw-controls::after{content:none}.jwplayer.jw-flag-ads-hide-controls .jw-controls-backdrop,.jwplayer.jw-flag-ads-hide-controls .jw-controls{display:none !important}.jw-flag-overlay-open-related .jw-controls,.jw-flag-overlay-open-related .jw-title,.jw-flag-overlay-open-related .jw-logo{display:none}.jwplayer.jw-flag-rightclick-open{overflow:visible}.jwplayer.jw-flag-rightclick-open .jw-rightclick{z-index:16777215}body .jwplayer.jw-flag-flash-blocked .jw-controls,body .jwplayer.jw-flag-flash-blocked .jw-overlays,body .jwplayer.jw-flag-flash-blocked .jw-controls-backdrop,body .jwplayer.jw-flag-flash-blocked .jw-preview{display:none}.jw-flag-touch.jw-breakpoint-7 .jw-captions,.jw-flag-touch.jw-breakpoint-6 .jw-captions,.jw-flag-touch.jw-breakpoint-5 .jw-captions,.jw-flag-touch.jw-breakpoint-4 .jw-captions,.jw-flag-touch.jw-breakpoint-7 .jw-nextup-container,.jw-flag-touch.jw-breakpoint-6 .jw-nextup-container,.jw-flag-touch.jw-breakpoint-5 .jw-nextup-container,.jw-flag-touch.jw-breakpoint-4 .jw-nextup-container{bottom:4.25em}.jw-flag-touch.jw-breakpoint-7 video::-webkit-media-text-track-container,.jw-flag-touch.jw-breakpoint-6 video::-webkit-media-text-track-container,.jw-flag-touch.jw-breakpoint-5 video::-webkit-media-text-track-container,.jw-flag-touch.jw-breakpoint-4 video::-webkit-media-text-track-container{max-height:calc(100% - 60px)}.jw-flag-touch .jw-controlbar .jw-icon-volume{display:flex}.jw-flag-touch .jw-display,.jw-flag-touch .jw-display-container,.jw-flag-touch .jw-display-controls{pointer-events:none}.jw-flag-touch.jw-state-paused:not(.jw-breakpoint-1) .jw-display-icon-next,.jw-flag-touch.jw-state-playing:not(.jw-breakpoint-1) .jw-display-icon-next,.jw-flag-touch.jw-state-paused:not(.jw-breakpoint-1) .jw-display-icon-rewind,.jw-flag-touch.jw-state-playing:not(.jw-breakpoint-1) .jw-display-icon-rewind{display:none}.jw-flag-touch.jw-state-paused.jw-flag-dragging .jw-display{display:none}.jw-flag-audio-player{background-color:#000}.jw-flag-audio-player:not(.jw-flag-flash-blocked) .jw-media{visibility:hidden}.jw-flag-audio-player .jw-title{background:none}.jw-flag-audio-player object{min-height:44px}.jw-flag-audio-player .jw-preview,.jw-flag-audio-player .jw-display,.jw-flag-audio-player .jw-title,.jw-flag-audio-player .jw-nextup-container{display:none}.jw-flag-audio-player .jw-controlbar{position:relative}.jw-flag-audio-player .jw-controlbar .jw-button-container{padding-right:3px;padding-left:0}.jw-flag-audio-player .jw-controlbar .jw-icon-tooltip,.jw-flag-audio-player .jw-controlbar .jw-icon-inline{display:none}.jw-flag-audio-player .jw-controlbar .jw-icon-volume:not(.jw-icon-tooltip),.jw-flag-audio-player .jw-controlbar .jw-icon-playback,.jw-flag-audio-player .jw-controlbar .jw-icon-next,.jw-flag-audio-player .jw-controlbar .jw-icon-rewind,.jw-flag-audio-player .jw-controlbar .jw-icon-cast,.jw-flag-audio-player .jw-controlbar .jw-text-live,.jw-flag-audio-player .jw-controlbar .jw-icon-airplay,.jw-flag-audio-player .jw-controlbar .jw-logo-button,.jw-flag-audio-player .jw-controlbar .jw-text-elapsed,.jw-flag-audio-player .jw-controlbar .jw-text-duration{display:flex;flex:0 0 auto}.jw-flag-audio-player .jw-controlbar .jw-text-duration,.jw-flag-audio-player .jw-controlbar .jw-text-countdown{padding-right:10px}.jw-flag-audio-player .jw-controlbar .jw-slider-time{display:flex;flex:0 1 auto;align-items:center}.jw-flag-audio-player.jw-flag-small-player .jw-text-elapsed,.jw-flag-audio-player.jw-flag-small-player .jw-text-duration{display:none}.jw-flag-audio-player.jw-flag-ads .jw-slider-time{display:none}.jw-hidden{display:none}", ""]);

// exports


/***/ })
]);
//# sourceMappingURL=jwplayer.controls.f82a441d96b8dc3242ba.map