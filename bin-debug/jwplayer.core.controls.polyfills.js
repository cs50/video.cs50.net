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
webpackJsonpjwplayer([2,3,4,5,7],[
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
/* 3 */
/*!*****************************************!*\
  !*** ./src/js/controller/controller.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _players = __webpack_require__(/*! api/players */ 26);

var _players2 = _interopRequireDefault(_players);

var _coreShim = __webpack_require__(/*! api/core-shim */ 39);

var _setConfig = __webpack_require__(/*! api/set-config */ 149);

var _setConfig2 = _interopRequireDefault(_setConfig);

var _apiQueue = __webpack_require__(/*! api/api-queue */ 34);

var _apiQueue2 = _interopRequireDefault(_apiQueue);

var _loader = __webpack_require__(/*! playlist/loader */ 41);

var _loader2 = _interopRequireDefault(_loader);

var _playlist = __webpack_require__(/*! playlist/playlist */ 42);

var _playlist2 = _interopRequireDefault(_playlist);

var _instreamAdapter = __webpack_require__(/*! controller/instream-adapter */ 150);

var _instreamAdapter2 = _interopRequireDefault(_instreamAdapter);

var _captions2 = __webpack_require__(/*! controller/captions */ 154);

var _captions3 = _interopRequireDefault(_captions2);

var _model2 = __webpack_require__(/*! controller/model */ 80);

var _model3 = _interopRequireDefault(_model2);

var _view2 = __webpack_require__(/*! view/view */ 155);

var _view3 = _interopRequireDefault(_view2);

var _viewModel = __webpack_require__(/*! view/view-model */ 171);

var _viewModel2 = _interopRequireDefault(_viewModel);

var _changeStateEvent = __webpack_require__(/*! events/change-state-event */ 91);

var _changeStateEvent2 = _interopRequireDefault(_changeStateEvent);

var _eventsMiddleware = __webpack_require__(/*! controller/events-middleware */ 172);

var _eventsMiddleware2 = _interopRequireDefault(_eventsMiddleware);

var _backbone = __webpack_require__(/*! utils/backbone.events */ 7);

var _backbone2 = _interopRequireDefault(_backbone);

var _canAutoplay = __webpack_require__(/*! utils/can-autoplay */ 173);

var _environment = __webpack_require__(/*! environment/environment */ 11);

var _streamType = __webpack_require__(/*! providers/utils/stream-type */ 174);

var _promise = __webpack_require__(/*! polyfills/promise */ 4);

var _promise2 = _interopRequireDefault(_promise);

var _cancelable = __webpack_require__(/*! utils/cancelable */ 79);

var _cancelable2 = _interopRequireDefault(_cancelable);

var _underscore = __webpack_require__(/*! utils/underscore */ 0);

var _underscore2 = _interopRequireDefault(_underscore);

var _playerModel = __webpack_require__(/*! model/player-model */ 38);

var _events = __webpack_require__(/*! events/events */ 5);

var _programController2 = __webpack_require__(/*! program/program-controller */ 88);

var _programController3 = _interopRequireDefault(_programController2);

var _qoe = __webpack_require__(/*! controller/qoe */ 175);

var _qoe2 = _interopRequireDefault(_qoe);

var _programConstants = __webpack_require__(/*! ../program/program-constants */ 36);

var _item2 = __webpack_require__(/*! playlist/item */ 19);

var _item3 = _interopRequireDefault(_item2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The model stores a different state than the provider
function normalizeState(newstate) {
    if (newstate === _events.STATE_LOADING || newstate === _events.STATE_STALLED) {
        return _events.STATE_BUFFERING;
    }
    return newstate;
}

var Controller = function Controller() {};

_extends(Controller.prototype, {
    setup: function setup(config, _api, originalContainer, eventListeners, commandQueue, mediaPool) {
        var _this3 = this;

        var _this = this;
        var _model = _this._model = new _model3.default();

        var _view = void 0;
        var _captions = void 0;
        var _beforePlay = false;
        var _actionOnAttach = void 0;
        var _stopPlaylist = false;
        var _interruptPlay = void 0;
        var checkAutoStartCancelable = (0, _cancelable2.default)(_checkAutoStart);
        var updatePlaylistCancelable = (0, _cancelable2.default)(function () {});
        var primeBeforePlay = true;

        _this.originalContainer = _this.currentContainer = originalContainer;
        _this._events = eventListeners;

        // Delegate trigger so we can run a middleware function before any event is bubbled through the API
        _this.trigger = function (type, args) {
            var data = (0, _eventsMiddleware2.default)(_model, type, args);
            return _backbone2.default.trigger.call(this, type, data);
        };

        var eventsReadyQueue = new _apiQueue2.default(_this, ['trigger'], function () {
            return true;
        });

        var _trigger = function _trigger(type, event) {
            _this.trigger(type, event);
        };

        _model.setup(config);

        var viewModel = new _viewModel2.default(_model);

        _view = this._view = new _view3.default(_api, viewModel);
        _view.on('all', _trigger, _this);

        var _programController = new _programController3.default(_model, mediaPool);
        updateProgramSoundSettings();
        addProgramControllerListeners();
        (0, _qoe2.default)(_model, _programController);

        _model.on(_events.ERROR, _this.triggerError, _this);

        // If we attempt to load flash, assume it is blocked if we don't hear back within a second
        _model.on('change:flashBlocked', function (model, isBlocked) {
            if (!isBlocked) {
                this._model.set('errorEvent', undefined);
                return;
            }
            // flashThrottle indicates whether this is a throttled event or plugin blocked event
            var throttled = !!model.get('flashThrottle');
            var errorEvent = {
                message: throttled ? 'Click to run Flash' : 'Flash plugin failed to load'
            };
            // Only dispatch an error for Flash blocked, not throttled events
            if (!throttled) {
                this.trigger(_events.ERROR, errorEvent);
            }
            this._model.set('errorEvent', errorEvent);
        }, this);

        _model.on('change:state', _changeStateEvent2.default, this);

        _model.on('change:castState', function (model, evt) {
            _this.trigger(_events.CAST_SESSION, evt);
        });

        _model.on('change:fullscreen', function (model, bool) {
            _this.trigger(_events.FULLSCREEN, {
                fullscreen: bool
            });
            if (bool) {
                // Stop autoplay behavior when the player enters fullscreen
                model.set('playOnViewable', false);
            }
        });

        _model.on('change:volume', function (model, vol) {
            _this.trigger(_events.MEDIA_VOLUME, {
                volume: vol
            });
        });

        _model.on('change:mute', function (model) {
            _this.trigger(_events.MEDIA_MUTE, {
                mute: model.getMute()
            });
        });

        _model.on('change:playbackRate', function (model, rate) {
            _this.trigger(_events.PLAYBACK_RATE_CHANGED, {
                playbackRate: rate,
                position: model.get('position')
            });
        });

        _model.on('change:scrubbing', function (model, state) {
            if (state) {
                _pause();
            } else {
                _play({ reason: 'interaction' });
            }
        });

        // For onCaptionsList and onCaptionsChange
        _model.on('change:captionsList', function (model, captionsList) {
            _this.trigger(_events.CAPTIONS_LIST, {
                tracks: captionsList,
                track: _model.get('captionsIndex') || 0
            });
        });

        _model.on('change:mediaModel', function (model, mediaModel) {
            var _this2 = this;

            model.set('errorEvent', undefined);
            mediaModel.change('mediaState', function (changedMediaModel, state) {
                if (!model.get('errorEvent')) {
                    model.set(_events.PLAYER_STATE, normalizeState(state));
                }
            }, this);
            mediaModel.change('duration', function (changedMediaModel, duration) {
                if (duration === 0) {
                    return;
                }
                var minDvrWindow = model.get('minDvrWindow');
                var type = (0, _streamType.streamType)(duration, minDvrWindow);
                model.setStreamType(type);
            }, this);

            var index = model.get('item') + 1;
            var recsAuto = (model.get('related') || {}).oncomplete === 'autoplay';
            var item = model.get('playlist')[index];
            if ((item || recsAuto) && _environment.Features.backgroundLoading) {
                var onPosition = function onPosition(changedMediaModel, position) {
                    // Do not background load DAI items because that item will be dynamically replaced before play
                    if (item && !item.daiSetting && position >= mediaModel.get('duration') - _programConstants.BACKGROUND_LOAD_OFFSET) {
                        mediaModel.off('change:position', onPosition, _this2);
                        _programController.backgroundLoad(item);
                    } else if (recsAuto) {
                        item = _model.get('nextUp');
                    }
                };
                mediaModel.on('change:position', onPosition, this);
            }
        });

        // Ensure captionsList event is raised after playlistItem
        _captions = new _captions3.default(_model);
        _captions.on('all', _trigger, _this);

        viewModel.on('viewSetup', function (viewElement) {
            (0, _coreShim.showView)(_this3, viewElement);
        });

        this.playerReady = function () {
            var related = _api.getPlugin('related');
            if (related) {
                related.on('nextUp', function (nextUp) {
                    var item = null;
                    if (nextUp === Object(nextUp)) {
                        // Format the item from the nextUp feed into a valid PlaylistItem
                        item = (0, _item3.default)(nextUp);
                        item.sources = (0, _playlist.fixSources)(item, _model);
                    }
                    _model.set('nextUp', item);
                });
            }

            // Fire 'ready' once the view has resized so that player width and height are available
            // (requires the container to be in the DOM)
            _view.once(_events.RESIZE, _playerReadyNotify);

            _view.init();
        };

        function _playerReadyNotify() {
            _model.change('visibility', _updateViewable);
            eventsReadyQueue.off();

            // Tell the api that we are loaded
            _this.trigger(_events.READY, {
                // this will be updated by Api
                setupTime: 0
            });

            _model.change('playlist', function (model, playlist) {
                if (playlist.length) {
                    var eventData = {
                        playlist: playlist
                    };
                    var feedData = _model.get('feedData');
                    if (feedData) {
                        var eventFeedData = _extends({}, feedData);
                        delete eventFeedData.playlist;
                        eventData.feedData = eventFeedData;
                    }
                    _this.trigger(_events.PLAYLIST_LOADED, eventData);
                }
            });

            _model.change('playlistItem', function (model, playlistItem) {
                if (playlistItem) {
                    _this.trigger(_events.PLAYLIST_ITEM, {
                        index: _model.get('item'),
                        item: playlistItem
                    });
                }
            });

            eventsReadyQueue.flush();
            eventsReadyQueue.destroy();
            eventsReadyQueue = null;

            _model.change('viewable', viewableChange);
            _model.change('viewable', _checkPlayOnViewable);
            _model.once('change:autostartFailed change:mute', function (model) {
                model.off('change:viewable', _checkPlayOnViewable);
            });

            // Run _checkAutoStart() last
            // 'viewable' changes can result in preload() being called on the initial provider instance
            _checkAutoStart();
        }

        function _updateViewable(model, visibility) {
            if (!_underscore2.default.isUndefined(visibility)) {
                _model.set('viewable', Math.round(visibility));
            }
        }

        function _checkAutoStart() {
            if (!apiQueue) {
                // this player has been destroyed
                return;
            }

            // Autostart immediately if we're not waiting for the player to become viewable first.
            if (_model.get('autostart') === true && !_model.get('playOnViewable')) {
                _autoStart();
            }
            apiQueue.flush();
        }

        function viewableChange(model, viewable) {
            _this.trigger('viewable', {
                viewable: viewable
            });

            // Only attempt to preload if this is the first player on the page or viewable
            if (_players2.default[0] !== _api && viewable !== 1) {
                return;
            }
            if (_model.get('state') === 'idle' && _model.get('autostart') === false) {
                _programController.preloadVideo();
            }
        }

        function _checkPlayOnViewable(model, viewable) {
            if (model.get('playOnViewable')) {
                if (viewable) {
                    _autoStart();
                } else if (_environment.OS.mobile) {
                    _this.pause({ reason: 'autostart' });
                }
            }
        }

        function _load(item, feedData) {

            var instream = _this._instreamAdapter;
            if (instream) {
                instream.noResume = true;
            }
            _this.trigger('destroyPlugin', {});
            _stop(true);

            checkAutoStartCancelable.cancel();
            checkAutoStartCancelable = (0, _cancelable2.default)(_checkAutoStart);
            updatePlaylistCancelable.cancel();

            if (_inInteraction(window.event)) {
                _programController.primeMediaElements();
            }

            var loadPromise = void 0;

            switch (typeof item === 'undefined' ? 'undefined' : _typeof(item)) {
                case 'string':
                    {
                        _model.attributes.item = 0;
                        _model.attributes.itemReady = false;
                        var loadPlaylistPromise = _loadPlaylist(item).catch(function (error) {
                            _this.triggerError({
                                message: 'Error loading playlist: ' + error.message
                            });
                        });
                        updatePlaylistCancelable = (0, _cancelable2.default)(function (data) {
                            if (data) {
                                return _this.updatePlaylist((0, _playlist2.default)(data.playlist), data);
                            }
                        });
                        loadPromise = loadPlaylistPromise.then(updatePlaylistCancelable.async);
                        break;
                    }
                case 'object':
                    _model.attributes.item = 0;
                    loadPromise = _this.updatePlaylist((0, _playlist2.default)(item), feedData || {});
                    break;
                case 'number':
                    loadPromise = _setItem(item);
                    break;
                default:
                    return;
            }
            loadPromise.catch(function (error) {
                _this.triggerError({
                    message: 'Playlist error: ' + error.message
                });
            });

            loadPromise.then(checkAutoStartCancelable.async).catch(function () {});
        }

        function _loadPlaylist(toLoad) {
            var _this4 = this;

            return new _promise2.default(function (resolve, reject) {
                var loader = new _loader2.default();
                loader.on(_events.PLAYLIST_LOADED, function (data) {
                    resolve(data);
                });
                loader.on(_events.ERROR, function (error) {
                    reject(error);
                }, _this4);
                loader.load(toLoad);
            });
        }

        function _getAdState() {
            return _this._instreamAdapter && _this._instreamAdapter.getState();
        }

        function _getState() {
            var adState = _getAdState();
            if (_underscore2.default.isString(adState)) {
                return adState;
            }
            return _model.get('state');
        }

        function _play(meta) {
            checkAutoStartCancelable.cancel();

            if (_model.get('state') === _events.STATE_ERROR) {
                return _promise.resolved;
            }

            var playReason = _getReason(meta);
            var startTime = meta ? meta.startTime : null;
            _model.set('playReason', playReason);
            // Stop autoplay behavior if the video is started by the user or an api call
            if (playReason === 'interaction' || playReason === 'external') {
                _model.set('playOnViewable', false);
            }

            var adState = _getAdState();
            if (_underscore2.default.isString(adState)) {
                // this will resume the ad. _api.playAd would load a new ad
                _api.pauseAd(false);
                return _promise.resolved;
            }

            if (_model.get('state') === _events.STATE_COMPLETE) {
                _stop(true);
                _setItem(0);
            }

            if (!_beforePlay) {
                _beforePlay = true;
                _this.trigger(_events.MEDIA_BEFOREPLAY, {
                    playReason: playReason,
                    startTime: startTime
                });
                _beforePlay = false;

                if (_inInteraction(window.event) && primeBeforePlay) {
                    _programController.primeMediaElements();
                    primeBeforePlay = false;
                }

                if (_interruptPlay) {
                    // Force tags to prime if we're about to play an ad
                    // Resetting the source in order to prime is OK since we'll be switching it anyway
                    if (_inInteraction(window.event) && !_environment.Features.backgroundLoading) {
                        _model.get('mediaElement').load();
                    }
                    _interruptPlay = false;
                    _actionOnAttach = null;
                    return _promise.resolved;
                }
            }

            return _programController.playVideo(playReason).then(function () {
                // If playback succeeded that means we captured a gesture (and used it to prime the pool)
                // Avoid priming again in beforePlay because it could cause BGL'd media to be source reset
                primeBeforePlay = false;
            });
        }

        function _getReason(meta) {
            if (meta && meta.reason) {
                return meta.reason;
            }
            if (_inInteraction(window.event)) {
                return 'interaction';
            }
            return 'external';
        }

        function _autoStart() {
            var state = _model.get('state');
            if (state !== _events.STATE_IDLE && state !== _events.STATE_PAUSED) {
                return;
            }

            // Reset cancelable for new autoplay test below.
            checkAutoStartCancelable = (0, _cancelable2.default)(_checkAutoStart);

            // Detect and store browser autoplay setting in the model.
            var adConfig = _model.get('advertising');
            (0, _canAutoplay.canAutoplay)(mediaPool, {
                cancelable: checkAutoStartCancelable,
                muted: _this.getMute(),
                allowMuted: adConfig ? adConfig.autoplayadsmuted : true
            }).then(function (result) {
                _model.set('canAutoplay', result);

                // Only apply autostartMuted on un-muted autostart attempt.
                if (result === _canAutoplay.AUTOPLAY_MUTED && !_this.getMute()) {
                    _model.set('autostartMuted', true);
                    updateProgramSoundSettings();

                    _model.once('change:autostartMuted', function (model) {
                        model.off('change:viewable', _checkPlayOnViewable);
                    });
                }

                return _play({ reason: 'autostart' }).catch(function () {
                    if (!_this._instreamAdapter) {
                        _model.set('autostartFailed', true);
                    }
                    _actionOnAttach = null;
                });
            }).catch(function (error) {
                _model.set('canAutoplay', _canAutoplay.AUTOPLAY_DISABLED);
                _model.set('autostart', false);

                // Emit event unless test was explicitly canceled.
                if (!checkAutoStartCancelable.cancelled()) {
                    var reason = error.reason;

                    _this.trigger(_events.AUTOSTART_NOT_ALLOWED, {
                        reason: reason,
                        error: error
                    });
                }
            });
        }

        function _stop(internal) {
            checkAutoStartCancelable.cancel();
            apiQueue.empty();

            var adState = _getAdState();
            if (_underscore2.default.isString(adState)) {
                return;
            }

            var fromApi = !internal;

            _actionOnAttach = null;

            if (fromApi) {
                _stopPlaylist = true;
            }

            if (_beforePlay) {
                _interruptPlay = true;
            }

            _model.set('errorEvent', undefined);
            _programController.stopVideo();
        }

        function _pause(meta) {
            _actionOnAttach = null;
            checkAutoStartCancelable.cancel();

            var pauseReason = _getReason(meta);
            _model.set('pauseReason', pauseReason);
            // Stop autoplay behavior if the video is paused by the user or an api call
            if (pauseReason === 'interaction' || pauseReason === 'external') {
                _model.set('playOnViewable', false);
            }

            var adState = _getAdState();
            if (_underscore2.default.isString(adState)) {
                _api.pauseAd(true);
                return;
            }

            switch (_model.get('state')) {
                case _events.STATE_ERROR:
                    return;
                case _events.STATE_PLAYING:
                case _events.STATE_BUFFERING:
                    {
                        _programController.pause();
                        break;
                    }
                default:
                    if (_beforePlay) {
                        _interruptPlay = true;
                    }
            }
        }

        function _isIdle() {
            var state = _model.get('state');
            return state === _events.STATE_IDLE || state === _events.STATE_COMPLETE || state === _events.STATE_ERROR;
        }

        function _seek(pos, meta) {
            if (_model.get('state') === _events.STATE_ERROR) {
                return;
            }
            _programController.position = pos;
            if (!_model.get('scrubbing') && _model.get('state') !== _events.STATE_PLAYING) {
                meta = meta || {};
                meta.startTime = pos;
                this.play(meta);
            }
        }

        function _item(index, meta) {
            _stop(true);
            _setItem(index);
            _play(meta).catch(function () {
                // Suppress "Uncaught (in promise) Error"
            });
        }

        function _setItem(index) {
            _programController.stopVideo();

            var playlist = _model.get('playlist');
            var length = playlist.length;

            // If looping past the end, or before the beginning
            index = (parseInt(index, 10) || 0) % length;
            if (index < 0) {
                index += length;
            }

            return _programController.setActiveItem(index);
        }

        function _prev(meta) {
            _item(_model.get('item') - 1, meta);
        }

        function _next(meta) {
            _item(_model.get('item') + 1, meta);
        }

        function _completeHandler() {
            if (!_isIdle()) {
                // Something has made an API call before the complete handler has fired.
                return;
            } else if (_stopPlaylist) {
                // Stop called in onComplete event listener
                _stopPlaylist = false;
                return;
            }

            _actionOnAttach = _completeHandler;

            var idx = _model.get('item');
            if (idx === _model.get('playlist').length - 1) {
                // If it's the last item in the playlist
                if (_model.get('repeat')) {
                    _next({ reason: 'repeat' });
                } else {
                    // Exit fullscreen on IOS so that our overlays show to the user
                    if (_environment.OS.iOS) {
                        _setFullscreen(false);
                    }
                    // Autoplay/pause no longer needed since there's no more media to play
                    // This prevents media from replaying when a completed video scrolls into view
                    _model.set('playOnViewable', false);
                    _model.set('state', _events.STATE_COMPLETE);
                    _this.trigger(_events.PLAYLIST_COMPLETE, {});
                }
                return;
            }

            // It wasn't the last item in the playlist,
            //  so go to the next one and trigger an autoadvance event
            var related = _api.getPlugin('related');
            triggerAdvanceEvent(related, 'nextAutoAdvance');
            _next({ reason: 'playlist' });
        }

        function _setCurrentQuality(index) {
            _programController.quality = index;
        }

        function _getCurrentQuality() {
            return _programController.quality;
        }

        function _getConfig() {
            return this._model ? this._model.getConfiguration() : undefined;
        }

        function _getVisualQuality() {
            var mediaModel = this._model.get('mediaModel');
            if (mediaModel) {
                return mediaModel.get(_events.MEDIA_VISUAL_QUALITY);
            }
            return null;
        }

        function _getQualityLevels() {
            return _programController.qualities;
        }

        function _setCurrentAudioTrack(index) {
            _programController.audioTrack = index;
        }

        function _getCurrentAudioTrack() {
            return _programController.audioTrack;
        }

        function _getAudioTracks() {
            return _programController.audioTracks;
        }

        function _setCurrentCaptions(index) {
            index = parseInt(index, 10) || 0;

            _model.persistVideoSubtitleTrack(index);
            _programController.subtitles = index;

            _this.trigger(_events.CAPTIONS_CHANGED, {
                tracks: _getCaptionsList(),
                track: index
            });
        }

        function _getCurrentCaptions() {
            return _captions.getCurrentIndex();
        }

        function _getCaptionsList() {
            return _captions.getCaptionsList();
        }

        /* Used for the InStream API */
        function _detachMedia() {
            if (_beforePlay) {
                _interruptPlay = true;
            }

            if (_environment.Features.backgroundLoading) {
                _programController.backgroundActiveMedia();
            } else {
                _programController.attached = false;
            }
        }

        function _attachMedia(position) {
            // Called after instream ends

            if (_environment.Features.backgroundLoading) {
                _programController.restoreBackgroundMedia();
            } else {
                // Set the position before attaching so that we resume at the expected time
                _programController.position = position || 0;
                _programController.attached = true;
            }

            if (typeof _actionOnAttach === 'function') {
                _actionOnAttach();
            }
        }

        function _setFullscreen(state) {
            if (!_underscore2.default.isBoolean(state)) {
                state = !_model.get('fullscreen');
            }

            _model.set('fullscreen', state);
            if (_this._instreamAdapter && _this._instreamAdapter._adModel) {
                _this._instreamAdapter._adModel.set('fullscreen', state);
            }
        }

        function _nextUp() {
            var related = _api.getPlugin('related');
            triggerAdvanceEvent(related, 'nextClick', function () {
                return related.next();
            });
        }

        function triggerAdvanceEvent(related, evt, cb) {
            if (!related) {
                return;
            }
            var nextUp = _model.get('nextUp');
            if (nextUp) {
                _this.trigger(evt, {
                    mode: nextUp.mode,
                    ui: 'nextup',
                    target: nextUp,
                    itemsShown: [nextUp],
                    feedData: nextUp.feedData
                });
            }
            if (typeof cb === 'function') {
                cb();
            }
        }

        function addProgramControllerListeners() {
            _programController.on('all', _trigger, _this).on('subtitlesTracks', function (e) {
                _captions.setSubtitlesTracks(e.tracks);
                var defaultCaptionsIndex = _captions.getCurrentIndex();

                // set the current captions if the default index isn't 0 or "Off"
                if (defaultCaptionsIndex > 0) {
                    _setCurrentCaptions(defaultCaptionsIndex);
                }
            }, _this).on(_events.MEDIA_COMPLETE, function () {
                // Insert a small delay here so that other complete handlers can execute
                _promise.resolved.then(_completeHandler);
            }, _this).on(_events.MEDIA_ERROR, _this.triggerError, _this);
        }

        function updateProgramSoundSettings() {
            _programController.mute = _model.getMute();
            _programController.volume = _model.get('volume');
        }

        /** Controller API / public methods **/
        this.load = _load;
        this.play = _play;
        this.pause = _pause;
        this.seek = _seek;
        this.stop = _stop;
        this.playlistItem = _item;
        this.playlistNext = _next;
        this.playlistPrev = _prev;
        this.setCurrentCaptions = _setCurrentCaptions;
        this.setCurrentQuality = _setCurrentQuality;
        this.setFullscreen = _setFullscreen;
        this.detachMedia = _detachMedia;
        this.attachMedia = _attachMedia;
        this.getCurrentQuality = _getCurrentQuality;
        this.getQualityLevels = _getQualityLevels;
        this.setCurrentAudioTrack = _setCurrentAudioTrack;
        this.getCurrentAudioTrack = _getCurrentAudioTrack;
        this.getAudioTracks = _getAudioTracks;
        this.getCurrentCaptions = _getCurrentCaptions;
        this.getCaptionsList = _getCaptionsList;
        this.getVisualQuality = _getVisualQuality;
        this.getConfig = _getConfig;
        this.getState = _getState;
        this.next = _nextUp;
        this.setConfig = function (newConfig) {
            (0, _setConfig2.default)(_this, newConfig);
        };
        this.setItemIndex = _setItem;

        // Program Controller passthroughs
        this.playVideo = function (playReason) {
            return _programController.playVideo(playReason);
        };
        this.stopVideo = function () {
            return _programController.stopVideo();
        };
        this.castVideo = function (castProvider, item) {
            return _programController.castVideo(castProvider, item);
        };
        this.stopCast = function () {
            return _programController.stopCast();
        };
        this.backgroundActiveMedia = function () {
            return _programController.backgroundActiveMedia();
        };
        this.restoreBackgroundMedia = function () {
            return _programController.restoreBackgroundMedia();
        };
        this.preloadNextItem = function () {
            if (_programController.backgroundMedia) {
                // Instruct the background media to preload if it's already been loaded
                _programController.preloadVideo();
            }
        };
        this.isBeforeComplete = function () {
            return _programController.beforeComplete;
        };

        // Model passthroughs
        this.setVolume = function (volume) {
            _model.setVolume(volume);
            updateProgramSoundSettings();
        };
        this.setMute = function (mute) {
            _model.setMute(mute);
            updateProgramSoundSettings();
        };
        this.setPlaybackRate = function (playbackRate) {
            _model.setPlaybackRate(playbackRate);
        };
        this.getProvider = function () {
            return _model.get('provider');
        };
        this.getWidth = function () {
            return _model.get('containerWidth');
        };
        this.getHeight = function () {
            return _model.get('containerHeight');
        };
        this.getItemQoe = function () {
            return _model._qoeItem;
        };
        this.addButton = function (img, tooltip, callback, id, btnClass) {
            var customButtons = _model.get('customButtons') || [];
            var replaced = false;
            var newButton = {
                img: img,
                tooltip: tooltip,
                callback: callback,
                id: id,
                btnClass: btnClass
            };

            customButtons = customButtons.reduce(function (buttons, button) {
                if (button.id === id) {
                    replaced = true;
                    buttons.push(newButton);
                } else {
                    buttons.push(button);
                }
                return buttons;
            }, []);

            if (!replaced) {
                customButtons.unshift(newButton);
            }

            _model.set('customButtons', customButtons);
        };
        this.removeButton = function (id) {
            var customButtons = _underscore2.default.filter(_model.get('customButtons'), function (button) {
                return button.id !== id;
            });

            _model.set('customButtons', customButtons);
        };

        // View passthroughs
        this.resize = _view.resize;
        this.getSafeRegion = _view.getSafeRegion;
        this.setCaptions = _view.setCaptions;

        this.checkBeforePlay = function () {
            return _beforePlay;
        };

        this.setControls = function (mode) {
            if (!_underscore2.default.isBoolean(mode)) {
                mode = !_model.get('controls');
            }
            _model.set('controls', mode);
            _programController.controls = mode;
        };

        this.setCues = function (cues) {
            _model.set('cues', cues);
        };

        this.updatePlaylist = function (playlist, feedData) {
            try {
                var filteredPlaylist = (0, _playlist.filterPlaylist)(playlist, _model, feedData);

                // Throw exception if playlist is empty
                (0, _playlist.validatePlaylist)(filteredPlaylist);

                _model.set('feedData', feedData);
                _model.set('playlist', filteredPlaylist);
            } catch (error) {
                return _promise2.default.reject(error);
            }
            return _setItem(_model.get('item'));
        };

        this.playerDestroy = function () {
            this.trigger('destroyPlugin', {});
            this.off();
            this.stop();
            (0, _coreShim.showView)(this, this.originalContainer);
            if (_view) {
                _view.destroy();
            }
            if (_model) {
                _model.destroy();
            }
            if (apiQueue) {
                apiQueue.destroy();
            }
            if (_captions) {
                _captions.destroy();
            }
            if (_programController) {
                _programController.destroy();
            }
            this.instreamDestroy();
        };

        this.isBeforePlay = this.checkBeforePlay;

        this.createInstream = function () {
            this.instreamDestroy();
            this._instreamAdapter = new _instreamAdapter2.default(this, _model, _view, mediaPool);
            return this._instreamAdapter;
        };

        this.skipAd = function () {
            if (this._instreamAdapter) {
                this._instreamAdapter.skipAd();
            }
        };

        this.instreamDestroy = function () {
            if (_this._instreamAdapter) {
                _this._instreamAdapter.destroy();
                _this._instreamAdapter = null;
            }
        };

        // Setup ApiQueueDecorator after instance methods have been assigned
        var apiQueue = new _apiQueue2.default(this, ['play', 'pause', 'setCurrentAudioTrack', 'setCurrentCaptions', 'setCurrentQuality', 'setFullscreen'], function () {
            return !_this3._model.get('itemReady') || eventsReadyQueue;
        });
        // Add commands from CoreLoader to queue
        apiQueue.queue.push.apply(apiQueue.queue, commandQueue);

        _view.setup();
    },
    get: function get(property) {
        if (property in _playerModel.INITIAL_MEDIA_STATE) {
            var mediaModel = this._model.get('mediaModel');
            if (mediaModel) {
                return mediaModel.get(property);
            }
            return _playerModel.INITIAL_MEDIA_STATE[property];
        }
        return this._model.get(property);
    },
    getContainer: function getContainer() {
        return this.currentContainer || this.originalContainer;
    },
    getMute: function getMute() {
        return this._model.getMute();
    },
    triggerError: function triggerError(evt) {
        this._model.set('errorEvent', evt);
        this._model.set('state', _events.STATE_ERROR);
        this._model.once('change:state', function () {
            this._model.set('errorEvent', undefined);
        }, this);

        this.trigger(_events.ERROR, evt);
    }
});

function _inInteraction(event) {
    return event && /^(?:mouse|pointer|touch|gesture|click|key)/.test(event.type);
}

exports.default = Controller;

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/*!*********************************************************************!*\
  !*** ./node_modules/intersection-observer/intersection-observer.js ***!
  \*********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
 *
 *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 */

(function(window, document) {
'use strict';


// Exits early if all IntersectionObserver and IntersectionObserverEntry
// features are natively supported.
if ('IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype) {

  // Minimal polyfill for Edge 15's lack of `isIntersecting`
  // See: https://github.com/w3c/IntersectionObserver/issues/211
  if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
    Object.defineProperty(window.IntersectionObserverEntry.prototype,
      'isIntersecting', {
      get: function () {
        return this.intersectionRatio > 0;
      }
    });
  }
  return;
}


/**
 * An IntersectionObserver registry. This registry exists to hold a strong
 * reference to IntersectionObserver instances currently observering a target
 * element. Without this registry, instances without another reference may be
 * garbage collected.
 */
var registry = [];


/**
 * Creates the global IntersectionObserverEntry constructor.
 * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry
 * @param {Object} entry A dictionary of instance properties.
 * @constructor
 */
function IntersectionObserverEntry(entry) {
  this.time = entry.time;
  this.target = entry.target;
  this.rootBounds = entry.rootBounds;
  this.boundingClientRect = entry.boundingClientRect;
  this.intersectionRect = entry.intersectionRect || getEmptyRect();
  this.isIntersecting = !!entry.intersectionRect;

  // Calculates the intersection ratio.
  var targetRect = this.boundingClientRect;
  var targetArea = targetRect.width * targetRect.height;
  var intersectionRect = this.intersectionRect;
  var intersectionArea = intersectionRect.width * intersectionRect.height;

  // Sets intersection ratio.
  if (targetArea) {
    this.intersectionRatio = intersectionArea / targetArea;
  } else {
    // If area is zero and is intersecting, sets to 1, otherwise to 0
    this.intersectionRatio = this.isIntersecting ? 1 : 0;
  }
}


/**
 * Creates the global IntersectionObserver constructor.
 * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface
 * @param {Function} callback The function to be invoked after intersection
 *     changes have queued. The function is not invoked if the queue has
 *     been emptied by calling the `takeRecords` method.
 * @param {Object=} opt_options Optional configuration options.
 * @constructor
 */
function IntersectionObserver(callback, opt_options) {

  var options = opt_options || {};

  if (typeof callback != 'function') {
    throw new Error('callback must be a function');
  }

  if (options.root && options.root.nodeType != 1) {
    throw new Error('root must be an Element');
  }

  // Binds and throttles `this._checkForIntersections`.
  this._checkForIntersections = throttle(
      this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT);

  // Private properties.
  this._callback = callback;
  this._observationTargets = [];
  this._queuedEntries = [];
  this._rootMarginValues = this._parseRootMargin(options.rootMargin);

  // Public properties.
  this.thresholds = this._initThresholds(options.threshold);
  this.root = options.root || null;
  this.rootMargin = this._rootMarginValues.map(function(margin) {
    return margin.value + margin.unit;
  }).join(' ');
}


/**
 * The minimum interval within which the document will be checked for
 * intersection changes.
 */
IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;


/**
 * The frequency in which the polyfill polls for intersection changes.
 * this can be updated on a per instance basis and must be set prior to
 * calling `observe` on the first target.
 */
IntersectionObserver.prototype.POLL_INTERVAL = null;

/**
 * Use a mutation observer on the root element
 * to detect intersection changes.
 */
IntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;


/**
 * Starts observing a target element for intersection changes based on
 * the thresholds values.
 * @param {Element} target The DOM element to observe.
 */
IntersectionObserver.prototype.observe = function(target) {
  var isTargetAlreadyObserved = this._observationTargets.some(function(item) {
    return item.element == target;
  });

  if (isTargetAlreadyObserved) {
    return;
  }

  if (!(target && target.nodeType == 1)) {
    throw new Error('target must be an Element');
  }

  this._registerInstance();
  this._observationTargets.push({element: target, entry: null});
  this._monitorIntersections();
  this._checkForIntersections();
};


/**
 * Stops observing a target element for intersection changes.
 * @param {Element} target The DOM element to observe.
 */
IntersectionObserver.prototype.unobserve = function(target) {
  this._observationTargets =
      this._observationTargets.filter(function(item) {

    return item.element != target;
  });
  if (!this._observationTargets.length) {
    this._unmonitorIntersections();
    this._unregisterInstance();
  }
};


/**
 * Stops observing all target elements for intersection changes.
 */
IntersectionObserver.prototype.disconnect = function() {
  this._observationTargets = [];
  this._unmonitorIntersections();
  this._unregisterInstance();
};


/**
 * Returns any queue entries that have not yet been reported to the
 * callback and clears the queue. This can be used in conjunction with the
 * callback to obtain the absolute most up-to-date intersection information.
 * @return {Array} The currently queued entries.
 */
IntersectionObserver.prototype.takeRecords = function() {
  var records = this._queuedEntries.slice();
  this._queuedEntries = [];
  return records;
};


/**
 * Accepts the threshold value from the user configuration object and
 * returns a sorted array of unique threshold values. If a value is not
 * between 0 and 1 and error is thrown.
 * @private
 * @param {Array|number=} opt_threshold An optional threshold value or
 *     a list of threshold values, defaulting to [0].
 * @return {Array} A sorted list of unique and valid threshold values.
 */
IntersectionObserver.prototype._initThresholds = function(opt_threshold) {
  var threshold = opt_threshold || [0];
  if (!Array.isArray(threshold)) threshold = [threshold];

  return threshold.sort().filter(function(t, i, a) {
    if (typeof t != 'number' || isNaN(t) || t < 0 || t > 1) {
      throw new Error('threshold must be a number between 0 and 1 inclusively');
    }
    return t !== a[i - 1];
  });
};


/**
 * Accepts the rootMargin value from the user configuration object
 * and returns an array of the four margin values as an object containing
 * the value and unit properties. If any of the values are not properly
 * formatted or use a unit other than px or %, and error is thrown.
 * @private
 * @param {string=} opt_rootMargin An optional rootMargin value,
 *     defaulting to '0px'.
 * @return {Array<Object>} An array of margin objects with the keys
 *     value and unit.
 */
IntersectionObserver.prototype._parseRootMargin = function(opt_rootMargin) {
  var marginString = opt_rootMargin || '0px';
  var margins = marginString.split(/\s+/).map(function(margin) {
    var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
    if (!parts) {
      throw new Error('rootMargin must be specified in pixels or percent');
    }
    return {value: parseFloat(parts[1]), unit: parts[2]};
  });

  // Handles shorthand.
  margins[1] = margins[1] || margins[0];
  margins[2] = margins[2] || margins[0];
  margins[3] = margins[3] || margins[1];

  return margins;
};


/**
 * Starts polling for intersection changes if the polling is not already
 * happening, and if the page's visibilty state is visible.
 * @private
 */
IntersectionObserver.prototype._monitorIntersections = function() {
  if (!this._monitoringIntersections) {
    this._monitoringIntersections = true;

    // If a poll interval is set, use polling instead of listening to
    // resize and scroll events or DOM mutations.
    if (this.POLL_INTERVAL) {
      this._monitoringInterval = setInterval(
          this._checkForIntersections, this.POLL_INTERVAL);
    }
    else {
      addEvent(window, 'resize', this._checkForIntersections, true);
      addEvent(document, 'scroll', this._checkForIntersections, true);

      if (this.USE_MUTATION_OBSERVER && 'MutationObserver' in window) {
        this._domObserver = new MutationObserver(this._checkForIntersections);
        this._domObserver.observe(document, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        });
      }
    }
  }
};


/**
 * Stops polling for intersection changes.
 * @private
 */
IntersectionObserver.prototype._unmonitorIntersections = function() {
  if (this._monitoringIntersections) {
    this._monitoringIntersections = false;

    clearInterval(this._monitoringInterval);
    this._monitoringInterval = null;

    removeEvent(window, 'resize', this._checkForIntersections, true);
    removeEvent(document, 'scroll', this._checkForIntersections, true);

    if (this._domObserver) {
      this._domObserver.disconnect();
      this._domObserver = null;
    }
  }
};


/**
 * Scans each observation target for intersection changes and adds them
 * to the internal entries queue. If new entries are found, it
 * schedules the callback to be invoked.
 * @private
 */
IntersectionObserver.prototype._checkForIntersections = function() {
  var rootIsInDom = this._rootIsInDom();
  var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();

  this._observationTargets.forEach(function(item) {
    var target = item.element;
    var targetRect = getBoundingClientRect(target);
    var rootContainsTarget = this._rootContainsTarget(target);
    var oldEntry = item.entry;
    var intersectionRect = rootIsInDom && rootContainsTarget &&
        this._computeTargetAndRootIntersection(target, rootRect);

    var newEntry = item.entry = new IntersectionObserverEntry({
      time: now(),
      target: target,
      boundingClientRect: targetRect,
      rootBounds: rootRect,
      intersectionRect: intersectionRect
    });

    if (!oldEntry) {
      this._queuedEntries.push(newEntry);
    } else if (rootIsInDom && rootContainsTarget) {
      // If the new entry intersection ratio has crossed any of the
      // thresholds, add a new entry.
      if (this._hasCrossedThreshold(oldEntry, newEntry)) {
        this._queuedEntries.push(newEntry);
      }
    } else {
      // If the root is not in the DOM or target is not contained within
      // root but the previous entry for this target had an intersection,
      // add a new record indicating removal.
      if (oldEntry && oldEntry.isIntersecting) {
        this._queuedEntries.push(newEntry);
      }
    }
  }, this);

  if (this._queuedEntries.length) {
    this._callback(this.takeRecords(), this);
  }
};


/**
 * Accepts a target and root rect computes the intersection between then
 * following the algorithm in the spec.
 * TODO(philipwalton): at this time clip-path is not considered.
 * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo
 * @param {Element} target The target DOM element
 * @param {Object} rootRect The bounding rect of the root after being
 *     expanded by the rootMargin value.
 * @return {?Object} The final intersection rect object or undefined if no
 *     intersection is found.
 * @private
 */
IntersectionObserver.prototype._computeTargetAndRootIntersection =
    function(target, rootRect) {

  // If the element isn't displayed, an intersection can't happen.
  if (window.getComputedStyle(target).display == 'none') return;

  var targetRect = getBoundingClientRect(target);
  var intersectionRect = targetRect;
  var parent = getParentNode(target);
  var atRoot = false;

  while (!atRoot) {
    var parentRect = null;
    var parentComputedStyle = parent.nodeType == 1 ?
        window.getComputedStyle(parent) : {};

    // If the parent isn't displayed, an intersection can't happen.
    if (parentComputedStyle.display == 'none') return;

    if (parent == this.root || parent == document) {
      atRoot = true;
      parentRect = rootRect;
    } else {
      // If the element has a non-visible overflow, and it's not the <body>
      // or <html> element, update the intersection rect.
      // Note: <body> and <html> cannot be clipped to a rect that's not also
      // the document rect, so no need to compute a new intersection.
      if (parent != document.body &&
          parent != document.documentElement &&
          parentComputedStyle.overflow != 'visible') {
        parentRect = getBoundingClientRect(parent);
      }
    }

    // If either of the above conditionals set a new parentRect,
    // calculate new intersection data.
    if (parentRect) {
      intersectionRect = computeRectIntersection(parentRect, intersectionRect);

      if (!intersectionRect) break;
    }
    parent = getParentNode(parent);
  }
  return intersectionRect;
};


/**
 * Returns the root rect after being expanded by the rootMargin value.
 * @return {Object} The expanded root rect.
 * @private
 */
IntersectionObserver.prototype._getRootRect = function() {
  var rootRect;
  if (this.root) {
    rootRect = getBoundingClientRect(this.root);
  } else {
    // Use <html>/<body> instead of window since scroll bars affect size.
    var html = document.documentElement;
    var body = document.body;
    rootRect = {
      top: 0,
      left: 0,
      right: html.clientWidth || body.clientWidth,
      width: html.clientWidth || body.clientWidth,
      bottom: html.clientHeight || body.clientHeight,
      height: html.clientHeight || body.clientHeight
    };
  }
  return this._expandRectByRootMargin(rootRect);
};


/**
 * Accepts a rect and expands it by the rootMargin value.
 * @param {Object} rect The rect object to expand.
 * @return {Object} The expanded rect.
 * @private
 */
IntersectionObserver.prototype._expandRectByRootMargin = function(rect) {
  var margins = this._rootMarginValues.map(function(margin, i) {
    return margin.unit == 'px' ? margin.value :
        margin.value * (i % 2 ? rect.width : rect.height) / 100;
  });
  var newRect = {
    top: rect.top - margins[0],
    right: rect.right + margins[1],
    bottom: rect.bottom + margins[2],
    left: rect.left - margins[3]
  };
  newRect.width = newRect.right - newRect.left;
  newRect.height = newRect.bottom - newRect.top;

  return newRect;
};


/**
 * Accepts an old and new entry and returns true if at least one of the
 * threshold values has been crossed.
 * @param {?IntersectionObserverEntry} oldEntry The previous entry for a
 *    particular target element or null if no previous entry exists.
 * @param {IntersectionObserverEntry} newEntry The current entry for a
 *    particular target element.
 * @return {boolean} Returns true if a any threshold has been crossed.
 * @private
 */
IntersectionObserver.prototype._hasCrossedThreshold =
    function(oldEntry, newEntry) {

  // To make comparing easier, an entry that has a ratio of 0
  // but does not actually intersect is given a value of -1
  var oldRatio = oldEntry && oldEntry.isIntersecting ?
      oldEntry.intersectionRatio || 0 : -1;
  var newRatio = newEntry.isIntersecting ?
      newEntry.intersectionRatio || 0 : -1;

  // Ignore unchanged ratios
  if (oldRatio === newRatio) return;

  for (var i = 0; i < this.thresholds.length; i++) {
    var threshold = this.thresholds[i];

    // Return true if an entry matches a threshold or if the new ratio
    // and the old ratio are on the opposite sides of a threshold.
    if (threshold == oldRatio || threshold == newRatio ||
        threshold < oldRatio !== threshold < newRatio) {
      return true;
    }
  }
};


/**
 * Returns whether or not the root element is an element and is in the DOM.
 * @return {boolean} True if the root element is an element and is in the DOM.
 * @private
 */
IntersectionObserver.prototype._rootIsInDom = function() {
  return !this.root || containsDeep(document, this.root);
};


/**
 * Returns whether or not the target element is a child of root.
 * @param {Element} target The target element to check.
 * @return {boolean} True if the target element is a child of root.
 * @private
 */
IntersectionObserver.prototype._rootContainsTarget = function(target) {
  return containsDeep(this.root || document, target);
};


/**
 * Adds the instance to the global IntersectionObserver registry if it isn't
 * already present.
 * @private
 */
IntersectionObserver.prototype._registerInstance = function() {
  if (registry.indexOf(this) < 0) {
    registry.push(this);
  }
};


/**
 * Removes the instance from the global IntersectionObserver registry.
 * @private
 */
IntersectionObserver.prototype._unregisterInstance = function() {
  var index = registry.indexOf(this);
  if (index != -1) registry.splice(index, 1);
};


/**
 * Returns the result of the performance.now() method or null in browsers
 * that don't support the API.
 * @return {number} The elapsed time since the page was requested.
 */
function now() {
  return window.performance && performance.now && performance.now();
}


/**
 * Throttles a function and delays its executiong, so it's only called at most
 * once within a given time period.
 * @param {Function} fn The function to throttle.
 * @param {number} timeout The amount of time that must pass before the
 *     function can be called again.
 * @return {Function} The throttled function.
 */
function throttle(fn, timeout) {
  var timer = null;
  return function () {
    if (!timer) {
      timer = setTimeout(function() {
        fn();
        timer = null;
      }, timeout);
    }
  };
}


/**
 * Adds an event handler to a DOM node ensuring cross-browser compatibility.
 * @param {Node} node The DOM node to add the event handler to.
 * @param {string} event The event name.
 * @param {Function} fn The event handler to add.
 * @param {boolean} opt_useCapture Optionally adds the even to the capture
 *     phase. Note: this only works in modern browsers.
 */
function addEvent(node, event, fn, opt_useCapture) {
  if (typeof node.addEventListener == 'function') {
    node.addEventListener(event, fn, opt_useCapture || false);
  }
  else if (typeof node.attachEvent == 'function') {
    node.attachEvent('on' + event, fn);
  }
}


/**
 * Removes a previously added event handler from a DOM node.
 * @param {Node} node The DOM node to remove the event handler from.
 * @param {string} event The event name.
 * @param {Function} fn The event handler to remove.
 * @param {boolean} opt_useCapture If the event handler was added with this
 *     flag set to true, it should be set to true here in order to remove it.
 */
function removeEvent(node, event, fn, opt_useCapture) {
  if (typeof node.removeEventListener == 'function') {
    node.removeEventListener(event, fn, opt_useCapture || false);
  }
  else if (typeof node.detatchEvent == 'function') {
    node.detatchEvent('on' + event, fn);
  }
}


/**
 * Returns the intersection between two rect objects.
 * @param {Object} rect1 The first rect.
 * @param {Object} rect2 The second rect.
 * @return {?Object} The intersection rect or undefined if no intersection
 *     is found.
 */
function computeRectIntersection(rect1, rect2) {
  var top = Math.max(rect1.top, rect2.top);
  var bottom = Math.min(rect1.bottom, rect2.bottom);
  var left = Math.max(rect1.left, rect2.left);
  var right = Math.min(rect1.right, rect2.right);
  var width = right - left;
  var height = bottom - top;

  return (width >= 0 && height >= 0) && {
    top: top,
    bottom: bottom,
    left: left,
    right: right,
    width: width,
    height: height
  };
}


/**
 * Shims the native getBoundingClientRect for compatibility with older IE.
 * @param {Element} el The element whose bounding rect to get.
 * @return {Object} The (possibly shimmed) rect of the element.
 */
function getBoundingClientRect(el) {
  var rect;

  try {
    rect = el.getBoundingClientRect();
  } catch (err) {
    // Ignore Windows 7 IE11 "Unspecified error"
    // https://github.com/w3c/IntersectionObserver/pull/205
  }

  if (!rect) return getEmptyRect();

  // Older IE
  if (!(rect.width && rect.height)) {
    rect = {
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      left: rect.left,
      width: rect.right - rect.left,
      height: rect.bottom - rect.top
    };
  }
  return rect;
}


/**
 * Returns an empty rect object. An empty rect is returned when an element
 * is not in the DOM.
 * @return {Object} The empty rect.
 */
function getEmptyRect() {
  return {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
    height: 0
  };
}

/**
 * Checks to see if a parent element contains a child elemnt (including inside
 * shadow DOM).
 * @param {Node} parent The parent element.
 * @param {Node} child The child element.
 * @return {boolean} True if the parent node contains the child node.
 */
function containsDeep(parent, child) {
  var node = child;
  while (node) {
    if (node == parent) return true;

    node = getParentNode(node);
  }
  return false;
}


/**
 * Gets the parent node of an element or its host element if the parent node
 * is a shadow root.
 * @param {Node} node The node whose parent to get.
 * @return {Node|null} The parent node or null if no parent exists.
 */
function getParentNode(node) {
  var parent = node.parentNode;

  if (parent && parent.nodeType == 11 && parent.host) {
    // If the parent is a shadow root, return the host element.
    return parent.host;
  }
  return parent;
}


// Exposes the constructors globally.
window.IntersectionObserver = IntersectionObserver;
window.IntersectionObserverEntry = IntersectionObserverEntry;

}(window, document));


