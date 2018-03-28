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
webpackJsonpjwplayer([8],{81:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.requestAnimationFrame=window.requestAnimationFrame||function(e){return setTimeout(e,17)},t.cancelAnimationFrame=window.cancelAnimationFrame||clearTimeout},97:function(e,t,r){"use strict";function n(){return{decode:function(e){if(!e)return"";if("string"!=typeof e)throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(e))}}}function i(e){function t(e,t,r,n){return 3600*(0|e)+60*(0|t)+(0|r)+(0|n)/1e3}var r=e.match(f);return r?r[3]?t(r[1],r[2],r[3].replace(":",""),r[4]):r[1]>59?t(r[1],r[2],0,r[4]):t(0,r[1],r[2],r[4]):null}function a(){this.values=Object.create(null)}function s(e,t,r,n){for(var i=n?e.split(n):[e],a=0;a<=i.length;a+=1)if("string"==typeof i[a]){var s=i[a].split(r);if(2===s.length){var u=s[0],o=s[1];t(u,o)}}}function u(e,t,r){function n(){var t=i(e);if(null===t)throw new Error("Malformed timestamp: "+o);return e=e.replace(p,""),t}function u(){e=e.replace(v,"")}var o=e;if(u(),t.startTime=n(),u(),"--\x3e"!==e.substr(0,3))throw new Error("Malformed time stamp (time stamps must be separated by '--\x3e'): "+o);e=e.substr(3),u(),t.endTime=n(),u(),function(e,t){var n=new a;s(e,function(e,t){switch(e){case"region":for(var i=r.length-1;i>=0;i--)if(r[i].id===t){n.set(e,r[i].region);break}break;case"vertical":n.alt(e,t,["rl","lr"]);break;case"line":var a=t.split(","),s=a[0];n.integer(e,s),n.percent(e,s)&&n.set("snapToLines",!1),n.alt(e,s,["auto"]),2===a.length&&n.alt("lineAlign",a[1],["start",I,"end"]);break;case"position":var u=t.split(",");n.percent(e,u[0]),2===u.length&&n.alt("positionAlign",u[1],["start",I,"end","line-left","line-right","auto"]);break;case"size":n.percent(e,t);break;case"align":n.alt(e,t,["start",I,"end","left","right"])}},b,m),t.region=n.get("region",null),t.vertical=n.get("vertical","");var i=n.get("line","auto");"auto"===i&&-1===A.line&&(i=-1),t.line=i,t.lineAlign=n.get("lineAlign","start"),t.snapToLines=n.get("snapToLines",!0),t.size=n.get("size",100),t.align=n.get("align",I);var u=n.get("position","auto");"auto"===u&&50===A.position&&(u="start"===t.align||"left"===t.align?0:"end"===t.align||"right"===t.align?100:50),t.position=u}(e,t)}Object.defineProperty(t,"__esModule",{value:!0});var o=r(81),c=r(96),l=function(e){return e&&e.__esModule?e:{default:e}}(c),f=/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/,h=/^-?\d+$/,d=/\r\n|\n/,g=/^NOTE($|[ \t])/,p=/^[^\sa-zA-Z-]+/,b=/:/,m=/\s/,v=/^\s+/,E=/-->/,T=/^WEBVTT([ \t].*)?$/,w=function(e,t){this.window=e,this.state="INITIAL",this.buffer="",this.decoder=t||new n,this.regionList=[],this.maxCueBatch=1e3};a.prototype={set:function(e,t){this.get(e)||""===t||(this.values[e]=t)},get:function(e,t,r){return r?this.has(e)?this.values[e]:t[r]:this.has(e)?this.values[e]:t},has:function(e){return e in this.values},alt:function(e,t,r){for(var n=0;n<r.length;++n)if(t===r[n]){this.set(e,t);break}},integer:function(e,t){h.test(t)&&this.set(e,parseInt(t,10))},percent:function(e,t){return(t=parseFloat(t))>=0&&t<=100&&(this.set(e,t),!0)}};var A=new l.default(0,0,0),I="middle"===A.align?"middle":"center";w.prototype={parse:function(e,t){function r(){for(var e=a.buffer,t=0;t<e.length&&"\r"!==e[t]&&"\n"!==e[t];)++t;var r=e.substr(0,t);return"\r"===e[t]&&++t,"\n"===e[t]&&++t,a.buffer=e.substr(t),r}function n(){"CUETEXT"===a.state&&a.cue&&a.oncue&&a.oncue(a.cue),a.cue=null,a.state="INITIAL"===a.state?"BADWEBVTT":"BADCUE"}function i(){try{for(;a.buffer&&h<=a.maxCueBatch;){if(!d.test(a.buffer))return a.flush(),this;switch(f?f=!1:s=r(),a.state){case"HEADER":b.test(s)||s||(a.state="ID");break;case"NOTE":s||(a.state="ID");break;case"ID":if(g.test(s)){a.state="NOTE";break}if(!s)break;if(a.cue=new l.default(0,0,""),a.state="CUE",!E.test(s)){a.cue.id=s;break}case"CUE":try{u(s,a.cue,a.regionList)}catch(e){a.cue=null,a.state="BADCUE";break}a.state="CUETEXT";break;case"CUETEXT":var e=E.test(s);if(!s||e&&(f=!0)){a.oncue&&(h+=1,a.oncue(a.cue)),a.cue=null,a.state="ID";break}a.cue.text&&(a.cue.text+="\n"),a.cue.text+=s;break;case"BADCUE":s||(a.state="ID")}}if(h=0,a.buffer)(0,o.requestAnimationFrame)(i);else if(!t)return a.flush(),this}catch(e){return n(e),this}}var a=this;e&&(a.buffer+=a.decoder.decode(e,{stream:!0}));try{var s;if("INITIAL"===a.state){if(!d.test(a.buffer))return this;s=r();var c=s.match(T);if(!c||!c[0])throw new Error("Malformed WebVTT signature.");a.state="HEADER"}}catch(e){return n(),this}var f=!1,h=0;i()},flush:function(){var e=this;try{if(e.buffer+=e.decoder.decode(),(e.cue||"HEADER"===e.state)&&(e.buffer+="\n\n",e.parse(void 0,!0)),"INITIAL"===e.state)throw new Error("Malformed WebVTT signature.")}catch(e){throw e}return e.onflush&&e.onflush(),this}},t.default=w}});