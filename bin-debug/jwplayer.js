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
window["jwplayer"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonpjwplayer"];
/******/ 	window["webpackJsonpjwplayer"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		10: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + ({"0":"jwplayer.core.controls.polyfills.html5","1":"jwplayer.core.controls.html5","2":"jwplayer.core.controls.polyfills","3":"jwplayer.core.controls","4":"jwplayer.controls","5":"jwplayer.core","6":"provider.html5","7":"polyfills.intersection-observer","8":"vttparser","9":"polyfills.webvtt"}[chunkId]||chunkId) + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 46);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************************!*\
  !*** ./src/js/utils/underscore.js ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports._isNumber = exports._isNaN = undefined;

var _date = __webpack_require__(/*! utils/date */ 25);

/* eslint-disable no-unused-expressions,new-cap */
/* eslint no-eq-null: 0 */
/* eslint eqeqeq: 0 */
/* eslint no-void: 0 */
/* eslint guard-for-in: 0 */
/* eslint no-constant-condition: 0 */

/*
 * Source: https://github.com/jashkenas/underscore/blob/1f4bf62/underscore.js
 */

// Establish the object that gets returned to break out of a loop iteration.
var breaker = {};

// Save bytes in the minified (but not gzipped) version:
//     Underscore.js 1.6.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

var ArrayProto = Array.prototype;
var ObjProto = Object.prototype;
var FuncProto = Function.prototype;

// Create quick reference variables for speed access to core prototypes.
var slice = ArrayProto.slice;
var concat = ArrayProto.concat;
var toString = ObjProto.toString;
var hasOwnProperty = ObjProto.hasOwnProperty;

// All **ECMAScript 5** native function implementations that we hope to use
// are declared here.
var nativeMap = ArrayProto.map;
var nativeReduce = ArrayProto.reduce;
var nativeForEach = ArrayProto.forEach;
var nativeFilter = ArrayProto.filter;
var nativeEvery = ArrayProto.every;
var nativeSome = ArrayProto.some;
var nativeIndexOf = ArrayProto.indexOf;
var nativeIsArray = Array.isArray;
var nativeKeys = Object.keys;
var nativeBind = FuncProto.bind;

// Create a safe reference to the Underscore object for use below.
var _ = function _(obj) {
    if (obj instanceof _) {
        return obj;
    }
    if (!(this instanceof _)) {
        return new _(obj);
    }
};

// Collection Functions
// --------------------

// The cornerstone, an `each` implementation, aka `forEach`.
// Handles objects with the built-in `forEach`, arrays, and raw objects.
// Delegates to **ECMAScript 5**'s native `forEach` if available.
var each = _.each = _.forEach = function (obj, iterator, context) {
    var i;
    var length;
    if (obj == null) {
        return obj;
    }
    if (nativeForEach && obj.forEach === nativeForEach) {
        obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
        for (i = 0, length = obj.length; i < length; i++) {
            if (iterator.call(context, obj[i], i, obj) === breaker) {
                return;
            }
        }
    } else {
        var keys = _.keys(obj);
        for (i = 0, length = keys.length; i < length; i++) {
            if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) {
                return;
            }
        }
    }
    return obj;
};

// Return the results of applying the iterator to each element.
// Delegates to **ECMAScript 5**'s native `map` if available.
_.map = _.collect = function (obj, iterator, context) {
    var results = [];
    if (obj == null) {
        return results;
    }
    if (nativeMap && obj.map === nativeMap) {
        return obj.map(iterator, context);
    }
    each(obj, function (value, index, list) {
        results.push(iterator.call(context, value, index, list));
    });
    return results;
};

var reduceError = 'Reduce of empty array with no initial value';

// **Reduce** builds up a single result from a list of values, aka `inject`,
// or `foldl`. Delegates to **ECMAScript 5**'s native `reduce` if available.
_.reduce = _.foldl = _.inject = function (obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) {
        obj = [];
    }
    if (nativeReduce && obj.reduce === nativeReduce) {
        if (context) {
            iterator = _.bind(iterator, context);
        }
        return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
    }
    each(obj, function (value, index, list) {
        if (!initial) {
            memo = value;
            initial = true;
        } else {
            memo = iterator.call(context, memo, value, index, list);
        }
    });
    if (!initial) {
        throw new TypeError(reduceError);
    }
    return memo;
};

// Return the first value which passes a truth test. Aliased as `detect`.
_.find = _.detect = function (obj, predicate, context) {
    var result;
    any(obj, function (value, index, list) {
        if (predicate.call(context, value, index, list)) {
            result = value;
            return true;
        }
    });
    return result;
};

// Return all the elements that pass a truth test.
// Delegates to **ECMAScript 5**'s native `filter` if available.
// Aliased as `select`.
_.filter = _.select = function (obj, predicate, context) {
    var results = [];
    if (obj == null) {
        return results;
    }
    if (nativeFilter && obj.filter === nativeFilter) {
        return obj.filter(predicate, context);
    }
    each(obj, function (value, index, list) {
        if (predicate.call(context, value, index, list)) {
            results.push(value);
        }
    });
    return results;
};

// Return all the elements for which a truth test fails.
_.reject = function (obj, predicate, context) {
    return _.filter(obj, function (value, index, list) {
        return !predicate.call(context, value, index, list);
    }, context);
};

// Trim out all falsy values from an array.
_.compact = function (array) {
    return _.filter(array, _.identity);
};

// Determine whether all of the elements match a truth test.
// Delegates to **ECMAScript 5**'s native `every` if available.
// Aliased as `all`.
_.every = _.all = function (obj, predicate, context) {
    predicate || (predicate = _.identity);
    var result = true;
    if (obj == null) {
        return result;
    }
    if (nativeEvery && obj.every === nativeEvery) {
        return obj.every(predicate, context);
    }
    each(obj, function (value, index, list) {
        if (!(result = result && predicate.call(context, value, index, list))) {
            return breaker;
        }
    });
    return !!result;
};

// Determine if at least one element in the object matches a truth test.
// Delegates to **ECMAScript 5**'s native `some` if available.
// Aliased as `any`.
var any = _.some = _.any = function (obj, predicate, context) {
    predicate || (predicate = _.identity);
    var result = false;
    if (obj == null) {
        return result;
    }
    if (nativeSome && obj.some === nativeSome) {
        return obj.some(predicate, context);
    }
    each(obj, function (value, index, list) {
        if (result || (result = predicate.call(context, value, index, list))) {
            return breaker;
        }
    });
    return !!result;
};

// returns the size of an object
_.size = function (obj) {
    if (obj == null) {
        return 0;
    }
    return obj.length === +obj.length ? obj.length : _.keys(obj).length;
};

// Array Functions
// ---------------


// Get the last element of an array. Passing **n** will return the last N
// values in the array. The **guard** check allows it to work with `_.map`.
_.last = function (array, n, guard) {
    if (array == null) {
        return void 0;
    }
    if (n == null || guard) {
        return array[array.length - 1];
    }
    return slice.call(array, Math.max(array.length - n, 0));
};

// Returns a function that will only be executed after being called N times.
_.after = function (times, func) {
    return function () {
        if (--times < 1) {
            return func.apply(this, arguments);
        }
    };
};

// Returns a function that will only be executed up to (but not including) the Nth call.
_.before = function (times, func) {
    var memo;
    return function () {
        if (--times > 0) {
            memo = func.apply(this, arguments);
        }
        if (times <= 1) {
            func = null;
        }
        return memo;
    };
};

// An internal function to generate lookup iterators.
var lookupIterator = function lookupIterator(value) {
    if (value == null) {
        return _.identity;
    }
    if (_.isFunction(value)) {
        return value;
    }
    return _.property(value);
};

// An internal function used for aggregate "group by" operations.
var group = function group(behavior) {
    return function (obj, iterator, context) {
        var result = {};
        iterator = lookupIterator(iterator);
        each(obj, function (value, index) {
            var key = iterator.call(context, value, index, obj);
            behavior(result, key, value);
        });
        return result;
    };
};

// Groups the object's values by a criterion. Pass either a string attribute
// to group by, or a function that returns the criterion.
_.groupBy = group(function (result, key, value) {
    _.has(result, key) ? result[key].push(value) : result[key] = [value];
});

// Indexes the object's values by a criterion, similar to `groupBy`, but for
// when you know that your index values will be unique.
_.indexBy = group(function (result, key, value) {
    result[key] = value;
});

// Use a comparator function to figure out the smallest index at which
// an object should be inserted so as to maintain order. Uses binary search.
_.sortedIndex = function (array, obj, iterator, context) {
    iterator = lookupIterator(iterator);
    var value = iterator.call(context, obj);
    var low = 0;
    var high = array.length;
    while (low < high) {
        var mid = low + high >>> 1;
        iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid;
    }
    return low;
};

_.contains = _.include = function (obj, target) {
    if (obj == null) {
        return false;
    }
    if (obj.length !== +obj.length) {
        obj = _.values(obj);
    }
    return _.indexOf(obj, target) >= 0;
};

// Convenience version of a common use case of `map`: fetching a property.
_.pluck = function (obj, key) {
    return _.map(obj, _.property(key));
};

// Convenience version of a common use case of `filter`: selecting only objects
// containing specific `key:value` pairs.
_.where = function (obj, attrs) {
    return _.filter(obj, _.matches(attrs));
};

// Convenience version of a common use case of `find`: getting the first object
// containing specific `key:value` pairs.
_.findWhere = function (obj, attrs) {
    return _.find(obj, _.matches(attrs));
};

// Return the maximum element or (element-based computation).
// Can't optimize arrays of integers longer than 65,535 elements.
// See [WebKit Bug 80797](https://bugs.webkit.org/show_bug.cgi?id=80797)
_.max = function (obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
        return Math.max.apply(Math, obj);
    }
    var result = -Infinity;
    var lastComputed = -Infinity;
    each(obj, function (value, index, list) {
        var computed = iterator ? iterator.call(context, value, index, list) : value;
        if (computed > lastComputed) {
            result = value;
            lastComputed = computed;
        }
    });
    return result;
};

// Take the difference between one array and a number of other arrays.
// Only the elements present in just the first array will remain.
_.difference = function (array) {
    var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
    return _.filter(array, function (value) {
        return !_.contains(rest, value);
    });
};

// Return a version of the array that does not contain the specified value(s).
_.without = function (array) {
    return _.difference(array, slice.call(arguments, 1));
};

// If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),
// we need this function. Return the position of the first occurrence of an
// item in an array, or -1 if the item is not included in the array.
// Delegates to **ECMAScript 5**'s native `indexOf` if available.
// If the array is large and already in sort order, pass `true`
// for **isSorted** to use binary search.
_.indexOf = function (array, item, isSorted) {
    if (array == null) {
        return -1;
    }
    var i = 0;
    var length = array.length;
    if (isSorted) {
        if (typeof isSorted == 'number') {
            i = isSorted < 0 ? Math.max(0, length + isSorted) : isSorted;
        } else {
            i = _.sortedIndex(array, item);
            return array[i] === item ? i : -1;
        }
    }
    if (nativeIndexOf && array.indexOf === nativeIndexOf) {
        return array.indexOf(item, isSorted);
    }
    for (; i < length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
    return -1;
};

// Function (ahem) Functions
// ------------------


// Reusable constructor function for prototype setting.
var ctor = function ctor() {};

// Create a function bound to a given object (assigning `this`, and arguments,
// optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
// available.
_.bind = function (func, context) {
    var args;
    var _bound;
    if (nativeBind && func.bind === nativeBind) {
        return nativeBind.apply(func, slice.call(arguments, 1));
    }
    if (!_.isFunction(func)) {
        throw new TypeError();
    }
    args = slice.call(arguments, 2);
    _bound = function bound() {
        if (!(this instanceof _bound)) {
            return func.apply(context, args.concat(slice.call(arguments)));
        }
        ctor.prototype = func.prototype;
        var self = new ctor();
        ctor.prototype = null;
        var result = func.apply(self, args.concat(slice.call(arguments)));
        if (Object(result) === result) {
            return result;
        }
        return self;
    };
    return _bound;
};

// Partially apply a function by creating a version that has had some of its
// arguments pre-filled, without changing its dynamic `this` context. _ acts
// as a placeholder, allowing any combination of arguments to be pre-filled.
_.partial = function (func) {
    var boundArgs = slice.call(arguments, 1);
    return function () {
        var position = 0;
        var args = boundArgs.slice();
        for (var i = 0, length = args.length; i < length; i++) {
            if (args[i] === _) {
                args[i] = arguments[position++];
            }
        }
        while (position < arguments.length) {
            args.push(arguments[position++]);
        }
        return func.apply(this, args);
    };
};

// Returns a function that will be executed at most one time, no matter how
// often you call it. Useful for lazy initialization.
_.once = _.partial(_.before, 2);

// Returns the first function passed as an argument to the second,
// allowing you to adjust arguments, run code before and after, and
// conditionally execute the original function.
// _.wrap = function(func, wrapper) {
//    return _.partial(wrapper, func);
// };


// Memoize an expensive function by storing its results.
_.memoize = function (func, hasher) {
    var memo = {};
    hasher || (hasher = _.identity);
    return function () {
        var key = hasher.apply(this, arguments);
        return _.has(memo, key) ? memo[key] : memo[key] = func.apply(this, arguments);
    };
};

// Delays a function for the given number of milliseconds, and then calls
// it with the arguments supplied.
_.delay = function (func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function () {
        return func.apply(null, args);
    }, wait);
};

// Defers a function, scheduling it to run after the current call stack has
// cleared.
_.defer = function (func) {
    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
};

// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time. Normally, the throttled function will run
// as much as it can, without ever going more than once per `wait` duration;
// but if you'd like to disable the execution on the leading edge, pass
// `{leading: false}`. To disable execution on the trailing edge, ditto.
_.throttle = function (func, wait, options) {
    var context;
    var args;
    var result;
    var timeout = null;
    var previous = 0;
    options || (options = {});
    var later = function later() {
        previous = options.leading === false ? 0 : (0, _date.now)();
        timeout = null;
        result = func.apply(context, args);
        context = args = null;
    };
    return function () {
        if (!previous && options.leading === false) {
            previous = _date.now;
        }
        var remaining = wait - (_date.now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0) {
            clearTimeout(timeout);
            timeout = null;
            previous = _date.now;
            result = func.apply(context, args);
            context = args = null;
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
};

// Retrieve the names of an object's properties.
// Delegates to **ECMAScript 5**'s native `Object.keys`
_.keys = function (obj) {
    if (!_.isObject(obj)) {
        return [];
    }
    if (nativeKeys) {
        return nativeKeys(obj);
    }
    var keys = [];
    for (var key in obj) {
        if (_.has(obj, key)) {
            keys.push(key);
        }
    }
    return keys;
};

_.invert = function (obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
        result[obj[keys[i]]] = keys[i];
    }
    return result;
};

// Fill in a given object with default properties.
_.defaults = function (obj) {
    each(slice.call(arguments, 1), function (source) {
        if (source) {
            for (var prop in source) {
                if (obj[prop] === void 0) {
                    obj[prop] = source[prop];
                }
            }
        }
    });
    return obj;
};

// Extend a given object with all the properties in passed-in object(s).
_.extend = function (obj) {
    each(slice.call(arguments, 1), function (source) {
        if (source) {
            for (var prop in source) {
                obj[prop] = source[prop];
            }
        }
    });
    return obj;
};

// Return a copy of the object only containing the whitelisted properties.
_.pick = function (obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    each(keys, function (key) {
        if (key in obj) {
            copy[key] = obj[key];
        }
    });
    return copy;
};

// Return a copy of the object without the blacklisted properties.
_.omit = function (obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    for (var key in obj) {
        if (!_.contains(keys, key)) {
            copy[key] = obj[key];
        }
    }
    return copy;
};

// Create a (shallow-cloned) duplicate of an object.
_.clone = function (obj) {
    if (!_.isObject(obj)) {
        return obj;
    }
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
};

// Is a given value an array?
// Delegates to ECMA5's native Array.isArray
_.isArray = nativeIsArray || function (obj) {
    return toString.call(obj) == '[object Array]';
};

// Is a given variable an object?
_.isObject = function (obj) {
    return obj === Object(obj);
};

// Add some isType methods: isFunction, isString, isNumber, isDate, isRegExp.
each(['Function', 'String', 'Number', 'Date', 'RegExp'], function (name) {
    _['is' + name] = function (obj) {
        return toString.call(obj) == '[object ' + name + ']';
    };
});

// Optimize `isFunction` if appropriate.
if (true) {
    _.isFunction = function (obj) {
        return typeof obj === 'function';
    };
}

// Is a given object a finite number?
_.isFinite = function (obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
};

// Is the given value `NaN`? (NaN is the only number which does not equal itself).
var _isNaN = _.isNaN = function (obj) {
    return _.isNumber(obj) && obj != +obj;
};

// Is a given value a boolean?
_.isBoolean = function (obj) {
    return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
};

// Is a given value equal to null?
_.isNull = function (obj) {
    return obj === null;
};

// Is a given variable undefined?
_.isUndefined = function (obj) {
    return obj === void 0;
};

// Shortcut function for checking if an object has a given property directly
// on itself (in other words, not on a prototype).
_.has = function (obj, key) {
    return hasOwnProperty.call(obj, key);
};

// Keep the identity function around for default iterators.
_.identity = function (value) {
    return value;
};

_.constant = function (value) {
    return function () {
        return value;
    };
};

_.property = function (key) {
    return function (obj) {
        return obj[key];
    };
};

_.propertyOf = function (obj) {
    return obj == null ? function () {} : function (key) {
        return obj[key];
    };
};

// Returns a predicate for checking whether an object has a given set of `key:value` pairs.
_.matches = function (attrs) {
    return function (obj) {
        // avoid comparing an object to itself.
        if (obj === attrs) {
            return true;
        }
        for (var key in attrs) {
            if (attrs[key] !== obj[key]) {
                return false;
            }
        }
        return true;
    };
};

// A (possibly faster) way to get the current timestamp as an integer.
_.now = _date.now;

// If the value of the named `property` is a function then invoke it with the
// `object` as context; otherwise, return it.
_.result = function (object, property) {
    if (object == null) {
        return void 0;
    }
    var value = object[property];
    return _.isFunction(value) ? value.call(object) : value;
};

var _isNumber = _.isNumber;

exports._isNaN = _isNaN;
exports._isNumber = _isNumber;
exports.default = _;

/***/ }),
/* 1 */
/*!*********************************!*\
  !*** ./src/js/utils/strings.js ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.trim = trim;
exports.pad = pad;
exports.xmlAttribute = xmlAttribute;
exports.extension = extension;
exports.hms = hms;
exports.seconds = seconds;
exports.offsetToSeconds = offsetToSeconds;
exports.prefix = prefix;
exports.suffix = suffix;

var _underscore = __webpack_require__(/*! utils/underscore */ 0);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function trim(inputString) {
    return inputString.replace(/^\s+|\s+$/g, '');
}

function pad(str, length, padder) {
    str = '' + str;
    padder = padder || '0';
    while (str.length < length) {
        str = padder + str;
    }
    return str;
}

// Get the value of a case-insensitive attribute in an XML node
function xmlAttribute(xml, attribute) {
    for (var attrib = 0; attrib < xml.attributes.length; attrib++) {
        if (xml.attributes[attrib].name && xml.attributes[attrib].name.toLowerCase() === attribute.toLowerCase()) {
            return xml.attributes[attrib].value.toString();
        }
    }
    return '';
}

// This does not return the file extension, instead it returns a media type extension
function getAzureFileFormat(path) {
    if (/[(,]format=m3u8-/i.test(path)) {
        return 'm3u8';
    } else if (/[(,]format=mpd-/i.test(path)) {
        return 'mpd';
    }
    return false;
}

function extension(path) {
    if (!path || path.substr(0, 4) === 'rtmp') {
        return '';
    }

    var azureFormat = getAzureFileFormat(path);
    if (azureFormat) {
        return azureFormat;
    }

    path = path.split('?')[0].split('#')[0];
    if (path.lastIndexOf('.') > -1) {
        return path.substr(path.lastIndexOf('.') + 1, path.length).toLowerCase();
    }
}

// Convert seconds to HH:MN:SS.sss
function hms(secondsNumber) {
    var h = parseInt(secondsNumber / 3600);
    var m = parseInt(secondsNumber / 60) % 60;
    var s = secondsNumber % 60;
    return pad(h, 2) + ':' + pad(m, 2) + ':' + pad(s.toFixed(3), 6);
}

// Convert a time-representing string to a number
function seconds(str, frameRate) {
    if (!str) {
        return 0;
    }
    if (_underscore2.default.isNumber(str) && !_underscore2.default.isNaN(str)) {
        return str;
    }

    str = str.replace(',', '.');
    var arr = str.split(':');
    var arrLength = arr.length;
    var sec = 0;
    if (str.slice(-1) === 's') {
        sec = parseFloat(str);
    } else if (str.slice(-1) === 'm') {
        sec = parseFloat(str) * 60;
    } else if (str.slice(-1) === 'h') {
        sec = parseFloat(str) * 3600;
    } else if (arrLength > 1) {
        var secIndex = arrLength - 1;
        if (arrLength === 4) {
            // if frame is included in the string, calculate seconds by dividing by frameRate
            if (frameRate) {
                sec = parseFloat(arr[secIndex]) / frameRate;
            }
            secIndex -= 1;
        }
        sec += parseFloat(arr[secIndex]);
        sec += parseFloat(arr[secIndex - 1]) * 60;
        if (arrLength >= 3) {
            sec += parseFloat(arr[secIndex - 2]) * 3600;
        }
    } else {
        sec = parseFloat(str);
    }
    if (_underscore2.default.isNaN(sec)) {
        return 0;
    }
    return sec;
}

// Convert an offset string to a number; supports conversion of percentage offsets
function offsetToSeconds(offset, duration, frameRate) {
    if (_underscore2.default.isString(offset) && offset.slice(-1) === '%') {
        var percent = parseFloat(offset);
        if (!duration || isNaN(duration) || isNaN(percent)) {
            return null;
        }
        return duration * percent / 100;
    }
    return seconds(offset, frameRate);
}

function prefix(arr, add) {
    return _underscore2.default.map(arr, function (val) {
        return add + val;
    });
}

function suffix(arr, add) {
    return _underscore2.default.map(arr, function (val) {
        return val + add;
    });
}

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/*!*************************************!*\
  !*** ./src/js/polyfills/promise.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolved = undefined;

var _index = __webpack_require__(/*! promise-polyfill/src/index */ 52);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Promise = window.Promise || (window.Promise = _index2.default);

var resolved = exports.resolved = Promise.resolve();

exports.default = Promise;

/***/ }),
/* 5 */
/*!*********************************!*\
  !*** ./src/js/events/events.js ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// States

/**
 * The user pressed play, but sufficient data to start playback has not yet loaded.
   The buffering icon is visible in the display.
*/
var STATE_BUFFERING = exports.STATE_BUFFERING = 'buffering';

/**
 * Either playback has not started or playback was stopped due to a stop() call or an error.
   In this state, either the play or the error icon is visible in the display.
*/
var STATE_IDLE = exports.STATE_IDLE = 'idle';

/**
 * Playback has ended. The replay icon is visible in the display.
*/
var STATE_COMPLETE = exports.STATE_COMPLETE = 'complete';

/**
 * The video is currently paused. The play icon is visible in the display.
*/
var STATE_PAUSED = exports.STATE_PAUSED = 'paused';

/**
 * The video is currently playing. No icon is visible in the display.
*/
var STATE_PLAYING = exports.STATE_PLAYING = 'playing';

/**
 * Playback was stopped due to an error.
   In this state the error icon and a message are visible in the display.
*/
var STATE_ERROR = exports.STATE_ERROR = 'error';

/**
 * The user pressed play, but media has not yet loaded.
*/
var STATE_LOADING = exports.STATE_LOADING = 'loading';

/**
 * The user pressed play, but data is not being loaded.
*/
var STATE_STALLED = exports.STATE_STALLED = 'stalled';

// Touch Events

/**
 * Event triggered while dragging the observed element.
*/
var DRAG = exports.DRAG = 'drag';

/**
 * Event triggered when dragging the observed element begins.
*/
var DRAG_START = exports.DRAG_START = 'dragStart';

/**
 * Event triggered when dragging the observed element ends.
*/
var DRAG_END = exports.DRAG_END = 'dragEnd';

/**
 * Event triggered when a user clicks the observed element once.
*/
var CLICK = exports.CLICK = 'click';

/**
 * Event triggered when a user clicks the observed element twice consecutively.
*/
var DOUBLE_CLICK = exports.DOUBLE_CLICK = 'doubleClick';

/**
 * Event triggered when a user taps the observed element once.
*/
var TAP = exports.TAP = 'tap';

/**
 * Event triggered when a user taps the observed element twice consecutively.
*/
var DOUBLE_TAP = exports.DOUBLE_TAP = 'doubleTap';

/**
 * Event triggered when the mouse is over the observed element.
*/
var OVER = exports.OVER = 'over';

/**
 * Event triggered while the mouse moves over the observed element.
*/
var MOVE = exports.MOVE = 'move';

/**
 * Event triggered when a user presses the enter key on the observed element.
 */
var ENTER = exports.ENTER = 'enter';