/***/ }),
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
/* 79 */
/*!************************************!*\
  !*** ./src/js/utils/cancelable.js ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = cancelable;

var _promise = __webpack_require__(/*! polyfills/promise */ 4);

function cancelable(callback) {
    var _cancelled = false;

    return {
        async: function async() {
            var _this = this;

            var args = arguments;
            return _promise.resolved.then(function () {
                if (_cancelled) {
                    return;
                }
                return callback.apply(_this, args);
            });
        },
        cancel: function cancel() {
            _cancelled = true;
        },
        cancelled: function cancelled() {
            return _cancelled;
        }
    };
}

/***/ }),
/* 80 */
/*!************************************!*\
  !*** ./src/js/controller/model.js ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MediaModel = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _environment = __webpack_require__(/*! environment/environment */ 11);

var _simplemodel = __webpack_require__(/*! model/simplemodel */ 37);

var _simplemodel2 = _interopRequireDefault(_simplemodel);

var _playerModel = __webpack_require__(/*! model/player-model */ 38);

var _events = __webpack_require__(/*! events/events */ 5);

var _underscore = __webpack_require__(/*! utils/underscore */ 0);

var _underscore2 = _interopRequireDefault(_underscore);

var _strings = __webpack_require__(/*! utils/strings */ 1);

var _providers = __webpack_require__(/*! providers/providers */ 27);

