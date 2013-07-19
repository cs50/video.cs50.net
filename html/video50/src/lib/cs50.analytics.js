// maintain compatibility with other CS50 libraries
var CS50 = CS50 || {};

/**
 *  CS50 Analytics constructor
 *
 *  @param options logger options:
 */
CS50.Analytics = function(options, production) {

    // validate options
    if (typeof(options) !== 'object') {
        throw new Error('options must be an object');
    }
    this.options = options;

    // validate production
    if (typeof(production) !== 'undefined' && typeof(production) !== 'boolean') {
        throw new Error('production must be a boolean or undefined');
    }
    this.production = production;

    // initialize KISSmetrics
    // https://www.kissmetrics.com/settings
    if (typeof(this.options.kissmetrics) === 'string') {
        window._kmq = window._kmq || [];
        var _kmk = _kmk || 'd8d4e058ea39908f3c18833b968b920b601acf3d';
        function _kms(u){
          setTimeout(function(){
            var d = document, f = d.getElementsByTagName('script')[0],
            s = d.createElement('script');
            s.type = 'text/javascript'; s.async = true; s.src = u;
            f.parentNode.insertBefore(s, f);
          }, 1);
        }
        _kms('//i.kissmetrics.com/i.js');
        _kms('//doug1izaerwt3.cloudfront.net/' + _kmk + '.1.js');
    }

    // initialize Mixpanel
    // https://mixpanel.com/docs/integration-libraries/javascript
    if (typeof(this.options.mixpanel) === 'object' && typeof(this.options.mixpanel.token) === 'string') {
        (function(c,a){window.mixpanel=a;var b,d,h,e;b=c.createElement("script");
            b.type="text/javascript";b.async=!0;b.src=("https:"===c.location.protocol?"https:":"http:")+
            '//cdn.mxpnl.com/libs/mixpanel-2.1.min.js';d=c.getElementsByTagName("script")[0];
            d.parentNode.insertBefore(b,d);a._i=[];a.init=function(b,c,f){function d(a,b){
            var c=b.split(".");2==c.length&&(a=a[c[0]],b=c[1]);a[b]=function(){a.push([b].concat(
            Array.prototype.slice.call(arguments,0)))}}var g=a;"undefined"!==typeof f?g=a[f]=[]:
            f="mixpanel";g.people=g.people||[];h=['disable','track','track_pageview','track_links',
            'track_forms','register','register_once','unregister','identify','name_tag',
            'set_config','people.identify','people.set','people.increment'];for(e=0;e<h.length;e++)d(g,h[e]);
            a._i.push([b,c,f])};a.__SV=1.1;})(document,window.mixpanel||[]);
        if (this.production === true) {
            mixpanel.init(this.options.mixpanel.token); // production token
        }
        else {
            mixpanel.init('49c79a74811ced39cdb8f8433861ec2f'); // test token
        }
    }
};

/**
 * Identify a user with a unique ID.  All subsequent events sent by this user
 * will be tied to the new identity. If this method is not called, unique users
 * will be identified by a UUID generated the first time they visit your site.
 *
 * @see https://mixpanel.com/docs/integration-libraries/javascript-full-api#identify
 *
 * @param unique_id string
 */
CS50.Analytics.prototype.identify = function(unique_id) {
    if (typeof(_kmq) !== 'undefined') {
        _kmq.push(['identify', unique_id]);
    }
    if (typeof(mixpanel) !== 'undefined') {
        mixpanel.identify(unique_id);
    }
};

/**
 * Set a human-readable name for the user to be displayed in the Streams interface.
 * Name tags do not have to be unique. Name tags will update once at least on event
 * is set subsiquent to using this method. 
 *
 * @see https://mixpanel.com/docs/integration-libraries/javascript-full-api#name_tag
 *
 * @param name string 
 */
CS50.Analytics.prototype.name_tag = function(name) {
    if (typeof(mixpanel) !== 'undefined') {
        mixpanel.name_tag(name);
    }
};

/**
 * Store a persistent set of properties for a user (i.e. super properties).  These
 * properties are automatically included with all events sent by the user.
 * 
 * @see https://mixpanel.com/docs/integration-libraries/javascript-full-api#register
 *
 * @param properties object
 */
CS50.Analytics.prototype.register = function(properties) {
    if (typeof(_kmq) !== 'undefined') {
        _kmq.push(['set', properties]);
    }
    if (typeof(mixpanel) !== 'undefined') {
        mixpanel.register(properties);
    }
};

/**
 * Track an event caused by a user. 
 *
 * @see https://mixpanel.com/docs/integration-libraries/javascript-full-api#track
 * 
 * @param event_name string
 * @param properties object
 */
CS50.Analytics.prototype.track = function(event_name, properties) {
    if (typeof(_kmq) !== 'undefined') {
        _kmq.push(['record', event_name, properties]);
    }
    if (typeof(mixpanel) !== 'undefined') {
        mixpanel.track(event_name, properties);
    }
};

/**
 * Track clicks on a set of links defined by a selector (a normal CSS selector,
 * not jQuery style class or logical selectors).  Note the CSS selector that you
 * specify must be present on the page. Including references to absent selectors
 * will cause an error.
 *
 * @see https://mixpanel.com/docs/integration-libraries/javascript-full-api#track_links
 *
 * @param css_selector string
 * @param event_name string
 */
CS50.Analytics.prototype.track_links = function(css_selector, event_name) {
    // TODO: KISSmetrics only supports CSS IDs and class selectors (or reference
    // to DOM element); need to use jQuery to resolve css_selector to an array
    // of DOM elements, then iteratively call trackClick on each;
    // TODO: add support for trackClickOnOutboundLink, per 
    // https://support.kissmetrics.com/apis/javascript/javascript-specific?
    if (typeof(_kmq) !== 'undefined') {
        _kmq.push(['trackClick', css_selector, event_name]);
    }
    if (typeof(mixpanel) !== 'undefined') {
        mixpanel.track_links(css_selector, event_name);
    }
};