/**
 * Event triggered when the mouse is no longer over the observed element.
*/
var OUT = exports.OUT = 'out';

// Script Loaders

/**
 * Event stream reproduction is stopped because of an error.
*/
var ERROR = exports.ERROR = STATE_ERROR;

// Ad events

/**
 * Event triggered when an ad is clicked.
*/
var AD_CLICK = exports.AD_CLICK = 'adClick';

/**
 * Event triggered once an ad tag is loaded containing companion creatives.
*/
var AD_COMPANIONS = exports.AD_COMPANIONS = 'adCompanions';

/**
 * Event triggered when an ad has completed playback.
*/
var AD_COMPLETE = exports.AD_COMPLETE = 'adComplete';

/**
 * Event triggered when an error prevents the ad from playing.
*/
var AD_ERROR = exports.AD_ERROR = 'adError';

/**
 * Event triggered based on the IAB definition of an ad impression. This occurs the instant a video ad begins to play.
*/
var AD_IMPRESSION = exports.AD_IMPRESSION = 'adImpression';

/**
 * Event triggered when metadata is obtained during ad playback.
*/
var AD_META = exports.AD_META = 'adMeta';

/**
 * Event triggered when an ad is paused.
*/
var AD_PAUSE = exports.AD_PAUSE = 'adPause';

/**
 * Event triggered when an ad starts or is resumed.
*/
var AD_PLAY = exports.AD_PLAY = 'adPlay';

/**
 * Event triggered when an ad is skipped.
*/
var AD_SKIPPED = exports.AD_SKIPPED = 'adSkipped';

/**
 * Event triggered while ad playback is in progress.
*/
var AD_TIME = exports.AD_TIME = 'adTime';

// Events

/**
 * Triggered when the browsers' autoplay setting prohibits autostarting playback.
 */
var AUTOSTART_NOT_ALLOWED = exports.AUTOSTART_NOT_ALLOWED = 'autostartNotAllowed';

/**
 * Event triggered when media playback ends because the last segment has been played.
*/
var MEDIA_COMPLETE = exports.MEDIA_COMPLETE = STATE_COMPLETE;

/**
 * Event triggered when the player's setup is complete and is ready to be used.
    This is the earliest point at which any API calls should be made.
*/
var READY = exports.READY = 'ready';

/**
 * Event triggered when the playback position is either altered via API call, or due to user interaction.
*/
var MEDIA_SEEK = exports.MEDIA_SEEK = 'seek';

/**
 * Fired just before the player begins playing. At this point the player will not have begun playing or buffering.
    This is the ideal moment to insert preroll ads using the playAd() API
*/
var MEDIA_BEFOREPLAY = exports.MEDIA_BEFOREPLAY = 'beforePlay';

/**
 * Fired just before the player completes playing. At this point the player will not have moved on to
    either showing the replay screen or advancing to the next playlistItem.
    This is the ideal moment to insert postroll ads using the playAd() API
*/
var MEDIA_BEFORECOMPLETE = exports.MEDIA_BEFORECOMPLETE = 'beforeComplete';

/**
 * Fired when buffer has reached the maximum capacity.
*/
var MEDIA_BUFFER_FULL = exports.MEDIA_BUFFER_FULL = 'bufferFull';

/**
 * Fired when a click on the video display is detected.
*/
var DISPLAY_CLICK = exports.DISPLAY_CLICK = 'displayClick';

/**
 * Fired when the final item in a playlist has played its final segment and has ended.
*/
var PLAYLIST_COMPLETE = exports.PLAYLIST_COMPLETE = 'playlistComplete';

/**
 * Fired when changes to the casting status are detected, i.e. when connected or disconnected from a device.
*/
var CAST_SESSION = exports.CAST_SESSION = 'cast';

/**
 * Fired when an attempt to reproduce media results in a failure, causing the player to stop playback and go into idle mode.
*/
var MEDIA_ERROR = exports.MEDIA_ERROR = 'mediaError';

/**
 * Triggered by a video's first frame event, or the instant an audio file begins playback.
*/
var MEDIA_FIRST_FRAME = exports.MEDIA_FIRST_FRAME = 'firstFrame';

/**
 * Triggered the moment a request to play content is made.
*/
var MEDIA_PLAY_ATTEMPT = exports.MEDIA_PLAY_ATTEMPT = 'playAttempt';

/**
 * Fired when playback is aborted or blocked. Pausing the video or changing the media results
 * in play attempts being aborted. In mobile browsers play attempts are blocked when not started by
 * a user gesture.
 */
var MEDIA_PLAY_ATTEMPT_FAILED = exports.MEDIA_PLAY_ATTEMPT_FAILED = 'playAttemptFailed';

/**
 * Fired when media has been loaded into the player.
*/
var MEDIA_LOADED = exports.MEDIA_LOADED = 'loaded';

/**
 * Triggered when the video position changes after seeking, as opposed to MEDIA_SEEK which is triggered as a seek occurs.
*/
var MEDIA_SEEKED = exports.MEDIA_SEEKED = 'seeked';

// Setup Events

/**
 * Triggered when the player's setup results in a failure.
*/
var SETUP_ERROR = exports.SETUP_ERROR = 'setupError';

// Utility

/**
 * Triggered when the player's playback state changes.
*/
var PLAYER_STATE = exports.PLAYER_STATE = 'state';

/**
 * Fired when devices are available for casting.
*/
var CAST_AVAILABLE = exports.CAST_AVAILABLE = 'castAvailable';

// Model Changes

/**
 * Fired when the currently playing item loads additional data into its buffer.
    This only applies to VOD media; live streaming media (HLS/DASH) does not expose this behavior.
*/
var MEDIA_BUFFER = exports.MEDIA_BUFFER = 'bufferChange';

/**
 * Fired as the playback position gets updated, while the player is playing.
*/
var MEDIA_TIME = exports.MEDIA_TIME = 'time';

/**
 * Fired when the playbackRate of the video tag changes.
 */
var MEDIA_RATE_CHANGE = exports.MEDIA_RATE_CHANGE = 'ratechange';

/**
 * Fired when a loaded item's media type is detected.
*/
var MEDIA_TYPE = exports.MEDIA_TYPE = 'mediaType';

/**
 * Fired when the playback volume is altered.
*/
var MEDIA_VOLUME = exports.MEDIA_VOLUME = 'volume';

/**
 * Fired when media is muted;
*/
var MEDIA_MUTE = exports.MEDIA_MUTE = 'mute';

/**
 * Fired when metadata embedded in the media file is obtained.
*/
var MEDIA_META = exports.MEDIA_META = 'meta';

/**
 * Fired when the list of available quality levels is updated.
*/
var MEDIA_LEVELS = exports.MEDIA_LEVELS = 'levels';

/**
 * Fired when the active quality level is changed.
*/
var MEDIA_LEVEL_CHANGED = exports.MEDIA_LEVEL_CHANGED = 'levelsChanged';

/**
 * Fired when the visual quality of media is updated.
 */
var MEDIA_VISUAL_QUALITY = exports.MEDIA_VISUAL_QUALITY = 'visualQuality';

/**
 * Fired when controls are enabled or disabled by a script.
*/
var CONTROLS = exports.CONTROLS = 'controls';

/**
 * Fired when the player toggles to/from fullscreen.
*/
var FULLSCREEN = exports.FULLSCREEN = 'fullscreen';

/**
 * Fired when the player's on-page dimensions have changed. Is not fired in response to a fullscreen change.
*/
var RESIZE = exports.RESIZE = 'resize';

/**
 * Fired when a new playlist item has been loaded into the player.
*/
var PLAYLIST_ITEM = exports.PLAYLIST_ITEM = 'playlistItem';

/**
 * Fired when an entirely new playlist has been loaded into the player.
*/
var PLAYLIST_LOADED = exports.PLAYLIST_LOADED = 'playlist';

/**
 * Fired when the list of available audio tracks is updated. Happens shortly after a playlist item starts playing.
*/
var AUDIO_TRACKS = exports.AUDIO_TRACKS = 'audioTracks';

/**
 * Fired when the active audio track is changed.
    Happens in response to e.g. a user clicking the audio tracks menu or a script calling setCurrentAudioTrack().
*/
var AUDIO_TRACK_CHANGED = exports.AUDIO_TRACK_CHANGED = 'audioTrackChanged';

/**
 * Fired when the playback rate has been changed.
*/
var PLAYBACK_RATE_CHANGED = exports.PLAYBACK_RATE_CHANGED = 'playbackRateChanged';

// View Component Actions

/**
 * Fired when a click has been detected on the logo element.
*/
var LOGO_CLICK = exports.LOGO_CLICK = 'logoClick';

// Model - Captions

/**
 * Fired when the list of available captions tracks changes.
    This event is the ideal time to set default captions with the API.
*/
var CAPTIONS_LIST = exports.CAPTIONS_LIST = 'captionsList';

/**
 * Triggered whenever the active captions track is changed manually or via API.
*/
var CAPTIONS_CHANGED = exports.CAPTIONS_CHANGED = 'captionsChanged';

// Provider Communication

/**
 * Fired the provider being utilized by JW Player for a particular media file is replaced by a new provider.
*/
var PROVIDER_CHANGED = exports.PROVIDER_CHANGED = 'providerChanged';

/**
 * Triggered when a provider begins playback to signal availability of first frame.
*/
var PROVIDER_FIRST_FRAME = exports.PROVIDER_FIRST_FRAME = 'providerFirstFrame';

// UI Events

/**
 * Fired when user activity is detected on the targeted element.
*/
var USER_ACTION = exports.USER_ACTION = 'userAction';

/**
 * Fired when the instream adapter detects a click.
*/
var INSTREAM_CLICK = exports.INSTREAM_CLICK = 'instreamClick';

/**
 * Triggered when the player is resized to a width in a different breakpoint category.
*/
var BREAKPOINT = exports.BREAKPOINT = 'breakpoint';

/**
 * Triggered when receiving a native 'fullscreenchange' event from a video tag
*/
var NATIVE_FULLSCREEN = exports.NATIVE_FULLSCREEN = 'fullscreenchange';

/***/ }),
/* 6 */
/*!*********************************!*\
  !*** ./src/js/utils/helpers.js ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.log = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable no-console */

var _playerutils = __webpack_require__(/*! utils/playerutils */ 20);

var playerutils = _interopRequireWildcard(_playerutils);

var _validator = __webpack_require__(/*! utils/validator */ 15);

var validator = _interopRequireWildcard(_validator);

var _parser = __webpack_require__(/*! utils/parser */ 10);

var parser = _interopRequireWildcard(_parser);

var _strings = __webpack_require__(/*! utils/strings */ 1);

var _timer = __webpack_require__(/*! api/timer */ 18);

var _timer2 = _interopRequireDefault(_timer);

var _trycatch = __webpack_require__(/*! utils/trycatch */ 59);

var _underscore = __webpack_require__(/*! utils/underscore */ 0);

var _underscore2 = _interopRequireDefault(_underscore);

var _browser = __webpack_require__(/*! utils/browser */ 28);

var _dom = __webpack_require__(/*! utils/dom */ 23);

var _css = __webpack_require__(/*! utils/css */ 24);

var _ajax = __webpack_require__(/*! utils/ajax */ 60);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var log = exports.log = typeof console.log === 'function' ? console.log.bind(console) : function () {};

var between = function between(num, min, max) {
    return Math.max(Math.min(num, max), min);
};

// The predicate received the arguments (key, value) instead of (value, key)
var foreach = function foreach(aData, fnEach) {
    for (var key in aData) {
        if (Object.prototype.hasOwnProperty.call(aData, key)) {
            fnEach(key, aData[key]);
        }
    }
};

var indexOf = _underscore2.default.indexOf;

var noop = function noop() {};

var helpers = _extends({}, parser, validator, playerutils, {
    addClass: _dom.addClass,
    hasClass: _dom.hasClass,
    removeClass: _dom.removeClass,
    replaceClass: _dom.replaceClass,
    toggleClass: _dom.toggleClass,
    classList: _dom.classList,
    styleDimension: _dom.styleDimension,
    createElement: _dom.createElement,
    emptyElement: _dom.emptyElement,
    addStyleSheet: _dom.addStyleSheet,
    bounds: _dom.bounds,
    css: _css.css,
    clearCss: _css.clearCss,
    style: _css.style,
    transform: _css.transform,
    getRgba: _css.getRgba,
    ajax: _ajax.ajax,
    crossdomain: _ajax.crossdomain,
    tryCatch: _trycatch.tryCatch,
    Error: _trycatch.JwError,
    Timer: _timer2.default,
    log: log,
    between: between,
    foreach: foreach,
    flashVersion: _browser.flashVersion,
    isIframe: _browser.isIframe,
    indexOf: indexOf,
    trim: _strings.trim,
    pad: _strings.pad,
    extension: _strings.extension,
    hms: _strings.hms,
    seconds: _strings.seconds,
    prefix: _strings.prefix,
    suffix: _strings.suffix,
    noop: noop
});

exports.default = helpers;

/***/ }),
/* 7 */
/*!*****************************************!*\
  !*** ./src/js/utils/backbone.events.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.on = on;
exports.once = once;
exports.off = off;
exports.trigger = trigger;
exports.triggerSafe = triggerSafe;
//     Backbone.js 1.1.2

//     (c) 2010-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

/*
 * Source: https://github.com/jashkenas/backbone/blob/1.1.2/backbone.js#L68
 */

// Backbone.Events
// ---------------

// A module that can be mixed in to *any object* in order to provide it with
// custom events. You may bind with `on` or remove with `off` callback
// functions to an event; `trigger`-ing an event fires all callbacks in
// succession.
//
//     var object = {};
//     Object.assign(object, Backbone.Events);
//     object.on('expand', function(){ alert('expanded'); });
//     object.trigger('expand');
//

var slice = [].slice;

// Bind an event to a `callback` function. Passing `"all"` will bind
// the callback to all events fired.
function on(name, callback, context) {
    if (!eventsApi(this, 'on', name, [callback, context]) || !callback) {
        return this;
    }
    var _events = this._events || (this._events = {});
    var events = _events[name] || (_events[name] = []);
    events.push({ callback: callback, context: context });
    return this;
}

// Bind an event to only be triggered a single time. After the first time
// the callback is invoked, it will be removed.
function once(name, callback, context) {
    if (!eventsApi(this, 'once', name, [callback, context]) || !callback) {
        return this;
    }
    var count = 0;
    var self = this;
    var onceCallback = function onceCallback() {
        if (count++) {
            return;
        }
        self.off(name, onceCallback);
        callback.apply(this, arguments);
    };
    onceCallback._callback = callback;
    return this.on(name, onceCallback, context);
}

// Remove one or many callbacks. If `context` is null, removes all
// callbacks with that function. If `callback` is null, removes all
// callbacks for the event. If `name` is null, removes all bound
// callbacks for all events.
function off(name, callback, context) {
    if (!this._events || !eventsApi(this, 'off', name, [callback, context])) {
        return this;
    }
    if (!name && !callback && !context) {
        delete this._events;
        return this;
    }
    var names = name ? [name] : Object.keys(this._events);
    for (var i = 0, l = names.length; i < l; i++) {
        name = names[i];
        var events = this._events[name];
        if (events) {
            var retain = this._events[name] = [];
            if (callback || context) {
                for (var j = 0, k = events.length; j < k; j++) {
                    var ev = events[j];
                    if (callback && callback !== ev.callback && callback !== ev.callback._callback || context && context !== ev.context) {
                        retain.push(ev);
                    }
                }
            }
            if (!retain.length) {
                delete this._events[name];
            }
        }
    }
    return this;
}

// Trigger one or many events, firing all bound callbacks. Callbacks are
// passed the same arguments as `trigger` is, apart from the event name
// (unless you're listening on `"all"`, which will cause your callback to
// receive the true name of the event as the first argument).
function trigger(name) {
    if (!this._events) {
        return this;
    }
    var args = slice.call(arguments, 1);
    if (!eventsApi(this, 'trigger', name, args)) {
        return this;
    }
    var events = this._events[name];
    var allEvents = this._events.all;
    if (events) {
        triggerEvents(events, args, this);
    }
    if (allEvents) {
        triggerEvents(allEvents, arguments, this);
    }
    return this;
}

function triggerSafe(name) {
    if (!this._events) {
        return this;
    }
    var args = slice.call(arguments, 1);
    if (!eventsApi(this, 'trigger', name, args)) {
        return this;
    }
    var events = this._events[name];
    var allEvents = this._events.all;
    if (events) {
        triggerEvents(events, args, this, name);
    }
    if (allEvents) {
        triggerEvents(allEvents, arguments, this, name);
    }
    return this;
}

// Regular expression used to split event strings.
var eventSplitter = /\s+/;

// Implement fancy features of the Events API such as multiple event
// names `"change blur"` and jQuery-style event maps `{change: action}`
// in terms of the existing API.
function eventsApi(obj, action, name, rest) {
    if (!name) {
        return true;
    }
    // Handle event maps.
    if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
        for (var key in name) {
            if (Object.prototype.hasOwnProperty.call(name, key)) {
                obj[action].apply(obj, [key, name[key]].concat(rest));
            }
        }
        return false;
    }
    // Handle space separated event names.
    if (eventSplitter.test(name)) {
        var names = name.split(eventSplitter);
        for (var i = 0, l = names.length; i < l; i++) {
            obj[action].apply(obj, [names[i]].concat(rest));
        }
        return false;
    }
    return true;
}

function triggerEvents(events, args, context, catchExceptionsForName) {
    var i = -1;
    var l = events.length;
    while (++i < l) {
        var ev = events[i];
        if (catchExceptionsForName) {
            try {
                ev.callback.apply(ev.context || context, args);
            } catch (e) {
                /* eslint-disable no-console */
                console.log('Error in "' + catchExceptionsForName + '" event handler:', e);
            }
        } else {
            ev.callback.apply(ev.context || context, args);
        }
    }
}

exports.default = {
    on: on, once: once, off: off, trigger: trigger
};

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */
/*!********************************!*\
  !*** ./src/js/utils/parser.js ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getAbsolutePath = getAbsolutePath;
exports.isAbsolutePath = isAbsolutePath;
exports.parseXML = parseXML;
exports.serialize = serialize;
exports.parseDimension = parseDimension;
exports.timeFormat = timeFormat;

var _validator = __webpack_require__(/*! utils/validator */ 15);

var _underscore = __webpack_require__(/*! utils/underscore */ 0);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Returns the absolute file path based on a relative filepath, and optional base path
function getAbsolutePath(path, base) {
    if (!(0, _validator.exists)(base)) {
        base = document.location.href;
    }

    if (!(0, _validator.exists)(path)) {
        return;
    }

    if (isAbsolutePath(path)) {
        return path;
    }

    var protocol = base.substring(0, base.indexOf('://') + 3);
    var domain = base.substring(protocol.length, base.indexOf('/', protocol.length + 1));
    var patharray = void 0;

    if (path.indexOf('/') === 0) {
        patharray = path.split('/');
    } else {
        var basepath = base.split('?')[0];
        basepath = basepath.substring(protocol.length + domain.length + 1, basepath.lastIndexOf('/'));
        patharray = basepath.split('/').concat(path.split('/'));
    }
    var result = [];
    for (var i = 0; i < patharray.length; i++) {
        if (patharray[i] && (0, _validator.exists)(patharray[i]) && patharray[i] !== '.') {
            if (patharray[i] === '..') {
                result.pop();
            } else {
                result.push(patharray[i]);
            }
        }
    }
    return protocol + domain + '/' + result.join('/');
}

function isAbsolutePath(path) {
    return (/^(?:(?:https?|file):)?\/\//.test(path)
    );
}

function containsParserErrors(childNodes) {
    return _underscore2.default.some(childNodes, function (node) {
        return node.nodeName === 'parsererror';
    });
}

// Returns an XML object for the given XML string, or null if the input cannot be parsed.
function parseXML(input) {
    var parsedXML = null;
    try {
        // Parse XML in FF/Chrome/Safari/Opera
        if ('DOMParser' in window) {
            parsedXML = new window.DOMParser().parseFromString(input, 'text/xml');
            // In Firefox the XML doc may contain the parsererror, other browsers it's further down
            if (containsParserErrors(parsedXML.childNodes) || parsedXML.childNodes && containsParserErrors(parsedXML.childNodes[0].childNodes)) {
                parsedXML = null;
            }
        } else {
            // Internet Explorer
            parsedXML = new window.ActiveXObject('Microsoft.XMLDOM');
            parsedXML.async = 'false';
            parsedXML.loadXML(input);
        }
    } catch (e) {/* Expected when content is not XML */}

    return parsedXML;
}

// Returns the `val` argument:
// as null if undefined
// as a boolean for string values 'true' and 'false'
// as a number for numeric strings with a character length of 5 or less
function serialize(val) {
    if (val === undefined) {
        return null;
    }
    if (typeof val === 'string' && val.length < 6) {
        var lowercaseVal = val.toLowerCase();
        if (lowercaseVal === 'true') {
            return true;
        }
        if (lowercaseVal === 'false') {
            return false;
        }
        if (!isNaN(Number(val)) && !isNaN(parseFloat(val))) {
            return Number(val);
        }
    }
    return val;
}

// Returns the integer value a of css string (e.g. '420px')
function parseDimension(dimension) {
    if (typeof dimension === 'string') {
        if (dimension === '') {
            return 0;
        } else if (dimension.lastIndexOf('%') > -1) {
            return dimension;
        }
        return parseInt(dimension.replace('px', ''), 10);
    }
    return dimension;
}

// Returns a formatted time string from "mm:ss" to "hh:mm:ss" for the given number of seconds
function timeFormat(sec, allowNegative) {
    if (sec <= 0 && !allowNegative || _underscore2.default.isNaN(parseInt(sec))) {
        return '00:00';
    }

    // If negative add a minus sign
    var prefix = sec < 0 ? '-' : '';
    sec = Math.abs(sec);

    var hrs = Math.floor(sec / 3600);
    var mins = Math.floor((sec - hrs * 3600) / 60);
    var secs = Math.floor(sec % 60);

    return prefix + (hrs ? hrs + ':' : '') + (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
}

/***/ }),
/* 11 */
/*!*******************************************!*\
  !*** ./src/js/environment/environment.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Features = exports.OS = exports.Browser = undefined;

var _browser = __webpack_require__(/*! utils/browser */ 28);

var _browserVersion = __webpack_require__(/*! ./browser-version */ 48);

var _osVersion = __webpack_require__(/*! ./os-version */ 49);

var _underscore = __webpack_require__(/*! utils/underscore */ 0);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var memoize = _underscore2.default.memoize;
var userAgent = navigator.userAgent;

function supportsPassive() {
    var passiveOptionRead = false;

    try {
        var opts = Object.defineProperty({}, 'passive', {
            get: function get() {
                passiveOptionRead = true;
            }
        });
        window.addEventListener('testPassive', null, opts);
        window.removeEventListener('testPassive', null, opts);
    } catch (e) {/* noop */}

    return passiveOptionRead;
}

/**
 * @typedef {object} EnvironmentVersion
 * @property {string} version - The full version string.
 * @property {number} major - The major version.
 * @property {number} minor - The minor version.
 */

/**
 * @typedef {object} BrowserEnvironment
 * @property {boolean} androidNative - Is the browser Android Native?
 * @property {boolean} chrome - Is the browser Chrome?
 * @property {boolean} edge - Is the browser Edge?
 * @property {boolean} facebook - Is the browser a Facebook webview?
 * @property {boolean} firefox - Is the browser Firefox?
 * @property {boolean} ie - Is the browser Internet Explorer?
 * @property {boolean} msie - Is the browser MSIE?
 * @property {boolean} safari - Is the browser Safari?
 * @property {EnvironmentVersion} version - The browser version.
 */
var Browser = exports.Browser = {};

/**
 * @typedef {object} OSEnvironment
 * @property {boolean} android - Is the operating system Android?
 * @property {boolean} iOS - Is the operating system iOS?
 * @property {boolean} mobile - Is the operating system iOS or Android?
 * @property {boolean} osx - Is the operating system Mac OS X?
 * @property {boolean} iPad - Is the device an iPad?
 * @property {boolean} iPhone - Is the device an iPhone?
 * @property {boolean} windows - Is the operating system Windows?
 * @property {EnvironmentVersion} version - The operating system version.
 */
var OS = exports.OS = {};

/**
 * @typedef {object} FeatureEnvironment
 * @property {boolean} flash - Does the browser environment support Flash?
 * @property {number} flashVersion - The version of Flash.
 * @property {boolean} iframe - Is the session in an iframe?
 */
var Features = exports.Features = {};

var isWindows = function isWindows() {
    return userAgent.indexOf('Windows') > -1;
};

Object.defineProperties(Browser, {
    androidNative: {
        get: memoize(_browser.isAndroidNative),
        enumerable: true
    },
    chrome: {
        get: memoize(_browser.isChrome),
        enumerable: true
    },
    edge: {
        get: memoize(_browser.isEdge),
        enumerable: true
    },
    facebook: {
        get: memoize(_browser.isFacebook),
        enumerable: true
    },
    firefox: {
        get: memoize(_browser.isFF),
        enumerable: true
    },
    ie: {
        get: memoize(_browser.isIE),
        enumerable: true
    },
    msie: {
        get: memoize(_browser.isMSIE),
        enumerable: true
    },
    safari: {
        get: memoize(_browser.isSafari),
        enumerable: true
    },
    version: {
        get: memoize(_browserVersion.browserVersion.bind(undefined, Browser, userAgent)),
        enumerable: true
    }
});