var _providers2 = _interopRequireDefault(_providers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Represents the state of the player
var Model = function Model() {
    var _this = this;
    var providers = void 0;
    var _provider = void 0;
    this.mediaModel = new MediaModel();

    this.set('attached', true);
    this.set('mediaModel', this.mediaModel);

    this.setup = function (config) {
        _extends(this.attributes, config, _playerModel.INITIAL_PLAYER_STATE);
        providers = new _providers2.default(this.getConfiguration());
        this.setAutoStart();
        return this;
    };

    this.getConfiguration = function () {
        var config = this.clone();
        var mediaModelAttributes = config.mediaModel.attributes;
        Object.keys(_playerModel.INITIAL_MEDIA_STATE).forEach(function (key) {
            config[key] = mediaModelAttributes[key];
        });
        delete config.instream;
        delete config.mediaModel;
        return config;
    };

    this.persistQualityLevel = function (quality, levels) {
        var currentLevel = levels[quality] || {};
        var label = currentLevel.label;
        this.set('qualityLabel', label);
    };

    this.setActiveItem = function (index) {
        var item = this.get('playlist')[index];
        this.resetItem(item);
        this.attributes.playlistItem = null;
        this.set('item', index);
        this.set('minDvrWindow', item.minDvrWindow);
        this.set('playlistItem', item);
    };

    this.setMediaModel = function (mediaModel) {
        if (this.mediaModel && this.mediaModel !== mediaModel) {
            this.mediaModel.off();
        }

        mediaModel = mediaModel || new MediaModel();
        this.mediaModel = mediaModel;
        this.set('mediaModel', mediaModel);
        syncPlayerWithMediaModel(mediaModel);
    };

    this.destroy = function () {
        this.attributes._destroyed = true;
        this.off();
        if (_provider) {
            _provider.off(null, null, this);
            _provider.destroy();
        }
    };

    this.getVideo = function () {
        return _provider;
    };

    this.setFullscreen = function (state) {
        state = !!state;
        if (state !== _this.get('fullscreen')) {
            _this.set('fullscreen', state);
        }
    };

    this.getProviders = function () {
        return providers;
    };

    this.setVolume = function (volume) {
        volume = Math.round(volume);
        this.set('volume', volume);
        var mute = volume === 0;
        if (mute !== this.getMute()) {
            this.setMute(mute);
        }
    };

    this.getMute = function () {
        return this.get('autostartMuted') || this.get('mute');
    };

    this.setMute = function (mute) {
        if (mute === undefined) {
            mute = !this.getMute();
        }
        this.set('mute', mute);
        if (!mute) {
            var volume = Math.max(10, this.get('volume'));
            this.set('autostartMuted', false);
            this.setVolume(volume);
        }
    };

    this.setStreamType = function (streamType) {
        this.set('streamType', streamType);
        if (streamType === 'LIVE') {
            this.setPlaybackRate(1);
        }
    };

    this.setProvider = function (provider) {
        _provider = provider;
        syncProviderProperties(this, provider);
    };

    this.resetProvider = function () {
        _provider = null;
        this.set('provider', undefined);
    };

    this.setPlaybackRate = function (playbackRate) {
        if (!_underscore2.default.isNumber(playbackRate)) {
            return;
        }

        // Clamp the rate between 0.25x and 4x
        playbackRate = Math.max(Math.min(playbackRate, 4), 0.25);

        if (this.get('streamType') === 'LIVE') {
            playbackRate = 1;
        }

        this.set('defaultPlaybackRate', playbackRate);

        if (_provider && _provider.setPlaybackRate) {
            _provider.setPlaybackRate(playbackRate);
        }
    };

    this.persistCaptionsTrack = function () {
        var track = this.get('captionsTrack');

        if (track) {
            // update preference if an option was selected
            this.set('captionLabel', track.name);
        } else {
            this.set('captionLabel', 'Off');
        }
    };

    this.setVideoSubtitleTrack = function (trackIndex, tracks) {
        this.set('captionsIndex', trackIndex);
        /*
         * Tracks could have changed even if the index hasn't.
         * Need to ensure track has data for captionsrenderer.
         */
        if (trackIndex && tracks && trackIndex <= tracks.length && tracks[trackIndex - 1].data) {
            this.set('captionsTrack', tracks[trackIndex - 1]);
        }
    };

    this.persistVideoSubtitleTrack = function (trackIndex, tracks) {
        this.setVideoSubtitleTrack(trackIndex, tracks);
        this.persistCaptionsTrack();
    };

    // Mobile players always wait to become viewable.
    // Desktop players must have autostart set to viewable
    this.setAutoStart = function (autoStart) {
        if (autoStart !== undefined) {
            this.set('autostart', autoStart);
        }

        var autoStartOnMobile = _environment.OS.mobile && this.get('autostart');
        this.set('playOnViewable', autoStartOnMobile || this.get('autostart') === 'viewable');
    };

    this.resetItem = function (item) {
        var position = item ? (0, _strings.seconds)(item.starttime) : 0;
        var duration = item ? (0, _strings.seconds)(item.duration) : 0;
        var mediaModel = this.mediaModel;
        this.set('playRejected', false);
        this.attributes.itemMeta = {};
        mediaModel.set('position', position);
        mediaModel.set('currentTime', 0);
        mediaModel.set('duration', duration);
    };
};

var syncProviderProperties = function syncProviderProperties(model, provider) {
    model.set('provider', provider.getName());
    if (model.get('instreamMode') === true) {
        provider.instreamMode = true;
    }

    if (provider.getName().name.indexOf('flash') === -1) {
        model.set('flashThrottle', undefined);
        model.set('flashBlocked', false);
    }

    // Attempt setting the playback rate to be the user selected value
    model.setPlaybackRate(model.get('defaultPlaybackRate'));

    // Set playbackRate because provider support for playbackRate may have changed and not sent an update
    model.set('supportsPlaybackRate', provider.supportsPlaybackRate);
    model.set('playbackRate', provider.getPlaybackRate());
    model.set('renderCaptionsNatively', provider.renderNatively);
};

function syncPlayerWithMediaModel(mediaModel) {
    // Sync player state with mediaModel state
    var mediaState = mediaModel.get('mediaState');
    mediaModel.trigger('change:mediaState', mediaModel, mediaState, mediaState);
}

// Represents the state of the provider/media element
var MediaModel = Model.MediaModel = function () {
    this.attributes = {
        mediaState: _events.STATE_IDLE
    };
};

_extends(MediaModel.prototype, _simplemodel2.default, {
    srcReset: function srcReset() {
        _extends(this.attributes, {
            setup: false,
            started: false,
            preloaded: false,
            visualQuality: null,
            buffer: 0,
            currentTime: 0
        });
    }
});

_extends(Model.prototype, _simplemodel2.default);

exports.MediaModel = MediaModel;
exports.default = Model;

/***/ }),
/* 81 */
/*!*************************************************!*\
  !*** ./src/js/utils/request-animation-frame.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var requestAnimationFrame = exports.requestAnimationFrame = window.requestAnimationFrame || function (callback) {
    return setTimeout(callback, 17);
};

var cancelAnimationFrame = exports.cancelAnimationFrame = window.cancelAnimationFrame || clearTimeout;

/***/ }),
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
/* 88 */
/*!**********************************************!*\
  !*** ./src/js/program/program-controller.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _providers = __webpack_require__(/*! providers/providers */ 27);

var _providers2 = _interopRequireDefault(_providers);

var _mediaController = __webpack_require__(/*! program/media-controller */ 152);

var _mediaController2 = _interopRequireDefault(_mediaController);

var _promise = __webpack_require__(/*! polyfills/promise */ 4);

var _promise2 = _interopRequireDefault(_promise);

var _cancelable = __webpack_require__(/*! utils/cancelable */ 79);

var _cancelable2 = _interopRequireDefault(_cancelable);

var _programListeners = __webpack_require__(/*! program/program-listeners */ 90);

var _eventable = __webpack_require__(/*! utils/eventable */ 89);

var _eventable2 = _interopRequireDefault(_eventable);

var _backgroundMedia = __webpack_require__(/*! program/background-media */ 153);

var _backgroundMedia2 = _interopRequireDefault(_backgroundMedia);

var _events = __webpack_require__(/*! events/events */ 5);

var _environment = __webpack_require__(/*! ../environment/environment */ 11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** @private Do not include in JSDocs */

var ProgramController = function (_Eventable) {
    _inherits(ProgramController, _Eventable);

    /**
     * ProgramController constructor
     * @param {Model} model - The player's model
     * @param {MediaElementPool} mediaPool - The player's media element pool
     */
    function ProgramController(model, mediaPool) {
        _classCallCheck(this, ProgramController);

        var _this = _possibleConstructorReturn(this, (ProgramController.__proto__ || Object.getPrototypeOf(ProgramController)).call(this));

        _this.adPlaying = false;
        _this.background = (0, _backgroundMedia2.default)();
        _this.mediaPool = mediaPool;
        _this.mediaController = null;
        _this.mediaControllerListener = (0, _programListeners.MediaControllerListener)(model, _this);
        _this.model = model;
        _this.providers = new _providers2.default(model.getConfiguration());
        _this.loadPromise = _promise.resolved;

        if (!_environment.Features.backgroundLoading) {
            // If background loading is not supported, set the shared media element
            model.set('mediaElement', _this.mediaPool.getPrimedElement());
        }
        return _this;
    }

    /**
     * Activates a playlist item, loading it into the foreground.
     * This method will either load a new Provider or reuse the active one.
     * @param {number} index - The playlist index of the item
     * @returns {Promise} The Provider promise. Resolves with the active Media Controller
     * @memberOf ProgramController
     */


    _createClass(ProgramController, [{
        key: 'setActiveItem',
        value: function setActiveItem(index) {
            var _this2 = this;

            var background = this.background,
                mediaController = this.mediaController,
                model = this.model;

            var item = model.get('playlist')[index];

            model.attributes.itemReady = false;
            model.setActiveItem(index);
            var source = getSource(item);
            if (!source) {
                return _promise2.default.reject(new Error('No media'));
            }

            // Activate the background media if it's loading the item we want to play
            if (background.isNext(item)) {
                // First destroy the active item so that the BGL provider can enter the foreground
                this._destroyActiveMedia();
                // Attach the BGL provider into the load/play chain
                this.loadPromise = this._activateBackgroundMedia();
                return this.loadPromise;
            }
            // Loading a new item invalidates all background loading media
            this._destroyBackgroundMedia();

            if (mediaController) {
                var casting = model.get('castActive');
                if (casting || this._providerCanPlay(mediaController.provider, source)) {
                    // We can synchronously reuse the current mediaController
                    this.loadPromise = _promise2.default.resolve(mediaController);
                    // Reinitialize the mediaController with the new item, allowing a new playback session
                    mediaController.activeItem = item;
                    this._setActiveMedia(mediaController);
                    return this.loadPromise;
                }

                // If we can't play the source with the current provider, reset the current one and
                // prime the next tag within the gesture
                this._destroyActiveMedia();
            }

            var mediaModelContext = model.mediaModel;
            this.loadPromise = this._setupMediaController(source).then(function (nextMediaController) {
                // Don't do anything if we've tried to load another provider while this promise was resolving
                // We check using the mediaModel because it is unique per item, and per instance of that item
                if (mediaModelContext === model.mediaModel) {
                    nextMediaController.activeItem = item;
                    _this2._setActiveMedia(nextMediaController);
                    return nextMediaController;
                }
            }).catch(function (err) {
                _this2._destroyActiveMedia();
                throw err;
            });
            return this.loadPromise;
        }

        /**
         * Plays the active item.
         * Will wait for the Provider promise to resolve before any play attempt.
         * @param {string} playReason - The reason playback is beginning.
         * @returns {Promise} The Play promise. Resolves when playback begins; rejects upon failure.
         */

    }, {
        key: 'playVideo',
        value: function playVideo(playReason) {
            var _this3 = this;

            var mediaController = this.mediaController,
                model = this.model;

            var item = model.get('playlistItem');
            var playPromise = void 0;

            if (!item) {
                return _promise2.default.reject(new Error('No media'));
            }

            if (!playReason) {
                playReason = model.get('playReason');
            }

            // Start playback immediately if we have already loaded a mediaController
            if (mediaController) {
                playPromise = mediaController.play(playReason);
            } else {
                // Wait for the provider to load before starting initial playback
                model.set(_events.PLAYER_STATE, _events.STATE_BUFFERING);

                // Make the subsequent promise cancelable so that we can avoid playback when no longer wanted
                var thenPlayPromise = (0, _cancelable2.default)(function (nextMediaController) {
                    if (_this3.mediaController && _this3.mediaController.mediaModel === nextMediaController.mediaModel) {
                        return nextMediaController.play(playReason);
                    }
                    throw new Error('Playback cancelled.');
                });

                playPromise = this.loadPromise.catch(function (error) {
                    thenPlayPromise.cancel();
                    // Required provider was not loaded
                    model.trigger(_events.ERROR, {
                        message: 'Could not play video: ' + error.message,
                        error: error
                    });
                    // Fail the playPromise to trigger "playAttemptFailed"
                    throw error;
                }).then(thenPlayPromise.async);
            }

            return playPromise;
        }

        /**
         * Stops playback of the active item, and sets the player state to IDLE.
         * @returns {void}
         */

    }, {
        key: 'stopVideo',
        value: function stopVideo() {
            var mediaController = this.mediaController,
                model = this.model;


            var item = model.get('playlist')[model.get('item')];
            model.attributes.playlistItem = item;
            model.resetItem(item);

            if (mediaController) {
                mediaController.stop();
            }
        }

        /**
         * Preloads the active item, which loads and buffers some content.
         * @returns {void}
         */

    }, {
        key: 'preloadVideo',
        value: function preloadVideo() {
            var background = this.background,
                mediaController = this.mediaController;

            var media = mediaController || background.currentMedia;
            if (!media) {
                return;
            }
            media.preload();
        }

        /**
         * Pauses playback of the current video, and sets the player state to PAUSED.
         * @returns {void}
         */

    }, {
        key: 'pause',
        value: function pause() {
            var mediaController = this.mediaController;

            if (!mediaController) {
                return;
            }

            mediaController.pause();
        }

        /**
         * Casts a video. The Cast Controller will control the Cast Provider.
         * @param {CastProvider} castProvider - The playback provider instance (Casting is implemented in jwplayer-commercial).
         * @param {Item} item - The playlist Item instance to cast.
         * @returns {void}
         */

    }, {
        key: 'castVideo',
        value: function castVideo(castProvider, item) {
            var model = this.model;

            model.attributes.itemReady = false;

            var playlistItem = _extends({}, item);
            playlistItem.starttime = model.mediaModel.get('position');

            var castMediaController = new _mediaController2.default(castProvider, model);
            castMediaController.activeItem = playlistItem;
            this._setActiveMedia(castMediaController);
        }

        /**
         * Stops casting. The Player is expected to restore video playback afterwards.
         * @returns {void}
         */

    }, {
        key: 'stopCast',
        value: function stopCast() {
            var model = this.model;

            var index = model.get('item');
            var item = model.get('playlist')[index];

            item.starttime = model.mediaModel.get('position');

            this.stopVideo();
            this.setActiveItem(index);
        }

        /**
         * Places the currently active Media Controller into the background.
         * The media is still attached to a media element, but is removed from the Player's container.
         * Background media still emits events, but we stop listening to them.
         * Background media can (and will) be updated via it's API.
         * @returns {void}
         */

    }, {
        key: 'backgroundActiveMedia',
        value: function backgroundActiveMedia() {
            this.adPlaying = true;
            var background = this.background,
                mediaController = this.mediaController;

            if (!mediaController) {
                return;
            }

            // Destroy any existing background media
            if (background.currentMedia) {
                this._destroyMediaController(background.currentMedia);
            }

            mediaController.background = true;
            background.currentMedia = mediaController;
            this.mediaController = null;
        }

        /**
         * Restores the background media to the foreground.
         * Its media element is reattached to the Player container.
         * We start listening to its events again.
         * @returns {void}
         */

    }, {
        key: 'restoreBackgroundMedia',
        value: function restoreBackgroundMedia() {
            this.adPlaying = false;
            var background = this.background,
                mediaController = this.mediaController;

            var backgroundMediaController = background.currentMedia;
            if (!backgroundMediaController) {
                return;
            } else if (mediaController) {
                // An existing media controller means that we've changed the active item
                // The current background media is no longer relevant, so destroy it
                this._destroyMediaController(backgroundMediaController);
                background.currentMedia = null;
                return;
            }

            backgroundMediaController.mediaModel.attributes.mediaState = 'buffering';
            this._setActiveMedia(backgroundMediaController);
            backgroundMediaController.background = false;
            background.currentMedia = null;
        }

        /**
         * Loads the next playlist item in the background.
         * @param {Item} item - The playlist item to load.
         *
         * @returns {void}
         */

    }, {
        key: 'backgroundLoad',
        value: function backgroundLoad(item) {
            var background = this.background;

            var source = getSource(item);

            background.setNext(item, this._setupMediaController(source).then(function (nextMediaController) {
                nextMediaController.activeItem = item;
                nextMediaController.preload();
                return nextMediaController;
            }).catch(function () {
                background.clearNext();
            }));
        }

        /**
         * Primes media elements so that they can autoplay without further user gesture.
         * A primed element is required for media to load in the background.
         * This method does not prime elements who already have a source set ("safe prime").
         * @returns {void}
         */

    }, {
        key: 'primeMediaElements',
        value: function primeMediaElements() {
            this.mediaPool.prime();
        }

        /**
         * Removes all event listeners and destroys all media.
         * @returns {void}
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            this.off();
            this._destroyBackgroundMedia();
            this._destroyActiveMedia();
        }

        /**
         * Activates the provided media controller, placing it into the foreground.
         * Events fired from the media controller will be forwarded through the program controller.
         * @param {MediaController} mediaController - The media controller to activate.
         * @returns {void}
         * @private
         */

    }, {
        key: '_setActiveMedia',
        value: function _setActiveMedia(mediaController) {
            var model = this.model;
            var mediaModel = mediaController.mediaModel,
                provider = mediaController.provider;


            assignMediaContainer(model, mediaController);
            this.mediaController = mediaController;

            model.set('mediaElement', mediaController.mediaElement);
            model.setMediaModel(mediaModel);
            model.setProvider(provider);

            forwardEvents(this, mediaController);
            model.set('itemReady', true);
        }

        /**
         * Destroys the active media controller and current playback.
         * @returns {void}
         * @private
         */

    }, {
        key: '_destroyActiveMedia',
        value: function _destroyActiveMedia() {
            var mediaController = this.mediaController,
                model = this.model;

            if (!mediaController) {
                return;
            }

            mediaController.detach();
            this._destroyMediaController(mediaController);
            model.resetProvider();
            this.mediaController = null;
        }

        /**
         * Destroys all background media.
         * @returns {void}
         * @private
         */

    }, {
        key: '_destroyBackgroundMedia',
        value: function _destroyBackgroundMedia() {
            var background = this.background;

            this._destroyMediaController(background.currentMedia);
            background.currentMedia = null;
            this._destroyBackgroundLoadingMedia();
        }

        /**
         * Destroys a mediaController, and returns it's tag to the pool.
         * @param {MediaController} mediaController - The media controller to destroy and recycle.
         * @returns {void}
         * @private
         */

    }, {
        key: '_destroyMediaController',
        value: function _destroyMediaController(mediaController) {
            var mediaPool = this.mediaPool;

            if (!mediaController) {
                return;
            }
            mediaPool.recycle(mediaController.mediaElement);
            mediaController.destroy();
        }

        /**
         * Constructs a new media controller with the provider whose able to play the current source.
         * Will wait and load the provider constructor if it has not already been loaded.
         * If the required provider cannot be loaded, the subsequent promise rejection will destroy playback.
         * @param {Source} source - The playlist item Source for which a provider is needed.
         * @returns {Promise} The Provider constructor promise.
         * @private
         */

    }, {
        key: '_setupMediaController',
        value: function _setupMediaController(source) {
            var _this4 = this;

            var model = this.model,
                providers = this.providers;

            var makeMediaController = function makeMediaController(ProviderConstructor) {
                return new _mediaController2.default(new ProviderConstructor(model.get('id'), model.getConfiguration(), _this4.primedElement), model);
            };

            var _providers$choose = providers.choose(source),
                provider = _providers$choose.provider,
                name = _providers$choose.name;

            if (provider) {
                return _promise2.default.resolve(makeMediaController(provider));
            }

            return providers.load(name).then(function (ProviderConstructor) {
                return makeMediaController(ProviderConstructor);
            });
        }

        /**
         * Places the background loading media into the foreground. Will wait for the provider promise to resolve.
         * If the program controller has been placed into ads mode, the background loading media will replace the background
         * loaded media. When the ad is over, the loaded media will be placed into the foreground via _restoreBackgroundMedia().
         * This is done to avoid a race condition where we have activated the loading item, but switch to ads mode before the
         * promise resovles, resulting in two tags in the foreground (since _backgroundActiveMedia "misses" the pending promise).
         * @returns {Promise} The Provider promise. Resolves with preloaded media controller.
         * @memberOf ProgramController
         */

    }, {
        key: '_activateBackgroundMedia',
        value: function _activateBackgroundMedia() {
            var _this5 = this;

            var background = this.background,
                nextLoadPromise = this.background.nextLoadPromise;
            // Activating this item means that any media already loaded in the background will no longer be needed

            this._destroyMediaController(background.currentMedia);
            background.currentMedia = null;
            return nextLoadPromise.then(function (nextMediaController) {
                if (!nextMediaController) {
                    return;
                }
                background.clearNext();
                if (_this5.adPlaying) {
                    background.currentMedia = nextMediaController;
                } else {
                    _this5._setActiveMedia(nextMediaController);
                    nextMediaController.background = false;
                }
                return nextMediaController;
            });
            // The catch is chained as part of the play promise chain
        }

        /**
         * Destroys the mediaController which was constructed and loading in the background (nextMedia).
         * Does not destroy the mediaController which was already playing and subsequently placed into the background (currentMedia).
         * @returns {void}
         * @private
         */

    }, {
        key: '_destroyBackgroundLoadingMedia',
        value: function _destroyBackgroundLoadingMedia() {
            var _this6 = this;

            var background = this.background,
                nextLoadPromise = this.background.nextLoadPromise;

            if (!nextLoadPromise) {
                return;
            }
            nextLoadPromise.then(function (nextMediaController) {
                _this6._destroyMediaController(nextMediaController);
                background.clearNext();
            });
        }
    }, {
        key: '_providerCanPlay',
        value: function _providerCanPlay(_provider, source) {
            var _providers$choose2 = this.providers.choose(source),
                provider = _providers$choose2.provider;

            return provider && _provider && _provider instanceof provider;
        }

        /**
         * Returns the active audio track index.
         * @returns {number} The active audio track index.
         */

    }, {
        key: 'audioTrack',
        get: function get() {
            var mediaController = this.mediaController;

            if (!mediaController) {
                return -1;
            }

            return mediaController.audioTrack;
        }

        /**
         * Returns the list of audio tracks.
         * @returns {Array<AudioTrackOption>} An array of AudioTrackOption instances.
         */
        ,


        /**
         * Sets the active audio index.
         * @param {number} index - The index of the audio track to select.
         * @returns {void}
         */
        set: function set(index) {
            var mediaController = this.mediaController;

            if (!mediaController) {
                return;
            }

            mediaController.audioTrack = parseInt(index, 10) || 0;
        }

        /**
         * Activates or deactivates media controls.
         * @param {boolean} mode - Activate or deactivate media controls?
         * @returns {void}
         * TODO: deprecate - only used by jwplayer-commercial flash provider
         */

    }, {
        key: 'audioTracks',
        get: function get() {
            var mediaController = this.mediaController;

            if (!mediaController) {
                return;
            }

            return mediaController.audioTracks;
        }

        /**
         * Returns whether the current media has completed playback.
         * @returns {boolean} Is the "beforeComplete" event being propagated
         * or did it result in the media being detached or backgrounded?
         */

    }, {
        key: 'beforeComplete',
        get: function get() {
            var mediaController = this.mediaController,
                currentMedia = this.background.currentMedia;

            if (!mediaController && !currentMedia) {
                return false;
            }

            return mediaController ? mediaController.beforeComplete : currentMedia.beforeComplete;
        }

        /**
         * Returns a primed element from the media pool.
         * @returns {HTMLVideoElement|null} The first video element in the pool, or null if the pool is empty.
         */

    }, {
        key: 'primedElement',
        get: function get() {
            if (!_environment.Features.backgroundLoading) {
                // If background loading is not supported, the model will always contain the shared media element
                // Prime it so that playback after changing the active item does not require further gestures
                var model = this.model;

                return model.get('mediaElement');
            }
            return this.mediaPool.getPrimedElement();
        }

        /**
         * Returns the active quality index.
         * @returns {number} The active quality level index.
         */

    }, {
        key: 'quality',
        get: function get() {
            if (!this.mediaController) {
                return -1;
            }

            return this.mediaController.quality;
        }

        /**
         * Returns the list of quality levels.
         * @returns {Array<QualityOption>} An array of QualityOption objects.
         */
        ,


        /**
         * Sets the current quality level.
         * @param {number} index - The index of the quality level to select.
         * @returns {void}
         */
        set: function set(index) {
            var mediaController = this.mediaController;

            if (!mediaController) {
                return;
            }

            mediaController.quality = parseInt(index, 10) || 0;
        }

        /**
         * Sets the current subtitles track.
         * @param {number} index - The index of the subtitle track to select.
         * @returns {void}
         */

    }, {
        key: 'qualities',
        get: function get() {
            var mediaController = this.mediaController;

            if (!mediaController) {
                return null;
            }

            return mediaController.qualities;
        }

        /**
         * Attaches or detaches the current media
         * @param {boolean} shouldAttach - Attach or detach?
         * @returns {void}
         */

    }, {
        key: 'attached',
        set: function set(shouldAttach) {
            var mediaController = this.mediaController;


            if (!mediaController) {
                return;
            }

            if (shouldAttach) {
                mediaController.attach();
            } else {
                mediaController.detach();
            }
        }
    }, {
        key: 'controls',
        set: function set(mode) {
            var mediaController = this.mediaController;

            if (!mediaController) {
                return;
            }

            mediaController.controls = mode;
        }

        /**
         * Mutes or unmutes the activate media.
         * Syncs across all media elements.
         * @param {boolean} mute - Mute or unmute media?
         * @returns {void}
         */

    }, {
        key: 'mute',
        set: function set(mute) {
            var background = this.background,
                mediaController = this.mediaController,
                mediaPool = this.mediaPool;


            if (mediaController) {
                mediaController.mute = mute;
            }
            if (background.currentMedia) {
                background.currentMedia.mute = mute;
            }

            mediaPool.syncMute(mute);
        }

        /**
         * Seeks the media to the provided position.
         * If the media is not attached, set the item's starttime so that when reattaching, it resumes at that time.
         * If we seek before an item loads, set the item's starttime so that when playback begins, we buffer at that time.
         * @param {number} pos - The position to start at or seek to.
         * @returns {void}
         */

    }, {
        key: 'position',
        set: function set(pos) {
            var mediaController = this.mediaController,
                model = this.model;

            if (!mediaController) {
                return;
            }
            var state = model.get(_events.PLAYER_STATE);
            var beforeLoad = !mediaController.started && !mediaController.preloaded && state === _events.STATE_IDLE;

            if (beforeLoad || state === _events.STATE_COMPLETE) {
                mediaController.item.starttime = pos;
            } else if (mediaController.attached) {
                mediaController.position = pos;
            } else {
                mediaController.item.starttime = pos;
            }
        }
    }, {
        key: 'subtitles',
        set: function set(index) {
            var mediaController = this.mediaController;

            if (!mediaController) {
                return;
            }

            mediaController.subtitles = index;
        }

        /**
         * Sets the volume level.
         * Syncs across all media elements.
         * @param {number} volume - A number from 0 to 1.
         * @returns {void}
         */

    }, {
        key: 'volume',
        set: function set(volume) {
            var background = this.background,
                mediaController = this.mediaController,
                mediaPool = this.mediaPool;


            if (mediaController) {
                mediaController.volume = volume;
            }
            if (background.currentMedia) {
                background.currentMedia.volume = volume;
            }

            mediaPool.syncVolume(volume);
        }
    }]);

    return ProgramController;
}(_eventable2.default);

function assignMediaContainer(model, mediaController) {
    var container = model.get('mediaContainer');
    if (container) {
        mediaController.container = container;
    } else {
        model.once('change:mediaContainer', function (changedModel, changedContainer) {
            mediaController.container = changedContainer;
        });
    }
}

function forwardEvents(programController, mediaController) {
    mediaController.off('all', programController.mediaControllerListener, programController);
    mediaController.on('all', programController.mediaControllerListener, programController);
}

function getSource(item) {
    return item && item.sources && item.sources[0];
}

exports.default = ProgramController;

/***/ }),
/* 89 */
/*!***********************************!*\
  !*** ./src/js/utils/eventable.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _backbone = __webpack_require__(/*! utils/backbone.events */ 7);

var _backbone2 = _interopRequireDefault(_backbone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Combine mixins into a class which can be extended
var Eventable = function Eventable() {
  _classCallCheck(this, Eventable);
};

exports.default = Eventable;

Eventable.prototype = _extends({}, _backbone2.default);

/***/ }),
/* 90 */
/*!*********************************************!*\
  !*** ./src/js/program/program-listeners.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.ProviderListener = ProviderListener;
exports.MediaControllerListener = MediaControllerListener;

var _underscore = __webpack_require__(/*! utils/underscore */ 0);

var _events = __webpack_require__(/*! events/events */ 5);

function ProviderListener(mediaController) {
    return function (type, data) {
        var mediaModel = mediaController.mediaModel;

        var event = _extends({}, data, {
            type: type
        });

        switch (type) {
            case _events.MEDIA_TYPE:
                if (mediaModel.get(_events.MEDIA_TYPE) === data.mediaType) {
                    return;
                }
                mediaModel.set(_events.MEDIA_TYPE, data.mediaType);
                break;
            case _events.MEDIA_VISUAL_QUALITY:
                mediaModel.set(_events.MEDIA_VISUAL_QUALITY, _extends({}, data));
                return;
            case _events.PLAYER_STATE:
                {
                    if (data.newstate === _events.STATE_IDLE) {
                        mediaController.thenPlayPromise.cancel();
                        mediaModel.srcReset();
                    }
                    // Always fire change:mediaState to keep player model in sync
                    var previousState = mediaModel.attributes.mediaState;
                    mediaModel.attributes.mediaState = data.newstate;
                    mediaModel.trigger('change:mediaState', mediaModel, data.newstate, previousState);
                    // This "return" is important because
                    //  we are choosing to not propagate model event.
                    //  Instead letting the master controller do so
                    return;
                }
            case _events.MEDIA_COMPLETE:
                mediaController.beforeComplete = true;
                mediaController.trigger(_events.MEDIA_BEFORECOMPLETE, event);
                if (mediaController.attached && !mediaController.background) {
                    mediaController._playbackComplete();
                }
                return;
            case _events.MEDIA_ERROR:
                mediaController.thenPlayPromise.cancel();
                mediaModel.srcReset();
                break;
            case _events.MEDIA_META:
                {
                    var duration = data.duration;
                    if ((0, _underscore._isNumber)(duration) && !(0, _underscore._isNaN)(duration)) {
                        mediaModel.set('duration', duration);
                    }
                    break;
                }
            case _events.MEDIA_BUFFER:
                mediaModel.set('buffer', data.bufferPercent);
            /* falls through to update duration while media is loaded */
            case _events.MEDIA_TIME:
                {
                    mediaModel.set('position', data.position);
                    mediaModel.set('currentTime', data.currentTime);
                    var _duration = data.duration;
                    if ((0, _underscore._isNumber)(_duration) && !(0, _underscore._isNaN)(_duration)) {
                        mediaModel.set('duration', _duration);
                    }
                    break;
                }
            case _events.MEDIA_LEVELS:
                mediaModel.set(_events.MEDIA_LEVELS, data.levels);
            /* falls through to update current level */
            case _events.MEDIA_LEVEL_CHANGED:
                {
                    var currentQuality = data.currentQuality,
                        levels = data.levels;

                    if (currentQuality > -1 && levels.length > 1) {
                        mediaModel.set('currentLevel', parseInt(currentQuality));
                    }
                    break;
                }
            case _events.AUDIO_TRACKS:
                mediaModel.set(_events.AUDIO_TRACKS, data.tracks);
            /* falls through to update current track */
            case _events.AUDIO_TRACK_CHANGED:
                {
                    var currentTrack = data.currentTrack,
                        tracks = data.tracks;


                    if (currentTrack > -1 && tracks.length > 0 && currentTrack < tracks.length) {
                        mediaModel.set('currentAudioTrack', parseInt(currentTrack));
                    }
                    break;
                }
            case 'visualQuality':
                mediaModel.set('visualQuality', _extends({}, data));
                break;
            default:
                break;
        }

        mediaController.trigger(type, event);
    };
}

function MediaControllerListener(model, programController) {
    return function (type, data) {
        switch (type) {
            case 'flashThrottle':
                {
                    var throttled = data.state !== 'resume';
                    model.set('flashThrottle', throttled);
                    model.set('flashBlocked', throttled);
                }
                break;
            case 'flashBlocked':
                model.set('flashBlocked', true);
                return;
            case 'flashUnblocked':
                model.set('flashBlocked', false);
                return;
            case _events.MEDIA_VOLUME:
                model.set(type, data[type]);
                return;
            case _events.MEDIA_MUTE:
                if (!model.get('autostartMuted')) {
                    // Don't persist mute state with muted autostart
                    model.set(type, data[type]);
                }
                return;
            case _events.MEDIA_RATE_CHANGE:
                model.set('playbackRate', data.playbackRate);
                return;
            case _events.MEDIA_META:
                {
                    _extends(model.get('itemMeta'), data.metadata);
                    break;
                }
            case _events.MEDIA_LEVEL_CHANGED:
                model.persistQualityLevel(data.currentQuality, data.levels);
                break;
            case 'subtitlesTrackChanged':
                model.persistVideoSubtitleTrack(data.currentTrack, data.tracks);
                break;
            case _events.MEDIA_TIME:
            case _events.MEDIA_SEEK:
            case _events.MEDIA_SEEKED:
            case _events.NATIVE_FULLSCREEN:
            case 'subtitlesTracks':
            case 'subtitlesTracksData':
                model.trigger(type, data);
                break;
            default:
        }

        programController.trigger(type, data);
    };
}

/***/ }),
/* 91 */
/*!*********************************************!*\
  !*** ./src/js/events/change-state-event.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ChangeStateEvent;

var _events = __webpack_require__(/*! events/events */ 5);

// The api should dispatch an idle event when the model's state changes to complete
// This is to avoid conflicts with the complete event and to maintain legacy event flow
function normalizeApiState(newstate) {
    if (newstate === _events.STATE_COMPLETE || newstate === _events.STATE_ERROR) {
        return _events.STATE_IDLE;
    }
    return newstate;
}

function ChangeStateEvent(model, newstate, oldstate) {
    newstate = normalizeApiState(newstate);
    oldstate = normalizeApiState(oldstate);
    // do not dispatch idle a second time after complete
    if (newstate !== oldstate) {
        // buffering, playing and paused states become:
        // buffer, play and pause events
        var eventType = newstate.replace(/(?:ing|d)$/, '');
        var evt = {
            type: eventType,
            newstate: newstate,
            oldstate: oldstate,
            reason: model.mediaModel.get('mediaState')
        };
        // add reason for play/pause events
        if (eventType === 'play') {
            evt.playReason = model.get('playReason');
        } else if (eventType === 'pause') {
            evt.pauseReason = model.get('pauseReason');
        }
        this.trigger(eventType, evt);
    }
}

/***/ }),
/* 92 */
/*!************************************!*\
  !*** ./src/js/utils/active-tab.js ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    if ('hidden' in document) {
        return function () {
            return !document.hidden;
        };
    }
    if ('webkitHidden' in document) {
        return function () {
            return !document.webkitHidden;
        };
    }
    // document.hidden not supported
    return function () {
        return true;
    };
}();

/***/ }),
/* 93 */
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
/* 94 */
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
/* 95 */
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
/* 96 */
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
/* 97 */,
/* 98 */
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

/***/ }),
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


/***/ }),
/* 149 */
/*!**********************************!*\
  !*** ./src/js/api/set-config.js ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _underscore = __webpack_require__(/*! utils/underscore */ 0);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var supportedFields = ['repeat', 'volume', 'mute', 'autostart'];

function setAutoStart(model, controller, autoStart) {
    model.setAutoStart(autoStart);

    if (model.get('state') === 'idle' && autoStart === true) {
        controller.play({ reason: 'autostart' });
    }
}

exports.default = function (controller, newConfig) {
    var model = controller._model;

    if (!_underscore2.default.size(newConfig)) {
        return;
    }

    supportedFields.forEach(function (field) {
        var newValue = newConfig[field];

        if (_underscore2.default.isUndefined(newValue)) {
            return;
        }

        switch (field) {
            case 'mute':
                controller.setMute(newValue);
                break;
            case 'volume':
                controller.setVolume(newValue);
                break;
            case 'autostart':
                setAutoStart(model, controller, newValue);
                break;
            default:
                model.set(field, newValue);
        }
    });
};

/***/ }),
/* 150 */
/*!***********************************************!*\
  !*** ./src/js/controller/instream-adapter.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _events = __webpack_require__(/*! events/events */ 5);

var _programConstants = __webpack_require__(/*! ../program/program-constants */ 36);

var _promise = __webpack_require__(/*! polyfills/promise */ 4);

var _promise2 = _interopRequireDefault(_promise);

var _strings = __webpack_require__(/*! utils/strings */ 1);

var _backbone = __webpack_require__(/*! utils/backbone.events */ 7);

var _backbone2 = _interopRequireDefault(_backbone);

var _underscore = __webpack_require__(/*! utils/underscore */ 0);

var _underscore2 = _interopRequireDefault(_underscore);

var _adProgramController = __webpack_require__(/*! program/ad-program-controller */ 151);

var _adProgramController2 = _interopRequireDefault(_adProgramController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _defaultOptions = {
    skipoffset: null,
    tag: null
};

var InstreamAdapter = function InstreamAdapter(_controller, _model, _view, _mediaPool) {
    var _this2 = this;

    var _this = this;

    var _adProgram = new _adProgramController2.default(_model, _mediaPool);
    var _array = void 0;
    var _arrayOptions = void 0;
    var _arrayIndex = 0;
    var _options = {};
    var _skipAd = _instreamItemNext;
    var _backgroundLoadTriggered = false;
    var _oldpos = void 0;
    var _skipOffset = void 0;
    var _backgroundLoadStart = void 0;
    var _destroyed = false;
    var _inited = false;

    var _clickHandler = function _clickHandler(evt) {
        if (_destroyed) {
            return;
        }
        evt = evt || {};
        evt.hasControls = !!_model.get('controls');

        _this2.trigger(_events.INSTREAM_CLICK, evt);

        // toggle playback after click event
        if (_adProgram.model.get('state') === _events.STATE_PAUSED) {
            if (evt.hasControls) {
                _adProgram.playVideo();
            }
        } else {
            _adProgram.pause();
        }
    };

    var _doubleClickHandler = function _doubleClickHandler() {
        if (_destroyed) {
            return;
        }

        if (_adProgram.model.get('state') === _events.STATE_PAUSED) {
            if (_model.get('controls')) {
                _controller.setFullscreen();
                _controller.play();
            }
        }
    };

    this.type = 'instream';

    this.addAdProgramTimeListener = function () {
        if (_inited || _destroyed) {
            return;
        }

        _adProgram.on(_events.MEDIA_TIME, _instreamTime, this);

        // This enters the player into instream mode
        _model.set('instream', _adProgram);

        // don't trigger api play/pause on display click
        var clickHandler = _view.clickHandler();
        if (clickHandler) {
            clickHandler.setAlternateClickHandlers(function () {}, null);
        }

        return this;
    };

    this.init = function () {
        if (_inited || _destroyed) {
            return;
        }
        _inited = true;

        // Keep track of the original player state
        _adProgram.setup();

        _oldpos = _controller.get('position');
        _adProgram.on('all', _instreamForward, this);
        _adProgram.on(_events.MEDIA_PLAY_ATTEMPT_FAILED, triggerPlayRejected, this);
        _adProgram.on(_events.MEDIA_TIME, _instreamTime, this);
        _adProgram.on(_events.MEDIA_COMPLETE, _instreamItemComplete, this);
        _adProgram.on(_events.MEDIA_META, _instreamMeta, this);

        // Make sure the original player's provider stops broadcasting events (pseudo-lock...)
        _controller.detachMedia();

        var mediaElement = _adProgram.primedElement;
        var mediaContainer = _model.get('mediaContainer');
        mediaContainer.appendChild(mediaElement);

        if (_controller.checkBeforePlay() || _oldpos === 0 && !_controller.isBeforeComplete()) {
            // make sure video restarts after preroll
            _oldpos = 0;
        } else if (_controller.isBeforeComplete() || _model.get('state') === _events.STATE_COMPLETE) {
            _oldpos = null;
        }

        // This enters the player into instream mode
        _model.set('instream', _adProgram);
        _adProgram.model.set('state', _events.STATE_BUFFERING);

        // don't trigger api play/pause on display click
        var clickHandler = _view.clickHandler();
        if (clickHandler) {
            clickHandler.setAlternateClickHandlers(function () {}, null);
        }

        this.setText(_model.get('localization').loadingAd);
        return this;
    };

    function triggerPlayRejected() {
        _adProgram.model.set('playRejected', true);
    }

    function _loadNextItem() {
        _arrayIndex++;
        _this.loadItem(_array);
    }

    function _instreamForward(type, data) {
        if (type === 'complete') {
            return;
        }
        data = data || {};

        if (_options.tag && !data.tag) {
            data.tag = _options.tag;
        }

        this.trigger(type, data);

        if (type === 'mediaError' || type === 'error') {
            if (_array && _arrayIndex + 1 < _array.length) {
                _loadNextItem();
            }
        }
    }

    function _instreamTime(evt) {
        var duration = evt.duration,
            position = evt.position;

        var mediaModel = _adProgram.model.mediaModel || _adProgram.model;
        mediaModel.set('duration', duration);
        mediaModel.set('position', position);

        // Start background loading once the skip button is clickable
        // If no skipoffset is set, default to background loading 5 seconds before the end
        if (!_backgroundLoadStart) {
            // Ensure background loading doesn't degrade ad performance by starting too early
            _backgroundLoadStart = ((0, _strings.offsetToSeconds)(_skipOffset, duration) || duration) - _programConstants.BACKGROUND_LOAD_OFFSET;
        }
        if (!_backgroundLoadTriggered && position >= Math.max(_backgroundLoadStart, _programConstants.BACKGROUND_LOAD_MIN_OFFSET)) {
            _controller.preloadNextItem();
            _backgroundLoadTriggered = true;
        }
    }

    function _instreamItemComplete(e) {
        var data = {};
        if (_options.tag) {
            data.tag = _options.tag;
        }
        this.trigger(_events.MEDIA_COMPLETE, data);
        _instreamItemNext.call(this, e);
    }

    function _instreamItemNext(e) {
        if (_array && _arrayIndex + 1 < _array.length) {
            _loadNextItem();
        } else {
            if (e.type === _events.MEDIA_COMPLETE) {
                // Dispatch playlist complete event for ad pods
                this.trigger(_events.PLAYLIST_COMPLETE, {});
            }
            this.destroy();
        }
    }

    this.loadItem = function (item, options) {
        if (_destroyed || !_inited) {
            return _promise2.default.reject(new Error('Instream not setup'));
        }
        // Copy the playlist item passed in and make sure it's formatted as a proper playlist item
        var playlist = item;
        if (_underscore2.default.isArray(item)) {
            _array = item;
            _arrayOptions = options || _arrayOptions;
            item = _array[_arrayIndex];
            if (_arrayOptions) {
                options = _arrayOptions[_arrayIndex];
            }
        } else {
            playlist = [item];
        }

        var adModel = _adProgram.model;
        adModel.set('playlist', playlist);

        _model.set('hideAdsControls', false);

        // Dispatch playlist item event for ad pods
        _this.trigger(_events.PLAYLIST_ITEM, {
            index: _arrayIndex,
            item: item
        });

        _options = _extends({}, _defaultOptions, options);

        _this.addClickHandler();

        adModel.set('skipButton', false);

        var playPromise = _adProgram.setActiveItem(_arrayIndex);

        _backgroundLoadTriggered = false;
        _skipOffset = item.skipoffset || _options.skipoffset;
        if (_skipOffset) {
            _this.setupSkipButton(_skipOffset, _options);
        }
        return playPromise;
    };

    this.setupSkipButton = function (skipoffset, options, customNext) {
        var adModel = _adProgram.model;
        if (customNext) {
            _skipAd = customNext;
        } else {
            _skipAd = _instreamItemNext;
        }
        adModel.set('skipMessage', options.skipMessage);
        adModel.set('skipText', options.skipText);
        adModel.set('skipOffset', skipoffset);
        adModel.attributes.skipButton = false;
        adModel.set('skipButton', true);
    };

    this.applyProviderListeners = function (provider) {
        _adProgram.usePsuedoProvider(provider);

        this.addClickHandler();
    };

    this.play = function () {
        _adProgram.playVideo();
    };

    this.pause = function () {
        _adProgram.pause();
    };

    this.addClickHandler = function () {
        if (_destroyed) {
            return;
        }
        // start listening for ad click
        if (_view.clickHandler()) {
            _view.clickHandler().setAlternateClickHandlers(_clickHandler, _doubleClickHandler);
        }
    };

    this.skipAd = function (evt) {
        var skipAdType = _events.AD_SKIPPED;
        this.trigger(skipAdType, evt);
        _skipAd.call(this, {
            type: skipAdType
        });
    };

    function _instreamMeta(evt) {
        // If we're getting video dimension metadata from the provider, allow the view to resize the media
        if (evt.width && evt.height) {
            _view.resizeMedia();
        }
    }

    this.replacePlaylistItem = function (item) {
        if (_destroyed) {
            return;
        }
        _model.set('playlistItem', item);
        _adProgram.srcReset();
    };

    this.destroy = function () {
        if (_destroyed) {
            return;
        }
        _destroyed = true;
        this.trigger('destroyed');
        this.off();

        if (_view.clickHandler()) {
            _view.clickHandler().revertAlternateClickHandlers();
        }

        _model.off(null, null, _adProgram);
        _adProgram.off(null, null, _this);
        _adProgram.destroy();

        // Force player state with ad to pause for model "change:state" events to trigger
        if (_inited && _adProgram.model) {
            _model.attributes.state = _events.STATE_PAUSED;
        }

        _model.set('instream', null);

        _adProgram = null;

        if (!_inited || _model.attributes._destroyed) {
            return;
        }

        // Re-attach the controller & resume playback
        // when instream was inited and the player was not destroyed\
        _controller.attachMedia(_oldpos);

        if (this.noResume) {
            return;
        }

        if (_oldpos === null) {
            _controller.stopVideo();
        } else {
            _controller.playVideo();
        }
    };

    this.getState = function () {
        if (_destroyed) {
            // api expects false to know we aren't in instreamMode
            return false;
        }
        return _adProgram.model.get('state');
    };

    this.setText = function (text) {
        if (_destroyed) {
            return;
        }
        _view.setAltText(text || '');
    };

    // This method is triggered by plugins which want to hide player controls
    this.hide = function () {
        if (_destroyed) {
            return;
        }
        _model.set('hideAdsControls', true);
    };

    /**
     * Extracts the video tag in the foreground.
     * @returns {Element|undefined} videoTag - the HTML <video> element in the foreground.
     */
    this.getMediaElement = function () {
        if (_destroyed) {
            return null;
        }
        return _adProgram.primedElement;
    };

    /**
     * Sets the internal skip offset. Does not set the skip button.
     * @param {Number} skipOffset - The number of seconds from the start where the ad becomes skippable.
     * @returns {void}
     */
    this.setSkipOffset = function (skipOffset) {
        // IMA will pass -1 if it doesn't know the skipoffset, or if the ad is unskippable
        _skipOffset = skipOffset > 0 ? skipOffset : null;
        if (_adProgram) {
            _adProgram.model.set('skipOffset', _skipOffset);
        }
    };
};

_extends(InstreamAdapter.prototype, _backbone2.default);

exports.default = InstreamAdapter;

/***/ }),
/* 151 */
/*!*************************************************!*\
  !*** ./src/js/program/ad-program-controller.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _environment = __webpack_require__(/*! environment/environment */ 11);

var _events = __webpack_require__(/*! events/events */ 5);

var _programController = __webpack_require__(/*! program/program-controller */ 88);

var _programController2 = _interopRequireDefault(_programController);

var _model = __webpack_require__(/*! controller/model */ 80);

var _model2 = _interopRequireDefault(_model);

var _changeStateEvent = __webpack_require__(/*! events/change-state-event */ 91);

var _changeStateEvent2 = _interopRequireDefault(_changeStateEvent);

var _sharedMediaPool = __webpack_require__(/*! program/shared-media-pool */ 43);

var _sharedMediaPool2 = _interopRequireDefault(_sharedMediaPool);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdProgramController = function (_ProgramController) {
    _inherits(AdProgramController, _ProgramController);

    function AdProgramController(model, mediaPool) {
        _classCallCheck(this, AdProgramController);

        var _this = _possibleConstructorReturn(this, (AdProgramController.__proto__ || Object.getPrototypeOf(AdProgramController)).call(this, model, mediaPool));

        var adModel = _this.model = new _model2.default();
        _this.playerModel = model;
        _this.provider = null;

        adModel.mediaModel.attributes.mediaType = 'video';

        // Ad plugins must use only one element, and must use the same element during playback of an item
        // (i.e. prerolls, midrolls, and postrolls must use the same tag)
        var mediaElement = void 0;
        if (_environment.Features.backgroundLoading) {
            // The media pool has reserves an element for ads to use. It is reserved on setup and is not used by other media
            mediaElement = mediaPool.getAdElement();
        } else {
            // Take the tag that we're using to play the current item. The tag has been freed before reaching this point
            mediaElement = model.get('mediaElement');

            adModel.attributes.mediaElement = mediaElement;
            adModel.attributes.mediaSrc = mediaElement.src;

            // Listen to media element for events that indicate src was reset or load() was called
            var srcResetListener = _this.srcResetListener = function () {
                _this.srcReset();
            };
            mediaElement.addEventListener('emptied', srcResetListener);
            mediaElement.playbackRate = mediaElement.defaultPlaybackRate = 1;
        }

        _this.mediaPool = (0, _sharedMediaPool2.default)(mediaElement, mediaPool);
        return _this;
    }

    _createClass(AdProgramController, [{
        key: 'setup',
        value: function setup() {
            var model = this.model,
                playerModel = this.playerModel,
                primedElement = this.primedElement;

            var playerAttributes = playerModel.attributes;
            var mediaModelContext = playerModel.mediaModel;
            model.setup({
                id: playerAttributes.id,
                volume: playerAttributes.volume,
                instreamMode: true,
                edition: playerAttributes.edition,
                mediaContext: mediaModelContext,
                mute: playerAttributes.mute,
                streamType: 'VOD',
                autostartMuted: playerAttributes.autostartMuted,
                autostart: playerAttributes.autostart,
                advertising: playerAttributes.advertising,
                sdkplatform: playerAttributes.sdkplatform,
                skipButton: false
            });

            model.on('fullscreenchange', this._nativeFullscreenHandler);
            model.on('change:state', _changeStateEvent2.default, this);
            model.on(_events.ERROR, function (data) {
                this.trigger(_events.ERROR, data);
            }, this);

            if (!primedElement.paused) {
                primedElement.pause();
            }
        }
    }, {
        key: 'setActiveItem',
        value: function setActiveItem(index) {
            var _this2 = this;

            this.stopVideo();
            this.provider = null;
            _get(AdProgramController.prototype.__proto__ || Object.getPrototypeOf(AdProgramController.prototype), 'setActiveItem', this).call(this, index).then(function (mediaController) {
                _this2._setProvider(mediaController.provider);
            });
            return this.playVideo();
        }
    }, {
        key: 'usePsuedoProvider',
        value: function usePsuedoProvider(provider) {
            this.provider = provider;
            if (!provider) {
                return;
            }
            this._setProvider(provider);

            // Match the main player's controls state
            provider.off(_events.ERROR);
            provider.on(_events.ERROR, function (data) {
                this.trigger(_events.ERROR, data);
            }, this);
        }
    }, {
        key: '_setProvider',
        value: function _setProvider(provider) {
            var _this3 = this;

            // Clear current provider when applyProviderListeners(null) is called
            if (!provider || !this.mediaPool) {
                return;
            }

            var model = this.model,
                playerModel = this.playerModel;

            var isVpaidProvider = provider.type === 'vpaid';

            provider.off();
            provider.on('all', function (type, data) {
                if (isVpaidProvider && type === _events.MEDIA_COMPLETE) {
                    return;
                }
                this.trigger(type, _extends({}, data, { type: type }));
            }, this);

            var adMediaModelContext = model.mediaModel;
            provider.on(_events.PLAYER_STATE, function (event) {
                adMediaModelContext.set('mediaState', event.newstate);
            });
            adMediaModelContext.on('change:mediaState', function (changeAdModel, state) {
                _this3._stateHandler(state);
            });
            provider.attachMedia();
            provider.volume(playerModel.get('volume'));
            provider.mute(playerModel.getMute());
            if (provider.setPlaybackRate) {
                provider.setPlaybackRate(1);
            }
            playerModel.on('change:volume', function (data, value) {
                this.volume = value;
            }, this);
            playerModel.on('change:mute', function (data, mute) {
                this.mute = mute;
                if (!mute) {
                    this.volume = playerModel.get('volume');
                }
            }, this);
            playerModel.on('change:autostartMuted', function (data, value) {
                if (!value) {
                    model.set('autostartMuted', value);
                    this.mute = playerModel.get('mute');
                }
            }, this);
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            var model = this.model,
                mediaPool = this.mediaPool,
                playerModel = this.playerModel;

            model.off();

            // We only use one media element from ads; getPrimedElement will return it
            var mediaElement = mediaPool.getPrimedElement();
            if (!_environment.Features.backgroundLoading) {
                if (mediaElement) {
                    mediaElement.removeEventListener('emptied', this.srcResetListener);
                    // Reset the player media model if the src was changed externally
                    if (mediaElement.src !== model.get('mediaSrc')) {
                        this.srcReset();
                    }
                }
            } else {
                mediaPool.clean();
                var mediaContainer = playerModel.get('mediaContainer');
                if (mediaElement.parentNode === mediaContainer) {
                    mediaContainer.removeChild(mediaElement);
                }
            }
        }
    }, {
        key: 'srcReset',
        value: function srcReset() {
            var playerModel = this.playerModel;

            var mediaModel = playerModel.get('mediaModel');
            var provider = playerModel.getVideo();

            mediaModel.srcReset();

            // Set hlsjs.src to null so that it reloads it's item source
            if (provider) {
                provider.src = null;
            }
        }
    }, {
        key: '_nativeFullscreenHandler',
        value: function _nativeFullscreenHandler(evt) {
            var model = this.model;

            model.trigger(evt.type, evt);
            this.trigger(_events.FULLSCREEN, {
                fullscreen: evt.jwstate
            });
        }
    }, {
        key: '_stateHandler',
        value: function _stateHandler(state) {
            var model = this.model;

            switch (state) {
                case _events.STATE_PLAYING:
                case _events.STATE_PAUSED:
                    model.set(_events.PLAYER_STATE, state);
                    break;
                default:
                    break;
            }
        }
    }, {
        key: 'mute',
        set: function set(mute) {
            var mediaController = this.mediaController,
                model = this.model,
                provider = this.provider;

            model.set('mute', mute);
            _set(AdProgramController.prototype.__proto__ || Object.getPrototypeOf(AdProgramController.prototype), 'mute', mute, this);
            if (!mediaController) {
                provider.mute(mute);
            }
        }
    }, {
        key: 'volume',
        set: function set(volume) {
            var mediaController = this.mediaController,
                model = this.model,
                provider = this.provider;

            model.set('volume', volume);
            _set(AdProgramController.prototype.__proto__ || Object.getPrototypeOf(AdProgramController.prototype), 'volume', volume, this);
            if (!mediaController) {
                provider.volume(volume);
            }
        }
    }]);

    return AdProgramController;
}(_programController2.default);

exports.default = AdProgramController;

/***/ }),
/* 152 */
/*!********************************************!*\
  !*** ./src/js/program/media-controller.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cancelable = __webpack_require__(/*! utils/cancelable */ 79);

var _cancelable2 = _interopRequireDefault(_cancelable);

var _eventable = __webpack_require__(/*! utils/eventable */ 89);

var _eventable2 = _interopRequireDefault(_eventable);

var _apiQueue = __webpack_require__(/*! api/api-queue */ 34);

var _apiQueue2 = _interopRequireDefault(_apiQueue);

var _programListeners = __webpack_require__(/*! program/program-listeners */ 90);

var _promise = __webpack_require__(/*! polyfills/promise */ 4);

var _model = __webpack_require__(/*! controller/model */ 80);

var _strings = __webpack_require__(/*! utils/strings */ 1);