Object.defineProperties(OS, {
    android: {
        get: memoize(_browser.isAndroid),
        enumerable: true
    },
    iOS: {
        get: memoize(_browser.isIOS),
        enumerable: true
    },
    mobile: {
        get: memoize(_browser.isMobile),
        enumerable: true
    },
    mac: {
        get: memoize(_browser.isOSX),
        enumerable: true
    },
    iPad: {
        get: memoize(_browser.isIPad),
        enumerable: true
    },
    iPhone: {
        get: memoize(_browser.isIPod),
        enumerable: true
    },
    windows: {
        get: memoize(isWindows),
        enumerable: true
    },
    version: {
        get: memoize(_osVersion.osVersion.bind(undefined, OS, userAgent)),
        enumerable: true
    }
});

Object.defineProperties(Features, {
    flash: {
        get: memoize(_browser.isFlashSupported),
        enumerable: true
    },
    flashVersion: {
        get: memoize(_browser.flashVersion),
        enumerable: true
    },
    iframe: {
        get: memoize(_browser.isIframe),
        enumerable: true
    },
    passiveEvents: {
        get: memoize(supportsPassive),
        enumerable: true
    },
    backgroundLoading: {
        get: memoize(function () {
            return !(OS.iOS || Browser.safari);
        }),
        enumerable: true
    }
});

/***/ }),
/* 12 */
/*!***********************************!*\
  !*** ./src/js/api/core-loader.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bundleContainsProviders = undefined;
exports.default = loadCoreBundle;
exports.chunkLoadErrorHandler = chunkLoadErrorHandler;
exports.selectBundle = selectBundle;
exports.requiresPolyfills = requiresPolyfills;
exports.requiresProvider = requiresProvider;

var _item = __webpack_require__(/*! playlist/item */ 19);

var _item2 = _interopRequireDefault(_item);

var _providersSupported = __webpack_require__(/*! providers/providers-supported */ 14);

var _providersSupported2 = _interopRequireDefault(_providersSupported);

var _providersRegister = __webpack_require__(/*! providers/providers-register */ 21);

var _providersRegister2 = _interopRequireDefault(_providersRegister);

var _controlsLoader = __webpack_require__(/*! controller/controls-loader */ 40);

var _promise = __webpack_require__(/*! polyfills/promise */ 4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bundlePromise = null;

var bundleContainsProviders = exports.bundleContainsProviders = {};

function loadCoreBundle(model) {
    if (!bundlePromise) {
        bundlePromise = selectBundle(model);
    }
    return bundlePromise;
}

function chunkLoadErrorHandler() /* error */{
    // Webpack require.ensure error: "Loading chunk 3 failed"
    throw new Error('Network error');
}

function selectBundle(model) {
    var controls = model.get('controls');
    var polyfills = requiresPolyfills();
    var html5Provider = requiresProvider(model, 'html5');

    if (controls && polyfills && html5Provider) {
        return loadControlsPolyfillHtml5Bundle();
    }
    if (controls && html5Provider) {
        return loadControlsHtml5Bundle();
    }
    if (controls && polyfills) {
        return loadControlsPolyfillBundle();
    }
    if (controls) {
        return loadControlsBundle();
    }
    return loadCore();
}

function requiresPolyfills() {
    var IntersectionObserverEntry = window.IntersectionObserverEntry;
    return !IntersectionObserverEntry || !('IntersectionObserver' in window) || !('intersectionRatio' in IntersectionObserverEntry.prototype);
}

function requiresProvider(model, providerName) {
    var playlist = model.get('playlist');
    if (Array.isArray(playlist) && playlist.length) {
        var sources = (0, _item2.default)(playlist[0]).sources;
        for (var i = 0; i < sources.length; i++) {
            var source = sources[i];
            var providersManager = model.getProviders();
            for (var j = 0; j < _providersSupported2.default.length; j++) {
                var provider = _providersSupported2.default[j];
                if (providersManager.providerSupports(provider, source)) {
                    return provider.name === providerName;
                }
            }
        }
    }
    return false;
}

function loadControlsPolyfillHtml5Bundle() {
    bundleContainsProviders.html5 = true;
    return __webpack_require__.e/* require.ensure */(0/*! jwplayer.core.controls.polyfills.html5 */).then((function (require) {
        // These modules should be required in this order
        __webpack_require__(/*! intersection-observer */ 9);
        var CoreMixin = __webpack_require__(/*! controller/controller */ 3).default;
        _controlsLoader.module.controls = __webpack_require__(/*! view/controls/controls */ 2).default;
        (0, _providersRegister2.default)(__webpack_require__(/*! providers/html5 */ 8).default);
        return CoreMixin;
    }).bind(null, __webpack_require__)).catch(chunkLoadErrorHandler);
}

function loadControlsHtml5Bundle() {
    bundleContainsProviders.html5 = true;
    return __webpack_require__.e/* require.ensure */(1/*! jwplayer.core.controls.html5 */).then((function (require) {
        var CoreMixin = __webpack_require__(/*! controller/controller */ 3).default;
        _controlsLoader.module.controls = __webpack_require__(/*! view/controls/controls */ 2).default;
        (0, _providersRegister2.default)(__webpack_require__(/*! providers/html5 */ 8).default);
        return CoreMixin;
    }).bind(null, __webpack_require__)).catch(chunkLoadErrorHandler);
}

function loadControlsPolyfillBundle() {
    return __webpack_require__.e/* require.ensure */(2/*! jwplayer.core.controls.polyfills */).then((function (require) {
        __webpack_require__(/*! intersection-observer */ 9);
        var CoreMixin = __webpack_require__(/*! controller/controller */ 3).default;
        _controlsLoader.module.controls = __webpack_require__(/*! view/controls/controls */ 2).default;
        return CoreMixin;
    }).bind(null, __webpack_require__)).catch(chunkLoadErrorHandler);
}

function loadControlsBundle() {
    return __webpack_require__.e/* require.ensure */(3/*! jwplayer.core.controls */).then((function (require) {
        var CoreMixin = __webpack_require__(/*! controller/controller */ 3).default;
        _controlsLoader.module.controls = __webpack_require__(/*! view/controls/controls */ 2).default;
        return CoreMixin;
    }).bind(null, __webpack_require__)).catch(chunkLoadErrorHandler);
}

function loadCore() {
    return loadIntersectionObserverIfNeeded().then(function () {
        return __webpack_require__.e/* require.ensure */(5/*! jwplayer.core */).then((function (require) {
            return __webpack_require__(/*! controller/controller */ 3).default;
        }).bind(null, __webpack_require__)).catch(chunkLoadErrorHandler);
    });
}

function loadIntersectionObserverIfNeeded() {
    if (requiresPolyfills()) {
        return __webpack_require__.e/* require.ensure */(7/*! polyfills.intersection-observer */).then((function (require) {
            return __webpack_require__(/*! intersection-observer */ 9);
        }).bind(null, __webpack_require__)).catch(chunkLoadErrorHandler);
    }
    return _promise.resolved;
}

/***/ }),
/* 13 */
/*!***********************************!*\
  !*** ./src/js/parsers/parsers.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.localName = localName;
exports.textContent = textContent;
exports.getChildNode = getChildNode;
exports.numChildren = numChildren;

var _strings = __webpack_require__(/*! utils/strings */ 1);

function localName(node) {
    var name = '';
    if (node) {
        if (node.localName) {
            name = node.localName;
        } else if (node.baseName) {
            name = node.baseName;
        }
    }
    return name;
}

function textContent(node) {
    var text = '';
    if (node) {
        if (node.textContent) {
            text = (0, _strings.trim)(node.textContent);
        } else if (node.text) {
            text = (0, _strings.trim)(node.text);
        }
    }

    return text;
}

function getChildNode(parent, index) {
    return parent.childNodes[index];
}

function numChildren(parent) {
    if (parent.childNodes) {
        return parent.childNodes.length;
    }
    return 0;
}

/***/ }),
/* 14 */
/*!*************************************************!*\
  !*** ./src/js/providers/providers-supported.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.supportsType = supportsType;

var _html5AndroidHls = __webpack_require__(/*! providers/html5-android-hls */ 44);

var _validator = __webpack_require__(/*! utils/validator */ 15);

var _video = __webpack_require__(/*! utils/video */ 50);

var _video2 = _interopRequireDefault(_video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MimeTypes = {
    aac: 'audio/mp4',
    mp4: 'video/mp4',
    f4v: 'video/mp4',
    m4v: 'video/mp4',
    mov: 'video/mp4',
    mp3: 'audio/mpeg',
    mpeg: 'audio/mpeg',
    ogv: 'video/ogg',
    ogg: 'video/ogg',
    oga: 'video/ogg',
    vorbis: 'video/ogg',
    webm: 'video/webm',
    // The following are not expected to work in Chrome
    f4a: 'video/aac',
    m3u8: 'application/vnd.apple.mpegurl',
    m3u: 'application/vnd.apple.mpegurl',
    hls: 'application/vnd.apple.mpegurl'
};

var SupportsMatrix = [{
    name: 'html5',
    supports: supportsType
}];

function supportsType(source) {
    {
        if ((0, _html5AndroidHls.isAndroidHls)(source) === false) {
            return false;
        }

        if (!_video2.default.canPlayType) {
            return false;
        }

        var file = source.file;
        var type = source.type;

        // Ensure RTMP files are not seen as videos
        if ((0, _validator.isRtmp)(file, type)) {
            return false;
        }

        var mimeType = source.mimeType || MimeTypes[type];

        // Not OK to use HTML5 with no extension
        if (!mimeType) {
            return false;
        }

        // Last, but not least, we ask the browser
        // (But only if it's a video with an extension known to work in HTML5)
        return !!_video2.default.canPlayType(mimeType);
    }
}

exports.default = SupportsMatrix;

/***/ }),
/* 15 */
/*!***********************************!*\
  !*** ./src/js/utils/validator.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.exists = exists;
exports.isHTTPS = isHTTPS;
exports.isRtmp = isRtmp;
exports.isYouTube = isYouTube;
exports.typeOf = typeOf;

/**
 * @param {any} item - The variable to test.
 * @returns {boolean} Is the value of `item` null, undefined or an empty string?
 */
function exists(item) {
    switch (typeof item === 'undefined' ? 'undefined' : _typeof(item)) {
        case 'string':
            return item.length > 0;
        case 'object':
            return item !== null;
        case 'undefined':
            return false;
        default:
            return true;
    }
}

/**
 * @returns {boolean} Is the current page hosted over HTTPS?
 */
function isHTTPS() {
    return window.location.protocol === 'https:';
}

/**
 * @param {string} file - The path or url to a media file
 * @param {string} type - The type of the media parsed from a feed or the file extension.
 * @returns {boolean} Is `file` an RTMP link or does `type` equal 'rtmp'?
 */
function isRtmp(file, type) {
    return file.indexOf('rtmp:') === 0 || type === 'rtmp';
}

/**
 * @param {string} path - The path or url to a media file
 * @param {string} type - The type of the media parsed from a feed or the media url.
 * @returns {boolean} Is `path` a YouTube link or does `type` equal 'youtube'?
 */
function isYouTube(path, type) {
    return type === 'youtube' || /^(http|\/\/).*(youtube\.com|youtu\.be)\/.+/.test(path);
}

/**
 * @param {string} value - The variable to test.
 * @returns {string} The typeof object, 'array' or 'null'.
 */
function typeOf(value) {
    if (value === null) {
        return 'null';
    }
    var typeofString = typeof value === 'undefined' ? 'undefined' : _typeof(value);
    if (typeofString === 'object') {
        if (Array.isArray(value)) {
            return 'array';
        }
    }
    return typeofString;
}

/***/ }),
/* 16 */
/*!************************************!*\
  !*** ./src/js/api/api-settings.js ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    debug: false // __DEBUG__
};

/***/ }),
/* 17 */
/*!***************************!*\
  !*** ./src/js/version.js ***!
  \***************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var version = exports.version = '8.2.0+local.2018-03-28-18-07-37-631';

/***/ }),
/* 18 */
/*!*****************************!*\
  !*** ./src/js/api/timer.js ***!
  \*****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _clock = __webpack_require__(/*! utils/clock */ 58);

/**
 * QoE metrics returned by `jwplayer()._qoe.dump()`.
 * {@link Api#qoe jwplayer().qoe():PlayerQoE} returns these for the player and the current playlist item.
 * @typedef {object} TimerMetrics
 * @property {object} counts - Lists event counts by event name
 * @property {object} events - Lists last event timestamps (epoch ms) by event name
 * @property {object} sums - Lists total event/state duration by event/state name
 */

/**
 * The Timer used to measure player and playlist item QoE
 * @class Timer
 */
var Timer = function Timer() {
    var startTimes = {};
    var sum = {};
    var counts = {};

    var ticks = {};

    /** @lends Timer */
    return {
        // Profile methods
        /**
         * Start timing a method. Increment {@link TimerMetrics} count.
         * If the method was already started, but not finished, it's start will be reset.
         * @memberOf Timer
         * @instance
         * @param {string} methodName - The method or player state name.
         * @returns {void}
         */
        start: function start(methodName) {
            startTimes[methodName] = (0, _clock.dateTime)();
            counts[methodName] = counts[methodName] + 1 || 1;
        },
        /**
         * Finish timing a method. The time since `start` is added to {@link TimerMetrics#sums} sums.
         * @memberOf Timer
         * @instance
         * @param {string} methodName - The method or player state name.
         * @returns {void}
         */
        end: function end(methodName) {
            if (!startTimes[methodName]) {
                return;
            }
            var now = (0, _clock.dateTime)();
            var e = now - startTimes[methodName];
            delete startTimes[methodName];
            sum[methodName] = sum[methodName] + e || e;
        },
        /**
         * Output the timer metrics.
         * @memberOf Timer
         * @instance
         * @returns {TimerMetrics} The timing and count of all "tick" events tracked thus far.
         */
        dump: function dump() {
            // Add running sum of latest method
            // This lets `jwplayer().qoe().item.sums` return a tally of running playing/paused time
            var runningSums = _extends({}, sum);
            for (var methodName in startTimes) {
                if (Object.prototype.hasOwnProperty.call(startTimes, methodName)) {
                    var now = (0, _clock.dateTime)();
                    var e = now - startTimes[methodName];
                    runningSums[methodName] = runningSums[methodName] + e || e;
                }
            }
            return {
                counts: _extends({}, counts),
                sums: runningSums,
                events: _extends({}, ticks)
            };
        },

        // Profile events
        /**
         * Add or update an event timestamp. The timestamp "tick" is added to {@link TimerMetrics#events} events.
         * @memberOf Timer
         * @instance
         * @param {string} event - The event name.
         * @returns {void}
         */
        tick: function tick(event) {
            ticks[event] = (0, _clock.dateTime)();
        },

        /**
         * Remove an event timestamp. The timestamp "tick" is removed from {@link TimerMetrics#events} events.
         * @memberOf Timer
         * @instance
         * @param {string} event - The event name.
         * @returns {void}
         */
        clear: function clear(event) {
            delete ticks[event];
        },

        /**
         * Get the difference between two events.
         * @memberOf Timer
         * @instance
         * @param {string} left - The first event name.
         * @param {string} right - The second event name.
         * @returns {number|null} The time between events, or null if not found.
         */
        between: function between(left, right) {
            if (ticks[right] && ticks[left]) {
                return ticks[right] - ticks[left];
            }
            return null;
        }
    };
};

exports.default = Timer;

/***/ }),
/* 19 */
/*!*********************************!*\
  !*** ./src/js/playlist/item.js ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _source = __webpack_require__(/*! playlist/source */ 32);

var _source2 = _interopRequireDefault(_source);

var _track = __webpack_require__(/*! playlist/track */ 64);

var _track2 = _interopRequireDefault(_track);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isArray = Array.isArray;
/**
 * An item in the playlist
 * @typedef {object} PlaylistItem
 * @property {Array.<PlaylistItemSource>} sources - A list of alternative media sources for the player to choose from.
 * @property {Array.<PlaylistItemTrack>} tracks - A list of tracks associated with this item.
 * @property {string} file - The selected source URL to be played.
 * @property {string} [image] - The poster image.
 * @property {'none'|'metadata'|'auto'} preload - The selected preload setting.
 * @property {number} minDvrWindow - For live streams, the threshold at which the available media should be seekable,
 * and treated as a DVR stream.
 */

var Item = function Item(config) {
    config = config || {};
    if (!isArray(config.tracks)) {
        delete config.tracks;
    }

    var playlistItem = _extends({}, {
        sources: [],
        tracks: [],
        minDvrWindow: 120
    }, config);

    if (playlistItem.sources === Object(playlistItem.sources) && !isArray(playlistItem.sources)) {
        playlistItem.sources = [(0, _source2.default)(playlistItem.sources)];
    }

    if (!isArray(playlistItem.sources) || playlistItem.sources.length === 0) {
        if (config.levels) {
            playlistItem.sources = config.levels;
        } else {
            playlistItem.sources = [(0, _source2.default)(config)];
        }
    }

    /** Each source should be a named object **/
    for (var i = 0; i < playlistItem.sources.length; i++) {
        var s = playlistItem.sources[i];
        if (!s) {
            continue;
        }

        var def = s.default;
        if (def) {
            s.default = def.toString() === 'true';
        } else {
            s.default = false;
        }

        // If the source doesn't have a label, number it
        if (!playlistItem.sources[i].label) {
            playlistItem.sources[i].label = i.toString();
        }

        playlistItem.sources[i] = (0, _source2.default)(playlistItem.sources[i]);
    }

    playlistItem.sources = playlistItem.sources.filter(function (source) {
        return !!source;
    });

    if (!isArray(playlistItem.tracks)) {
        playlistItem.tracks = [];
    }

    if (isArray(playlistItem.captions)) {
        playlistItem.tracks = playlistItem.tracks.concat(playlistItem.captions);
        delete playlistItem.captions;
    }

    playlistItem.tracks = playlistItem.tracks.map(_track2.default).filter(function (track) {
        return !!track;
    });

    return playlistItem;
};

exports.default = Item;

/***/ }),
/* 20 */
/*!*************************************!*\
  !*** ./src/js/utils/playerutils.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadFrom = exports.versionCheck = exports.repo = exports.getScriptPath = undefined;

var _version = __webpack_require__(/*! version */ 17);

var getScriptPath = exports.getScriptPath = function getScriptPath(scriptName) {
    var scripts = document.getElementsByTagName('script');
    for (var i = 0; i < scripts.length; i++) {
        var src = scripts[i].src;
        if (src) {
            var index = src.lastIndexOf('/' + scriptName);
            if (index >= 0) {
                return src.substr(0, index + 1);
            }
        }
    }
    return '';
};

// Gets the repository location from which modules and plugins are loaded by default
var repo = exports.repo = function repo() {
    if (true) {
        return getScriptPath('jwplayer.js');
    }

    var playerRepo = '';
    var protocol = playerRepo && window.location.protocol === 'file:' ? 'https:' : '';
    return '' + protocol + playerRepo;
};

// Is the player at least a minimum required version?
var versionCheck = exports.versionCheck = function versionCheck(target) {
    var tParts = ('0' + target).split(/\W/);
    var jParts = _version.version.split(/\W/);
    var tMajor = parseFloat(tParts[0]);
    var jMajor = parseFloat(jParts[0]);
    if (tMajor > jMajor) {
        return false;
    } else if (tMajor === jMajor) {
        if (parseFloat('0' + tParts[1]) > parseFloat(jParts[1])) {
            return false;
        }
    }
    return true;
};

var loadFrom = exports.loadFrom = function loadFrom() {
    if (true) {
        return getScriptPath('jwplayer.js');
    }
    return repo();
};

/***/ }),
/* 21 */
/*!************************************************!*\
  !*** ./src/js/providers/providers-register.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = registerProvider;

var _providersLoaded = __webpack_require__(/*! providers/providers-loaded */ 29);

var _providersLoaded2 = _interopRequireDefault(_providersLoaded);

var _providersSupported = __webpack_require__(/*! providers/providers-supported */ 14);

var _providersSupported2 = _interopRequireDefault(_providersSupported);

var _default = __webpack_require__(/*! providers/default */ 45);

var _default2 = _interopRequireDefault(_default);

var _underscore = __webpack_require__(/*! utils/underscore */ 0);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function registerProvider(provider) {
    var name = provider.getName().name;

    // Only register the provider if it isn't registered already.  This is an issue on pages with multiple embeds.
    if (_providersLoaded2.default[name]) {
        return;
    }

    // If there isn't a "supports" val for this guy
    if (!_underscore2.default.find(_providersSupported2.default, _underscore2.default.matches({ name: name }))) {
        if (!_underscore2.default.isFunction(provider.supports)) {
            throw new Error('Tried to register a provider with an invalid object');
        }

        // The most recent provider will be in the front of the array, and chosen first
        _providersSupported2.default.unshift({
            name: name,
            supports: provider.supports
        });
    }

    // Fill in any missing properties with the defaults - looks at the prototype chain
    _underscore2.default.defaults(provider.prototype, _default2.default);

    // After registration, it is loaded
    _providersLoaded2.default[name] = provider;
}

/***/ }),
/* 22 */
/*!***********************************!*\
  !*** ./src/js/plugins/plugins.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.registerPlugin = undefined;
exports.default = loadPlugins;

var _loader = __webpack_require__(/*! plugins/loader */ 51);

var _loader2 = _interopRequireDefault(_loader);

var _model = __webpack_require__(/*! plugins/model */ 56);

var _model2 = _interopRequireDefault(_model);

var _helpers = __webpack_require__(/*! utils/helpers */ 6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pluginsModel = new _model2.default();
var pluginLoaders = {};

function getPluginLoader(id) {
    pluginLoaders[id] = new _loader2.default();
    return pluginLoaders[id];
}

var registerPlugin = exports.registerPlugin = function registerPlugin(name, minimumVersion, pluginClass) {
    var plugin = pluginsModel.addPlugin(name);
    if (!plugin.js) {
        plugin.registerPlugin(name, minimumVersion, pluginClass);
    }
};

function loadPlugins(model, api) {
    var playerId = model.get('id');
    var pluginsConfig = model.get('plugins');

    window.jwplayerPluginJsonp = registerPlugin;

    var pluginLoader = getPluginLoader(playerId);
    return pluginLoader.load(api, pluginsModel, pluginsConfig).then(function (events) {
        if (pluginLoader !== pluginLoaders[playerId]) {
            // Player and plugin loader was replaced
            return;
        }
        if (events) {
            events.forEach(function (object) {
                if (object instanceof Error) {
                    (0, _helpers.log)(object.message);
                }
            });
        }
        delete window.jwplayerPluginJsonp;
    });
}

/***/ }),
/* 23 */
/*!*****************************!*\
  !*** ./src/js/utils/dom.js ***!
  \*****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hasClass = hasClass;
exports.createElement = createElement;
exports.styleDimension = styleDimension;
exports.classList = classList;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.replaceClass = replaceClass;
exports.toggleClass = toggleClass;
exports.emptyElement = emptyElement;
exports.addStyleSheet = addStyleSheet;
exports.empty = empty;
exports.bounds = bounds;
exports.prependChild = prependChild;

var _strings = __webpack_require__(/*! utils/strings */ 1);

var _underscore = __webpack_require__(/*! utils/underscore */ 0);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hasClass(element, searchClass) {
    return element.classList.contains(searchClass);
}

// Given a string, convert to element and return
function createElement(html) {
    var newElement = document.createElement('div');
    newElement.innerHTML = html;
    return newElement.firstChild;
}

// Used for styling dimensions in CSS
// Return the string unchanged if it's a percentage width; add 'px' otherwise
function styleDimension(dimension) {
    return dimension + (dimension.toString().indexOf('%') > 0 ? '' : 'px');
}

function classNameArray(element) {
    return _underscore2.default.isString(element.className) ? element.className.split(' ') : [];
}

function setClassName(element, className) {
    className = (0, _strings.trim)(className);
    if (element.className !== className) {
        element.className = className;
    }
}

function classList(element) {
    if (element.classList) {
        return element.classList;
    }
    /* ie9 does not support classList http://caniuse.com/#search=classList */
    return classNameArray(element);
}

function addClass(element, classes) {
    // TODO:: use _.union on the two arrays

    var originalClasses = classNameArray(element);
    var addClasses = _underscore2.default.isArray(classes) ? classes : classes.split(' ');

    _underscore2.default.each(addClasses, function (c) {
        if (!_underscore2.default.contains(originalClasses, c)) {
            originalClasses.push(c);
        }
    });

    setClassName(element, originalClasses.join(' '));
}

function removeClass(element, c) {
    var originalClasses = classNameArray(element);
    var removeClasses = _underscore2.default.isArray(c) ? c : c.split(' ');

    setClassName(element, _underscore2.default.difference(originalClasses, removeClasses).join(' '));
}

function replaceClass(element, pattern, replaceWith) {
    var classes = element.className || '';
    if (pattern.test(classes)) {
        classes = classes.replace(pattern, replaceWith);
    } else if (replaceWith) {
        classes += ' ' + replaceWith;
    }
    setClassName(element, classes);
}