var _events = __webpack_require__(/*! events/events */ 5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MediaController = function (_Eventable) {
    _inherits(MediaController, _Eventable);

    function MediaController(provider, model) {
        _classCallCheck(this, MediaController);

        var _this = _possibleConstructorReturn(this, (MediaController.__proto__ || Object.getPrototypeOf(MediaController)).call(this));

        _this.attached = true;
        _this.beforeComplete = false;
        _this.item = null;
        _this.mediaModel = new _model.MediaModel();
        _this.model = model;
        _this.provider = provider;
        _this.providerListener = new _programListeners.ProviderListener(_this);
        _this.thenPlayPromise = (0, _cancelable2.default)(function () {});
        addProviderListeners(_this);
        _this.eventQueue = new _apiQueue2.default(_this, ['trigger'], function () {
            return !_this.attached || _this.background;
        });
        return _this;
    }

    _createClass(MediaController, [{
        key: 'play',
        value: function play(playReason) {
            var item = this.item,
                model = this.model,
                mediaModel = this.mediaModel,
                provider = this.provider;


            if (!playReason) {
                playReason = model.get('playReason');
            }

            model.set('playRejected', false);
            var playPromise = _promise.resolved;
            if (mediaModel.get('setup')) {
                playPromise = provider.play();
            } else {
                mediaModel.set('setup', true);
                playPromise = this._loadAndPlay(item, provider);
                if (!mediaModel.get('started')) {
                    this._playAttempt(playPromise, playReason);
                }
            }
            return playPromise;
        }
    }, {
        key: 'stop',
        value: function stop() {
            var provider = this.provider;

            provider.stop();
        }
    }, {
        key: 'pause',
        value: function pause() {
            var provider = this.provider;

            provider.pause();
        }
    }, {
        key: 'preload',
        value: function preload() {
            var item = this.item,
                mediaModel = this.mediaModel,
                provider = this.provider;

            if (!item || item && item.preload === 'none') {
                return;
            }
            // The provider has a video tag, but has not started nor preloaded
            if (this.attached && !this.setup && !this.preloaded) {
                mediaModel.set('preloaded', true);
                provider.preload(item);
            }
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            var provider = this.provider,
                mediaModel = this.mediaModel;

            this.off();
            mediaModel.off();
            provider.off();
            this.eventQueue.destroy();
            this.detach();
            if (provider.getContainer()) {
                provider.remove();
            }
            delete provider.instreamMode;
            this.provider = null;
            this.item = null;
        }
    }, {
        key: 'attach',
        value: function attach() {
            var model = this.model,
                provider = this.provider;

            // Restore the playback rate to the provider in case it changed while detached and we reused a video tag.

            model.setPlaybackRate(model.get('defaultPlaybackRate'));
            provider.attachMedia();
            this.attached = true;
            model.set('attached', true);
            this.eventQueue.flush();

            if (this.beforeComplete) {
                this._playbackComplete();
            }
        }
    }, {
        key: 'detach',
        value: function detach() {
            var model = this.model,
                provider = this.provider;

            this.thenPlayPromise.cancel();
            provider.detachMedia();
            this.attached = false;
            model.set('attached', false);
        }

        // Executes the playPromise

    }, {
        key: '_playAttempt',
        value: function _playAttempt(playPromise, playReason) {
            var _this2 = this;

            var item = this.item,
                mediaModel = this.mediaModel,
                model = this.model,
                provider = this.provider;


            this.trigger(_events.MEDIA_PLAY_ATTEMPT, {
                item: item,
                playReason: playReason
            });
            // Immediately set player state to buffering if these conditions are met
            if (provider && provider.video && !provider.video.paused) {
                model.set(_events.PLAYER_STATE, _events.STATE_BUFFERING);
            }

            playPromise.then(function () {
                if (!mediaModel.get('setup')) {
                    // Exit if model state was reset
                    return;
                }
                delete item.starttime;
                mediaModel.set('started', true);
                if (mediaModel === model.mediaModel) {
                    // Start firing visualQuality once playback has started
                    mediaModel.off(_events.MEDIA_VISUAL_QUALITY, null, _this2);
                    mediaModel.change(_events.MEDIA_VISUAL_QUALITY, function (changedMediaModel, eventData) {
                        _this2.trigger(_events.MEDIA_VISUAL_QUALITY, eventData);
                    }, _this2);
                    syncPlayerWithMediaModel(mediaModel);
                }
            }).catch(function (error) {
                model.set('playRejected', true);
                var videoTagPaused = provider && provider.video && provider.video.paused;
                if (videoTagPaused) {
                    mediaModel.set('mediaState', _events.STATE_PAUSED);
                }
                _this2.trigger(_events.MEDIA_PLAY_ATTEMPT_FAILED, {
                    error: error,
                    item: item,
                    playReason: playReason
                });
            });
        }
    }, {
        key: '_playbackComplete',
        value: function _playbackComplete() {
            var provider = this.provider;

            this.beforeComplete = false;
            provider.setState(_events.STATE_COMPLETE);
            this.trigger(_events.MEDIA_COMPLETE, {});
        }
    }, {
        key: '_loadAndPlay',
        value: function _loadAndPlay() {
            var item = this.item,
                provider = this.provider;
            // Calling load() on Shaka may return a player setup promise

            var providerSetupPromise = provider.load(item);
            if (providerSetupPromise) {
                var thenPlayPromise = (0, _cancelable2.default)(function () {
                    return provider.play() || _promise.resolved;
                });
                this.thenPlayPromise = thenPlayPromise;
                return providerSetupPromise.then(thenPlayPromise.async);
            }
            return provider.play() || _promise.resolved;
        }
    }, {
        key: 'audioTrack',
        get: function get() {
            return this.provider.getCurrentAudioTrack();
        },
        set: function set(index) {
            this.provider.setCurrentAudioTrack(index);
        }
    }, {
        key: 'quality',
        get: function get() {
            return this.provider.getCurrentQuality();
        },
        set: function set(index) {
            this.provider.setCurrentQuality(index);
        }
    }, {
        key: 'audioTracks',
        get: function get() {
            return this.provider.getAudioTracks();
        }
    }, {
        key: 'background',
        get: function get() {
            var container = this.container,
                provider = this.provider;
            // A backgrounded provider is attached to a video tag

            if (!this.attached) {
                return false;
            }
            // A provider without a video tag cannot be backgrounded
            if (!provider.video) {
                return false;
            }
            // A backgrounded provider does not have a parent container, or has one, but without the media tag as a child
            return !container || container && !container.contains(provider.video);
        },
        set: function set(shouldBackground) {
            var container = this.container,
                provider = this.provider;
            // A provider without a video tag must use attach and detach

            if (!provider.video) {
                if (shouldBackground) {
                    this.detach();
                } else {
                    this.attach();
                }
                return;
            }
            if (!container) {
                return;
            }

            if (shouldBackground) {
                if (!this.background) {
                    this.thenPlayPromise.cancel();
                    this.pause();
                    container.removeChild(provider.video);
                    this.container = null;
                }
            } else {
                this.eventQueue.flush();
                if (this.beforeComplete) {
                    this._playbackComplete();
                }
            }
        }
    }, {
        key: 'container',
        get: function get() {
            return this.provider.getContainer();
        },
        set: function set(element) {
            var provider = this.provider;

            provider.setContainer(element);
        }
    }, {
        key: 'mediaElement',
        get: function get() {
            return this.provider.video;
        }
    }, {
        key: 'preloaded',
        get: function get() {
            return this.mediaModel.get('preloaded');
        }
    }, {
        key: 'qualities',
        get: function get() {
            return this.provider.getQualityLevels();
        }
    }, {
        key: 'setup',
        get: function get() {
            return this.mediaModel.get('setup');
        }
    }, {
        key: 'started',
        get: function get() {
            return this.mediaModel.get('started');
        }
    }, {
        key: 'activeItem',
        set: function set(item) {
            var mediaModel = this.mediaModel = new _model.MediaModel();
            var position = item ? (0, _strings.seconds)(item.starttime) : 0;
            var duration = item ? (0, _strings.seconds)(item.duration) : 0;
            var mediaModelState = mediaModel.attributes;
            mediaModel.srcReset();
            mediaModelState.position = position;
            mediaModelState.duration = duration;

            this.item = item;
            this.provider.init(item);
        }
    }, {
        key: 'controls',
        set: function set(mode) {
            this.provider.setControls(mode);
        }
    }, {
        key: 'mute',
        set: function set(mute) {
            this.provider.mute(mute);
        }
    }, {
        key: 'position',
        set: function set(pos) {
            this.provider.seek(pos);
        }
    }, {
        key: 'subtitles',
        set: function set(index) {
            if (this.provider.setSubtitlesTrack) {
                this.provider.setSubtitlesTrack(index);
            }
        }
    }, {
        key: 'volume',
        set: function set(volume) {
            this.provider.volume(volume);
        }
    }]);

    return MediaController;
}(_eventable2.default);

exports.default = MediaController;


function syncPlayerWithMediaModel(mediaModel) {
    // Sync player state with mediaModel state
    var mediaState = mediaModel.get('mediaState');
    mediaModel.trigger('change:mediaState', mediaModel, mediaState, mediaState);
}

function addProviderListeners(mediaController) {
    mediaController.provider.on('all', mediaController.providerListener, mediaController);
}

/***/ }),
/* 153 */
/*!********************************************!*\
  !*** ./src/js/program/background-media.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = BackgroundMedia;
/**
 * A simple data structure for containing both of the background loading objects.
 * currentMedia is the currently active item which has been put into the background during ad playback.
 * nextMedia is an item which is preloading in the background which may be selected in the future. It is usually the
 * next item in the playlist, or the next up item in a recommendations feed.
 * @returns {BackgroundMedia}
 */
/**
 * @typedef {Object} BackgroundMedia
 * @property {MediaController} currentMedia - The mediaController which has been placed into the background during playback.
 * @property {Item} nextItem - The playlist item loading in the background.
 * @property {Promise} nextMedia - A promise representing the media loading in the background. Resolves with the mediaController.
 * @constructor
 */
function BackgroundMedia() {
    var currentMedia = null;
    var nextMedia = null;

    return Object.defineProperties({
        setNext: function setNext(item, loadPromise) {
            nextMedia = { item: item, loadPromise: loadPromise };
        },
        isNext: function isNext(item) {
            return !!(nextMedia && JSON.stringify(nextMedia.item.sources[0]) === JSON.stringify(item.sources[0]));
        },
        clearNext: function clearNext() {
            nextMedia = null;
        }
    }, {
        nextLoadPromise: {
            get: function get() {
                return nextMedia ? nextMedia.loadPromise : null;
            }
        },
        currentMedia: {
            get: function get() {
                return currentMedia;
            },
            set: function set(mediaController) {
                currentMedia = mediaController;
            }
        }
    });
}

/***/ }),
/* 154 */
/*!***************************************!*\
  !*** ./src/js/controller/captions.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _tracksLoader = __webpack_require__(/*! controller/tracks-loader */ 93);

var _tracksHelper = __webpack_require__(/*! controller/tracks-helper */ 94);

var _backbone = __webpack_require__(/*! utils/backbone.events */ 7);

var _backbone2 = _interopRequireDefault(_backbone);

var _events = __webpack_require__(/*! events/events */ 5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Displays closed captions or subtitles on top of the video */
var Captions = function Captions(_model) {
    var _this = this;

    var _tracks = [];
    var _tracksById = {};
    var _unknownCount = 0;

    // Reset and load external captions on playlist item
    _model.on('change:playlistItem', function (model) {
        _tracks = [];
        _tracksById = {};
        _unknownCount = 0;

        // Update model without dispatching events
        var attributes = model.attributes;
        attributes.captionsIndex = 0;
        attributes.captionsList = _captionsMenu();
        model.set('captionsTrack', null);
    }, this);

    // Update tracks once we know "renderCaptionsNatively" based on provider
    _model.on('change:itemReady', function () {
        // Sideload tracks when not rendering natively
        var item = _model.get('playlistItem');
        var tracks = item.tracks;
        var len = tracks && tracks.length;
        if (len && !_model.get('renderCaptionsNatively')) {
            var _loop = function _loop(i) {
                /* eslint-disable no-loop-func */
                var track = tracks[i];
                if (_kindSupported(track.kind) && !_tracksById[track._id]) {
                    _addTrack(track);
                    (0, _tracksLoader.loadFile)(track, function (vttCues) {
                        _addVTTCuesToTrack(track, vttCues);
                    }, function (error) {
                        _this.trigger(_events.ERROR, {
                            message: 'Captions failed to load',
                            reason: error
                        });
                    });
                }
            };

            for (var i = 0; i < len; i++) {
                _loop(i);
            }
        }
        _setCaptionsList();
    }, this);

    // Listen for captions menu index changes from the view
    _model.on('change:captionsIndex', function (model, captionsMenuIndex) {
        var track = null;
        if (captionsMenuIndex !== 0) {
            track = _tracks[captionsMenuIndex - 1];
        }
        model.set('captionsTrack', track);
    }, this);

    function _setSubtitlesTracks(tracks) {
        if (!tracks.length) {
            return;
        }

        for (var i = 0; i < tracks.length; i++) {
            _addTrack(tracks[i]);
        }

        // To avoid duplicate tracks in the menu when we reuse an _id, regenerate the tracks array
        _tracks = Object.keys(_tracksById).map(function (id) {
            return _tracksById[id];
        });

        _setCaptionsList();
    }

    function _kindSupported(kind) {
        return kind === 'subtitles' || kind === 'captions';
    }

    function _addVTTCuesToTrack(track, vttCues) {
        track.data = vttCues;
    }

    function _addTrack(track) {
        track.data = track.data || [];
        track.name = track.label || track.name || track.language;
        track._id = (0, _tracksHelper.createId)(track, _tracks.length);

        if (!track.name) {
            var labelInfo = (0, _tracksHelper.createLabel)(track, _unknownCount);
            track.name = labelInfo.label;
            _unknownCount = labelInfo.unknownCount;
        }

        // During the same playlist we may reu and readd tracks with the same _id; allow the new track to replace the old
        _tracksById[track._id] = track;
        _tracks.push(track);
    }

    function _captionsMenu() {
        var list = [{
            id: 'off',
            label: 'Off'
        }];
        for (var i = 0; i < _tracks.length; i++) {
            list.push({
                id: _tracks[i]._id,
                label: _tracks[i].name || 'Unknown CC'
            });
        }
        return list;
    }

    function _selectDefaultIndex() {
        var captionsMenuIndex = 0;
        var label = _model.get('captionLabel');

        // Because there is no explicit track for "Off"
        //  it is the implied zeroth track
        if (label === 'Off') {
            _model.set('captionsIndex', 0);
            return;
        }

        for (var i = 0; i < _tracks.length; i++) {
            var _track = _tracks[i];
            if (label && label === _track.name) {
                captionsMenuIndex = i + 1;
                break;
            } else if (_track.default || _track.defaulttrack || _track._id === 'default') {
                captionsMenuIndex = i + 1;
            } else if (_track.autoselect) {
                // TODO: auto select track by comparing track.language to system lang
            }
        }
        // set the index without the side effect of storing the Off label in _selectCaptions
        _setCurrentIndex(captionsMenuIndex);
    }

    function _setCurrentIndex(index) {
        if (_tracks.length) {
            _model.setVideoSubtitleTrack(index, _tracks);
        } else {
            _model.set('captionsIndex', index);
        }
    }

    function _setCaptionsList() {
        var captionsList = _captionsMenu();
        if (listIdentity(captionsList) !== listIdentity(_model.get('captionsList'))) {
            _selectDefaultIndex();
            _model.set('captionsList', captionsList);
        }
    }

    function listIdentity(list) {
        return list.map(function (item) {
            return item.id + '-' + item.label;
        }).join(',');
    }

    this.setSubtitlesTracks = _setSubtitlesTracks;

    this.getCurrentIndex = function () {
        return _model.get('captionsIndex');
    };

    this.getCaptionsList = function () {
        return _model.get('captionsList');
    };

    this.destroy = function () {
        this.off(null, null, this);
    };
};

_extends(Captions.prototype, _backbone2.default);

exports.default = Captions;

/***/ }),
/* 155 */
/*!*****************************!*\
  !*** ./src/js/view/view.js ***!
  \*****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _player = __webpack_require__(/*! templates/player */ 156);

var _player2 = _interopRequireDefault(_player);

var _errorContainer = __webpack_require__(/*! view/error-container */ 35);

var _errorContainer2 = _interopRequireDefault(_errorContainer);

var _audioMode = __webpack_require__(/*! view/utils/audio-mode */ 157);

var _viewsManager = __webpack_require__(/*! view/utils/views-manager */ 158);

var _viewsManager2 = _interopRequireDefault(_viewsManager);

var _visibility = __webpack_require__(/*! view/utils/visibility */ 159);

var _visibility2 = _interopRequireDefault(_visibility);

var _activeTab = __webpack_require__(/*! utils/active-tab */ 92);

var _activeTab2 = _interopRequireDefault(_activeTab);

var _requestAnimationFrame = __webpack_require__(/*! utils/request-animation-frame */ 81);

var _breakpoint2 = __webpack_require__(/*! view/utils/breakpoint */ 82);

var _skin = __webpack_require__(/*! view/utils/skin */ 160);

var _environment = __webpack_require__(/*! environment/environment */ 11);

var _controlsLoader = __webpack_require__(/*! controller/controls-loader */ 40);

var ControlsLoader = _interopRequireWildcard(_controlsLoader);

var _events = __webpack_require__(/*! events/events */ 5);

var _backbone = __webpack_require__(/*! utils/backbone.events */ 7);

var _backbone2 = _interopRequireDefault(_backbone);

var _dom = __webpack_require__(/*! utils/dom */ 23);

var _css = __webpack_require__(/*! utils/css */ 24);

var _underscore = __webpack_require__(/*! utils/underscore */ 0);

var _underscore2 = _interopRequireDefault(_underscore);

var _requestFullscreenHelper = __webpack_require__(/*! view/utils/request-fullscreen-helper */ 161);

var _requestFullscreenHelper2 = _interopRequireDefault(_requestFullscreenHelper);

var _flagNoFocus = __webpack_require__(/*! view/utils/flag-no-focus */ 162);

var _flagNoFocus2 = _interopRequireDefault(_flagNoFocus);

var _clickhandler = __webpack_require__(/*! view/utils/clickhandler */ 163);

var _clickhandler2 = _interopRequireDefault(_clickhandler);

var _captionsrenderer = __webpack_require__(/*! view/captionsrenderer */ 164);

var _captionsrenderer2 = _interopRequireDefault(_captionsrenderer);

var _logo2 = __webpack_require__(/*! view/logo */ 165);

var _logo3 = _interopRequireDefault(_logo2);

var _preview2 = __webpack_require__(/*! view/preview */ 167);

var _preview3 = _interopRequireDefault(_preview2);

var _title2 = __webpack_require__(/*! view/title */ 168);

var _title3 = _interopRequireDefault(_title2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(/*! css/jwplayer.less */ 169);

var ControlsModule = void 0;

var _isMobile = _environment.OS.mobile;
var _isIE = _environment.Browser.ie;

function View(_api, _model) {
    var _this = _extends(this, _backbone2.default, {
        isSetup: false,
        api: _api,
        model: _model
    });

    var _playerElement = (0, _dom.createElement)((0, _player2.default)(_model.get('id'), _model.get('localization').player));
    var _videoLayer = _playerElement.querySelector('.jw-media');

    var _preview = new _preview3.default(_model);
    var _title = new _title3.default(_model);

    var _captionsRenderer = new _captionsrenderer2.default(_model);
    _captionsRenderer.on('all', _this.trigger, _this);

    var _logo = void 0;

    var _lastWidth = void 0;
    var _lastHeight = void 0;

    var _resizeMediaTimeout = -1;
    var _resizeContainerRequestId = -1;
    var _stateClassRequestId = -1;

    var displayClickHandler = void 0;
    var fullscreenHelpers = void 0;
    var focusHelper = void 0;

    var _breakpoint = null;
    var _controls = void 0;

    function reasonInteraction() {
        return { reason: 'interaction' };
    }

    this.updateBounds = function () {
        (0, _requestAnimationFrame.cancelAnimationFrame)(_resizeContainerRequestId);
        var inDOM = document.body.contains(_playerElement);
        var rect = (0, _dom.bounds)(_playerElement);
        var containerWidth = Math.round(rect.width);
        var containerHeight = Math.round(rect.height);

        // If the container is the same size as before, return early
        if (containerWidth === _lastWidth && containerHeight === _lastHeight) {
            // Listen for player to be added to DOM
            if (!_lastWidth || !_lastHeight) {
                _responsiveListener();
            }
            _model.set('inDom', inDOM);
            return;
        }
        // If we have bad values for either dimension, return early
        if (!containerWidth || !containerHeight) {
            // If we haven't established player size, try again
            if (!_lastWidth || !_lastHeight) {
                _responsiveListener();
            }
        }

        // Don't update container dimensions to 0, 0 when not in DOM
        if (containerWidth || containerHeight || inDOM) {
            _model.set('containerWidth', containerWidth);
            _model.set('containerHeight', containerHeight);
        }
        _model.set('inDom', inDOM);

        if (inDOM) {
            _viewsManager2.default.observe(_playerElement);
        }
    };

    this.updateStyles = function () {
        var containerWidth = _model.get('containerWidth');
        var containerHeight = _model.get('containerHeight');

        if (_model.get('controls')) {
            updateContainerStyles(containerWidth, containerHeight);
        }

        if (_controls) {
            _controls.resize(containerWidth, containerHeight);
        }

        _resizeMedia(containerWidth, containerHeight);
        _captionsRenderer.resize();
    };

    this.checkResized = function () {
        var containerWidth = _model.get('containerWidth');
        var containerHeight = _model.get('containerHeight');
        if (containerWidth !== _lastWidth || containerHeight !== _lastHeight) {
            _lastWidth = containerWidth;
            _lastHeight = containerHeight;
            _this.trigger(_events.RESIZE, {
                width: containerWidth,
                height: containerHeight
            });
            var breakpoint = (0, _breakpoint2.getBreakpoint)(containerWidth);
            if (_breakpoint !== breakpoint) {
                _breakpoint = breakpoint;
                _this.trigger(_events.BREAKPOINT, {
                    breakpoint: _breakpoint
                });
            }
        }
    };

    function _responsiveListener() {
        (0, _requestAnimationFrame.cancelAnimationFrame)(_resizeContainerRequestId);
        _resizeContainerRequestId = (0, _requestAnimationFrame.requestAnimationFrame)(_responsiveUpdate);
    }

    function _responsiveUpdate() {
        if (!_this.isSetup) {
            return;
        }
        _this.updateBounds();
        _this.updateStyles();
        _this.checkResized();
    }

    function updateContainerStyles(width, height) {
        var audioMode = (0, _audioMode.isAudioMode)(_model);
        // Set timeslider flags
        if (_underscore2.default.isNumber(width) && _underscore2.default.isNumber(height)) {
            var breakpoint = (0, _breakpoint2.getBreakpoint)(width);
            (0, _breakpoint2.setBreakpoint)(_playerElement, breakpoint);

            var smallPlayer = breakpoint < 2;
            (0, _dom.toggleClass)(_playerElement, 'jw-flag-small-player', smallPlayer);
            (0, _dom.toggleClass)(_playerElement, 'jw-orientation-portrait', height > width);
        }
        (0, _dom.toggleClass)(_playerElement, 'jw-flag-audio-player', audioMode);
        _model.set('audioMode', audioMode);
    }

    this.setup = function () {
        _preview.setup(_playerElement.querySelector('.jw-preview'));
        _title.setup(_playerElement.querySelector('.jw-title'));

        _logo = new _logo3.default(_model);
        _logo.setup();
        _logo.setContainer(_playerElement);
        _logo.on(_events.LOGO_CLICK, _logoClickHandler);

        // captions rendering
        _captionsRenderer.setup(_playerElement.id, _model.get('captions'));

        // captions should be placed behind controls, and not hidden when controls are hidden
        _playerElement.insertBefore(_captionsRenderer.element(), _title.element());

        // Display Click and Double Click Handling
        displayClickHandler = clickHandlerHelper(_api, _model, _videoLayer);

        focusHelper = (0, _flagNoFocus2.default)(_playerElement);
        fullscreenHelpers = (0, _requestFullscreenHelper2.default)(_playerElement, document, _fullscreenChangeHandler);

        _model.on('change:hideAdsControls', function (model, val) {
            (0, _dom.toggleClass)(_playerElement, 'jw-flag-ads-hide-controls', val);
        });
        _model.on('change:scrubbing', function (model, val) {
            (0, _dom.toggleClass)(_playerElement, 'jw-flag-dragging', val);
        });
        _model.on('change:playRejected', function (model, val) {
            (0, _dom.toggleClass)(_playerElement, 'jw-flag-play-rejected', val);
        });

        // Native fullscreen (coming through from the provider)
        _model.on(_events.NATIVE_FULLSCREEN, _fullscreenChangeHandler);

        _model.on('change:' + _events.MEDIA_VISUAL_QUALITY, function () {
            _resizeMedia();
        });

        var playerViewModel = _model.player;
        playerViewModel.on('change:errorEvent', _errorHandler);

        _model.change('stretching', onStretchChange);
        _model.change('flashBlocked', onFlashBlockedChange);

        var width = _model.get('width');
        var height = _model.get('height');
        _resizePlayer(width, height);
        _model.change('aspectratio', onAspectRatioChange);
        if (_model.get('controls')) {
            updateContainerStyles(width, height);
        } else {
            (0, _dom.addClass)(_playerElement, 'jw-flag-controls-hidden');
        }

        if (_isIE) {
            (0, _dom.addClass)(_playerElement, 'jw-ie');
        }

        var skin = _model.get('skin') || {};

        if (skin.name) {
            (0, _dom.replaceClass)(_playerElement, /jw-skin-\S+/, 'jw-skin-' + skin.name);
        }

        var skinColors = (0, _skin.normalizeSkin)(skin);
        (0, _skin.handleColorOverrides)(_model.get('id'), skinColors);

        // adds video tag to video layer
        _model.set('mediaContainer', _videoLayer);
        _model.set('iFrame', _environment.Features.iframe);
        _model.set('activeTab', (0, _activeTab2.default)());
        _model.set('touchMode', _isMobile && (typeof height === 'string' || height >= _audioMode.CONTROLBAR_ONLY_HEIGHT));

        _viewsManager2.default.add(this);

        this.isSetup = true;
        _model.trigger('viewSetup', _playerElement);

        var inDOM = document.body.contains(_playerElement);
        if (inDOM) {
            _viewsManager2.default.observe(_playerElement);
        }
        _model.set('inDom', inDOM);
    };

    function updateVisibility() {
        _model.set('visibility', (0, _visibility2.default)(_model, _playerElement));
    }

    this.init = function () {
        this.updateBounds();

        _model.on('change:fullscreen', _fullscreen);
        _model.on('change:activeTab', updateVisibility);
        _model.on('change:fullscreen', updateVisibility);
        _model.on('change:intersectionRatio', updateVisibility);
        _model.on('change:visibility', redraw);
        _model.on('instreamMode', function (instreamMode) {
            if (instreamMode) {
                setupInstream();
            } else {
                destroyInstream();
            }
        });

        updateVisibility();

        // Always draw first player for icons to load
        if (_viewsManager2.default.size() === 1 && !_model.get('visibility')) {
            redraw(_model, 1, 0);
        }

        var playerViewModel = _model.player;

        _model.change('state', _stateHandler);
        playerViewModel.change('controls', changeControls);
        playerViewModel.change('streamType', _setLiveMode);
        _model.change('mediaType', _onMediaTypeChange);
        playerViewModel.change('playlistItem', onPlaylistItem);
        // Triggering 'resize' resulting in player 'ready'
        _lastWidth = _lastHeight = null;
        this.checkResized();
    };

    function changeControls(model, enable) {
        var controlsEvent = {
            controls: enable
        };
        if (enable) {
            ControlsModule = ControlsLoader.module.controls;
            if (!ControlsModule) {
                controlsEvent.loadPromise = ControlsLoader.load().then(function (Controls) {
                    ControlsModule = Controls;
                    // Check that controls is still true after the loader promise resolves
                    var enabledState = model.get('controls');
                    if (enabledState) {
                        addControls();
                    }
                    return enabledState;
                });
                controlsEvent.loadPromise.catch(function (reason) {
                    _this.trigger(_events.ERROR, {
                        message: 'Controls failed to load',
                        reason: reason
                    });
                });
            } else {
                addControls();
            }
        } else {
            _this.removeControls();
        }
        // Only trigger controls events after the player and view are set up (and has width/height)
        if (_lastWidth && _lastHeight) {
            _this.trigger(_events.CONTROLS, controlsEvent);
        }
    }

    function addControls() {
        var controls = new ControlsModule(document, _this.element());
        _this.addControls(controls);
    }

    function redraw(model, visibility, lastVisibility) {
        if (visibility && !lastVisibility) {
            _stateHandler(model, model.get('state'));
            _this.updateStyles();
        }
    }

    function clickHandlerHelper(api, model, videoLayer) {
        var clickHandler = new _clickhandler2.default(model, videoLayer);
        var controls = model.get('controls');
        clickHandler.on({
            click: function click() {
                _this.trigger(_events.DISPLAY_CLICK);

                if (_controls) {
                    if (settingsMenuVisible()) {
                        _controls.settingsMenu.close();
                    } else {
                        api.playToggle(reasonInteraction());
                    }
                }
            },
            tap: function tap() {
                _playerElement.removeEventListener('mousemove', moveHandler);
                _playerElement.removeEventListener('mouseout', outHandler);
                _playerElement.removeEventListener('mouseover', overHandler);
                _this.trigger(_events.DISPLAY_CLICK);
                if (settingsMenuVisible()) {
                    _controls.settingsMenu.close();
                }
                var state = model.get('state');

                if (controls && (state === _events.STATE_IDLE || state === _events.STATE_COMPLETE || model.get('instream') && state === _events.STATE_PAUSED)) {
                    api.playToggle(reasonInteraction());
                }

                if (controls && state === _events.STATE_PAUSED) {
                    // Toggle visibility of the controls when tapping the media
                    // Do not add mobile toggle "jw-flag-controls-hidden" in these cases
                    if (model.get('instream') || model.get('castActive') || model.get('mediaType') === 'audio') {
                        return;
                    }
                    (0, _dom.toggleClass)(_playerElement, 'jw-flag-controls-hidden');
                    _captionsRenderer.renderCues(true);
                } else if (_controls) {
                    if (!_controls.showing) {
                        _controls.userActive();
                    } else {
                        _controls.userInactive();
                    }
                }
            },
            doubleClick: function doubleClick() {
                return _controls && api.setFullscreen();
            }
        });

        _playerElement.addEventListener('mousemove', moveHandler);
        _playerElement.addEventListener('mouseover', overHandler);
        _playerElement.addEventListener('mouseout', outHandler);

        return clickHandler;
    }

    function moveHandler(event) {
        if (_controls) {
            _controls.mouseMove(event);
        }
    }

    function overHandler(event) {
        if (_controls && !_controls.showing && event.target.nodeName === 'IFRAME') {
            _controls.userActive();
        }
    }

    function outHandler(event) {
        if (_controls && _controls.showing && event.relatedTarget && !_playerElement.contains(event.relatedTarget)) {
            _controls.userActive();
        }
    }

    function onStretchChange(model, newVal) {
        (0, _dom.replaceClass)(_playerElement, /jw-stretch-\S+/, 'jw-stretch-' + newVal);
    }

    function onAspectRatioChange(model, aspectratio) {
        (0, _dom.toggleClass)(_playerElement, 'jw-flag-aspect-mode', !!aspectratio);
        var aspectRatioContainer = _playerElement.querySelector('.jw-aspect');
        (0, _css.style)(aspectRatioContainer, {
            paddingTop: aspectratio || null
        });
    }

    function onFlashBlockedChange(model, isBlocked) {
        (0, _dom.toggleClass)(_playerElement, 'jw-flag-flash-blocked', isBlocked);
    }

    function _logoClickHandler(evt) {
        if (!evt.link) {
            if (_model.get('controls')) {
                _api.playToggle(reasonInteraction());
            }
        } else {
            _api.pause(reasonInteraction());
            _api.setFullscreen(false);
            window.open(evt.link, evt.linktarget);
        }
    }

    this.addControls = function (controls) {
        _controls = controls;

        (0, _dom.removeClass)(_playerElement, 'jw-flag-controls-hidden');

        controls.enable(_api, _model);

        // refresh breakpoint and timeslider classes
        if (_lastHeight) {
            updateContainerStyles(_lastWidth, _lastHeight);
            controls.resize(_lastWidth, _lastHeight);
            _captionsRenderer.renderCues(true);
        }

        controls.on('userActive userInactive', function () {
            var state = _model.get('state');
            if (state === _events.STATE_PLAYING || state === _events.STATE_BUFFERING) {
                _captionsRenderer.renderCues(true);
            }
        });

        controls.on('all', _this.trigger, _this);

        if (_model.get('instream')) {
            _controls.setupInstream();
        }
    };

    this.removeControls = function () {
        if (_controls) {
            _controls.disable(_model);
            _controls = null;
        }

        (0, _dom.addClass)(_playerElement, 'jw-flag-controls-hidden');
    };

    // Perform the switch to fullscreen
    var _fullscreen = function _fullscreen(model, state) {

        // Unmute the video so volume can be adjusted with native controls in fullscreen
        if (state && _controls && model.get('autostartMuted')) {
            _controls.unmuteAutoplay(_api, model);
        }

        if (fullscreenHelpers.supportsDomFullscreen()) {
            if (state) {
                fullscreenHelpers.requestFullscreen();
            } else {
                fullscreenHelpers.exitFullscreen();
            }
            _toggleDOMFullscreen(_playerElement, state);
        } else if (_isIE) {
            _toggleDOMFullscreen(_playerElement, state);
        } else {
            // Request media element fullscreen (iOS)
            var provider = model.getVideo();
            provider.setFullscreen(state);
        }
    };

    function _resizePlayer(playerWidth, playerHeight, resetAspectMode) {
        var widthSet = playerWidth !== undefined;
        var heightSet = playerHeight !== undefined;
        var playerStyle = {
            width: playerWidth
        };

        // when jwResize is called remove aspectMode and force layout
        if (heightSet && resetAspectMode) {
            _model.set('aspectratio', null);
        }
        if (!_model.get('aspectratio')) {
            // If the height is a pixel value (number) greater than 0, snap it to the minimum supported height
            // Allow zero to mean "hide the player"
            var height = playerHeight;
            if (_underscore2.default.isNumber(height) && height !== 0) {
                height = Math.max(height, _audioMode.CONTROLBAR_ONLY_HEIGHT);
            }
            playerStyle.height = height;
        }

        if (widthSet && heightSet) {
            _model.set('width', playerWidth);
            _model.set('height', playerHeight);
        }

        (0, _css.style)(_playerElement, playerStyle);
    }

    function _resizeMedia(containerWidth, containerHeight) {
        if (!containerWidth || isNaN(1 * containerWidth)) {
            containerWidth = _model.get('containerWidth');
            if (!containerWidth) {
                return;
            }
        }
        if (!containerHeight || isNaN(1 * containerHeight)) {
            containerHeight = _model.get('containerHeight');
            if (!containerHeight) {
                return;
            }
        }

        if (_preview) {
            _preview.resize(containerWidth, containerHeight, _model.get('stretching'));
        }

        var provider = _model.getVideo();
        if (!provider) {
            return;
        }
        provider.resize(containerWidth, containerHeight, _model.get('stretching'));
    }

    this.resize = function (playerWidth, playerHeight) {
        var resetAspectMode = true;
        _resizePlayer(playerWidth, playerHeight, resetAspectMode);
        _responsiveUpdate();
    };
    this.resizeMedia = _resizeMedia;

    function _isNativeFullscreen() {
        // Return whether or not we're in native fullscreen
        if (fullscreenHelpers.supportsDomFullscreen()) {
            var fsElement = fullscreenHelpers.fullscreenElement();
            return !!(fsElement && fsElement === _playerElement);
        }
        // If native fullscreen is not available, return video fullscreen state
        var provider = _model.getVideo();
        return provider.getFullScreen();
    }

    function _fullscreenChangeHandler(event) {
        var modelState = _model.get('fullscreen');
        var newState = event.jwstate !== undefined ? event.jwstate : _isNativeFullscreen();

        // If fullscreen was triggered by something other than the player
        //  then we want to sync up our internal state
        if (modelState !== newState) {
            _model.set('fullscreen', newState);
        }

        _responsiveListener();
        clearTimeout(_resizeMediaTimeout);
        _resizeMediaTimeout = setTimeout(_resizeMedia, 200);
    }

    function _toggleDOMFullscreen(playerElement, fullscreenState) {
        (0, _dom.toggleClass)(playerElement, 'jw-flag-fullscreen', fullscreenState);
        (0, _css.style)(document.body, { overflowY: fullscreenState ? 'hidden' : '' });

        if (fullscreenState && _controls) {
            // When going into fullscreen, we want the control bar to fade after a few seconds
            _controls.userActive();
        }

        _resizeMedia();
        _responsiveListener();
    }

    function _setLiveMode(model, streamType) {
        var live = streamType === 'LIVE';
        (0, _dom.toggleClass)(_playerElement, 'jw-flag-live', live);
    }

    function _onMediaTypeChange(model, val) {
        var isAudioFile = val === 'audio';
        var provider = model.get('provider');

        (0, _dom.toggleClass)(_playerElement, 'jw-flag-media-audio', isAudioFile);

        var isFlash = provider && provider.name.indexOf('flash') === 0;
        var element = isAudioFile && !isFlash ? _videoLayer : _videoLayer.nextSibling;
        // Put the preview element before the media element in order to display browser captions
        // otherwise keep it on top of the media element to display captions with the captions renderer
        _playerElement.insertBefore(_preview.el, element);
    }

    function _errorHandler(model, evt) {
        if (!evt) {
            _title.playlistItem(model, model.get('playlistItem'));
            return;
        }
        var errorContainer = (0, _errorContainer2.default)(model, evt.message);
        if (_errorContainer2.default.cloneIcon) {
            errorContainer.querySelector('.jw-icon').appendChild(_errorContainer2.default.cloneIcon('error'));
        }
        _title.hide();
        _playerElement.appendChild(errorContainer.firstChild);
        (0, _dom.toggleClass)(_playerElement, 'jw-flag-audio-player', !!model.get('audioMode'));
    }

    function _stateHandler(model, newState, oldState) {
        if (!_this.isSetup) {
            return;
        }

        if (oldState === _events.STATE_ERROR) {
            var errorContainer = _playerElement.querySelector('.jw-error-msg');
            if (errorContainer) {
                errorContainer.parentNode.removeChild(errorContainer);
            }
        }

        (0, _requestAnimationFrame.cancelAnimationFrame)(_stateClassRequestId);
        if (newState === _events.STATE_PLAYING) {
            _stateUpdate(newState);
        } else {
            _stateClassRequestId = (0, _requestAnimationFrame.requestAnimationFrame)(function () {
                return _stateUpdate(newState);
            });
        }
    }

    function _stateUpdate(state) {
        if (_model.get('controls') && state !== _events.STATE_PAUSED && (0, _dom.hasClass)(_playerElement, 'jw-flag-controls-hidden')) {
            (0, _dom.removeClass)(_playerElement, 'jw-flag-controls-hidden');
        }
        (0, _dom.replaceClass)(_playerElement, /jw-state-\S+/, 'jw-state-' + state);

        switch (state) {
            case _events.STATE_IDLE:
            case _events.STATE_ERROR:
            case _events.STATE_COMPLETE:
                if (_captionsRenderer) {
                    _captionsRenderer.hide();
                }
                break;
            default:
                if (_captionsRenderer) {
                    _captionsRenderer.show();
                    if (state === _events.STATE_PAUSED && _controls && !_controls.showing) {
                        _captionsRenderer.renderCues(true);
                    }
                }
                break;
        }
    }

    function setMediaTitleAttribute(model, playlistItem) {
        var videotag = model.get('mediaElement');
        // chromecast and flash providers do no support video tags
        if (!videotag) {
            return;
        }

        // Writing a string to innerHTML completely decodes multiple-encoded strings
        var dummyDiv = document.createElement('div');
        dummyDiv.innerHTML = playlistItem.title || '';
        videotag.setAttribute('title', dummyDiv.textContent);
    }

    function setPosterImage(item) {
        _preview.setImage(item && item.image);
    }

    function onPlaylistItem(model, item) {
        setPosterImage(item);
        // Set the title attribute of the video tag to display background media information on mobile devices
        if (_isMobile) {
            setMediaTitleAttribute(model, item);
        }
    }

    var settingsMenuVisible = function settingsMenuVisible() {
        var settingsMenu = _controls && _controls.settingsMenu;
        return !!(settingsMenu && settingsMenu.visible);
    };

    var setupInstream = function setupInstream() {
        (0, _dom.addClass)(_playerElement, 'jw-flag-ads');

        if (_controls) {
            _controls.setupInstream();
        }
    };

    var destroyInstream = function destroyInstream() {
        if (!displayClickHandler) {
            // view was destroyed
            return;
        }
        if (_controls) {
            _controls.destroyInstream(_model);
        }

        _this.setAltText('');
        (0, _dom.removeClass)(_playerElement, ['jw-flag-ads', 'jw-flag-ads-hide-controls']);
        _model.set('hideAdsControls', false);

        // Make sure that the provider's media element is returned to the DOM after instream mode
        var provider = _model.getVideo();
        if (provider) {
            provider.setContainer(_videoLayer);
        }

        // reset display click handler
        displayClickHandler.revertAlternateClickHandlers();
    };

    this.setAltText = function (text) {
        _model.set('altText', text);
    };

    this.clickHandler = function () {
        return displayClickHandler;
    };

    this.getContainer = this.element = function () {
        return _playerElement;
    };

    this.controlsContainer = function () {
        if (_controls) {
            return _controls.element();
        }
        return null;
    };

    this.getSafeRegion = function () {
        var excludeControlbar = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        var safeRegion = {
            x: 0,
            y: 0,
            width: _lastWidth || 0,
            height: _lastHeight || 0
        };
        if (_controls) {
            // Subtract controlbar from the bottom when using one
            if (excludeControlbar) {
                safeRegion.height -= _controls.controlbarHeight();
            }
        }
        return safeRegion;
    };

    this.setCaptions = function (captionsStyle) {
        _captionsRenderer.clear();
        _captionsRenderer.setup(_model.get('id'), captionsStyle);
        _captionsRenderer.resize();
    };

    this.destroy = function () {
        _model.destroy();
        _viewsManager2.default.unobserve(_playerElement);
        _viewsManager2.default.remove(this);
        this.isSetup = false;
        this.off();
        (0, _requestAnimationFrame.cancelAnimationFrame)(_resizeContainerRequestId);
        clearTimeout(_resizeMediaTimeout);
        if (focusHelper) {
            focusHelper.destroy();
            focusHelper = null;
        }
        if (fullscreenHelpers) {
            fullscreenHelpers.destroy();
            fullscreenHelpers = null;
        }
        if (_controls) {
            _controls.disable(_model);
        }
        if (displayClickHandler) {
            displayClickHandler.destroy();
            _playerElement.removeEventListener('mousemove', moveHandler);
            _playerElement.removeEventListener('mouseout', outHandler);
            _playerElement.removeEventListener('mouseover', overHandler);
            displayClickHandler = null;
        }
        _captionsRenderer.destroy();
        if (_logo) {
            _logo.destroy();
            _logo = null;
        }
        (0, _css.clearCss)(_model.get('id'));
    };
}

exports.default = View;

/***/ }),
/* 156 */
/*!*********************************!*\
  !*** ./src/templates/player.js ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (id) {
    var ariaLabel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    return '<div id="' + id + '" class="jwplayer jw-reset jw-state-setup" tabindex="0" aria-label="' + ariaLabel + '">' + '<div class="jw-aspect jw-reset"></div>' + '<div class="jw-media jw-reset"></div>' + '<div class="jw-preview jw-reset"></div>' + '<div class="jw-title jw-reset">' + '<div class="jw-title-primary jw-reset"></div>' + '<div class="jw-title-secondary jw-reset"></div>' + '</div>' + '<div class="jw-overlays jw-reset"></div>' + '</div>';
};

/***/ }),
/* 157 */
/*!*****************************************!*\
  !*** ./src/js/view/utils/audio-mode.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var CONTROLBAR_ONLY_HEIGHT = exports.CONTROLBAR_ONLY_HEIGHT = 44;

var isAudioMode = exports.isAudioMode = function isAudioMode(model) {
    var playerHeight = model.get('height');
    if (model.get('aspectratio')) {
        return false;
    }
    if (typeof playerHeight === 'string' && playerHeight.indexOf('%') > -1) {
        return false;
    }

    // Coerce into Number (don't parse out CSS units)
    var verticalPixels = playerHeight * 1 || NaN;
    verticalPixels = !isNaN(verticalPixels) ? verticalPixels : model.get('containerHeight');
    if (!verticalPixels) {
        return false;
    }

    return verticalPixels && verticalPixels <= CONTROLBAR_ONLY_HEIGHT;
};

/***/ }),
/* 158 */
/*!********************************************!*\
  !*** ./src/js/view/utils/views-manager.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _activeTab = __webpack_require__(/*! utils/active-tab */ 92);

var _activeTab2 = _interopRequireDefault(_activeTab);

var _requestAnimationFrame = __webpack_require__(/*! utils/request-animation-frame */ 81);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var views = [];
var observed = {};

var intersectionObserver = void 0;
var responsiveRepaintRequestId = -1;

function lazyInitIntersectionObserver() {
    var IntersectionObserver = window.IntersectionObserver;
    if (!intersectionObserver) {
        // Fire the callback every time 25% of the player comes in/out of view
        intersectionObserver = new IntersectionObserver(function (entries) {
            if (entries && entries.length) {
                for (var i = entries.length; i--;) {
                    var entry = entries[i];
                    for (var j = views.length; j--;) {
                        var view = views[j];
                        if (entry.target === view.getContainer()) {
                            view.model.set('intersectionRatio', entry.intersectionRatio);
                            break;
                        }
                    }
                }
            }
        }, { threshold: [0, 0.25, 0.5, 0.75, 1] });
    }
}

function scheduleResponsiveRedraw() {
    (0, _requestAnimationFrame.cancelAnimationFrame)(responsiveRepaintRequestId);
    responsiveRepaintRequestId = (0, _requestAnimationFrame.requestAnimationFrame)(function responsiveRepaint() {
        views.forEach(function (view) {
            view.updateBounds();
        });
        views.forEach(function (view) {
            if (view.model.get('visibility')) {
                view.updateStyles();
            }
        });
        views.forEach(function (view) {
            view.checkResized();
        });
    });
}

function onVisibilityChange() {
    views.forEach(function (view) {
        view.model.set('activeTab', (0, _activeTab2.default)());
    });
}

document.addEventListener('visibilitychange', onVisibilityChange);
document.addEventListener('webkitvisibilitychange', onVisibilityChange);
window.addEventListener('resize', scheduleResponsiveRedraw);
window.addEventListener('orientationchange', scheduleResponsiveRedraw);

window.addEventListener('beforeunload', function () {
    document.removeEventListener('visibilitychange', onVisibilityChange);
    document.removeEventListener('webkitvisibilitychange', onVisibilityChange);
    window.removeEventListener('resize', scheduleResponsiveRedraw);
    window.removeEventListener('orientationchange', scheduleResponsiveRedraw);
});

exports.default = {
    add: function add(view) {
        views.push(view);
    },
    remove: function remove(view) {
        var index = views.indexOf(view);
        if (index !== -1) {
            views.splice(index, 1);
        }
    },
    size: function size() {
        return views.length;
    },
    observe: function observe(container) {
        lazyInitIntersectionObserver();

        if (observed[container.id]) {
            return;
        }

        observed[container.id] = true;
        intersectionObserver.observe(container);
    },
    unobserve: function unobserve(container) {
        if (intersectionObserver && observed[container.id]) {
            delete observed[container.id];
            intersectionObserver.unobserve(container);
        }
    }
};

/***/ }),
/* 159 */
/*!*****************************************!*\
  !*** ./src/js/view/utils/visibility.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getVisibility;
function getVisibility(model, element) {
    // Set visibility to 1 if we're in fullscreen
    if (model.get('fullscreen')) {
        return 1;
    }

    // Set visibility to 0 if we're not in the active tab
    if (!model.get('activeTab')) {
        return 0;
    }
    // Otherwise, set it to the intersection ratio reported from the intersection observer
    var intersectionRatio = model.get('intersectionRatio');

    if (intersectionRatio === undefined) {
        // Get intersectionRatio through brute force
        intersectionRatio = computeVisibility(element);
    }

    return intersectionRatio;
}

function computeVisibility(target) {
    var html = document.documentElement;
    var body = document.body;
    var rootRect = {
        top: 0,
        left: 0,
        right: html.clientWidth || body.clientWidth,
        width: html.clientWidth || body.clientWidth,
        bottom: html.clientHeight || body.clientHeight,
        height: html.clientHeight || body.clientHeight
    };

    if (!body.contains(target)) {
        return 0;
    }
    // If the element isn't displayed, an intersection can't happen.
    if (window.getComputedStyle(target).display === 'none') {
        return 0;
    }

    var targetRect = getBoundingClientRect(target);
    if (!targetRect) {
        return 0;
    }

    var intersectionRect = targetRect;
    var parent = target.parentNode;
    var atRoot = false;

    while (!atRoot) {
        var parentRect = null;
        if (parent === body || parent === html || parent.nodeType !== 1) {
            atRoot = true;
            parentRect = rootRect;
        } else if (window.getComputedStyle(parent).overflow !== 'visible') {
            parentRect = getBoundingClientRect(parent);
        }
        if (parentRect) {
            intersectionRect = computeRectIntersection(parentRect, intersectionRect);
            if (!intersectionRect) {
                return 0;
            }
        }
        parent = parent.parentNode;
    }
    var targetArea = targetRect.width * targetRect.height;
    var intersectionArea = intersectionRect.width * intersectionRect.height;
    return targetArea ? intersectionArea / targetArea : 0;
}

function getBoundingClientRect(el) {
    try {
        return el.getBoundingClientRect();
    } catch (e) {/* ignore Windows 7 IE11 "Unspecified error" */}
}

function computeRectIntersection(rect1, rect2) {
    var top = Math.max(rect1.top, rect2.top);
    var bottom = Math.min(rect1.bottom, rect2.bottom);
    var left = Math.max(rect1.left, rect2.left);
    var right = Math.min(rect1.right, rect2.right);
    var width = right - left;
    var height = bottom - top;
    return width >= 0 && height >= 0 && {
        top: top,
        bottom: bottom,
        left: left,
        right: right,
        width: width,
        height: height
    };
}

/***/ }),
/* 160 */
/*!***********************************!*\
  !*** ./src/js/view/utils/skin.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.normalizeSkin = normalizeSkin;
exports.handleColorOverrides = handleColorOverrides;

var _strings = __webpack_require__(/*! utils/strings */ 1);

var _css = __webpack_require__(/*! utils/css */ 24);

function normalizeSkin(skinConfig) {
    if (!skinConfig) {
        skinConfig = {};
    }

    var active = skinConfig.active;
    var inactive = skinConfig.inactive;
    var background = skinConfig.background;

    var colors = {};

    colors.controlbar = getControlBar(skinConfig.controlbar);

    colors.timeslider = getTimeSlider(skinConfig.timeslider);

    colors.menus = getMenus(skinConfig.menus);

    colors.tooltips = getTooltips(skinConfig.tooltips);

    function getControlBar(controlBarConfig) {
        if (controlBarConfig || active || inactive || background) {
            var config = {};

            controlBarConfig = controlBarConfig || {};
            config.iconsActive = controlBarConfig.iconsActive || active;
            config.icons = controlBarConfig.icons || inactive;
            config.text = controlBarConfig.text || inactive;
            config.background = controlBarConfig.background || background;

            return config;
        }
    }

    function getTimeSlider(timesliderConfig) {
        if (timesliderConfig || active) {
            var config = {};

            timesliderConfig = timesliderConfig || {};
            config.progress = timesliderConfig.progress || active;
            config.rail = timesliderConfig.rail;

            return config;
        }
    }

    function getMenus(menusConfig) {
        if (menusConfig || active || inactive || background) {
            var config = {};

            menusConfig = menusConfig || {};
            config.text = menusConfig.text || inactive;
            config.textActive = menusConfig.textActive || active;
            config.background = menusConfig.background || background;

            return config;
        }
    }

    function getTooltips(tooltipsConfig) {
        if (tooltipsConfig || inactive || background) {
            var config = {};

            tooltipsConfig = tooltipsConfig || {};
            config.text = tooltipsConfig.text || inactive;
            config.background = tooltipsConfig.background || background;

            return config;
        }
    }

    return colors;
}

function handleColorOverrides(playerId, skin) {
    if (!skin) {
        return;
    }

    function addStyle(elements, attr, value, extendParent) {
        if (!value) {
            return;
        }
        /* if extendParent is true, bundle the first selector of
         element string to the player element instead of defining it as a
         child of the player element (default). i.e. #player.sel-1 .sel-2 vs. #player .sel-1 .sel-2 */
        elements = (0, _strings.prefix)(elements, '#' + playerId + (extendParent ? '' : ' '));

        var o = {};
        o[attr] = value;
        (0, _css.css)(elements.join(', '), o, playerId);
    }

    // These will use standard style names for CSS since they are added directly to a style sheet
    // Using background instead of background-color so we don't have to clear gradients with background-image

    if (skin.controlbar) {
        styleControlbar(skin.controlbar);
    }
    if (skin.timeslider) {
        styleTimeslider(skin.timeslider);
    }
    if (skin.menus) {
        styleMenus(skin.menus);
    }
    if (skin.tooltips) {
        styleTooltips(skin.tooltips);
    }
    if (skin.menus) {
        insertGlobalColorClasses(skin.menus);
    }

    function styleControlbar(config) {

        addStyle([
        // controlbar text colors
        '.jw-controlbar .jw-icon-inline.jw-text', '.jw-title-primary', '.jw-title-secondary'], 'color', config.text);

        if (config.icons) {
            addStyle([
            // controlbar button colors
            '.jw-button-color:not(.jw-icon-cast)', '.jw-button-color.jw-toggle.jw-off:not(.jw-icon-cast)'], 'color', config.icons);

            addStyle(['.jw-display-icon-container .jw-button-color'], 'color', config.icons);

            // Chromecast overrides
            // Can't use addStyle since it will camel case the style name
            (0, _css.css)('#' + playerId + ' .jw-icon-cast button.jw-off', '{--disconnected-color: ' + config.icons + '}', playerId);
        }
        if (config.iconsActive) {
            addStyle(['.jw-display-icon-container .jw-button-color:hover', '.jw-display-icon-container .jw-button-color:focus'], 'color', config.iconsActive);

            // Apply active color
            addStyle([
            // Toggle and menu button active colors
            '.jw-button-color.jw-toggle:not(.jw-icon-cast)', '.jw-button-color:hover:not(.jw-icon-cast)', '.jw-button-color:focus:not(.jw-icon-cast)', '.jw-button-color.jw-toggle.jw-off:hover:not(.jw-icon-cast)'], 'color', config.iconsActive);

            addStyle(['.jw-svg-icon-buffer'], 'fill', config.icons);

            // Chromecast overrides
            // Can't use addStyle since it will camel case the style name
            (0, _css.css)('#' + playerId + ' .jw-icon-cast:hover button.jw-off', '{--disconnected-color: ' + config.iconsActive + '}', playerId);
            (0, _css.css)('#' + playerId + ' .jw-icon-cast:focus button.jw-off', '{--disconnected-color: ' + config.iconsActive + '}', playerId);
            (0, _css.css)('#' + playerId + ' .jw-icon-cast button.jw-off:focus', '{--disconnected-color: ' + config.iconsActive + '}', playerId);

            (0, _css.css)('#' + playerId + ' .jw-icon-cast button', '{--connected-color: ' + config.iconsActive + '}', playerId);
            (0, _css.css)('#' + playerId + ' .jw-icon-cast button:focus', '{--connected-color: ' + config.iconsActive + '}', playerId);
            (0, _css.css)('#' + playerId + ' .jw-icon-cast:hover button', '{--connected-color: ' + config.iconsActive + '}', playerId);
            (0, _css.css)('#' + playerId + ' .jw-icon-cast:focus button', '{--connected-color: ' + config.iconsActive + '}', playerId);
        }

        // A space is purposefully left before '.jw-settings-topbar' since extendParent is set to true in order to append ':not(.jw-state-idle)'
        addStyle([' .jw-settings-topbar', ':not(.jw-state-idle) .jw-controlbar', '.jw-flag-audio-player .jw-controlbar'], 'background', config.background, true);
    }

    function styleTimeslider(config) {

        addStyle(['.jw-progress', '.jw-knob'], 'background-color', config.progress);

        addStyle(['.jw-buffer'], 'background-color', (0, _css.getRgba)(config.progress, 50));

        addStyle(['.jw-rail'], 'background-color', config.rail);

        addStyle(['.jw-background-color.jw-slider-time', '.jw-slider-time .jw-cue'], 'background-color', config.background);
    }

    function styleMenus(config) {

        addStyle(['.jw-option', '.jw-toggle.jw-off', '.jw-skip .jw-skip-icon', '.jw-nextup-tooltip', '.jw-nextup-close', '.jw-settings-content-item', '.jw-related-title'], 'color', config.text);

        addStyle(['.jw-option.jw-active-option', '.jw-option:not(.jw-active-option):hover', '.jw-option:not(.jw-active-option):focus', '.jw-settings-item-active', '.jw-settings-content-item:hover', '.jw-settings-content-item:focus', '.jw-nextup-tooltip:hover', '.jw-nextup-tooltip:focus', '.jw-nextup-close:hover'], 'color', config.textActive);

        addStyle(['.jw-nextup', '.jw-settings-menu'], 'background', config.background);
    }

    function styleTooltips(config) {

        addStyle(['.jw-skip', '.jw-tooltip .jw-text', '.jw-time-tip .jw-text'], 'background-color', config.background);

        addStyle(['.jw-time-tip', '.jw-tooltip'], 'color', config.background);

        addStyle(['.jw-skip'], 'border', 'none');

        addStyle(['.jw-skip .jw-text', '.jw-skip .jw-icon', '.jw-time-tip .jw-text', '.jw-tooltip .jw-text'], 'color', config.text);
    }

    // Set global colors, used by related plugin
    // If a color is undefined simple-style-loader won't add their styles to the dom
    function insertGlobalColorClasses(config) {
        if (config.textActive) {
            var activeColorSet = {
                color: config.textActive,
                borderColor: config.textActive,
                stroke: config.textActive
            };
            (0, _css.css)('#' + playerId + ' .jw-color-active', activeColorSet, playerId);
            (0, _css.css)('#' + playerId + ' .jw-color-active-hover:hover', activeColorSet, playerId);
        }
        if (config.text) {
            var inactiveColorSet = {
                color: config.text,
                borderColor: config.text,
                stroke: config.text
            };
            (0, _css.css)('#' + playerId + ' .jw-color-inactive', inactiveColorSet, playerId);
            (0, _css.css)('#' + playerId + ' .jw-color-inactive-hover:hover', inactiveColorSet, playerId);
        }
    }
}