function toggleClass(element, c, toggleTo) {
    var hasIt = hasClass(element, c);
    toggleTo = _underscore2.default.isBoolean(toggleTo) ? toggleTo : !hasIt;

    // short circuit if nothing to do
    if (toggleTo === hasIt) {
        return;
    }

    if (toggleTo) {
        addClass(element, c);
    } else {
        removeClass(element, c);
    }
}

function emptyElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function addStyleSheet(url) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    document.getElementsByTagName('head')[0].appendChild(link);
}

function empty(element) {
    if (!element) {
        return;
    }
    emptyElement(element);
}

function bounds(element) {
    var boundsRect = {
        left: 0,
        right: 0,
        width: 0,
        height: 0,
        top: 0,
        bottom: 0
    };

    if (!element || !document.body.contains(element)) {
        return boundsRect;
    }

    var rect = element.getBoundingClientRect();
    var scrollOffsetY = window.pageYOffset;
    var scrollOffsetX = window.pageXOffset;

    if (!rect.width && !rect.height && !rect.left && !rect.top) {
        // element is not visible / no layout
        return boundsRect;
    }

    boundsRect.left = rect.left + scrollOffsetX;
    boundsRect.right = rect.right + scrollOffsetX;
    boundsRect.top = rect.top + scrollOffsetY;
    boundsRect.bottom = rect.bottom + scrollOffsetY;
    boundsRect.width = rect.right - rect.left;
    boundsRect.height = rect.bottom - rect.top;

    return boundsRect;
}

function prependChild(parentElement, childElement) {
    parentElement.insertBefore(childElement, parentElement.firstChild);
}

/***/ }),
/* 24 */
/*!*****************************!*\
  !*** ./src/js/utils/css.js ***!
  \*****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.clearCss = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.css = css;
exports.style = style;
exports.transform = transform;
exports.getRgba = getRgba;

var _strings = __webpack_require__(/*! utils/strings */ 1);

var _addStyles = __webpack_require__(/*! simple-style-loader/addStyles */ 33);

var _addStyles2 = _interopRequireDefault(_addStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clearCss = exports.clearCss = _addStyles2.default.clear;

function css(selector, styles, playerId, important) {
    playerId = playerId || 'all-players';
    var cssText = '';
    if ((typeof styles === 'undefined' ? 'undefined' : _typeof(styles)) === 'object') {
        var el = document.createElement('div');
        style(el, styles);
        var styleCSSText = el.style.cssText;
        if (important && styleCSSText) {
            styleCSSText = styleCSSText.replace(/;/g, ' !important;');
        }
        cssText = '{' + styleCSSText + '}';
    } else if (typeof styles === 'string') {
        cssText = styles;
    }

    if (cssText === '' || cssText === '{}') {
        _addStyles2.default.clear(playerId, selector);
        return;
    }

    _addStyles2.default.style([[selector, selector + cssText]], playerId);
}

function style(elements, styles) {
    if (elements === undefined || elements === null) {
        return;
    }
    if (elements.length === undefined) {
        elements = [elements];
    }

    var property;
    var cssRules = {};
    for (property in styles) {
        if (Object.prototype.hasOwnProperty.call(styles, property)) {
            cssRules[property] = _styleValue(property, styles[property]);
        }
    }

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var styleName;

        if (element !== undefined && element !== null) {
            for (property in cssRules) {
                if (Object.prototype.hasOwnProperty.call(cssRules, property)) {
                    styleName = _styleAttributeName(property);
                    if (element.style[styleName] !== cssRules[property]) {
                        element.style[styleName] = cssRules[property];
                    }
                }
            }
        }
    }
}

function _styleAttributeName(name) {
    name = name.split('-');
    for (var i = 1; i < name.length; i++) {
        name[i] = name[i].charAt(0).toUpperCase() + name[i].slice(1);
    }
    return name.join('');
}

function _styleValue(property, value) {
    if (value === '' || value === undefined || value === null) {
        return '';
    }
    // string
    if (typeof value === 'string' && isNaN(value)) {
        if (/png|gif|jpe?g/i.test(value) && value.indexOf('url') < 0) {
            return 'url(' + value + ')';
        }
        return value;
    }
    // number
    if (value === 0 || property === 'z-index' || property === 'opacity') {
        return '' + value;
    }
    if (/color/i.test(property)) {
        return '#' + (0, _strings.pad)(value.toString(16).replace(/^0x/i, ''), 6);
    }
    return Math.ceil(value) + 'px';
}

function transform(element, value) {
    style(element, {
        transform: value,
        webkitTransform: value,
        msTransform: value,
        mozTransform: value,
        oTransform: value
    });
}

var canvasColorContext = void 0;

function getRgba(color, opacity) {
    var colorFn = 'rgb';
    var hasAlpha = opacity !== undefined && opacity !== 100;
    if (hasAlpha) {
        colorFn += 'a';
    }
    if (!canvasColorContext) {
        var canvas = document.createElement('canvas');
        canvas.height = 1;
        canvas.width = 1;
        canvasColorContext = canvas.getContext('2d');
    }
    if (!color) {
        color = '#000000';
    } else if (!isNaN(parseInt(color, 16))) {
        color = '#' + color;
    }
    canvasColorContext.clearRect(0, 0, 1, 1);
    canvasColorContext.fillStyle = color;
    canvasColorContext.fillRect(0, 0, 1, 1);
    var data = canvasColorContext.getImageData(0, 0, 1, 1).data;
    colorFn += '(' + data[0] + ', ' + data[1] + ', ' + data[2];
    if (hasAlpha) {
        colorFn += ', ' + opacity / 100;
    }
    return colorFn + ')';
}

/***/ }),
/* 25 */
/*!******************************!*\
  !*** ./src/js/utils/date.js ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var now = exports.now = Date.now || function () {
    return new Date().getTime();
};

/***/ }),
/* 26 */
/*!*******************************!*\
  !*** ./src/js/api/players.js ***!
  \*******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var instances = [];

exports.default = instances;

/***/ }),
/* 27 */
/*!***************************************!*\
  !*** ./src/js/providers/providers.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Loaders = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _providersSupported = __webpack_require__(/*! providers/providers-supported */ 14);

var _providersSupported2 = _interopRequireDefault(_providersSupported);

var _providersRegister = __webpack_require__(/*! providers/providers-register */ 21);

var _providersRegister2 = _interopRequireDefault(_providersRegister);

var _providersLoaded = __webpack_require__(/*! providers/providers-loaded */ 29);

var _providersLoaded2 = _interopRequireDefault(_providersLoaded);

var _coreLoader = __webpack_require__(/*! ../api/core-loader */ 12);

var _promise = __webpack_require__(/*! polyfills/promise */ 4);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Providers(config) {
    this.config = config || {};
}

var Loaders = exports.Loaders = {
    html5: function html5() {
        return __webpack_require__.e/* require.ensure */(6/*! provider.html5 */).then((function (require) {
            var provider = __webpack_require__(/*! providers/html5 */ 8).default;
            (0, _providersRegister2.default)(provider);
            return provider;
        }).bind(null, __webpack_require__)).catch(_coreLoader.chunkLoadErrorHandler);
    }
};

_extends(Providers.prototype, {

    load: function load(providerName) {
        var providerLoaderMethod = Loaders[providerName];
        var rejectLoad = function rejectLoad() {
            return _promise2.default.reject(new Error('Failed to load media'));
        };

        if (!providerLoaderMethod) {
            return rejectLoad();
        }
        return providerLoaderMethod().then(function () {
            var providerConstructor = _providersLoaded2.default[providerName];
            if (!providerConstructor) {
                return rejectLoad();
            }
            return providerConstructor;
        });
    },

    // This method is overridden by commercial in order to add an edition check
    providerSupports: function providerSupports(provider, source) {
        return provider.supports(source);
    },

    // Find the name of the first provider which can support the media source-type
    choose: function choose(source) {
        if (source === Object(source)) {
            var count = _providersSupported2.default.length;
            for (var i = 0; i < count; i++) {
                var provider = _providersSupported2.default[i];
                if (this.providerSupports(provider, source)) {
                    // prefer earlier providers
                    var priority = count - i - 1;

                    return {
                        priority: priority,
                        name: provider.name,
                        type: source.type,
                        providerToCheck: provider,
                        // If provider isn't loaded, this will be undefined
                        provider: _providersLoaded2.default[provider.name]
                    };
                }
            }
        }
        return {};
    }
});

exports.default = Providers;

/***/ }),
/* 28 */
/*!*********************************!*\
  !*** ./src/js/utils/browser.js ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isFlashSupported = isFlashSupported;
exports.isEdge = isEdge;
exports.isMSIE = isMSIE;
exports.isChrome = isChrome;
exports.isIE = isIE;
exports.isSafari = isSafari;
exports.isIOS = isIOS;
exports.isAndroidNative = isAndroidNative;
exports.isAndroid = isAndroid;
exports.isMobile = isMobile;
exports.isIframe = isIframe;
exports.flashVersion = flashVersion;
var userAgent = navigator.userAgent;

function userAgentMatch(regex) {
    return userAgent.match(regex) !== null;
}

function lazyUserAgentMatch(regex) {
    return function () {
        return userAgentMatch(regex);
    };
}

function isFlashSupported() {
    var version = flashVersion();
    return !!(version && version >= 18);
}

var isFF = exports.isFF = lazyUserAgentMatch(/gecko\//i);
var isIETrident = exports.isIETrident = lazyUserAgentMatch(/trident\/.+rv:\s*11/i);
var isIPod = exports.isIPod = lazyUserAgentMatch(/iP(hone|od)/i);
var isIPad = exports.isIPad = lazyUserAgentMatch(/iPad/i);
var isOSX = exports.isOSX = lazyUserAgentMatch(/Macintosh/i);
// Check for Facebook App Version to see if it's Facebook
var isFacebook = exports.isFacebook = lazyUserAgentMatch(/FBAV/i);

function isEdge() {
    return userAgentMatch(/\sEdge\/\d+/i);
}

function isMSIE() {
    return userAgentMatch(/msie/i);
}

function isChrome() {
    return userAgentMatch(/\s(?:Chrome|CriOS)\//i) && !isEdge() && !userAgentMatch(/UCBrowser/i);
}

function isIE() {
    return isEdge() || isIETrident() || isMSIE();
}

function isSafari() {
    return userAgentMatch(/safari/i) && !userAgentMatch(/(?:Chrome|CriOS|chromium|android|phantom)/i);
}

function isIOS() {
    return userAgentMatch(/iP(hone|ad|od)/i);
}

function isAndroidNative() {
    // Android Browser appears to include a user-agent string for Chrome/18
    if (userAgentMatch(/chrome\/[123456789]/i) && !userAgentMatch(/chrome\/18/i) && !isFF()) {
        return false;
    }
    return isAndroid();
}

function isAndroid() {
    return userAgentMatch(/Android/i) && !userAgentMatch(/Windows Phone/i);
}

function isMobile() {
    return isIOS() || isAndroid() || userAgentMatch(/Windows Phone/i);
}

function isIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

function flashVersion() {
    if (isAndroid()) {
        return 0;
    }

    var plugins = navigator.plugins;
    var flash;

    if (plugins) {
        flash = plugins['Shockwave Flash'];
        if (flash && flash.description) {
            return parseFloat(flash.description.replace(/\D+(\d+\.?\d*).*/, '$1'));
        }
    }

    if (typeof window.ActiveXObject !== 'undefined') {
        try {
            flash = new window.ActiveXObject('ShockwaveFlash.ShockwaveFlash');
            if (flash) {
                return parseFloat(flash.GetVariable('$version').split(' ')[1].replace(/\s*,\s*/, '.'));
            }
        } catch (e) {
            return 0;
        }

        return flash;
    }
    return 0;
}

/***/ }),
/* 29 */
/*!**********************************************!*\
  !*** ./src/js/providers/providers-loaded.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ProvidersLoaded = {};
exports.default = ProvidersLoaded;

/***/ }),
/* 30 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 31 */
/*!**************************************!*\
  !*** ./src/js/utils/scriptloader.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SCRIPT_LOAD_STATUS_COMPLETE = exports.SCRIPT_LOAD_STATUS_ERROR = exports.SCRIPT_LOAD_STATUS_LOADING = exports.SCRIPT_LOAD_STATUS_NEW = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _backbone = __webpack_require__(/*! utils/backbone.events */ 7);

var _backbone2 = _interopRequireDefault(_backbone);

var _events = __webpack_require__(/*! events/events */ 5);

var _promise = __webpack_require__(/*! polyfills/promise */ 4);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScriptPromises = {};

var SCRIPT_LOAD_TIMEOUT = 15000;

var SCRIPT_LOAD_STATUS_NEW = exports.SCRIPT_LOAD_STATUS_NEW = 0;
var SCRIPT_LOAD_STATUS_LOADING = exports.SCRIPT_LOAD_STATUS_LOADING = 1;
var SCRIPT_LOAD_STATUS_ERROR = exports.SCRIPT_LOAD_STATUS_ERROR = 2;
var SCRIPT_LOAD_STATUS_COMPLETE = exports.SCRIPT_LOAD_STATUS_COMPLETE = 3;

function makeStyleLink(styleUrl) {
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = styleUrl;
    return link;
}

function makeScriptTag(scriptUrl) {
    var scriptTag = document.createElement('script');
    scriptTag.type = 'text/javascript';
    scriptTag.charset = 'utf-8';
    scriptTag.async = true;
    scriptTag.timeout = SCRIPT_LOAD_TIMEOUT;
    scriptTag.src = scriptUrl;
    return scriptTag;
}

var ScriptLoader = function ScriptLoader(url, isStyle) {
    var _this = this;
    var status = SCRIPT_LOAD_STATUS_NEW;

    function onError(evt) {
        status = SCRIPT_LOAD_STATUS_ERROR;
        _this.trigger(_events.ERROR, evt).off();
    }

    function onComplete(evt) {
        status = SCRIPT_LOAD_STATUS_COMPLETE;
        _this.trigger(_events.STATE_COMPLETE, evt).off();
    }

    this.getStatus = function () {
        return status;
    };

    this.load = function () {
        var promise = ScriptPromises[url];

        // Only execute on the first run
        if (status !== SCRIPT_LOAD_STATUS_NEW) {
            return promise;
        }

        // If we already have a scriptloader loading the same script, don't create a new one;
        if (promise) {
            promise.then(onComplete).catch(onError);
        }

        status = SCRIPT_LOAD_STATUS_LOADING;

        promise = new _promise2.default(function (resolve, reject) {
            var makeTag = isStyle ? makeStyleLink : makeScriptTag;
            var scriptTag = makeTag(url);
            var doneLoading = function doneLoading() {
                // Handle memory leak in IE
                scriptTag.onerror = scriptTag.onload = null;
                clearTimeout(timeout);
            };
            var onScriptLoadingError = function onScriptLoadingError(error) {
                doneLoading();
                onError(error);
                reject(error);
            };
            var timeout = setTimeout(function () {
                onScriptLoadingError(new Error('Network timeout ' + url));
            }, SCRIPT_LOAD_TIMEOUT);

            scriptTag.onerror = function () {
                onScriptLoadingError(new Error('Failed to load ' + url));
            };

            scriptTag.onload = function (evt) {
                doneLoading();
                onComplete(evt);
                resolve(evt);
            };

            var head = document.getElementsByTagName('head')[0] || document.documentElement;
            head.insertBefore(scriptTag, head.firstChild);
        });

        ScriptPromises[url] = promise;

        return promise;
    };
};

_extends(ScriptLoader.prototype, _backbone2.default);

exports.default = ScriptLoader;

/***/ }),
/* 32 */
/*!***********************************!*\
  !*** ./src/js/playlist/source.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _validator = __webpack_require__(/*! utils/validator */ 15);

var _strings = __webpack_require__(/*! utils/strings */ 1);

/**
 * A media source variant present in a playlist item
 * @typedef {object} PlaylistItemSource
 * @property {string} file - The media URL.
 * @property {string} type - The type (common file extension) of media.
 * @property {boolean} default - Default sources are prioritized over others.
 * @property {string} label - The quality label to be used with multiple mp4/webm sources.
 */

var Source = function Source(config) {
    // file is the only hard requirement
    if (!config || !config.file) {
        return;
    }

    var source = _extends({}, {
        'default': false
    }, config);

    // normalize for odd strings
    source.file = (0, _strings.trim)('' + source.file);

    // regex to check if mimetype is given
    var mimetypeRegEx = /^[^/]+\/(?:x-)?([^/]+)$/;

    if (mimetypeRegEx.test(source.type)) {
        // if type is given as a mimetype
        source.mimeType = source.type;
        source.type = source.type.replace(mimetypeRegEx, '$1');
    }

    // check if the source is youtube or rtmp
    if ((0, _validator.isYouTube)(source.file)) {
        source.type = 'youtube';
    } else if ((0, _validator.isRtmp)(source.file)) {
        source.type = 'rtmp';
    } else if (!source.type) {
        source.type = (0, _strings.extension)(source.file);
    }

    if (!source.type) {
        return;
    }

    // normalize types
    switch (source.type) {
        case 'm3u8':
        case 'vnd.apple.mpegurl':
            source.type = 'hls';
            break;
        case 'dash+xml':
            source.type = 'dash';
            break;
        // Although m4a is a container format, it is most often used for aac files
        // http://en.wikipedia.org/w/index.php?title=MPEG-4_Part_14
        case 'm4a':
            source.type = 'aac';
            break;
        case 'smil':
            source.type = 'rtmp';
            break;
        default:
            break;
    }

    // remove empty strings
    Object.keys(source).forEach(function (key) {
        if (source[key] === '') {
            delete source[key];
        }
    });

    return source;
};

exports.default = Source;

/***/ }),
/* 33 */
/*!*******************************************************!*\
  !*** ./node_modules/simple-style-loader/addStyles.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {/*
 MIT License http://www.opensource.org/licenses/mit-license.php
 Author Tobias Koppers @sokra
 */

	var stylesInDom = {},
		playerStyleElements = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		});

	module.exports = {
		style: style,
		clear: clear
	};

	function style (list, playerId) {
		addStylesToDom(playerId, listToStyles(list));
	}

	function clear (playerId, selector) {
		var playerStyles = stylesInDom[playerId];
		if (!playerStyles) {
			return;
		}
		if (selector) {
			// delete all rules for a specific selector
			var ruleObj = playerStyles[selector];
			if (ruleObj) {
				for (var h = 0; h < ruleObj.parts.length; h += 1) {
					ruleObj.parts[h]();
				}
			}
			return;
		}
		var styleKeys = Object.keys(playerStyles);
		for (var i = 0; i < styleKeys.length; i += 1) {
			var styleObj = playerStyles[styleKeys[i]];
			for (var j = 0; j < styleObj.parts.length; j += 1) {
				styleObj.parts[j]();
			}
		}
		delete stylesInDom[playerId];
	}

	function addStylesToDom(playerId, styles) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = (stylesInDom[playerId] || {})[item.id];
			if(domStyle) {
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(playerId, item.parts[j]));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(playerId, item.parts[j]));
				}
				stylesInDom[playerId] = stylesInDom[playerId] || {};
				stylesInDom[playerId][item.id] = {id: item.id, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			// The id isn't a css selector - it's just used internally
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var part = {css: css, media: media};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(styleElement) {
		getHeadElement().appendChild(styleElement);
	}

	function createStyleElement(playerId) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		styleElement.setAttribute('data-jwplayer-id', playerId);
		insertStyleElement(styleElement);
		return styleElement;
	}

	function addStyle(playerId, obj) {
		var styleElement, update, remove;
		var singleton = playerStyleElements[playerId];

		if (!singleton) {
			singleton = playerStyleElements[playerId] = {
				element: createStyleElement(playerId),
				counter: 0
			};
		}

		var styleIndex = singleton.counter++;
		styleElement = singleton.element;
		update = function(css) {
			applyToSingletonTag(styleElement, styleIndex, css);
        };
		remove = function() {
			applyToSingletonTag(styleElement, styleIndex, '');
        };

		update(obj.css);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media)
					return;
                obj = newObj;
				update(obj.css);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, css) {
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			var child = childNodes[index];
			if (child) {
				styleElement.replaceChild(cssNode, child);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 34 */
/*!*********************************!*\
  !*** ./src/js/api/api-queue.js ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ApiQueueDecorator;
function ApiQueueDecorator(instance, queuedCommands, predicate) {
    var commandQueue = [];
    var undecoratedMethods = {};

    queuedCommands.forEach(function (command) {
        var method = instance[command];
        undecoratedMethods[command] = method;

        instance[command] = function () {
            var args = Array.prototype.slice.call(arguments, 0);

            if (predicate()) {
                commandQueue.push({ command: command, args: args });
            } else {
                executeQueuedCommands();
                if (method) {
                    method.apply(this, args);
                }
            }
        };
    });

    function executeQueuedCommands() {
        while (commandQueue.length > 0) {
            var _commandQueue$shift = commandQueue.shift(),
                command = _commandQueue$shift.command,
                args = _commandQueue$shift.args;

            (undecoratedMethods[command] || instance[command]).apply(instance, args);
        }
    }

    Object.defineProperty(this, 'queue', {
        enumerable: true,
        get: function get() {
            return commandQueue;
        }
    });

    this.flush = executeQueuedCommands;

    this.empty = function () {
        commandQueue.length = 0;
    };

    this.off = function () {
        queuedCommands.forEach(function (command) {
            var method = undecoratedMethods[command];
            if (method) {
                instance[command] = method;
                delete undecoratedMethods[command];
            }
        });
    };

    this.destroy = function () {
        this.off();
        this.empty();
    };
}

/***/ }),
/* 35 */
/*!****************************************!*\
  !*** ./src/js/view/error-container.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ErrorContainer;

var _error = __webpack_require__(/*! templates/error */ 65);

var _error2 = _interopRequireDefault(_error);

var _dom = __webpack_require__(/*! utils/dom */ 23);

var _css = __webpack_require__(/*! utils/css */ 24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ErrorContainer(model, message) {
    var index = message.indexOf(':') + 1;
    var title = index > 0 ? message.substr(0, index) : 'Error loading player:';
    var description = message.substr(index);
    var html = (0, _error2.default)(model.get('id'), title, description);
    var width = model.get('width');
    var height = model.get('height');
    var element = (0, _dom.createElement)(html);

    (0, _css.style)(element, {
        width: width.toString().indexOf('%') > 0 ? width : width + 'px',
        height: height.toString().indexOf('%') > 0 ? height : height + 'px'
    });

    return element;
}

/***/ }),
/* 36 */
/*!*********************************************!*\
  !*** ./src/js/program/program-constants.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// The number of tags allocated in the media pool
var MEDIA_POOL_SIZE = exports.MEDIA_POOL_SIZE = 4;
// The number of seconds before a BGL trigger at which we should start background loading. This ensures that we have
// kicked off background loading before being able to transition to that item
var BACKGROUND_LOAD_OFFSET = exports.BACKGROUND_LOAD_OFFSET = 2;
// The minimum time from the start of a video in which we can background load
var BACKGROUND_LOAD_MIN_OFFSET = exports.BACKGROUND_LOAD_MIN_OFFSET = 1;

/***/ }),
/* 37 */
/*!*************************************!*\
  !*** ./src/js/model/simplemodel.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _backbone = __webpack_require__(/*! utils/backbone.events */ 7);

var _backbone2 = _interopRequireDefault(_backbone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SimpleModel = {
    on: _backbone2.default.on,
    once: _backbone2.default.once,
    off: _backbone2.default.off,
    trigger: _backbone2.default.trigger,
    get: function get(attr) {
        this.attributes = this.attributes || {};
        return this.attributes[attr];
    },
    set: function set(attr, val) {
        this.attributes = this.attributes || {};

        if (this.attributes[attr] === val) {
            return;
        }
        var oldVal = this.attributes[attr];
        this.attributes[attr] = val;
        this.trigger('change:' + attr, this, val, oldVal);
    },
    clone: function clone() {
        var cloned = {};
        var attributes = this.attributes;
        if (attributes) {
            /* eslint guard-for-in: 0 */
            for (var prop in attributes) {
                cloned[prop] = attributes[prop];
            }
        }
        return cloned;
    },
    change: function change(name, callback, context) {
        // Register a change handler and immediately invoke the callback with the current value
        this.on('change:' + name, callback, context);
        var currentVal = this.get(name);
        callback.call(context, this, currentVal, currentVal);
        return this;
    }
};

exports.default = SimpleModel;

/***/ }),
/* 38 */
/*!**************************************!*\
  !*** ./src/js/model/player-model.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.INITIAL_MEDIA_STATE = exports.INITIAL_PLAYER_STATE = undefined;

var _events = __webpack_require__(/*! events/events */ 5);

var INITIAL_PLAYER_STATE = exports.INITIAL_PLAYER_STATE = {
    audioMode: false,
    flashBlocked: false,
    item: 0,
    itemMeta: {},
    playbackRate: 1,
    playRejected: false,
    state: _events.STATE_IDLE,
    itemReady: false
};

var INITIAL_MEDIA_STATE = exports.INITIAL_MEDIA_STATE = {
    position: 0,
    duration: 0,
    buffer: 0,
    currentTime: 0
};

/***/ }),
/* 39 */
/*!*********************************!*\
  !*** ./src/js/api/core-shim.js ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.showView = showView;

var _apiQueue = __webpack_require__(/*! api/api-queue */ 34);

var _apiQueue2 = _interopRequireDefault(_apiQueue);

var _config = __webpack_require__(/*! api/config */ 62);

var _config2 = _interopRequireDefault(_config);

var _Setup = __webpack_require__(/*! api/Setup */ 63);

var _Setup2 = _interopRequireDefault(_Setup);

var _providers = __webpack_require__(/*! providers/providers */ 27);

var _providers2 = _interopRequireDefault(_providers);

var _timer = __webpack_require__(/*! api/timer */ 18);

var _timer2 = _interopRequireDefault(_timer);

var _storage = __webpack_require__(/*! model/storage */ 71);

var _storage2 = _interopRequireDefault(_storage);

var _simplemodel = __webpack_require__(/*! model/simplemodel */ 37);

var _simplemodel2 = _interopRequireDefault(_simplemodel);

var _playerModel = __webpack_require__(/*! model/player-model */ 38);

var _events = __webpack_require__(/*! events/events */ 5);

var _backbone = __webpack_require__(/*! utils/backbone.events */ 7);

var _backbone2 = _interopRequireDefault(_backbone);

var _promise = __webpack_require__(/*! polyfills/promise */ 4);

var _errorContainer = __webpack_require__(/*! view/error-container */ 35);

var _errorContainer2 = _interopRequireDefault(_errorContainer);

var _mediaElementPool = __webpack_require__(/*! program/media-element-pool */ 72);

var _mediaElementPool2 = _interopRequireDefault(_mediaElementPool);

var _sharedMediaPool = __webpack_require__(/*! program/shared-media-pool */ 43);

var _sharedMediaPool2 = _interopRequireDefault(_sharedMediaPool);

var _environment = __webpack_require__(/*! environment/environment */ 11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModelShim = function ModelShim() {};
_extends(ModelShim.prototype, _simplemodel2.default);

var CoreShim = function CoreShim(originalContainer) {
    this._events = {};
    this.modelShim = new ModelShim();
    this.modelShim._qoeItem = new _timer2.default();
    this.mediaShim = {};
    this.setup = new _Setup2.default(this.modelShim);
    this.currentContainer = this.originalContainer = originalContainer;
    this.apiQueue = new _apiQueue2.default(this, [
    // These commands require a provider instance to be available
    'load', 'play', 'pause', 'seek', 'stop', 'playlistItem', 'playlistNext', 'playlistPrev', 'next',

    // These should just update state that could be acted on later, but need to be queued given v7 model
    'setConfig', 'setCurrentAudioTrack', 'setCurrentCaptions', 'setCurrentQuality', 'setFullscreen', 'addButton', 'removeButton', 'castToggle', 'setMute', 'setVolume', 'setPlaybackRate', 'setCues',

    // These commands require the view instance to be available
    'resize', 'setCaptions', 'setControls'], function () {
        return true;
    });
};

_extends(CoreShim.prototype, {
    on: _backbone2.default.on,
    once: _backbone2.default.once,
    off: _backbone2.default.off,
    trigger: _backbone2.default.trigger,
    init: function init(options, api) {
        var _this = this;

        var model = this.modelShim;
        var storage = new _storage2.default('jwplayer', ['volume', 'mute', 'captionLabel', 'qualityLabel']);
        var persisted = storage && storage.getAllItems();
        model.attributes = model.attributes || {};

        _extends(this.mediaShim, _playerModel.INITIAL_MEDIA_STATE);

        // Assigning config properties to the model needs to be synchronous for chained get API methods
        var setupConfig = options;
        var configuration = (0, _config2.default)(_extends({}, options), persisted);
        configuration.id = api.id;
        configuration.setupConfig = setupConfig;
        _extends(model.attributes, configuration, _playerModel.INITIAL_PLAYER_STATE);
        model.getProviders = function () {
            return new _providers2.default(configuration);
        };
        model.setProvider = function () {};

        // Create/get click-to-play media element, and call .load() to unblock user-gesture to play requirement
        var mediaPool = (0, _mediaElementPool2.default)();
        if (!_environment.Features.backgroundLoading) {
            mediaPool = (0, _sharedMediaPool2.default)(mediaPool.getPrimedElement(), mediaPool);
        }
        mediaPool.prime();

        return this.setup.start(api).then(function (allPromises) {
            var CoreMixin = allPromises[0];
            if (!_this.setup) {
                // Exit if `playerDestroy` was called on CoreLoader clearing the config
                return;
            }
            var config = _this.modelShim.clone();
            // Exit if embed config encountered an error
            if (config.error instanceof Error) {
                throw config.error;
            }
            // copy queued commands
            var commandQueue = _this.apiQueue.queue.slice(0);
            _this.apiQueue.destroy();

            // Assign CoreMixin.prototype (formerly controller) properties to this instance making api.core the controller
            _extends(_this, CoreMixin.prototype);
            _this.setup(config, api, _this.originalContainer, _this._events, commandQueue, mediaPool);

            var coreModel = _this._model;
            storage.track(coreModel);

            // Set the active playlist item after plugins are loaded and the view is setup
            return _this.updatePlaylist(coreModel.get('playlist'), coreModel.get('feedData'));
        }).then(function () {
            if (!_this.setup) {
                return;
            }
            _this.playerReady();
        }).catch(function (error) {
            if (!_this.setup) {
                return;
            }
            setupError(_this, error);
        });
    },
    playerDestroy: function playerDestroy() {
        if (this.apiQueue) {
            this.apiQueue.destroy();
        }

        if (this.setup) {
            this.setup.destroy();
        }
        this.off();
        this._events = this._model = this.originalContainer = this.apiQueue = this.setup = null;
    },
    getContainer: function getContainer() {
        return this.currentContainer;
    },


    // These methods read from the model
    get: function get(property) {
        if (property in this.mediaShim) {
            return this.mediaShim[property];
        }
        return this.modelShim.get(property);
    },
    getItemQoe: function getItemQoe() {
        return this.modelShim._qoeItem;
    },
    getConfig: function getConfig() {
        return _extends({}, this.modelShim.attributes, this.mediaShim);
    },
    getCurrentCaptions: function getCurrentCaptions() {
        return this.get('captionsIndex');
    },
    getWidth: function getWidth() {
        return this.get('containerWidth');
    },
    getHeight: function getHeight() {
        return this.get('containerHeight');
    },
    getMute: function getMute() {
        return this.get('mute');
    },
    getProvider: function getProvider() {
        return this.get('provider');
    },
    getState: function getState() {
        return this.get('state');
    },


    // These methods require a provider
    getAudioTracks: function getAudioTracks() {
        return null;
    },
    getCaptionsList: function getCaptionsList() {
        return null;
    },
    getQualityLevels: function getQualityLevels() {
        return null;
    },
    getVisualQuality: function getVisualQuality() {
        return null;
    },
    getCurrentQuality: function getCurrentQuality() {
        return -1;
    },
    getCurrentAudioTrack: function getCurrentAudioTrack() {
        return -1;
    },


    // These methods require the view
    getSafeRegion: function getSafeRegion() /* excludeControlbar */{
        return {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        };
    },


    // Ads specific
    isBeforeComplete: function isBeforeComplete() {
        return false;
    },
    isBeforePlay: function isBeforePlay() {
        return false;
    },
    createInstream: function createInstream() {
        return null;
    },
    skipAd: function skipAd() {},
    attachMedia: function attachMedia() {},
    detachMedia: function detachMedia() {
        return null; // video tag;
    }
});

function setupError(core, error) {
    _promise.resolved.then(function () {
        var message = error.message,
            code = error.code;

        var errorContainer = (0, _errorContainer2.default)(core, message);
        if (_errorContainer2.default.cloneIcon) {
            errorContainer.querySelector('.jw-icon').appendChild(_errorContainer2.default.cloneIcon('error'));
        }
        showView(core, errorContainer);

        var errorEvent = { message: message, code: code, error: error };
        var model = core._model || core.modelShim;
        model.set('errorEvent', errorEvent);
        model.set('state', _events.STATE_ERROR);

        core.trigger(_events.SETUP_ERROR, errorEvent);
    });
}

function showView(core, viewElement) {
    if (!document.body.contains(core.currentContainer)) {
        // This implies the player was removed from the DOM before setup completed
        //   or a player has been "re" setup after being removed from the DOM
        var newContainer = document.getElementById(core.get('id'));
        if (newContainer) {
            core.currentContainer = newContainer;
        }
    }

    if (core.currentContainer.parentElement) {
        core.currentContainer.parentElement.replaceChild(viewElement, core.currentContainer);
    }
    core.currentContainer = viewElement;
}

exports.default = CoreShim;

/***/ }),
/* 40 */
/*!**********************************************!*\
  !*** ./src/js/controller/controls-loader.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.module = undefined;
exports.load = load;

var _coreLoader = __webpack_require__(/*! ../api/core-loader */ 12);

var controlsPromise = null;

var _module = {};

exports.module = _module;
function load() {
    if (!controlsPromise) {
        controlsPromise = __webpack_require__.e/* require.ensure */(4/*! jwplayer.controls */).then((function (require) {
            var ControlsModule = __webpack_require__(/*! view/controls/controls */ 2).default;
            _module.controls = ControlsModule;
            return ControlsModule;
        }).bind(null, __webpack_require__)).catch(function () {
            controlsPromise = null;
            (0, _coreLoader.chunkLoadErrorHandler)();
        });
    }
    return controlsPromise;
}

/***/ }),
/* 41 */
/*!***********************************!*\
  !*** ./src/js/playlist/loader.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _events = __webpack_require__(/*! events/events */ 5);

var _parsers = __webpack_require__(/*! parsers/parsers */ 13);

var _rssparser = __webpack_require__(/*! parsers/rssparser */ 66);

var _rssparser2 = _interopRequireDefault(_rssparser);

var _helpers = __webpack_require__(/*! utils/helpers */ 6);

var _helpers2 = _interopRequireDefault(_helpers);

var _backbone = __webpack_require__(/*! utils/backbone.events */ 7);

var _backbone2 = _interopRequireDefault(_backbone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlaylistLoader = function PlaylistLoader() {
    var _this = _extends(this, _backbone2.default);

    this.load = function (playlistfile) {
        _helpers2.default.ajax(playlistfile, playlistLoaded, playlistError);
    };

    this.destroy = function () {
        this.off();
    };

    function playlistLoaded(loadedEvent) {
        try {
            var childNodes = loadedEvent.responseXML ? loadedEvent.responseXML.childNodes : null;
            var rss = '';
            var jsonObj;
            if (childNodes) {
                for (var i = 0; i < childNodes.length; i++) {
                    rss = childNodes[i];
                    // 8: Node.COMMENT_NODE (IE8 doesn't have the Node.COMMENT_NODE constant)
                    if (rss.nodeType !== 8) {
                        break;
                    }
                }
                if ((0, _parsers.localName)(rss) === 'xml') {
                    rss = rss.nextSibling;
                }
                if ((0, _parsers.localName)(rss) === 'rss') {
                    var rssPlaylist = (0, _rssparser2.default)(rss);
                    jsonObj = _extends({ playlist: rssPlaylist }, rssPlaylist.feedData);
                }
            }

            // If the response is not valid RSS, check if it is JSON
            if (!jsonObj) {
                try {
                    var pl = JSON.parse(loadedEvent.responseText);
                    // If the response is not a JSON array, try to read playlist of the response
                    if (Array.isArray(pl)) {
                        jsonObj = { playlist: pl };
                    } else if (Array.isArray(pl.playlist)) {
                        jsonObj = pl;
                    } else {
                        throw Error;
                    }
                } catch (e) {
                    throw new Error('Not a valid RSS/JSON feed');
                }
            }

            _this.trigger(_events.PLAYLIST_LOADED, jsonObj);
        } catch (error) {
            playlistError(error.message);
        }
    }

    function playlistError(msg) {
        _this.trigger(_events.ERROR, {
            message: msg ? msg : 'Error loading file'
        });
    }
};

exports.default = PlaylistLoader;

/***/ }),
/* 42 */
/*!*************************************!*\
  !*** ./src/js/playlist/playlist.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fixSources = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.filterPlaylist = filterPlaylist;
exports.validatePlaylist = validatePlaylist;

var _preload = __webpack_require__(/*! ./preload */ 69);

var _item = __webpack_require__(/*! playlist/item */ 19);

var _item2 = _interopRequireDefault(_item);

var _source = __webpack_require__(/*! playlist/source */ 32);

var _source2 = _interopRequireDefault(_source);

var _providers = __webpack_require__(/*! providers/providers */ 27);

var _providers2 = _interopRequireDefault(_providers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Playlist = function Playlist(playlist) {
    // Can be either an array of items or a single item.
    return (Array.isArray(playlist) ? playlist : [playlist]).map(_item2.default);
};

// Go through the playlist and choose a single playable type to play; remove sources of a different type
function filterPlaylist(playlist, model, feedData) {
    var list = [];
    var providers = model.getProviders();
    var preload = model.get('preload');
    var itemFeedData = _extends({}, feedData);
    delete itemFeedData.playlist;

    playlist.forEach(function (item) {
        item = _extends({}, item);

        item.preload = (0, _preload.getPreload)(item.preload, preload);

        item.allSources = formatSources(item, model);

        item.sources = filterSources(item.allSources, providers);

        if (!item.sources.length) {
            return;
        }

        // include selected file in item for backwards compatibility
        item.file = item.sources[0].file;

        if (feedData) {
            item.feedData = itemFeedData;
        }

        list.push(item);
    });

    return list;
}

function validatePlaylist(playlist) {
    if (!Array.isArray(playlist) || playlist.length === 0) {
        throw new Error('No playable sources found');
    }
}
var fixSources = exports.fixSources = function fixSources(item, model) {
    return filterSources(formatSources(item, model), model.getProviders());
};

function formatSources(item, model) {
    var sources = item.sources;
    var androidhls = model.get('androidhls');
    var safariHlsjs = model.get('safarihlsjs');
    var itemDrm = item.drm || model.get('drm');
    var withCredentials = fallbackIfUndefined(item.withCredentials, model.get('withCredentials'));
    var hlsjsdefault = model.get('hlsjsdefault') !== false;

    return sources.map(function (originalSource) {
        if (originalSource !== Object(originalSource)) {
            return null;
        }
        if (androidhls !== undefined && androidhls !== null) {
            originalSource.androidhls = androidhls;
        }
        if (safariHlsjs !== undefined && safariHlsjs !== null) {
            originalSource.safarihlsjs = safariHlsjs;
        }

        if (safariHlsjs !== undefined && safariHlsjs !== null) {
            originalSource.safarihlsjs = safariHlsjs;
        }

        if (originalSource.drm || itemDrm) {
            originalSource.drm = originalSource.drm || itemDrm;
        }

        originalSource.preload = (0, _preload.getPreload)(originalSource.preload, item.preload);

        // withCredentials is assigned in ascending priority order, source > playlist > model
        // a false value that is a higher priority than true must result in a false withCredentials value
        // we don't want undefined if all levels have withCredentials as undefined
        var cascadedWithCredentials = fallbackIfUndefined(originalSource.withCredentials, withCredentials);
        if (cascadedWithCredentials !== undefined) {
            originalSource.withCredentials = cascadedWithCredentials;
        }

        if (hlsjsdefault) {
            originalSource.hlsjsdefault = hlsjsdefault;
        }

        return (0, _source2.default)(originalSource);
    }).filter(function (source) {
        return !!source;
    });
}

// A playlist item may have multiple different sources, but we want to stick with one.
function filterSources(sources, providers) {
    if (!providers || !providers.choose) {
        providers = new _providers2.default();
    }

    var chosenProviderAndType = chooseProviderAndType(sources, providers);
    if (!chosenProviderAndType) {
        return [];
    }
    var provider = chosenProviderAndType.provider;
    var bestType = chosenProviderAndType.type;
    return sources.filter(function (source) {
        return source.type === bestType && providers.providerSupports(provider, source);
    });
}

//  Choose from the sources a type which matches our most preferred provider
function chooseProviderAndType(sources, providers) {
    for (var i = 0; i < sources.length; i++) {
        var source = sources[i];

        var _providers$choose = providers.choose(source),
            providerToCheck = _providers$choose.providerToCheck;

        if (providerToCheck) {
            return { type: source.type, provider: providerToCheck };
        }
    }

    return null;
}

function fallbackIfUndefined(value, fallback) {
    return value === undefined ? fallback : value;
}

exports.default = Playlist;

/***/ }),
/* 43 */
/*!*********************************************!*\
  !*** ./src/js/program/shared-media-pool.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = SharedMediaPool;
function SharedMediaPool(sharedElement, mediaPool) {
    return _extends({}, mediaPool, {
        prime: function prime() {
            if (!sharedElement.src) {
                sharedElement.load();
            }
        },
        getPrimedElement: function getPrimedElement() {
            return sharedElement;
        },
        clean: function clean() {
            mediaPool.clean(sharedElement);
        },
        recycle: function recycle() {
            mediaPool.clean(sharedElement);
        }
    });
}

/***/ }),
/* 44 */
/*!***********************************************!*\
  !*** ./src/js/providers/html5-android-hls.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isAndroidHls = isAndroidHls;

var _environment = __webpack_require__(/*! environment/environment */ 11);

function isAndroidHls(source) {
    if (source.type === 'hls' && _environment.OS.android) {
        if (source.androidhls === false) {
            return false;
        }

        // Allow Android hls playback on versions 4.1 and above, excluding Firefox (which does not support HLS in any version)
        return !_environment.Browser.firefox && parseFloat(_environment.OS.version.version) >= 4.4;
    }
    return null;
}

/***/ }),
/* 45 */
/*!*************************************!*\
  !*** ./src/js/providers/default.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _events = __webpack_require__(/*! events/events */ 5);

var noop = function noop() {};
var returnFalse = function returnFalse() {
    return false;
};
var getNameResult = { name: 'default' };
var returnName = function returnName() {
    return getNameResult;
};

/** Audio Track information for tracks returned by {@link Api#getAudioTracks jwplayer().getAudioTracks()}
 * @typedef {object} AudioTrackOption
 * @property autoselect
 * @property defaulttrack
 * @property groupid
 * @property {string} language
 * @property {string} name
 */

/**
 * @typedef {option} QualityOption
 * @property {string} label
 * @property {number} [width]
 * @property {number} [height]
 * @property {number} [bitrate]
 */

var DefaultProvider = {
    // This function is required to determine if a provider can work on a given source
    supports: returnFalse,

    // Basic playback features
    play: noop,
    pause: noop,
    preload: noop,
    load: noop,
    stop: noop,
    volume: noop,
    mute: noop,
    seek: noop,
    resize: noop,
    remove: noop, // removes from page
    destroy: noop, // frees memory
    eventsOn_: noop,
    eventsOff_: noop,

    setVisibility: noop,
    setFullscreen: noop,
    getFullscreen: returnFalse,

    // If setContainer has been set, this returns the element.
    //  It's value is used to determine if we should remove the <video> element when setting a new provider.
    getContainer: noop,

    // Sets the parent element, causing provider to append <video> into it
    setContainer: returnFalse,

    getName: returnName,

    getQualityLevels: noop,
    getCurrentQuality: noop,
    setCurrentQuality: noop,

    getAudioTracks: noop,

    getCurrentAudioTrack: noop,
    setCurrentAudioTrack: noop,

    setPlaybackRate: noop,
    getPlaybackRate: function getPlaybackRate() {
        return 1;
    },

    // TODO :: The following are targets for removal after refactoring
    checkComplete: noop,
    setControls: noop,
    attachMedia: noop,
    detachMedia: noop,
    init: noop,

    setState: function setState(state) {
        this.state = state;

        this.trigger(_events.PLAYER_STATE, {
            newstate: state
        });
    },

    sendMediaType: function sendMediaType(levels) {
        var type = levels[0].type;
        var isAudioFile = type === 'oga' || type === 'aac' || type === 'mp3' || type === 'mpeg' || type === 'vorbis';

        this.trigger(_events.MEDIA_TYPE, {
            mediaType: isAudioFile ? 'audio' : 'video'
        });
    }
};

exports.default = DefaultProvider;

/***/ }),
/* 46 */
/*!****************************!*\
  !*** ./src/js/jwplayer.js ***!
  \****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _playerutils = __webpack_require__(/*! ./utils/playerutils */ 20);

var _players = __webpack_require__(/*! ./api/players */ 26);

var _players2 = _interopRequireDefault(_players);

var _globalApi = __webpack_require__(/*! api/global-api */ 47);

var _globalApi2 = _interopRequireDefault(_globalApi);

var _plugins = __webpack_require__(/*! plugins/plugins */ 22);

var _version = __webpack_require__(/*! ./version */ 17);

var _api = __webpack_require__(/*! api/api */ 61);

var _api2 = _interopRequireDefault(_api);

var _apiSettings = __webpack_require__(/*! api/api-settings */ 16);

var _apiSettings2 = _interopRequireDefault(_apiSettings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global __webpack_public_path__:true*/
/* eslint camelcase: 0 */
__webpack_require__.p = (0, _playerutils.loadFrom)();

/**
 * Return an instance of {@link Api the JW Player API} matching an element on the page or an existing player.
 * @global
 * @param {string|number|HTMLElement} [query] - This can be an element id, player index or DOM element.
 * When left out, this method attempts to return the first available player.
 * @returns {Api|object} - Returns a player instance if one matches the provided query.
 * Otherwise, returns an object containing the `registerPlugin` method.
 */
var jwplayer = function jwplayer(query) {
    var player = void 0;
    var domElement = void 0;

    // prioritize getting a player over querying an element
    if (!query) {
        player = _players2.default[0];
    } else if (typeof query === 'string') {
        player = playerById(query);
        if (!player) {
            domElement = document.getElementById(query);
        }
    } else if (typeof query === 'number') {
        player = _players2.default[query];
    } else if (query.nodeType) {
        domElement = query;
        player = playerById(domElement.id || domElement.getAttribute('data-jwplayer-id'));
    }
    // found player
    if (player) {
        return player;
    }
    // create player
    if (domElement) {
        var api = new _api2.default(domElement);
        _players2.default.push(api);
        return api;
    }
    // invalid query
    return {
        registerPlugin: _plugins.registerPlugin
    };
};

function playerById(id) {
    for (var p = 0; p < _players2.default.length; p++) {
        if (_players2.default[p].id === id) {
            return _players2.default[p];
        }
    }
    return null;
}

Object.defineProperties(jwplayer, {
    api: {
        get: function get() {
            return _globalApi2.default;
        },
        set: function set() {}
    },
    version: {
        get: function get() {
            return _version.version;
        },
        set: function set() {}
    },
    debug: {
        get: function get() {
            return _apiSettings2.default.debug;
        },
        set: function set(value) {
            _apiSettings2.default.debug = !!value;
        }
    }
});

exports.default = jwplayer;

/***/ }),
/* 47 */
/*!**********************************!*\
  !*** ./src/js/api/global-api.js ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _providersSupported = __webpack_require__(/*! providers/providers-supported */ 14);

var _providersSupported2 = _interopRequireDefault(_providersSupported);

var _providersRegister = __webpack_require__(/*! providers/providers-register */ 21);

var _providersRegister2 = _interopRequireDefault(_providersRegister);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    availableProviders: _providersSupported2.default,
    registerProvider: _providersRegister2.default
};