/***/ }),
/* 161 */
/*!********************************************************!*\
  !*** ./src/js/view/utils/request-fullscreen-helper.js ***!
  \********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (elementContext, documentContext, changeCallback) {
    var _requestFullscreen = elementContext.requestFullscreen || elementContext.webkitRequestFullscreen || elementContext.webkitRequestFullScreen || elementContext.mozRequestFullScreen || elementContext.msRequestFullscreen;

    var _exitFullscreen = documentContext.exitFullscreen || documentContext.webkitExitFullscreen || documentContext.webkitCancelFullScreen || documentContext.mozCancelFullScreen || documentContext.msExitFullscreen;

    var _supportsDomFullscreen = !!(_requestFullscreen && _exitFullscreen);

    for (var i = DOCUMENT_FULLSCREEN_EVENTS.length; i--;) {
        documentContext.addEventListener(DOCUMENT_FULLSCREEN_EVENTS[i], changeCallback);
    }

    return {
        events: DOCUMENT_FULLSCREEN_EVENTS,
        supportsDomFullscreen: function supportsDomFullscreen() {
            return _supportsDomFullscreen;
        },
        requestFullscreen: function requestFullscreen() {
            _requestFullscreen.apply(elementContext);
        },
        exitFullscreen: function exitFullscreen() {
            _exitFullscreen.apply(documentContext);
        },
        fullscreenElement: function fullscreenElement() {
            return documentContext.fullscreenElement || documentContext.webkitCurrentFullScreenElement || documentContext.mozFullScreenElement || documentContext.msFullscreenElement;
        },
        destroy: function destroy() {
            for (var _i = DOCUMENT_FULLSCREEN_EVENTS.length; _i--;) {
                documentContext.removeEventListener(DOCUMENT_FULLSCREEN_EVENTS[_i], changeCallback);
            }
        }
    };
};

var DOCUMENT_FULLSCREEN_EVENTS = ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange', 'MSFullscreenChange'];

/***/ }),
/* 162 */
/*!********************************************!*\
  !*** ./src/js/view/utils/flag-no-focus.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (elementContext) {
    var _focusFromClick = false;

    var onBlur = function onBlur() {
        _focusFromClick = false;
        (0, _dom.removeClass)(elementContext, 'jw-no-focus');
    };

    var onMouseDown = function onMouseDown() {
        _focusFromClick = true;
        (0, _dom.addClass)(elementContext, 'jw-no-focus');
    };

    var onFocus = function onFocus() {
        if (!_focusFromClick) {
            onBlur();
        }
    };

    elementContext.addEventListener('focus', onFocus);
    elementContext.addEventListener('blur', onBlur);
    elementContext.addEventListener('mousedown', onMouseDown);

    return {
        destroy: function destroy() {
            elementContext.removeEventListener('focus', onFocus);
            elementContext.removeEventListener('blur', onBlur);
            elementContext.removeEventListener('mousedown', onMouseDown);
        }
    };
};

var _dom = __webpack_require__(/*! utils/dom */ 23);

/***/ }),
/* 163 */
/*!*******************************************!*\
  !*** ./src/js/view/utils/clickhandler.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = __webpack_require__(/*! events/events */ 5);

var _ui = __webpack_require__(/*! utils/ui */ 73);

var _ui2 = _interopRequireDefault(_ui);

var _backbone = __webpack_require__(/*! utils/backbone.events */ 7);

var _backbone2 = _interopRequireDefault(_backbone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ClickHandler = function () {
    function ClickHandler(model, element) {
        _classCallCheck(this, ClickHandler);

        _extends(this, _backbone2.default);

        this.revertAlternateClickHandlers();
        this.domElement = element;
        this.model = model;

        this.ui = new _ui2.default(element, { enableDoubleTap: true, useMove: true }).on({
            'click tap': this.clickHandler,
            'doubleClick doubleTap': function doubleClickDoubleTap() {
                if (this.alternateDoubleClickHandler) {
                    this.alternateDoubleClickHandler();
                    return;
                }
                this.trigger('doubleClick');
            }
        }, this);
    }

    _createClass(ClickHandler, [{
        key: 'destroy',
        value: function destroy() {
            if (this.ui) {
                this.ui.destroy();
                this.ui = this.domElement = this.model = null;
                this.revertAlternateClickHandlers();
            }
        }
    }, {
        key: 'clickHandler',
        value: function clickHandler(evt) {
            if (this.model.get('flashBlocked')) {
                return;
            }
            if (this.alternateClickHandler) {
                this.alternateClickHandler(evt);
                return;
            }
            this.trigger(evt.type === _events.CLICK ? 'click' : 'tap');
        }
    }, {
        key: 'element',
        value: function element() {
            return this.domElement;
        }
    }, {
        key: 'setAlternateClickHandlers',
        value: function setAlternateClickHandlers(clickHandler, doubleClickHandler) {
            this.alternateClickHandler = clickHandler;
            this.alternateDoubleClickHandler = doubleClickHandler || null;
        }
    }, {
        key: 'revertAlternateClickHandlers',
        value: function revertAlternateClickHandlers() {
            this.alternateClickHandler = null;
            this.alternateDoubleClickHandler = null;
        }
    }]);

    return ClickHandler;
}();

exports.default = ClickHandler;

/***/ }),
/* 164 */
/*!*****************************************!*\
  !*** ./src/js/view/captionsrenderer.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _environment = __webpack_require__(/*! environment/environment */ 11);

var _coreLoader = __webpack_require__(/*! ../api/core-loader */ 12);

var _backbone = __webpack_require__(/*! utils/backbone.events */ 7);

var _backbone2 = _interopRequireDefault(_backbone);

var _events = __webpack_require__(/*! events/events */ 5);

var _css = __webpack_require__(/*! utils/css */ 24);

var _dom = __webpack_require__(/*! utils/dom */ 23);

var _underscore = __webpack_require__(/*! utils/underscore */ 0);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _WebVTT = void 0;

var _defaults = {
    back: true,
    backgroundOpacity: 50,
    edgeStyle: null,
    fontSize: 14,
    fontOpacity: 100,
    fontScale: 0.05, // Default captions font size = 1/20th of the video's height
    preprocessor: _underscore2.default.identity,
    windowOpacity: 0
};

/**
 * Component that renders the actual captions on screen.
 * param {ViewModel} viewModel - The player's ViewModel instance.
 */

var CaptionsRenderer = function CaptionsRenderer(viewModel) {
    var _this = this;

    var _model = viewModel.player;

    var _options = void 0;
    var _captionsTrack = void 0;
    var _currentCues = void 0;
    var _timeEvent = void 0;
    var _display = void 0;
    var _captionsWindow = void 0;
    var _textContainer = void 0;
    var _fontScale = void 0;
    var _windowStyle = void 0;

    _display = document.createElement('div');
    _display.className = 'jw-captions jw-reset';

    this.show = function () {
        (0, _dom.addClass)(_display, 'jw-captions-enabled');
    };

    this.hide = function () {
        (0, _dom.removeClass)(_display, 'jw-captions-enabled');
    };

    // Assign list of captions to the renderer
    this.populate = function (captions) {
        if (_model.get('renderCaptionsNatively')) {
            return;
        }

        _currentCues = [];
        _captionsTrack = captions;
        if (!captions) {
            this.renderCues();
            return;
        }
        this.selectCues(captions, _timeEvent);
    };

    this.resize = function () {
        _setFontSize();
        this.renderCues(true);
    };

    this.renderCues = function (updateBoxPosition) {
        updateBoxPosition = !!updateBoxPosition;
        if (_WebVTT) {
            _WebVTT.processCues(window, _currentCues, _display, updateBoxPosition);
        }
    };

    this.selectCues = function (track, timeEvent) {
        if (!track || !track.data || !timeEvent || _model.get('renderCaptionsNatively')) {
            return;
        }

        var pos = this.getAlignmentPosition(track, timeEvent);
        if (pos === false) {
            return;
        }

        var cues = this.getCurrentCues(track.data, pos);

        this.updateCurrentCues(cues);
        this.renderCues(true);
    };

    this.getCurrentCues = function (allCues, pos) {
        return _underscore2.default.filter(allCues, function (cue) {
            return pos >= cue.startTime && (!cue.endTime || pos <= cue.endTime);
        });
    };

    this.updateCurrentCues = function (cues) {
        // Render with vtt.js if there are cues, clear if there are none
        if (!cues.length) {
            _currentCues = [];
        } else if (_underscore2.default.difference(cues, _currentCues).length) {
            (0, _dom.addClass)(_captionsWindow, 'jw-captions-window-active');
            _currentCues = cues;
        }

        return _currentCues;
    };

    this.getAlignmentPosition = function (track, timeEvent) {
        var source = track.source;
        var metadata = timeEvent.metadata;

        // subtitles with "source" time must be synced with "metadata[source]"
        if (source) {
            if (metadata && _underscore2.default.isNumber(metadata[source])) {
                return metadata[source];
            }
            return;
        } else if (timeEvent.duration < 0) {
            // When the duration is negative (DVR mode), need to make alignmentPosition positive for captions to work
            return timeEvent.position - timeEvent.duration;
        }

        // Default to syncing with current position
        return timeEvent.position;
    };

    this.clear = function () {
        (0, _dom.empty)(_display);
    };

    /**
     * Initialize the captions renderer
     * @param {string} playerElementId - The player container's DOM id
     * @param {object} options - The captions styling configuration
     * @returns {void}
     */
    this.setup = function (playerElementId, options) {
        _captionsWindow = document.createElement('div');
        _textContainer = document.createElement('span');
        _captionsWindow.className = 'jw-captions-window jw-reset';
        _textContainer.className = 'jw-captions-text jw-reset';

        _options = _extends({}, _defaults, options);

        _fontScale = _defaults.fontScale;
        _setFontScale(_options.fontSize);

        var windowColor = _options.windowColor;
        var windowOpacity = _options.windowOpacity;
        var edgeStyle = _options.edgeStyle;
        _windowStyle = {};
        var textStyle = {};

        _addTextStyle(textStyle, _options);

        if (windowColor || windowOpacity !== _defaults.windowOpacity) {
            _windowStyle.backgroundColor = (0, _css.getRgba)(windowColor || '#000000', windowOpacity);
        }

        _addEdgeStyle(edgeStyle, textStyle, _options.fontOpacity);

        if (!_options.back && edgeStyle === null) {
            _addEdgeStyle('uniform', textStyle);
        }

        (0, _css.style)(_captionsWindow, _windowStyle);
        (0, _css.style)(_textContainer, textStyle);
        _setupCaptionStyles(playerElementId, textStyle);

        _captionsWindow.appendChild(_textContainer);
        _display.appendChild(_captionsWindow);

        _model.change('captionsTrack', function (model, captionsTrack) {
            this.populate(captionsTrack);
        }, this);

        _model.set('captions', _options);
    };

    this.element = function () {
        return _display;
    };

    this.destroy = function () {
        _model.off(null, null, this);
        this.off();
    };

    function _setFontScale() {
        if (!_underscore2.default.isFinite(_options.fontSize)) {
            return;
        }

        var height = _model.get('containerHeight');

        if (!height) {
            _model.once('change:containerHeight', _setFontScale, this);
            return;
        }

        // Adjust scale based on font size relative to the default
        _fontScale = _defaults.fontScale * _options.fontSize / _defaults.fontSize;
    }

    function _setFontSize() {
        var height = _model.get('containerHeight');

        if (!height) {
            return;
        }

        var fontSize = Math.round(height * _fontScale);

        if (_model.get('renderCaptionsNatively')) {
            _setShadowDOMFontSize(_model.get('id'), fontSize);
        } else {
            (0, _css.style)(_display, {
                fontSize: fontSize + 'px'
            });
        }
    }

    function _setupCaptionStyles(playerId, textStyle) {
        _setFontSize();
        _styleNativeCaptions(playerId, textStyle);
        _stylePlayerCaptions(playerId, textStyle);
    }

    function _stylePlayerCaptions(playerId, textStyle) {
        // VTT.js DOM window and text styles
        (0, _css.css)('#' + playerId + ' .jw-text-track-display', _windowStyle, playerId);
        (0, _css.css)('#' + playerId + ' .jw-text-track-cue', textStyle, playerId);
    }

    function _styleNativeCaptions(playerId, textStyle) {
        if (_environment.Browser.safari) {
            // Only Safari uses a separate element for styling text background
            (0, _css.css)('#' + playerId + ' .jw-video::-webkit-media-text-track-display-backdrop', {
                backgroundColor: textStyle.backgroundColor
            }, playerId, true);
        }

        (0, _css.css)('#' + playerId + ' .jw-video::-webkit-media-text-track-display', _windowStyle, playerId, true);
        (0, _css.css)('#' + playerId + ' .jw-video::cue', textStyle, playerId, true);
    }

    function _setShadowDOMFontSize(playerId, fontSize) {
        // Set Shadow DOM font size (needs to be important to override browser's in line style)
        _windowStyle.fontSize = fontSize + 'px';
        (0, _css.css)('#' + playerId + ' .jw-video::-webkit-media-text-track-display', _windowStyle, playerId, true);
    }

    function _addTextStyle(textStyle, options) {
        var color = options.color;
        var fontOpacity = options.fontOpacity;
        if (color || fontOpacity !== _defaults.fontOpacity) {
            textStyle.color = (0, _css.getRgba)(color || '#ffffff', fontOpacity);
        }

        if (options.back) {
            var bgColor = options.backgroundColor;
            var bgOpacity = options.backgroundOpacity;
            if (bgColor !== _defaults.backgroundColor || bgOpacity !== _defaults.backgroundOpacity) {
                textStyle.backgroundColor = (0, _css.getRgba)(bgColor, bgOpacity);
            }
        } else {
            textStyle.background = 'transparent';
        }

        if (options.fontFamily) {
            textStyle.fontFamily = options.fontFamily;
        }

        if (options.fontStyle) {
            textStyle.fontStyle = options.fontStyle;
        }

        if (options.fontWeight) {
            textStyle.fontWeight = options.fontWeight;
        }

        if (options.textDecoration) {
            textStyle.textDecoration = options.textDecoration;
        }
    }

    function _addEdgeStyle(option, styles, fontOpacity) {
        var color = (0, _css.getRgba)('#000000', fontOpacity);
        if (option === 'dropshadow') {
            // small drop shadow
            styles.textShadow = '0 2px 1px ' + color;
        } else if (option === 'raised') {
            // larger drop shadow
            styles.textShadow = '0 0 5px ' + color + ', 0 1px 5px ' + color + ', 0 2px 5px ' + color;
        } else if (option === 'depressed') {
            // top down shadow
            styles.textShadow = '0 -2px 1px ' + color;
        } else if (option === 'uniform') {
            // outline
            styles.textShadow = '-2px 0 1px ' + color + ',2px 0 1px ' + color + ',0 -2px 1px ' + color + ',0 2px 1px ' + color + ',-1px 1px 1px ' + color + ',1px 1px 1px ' + color + ',1px -1px 1px ' + color + ',1px 1px 1px ' + color;
        }
    }

    var _timeChange = function _timeChange(e) {
        _timeEvent = e;
        _this.selectCues(_captionsTrack, _timeEvent);
    };

    function _captionsListHandler(model, captionsList) {
        var _this2 = this;

        if (captionsList.length === 1) {
            // captionsList only contains 'off'
            return;
        }

        // don't load the polyfill or do unnecessary work if rendering natively
        if (!model.get('renderCaptionsNatively') && !_WebVTT) {
            loadWebVttPolyfill().catch(function (error) {
                _this2.trigger(_events.ERROR, {
                    message: 'Captions renderer failed to load',
                    reason: error
                });
            });
            model.off('change:captionsList', _captionsListHandler, this);
        }
    }

    function loadWebVttPolyfill() {
        return __webpack_require__.e/* require.ensure */(9/*! polyfills.webvtt */).then((function (require) {
            _WebVTT = __webpack_require__(/*! polyfills/webvtt */ 99).default;
        }).bind(null, __webpack_require__)).catch(_coreLoader.chunkLoadErrorHandler);
    }

    _model.on('change:playlistItem', function () {
        _timeEvent = null;
        _currentCues = [];
    }, this);

    _model.on(_events.MEDIA_SEEK, function (e) {
        _currentCues = [];
        _timeChange(e);
    }, this);

    _model.on(_events.MEDIA_TIME, _timeChange, this);

    _model.on('subtitlesTrackData', function () {
        // update captions after a provider's subtitle track changes
        this.selectCues(_captionsTrack, _timeEvent);
    }, this);

    _model.on('change:captionsList', _captionsListHandler, this);
};

_extends(CaptionsRenderer.prototype, _backbone2.default);

exports.default = CaptionsRenderer;

/***/ }),
/* 165 */
/*!*****************************!*\
  !*** ./src/js/view/logo.js ***!
  \*****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Logo;

var _logo2 = __webpack_require__(/*! templates/logo */ 166);

var _logo3 = _interopRequireDefault(_logo2);

var _events = __webpack_require__(/*! events/events */ 5);

var _ui = __webpack_require__(/*! utils/ui */ 73);

var _ui2 = _interopRequireDefault(_ui);

var _css = __webpack_require__(/*! utils/css */ 24);

var _dom = __webpack_require__(/*! utils/dom */ 23);

var _backbone = __webpack_require__(/*! utils/backbone.events */ 7);

var _backbone2 = _interopRequireDefault(_backbone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LogoDefaults = {
    linktarget: '_blank',
    margin: 8,
    hide: false,
    position: 'top-right'
};

function Logo(_model) {
    _extends(this, _backbone2.default);

    var _logo;
    var _settings;
    var _img = new Image();

    this.setup = function () {
        _settings = _extends({}, LogoDefaults, _model.get('logo'));
        _settings.position = _settings.position || LogoDefaults.position;
        _settings.hide = _settings.hide.toString() === 'true';

        // We should only create a logo in the display container when
        // it is not supposed to be in the control bar, as it will
        // handle the creation in that case
        if (!_settings.file || _settings.position === 'control-bar') {
            return;
        }

        if (!_logo) {
            _logo = (0, _dom.createElement)((0, _logo3.default)(_settings.position, _settings.hide));
        }

        _model.set('logo', _settings);

        // apply styles onload when image width and height are known
        _img.onload = function () {
            // update logo style
            var height = this.height;
            var width = this.width;
            var styles = {
                backgroundImage: 'url("' + this.src + '")'
            };
            if (_settings.margin !== LogoDefaults.margin) {
                var positions = /(\w+)-(\w+)/.exec(_settings.position);
                if (positions.length === 3) {
                    styles['margin-' + positions[1]] = _settings.margin;
                    styles['margin-' + positions[2]] = _settings.margin;
                }
            }

            // Constraint logo size to 15% of their respective player dimension
            var maxHeight = _model.get('containerHeight') * 0.15;
            var maxWidth = _model.get('containerWidth') * 0.15;

            if (height > maxHeight || width > maxWidth) {
                var logoAR = width / height;
                var videoAR = maxWidth / maxHeight;

                if (videoAR > logoAR) {
                    // height = max dimension
                    height = maxHeight;
                    width = maxHeight * logoAR;
                } else {
                    // width = max dimension
                    width = maxWidth;
                    height = maxWidth / logoAR;
                }
            }

            styles.width = Math.round(width);
            styles.height = Math.round(height);

            (0, _css.style)(_logo, styles);

            // update title
            _model.set('logoWidth', styles.width);
        };

        _img.src = _settings.file;

        var logoInteractHandler = new _ui2.default(_logo);

        if (_settings.link) {
            _logo.setAttribute('tabindex', '0');
            _logo.setAttribute('aria-label', 'Logo');
        }

        logoInteractHandler.on('click tap enter', function (evt) {
            if (evt && evt.stopPropagation) {
                evt.stopPropagation();
            }

            this.trigger(_events.LOGO_CLICK, {
                link: _settings.link,
                linktarget: _settings.linktarget
            });
        }, this);
    };

    this.setContainer = function (container) {
        if (_logo) {
            container.appendChild(_logo);
        }
    };

    this.element = function () {
        return _logo;
    };

    this.position = function () {
        return _settings.position;
    };

    this.destroy = function () {
        _img.onload = null;
    };
}

/***/ }),
/* 166 */
/*!*******************************!*\
  !*** ./src/templates/logo.js ***!
  \*******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (position, hide) {
    var jwhide = hide ? ' jw-hide' : '';
    return '<div class="jw-logo jw-logo-' + position + jwhide + ' jw-reset"></div>';
};

/***/ }),
/* 167 */
/*!********************************!*\
  !*** ./src/js/view/preview.js ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _css = __webpack_require__(/*! utils/css */ 24);

var Preview = function Preview(_model) {
    this.model = _model;
    this.image = null;
};

function validState(state) {
    return state === 'complete' || state === 'idle' || state === 'error' || state === 'buffering';
}

_extends(Preview.prototype, {
    setup: function setup(element) {
        this.el = element;
    },
    setImage: function setImage(img) {
        // Remove onload function from previous image
        var image = this.image;
        if (image) {
            image.onload = null;
        }
        this.image = null;
        var backgroundImage = '';
        if (typeof img === 'string') {
            backgroundImage = 'url("' + img + '")';
            image = this.image = new Image();
            image.src = img;
        }
        (0, _css.style)(this.el, {
            backgroundImage: backgroundImage
        });
    },
    resize: function resize(width, height, stretching) {
        if (stretching === 'uniform') {
            if (width) {
                this.playerAspectRatio = width / height;
            }
            if (!this.playerAspectRatio || !this.image || !validState(this.model.get('state'))) {
                return;
            }
            // snap image to edges when the difference in aspect ratio is less than 9%
            var image = this.image;
            var backgroundSize = null;
            if (image) {
                if (image.width === 0) {
                    var _this = this;
                    image.onload = function () {
                        _this.resize(width, height, stretching);
                    };
                    return;
                }
                var imageAspectRatio = image.width / image.height;
                if (Math.abs(this.playerAspectRatio - imageAspectRatio) < 0.09) {
                    backgroundSize = 'cover';
                }
            }
            (0, _css.style)(this.el, {
                backgroundSize: backgroundSize
            });
        }
    },
    element: function element() {
        return this.el;
    }
});

exports.default = Preview;

/***/ }),
/* 168 */
/*!******************************!*\
  !*** ./src/js/view/title.js ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _css = __webpack_require__(/*! utils/css */ 24);

var Title = function Title(_model) {
    this.model = _model.player;
};

_extends(Title.prototype, {
    // This is normally shown/hidden by states
    //   these are only used for when no title exists
    hide: function hide() {
        (0, _css.style)(this.el, { display: 'none' });
    },
    show: function show() {
        (0, _css.style)(this.el, { display: '' });
    },

    setup: function setup(titleEl) {
        this.el = titleEl;

        // Perform the DOM search only once
        var arr = this.el.getElementsByTagName('div');
        this.title = arr[0];
        this.description = arr[1];

        this.model.on('change:logoWidth', this.update, this);
        this.model.change('playlistItem', this.playlistItem, this);
    },

    update: function update(model) {
        var titleStyle = {};
        var logo = model.get('logo');
        if (logo) {
            // Only use Numeric or pixel ("Npx") margin values
            var margin = 1 * ('' + logo.margin).replace('px', '');
            var padding = model.get('logoWidth') + (isNaN(margin) ? 0 : margin + 10);
            if (logo.position === 'top-left') {
                titleStyle.paddingLeft = padding;
            } else if (logo.position === 'top-right') {
                titleStyle.paddingRight = padding;
            }
        }
        (0, _css.style)(this.el, titleStyle);
    },

    playlistItem: function playlistItem(model, item) {
        if (!item) {
            return;
        }
        if (model.get('displaytitle') || model.get('displaydescription')) {
            var title = '';
            var description = '';

            if (item.title && model.get('displaytitle')) {
                title = item.title;
            }
            if (item.description && model.get('displaydescription')) {
                description = item.description;
            }

            this.updateText(title, description);
        } else {
            this.hide();
        }
    },

    updateText: function updateText(title, description) {
        this.title.innerHTML = title;
        this.description.innerHTML = description;

        if (this.title.firstChild || this.description.firstChild) {
            this.show();
        } else {
            this.hide();
        }
    },

    element: function element() {
        return this.el;
    }
});

exports.default = Title;

/***/ }),
/* 169 */
/*!*******************************!*\
  !*** ./src/css/jwplayer.less ***!
  \*******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/postcss-loader/lib!../../node_modules/less-loader/dist/cjs.js??ref--0-3!./jwplayer.less */ 170);
if(typeof content === 'string') content = [['all-players', content, '']];
// add the styles to the DOM
__webpack_require__(/*! ../../node_modules/simple-style-loader/addStyles.js */ 33).style(content,'all-players');
if(content.locals) module.exports = content.locals;

/***/ }),
/* 170 */
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/lib!./node_modules/less-loader/dist/cjs.js?{"compress":true,"strictMath":true,"noIeCompat":true}!./src/css/jwplayer.less ***!
  \****************************************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ 83)(undefined);
// imports