/***/ }),
/* 48 */
/*!***********************************************!*\
  !*** ./src/js/environment/browser-version.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.browserVersion = browserVersion;
function browserVersion(browserEnvironment, agent) {
    var version = void 0;
    var major = void 0;
    var minor = void 0;
    var ix = void 0;

    if (browserEnvironment.chrome) {
        // A Chrome UA either contains "Chrome" (desktop/android) or "CriOS" (iOS)
        if (agent.indexOf('Chrome') !== -1) {
            version = agent.substring(agent.indexOf('Chrome') + 7);
        } else {
            version = agent.substring(agent.indexOf('CriOS') + 6);
        }
    } else if (browserEnvironment.safari) {
        // Safari sets its version after the "Version" string in the agent
        version = agent.substring(agent.indexOf('Version') + 8);
    } else if (browserEnvironment.firefox) {
        version = agent.substring(agent.indexOf('Firefox') + 8);
    } else if (browserEnvironment.edge) {
        version = agent.substring(agent.indexOf('Edge') + 5);
    } else if (browserEnvironment.ie) {
        // Older versions of IE use MSIE; IE11 uses rv:
        if (agent.indexOf('rv:') !== -1) {
            version = agent.substring(agent.indexOf('rv:') + 3);
        } else if (agent.indexOf('MSIE') !== -1) {
            version = agent.substring(agent.indexOf('MSIE') + 5);
        }
    }

    if (version) {
        // trim the version string
        if ((ix = version.indexOf(';')) !== -1) {
            version = version.substring(0, ix);
        }
        if ((ix = version.indexOf(' ')) !== -1) {
            version = version.substring(0, ix);
        }
        if ((ix = version.indexOf(')')) !== -1) {
            version = version.substring(0, ix);
        }

        major = parseInt(version, 10);
        // Versions will always be in the d.d.d format
        minor = parseInt(version.split('.')[1], 10);
    }

    // Allow undefined to represent unknown agents
    return {
        version: version,
        major: major,
        minor: minor
    };
}

/***/ }),
/* 49 */
/*!******************************************!*\
  !*** ./src/js/environment/os-version.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.osVersion = osVersion;
function execResult(array, index) {
    if (array && array.length > index) {
        return array[index];
    }
}

function osVersion(osEnvironment, agent) {
    var version = void 0;
    var major = void 0;
    var minor = void 0;

    if (osEnvironment.windows) {
        version = execResult(/Windows(?: NT|)? ([._\d]+)/.exec(agent), 1);
        // Map the Windows NT version to the canonical Windows version
        switch (version) {
            case '6.1':
                version = '7.0';
                break;
            case '6.2':
                version = '8.0';
                break;
            case '6.3':
                version = '8.1';
                break;
            default:
                break;
        }
    } else if (osEnvironment.android) {
        version = execResult(/Android ([._\d]+)/.exec(agent), 1);
    } else if (osEnvironment.iOS) {
        version = execResult(/OS ([._\d]+)/.exec(agent), 1);
    } else if (osEnvironment.mac) {
        version = execResult(/Mac OS X (10[._\d]+)/.exec(agent), 1);
    }

    if (version) {
        major = parseInt(version, 10);
        // Versions may be in the d.d.d or d_d_d format
        var versionNumbers = version.split(/[._]/);
        if (versionNumbers) {
            minor = parseInt(versionNumbers[1], 10);
        }
    }

    // Allow undefined to represent unknown agents
    return {
        version: version,
        major: major,
        minor: minor
    };
}

/***/ }),
/* 50 */
/*!*******************************!*\
  !*** ./src/js/utils/video.js ***!
  \*******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var video = document.createElement('video');
exports.default = video;

/***/ }),
/* 51 */
/*!**********************************!*\
  !*** ./src/js/plugins/loader.js ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _promise = __webpack_require__(/*! polyfills/promise */ 4);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configurePlugin(pluginObj, pluginConfig, api) {
    var pluginName = pluginObj.name;

    var div = document.createElement('div');
    div.id = api.id + '_' + pluginName;
    div.className = 'jw-plugin jw-reset';

    var pluginOptions = _extends({}, pluginConfig);
    var pluginInstance = pluginObj.getNewInstance(api, pluginOptions, div);

    api.addPlugin(pluginName, pluginInstance);
}

var PluginLoader = function PluginLoader() {
    this.load = function (api, pluginsModel, pluginsConfig) {
        // Must be a hash map
        if (!pluginsConfig || (typeof pluginsConfig === 'undefined' ? 'undefined' : _typeof(pluginsConfig)) !== 'object') {
            return _promise.resolved;
        }

        return _promise2.default.all(Object.keys(pluginsConfig).filter(function (pluginUrl) {
            return pluginUrl;
        }).map(function (pluginUrl) {
            var plugin = pluginsModel.addPlugin(pluginUrl, true);
            var pluginConfig = pluginsConfig[pluginUrl];
            return plugin.load().then(function () {
                configurePlugin(plugin, pluginConfig, api);
            }).catch(function (error) {
                if (!(error instanceof Error)) {
                    return new Error('Error in ' + pluginUrl + ' "' + error + '"');
                }
                return error;
            });
        }));
    };
};

exports.default = PluginLoader;

/***/ }),
/* 52 */
/*!****************************************************!*\
  !*** ./node_modules/promise-polyfill/src/index.js ***!
  \****************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(setImmediate) {// Store setTimeout reference so promise-polyfill will be unaffected by
// other code modifying setTimeout (like sinon.useFakeTimers())
var setTimeoutFunc = setTimeout;

function noop() {}

// Polyfill for Function.prototype.bind
function bind(fn, thisArg) {
  return function() {
    fn.apply(thisArg, arguments);
  };
}

function Promise(fn) {
  if (!(this instanceof Promise))
    throw new TypeError('Promises must be constructed via new');
  if (typeof fn !== 'function') throw new TypeError('not a function');
  this._state = 0;
  this._handled = false;
  this._value = undefined;
  this._deferreds = [];

  doResolve(fn, this);
}

function handle(self, deferred) {
  while (self._state === 3) {
    self = self._value;
  }
  if (self._state === 0) {
    self._deferreds.push(deferred);
    return;
  }
  self._handled = true;
  Promise._immediateFn(function() {
    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
      return;
    }
    var ret;
    try {
      ret = cb(self._value);
    } catch (e) {
      reject(deferred.promise, e);
      return;
    }
    resolve(deferred.promise, ret);
  });
}

function resolve(self, newValue) {
  try {
    // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
    if (newValue === self)
      throw new TypeError('A promise cannot be resolved with itself.');
    if (
      newValue &&
      (typeof newValue === 'object' || typeof newValue === 'function')
    ) {
      var then = newValue.then;
      if (newValue instanceof Promise) {
        self._state = 3;
        self._value = newValue;
        finale(self);
        return;
      } else if (typeof then === 'function') {
        doResolve(bind(then, newValue), self);
        return;
      }
    }
    self._state = 1;
    self._value = newValue;
    finale(self);
  } catch (e) {
    reject(self, e);
  }
}

function reject(self, newValue) {
  self._state = 2;
  self._value = newValue;
  finale(self);
}

function finale(self) {
  if (self._state === 2 && self._deferreds.length === 0) {
    Promise._immediateFn(function() {
      if (!self._handled) {
        Promise._unhandledRejectionFn(self._value);
      }
    });
  }

  for (var i = 0, len = self._deferreds.length; i < len; i++) {
    handle(self, self._deferreds[i]);
  }
  self._deferreds = null;
}

function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, self) {
  var done = false;
  try {
    fn(
      function(value) {
        if (done) return;
        done = true;
        resolve(self, value);
      },
      function(reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      }
    );
  } catch (ex) {
    if (done) return;
    done = true;
    reject(self, ex);
  }
}

Promise.prototype['catch'] = function(onRejected) {
  return this.then(null, onRejected);
};

Promise.prototype.then = function(onFulfilled, onRejected) {
  var prom = new this.constructor(noop);

  handle(this, new Handler(onFulfilled, onRejected, prom));
  return prom;
};

Promise.prototype['finally'] = function(callback) {
  var constructor = this.constructor;
  return this.then(
    function(value) {
      return constructor.resolve(callback()).then(function() {
        return value;
      });
    },
    function(reason) {
      return constructor.resolve(callback()).then(function() {
        return constructor.reject(reason);
      });
    }
  );
};

Promise.all = function(arr) {
  return new Promise(function(resolve, reject) {
    if (!arr || typeof arr.length === 'undefined')
      throw new TypeError('Promise.all accepts an array');
    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      try {
        if (val && (typeof val === 'object' || typeof val === 'function')) {
          var then = val.then;
          if (typeof then === 'function') {
            then.call(
              val,
              function(val) {
                res(i, val);
              },
              reject
            );
            return;
          }
        }
        args[i] = val;
        if (--remaining === 0) {
          resolve(args);
        }
      } catch (ex) {
        reject(ex);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.resolve = function(value) {
  if (value && typeof value === 'object' && value.constructor === Promise) {
    return value;
  }

  return new Promise(function(resolve) {
    resolve(value);
  });
};

Promise.reject = function(value) {
  return new Promise(function(resolve, reject) {
    reject(value);
  });
};

Promise.race = function(values) {
  return new Promise(function(resolve, reject) {
    for (var i = 0, len = values.length; i < len; i++) {
      values[i].then(resolve, reject);
    }
  });
};

// Use polyfill for setImmediate for performance gains
Promise._immediateFn =
  (typeof setImmediate === 'function' &&
    function(fn) {
      setImmediate(fn);
    }) ||
  function(fn) {
    setTimeoutFunc(fn, 0);
  };

Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
  if (typeof console !== 'undefined' && console) {
    console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Promise);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! ./../../node-libs-browser/node_modules/timers-browserify/main.js */ 53).setImmediate))

/***/ }),
/* 53 */
/*!*******************************************************************************!*\
  !*** ./node_modules/node-libs-browser/node_modules/timers-browserify/main.js ***!
  \*******************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ 54);
// On some exotic environments, it's not clear which object `setimmeidate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 30)))

/***/ }),
/* 54 */
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../webpack/buildin/global.js */ 30), __webpack_require__(/*! ./../process/browser.js */ 55)))

/***/ }),
/* 55 */
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 56 */
/*!*********************************!*\
  !*** ./src/js/plugins/model.js ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _plugin = __webpack_require__(/*! plugins/plugin */ 57);

var _plugin2 = _interopRequireDefault(_plugin);

var _helpers = __webpack_require__(/*! utils/helpers */ 6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pluginsRegistered = {};

// Extract a plugin name from a string
var getPluginName = function getPluginName(url) {
    // Regex locates the characters after the last slash, until it encounters a dash.
    return url.replace(/^(.*\/)?([^-]*)-?.*\.(js)$/, '$2');
};

var PluginModel = function PluginModel() {
    this.addPlugin = function (url, fromLoader) {
        var pluginName = getPluginName(url);
        var plugin = pluginsRegistered[pluginName];
        if (!plugin) {
            plugin = new _plugin2.default(url);
            pluginsRegistered[pluginName] = plugin;
        } else if (fromLoader && plugin.url !== url) {
            (0, _helpers.log)('JW Plugin "' + pluginName + '" already loaded from "' + plugin.url + '". Ignoring "' + url + '."');
        }
        return plugin;
    };

    this.getPlugins = function () {
        return pluginsRegistered;
    };
};

exports.default = PluginModel;

/***/ }),
/* 57 */
/*!**********************************!*\
  !*** ./src/js/plugins/plugin.js ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _promise = __webpack_require__(/*! polyfills/promise */ 4);

var _scriptloader = __webpack_require__(/*! utils/scriptloader */ 31);

var _scriptloader2 = _interopRequireDefault(_scriptloader);

var _parser = __webpack_require__(/*! utils/parser */ 10);

var _strings = __webpack_require__(/*! utils/strings */ 1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PLUGIN_PATH_TYPE_ABSOLUTE = 0;
var PLUGIN_PATH_TYPE_RELATIVE = 1;
var PLUGIN_PATH_TYPE_CDN = 2;

var getPluginPathType = function getPluginPathType(path) {
    if (typeof path !== 'string') {
        return;
    }
    path = path.split('?')[0];
    var protocol = path.indexOf('://');
    if (protocol > 0) {
        return PLUGIN_PATH_TYPE_ABSOLUTE;
    }
    var folder = path.indexOf('/');
    var fileExtension = (0, _strings.extension)(path);
    if (protocol < 0 && folder < 0 && (!fileExtension || !isNaN(fileExtension))) {
        return PLUGIN_PATH_TYPE_CDN;
    }
    return PLUGIN_PATH_TYPE_RELATIVE;
};

function getJSPath(url) {
    switch (getPluginPathType(url)) {
        case PLUGIN_PATH_TYPE_ABSOLUTE:
            return url;
        case PLUGIN_PATH_TYPE_RELATIVE:
            return (0, _parser.getAbsolutePath)(url, window.location.href);
        default:
            break;
    }
}

var Plugin = function Plugin(url) {
    this.url = url;
};

_extends(Plugin.prototype, {
    load: function load() {
        if (getPluginPathType(this.url) === PLUGIN_PATH_TYPE_CDN) {
            return _promise.resolved;
        }
        var loader = new _scriptloader2.default(getJSPath(this.url));
        this.loader = loader;
        return loader.load();
    },
    registerPlugin: function registerPlugin(name, minimumVersion, pluginClass) {
        this.name = name;
        this.target = minimumVersion;
        this.js = pluginClass;
    },
    getNewInstance: function getNewInstance(api, config, div) {
        var PluginClass = this.js;
        var pluginInstance = new PluginClass(api, config, div);

        pluginInstance.addToPlayer = function () {
            var overlaysElement = api.getContainer().querySelector('.jw-overlays');
            if (!overlaysElement) {
                return;
            }
            div.left = overlaysElement.style.left;
            div.top = overlaysElement.style.top;
            overlaysElement.appendChild(div);
            pluginInstance.displayArea = overlaysElement;
        };

        pluginInstance.resizeHandler = function () {
            var displayarea = pluginInstance.displayArea;
            if (displayarea) {
                pluginInstance.resize(displayarea.clientWidth, displayarea.clientHeight);
            }
        };

        return pluginInstance;
    }
});

exports.default = Plugin;

/***/ }),
/* 58 */
/*!*******************************!*\
  !*** ./src/js/utils/clock.js ***!
  \*******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.now = now;
exports.dateTime = dateTime;

var _date = __webpack_require__(/*! utils/date */ 25);

var performance = window.performance || {
    timing: {}
};
var startDate = performance.timing.navigationStart || (0, _date.now)();

if (!('now' in performance)) {
    performance.now = function () {
        return (0, _date.now)() - startDate;
    };
}

function now() {
    return performance.now();
}

function dateTime() {
    return startDate + performance.now();
}

/***/ }),
/* 59 */
/*!**********************************!*\
  !*** ./src/js/utils/trycatch.js ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tryCatch = tryCatch;
exports.JwError = JwError;

var _apiSettings = __webpack_require__(/*! api/api-settings */ 16);

var _apiSettings2 = _interopRequireDefault(_apiSettings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function tryCatch(fn, ctx) {
    var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    // In debug mode, allow `fn` to throw exceptions
    if (_apiSettings2.default.debug) {
        return fn.apply(ctx || this, args);
    }

    // else catch exceptions and return a `JWError`
    try {
        return fn.apply(ctx || this, args);
    } catch (e) {
        return new JwError(fn.name, e);
    }
}

function JwError(name, error) {
    this.name = name;
    this.message = error.message || error.toString();
    this.error = error;
}

/***/ }),
/* 60 */
/*!******************************!*\
  !*** ./src/js/utils/ajax.js ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.crossdomain = crossdomain;
exports.ajax = ajax;
exports.abortAjax = abortAjax;

var _parser = __webpack_require__(/*! utils/parser */ 10);

var _underscore = __webpack_require__(/*! utils/underscore */ 0);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = function noop() {};

var useDomParser = false;

// TODO: deprecate (jwplayer-ads-vast uses utils.crossdomain(url)). It's used here for IE9 compatibility
function crossdomain(uri) {
    var a = document.createElement('a');
    var b = document.createElement('a');
    a.href = location.href;
    try {
        b.href = uri;
        b.href = b.href; /* IE fix for relative urls */
        return a.protocol + '//' + a.host !== b.protocol + '//' + b.host;
    } catch (e) {/* swallow */}
    return true;
}

function ajax(url, completeCallback, errorCallback, args) {
    if (_underscore2.default.isObject(url)) {
        args = url;
        url = args.url;
    }
    var xhr;
    var options = _extends({
        xhr: null,
        url: url,
        withCredentials: false,
        retryWithoutCredentials: false,
        timeout: 60000,
        timeoutId: -1,
        oncomplete: completeCallback || noop,
        onerror: errorCallback || noop,
        mimeType: args && !args.responseType ? 'text/xml' : '',
        requireValidXML: false, /* Require responseXML */
        responseType: args && args.plainText ? 'text' : '' /* xhr.responseType ex: "json" or "text" */
    }, args);

    if ('XDomainRequest' in window && crossdomain(url)) {
        // IE8 / 9
        xhr = options.xhr = new window.XDomainRequest();
        xhr.onload = _ajaxComplete(options);
        xhr.ontimeout = xhr.onprogress = noop;
        useDomParser = true;
    } else if ('XMLHttpRequest' in window) {
        // Firefox, Chrome, Opera, Safari
        xhr = options.xhr = new window.XMLHttpRequest();
        xhr.onreadystatechange = _readyStateChangeHandler(options);
    } else {
        // browser cannot make xhr requests
        options.onerror('', url);
        return;
    }
    var requestError = _requestError('Error loading file', options);
    xhr.onerror = requestError;

    if ('overrideMimeType' in xhr) {
        if (options.mimeType) {
            xhr.overrideMimeType(options.mimeType);
        }
    } else {
        useDomParser = true;
    }

    try {
        // remove anchors from the URL since they can't be loaded in IE
        url = url.replace(/#.*$/, '');
        xhr.open('GET', url, true);
    } catch (e) {
        requestError(e);
        return xhr;
    }

    if (options.responseType) {
        try {
            xhr.responseType = options.responseType;
        } catch (e) {/* ignore */}
    }

    if (options.timeout) {
        options.timeoutId = setTimeout(function () {
            abortAjax(xhr);
            options.onerror('Timeout', url, xhr);
        }, options.timeout);
        xhr.onabort = function () {
            clearTimeout(options.timeoutId);
        };
    }

    try {
        // xhr.withCredentials must must be set after xhr.open() is called
        // otherwise older WebKit browsers will throw INVALID_STATE_ERR (PhantomJS 1.x)
        if (options.withCredentials && 'withCredentials' in xhr) {
            xhr.withCredentials = true;
        }
        xhr.send();
    } catch (e) {
        requestError(e);
    }
    return xhr;
}

function abortAjax(xhr) {
    xhr.onload = null;
    xhr.onprogress = null;
    xhr.onreadystatechange = null;
    xhr.onerror = null;
    if ('abort' in xhr) {
        xhr.abort();
    }
}

function _requestError(message, options) {
    return function (e) {
        var xhr = e.currentTarget || options.xhr;
        clearTimeout(options.timeoutId);
        // Handle Access-Control-Allow-Origin wildcard error when using withCredentials to send cookies
        if (options.retryWithoutCredentials && options.xhr.withCredentials) {
            abortAjax(xhr);
            var args = _extends({}, options, {
                xhr: null,
                withCredentials: false,
                retryWithoutCredentials: false
            });
            ajax(args);
            return;
        }
        options.onerror(message, options.url, xhr);
    };
}

function _readyStateChangeHandler(options) {
    return function (e) {
        var xhr = e.currentTarget || options.xhr;
        if (xhr.readyState === 4) {
            clearTimeout(options.timeoutId);
            if (xhr.status >= 400) {
                var message;
                if (xhr.status === 404) {
                    message = 'File not found';
                } else {
                    message = '' + xhr.status + '(' + xhr.statusText + ')';
                }
                return options.onerror(message, options.url, xhr);
            }
            if (xhr.status === 200) {
                return _ajaxComplete(options)(e);
            }
        }
    };
}

function _ajaxComplete(options) {
    return function (e) {
        var xhr = e.currentTarget || options.xhr;
        clearTimeout(options.timeoutId);
        if (options.responseType) {
            if (options.responseType === 'json') {
                return _jsonResponse(xhr, options);
            }
        } else {
            // Handle the case where an XML document was returned with an incorrect MIME type.
            var xml = xhr.responseXML;
            var firstChild;
            if (xml) {
                try {
                    // This will throw an error on Windows Mobile 7.5.
                    // We want to trigger the error so that we can move down to the next section
                    firstChild = xml.firstChild;
                } catch (error) {
                    /* ignore */
                }
            }
            if (xml && firstChild) {
                return _xmlResponse(xhr, xml, options);
            }
            // IE9
            if (useDomParser && xhr.responseText && !xml) {
                xml = (0, _parser.parseXML)(xhr.responseText);
                if (xml && xml.firstChild) {
                    return _xmlResponse(xhr, xml, options);
                }
            }
            if (options.requireValidXML) {
                options.onerror('Invalid XML', options.url, xhr);
                return;
            }
        }
        options.oncomplete(xhr);
    };
}

function _jsonResponse(xhr, options) {
    // insure that xhr.response is parsed JSON
    if (!xhr.response || _underscore2.default.isString(xhr.response) && xhr.responseText.substr(1) !== '"') {
        try {
            xhr = _extends({}, xhr, {
                response: JSON.parse(xhr.responseText)
            });
        } catch (err) {
            options.onerror('Invalid JSON', options.url, xhr);
            return;
        }
    }
    return options.oncomplete(xhr);
}

function _xmlResponse(xhr, xml, options) {
    // Handle DOMParser 'parsererror'
    var doc = xml.documentElement;
    if (options.requireValidXML && (doc.nodeName === 'parsererror' || doc.getElementsByTagName('parsererror').length)) {
        options.onerror('Invalid XML', options.url, xhr);
        return;
    }
    if (!xhr.responseXML) {
        xhr = _extends({}, xhr, {
            responseXML: xml
        });
    }
    return options.oncomplete(xhr);
}

/***/ }),
/* 61 */
/*!***************************!*\
  !*** ./src/js/api/api.js ***!
  \***************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Api;

var _apiSettings = __webpack_require__(/*! api/api-settings */ 16);

var _apiSettings2 = _interopRequireDefault(_apiSettings);

var _environment = __webpack_require__(/*! environment/environment */ 11);

var Environment = _interopRequireWildcard(_environment);

var _players = __webpack_require__(/*! ./players */ 26);

var _players2 = _interopRequireDefault(_players);

var _coreShim = __webpack_require__(/*! ./core-shim */ 39);

var _coreShim2 = _interopRequireDefault(_coreShim);

var _version = __webpack_require__(/*! ../version */ 17);

var _events = __webpack_require__(/*! events/events */ 5);

var _timer = __webpack_require__(/*! api/timer */ 18);

var _timer2 = _interopRequireDefault(_timer);

var _backbone = __webpack_require__(/*! utils/backbone.events */ 7);

var _backbone2 = _interopRequireDefault(_backbone);

var _plugins = __webpack_require__(/*! plugins/plugins */ 22);

var _helpers = __webpack_require__(/*! utils/helpers */ 6);

var _helpers2 = _interopRequireDefault(_helpers);

var _underscore = __webpack_require__(/*! utils/underscore */ 0);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instancesCreated = 0;

/**
 * @private
 * Factory method which creates controllers before calling `jwplayer().setup()`.
 * @param {Api} api - The Player API instance to bind core to
 * @param {HTMLElement} element - The element that will be replaced by the player's div container
 * @returns {Core} The core controller instance
 */
function coreFactory(api, element) {
    var core = new _coreShim2.default(element);

    // capture the ready event and add setup time to it
    core.on(_events.READY, function (event) {
        api._qoe.tick('ready');
        event.setupTime = api._qoe.between('setup', 'ready');
    });
    core.on('all', function (type, event) {
        api.trigger(type, event);
    });

    return core;
}

/**
 * @private
 * Detaches Api event listeners and destroys the controller.
 * @param {Api} api - The Player API to remove listeners from
 * @param {Core} core - The core controller to destroy
 * @returns {void}
 */
function resetPlayer(api, core) {
    var plugins = api.plugins;
    Object.keys(plugins).forEach(function (key) {
        delete plugins[key];
    });
    api.off();
    core.playerDestroy();
    core.getContainer().removeAttribute('data-jwplayer-id');
}

/**
 * @private
 * Removes the Api instance from the list of active players.
 * The instance will no longer be queryable via `jwplayer()`
 * @param {Api} api - The Player API to remove
 * @returns {void}
 */
function removePlayer(api) {
    for (var i = _players2.default.length; i--;) {
        if (_players2.default[i].uniqueId === api.uniqueId) {
            _players2.default.splice(i, 1);
            break;
        }
    }
}

/**
 * Class representing the jwplayer() API.
 * Creates an instance of the player.
 * @class Api
 * @param {HTMLElement} element - The element that will be replaced by the player's div container.
 */
function Api(element) {
    // Add read-only properties which access privately scoped data

    // `uniqueId` should start at 1
    var uniqueId = ++instancesCreated;
    var playerId = element.id || 'player-' + uniqueId;
    var qoeTimer = new _timer2.default();
    var pluginsMap = {};

    var core = coreFactory(this, element);

    qoeTimer.tick('init');
    element.setAttribute('data-jwplayer-id', playerId);

    Object.defineProperties(this, /** @lends Api.prototype */{
        /**
         * The player's query id.
         * This matches the id of the element used to create the player at the time is was setup.
         * @type string
         * @readonly
         */
        id: {
            get: function get() {
                return playerId;
            }
        },
        /**
         * The player's unique id.
         * @type number
         * @readonly
         */
        uniqueId: {
            get: function get() {
                return uniqueId;
            }
        },
        /**
         * A map of plugin instances.
         * @type object
         * @readonly
         */
        plugins: {
            get: function get() {
                return pluginsMap;
            }
        },
        /**
         * The internal QoE Timer.
         * @type Timer
         * @readonly
         */
        _qoe: {
            get: function get() {
                return qoeTimer;
            }
        },

        /**
         * @return {string} The player API version.
         * @type string
         * @readonly
         */
        version: {
            get: function get() {
                return _version.version;
            }
        },

        /**
         * Returns the Events module from the player instance.
         * Used by plugins to listen to player events.
         * @deprecated TODO: in version 8.0.0-0
         * @readonly
         */
        Events: {
            get: function get() {
                return _backbone2.default;
            }
        },

        /**
         * Returns the Utils module from the player instance.
         * Used by plugins.
         * @deprecated TODO: in version 8.0.0-0
         * @readonly
         */
        utils: {
            get: function get() {
                return _helpers2.default;
            }
        },

        /**
         * Returns the Underscore module from the player instance.
         * Used by plugins.
         * @deprecated TODO: in version 8.0.0-0
         * @readonly
         */
        _: {
            get: function get() {
                return _underscore2.default;
            }
        }

    });

    _extends(this, /** @lends Api.prototype */{
        /**
         * A map of event listeners.
         * @type object
         * @readonly
         */
        _events: {},

        /**
         * Creates a new player on the page and asynchronously begins setup.
         * A "ready" event is triggered on success.
         * A "setupError" event is triggered on failure.
         * @param {object} options - The player configuration options.
         * @returns {Api} The Player API instance
         */
        setup: function setup(options) {
            qoeTimer.clear('ready');
            qoeTimer.tick('setup');

            resetPlayer(this, core);
            core = coreFactory(this, element);
            core.init(options, this);

            // bind event listeners passed in to the config
            return this.on(options.events, null, this);
        },


        /** Asynchronously removes the player from the page.
         * A "remove" event is fired once removal begins.
         * Playback is stopped, and the DOM used by the player is reset.
         * All event listeners attached to the player are removed.
         * @returns {Api} The Player API instance
         */
        remove: function remove() {
            // Remove from array of players
            removePlayer(this);

            // TODO: [EDIT] This should be fired after `resetPlayer`. Why is it fired before?
            // terminate state
            this.trigger('remove');

            // Unbind listeners and destroy controller/model/...
            resetPlayer(this, core);

            return this;
        },


        /**
         * Gets the QoE properties of the player and current playlist item.
         * @returns {PlayerQoE} An object containing a snapshot of QoE metrics.
         */
        qoe: function qoe() {
            var qoeItem = core.getItemQoe();

            var setupTime = this._qoe.between('setup', 'ready');
            var firstFrame = qoeItem.getFirstFrame ? qoeItem.getFirstFrame() : null;

            /** Player QoE returned from {@link Api#qoe jwplayer().qoe()}
             * @typedef {object} PlayerQoE
             * @property {number} setupTime - The number of milliseconds from `jwplayer().setup()` to the "ready" event.
             * @property {number} firstFrame - The number of milliseconds from the "playAttempt" event to the "firstFrame" event.
             * @property {TimerMetrics} player - The QoE metrics of the player.
             * @property {TimerMetrics} item - The QoE metrics of the current playlist item.
             */
            // {setupTime: number, firstFrame: number, player: object, item: object}
            return {
                setupTime: setupTime,
                firstFrame: firstFrame,
                player: this._qoe.dump(),
                item: qoeItem.dump()
            };
        },


        /**
         * Gets the list of available audio tracks.
         * @returns {Array.<AudioTrackOption>} An array of AudioTrackOption objects representing the current media's audio tracks.
         */
        getAudioTracks: function getAudioTracks() {
            return core.getAudioTracks();
        },


        /**
         * Gets the percentage of the media's duration which has been buffered.
         * @returns {number} A number from 0-100 indicating the percentage of media buffered.
         */
        getBuffer: function getBuffer() {
            return core.get('buffer');
        },


        /**
         * Gets the captions style.
         * @returns {object} The captions styling configuration
         */
        getCaptions: function getCaptions() {
            return core.get('captions');
        },


        // defined in controller/captions
        /**
         * Captions Track information for tracks returned by {@link Api#getCaptionsList jwplayer().getCaptionsList()}
         * @typedef {object} CaptionsTrackOption
         * @property {string} id
         * @property {string} label
         */

        /**
         * Gets the list of available captions tracks.
         * The first item in the array will always be the "off" option, regardless of whether the media contains captions.
         * @returns {Array.<CaptionsTrackOption>} An array of CaptionsTrackOption objects.
         */
        getCaptionsList: function getCaptionsList() {
            return core.getCaptionsList();
        },


        /**
         * Gets a static representation of the player's model.
         * @returns {object} A copy of the player model.
         */
        getConfig: function getConfig() {
            return core.getConfig();
        },


        /**
         * Gets the player's top level DOM element.
         * @returns {HTMLElement} The player's div container.
         */
        getContainer: function getContainer() {
            return core.getContainer();
        },


        /**
         * Gets whether or not controls are enabled.
         * @returns {boolean} Are controls enabled?
         */
        getControls: function getControls() {
            return core.get('controls');
        },


        /**
         * Gets the index of the active audio track.
         * @returns {number} The index of the active audio track, or -1 if there are no alternative audio tracks.
         */
        getCurrentAudioTrack: function getCurrentAudioTrack() {
            return core.getCurrentAudioTrack();
        },


        /**
         * Gets the index of the active captions selection.
         * @returns {number} The index of the active selection option, or 0 if captions are off.
         */
        getCurrentCaptions: function getCurrentCaptions() {
            return core.getCurrentCaptions();
        },


        /**
         * Gets the index of the active quality selection.
         * @returns {number} The index of the active quality level.
         */
        getCurrentQuality: function getCurrentQuality() {
            return core.getCurrentQuality();
        },


        /**
         * Gets the current value for video.currentTime
         * @returns {number} The value for video.currentTime in seconds
         */
        getCurrentTime: function getCurrentTime() {
            return core.get('currentTime');
        },


        /**
         * Gets the duration of the current playlist item.
         * @returns {number} The duration in seconds.
         * Live streams always return `Infinity`.
         * DVR streams return a negative value, indicating how far back playback is from the live edge.
         */
        getDuration: function getDuration() {
            return core.get('duration');
        },


        /**
         * Environment information for the current session, return by {@link Api#getEnvironment jwplayer().getEnvironment()}
         * @typedef {object} Environment
         * @property {BrowserEnvironment} Browser - Information about the current session's browser.
         * @property {OSEnvironment} OS - Information about the current session's operating system.
         * @property {FeatureEnvironment} Features - Information about the current sessions's supported features.
         */

        /**
         * Gets information about the current session's environment
         * @returns {Environment} An object detailing the current session's browser, operating system, and supported features.
         */
        getEnvironment: function getEnvironment() {
            return Environment;
        },


        /**
         * Gets the player's fullscreen state.
         * @returns {boolean} Whether or not the player is in fullscreen mode.
         */
        getFullscreen: function getFullscreen() {
            return core.get('fullscreen');
        },


        /**
         * Gets the player's height.
         * @returns {number} The height of the player in pixels.
         */
        getHeight: function getHeight() {
            return core.getHeight();
        },


        /**
         * Gets all metadata for the current playlist item.
         * @returns {object} The merged result of the current playlist item's "meta" events.
         */
        getItemMeta: function getItemMeta() {
            return core.get('itemMeta') || {};
        },


        /**
         * Gets the player's mute state.
         * @returns {boolean} Whether or not the player is muted.
         */
        getMute: function getMute() {
            return core.getMute();
        },


        /**
         * Gets the rate at which playback should occur while media is playing.
         * @default 1.0
         * @returns {number} The playback rate of the media element (`HTMLMediaElement.playbackRate`).
         * @since v7.12.0
         */
        getPlaybackRate: function getPlaybackRate() {
            return core.get('playbackRate');
        },


        /**
         * Gets the player's playlist.
         * @returns {Array.<PlaylistItem>} An array of PlaylistItem objects.
         */
        getPlaylist: function getPlaylist() {
            return core.get('playlist');
        },


        /**
         * Gets the index of the current playlist item.
         * @returns {number} The index of the current playlist item.
         */
        getPlaylistIndex: function getPlaylistIndex() {
            return core.get('item');
        },


        /**
         * Gets the current playlist item, or the item specified by `index`.
         * @param {number} [index] A 0-based index of the desired playlist item.
         * @returns {PlaylistItem|null} Returns `null` when `index` is out of range.
         */
        getPlaylistItem: function getPlaylistItem(index) {
            if (!_helpers2.default.exists(index)) {
                return core.get('playlistItem');
            }
            var playlist = this.getPlaylist();
            if (playlist) {
                return playlist[index];
            }
            return null;
        },


        /**
         * Gets the current playback time of the active media item.
         * @returns {number} The current playback time in seconds.
         * Live streams return the number of seconds played relative to when playback started (not since the live stream started).
         * DVR streams return a negative value, indicating how far playback is from the live edge.
         */
        getPosition: function getPosition() {
            return core.get('position');
        },


        /**
         * @typedef {object} ProviderInfo
         * @property {string} name - The name of the Provider handling playback.
         */

        /**
         * Gets information about how the player is handling playback.
         * @returns {ProviderInfo} An object containing the name of the current playback provider.
         */
        getProvider: function getProvider() {
            return core.getProvider();
        },


        /**
         * Gets the list of available quality options.
         * @returns {Array.<QualityOption>} An array of QualityOption objects.
         */
        getQualityLevels: function getQualityLevels() {
            return core.getQualityLevels();
        },


        /**
         * @typedef {object} SafeRegion
         * @property {number} x - The position in pixels from the left of the player, not covered by controls.
         * @property {number} y -  The position in pixels from the top of the player, not covered by controls.
         * @property {number} width - The width of the safe region.
         * @property {number} height - The height of the safe region.
         */

        /**
         * Gets the area of the player not obscured by controls.
         * @param {boolean} [excludeControlbar=true] When set to false, the safe region will not exclude
         * the area used by the controlbar.
         * @returns {SafeRegion} The SafeRegion calculated using the player's current width, height
         * and controlbar when not excluded.
         */
        getSafeRegion: function getSafeRegion() {
            var excludeControlbar = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            return core.getSafeRegion(excludeControlbar);
        },


        /**
         * Gets the player state.
         * @returns {'idle'|'buffering'|'playing'|'paused'|'complete'} The current state of the player.
         */
        getState: function getState() {
            return core.getState();
        },


        /** Gets the mode of stretching used to fit media in the player.
         * @returns {'uniform'|'exactfit'|'fill'|'none'} The current stretch mode.
         */
        getStretching: function getStretching() {
            return core.get('stretching');
        },


        /**
         * Gets the player's viewability.
         * @returns {1|0} Returns `1` when more than half the player is in the document viewport and the page's tab is active.
         * Also returns `1` when the player is in fullscreen mode. `0` otherwise.
         * @since v7.10.0
         */
        getViewable: function getViewable() {
            return core.get('viewable');
        },


        /**
         * @typedef {object} VisualQuality
         * @property {QualityOption} level - The quality option associated with the active visual quality.
         * @property {'auto'|'manual'} mode - Whether the quality was selected automatically (adaptive quality switch) or manually.
         * @property {string|'initial choice'|'auto'|'api'} reason - The reason for the quality change.
         * @property {number} [bitrate] - The bitrate of the the active visual quality.
         */

        /**
         * Gets information about the visual quality of the active media.
         * @returns {VisualQuality} The last VisualQuality object returned for the current playlist item.
         */
        getVisualQuality: function getVisualQuality() {
            return core.getVisualQuality();
        },


        /**
         * Gets the player's volume level.
         * @returns {number} A number from 0-100.
         */
        getVolume: function getVolume() {
            return core.get('volume');
        },


        /**
         * Gets the player's width.
         * @returns {number} The width of the player in pixels.
         */
        getWidth: function getWidth() {
            return core.getWidth();
        },


        /**
         * Sets captions styles.
         * @param {object} captionsStyles - The captions styling configuration to apply.
         * @returns {Api} The Player API instance.
         * @since v7.5.0
         */
        setCaptions: function setCaptions(captionsStyles) {
            core.setCaptions(captionsStyles);
            return this;
        },


        /**
         * Updates the player's config options.
         * @param {object} options - The configuration options to update.
         * @returns {Api} The Player API instance.
         * @since v7.12.0
         */
        setConfig: function setConfig(options) {
            core.setConfig(options);
            return this;
        },


        /**
         * Toggles player controls.
         * @param {boolean} [toggle] - Specifies whether controls should be enabled or disabled.
         * @returns {Api} The Player API instance.
         */
        setControls: function setControls(toggle) {
            core.setControls(toggle);
            return this;
        },


        /**
         * Sets the active audio track.
         * @param {number} index - The index of the audio track to select.
         * @returns {void}
         */
        setCurrentAudioTrack: function setCurrentAudioTrack(index) {
            core.setCurrentAudioTrack(index);
            // TODO: return this;
        },


        /**
         * Sets the active captions option.
         * @param {number} index - The index of the captions option to select.
         * @returns {void}
         */
        setCurrentCaptions: function setCurrentCaptions(index) {
            core.setCurrentCaptions(index);
            // TODO: return this;
        },


        /**
         * Sets the active quality option.
         * @param {number} index - The index of the quality level to select.
         * @returns {void}
         */
        setCurrentQuality: function setCurrentQuality(index) {
            core.setCurrentQuality(index);
            // TODO: return this;
        },


        /**
         * Toggles fullscreen state. Most browsers require a user gesture to trigger entering fullscreen mode.
         * @param {boolean} [toggle] - Specifies whether to enter or exit fullscreen mode.
         * @returns {Api} The Player API instance.
         */
        setFullscreen: function setFullscreen(toggle) {
            core.setFullscreen(toggle);
            return this;
        },


        /**
         * Toggles the player's mute state.
         * @param {boolean} [toggle] - Specifies whether to mute or unmute the player.
         * @returns {Api} The Player API instance.
         */
        setMute: function setMute(toggle) {
            core.setMute(toggle);
            return this;
        },


        /**
         * Sets the player's default playeback rate. During playback, the rate of the current media will be set immediately if supported. Not supported when streaming live.
         * @param {number} playbackRate - The desired rate of playback. Limited to numbers between 0.25-4.0.
         * @returns {Api} The Player API instance.
         * @since v7.12.0
         */
        setPlaybackRate: function setPlaybackRate(playbackRate) {
            core.setPlaybackRate(playbackRate);
            return this;
        },


        /**
         * @typedef {object} SliderCue
         * @property {number} begin - The time at which the cue should be placed in seconds.
         * @property {string} text - The text label of the cue.
         */

        /**
         * Sets the list of cues to be displayed on the time slider.
         * @param {Array.<SliderCue>} sliderCues - The list of cues.
         * @returns {Api} The Player API instance.
         */
        setCues: function setCues(sliderCues) {
            core.setCues(sliderCues);
            return this;
        },


        /**
         * Set the player's volume level.
         * @param {number} level - A value from 0-100.
         * @returns {Api} The Player API instance.
         */
        setVolume: function setVolume(level) {
            core.setVolume(level);
            return this;
        },


        /**
         * Stop any active playback, and loads either a new playlist, a new playlist item,
         * or an item already in the current playlist.
         * @param {string|Array.<PlaylistItem>|PlaylistItem|number} toLoad - The feed url, playlist,
         * playlist item, or playlist item index to load.
         * @param {object} [feedData] - The feed data to associate with playlist items.
         * Only applied when passing in a playlist or playlist items.
         * @returns {Api} The Player API instance.
         */
        load: function load(toLoad, feedData) {
            core.load(toLoad, feedData);
            return this;
        },


        /**
         * Starts playback.
         * @param {object} [meta] - An optional argument used to specify cause.
         * @return {Api} The Player API instance.
         */
        play: function play(meta) {
            core.play(meta);
            return this;
        },


        /**
         * Pauses playback.
         * @param {object} [meta] - An optional argument used to specify cause.
         * @return {Api} The Player API instance.
         */
        pause: function pause(meta) {
            core.pause(meta);
            return this;
        },


        /**
         * Toggles playback between play and pause.
         * @param {object} [meta] - An optional argument used to specify cause.
         * @return {Api} The Player API instance.
         */

        playToggle: function playToggle(meta) {
            switch (this.getState()) {
                case _events.STATE_PLAYING:
                case _events.STATE_BUFFERING:
                    return this.pause(meta);
                default:
                    return this.play(meta);
            }
        },


        /**
         * Seeks to a specific time within the active media. Resumes playback if the player is paused.
         * @param {number} position - The time to seek to.
         * @param {object} [meta] - An optional argument used to specify cause.
         * @returns {Api} The Player API instance.
         */
        seek: function seek(position, meta) {
            core.seek(position, meta);
            return this;
        },


        /**
         * Stops any active playback, and plays the item at the 0-based index in the playlist.
         * @param {number} index - If outside the range of the playlist,
         * the value will be wrapped to the playlist length.
         * @param {object} [meta] - An optional argument used to specify cause.
         * @returns {Api} The Player API instance.
         */
        playlistItem: function playlistItem(index, meta) {
            core.playlistItem(index, meta);
            return this;
        },


        /**
         * Stops any active playback, and plays the next item in the playlist.
         * When the player is at the end of the playlist, this will play the first playlist item.
         * @param {object} [meta] - An optional argument used to specify cause.
         * @returns {Api} The Player API instance.
         */
        playlistNext: function playlistNext(meta) {
            core.playlistNext(meta);
            return this;
        },


        /**
         * Stops any active playback, and plays the previous item in the playlist.
         * When the player is at the beginning of the playlist, this will play the last playlist item.
         * @param {object} [meta] - An optional argument used to specify cause.
         * @returns {Api} The Player API instance.
         */
        playlistPrev: function playlistPrev(meta) {
            core.playlistPrev(meta);
            return this;
        },


        /**
         * Stops any active playback, and plays the next up item specified by the related plugin.
         * The next up item is the next playlist item, or the first recommended video when at the end of the playlist.
         * @returns {Api} The Player API instance.
         * @since v7.7.0
         */
        next: function next() {
            core.next();
            return this;
        },


        /**
         * Toggles the presence of the Airplay button in Safari (calls `HTMLMediaElement.webkitShowPlaybackTargetPicker`).
         * Does not affect the Chromecast button in Chrome.
         * @returns {Api} The Player API instance.
         */
        castToggle: function castToggle() {
            core.castToggle();
            return this;
        },


        /**
         * Creates a new instance of the instream adapter. If present, the previous instance created is destroyed first.
         * @returns {InstreamAdapter} The instream instance.
         */
        createInstream: function createInstream() {
            return core.createInstream();
        },


        /**
         * Calls `skipAd` on the active instream adapter instance if present.
         * @returns {Api} The Player API instance.
         */
        skipAd: function skipAd() {
            core.skipAd();
            return this;
        },


        /**
         * Stops any active playback.
         * @returns {Api} The Player API instance.
         */
        stop: function stop() {
            core.stop();
            return this;
        },


        /**
         * Sets the player width and height.
         * @param {number|string} width - Set the width in pixel (number) or CSS measurement units ('100%', '100em')
         * @param {number|string} [height] - Set the height in pixel (number) or CSS measurement units ('100%', '100em')
         * When specified, the "aspectratio" option included at setup is cleared.
         * @returns {Api} The Player API instance.
         */
        resize: function resize(width, height) {
            core.resize(width, height);
            return this;
        },


        /** Adds or updates a button in the player's control bar. The button is only displayed when controls are active.
         * @param {string} img - The image that will be used as the button icon.
            Can be the url to an image or the content of an SVG in string.
         * @param {string} tooltip - A tooltip label to display when the button is hovered.
         * @param {function} callback - A callback to invoke when the button is clicked.
         * @param {string} id - The id of the button to add or update.
         * @param {string} [btnClass] - CSS classes to add to the button element.
         * @returns {Api} The Player API instance.
         */
        addButton: function addButton(img, tooltip, callback, id, btnClass) {
            core.addButton(img, tooltip, callback, id, btnClass);
            return this;
        },


        /**
         * Removes a button from the player's control bar.
         * @param {string} id - The id of the button to remove.
         * @returns {Api} The Player API instance.
         */
        removeButton: function removeButton(id) {
            core.removeButton(id);
            return this;
        },


        /**
         * Reattaches a player instance to it's underlying video tag.
         * @returns {Api} The Player API instance.
         * @deprecated
         */
        attachMedia: function attachMedia() {
            core.attachMedia();
            return this;
        },


        /**
         * Detaches a player instance from it's underlying video tag.
         * Used to stop recording state changes before an ad break begins.
         * @returns {Api} The Player API instance.
         * @deprecated
         */
        detachMedia: function detachMedia() {
            core.detachMedia();
            return this;
        },


        /**
         * Checks if the player has finished playing the current playlist item,
         * but has not yet triggered the "complete" event or began the next item.
         * This state is entered when playing postroll ads.
         * @returns {boolean} Is the "beforeComplete" event being propagated or interrupted by instream?
         */
        isBeforeComplete: function isBeforeComplete() {
            return core.isBeforeComplete();
        },


        /**
         * Checks if playback has been requested, but not yet attempted.
         * This state is entered when playing preroll ads.
         * @returns {boolean} Is the "beforePlay" event being propagated or interrupted by instream?
         */
        isBeforePlay: function isBeforePlay() {
            return core.isBeforePlay();
        }
    });
}

_extends(Api.prototype, /** @lends Api.prototype */{

    /**
     * Adds an event listener.
     * @param {string} name - The event name. Passing "all" will bind the callback to all events.
     * @param {function} callback - The event callback.
     * @param {any} [context] - The context to apply to the callback's function invocation.
     * @return {Api} The Player API instance.
     */
    on: function on(name, callback, context) {
        return _backbone.on.call(this, name, callback, context);
    },


    /**
     * Adds an event listener which is triggered at most once.
     * The listener is removed after the first call.
     * @param {string} name - The event name. Passing "all" will bind the callback to all events.
     * @param {function} callback - The event callback.
     * @param {any} [context] - The context to apply to the callback's function invocation.
     * @return {Api} The Player API instance.
     */
    once: function once(name, callback, context) {
        return _backbone.once.call(this, name, callback, context);
    },


    /**
     * Removes one or more callbacks.
     * @param {string} [name] - The event name. If null, all bound callbacks for all events will be removed.
     * @param {function} [callback] - If null, all callbacks for the event will be removed.
     * @param {any} [context] - If null, all callbacks with that function will be removed.
     * @return {Api} The Player API instance.
     */
    off: function off(name, callback, context) {
        return _backbone.off.call(this, name, callback, context);
    },


    /**
     * Triggers one or more events.
     * By default, the player will invoke callbacks inside a try-catch block to prevent exceptions from breaking normal player behavior.
     * To disable this safety measure set `jwplayer.debug` to `true`.
     * @param {string} name - The event name.
     * @param {object} [args] - An object containing the event properties.
     * @return {Api} The Player API instance.
     */
    trigger: function trigger(name, args) {
        if (_underscore2.default.isObject(args)) {
            args = _extends({}, args);
        } else {
            args = {};
        }
        args.type = name;
        if (_apiSettings2.default.debug) {
            return _backbone.trigger.call(this, name, args);
        }
        return _backbone.triggerSafe.call(this, name, args);
    },


    /**
     * Gets the specified plugin instance.
     * @param {string} name - The name of the plugin.
     * @return {any} The plugin instance.
     */
    getPlugin: function getPlugin(name) {
        return this.plugins[name];
    },


    /**
     * Adds a plugin instance to the player's instance.
     * @param {string} name - The name of the plugin.
     * @param {any} pluginInstance - The plugin instance.
     * @returns {void}
     */
    addPlugin: function addPlugin(name, pluginInstance) {
        this.plugins[name] = pluginInstance;

        this.on('ready', pluginInstance.addToPlayer);

        // A swf plugin may rely on resize events
        if (pluginInstance.resize) {
            this.on('resize', pluginInstance.resizeHandler);
        }
    },


    /**
     * Registers a plugin class with the player library.
     * @param {string} name - The name of the plugin.
     * @param {string} minimumVersion - The minimum player version required by the plugin.
     * @param {function} pluginClass - The plugin function or class to instantiate with new player instances.
     * @returns {void}
     */
    registerPlugin: function registerPlugin(name, minimumVersion, pluginClass) {
        (0, _plugins.registerPlugin)(name, minimumVersion, pluginClass);
    },


    /**
     * Checks for the presence of an ad blocker. Implemented by jwplayer-commercial.
     * @returns {boolean} Was an ad blocker is detected?
     */
    getAdBlock: function getAdBlock() {
        return false;
    },


    /**
     * Plays an ad. Implemented by ad plugins.
     * @param {string|Array} adBreak - The ad tag or waterfall array.
     * @returns {void}
     */
    playAd: function playAd(adBreak) {},
    // eslint-disable-line

    /**
     * Pauses or toggles ad playback. Implemented by ad plugins.
     * @param {boolean} toggle - Specifies whether ad playback should be paused or resumed.
     * @returns {void}
     */
    pauseAd: function pauseAd(toggle) {}
} // eslint-disable-line
);

/***/ }),
/* 62 */
/*!******************************!*\
  !*** ./src/js/api/config.js ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _underscore = __webpack_require__(/*! utils/underscore */ 0);

var _underscore2 = _interopRequireDefault(_underscore);

var _playerutils = __webpack_require__(/*! utils/playerutils */ 20);