// module
exports.push([module.i, ".jw-reset{color:inherit;background-color:transparent;padding:0;margin:0;float:none;font-family:Arial,Helvetica,sans-serif;font-size:1em;line-height:1em;list-style:none;text-align:left;text-transform:none;vertical-align:baseline;border:0;direction:ltr;font-variant:inherit;font-stretch:inherit;-webkit-tap-highlight-color:rgba(255,255,255,0)}body .jw-error,body .jwplayer.jw-state-error{height:100%;width:100%}.jw-title{position:absolute;top:0}.jw-background-color{background:rgba(0,0,0,0.4)}.jw-text{color:rgba(255,255,255,0.8)}.jw-knob{color:rgba(255,255,255,0.8);background-color:#fff}.jw-button-color{color:rgba(255,255,255,0.8)}:not(.jw-flag-touch) .jw-button-color:not(.jw-logo-button):focus,:not(.jw-flag-touch) .jw-button-color:not(.jw-logo-button):hover{outline:none;color:#fff}.jw-toggle{color:#fff}.jw-toggle.jw-off{color:rgba(255,255,255,0.8)}.jw-toggle.jw-off:focus{color:#fff}.jw-toggle:focus{outline:none}:not(.jw-flag-touch) .jw-toggle.jw-off:hover{color:#fff}.jw-rail{background:rgba(255,255,255,0.3)}.jw-buffer{background:rgba(255,255,255,0.3)}.jw-progress{background:#f2f2f2}.jw-time-tip,.jw-volume-tip{border:0}.jw-slider-volume.jw-volume-tip.jw-background-color.jw-slider-vertical{background:none}.jw-skip{padding:.5em;outline:none}.jw-skip .jw-skiptext,.jw-skip .jw-skip-icon{color:rgba(255,255,255,0.8)}.jw-skip.jw-skippable:hover .jw-skip-icon,.jw-skip.jw-skippable:focus .jw-skip-icon{color:#fff}.jw-icon-cast button{--connected-color:#fff;--disconnected-color:rgba(255,255,255,0.8)}.jw-icon-cast button:focus{outline:none}.jw-icon-cast button.jw-off{--connected-color:rgba(255,255,255,0.8)}.jw-icon-cast:focus button{--connected-color:#fff;--disconnected-color:#fff}.jw-icon-cast:hover button{--connected-color:#fff;--disconnected-color:#fff}.jw-nextup-container{bottom:2.5em;padding:5px .5em}.jw-nextup{border-radius:0}.jw-color-active{color:#fff;stroke:#fff;border-color:#fff}:not(.jw-flag-touch) .jw-color-active-hover:hover,:not(.jw-flag-touch) .jw-color-active-hover:focus{color:#fff;stroke:#fff;border-color:#fff}.jw-color-inactive{color:rgba(255,255,255,0.8);stroke:rgba(255,255,255,0.8);border-color:rgba(255,255,255,0.8)}:not(.jw-flag-touch) .jw-color-inactive-hover:hover{color:rgba(255,255,255,0.8);stroke:rgba(255,255,255,0.8);border-color:rgba(255,255,255,0.8)}.jw-option{color:rgba(255,255,255,0.8)}.jw-option.jw-active-option{color:#fff;background-color:rgba(255,255,255,0.1)}:not(.jw-flag-touch) .jw-option:hover{color:#fff}.jwplayer{width:100%;font-size:16px;position:relative;display:block;min-height:0;overflow:hidden;box-sizing:border-box;font-family:Arial,Helvetica,sans-serif;background-color:#000;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.jwplayer *{box-sizing:inherit}.jwplayer.jw-flag-aspect-mode{height:auto !important}.jwplayer.jw-flag-aspect-mode .jw-aspect{display:block}.jwplayer .jw-aspect{display:none}.jwplayer.jw-no-focus:focus,.jwplayer .jw-swf{outline:none}.jwplayer.jw-ie:focus{outline:#585858 dotted 1px}.jw-media,.jw-preview{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}.jw-media{overflow:hidden;cursor:pointer}.jw-plugin{position:absolute;bottom:66px}.jw-plugin .jw-banner{max-width:100%;opacity:0;cursor:pointer;position:absolute;margin:auto auto 0;left:0;right:0;bottom:0;display:block}.jw-preview,.jw-captions,.jw-title{pointer-events:none}.jw-media,.jw-logo{pointer-events:all}.jwplayer video{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:auto;background:transparent}.jwplayer video::-webkit-media-controls-start-playback-button{display:none}.jwplayer.jw-stretch-uniform video{object-fit:contain}.jwplayer.jw-stretch-none video{object-fit:none}.jwplayer.jw-stretch-fill video{object-fit:cover}.jwplayer.jw-stretch-exactfit video{object-fit:fill}.jw-preview{position:absolute;display:none;opacity:1;visibility:visible;width:100%;height:100%;background:#000 no-repeat 50% 50%}.jwplayer .jw-preview,.jw-error .jw-preview{background-size:contain}.jw-stretch-none .jw-preview{background-size:auto auto}.jw-stretch-fill .jw-preview{background-size:cover}.jw-stretch-exactfit .jw-preview{background-size:100% 100%}.jw-title{display:none;padding-top:20px;width:100%;z-index:1}.jw-title-primary,.jw-title-secondary{color:#fff;padding-left:20px;padding-right:20px;padding-bottom:.5em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}.jw-title-primary{font-size:1.625em}.jw-breakpoint-2 .jw-title-primary,.jw-breakpoint-3 .jw-title-primary{font-size:1.5em}.jw-flag-small-player .jw-title-primary{font-size:1.25em}.jw-flag-small-player .jw-title-secondary,.jw-title-secondary:empty{display:none}.jw-captions{position:absolute;width:100%;height:100%;text-align:center;display:none;max-height:calc(100% - 60px);letter-spacing:normal;word-spacing:normal;text-transform:none;text-indent:0;text-decoration:none;pointer-events:none;overflow:hidden;top:0}.jw-captions.jw-captions-enabled{display:block}.jw-captions-window{display:none;padding:.25em;border-radius:.25em}.jw-captions-window.jw-captions-window-active{display:inline-block}.jw-captions-text{display:inline-block;color:#fff;background-color:#000;word-wrap:normal;word-break:normal;white-space:pre-line;font-style:normal;font-weight:normal;text-align:center;text-decoration:none}.jw-text-track-display{font-size:inherit;line-height:1.5}.jw-text-track-cue{background-color:rgba(0,0,0,0.5);color:#fff;padding:.1em .3em}.jwplayer video::-webkit-media-controls{display:none;justify-content:flex-start}.jwplayer video::-webkit-media-text-track-container{max-height:calc(100% - 60px);line-height:normal}.jwplayer video::-webkit-media-text-track-display{min-width:-webkit-min-content}.jwplayer video::cue{background-color:rgba(0,0,0,0.5)}.jwplayer video::-webkit-media-controls-panel-container{display:none}.jw-logo{position:absolute;margin:20px;cursor:pointer;pointer-events:all;background-repeat:no-repeat;background-size:contain;top:auto;right:auto;left:auto;bottom:auto}.jw-flag-audio-player .jw-logo{display:none}.jw-logo-top-right{top:0;right:0}.jw-logo-top-left{top:0;left:0}.jw-logo-bottom-left{left:0}.jw-logo-bottom-right{right:0}.jw-logo-bottom-left,.jw-logo-bottom-right{bottom:44px;transition:bottom 150ms cubic-bezier(0, -0.25, .25, 1)}.jw-state-idle .jw-logo{z-index:1}.jw-state-setup{background-color:transparent}.jw-state-setup .jw-logo,.jw-state-setup .jw-controls,.jw-state-setup .jw-controls-backdrop{visibility:hidden}body .jw-error,body .jwplayer.jw-state-error{background-color:#333;color:#fff;font-size:16px;display:table;opacity:1;overflow:hidden;position:relative}body .jw-error .jw-display,body .jwplayer.jw-state-error .jw-display{display:none}body .jw-error .jw-media,body .jwplayer.jw-state-error .jw-media{cursor:default}body .jw-error .jw-preview,body .jwplayer.jw-state-error .jw-preview{background-color:#333}body .jw-error .jw-error-msg,body .jwplayer.jw-state-error .jw-error-msg{top:50%;position:absolute;left:50%;align-items:center;background-color:#000;border-radius:2px;display:flex;padding:20px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}body .jw-error .jw-error-msg .jw-icon,body .jwplayer.jw-state-error .jw-error-msg .jw-icon{height:30px;width:30px;margin-right:20px;flex:0 0 auto}body .jw-error .jw-error-msg .jw-icon:empty,body .jwplayer.jw-state-error .jw-error-msg .jw-icon:empty{display:none}body .jw-error .jw-error-msg .jw-title,body .jwplayer.jw-state-error .jw-error-msg .jw-title{display:block;position:static}body .jw-error .jw-error-msg .jw-title,body .jwplayer.jw-state-error .jw-error-msg .jw-title,body .jw-error .jw-error-msg .jw-title-primary,body .jwplayer.jw-state-error .jw-error-msg .jw-title-primary,body .jw-error .jw-error-msg .jw-title-secondary,body .jwplayer.jw-state-error .jw-error-msg .jw-title-secondary{font-size:14px;line-height:1.35;padding:0}body .jw-error .jw-error-msg .jw-title-primary,body .jwplayer.jw-state-error .jw-error-msg .jw-title-primary{font-weight:600;white-space:normal}.jwplayer.jw-state-error.jw-flag-audio-player .jw-error-msg{height:100%;width:100%;top:0;position:absolute;left:0;background:#000;-webkit-transform:none;transform:none;padding:0 16px;z-index:1}body .jwplayer.jw-state-error .jw-title,body .jw-error .jw-title,.jw-state-idle .jw-title,.jwplayer.jw-state-complete:not(.jw-flag-casting):not(.jw-flag-audio-player):not(.jw-flag-overlay-open-related) .jw-title{display:block}body .jwplayer.jw-state-error .jw-preview,body .jw-error .jw-preview,.jw-state-idle .jw-preview,.jwplayer.jw-state-complete:not(.jw-flag-casting):not(.jw-flag-audio-player):not(.jw-flag-overlay-open-related) .jw-preview{display:block}.jw-state-idle .jw-captions,.jwplayer.jw-state-complete .jw-captions,body .jwplayer.jw-state-error .jw-captions{display:none}.jw-state-idle video::-webkit-media-text-track-container,.jwplayer.jw-state-complete video::-webkit-media-text-track-container,body .jwplayer.jw-state-error video::-webkit-media-text-track-container{display:none}.jwplayer.jw-flag-fullscreen{width:100% !important;height:100% !important;top:0;right:0;bottom:0;left:0;z-index:1000;margin:0;position:fixed}body .jwplayer.jw-flag-flash-blocked .jw-title{display:block}.jwplayer.jw-flag-controls-hidden .jw-captions{max-height:none}.jwplayer.jw-flag-controls-hidden video::-webkit-media-text-track-container{max-height:none}.jwplayer.jw-flag-controls-hidden .jw-media{cursor:default}.jw-flag-audio-player:not(.jw-flag-flash-blocked) .jw-media{visibility:hidden}.jw-flag-audio-player .jw-title{background:none}.jw-flag-audio-player object{min-height:45px}", ""]);

// exports


/***/ }),
/* 171 */
/*!***********************************!*\
  !*** ./src/js/view/view-model.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _simplemodel = __webpack_require__(/*! model/simplemodel */ 37);

var _simplemodel2 = _interopRequireDefault(_simplemodel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SimpleModelExtendable = function SimpleModelExtendable() {
    _classCallCheck(this, SimpleModelExtendable);
};

SimpleModelExtendable.prototype = _extends({}, _simplemodel2.default);

var changeEventRegEx = /^change:(.+)$/;

function dispatchDiffChangeEvents(viewModel, newAttributes, oldAttributes) {
    Object.keys(newAttributes).forEach(function (attr) {
        if (attr in newAttributes && newAttributes[attr] !== oldAttributes[attr]) {
            viewModel.trigger('change:' + attr, viewModel, newAttributes[attr], oldAttributes[attr]);
        }
    });
}

function removeListeners(instance, viewModel) {
    if (instance) {
        instance.off(null, null, viewModel);
    }
}

var PlayerViewModel = function (_SimpleModelExtendabl) {
    _inherits(PlayerViewModel, _SimpleModelExtendabl);

    function PlayerViewModel(playerModel, eventFilter) {
        _classCallCheck(this, PlayerViewModel);

        var _this = _possibleConstructorReturn(this, (PlayerViewModel.__proto__ || Object.getPrototypeOf(PlayerViewModel)).call(this));

        _this._model = playerModel;
        _this._mediaModel = null;

        _extends(playerModel.attributes, {
            altText: '',
            fullscreen: false,
            logoWidth: 0,
            scrubbing: false
        });

        playerModel.on('all', function (type, objectOrEvent, value, previousValue) {
            if (objectOrEvent === playerModel) {
                objectOrEvent = _this;
            }
            if (!eventFilter || eventFilter(type, objectOrEvent, value, previousValue)) {
                _this.trigger(type, objectOrEvent, value, previousValue);
            }
        }, _this);

        playerModel.on('change:mediaModel', function (model, mediaModel) {
            _this.mediaModel = mediaModel;
        }, _this);
        return _this;
    }

    _createClass(PlayerViewModel, [{
        key: 'get',
        value: function get(attr) {
            var mediaModel = this._mediaModel;
            if (mediaModel && attr in mediaModel.attributes) {
                return mediaModel.get(attr);
            }
            return this._model.get(attr);
        }
    }, {
        key: 'set',
        value: function set(attr, val) {
            return this._model.set(attr, val);
        }
    }, {
        key: 'getVideo',
        value: function getVideo() {
            return this._model.getVideo();
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            removeListeners(this._model, this);
            removeListeners(this._mediaModel, this);
            this.off();
        }
    }, {
        key: 'mediaModel',
        set: function set(mediaModel) {
            var _this2 = this;

            var previousMediaModel = this._mediaModel;
            removeListeners(previousMediaModel, this);

            this._mediaModel = mediaModel;

            mediaModel.on('all', function (type, objectOrEvent, value, previousValue) {
                if (objectOrEvent === mediaModel) {
                    objectOrEvent = _this2;
                }
                _this2.trigger(type, objectOrEvent, value, previousValue);
            }, this);

            if (previousMediaModel) {
                dispatchDiffChangeEvents(this, mediaModel.attributes, previousMediaModel.attributes);
            }
        }
    }]);

    return PlayerViewModel;
}(SimpleModelExtendable);

var ViewModel = function (_PlayerViewModel) {
    _inherits(ViewModel, _PlayerViewModel);

    function ViewModel(playerModel) {
        _classCallCheck(this, ViewModel);

        var _this3 = _possibleConstructorReturn(this, (ViewModel.__proto__ || Object.getPrototypeOf(ViewModel)).call(this, playerModel, function (type) {
            // Do not propagate attribute changes from the player model for attributes present in instream
            var instreamModel = _this3._instreamModel;
            if (instreamModel) {
                var match = changeEventRegEx.exec(type);
                if (match) {
                    var attr = match[1];
                    if (attr in instreamModel.attributes) {
                        return false;
                    }
                }
            }
            return true;
        }));

        _this3._instreamModel = null;
        _this3._playerViewModel = new PlayerViewModel(_this3._model);

        playerModel.on('change:instream', function (model, instream) {
            _this3.instreamModel = instream ? instream.model : null;
        }, _this3);
        return _this3;
    }

    _createClass(ViewModel, [{
        key: 'get',
        value: function get(attr) {
            var mediaModel = this._mediaModel;
            if (mediaModel && attr in mediaModel.attributes) {
                return mediaModel.get(attr);
            }
            var instreamModel = this._instreamModel;
            if (instreamModel && attr in instreamModel.attributes) {
                return instreamModel.get(attr);
            }
            return this._model.get(attr);
        }
    }, {
        key: 'getVideo',
        value: function getVideo() {
            var instreamModel = this._instreamModel;
            if (instreamModel && instreamModel.getVideo()) {
                return instreamModel.getVideo();
            }
            return _get(ViewModel.prototype.__proto__ || Object.getPrototypeOf(ViewModel.prototype), 'getVideo', this).call(this);
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            _get(ViewModel.prototype.__proto__ || Object.getPrototypeOf(ViewModel.prototype), 'destroy', this).call(this);
            removeListeners(this._instreamModel, this);
        }
    }, {
        key: 'player',
        get: function get() {
            return this._playerViewModel;
        }
    }, {
        key: 'instreamModel',
        set: function set(instreamModel) {
            var _this4 = this;

            var previousInstream = this._instreamModel;
            removeListeners(previousInstream, this);

            this._model.off('change:mediaModel', null, this);

            this._instreamModel = instreamModel;

            this.trigger('instreamMode', !!instreamModel);

            if (instreamModel) {
                instreamModel.on('all', function (type, objectOrEvent, value, previousValue) {
                    if (objectOrEvent === instreamModel) {
                        objectOrEvent = _this4;
                    }
                    _this4.trigger(type, objectOrEvent, value, previousValue);
                }, this);

                instreamModel.change('mediaModel', function (model, mediaModel) {
                    _this4.mediaModel = mediaModel;
                }, this);

                dispatchDiffChangeEvents(this, instreamModel.attributes, this._model.attributes);
            } else if (previousInstream) {
                this._model.change('mediaModel', function (model, mediaModel) {
                    _this4.mediaModel = mediaModel;
                }, this);

                var mergedAttributes = _extends({}, this._model.attributes, previousInstream.attributes);
                dispatchDiffChangeEvents(this, this._model.attributes, mergedAttributes);
            }
        }
    }]);

    return ViewModel;
}(PlayerViewModel);

exports.default = ViewModel;

/***/ }),
/* 172 */
/*!************************************************!*\
  !*** ./src/js/controller/events-middleware.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = middleware;
function middleware(model, type, currentState) {
    var newState = currentState;

    switch (type) {
        case 'time':
        case 'beforePlay':
        case 'pause':
        case 'play':
        case 'ready':
            {
                var viewable = model.get('viewable');
                // Don't add viewable to events if we don't know we're viewable
                if (viewable !== undefined) {
                    // Emit viewable as 0 or 1
                    newState = _extends({}, currentState, { viewable: viewable });
                }
                break;
            }
        default:
            {
                break;
            }
    }

    return newState;
}

/***/ }),
/* 173 */
/*!**************************************!*\
  !*** ./src/js/utils/can-autoplay.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AUTOPLAY_DISABLED = exports.AUTOPLAY_MUTED = exports.AUTOPLAY_ENABLED = undefined;
exports.canAutoplay = canAutoplay;

var _playPromise = __webpack_require__(/*! ../providers/utils/play-promise */ 95);

var _playPromise2 = _interopRequireDefault(_playPromise);

var _promise = __webpack_require__(/*! ../polyfills/promise */ 4);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Small video file with audio.
 * Source: https://github.com/mathiasbynens/small
 *
 * @constant
 * @default
 * @type {String}
 */
// https://github.com/video-dev/can-autoplay/tree/v3.0.0 (modified)
//
// MIT License

// Copyright (c) 2017 video-dev

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

var VIDEO = new Blob([new Uint8Array([0, 0, 0, 28, 102, 116, 121, 112, 105, 115, 111, 109, 0, 0, 2, 0, 105, 115, 111, 109, 105, 115, 111, 50, 109, 112, 52, 49, 0, 0, 0, 8, 102, 114, 101, 101, 0, 0, 2, 239, 109, 100, 97, 116, 33, 16, 5, 32, 164, 27, 255, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 167, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 33, 16, 5, 32, 164, 27, 255, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 167, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 0, 0, 2, 194, 109, 111, 111, 118, 0, 0, 0, 108, 109, 118, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 232, 0, 0, 0, 47, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 236, 116, 114, 97, 107, 0, 0, 0, 92, 116, 107, 104, 100, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 101, 100, 116, 115, 0, 0, 0, 28, 101, 108, 115, 116, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 47, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 100, 109, 100, 105, 97, 0, 0, 0, 32, 109, 100, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 172, 68, 0, 0, 8, 0, 85, 196, 0, 0, 0, 0, 0, 45, 104, 100, 108, 114, 0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0, 0, 0, 1, 15, 109, 105, 110, 102, 0, 0, 0, 16, 115, 109, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 100, 105, 110, 102, 0, 0, 0, 28, 100, 114, 101, 102, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1, 0, 0, 0, 211, 115, 116, 98, 108, 0, 0, 0, 103, 115, 116, 115, 100, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 87, 109, 112, 52, 97, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 16, 0, 0, 0, 0, 172, 68, 0, 0, 0, 0, 0, 51, 101, 115, 100, 115, 0, 0, 0, 0, 3, 128, 128, 128, 34, 0, 2, 0, 4, 128, 128, 128, 20, 64, 21, 0, 0, 0, 0, 1, 244, 0, 0, 1, 243, 249, 5, 128, 128, 128, 2, 18, 16, 6, 128, 128, 128, 1, 2, 0, 0, 0, 24, 115, 116, 116, 115, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 4, 0, 0, 0, 0, 28, 115, 116, 115, 99, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 28, 115, 116, 115, 122, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 115, 0, 0, 1, 116, 0, 0, 0, 20, 115, 116, 99, 111, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 44, 0, 0, 0, 98, 117, 100, 116, 97, 0, 0, 0, 90, 109, 101, 116, 97, 0, 0, 0, 0, 0, 0, 0, 33, 104, 100, 108, 114, 0, 0, 0, 0, 0, 0, 0, 0, 109, 100, 105, 114, 97, 112, 112, 108, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 105, 108, 115, 116, 0, 0, 0, 37, 169, 116, 111, 111, 0, 0, 0, 29, 100, 97, 116, 97, 0, 0, 0, 1, 0, 0, 0, 0, 76, 97, 118, 102, 53, 54, 46, 52, 48, 46, 49, 48, 49])], { type: 'video/mp4' });

function startPlayback(element, _ref) {
    var muted = _ref.muted;

    // Configure element.
    element.muted = muted;
    element.src = URL.createObjectURL(VIDEO);

    // Start playback.
    return element.play() || (0, _playPromise2.default)(element);
}

var AUTOPLAY_ENABLED = exports.AUTOPLAY_ENABLED = 'autoplayEnabled';
var AUTOPLAY_MUTED = exports.AUTOPLAY_MUTED = 'autoplayMuted';
var AUTOPLAY_DISABLED = exports.AUTOPLAY_DISABLED = 'autoplayDisabled';

var autoplayPagePromises = {};

function canAutoplay(mediaPool, _ref2) {
    var cancelable = _ref2.cancelable,
        _ref2$muted = _ref2.muted,
        muted = _ref2$muted === undefined ? false : _ref2$muted,
        _ref2$allowMuted = _ref2.allowMuted,
        allowMuted = _ref2$allowMuted === undefined ? false : _ref2$allowMuted,
        _ref2$timeout = _ref2.timeout,
        timeout = _ref2$timeout === undefined ? 10000 : _ref2$timeout;

    var element = mediaPool.getTestElement();
    var key = muted ? 'muted' : '' + allowMuted;

    // Skip test if it is currently running, or test previously evaluated to AUTOPLAY_ENABLED.
    if (!autoplayPagePromises[key]) {
        // Run the first test: autoplay with specified muted setting.
        autoplayPagePromises[key] = startPlayback(element, { muted: muted }).catch(function (e) {
            // Second optional test: autoplay muted.
            if (!cancelable.cancelled() && muted === false && allowMuted) {
                muted = true;
                return startPlayback(element, { muted: muted });
            }
            throw e;
        }).then(function () {
            if (muted) {
                autoplayPagePromises[key] = null; // Clear cache.
                return AUTOPLAY_MUTED;
            }
            return AUTOPLAY_ENABLED;
        }).catch(function (error) {
            clearTimeout(timeoutId);
            autoplayPagePromises[key] = null; // Clear cache.
            error.reason = AUTOPLAY_DISABLED;
            throw error;
        });
    }

    // If the cancelable was canceled, abort the test.
    var promise = autoplayPagePromises[key].then(function (result) {
        clearTimeout(timeoutId);
        if (cancelable.cancelled()) {
            var error = new Error('Autoplay test was cancelled');
            error.reason = 'cancelled';
            throw error;
        }
        return result;
    });

    // Return playback promise, or timeout.
    var timeoutId = void 0;
    var timer = new _promise2.default(function (resolve, reject) {
        timeoutId = setTimeout(function () {
            autoplayPagePromises[key] = null; // Clear cache.
            var error = new Error('Autoplay test timed out');
            error.reason = 'timeout';
            reject(error);
        }, timeout);
    });
    return _promise2.default.race([promise, timer]);
}

/***/ }),
/* 174 */
/*!***********************************************!*\
  !*** ./src/js/providers/utils/stream-type.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isDvr = isDvr;
exports.streamType = streamType;

// It's DVR if the duration is above the minDvrWindow, Live otherwise
function isDvr(duration, minDvrWindow) {
    return Math.abs(duration) >= Math.max(minDvrWindow, 0);
}

// Determine the adaptive type - Live, DVR, or VOD
// Duration can be positive or negative, but minDvrWindow should always be positive
function streamType(duration, minDvrWindow) {
    var _minDvrWindow = minDvrWindow === undefined ? 120 : minDvrWindow;
    var type = 'VOD';

    if (duration === Infinity) {
        // Live streams are always Infinity duration
        type = 'LIVE';
    } else if (duration < 0) {
        type = isDvr(duration, _minDvrWindow) ? 'DVR' : 'LIVE';
    }

    // Default option is VOD (i.e. positive or non-infinite)
    return type;
}

/***/ }),
/* 175 */
/*!**********************************!*\
  !*** ./src/js/controller/qoe.js ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _events = __webpack_require__(/*! events/events */ 5);

var _timer = __webpack_require__(/*! api/timer */ 18);

var _timer2 = _interopRequireDefault(_timer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TAB_HIDDEN = 'tabHidden';
var TAB_VISIBLE = 'tabVisible';

// This is to provide a first frame event even when
//  a provider does not give us one.
var onTimeIncreasesGenerator = function onTimeIncreasesGenerator(callback) {
    var lastVal = 0;
    return function (evt) {
        var pos = evt.position;
        if (pos > lastVal) {
            callback();
        }
        // sometimes the number will wrap around (ie 100 down to 0)
        //  so always update
        lastVal = pos;
    };
};

function unbindFirstFrameEvents(model, programController) {
    programController.off(_events.MEDIA_PLAY_ATTEMPT, model._onPlayAttempt);
    programController.off(_events.PROVIDER_FIRST_FRAME, model._triggerFirstFrame);
    programController.off(_events.MEDIA_TIME, model._onTime);
    model.off('change:activeTab', model._onTabVisible);
}

function trackFirstFrame(model, programController) {
    if (model._onTabVisible) {
        unbindFirstFrameEvents(model, programController);
    }

    // When it occurs, send the event, and unbind all listeners
    var once = false;
    model._triggerFirstFrame = function () {
        if (once) {
            return;
        }
        once = true;
        var qoeItem = model._qoeItem;
        qoeItem.tick(_events.MEDIA_FIRST_FRAME);

        var time = qoeItem.getFirstFrame();
        programController.trigger(_events.MEDIA_FIRST_FRAME, { loadTime: time });
        unbindFirstFrameEvents(model, programController);
    };

    model._onTime = onTimeIncreasesGenerator(model._triggerFirstFrame);

    model._onPlayAttempt = function () {
        model._qoeItem.tick(_events.MEDIA_PLAY_ATTEMPT);
    };

    // track visibility change
    model._onTabVisible = function (modelChanged, activeTab) {
        if (activeTab) {
            model._qoeItem.tick(TAB_VISIBLE);
        } else {
            model._qoeItem.tick(TAB_HIDDEN);
        }
    };

    model.on('change:activeTab', model._onTabVisible);
    programController.on(_events.MEDIA_PLAY_ATTEMPT, model._onPlayAttempt);
    programController.once(_events.PROVIDER_FIRST_FRAME, model._triggerFirstFrame);
    programController.on(_events.MEDIA_TIME, model._onTime);
}

var initQoe = function initQoe(initialModel, programController) {
    function onMediaModel(model, mediaModel, oldMediaModel) {
        // finish previous item
        if (model._qoeItem && oldMediaModel) {
            model._qoeItem.end(oldMediaModel.get('mediaState'));
        }
        // reset item level qoe
        model._qoeItem = new _timer2.default();
        model._qoeItem.getFirstFrame = function () {
            var time = this.between(_events.MEDIA_PLAY_ATTEMPT, _events.MEDIA_FIRST_FRAME);
            // If time between the tab becoming visible and first frame is valid
            // and less than the time since play attempt, play was not attempted until the tab became visible
            var timeActive = this.between(TAB_VISIBLE, _events.MEDIA_FIRST_FRAME);
            if (timeActive > 0 && timeActive < time) {
                return timeActive;
            }
            return time;
        };
        model._qoeItem.tick(_events.PLAYLIST_ITEM);
        model._qoeItem.start(mediaModel.get('mediaState'));

        trackFirstFrame(model, programController);

        mediaModel.on('change:mediaState', function (changeMediaModel, newstate, oldstate) {
            if (newstate !== oldstate) {
                model._qoeItem.end(oldstate);
                model._qoeItem.start(newstate);
            }
        });
    }

    initialModel.change('mediaModel', onMediaModel);
};

exports.default = initQoe;

/***/ })
]);
//# sourceMappingURL=jwplayer.core.controls.polyfills.f82a441d96b8dc3242ba.map