var _parser = __webpack_require__(/*! utils/parser */ 10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global __webpack_public_path__:true */
/* eslint camelcase: 0 */
// Defaults
// Alphabetical order
var Defaults = {
    autostart: false,
    castAvailable: false,
    controls: true,
    defaultPlaybackRate: 1,
    displaydescription: true,
    displaytitle: true,
    height: 360,
    liveTimeout: null,
    localization: {
        player: 'Video Player',
        play: 'Play',
        playback: 'Start Playback',
        pause: 'Pause',
        volume: 'Volume',
        prev: 'Previous',
        next: 'Next',
        cast: 'Chromecast',
        airplay: 'AirPlay',
        fullscreen: 'Fullscreen',
        playlist: 'Playlist',
        hd: 'Quality',
        cc: 'Closed Captions',
        audioTracks: 'Audio Tracks',
        playbackRates: 'Playback Rates',
        replay: 'Replay',
        buffer: 'Loading',
        more: 'More',
        liveBroadcast: 'Live',
        loadingAd: 'Loading ad',
        rewind: 'Rewind 10 Seconds',
        nextUp: 'Next Up',
        nextUpClose: 'Next Up Close',
        related: 'More Videos',
        close: 'Close',
        settings: 'Settings',
        unmute: 'Unmute',
        copied: 'Copied'
    },
    mute: false,
    nextUpDisplay: true,
    playbackRateControls: false,
    playbackRates: [0.5, 1, 1.25, 1.5, 2],
    renderCaptionsNatively: false,
    repeat: false,
    stretching: 'uniform',
    volume: 90,
    width: 640
};

function _deserialize(options) {
    Object.keys(options).forEach(function (key) {
        if (key === 'id') {
            return;
        }
        options[key] = (0, _parser.serialize)(options[key]);
    });
}

function _normalizeSize(val) {
    if (val.slice && val.slice(-2) === 'px') {
        val = val.slice(0, -2);
    }
    return val;
}

var Config = function Config(options, persisted) {
    var allOptions = _extends({}, (window.jwplayer || {}).defaults, persisted, options);

    _deserialize(allOptions);

    allOptions.localization = _extends({}, Defaults.localization, allOptions.localization);

    var config = _extends({}, Defaults, allOptions);
    if (config.base === '.') {
        config.base = (0, _playerutils.getScriptPath)('jwplayer.js');
    }
    config.base = (config.base || (0, _playerutils.loadFrom)()).replace(/\/?$/, '/');
    __webpack_require__.p = config.base;
    config.width = _normalizeSize(config.width);
    config.height = _normalizeSize(config.height);

    config.aspectratio = _evaluateAspectRatio(config.aspectratio, config.width);

    var rateControls = config.playbackRateControls;

    if (rateControls) {
        var rates = config.playbackRates;

        if (Array.isArray(rateControls)) {
            rates = rateControls;
        }
        rates = rates.filter(function (rate) {
            return _underscore2.default.isNumber(rate) && rate >= 0.25 && rate <= 4;
        }).map(function (rate) {
            return Math.round(rate * 4) / 4;
        });

        if (rates.indexOf(1) < 0) {
            rates.push(1);
        }
        rates.sort();

        config.playbackRateControls = true;
        config.playbackRates = rates;
    }

    // Set defaultPlaybackRate to 1 if the value from storage isn't in the playbackRateControls menu
    if (!config.playbackRateControls || config.playbackRates.indexOf(config.defaultPlaybackRate) < 0) {
        config.defaultPlaybackRate = 1;
    }

    config.playbackRate = config.defaultPlaybackRate;

    if (!config.aspectratio) {
        delete config.aspectratio;
    }

    var configPlaylist = config.playlist;
    if (!configPlaylist) {
        // This is a legacy fallback, assuming a playlist item has been flattened into the config
        var obj = _underscore2.default.pick(config, ['title', 'description', 'type', 'mediaid', 'image', 'file', 'sources', 'tracks', 'preload', 'duration']);

        config.playlist = [obj];
    } else if (Array.isArray(configPlaylist.playlist)) {
        // The "playlist" in the config is actually a feed that contains a playlist
        config.feedData = configPlaylist;
        config.playlist = configPlaylist.playlist;
    }

    config.qualityLabels = config.qualityLabels || config.hlslabels;
    delete config.duration;

    var liveTimeout = config.liveTimeout;
    if (liveTimeout !== null) {
        if ((0, _underscore._isNaN)(liveTimeout) || !(0, _underscore._isNumber)(liveTimeout)) {
            liveTimeout = null;
        } else if (liveTimeout !== 0) {
            liveTimeout = Math.max(30, liveTimeout);
        }
        config.liveTimeout = liveTimeout;
    }

    return config;
};

function _evaluateAspectRatio(ar, width) {
    if (width.toString().indexOf('%') === -1) {
        return 0;
    }
    if (typeof ar !== 'string' || !ar) {
        return 0;
    }
    if (/^\d*\.?\d+%$/.test(ar)) {
        return ar;
    }
    var index = ar.indexOf(':');
    if (index === -1) {
        return 0;
    }
    var w = parseFloat(ar.substr(0, index));
    var h = parseFloat(ar.substr(index + 1));
    if (w <= 0 || h <= 0) {
        return 0;
    }
    return h / w * 100 + '%';
}

exports.default = Config;

/***/ }),
/* 63 */
/*!*****************************!*\
  !*** ./src/js/api/Setup.js ***!
  \*****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _coreLoader = __webpack_require__(/*! api/core-loader */ 12);

var _coreLoader2 = _interopRequireDefault(_coreLoader);

var _setupSteps = __webpack_require__(/*! api/setup-steps */ 70);

var _setupSteps2 = _interopRequireDefault(_setupSteps);

var _plugins = __webpack_require__(/*! plugins/plugins */ 22);

var _plugins2 = _interopRequireDefault(_plugins);

var _promise = __webpack_require__(/*! polyfills/promise */ 4);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SETUP_TIMEOUT_SECONDS = 30;

var Setup = function Setup(_model) {

    var _setupFailureTimeout = void 0;

    this.start = function (api) {

        var setup = _promise2.default.all([(0, _coreLoader2.default)(_model), (0, _setupSteps2.default)(_model), (0, _plugins2.default)(_model, api)]);

        var timeout = new _promise2.default(function (resolve, reject) {
            _setupFailureTimeout = setTimeout(function () {
                reject(new Error('Setup Timeout Error: Setup took longer than ' + SETUP_TIMEOUT_SECONDS + ' seconds to complete.'));
            }, SETUP_TIMEOUT_SECONDS * 1000);
            var timeoutCancelled = function timeoutCancelled() {
                clearTimeout(_setupFailureTimeout);
                resolve();
            };
            setup.then(timeoutCancelled).catch(timeoutCancelled);
        });

        return _promise2.default.race([setup, timeout]);
    };

    this.destroy = function () {
        clearTimeout(_setupFailureTimeout);
        _model = null;
    };
};

exports.default = Setup;

/***/ }),
/* 64 */
/*!**********************************!*\
  !*** ./src/js/playlist/track.js ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * A media source variant present in a playlist item
 * @internal
 * @typedef {object} PlaylistItemTrack
 * @property {'captions'|'subtitles'|'chapters'|'thumbnails'} kind - The kind of track.
 * @property {boolean} default - Enable the track by default.
 */

var Track = function Track(config) {
    // File is the only required attr
    if (!config || !config.file) {
        return;
    }

    return _extends({}, {
        kind: 'captions',
        'default': false
    }, config);
};

exports.default = Track;

/***/ }),
/* 65 */
/*!********************************!*\
  !*** ./src/templates/error.js ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (id) {
    var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var body = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return '<div id="' + id + '" class="jw-error jw-reset">' + '<div class="jw-error-msg jw-reset">' + '<style>' + ('[id="' + id + '"].jw-error{position:relative;background:#000;overflow:hidden;position:relative}') + ('[id="' + id + '"] .jw-error-msg{top:50%;left:50%;position:absolute;align-items:center;display:flex;transform:translate(-50%,-50%)}') + ('[id="' + id + '"] .jw-title{color:#FFF;position:static}') + ('[id="' + id + '"] .jw-title-primary,') + ('[id="' + id + '"] .jw-title-secondary{font:600 14px/1.35 Arial,Helvetica,sans-serif}') + ('[id="' + id + '"] .jw-title-secondary{font-weight:400}') + '</style>' + '<div class="jw-icon jw-reset"></div>' + '<div class="jw-title jw-reset">' + ('<div class="jw-title-primary jw-reset">' + title + '</div>') + ('<div class="jw-title-secondary jw-reset">' + body + '</div>') + '</div>' + '</div>' + '</div>';
};

/***/ }),
/* 66 */
/*!*************************************!*\
  !*** ./src/js/parsers/rssparser.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = parseRss;

var _parsers = __webpack_require__(/*! parsers/parsers */ 13);

var _strings = __webpack_require__(/*! utils/strings */ 1);

var _mediaparser = __webpack_require__(/*! parsers/mediaparser */ 67);

var _mediaparser2 = _interopRequireDefault(_mediaparser);

var _jwparser = __webpack_require__(/*! parsers/jwparser */ 68);

var _jwparser2 = _interopRequireDefault(_jwparser);

var _item = __webpack_require__(/*! playlist/item */ 19);

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Parse an RSS feed and translate it to playlistItems.
*/

function parseRss(dat) {
    var arr = [];
    arr.feedData = {};
    for (var i = 0; i < (0, _parsers.numChildren)(dat); i++) {
        var node = (0, _parsers.getChildNode)(dat, i);
        var name = (0, _parsers.localName)(node).toLowerCase();

        if (name === 'channel') {
            for (var j = 0; j < (0, _parsers.numChildren)(node); j++) {
                var subNode = (0, _parsers.getChildNode)(node, j);
                var nodeName = (0, _parsers.localName)(subNode).toLowerCase();
                if (nodeName === 'item') {
                    arr.push(parseItem(subNode));
                } else if (nodeName) {
                    arr.feedData[nodeName] = (0, _parsers.textContent)(subNode);
                }
            }
        }
    }
    return arr;
}

// Translate RSS item to playlist item.
function parseItem(obj) {
    var item = {};
    for (var i = 0; i < obj.childNodes.length; i++) {
        var node = obj.childNodes[i];
        var name = (0, _parsers.localName)(node);
        if (!name) {
            continue;
        }
        switch (name.toLowerCase()) {
            case 'enclosure':
                item.file = (0, _strings.xmlAttribute)(node, 'url');
                break;
            case 'title':
                item.title = (0, _parsers.textContent)(node);
                break;
            case 'guid':
                item.mediaid = (0, _parsers.textContent)(node);
                break;
            case 'pubdate':
                item.date = (0, _parsers.textContent)(node);
                break;
            case 'description':
                item.description = (0, _parsers.textContent)(node);
                break;
            case 'link':
                item.link = (0, _parsers.textContent)(node);
                break;
            case 'category':
                if (item.tags) {
                    item.tags += (0, _parsers.textContent)(node);
                } else {
                    item.tags = (0, _parsers.textContent)(node);
                }
                break;
            default:
                break;
        }
    }
    return new _item2.default((0, _jwparser2.default)(obj, (0, _mediaparser2.default)(obj, item)));
}

/***/ }),
/* 67 */
/*!***************************************!*\
  !*** ./src/js/parsers/mediaparser.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _parsers = __webpack_require__(/*! parsers/parsers */ 13);

var _strings = __webpack_require__(/*! utils/strings */ 1);

var _helpers = __webpack_require__(/*! utils/helpers */ 6);

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Parse a MRSS group into a playlistitem (used in RSS and ATOM)
 * The 'content' and 'group' elements can nest other MediaRSS elements
 */

var mediaparser = function mediaparser(obj, item) {
    // Prefix for the MRSS namespace
    var PREFIX = 'media';
    var tracks = 'tracks';
    var captions = [];

    function getLabel(code) {
        var LANGS = {
            zh: 'Chinese',
            nl: 'Dutch',
            en: 'English',
            fr: 'French',
            de: 'German',
            it: 'Italian',
            ja: 'Japanese',
            pt: 'Portuguese',
            ru: 'Russian',
            es: 'Spanish'
        };
        if (LANGS[code]) {
            return LANGS[code];
        }
        return code;
    }

    for (var i = 0; i < (0, _parsers.numChildren)(obj); i++) {
        var node = obj.childNodes[i];
        if (node.prefix === PREFIX) {
            if (!(0, _parsers.localName)(node)) {
                continue;
            }
            switch ((0, _parsers.localName)(node).toLowerCase()) {
                case 'content':
                    if ((0, _strings.xmlAttribute)(node, 'duration')) {
                        item.duration = _helpers2.default.seconds((0, _strings.xmlAttribute)(node, 'duration'));
                    }
                    if ((0, _strings.xmlAttribute)(node, 'url')) {
                        if (!item.sources) {
                            item.sources = [];
                        }
                        var sources = {
                            file: (0, _strings.xmlAttribute)(node, 'url'),
                            type: (0, _strings.xmlAttribute)(node, 'type'),
                            width: (0, _strings.xmlAttribute)(node, 'width'),
                            label: (0, _strings.xmlAttribute)(node, 'label')
                        };

                        var mediaTypes = findMediaTypes(node);
                        if (mediaTypes.length) {
                            sources.mediaTypes = mediaTypes;
                        }

                        item.sources.push(sources);
                    }
                    if ((0, _parsers.numChildren)(node) > 0) {
                        item = mediaparser(node, item);
                    }
                    break;
                case 'title':
                    item.title = (0, _parsers.textContent)(node);
                    break;
                case 'description':
                    item.description = (0, _parsers.textContent)(node);
                    break;
                case 'guid':
                    item.mediaid = (0, _parsers.textContent)(node);
                    break;
                case 'thumbnail':
                    if (!item.image) {
                        item.image = (0, _strings.xmlAttribute)(node, 'url');
                    }
                    break;
                case 'group':
                    mediaparser(node, item);
                    break;
                case 'subtitle':
                    var entry = {};
                    entry.file = (0, _strings.xmlAttribute)(node, 'url');
                    entry.kind = 'captions';
                    if ((0, _strings.xmlAttribute)(node, 'lang').length > 0) {
                        entry.label = getLabel((0, _strings.xmlAttribute)(node, 'lang'));
                    }
                    captions.push(entry);
                    break;
                default:
                    break;
            }
        }
    }

    if (!item.hasOwnProperty(tracks)) {
        item[tracks] = [];
    }

    for (var _i = 0; _i < captions.length; _i++) {
        item[tracks].push(captions[_i]);
    }
    return item;
};

function findMediaTypes(contentNode) {
    var mediaTypes = [];

    for (var i = 0; i < (0, _parsers.numChildren)(contentNode); i++) {
        var node = contentNode.childNodes[i];
        if (node.prefix === 'jwplayer' && (0, _parsers.localName)(node).toLowerCase() === 'mediatypes') {
            mediaTypes.push((0, _parsers.textContent)(node));
        }
    }

    return mediaTypes;
}

exports.default = mediaparser;

/***/ }),
/* 68 */
/*!************************************!*\
  !*** ./src/js/parsers/jwparser.js ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _parsers = __webpack_require__(/*! parsers/parsers */ 13);

var _strings = __webpack_require__(/*! utils/strings */ 1);

var _helpers = __webpack_require__(/*! utils/helpers */ 6);

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Parse a feed item for JWPlayer content.
*/

var parseEntry = function parseEntry(obj, itm) {
    var PREFIX = 'jwplayer';
    var def = 'default';
    var label = 'label';
    var file = 'file';
    var type = 'type';
    var sources = [];
    var tracks = [];

    for (var i = 0; i < obj.childNodes.length; i++) {
        var node = obj.childNodes[i];
        if (node.prefix === PREFIX) {
            var _localName = (0, _parsers.localName)(node);
            if (_localName === 'source') {
                delete itm.sources;
                sources.push({
                    file: (0, _strings.xmlAttribute)(node, file),
                    'default': (0, _strings.xmlAttribute)(node, def),
                    label: (0, _strings.xmlAttribute)(node, label),
                    type: (0, _strings.xmlAttribute)(node, type)
                });
            } else if (_localName === 'track') {
                delete itm.tracks;
                tracks.push({
                    file: (0, _strings.xmlAttribute)(node, file),
                    'default': (0, _strings.xmlAttribute)(node, def),
                    kind: (0, _strings.xmlAttribute)(node, 'kind'),
                    label: (0, _strings.xmlAttribute)(node, label)
                });
            } else {
                itm[_localName] = _helpers2.default.serialize((0, _parsers.textContent)(node));
                if (_localName === 'file' && itm.sources) {
                    // jwplayer namespace file should override existing source
                    // (probably set in MediaParser)
                    delete itm.sources;
                }
            }
        }
        if (!itm[file]) {
            itm[file] = itm.link;
        }
    }

    if (sources.length) {
        itm.sources = [];
        for (var _i = 0; _i < sources.length; _i++) {
            if (sources[_i].file.length > 0) {
                sources[_i][def] = sources[_i][def] === 'true';
                if (!sources[_i].label.length) {
                    delete sources[_i].label;
                }
                itm.sources.push(sources[_i]);
            }
        }
    }

    if (tracks.length) {
        itm.tracks = [];
        for (var _i2 = 0; _i2 < tracks.length; _i2++) {
            if (tracks[_i2].file.length > 0) {
                tracks[_i2][def] = tracks[_i2][def] === 'true' ? true : false;
                tracks[_i2].kind = !tracks[_i2].kind.length ? 'captions' : tracks[_i2].kind;
                if (!tracks[_i2].label.length) {
                    delete tracks[_i2].label;
                }
                itm.tracks.push(tracks[_i2]);
            }
        }
    }
    return itm;
};

exports.default = parseEntry;

/***/ }),
/* 69 */
/*!************************************!*\
  !*** ./src/js/playlist/preload.js ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getPreload = getPreload;
var preloadValues = {
    none: true,
    metadata: true,
    auto: true
};

function getPreload(preload, fallback) {
    if (preloadValues[preload]) {
        return preload;
    }
    return preloadValues[fallback] ? fallback : 'metadata';
}

/***/ }),
/* 70 */
/*!***********************************!*\
  !*** ./src/js/api/setup-steps.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadPlaylist = loadPlaylist;

var _events = __webpack_require__(/*! events/events */ 5);

var _promise = __webpack_require__(/*! polyfills/promise */ 4);

var _promise2 = _interopRequireDefault(_promise);

var _loader = __webpack_require__(/*! playlist/loader */ 41);

var _loader2 = _interopRequireDefault(_loader);

var _playlist = __webpack_require__(/*! playlist/playlist */ 42);

var _playlist2 = _interopRequireDefault(_playlist);

var _scriptloader = __webpack_require__(/*! utils/scriptloader */ 31);

var _scriptloader2 = _interopRequireDefault(_scriptloader);

var _coreLoader = __webpack_require__(/*! api/core-loader */ 12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadPlaylist(_model) {
    var playlist = _model.get('playlist');
    if (typeof playlist === 'string') {
        return new _promise2.default(function (resolve, reject) {
            var playlistLoader = new _loader2.default();
            playlistLoader.on(_events.PLAYLIST_LOADED, function (data) {
                var loadedPlaylist = data.playlist;
                delete data.playlist;
                setPlaylistAttributes(_model, loadedPlaylist, data);
                resolve();
            });
            playlistLoader.on(_events.ERROR, function (err) {
                setPlaylistAttributes(_model, [], {});
                reject(new Error('Error loading playlist: ' + err.message));
            });
            playlistLoader.load(playlist);
        });
    }
    var feedData = _model.get('feedData') || {};
    setPlaylistAttributes(_model, playlist, feedData);
    return _promise.resolved;
}

function setPlaylistAttributes(model, playlist, feedData) {
    var attributes = model.attributes;
    attributes.playlist = (0, _playlist2.default)(playlist);
    attributes.feedData = feedData;
}

function loadProvider(_model) {
    return loadPlaylist(_model).then(function () {
        if (destroyed(_model)) {
            return;
        }

        // Loads the first provider if not included in the core bundle
        // A provider loaded this way will not be set upon completion
        var playlist = (0, _playlist.filterPlaylist)(_model.get('playlist'), _model);

        // Throw exception if playlist is empty
        (0, _playlist.validatePlaylist)(playlist);

        var providersManager = _model.getProviders();

        var _providersManager$cho = providersManager.choose(playlist[0].sources[0]),
            name = _providersManager$cho.name,
            provider = _providersManager$cho.provider;
        // Skip provider loading if included in bundle


        if (_coreLoader.bundleContainsProviders.html5 && provider && name === 'html5') {
            return;
        }
        return providersManager.load(name);
    });
}

function isSkinLoaded(skinPath) {
    var ss = document.styleSheets;
    for (var i = 0, max = ss.length; i < max; i++) {
        if (ss[i].href === skinPath) {
            return true;
        }
    }
    return false;
}

function loadSkin(_model) {
    var skinUrl = _model.get('skin') ? _model.get('skin').url : undefined;
    if (typeof skinUrl === 'string' && !isSkinLoaded(skinUrl)) {
        var isStylesheet = true;
        var loader = new _scriptloader2.default(skinUrl, isStylesheet);
        return loader.load().catch(function (error) {
            return error;
        });
    }
    return _promise.resolved;
}

function destroyed(_model) {
    return _model.attributes._destroyed;
}

var startSetup = function startSetup(_model) {
    if (destroyed(_model)) {
        return _promise2.default.reject();
    }
    return _promise2.default.all([loadProvider(_model), loadSkin(_model)]);
};

exports.default = startSetup;

/***/ }),
/* 71 */
/*!*********************************!*\
  !*** ./src/js/model/storage.js ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _parser = __webpack_require__(/*! utils/parser */ 10);

var _apiSettings = __webpack_require__(/*! api/api-settings */ 16);

var _apiSettings2 = _interopRequireDefault(_apiSettings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storage = {
    removeItem: function removeItem() {}
};

try {
    storage = window.localStorage || storage;
} catch (e) {/* ignore */}

function Storage(namespace, persistItems) {
    this.namespace = namespace;
    this.items = persistItems;
}

_extends(Storage.prototype, {
    getAllItems: function getAllItems() {
        var _this = this;

        return this.items.reduce(function (memo, key) {
            var val = storage[_this.namespace + '.' + key];
            if (val) {
                memo[key] = (0, _parser.serialize)(val);
            }
            return memo;
        }, {});
    },
    track: function track(model) {
        var _this2 = this;

        this.items.forEach(function (key) {
            model.on('change:' + key, function (changeModel, value) {
                try {
                    storage[_this2.namespace + '.' + key] = value;
                } catch (e) {
                    // ignore QuotaExceededError unless debugging
                    if (_apiSettings2.default.debug) {
                        console.error(e);
                    }
                }
            });
        });
    },
    clear: function clear() {
        var _this3 = this;

        this.items.forEach(function (key) {
            storage.removeItem(_this3.namespace + '.' + key);
        });
    }
});

exports.default = Storage;

/***/ }),
/* 72 */
/*!**********************************************!*\
  !*** ./src/js/program/media-element-pool.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = MediaElementPool;

var _programConstants = __webpack_require__(/*! program/program-constants */ 36);

var _environment = __webpack_require__(/*! environment/environment */ 11);

function MediaElementPool() {
    var maxPrimedTags = _programConstants.MEDIA_POOL_SIZE;
    var elements = [];
    var pool = [];
    for (var i = 0; i < maxPrimedTags; i++) {
        var mediaElement = createMediaElement();
        elements.push(mediaElement);
        pool.push(mediaElement);
    }

    // Reserve an element exclusively for ads
    var adElement = pool.shift();

    // Reserve an element exclusively for feature testing.
    var testElement = pool.shift();

    return {
        prime: function prime() {
            elements.forEach(primeMediaElementForPlayback);
        },
        getPrimedElement: function getPrimedElement() {
            if (pool.length) {
                // Shift over pop so that we cycle through elements instead of reusing the same one
                return pool.shift();
            }
            return null;
        },
        getAdElement: function getAdElement() {
            return adElement;
        },
        getTestElement: function getTestElement() {
            return testElement;
        },
        clean: function clean(mediaElement) {
            // Try to clean the media element so that we don't see frames of the previous video when reusing a tag
            // We don't want to call load again if the media element is already clean
            if (!mediaElement.src) {
                return;
            }

            mediaElement.removeAttribute('src');
            try {
                mediaElement.load();
            } catch (e) {
                // Calling load may throw an exception, but does not result in an error state
            }
        },
        recycle: function recycle(mediaElement) {
            if (mediaElement && !pool.some(function (element) {
                return element === mediaElement;
            })) {
                this.clean(mediaElement);
                pool.push(mediaElement);
            }
        },

        syncVolume: function syncVolume(volume) {
            elements.forEach(function (e) {
                e.volume = volume / 100;
            });
        },
        syncMute: function syncMute(muted) {
            elements.forEach(function (e) {
                e.muted = muted;
            });
        }
    };
}

function primeMediaElementForPlayback(mediaElement) {
    // If we're in a user-gesture event call load() on video to allow async playback
    if (!mediaElement.src) {
        mediaElement.load();
    } else if (_environment.OS.android && !mediaElement.parentNode) {
        // If the player sets up without a gesture and preloads, the background tag may not be primed for playback.
        // We need to load again on Android in order to play without another gesture. But make sure we're only reloading
        // a tag which hasn't begun playback yet
        var played = mediaElement.played;
        if (!played || played && !played.length) {
            mediaElement.load();
        }
    }
}

function createMediaElement() {
    var mediaElement = document.createElement('video');

    mediaElement.className = 'jw-video jw-reset';
    mediaElement.setAttribute('disableRemotePlayback', '');
    mediaElement.setAttribute('webkit-playsinline', '');
    mediaElement.setAttribute('playsinline', '');

    return mediaElement;
}

/***/ })
/******/ ])["default"];
//# sourceMappingURL=jwplayer.f82a441d96b8dc3242ba.map
