// compatibility with CS50 libraries
var CS50 = CS50 || {};

/*
 * Constructor for CS50 Video library.
 *
 * @param playerContainer CSS selector specifying which boxes to place player into
 * @param options Object Video50 options:
 *      aspectRatio: float, aspect ratio for a single video
 *      download: object, maps download name to video download urls
 *      onReady: function, function to call when player is finished loading
 *      numVideos: int, the number of video screens to show
 *      playbackRates: array of floats, supported playback rates
 *      playerContainer: string, CSS selector of the desired element
 *      captions: object, maps language abbreviation to URLs of SRT files
 *      title: string title of the video
 *      video: string for single video, or 
 *             object that maps bitrate to a single video source's URL, or
 *             object that maps bitrate to an array of video URLs, if the videos are not concatenated. 
 *
 */
CS50.Video = function(playerContainer, options) {
    var me = this;
    this.options = options;

    // required options must be defined
    if (!playerContainer)
        throw 'Error: You must define a container for CS50 Video!';
    if (!me.options.sources)
        throw 'Error: You must define a video for CS50 Video to play!';

    // save selector
    me.playerContainer = playerContainer;

    // if an object supplied just turn it into an array of one object
    if (!(me.options.sources instanceof Array)) {
       me.options.sources = [me.options.sources] 
    }

    // fill in default values for optional, undefined values
    me.options = $.extend({
        playbackRates: [0.7, 1, 1.2, 1.5],
        title: '',
    }, me.options);
    
    // add jquery uppercase contains
    jQuery.expr[':'].Contains = function(a, i, m) {
        return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
    };
    
    // private member variable for template structure
    var templateHtml = {
        player: ' \
            <div class="video50-wrapper" tabindex="1"> \
                <div class="video50-videos-wrapper"> \
                    <%= playerHTML %> \
                </div> \
            </div> \
        ',

        // for synced individual <video> tags
        playerVideo: ' \
            <% // parse into a more loopable format %> \
            <% \
                var angles = []; \
                _.each(source.source, function(format, i) { \
                    if (format.src instanceof Array) { \
                        _.each(format.src, function(path, j) { \
                            var entry = { path: path, type: format.type }; \
                            if (angles[j] === undefined) \
                                angles[j] = [entry]; \
                            else \
                                angles[j].push(entry); \
                        }); \
                    } \
                    else { \
                        var entry = { path: format.src, type: format.type }; \
                        if (angles[0] === undefined) \
                            angles[0] = [entry]; \
                        else \
                            angles[0].push(entry); \
                    } \
                }); \
            %> \
            <div class="video50-left"> \
              <div class="video50-main-video-wrapper"> \
                <video class="video50-source-video video50-video" data-segment="0"> \
                <% _.each(angles.shift(), function(format, i) { %> \
                    <source src="<%- format.path %>" type="<%- format.type %>"></source> \
                <% }); %> \
                </video> \
                <div class="video50-cc-container"> \
                    <div class="video50-cc-text"></div> \
                </div> \
              </div> \
            </div> \
            <div class="video50-dragger">  \
                <div class="video50-dragger-knob"></div> \
            </div> \
            <div class="video50-right"> \
              <div class="video50-ancilliary-videos"> \
                <% for (var i = 0; i < angles.length; i++) { %> \
                    <video class="video50-video" data-segment="<%= i + 1 %>"> \
                    <% _.each(angles[i], function(format, j) { %> \
                        <source src="<%- format.path %>" type="<%- format.type %>"></source> \
                    <% }); %> \
                    </video> \
                <% } %> \
              </div> \
            </div> \
        ',
        
        // for synced individual jwplayer instances
        playerFlash: ' \
            <div class="video50-left"> \
              <div class="video50-main-video-wrapper"> \
                <div class="video50-source-video video50-flash-wrapper video50-video" data-segment="0"> \
                    <% // XXX: GENERATE A RANDOM ID %> \
                    <div id="a" class="video50-flash" data-src="<%- source.source[0].src %>"></div> \
                </div> \
                <div class="video50-cc-container"> \
                    <div class="video50-cc-text"></div> \
                </div> \
              </div> \
            </div> \
        ',
        
        playerControls: ' \
            <div class="video50-control-bar"> \
              <div class="video50-left-controls"> \
                <div class="video50-play-pause-control video50-control-icon pause"> \
                </div><div class="video50-sb-control video50-control-icon"> \
                </div><div class="video50-sf-control video50-control-icon"> \
                </div> \
              </div> \
              <div class="video50-time"> \
                <div class="video50-timecode">-:--:--</div> \
                <div class="video50-timeline-wrapper"> \
                    <div class="video50-thumbnail-wrapper"> \
                        <div class="video50-thumbnail"></div> \
                    </div> \
                    <div class="video50-timeline"><div class="video50-progress"></div></div> \
                </div> \
                <div class="video50-timelength">-:--:--</div> \
              </div> \
              <div class="video50-right-controls"> \
                <div class="video50-speed-control video50-control-icon video50-control-toggle"><div class="video50-curspeed">1x</div> \
                    <ul class="video50-speed-container video50-control-list video50-control-togglee"> \
                    <% _.each(playbackRates, function(rate, i) { %> \
                            <li class="video50-speed<%- rate == 1 ? " active" : "" %>" data-rate="<%- rate %>"><%- rate %>x</li> \
                    <% }) %> \
                    </ul> \
                </div><div class="video50-quality-control video50-control-icon video50-control-toggle"><div class="video50-curquality"></div> \
                    <ul class="video50-quality-container video50-control-list video50-control-togglee"> \
                        <% _.each(singleStreamSources, function(source, i) { %> \
                            <li class="video50-quality<%- (source.video50_supported) ? "" : " video50-disabled" %><%- ((dss && source["default"]) || (!dss && source.first)) ? " active" : "" %>" data-index="<%- source.video50_index %>"> \
                                <%- source.label %> \
                            </li> \
                        <% }) %> \
                        <% _.each(multiStreamSources, function(source, i) { %> \
                            <li class="video50-quality<%- (source.video50_supported) ? "" : " video50-disabled" %><%- ((dss && source["default"]) || (!dss && source.first)) ? " active" : "" %>" data-index="<%- source.video50_index %>"> \
                                <%- source.label %> \
                            </li> \
                        <% }) %> \
                    </ul> \
                </div><div class="video50-fullscreen-control video50-control-icon"> \
                </div><div class="video50-control-divider"> \
                </div><div class="video50-download-control video50-control-icon video50-control-toggle"> \
                    <ul class="video50-download-container video50-control-list video50-control-togglee"> \
                    <% _.each(downloads, function(download, i) { %> \
                        <li class="video50-download"> \
                            <a href="<%- download.src %>"> \
                                <%- download.label %> \
                            </a> \
                        </li> \
                    <% }); %> \
                    </ul> \
                </div><div class="video50-captions-control video50-control-icon video50-control-toggle"> \
                    <ul class="video50-captions-container video50-control-list video50-control-togglee"> \
                        <li class="video50-caption" data-lang="">Off</li> \
                    <% _.each(captions, function(caption, i) { %> \
                        <li class="video50-caption<%- caption["default"] ? " active" : ""  %>" data-lang="<%- caption.srclang %>"> \
                            <%- CS50.Video.Languages[caption.srclang] || "Unknown Language" %> \
                        </li> \
                    <% }) %> \
                    </ul> \
                </div><div class="video50-transcript-control video50-control-toggle video50-control-icon video50-transcript-toggle"> \
                    <div class="video50-transcript-container-wrapper video50-control-togglee"> \
                        <div class="video50-transcript-search-wrapper"> \
                            <div class="video50-transcript-popout video50-transcript-icon"></div> \
                            <div class="video50-transcript-download video50-transcript-icon"></div> \
                            <input class="video50-transcript-search" type="text" placeholder="Search Transcript"/> \
                            <div class="video50-transcript-cancel"></div> \
                        </div> \
                        <div class="video50-transcript-container"></div> \
                    </div> \
                </div> \
              </div> \
            </div> \
        ',

        playerError: '\
            <div class="video50-error-wrapper"> \
                <div class="video50-error"><%= error %></div> \
            </div> \
        ',

        supportTooltip: '\
            <div class="video50-support-tooltip"> \
                <%= supportPlayback({ source: source }) %> \
            </div> \
        ',

        supportPlayback: '\
            <% \
                var support = { \
                    "video/mp4"   : ["IE", "Chrome", "Safari"], \
                    "video/x-flv" : ["Flash"], \
                    "video/webm"  : ["Chrome", "Firefox", "Opera"], \
                    "video/ogg"   : ["Chrome", "Firefox", "Opera"] \
                }; \
                \
                var numSupport = 0; \
                var flashonly = true; \
                var supportlist = { Chrome: 0, Firefox: 0, Safari: 0, Opera: 0, IE:0, Flash: 0 }; \
                _.each(source.source, function(video, j) { \
                    _.each(support[video.type], function(browser, j) { \
                        if (supportlist[browser] != 1) { \
                            supportlist[browser] = 1; \
                            numSupport++; \
                        } \
                        \
                        if (browser != "flash") \
                            flashonly = false; \
                    }); \
                }); \
                \
            %> \
            <% if (!flashonly) { %> \
                Your browser version does not support this video format. The latest version of these browsers or plugins do: \
                <% var soFar = 0; %><% _.each(supportlist, function(count, browser) { %> \
                    <% if (count > 0) { %> \
                        <% soFar++; %> \
                        <a target="_blank" href="https://www.google.com/search?q=<%- encodeURIComponent(browser + "download latest version") %>"><%- browser %></a><%= (soFar !== numSupport) ? "," : "." %> \
                    <% } %> \
                <% }); %> \
            <% } else { %> \
                This video requires <a target="_blank" href="https://www.google.com/search?q=<%- encodeURIComponent("Adobe Flash download latest version") %>">Adobe Flash.</a> \
            <% } %> \
        ',

        supportedBrowsers: ' \
            <% \
                var support = { \
                    "video/mp4"   : ["IE", "Chrome", "Safari"], \
                    "video/x-flv" : ["Flash"], \
                    "video/webm"  : ["Chrome", "Firefox", "Opera"], \
                    "video/ogg"   : ["Chrome", "Firefox", "Opera"] \
                }; \
                \
                var browserCount = { Chrome: 0, Firefox: 0, Safari: 0, Opera: 0, IE:0, Flash: 0 }; \
                _.each(sources, function(source, i) { \
                    var counted = { Chrome: 0, Firefox: 0, Safari: 0, Opera: 0, IE:0, Flash: 0 }; \
                    _.each(source.source, function(video, j) { \
                        _.each(support[video.type], function(browser, j) { \
                            if (!counted[browser]) { \
                                browserCount[browser]++; \
                                counted[browser] = 1; \
                            } \
                        }); \
                    }); \
                }); \
                \
                var sortedCount = _.keys(browserCount).sort(function(a, b) { \
                    return browserCount[b] - browserCount[a]; \
                }); \
            %> \
            <ul class="video50-supported-browsers"> \
                <% _.each(sortedCount, function(browser, index) { %> \
                    <% var count = browserCount[browser]; %> \
                    <li class="video50-browser-icon video50-<%- browser.toLowerCase() %>"> \
                        <% var query = browser + " download latest version"; %> \
                        <% var ratio = count/sources.length; %> \
                        <% var quality = (ratio < 1) ? (ratio < .5) ? "red" : "yellow" : "green"; %> \
                        <a target="_blank" href="https://www.google.com/search?q=<%- encodeURIComponent(query) %>"></a> \
                        <% if (tooltip) { %> \
                            <div class="video50-browser-tooltip video50-<%- quality %>"> \
                                <%- browser %> supports <br><%- count %> of <%- sources.length %> videos. \
                            </div> \
                        <% } %> \
                    </li> \
                <% }); %> \
            </ul> \
        '
    };
    
    // compile templates with underscore, expose templates to prototype functions
    this.templates = {};
    for (var template in templateHtml) {
        this.templates[template] = _.template(templateHtml[template]);
    }
    
    // detect compatibility for various video types
    var testEl = document.createElement("video");
    me.supportsHTML5 = (testEl.canPlayType !== undefined);
    if (me.supportsHTML5) {
        me.supportsMP4 = "" !== (testEl.canPlayType('video/mp4; codecs="mp4v.20.8"') ||
                  testEl.canPlayType('video/mp4; codecs="avc1.42E01E"') ||
                  testEl.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"'));
        me.supportsWebM = "" !== testEl.canPlayType('video/webm; codecs="vp8, vorbis"');
    
        // Check for Ogg support
        me.supportsOgg = "" !== testEl.canPlayType( 'video/ogg; codecs="theora"' );
    }

    me.supportsFlash = false;
    try {
        var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
        if (fo) me.supportsFlash = true;
    }
    catch(e){
        if (navigator.mimeTypes ["application/x-shockwave-flash"] != undefined) me.supportsFlash = true;
    }
    
    // parse the sources argument to determine which are multistream and which are single stream
    // further determine the default source, and mark whether each source is supported by the browser
    me.sources = [];
    me.multiStreamSources = [];
    me.singleStreamSources = [];
    me.currentSource = undefined;

    $.each(me.options.sources, function(i, source) {  
        // check if the required keys are supplied, correctly
        if (!(source.source && source.source instanceof Array)) {
            throw 'Video source with label' + (source.label || 'undefined') + 'incorrectly defined. Check that you have a "source" key, and that the value of the key is an array.';
        }

        // mark a source as supported or unsupported
        if (me.supportsSource(source)) {
            source.video50_supported = true;            
        }
        else {
            source.video50_supported = false;
        }

        // detect default video, or first supported video if no default video specified
        if (source["default"] && source.video50_supported) {
            me.currentSource = source;
            me.defaultSourceSupported = true;
        }
        else if (me.currentSource === undefined && source.video50_supported) { 
            me.currentSource = source;
            source.first = true;
        }

        // push updated object into sources
        me.sources.push(source);

        // at least one src key must be defined, then determine if single or multistream
        if (source.source[0] && source.source[0].src) {
            source.video50_index = i;
            if (source.source[0].src instanceof Array)
                me.multiStreamSources.push(source);
            else
                me.singleStreamSources.push(source);
        } 
        else {
            throw 'Video source with label' + (source.label || 'undefined') 
                +  'incorrectly defined. Array must have at least one entry with a src key.'
        }
    });
   
    // user that they must use a better browser by this point, if nothing works
    if (me.currentSource === undefined) {
        $(me.playerContainer).html(me.templates.playerError({
            error: "<h1>Sorry, none of our video formats are supported by your browser version.</h1><h1>Try the latest version of these browsers instead.</h1>" +
                me.templates.supportedBrowsers({ tooltip: true, sources: me.sources })
        }));
        return;
    }
    else {
        // parse languages into a keyed format for fast access
        me.keyedCaptions = {};
        $.each(me.options.captions, function(i, caption) {
            me.keyedCaptions[caption.srclang] = caption;
             
            // store default caption
            if (caption["default"])
                me.defaultCaption = caption.srclang;
        });

        this.createPlayer();
    }
};

/*
 *  Returns whether a source is supported by this browser
 * 
 *  @param returns a source object.
 */
CS50.Video.prototype.supportsSource = function(source) {
    var me = this;

    // must at least support html5 to support multistream
    if (source.source[0].src instanceof Array && !me.supportsHTML5)
        return false;
    // else, if any one of the source's video types is supported, then it works
    for (var j = 0; j < source.source.length; j++) {
        switch (source.source[j].type) {
            case "video/mp4":
                if ((me.supportsHTML5 && me.supportsMP4) || me.supportsFlash)
                    return true;
                break;
            case "video/webm":
                if (me.supportsHTML5 && me.supportsWebM)
                    return true;
                break;
            case "video/ogg":
                if (me.supportsHTML5 && me.supportsOgg)
                    return true;
                break;
            case "video/x-flv":
                if (me.supportsFlash)
                    return true;
                break;
        }
    }

    return false;
}


/*
 *  Creates a new instance of the player in the specified container.
 * 
 *  @param state optional prior state of player to restore, if it exists.
 */
CS50.Video.prototype.createPlayer = function(state) {
    var me = this;
    var $container = $(me.playerContainer);
    
    // clear out old containers 
    if (me.first === undefined) 
        $container.empty();

    // XXX: factor function that determines what type of player to instantiate
    me.mode = me.supportsHTML5 ? "video" : "flash";
    me.fullmode = !(me.currentSource.source[0].src instanceof Array);

    // grab HTML for the player area
    var playerHTML;
    switch (me.mode) {
        case "video":
            playerHTML = me.templates.playerVideo({
                source: me.currentSource
            });
            break;
        case "flash":
            playerHTML = me.templates.playerFlash({
                source: me.currentSource    
            });
            break;
    }
        
    // load VTT for thumbnails, load caption
    me.loadThumbnails();
    me.loadCC(me.defaultCaption);
    me.loadTranscript(me.defaultCaption);
    
    // don't re-execute on a quality change to avoid rebuilding a large bulk of the DOM
    if (me.first === undefined) {
        // construct the actual player, swap the container to a tighter scope
        $container = $container.html(me.templates.player({
            source: me.currentSource,    
            playerHTML: playerHTML
        })).find('.video50-wrapper');

        // attach the control bar to the player
        $container.append(me.templates.playerControls({
            playbackRates: me.options.playbackRates,
            downloads: me.options.downloads,
            captions: me.options.captions,
            supportsMP4: me.supportsMP4,
            supportsWebM: me.supportsWebM,
            multiStreamSources: me.multiStreamSources,
            singleStreamSources: me.singleStreamSources,
            supportPlayback: me.templates.supportPlayback,
            dss: me.defaultSourceSupported
        }));
        me.first = true;
    } 
    else {
        // detach all previous handlers on the video area
        // detach all previous handlers on the controlbar
        // detach all previous handlers on the window
        $container.off('.video50');
        $(window).off('.video50');

        // XXX: turn off flash events (XXX: do we have to properly destroy jwplayer instances??)
        // clear any request animation frame syncs
        var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame ||
                                   window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;

        if (cancelAnimationFrame)
            cancelAnimationFrame(me.syncTimer);
        else
            clearTimeout(me.syncTimer);
        
        // only swap out the part of the DOM related to the videos
        $container.find('.video50-videos-wrapper').html(playerHTML);
    
        // make the video control paused, so quality jiggering will cause playback to happen
        $container.find('.video50-play-pause-control').addClass('pause');
    }

    // for each mode, perform different operations for instantiating the player
    // attach function handlers for the different operations of seeking, resizing, etc.
    switch (me.mode) {
        case "video":
            // set the videos accordingly
            me.video = $container.find('.video50-source-video')[0];
            me.subVideos = $container.find('.video50-ancilliary-videos > video')
                                     .prop('muted', true)
                                     .get();
                                 
            me.controlBarHandlers({
                play: function() { 
                    me.video.play(); 
                    $.each(me.subVideos, function(i, v) { v.play(); });
                    me.seeking = false;
                },
                pause: function() { 
                    me.video.pause(); 
                    $.each(me.subVideos, function(i, v) { v.pause(); });
                },
                seek: function(time) {
                    if (!me.seeking) {
                        me.seeking = true;
                        if (!$container.find('.video50-play-pause-control').hasClass('pause'))
                            $container.find('.video50-play-pause-control').trigger('mousedown');
                        
                        me.video.currentTime = time; 
                        $.each(me.subVideos, function(i, v) { v.currentTime = time; });
                     
                        // buffer for a bit so syncing doesn't get thrown off
                        var loaded = 0;
                        $container.find('video').off('seeked.video50').on('seeked.video50', function(e) {
                            var length = (me.currentSource.source[0].src instanceof Array) ? me.currentSource.source[0].src.length : 1;
                            if (++loaded == length) {
                                $container.find('.video').off('seeked.video50');
                                $container.find('.video50-play-pause-control').trigger('mousedown');
                            }
                        });
                    }
                },
                duration: function() { return me.video.duration; },
                position: function() { return me.video.currentTime; },
                playbackRate: function(speed) { 
                    if (speed === undefined)
                        return me.video.playbackRate;
                    
                    me.video.playbackRate = speed; 
                    $.each(me.subVideos, function(i, v) { v.playbackRate = speed; });
                }
            });
        
            me.videoHandlers({
                duration: function() { return me.video.duration; },
                swap: this.swapHandlers()[me.mode]
            });
            break;
        case "flash":
            // instantiate the flash players
            var $main = $('.video50-source-video .video50-flash');
            var $ancilliary = $('.video50-ancilliary-videos .video50-flash');
            me.video = jwplayer($main.attr('id')).setup({
                file: $main.attr('data-src'),
                width: "100%",
                height: "100%",
                controls: false,
                stretching: "uniform",
                primary: "flash"
            });
            me.video.setMute(false);
            me.subVideos = [];
            $ancilliary.each(function(i, e) {
                me.subVideos.push(jwplayer($(e).attr('id')).setup({
                    file: $(e).attr('data-src'),
                    width: "100%",
                    height: "100%",
                    controls: false,
                    stretching: "uniform",
                    primary: "flash"
                }));
                me.subVideos[i].setMute(true);
            });
           
            // attach control bar and video handlers
            me.controlBarHandlers({
                play: function() { 
                    me.video.play(true); 
                    $.each(me.subVideos, function(i, v) { v.play(true); });
                },
                pause: function() { 
                    me.video.play(false); 
                    $.each(me.subVideos, function(i, v) { v.play(false); });
                },
                seek: function(time) { 
                    me.video.seek(time); 
                    $.each(me.subVideos, function(i, v) { v.seek(time); });
                },
                duration: function() { return me.video.getDuration(); },
                position: function() { return me.video.getPosition(); },
            });
            me.videoHandlers({
                duration: function() { return me.video.getDuration(); },
                swap: this.swapHandlers()[me.mode]
            });
            break;
    }
    me.processTimeUpdates(me.mode);

    // for multisync videos, specify how to sync. should factor.
    if (me.mode == "video" && !me.fullmode) {
        me.syncHTML5Videos();
    } 
    else if (me.mode == "flash" && !me.fullmode) {
        me.syncFlashVideos();
    }
    
    // for non sync'd single video mode, change CSS so video fills viewport
    if (me.fullmode) {
        $container.addClass('fullmode'); 
    }
    else {
        $container.removeClass('fullmode'); 
    }
    
    // resize videos
    $(window).trigger('resize');

    // wait until all videos ready, then start all the videos
    me.startVideos();
}

CS50.Video.prototype.startVideos = function(handlers) {
    var me = this;
    var $container = $(me.playerContainer).find('.video50-wrapper');
    switch (me.mode) {
        case "video":
            var loaded = 0;
            $container.find('video').on('canplay.video50', function(e) {
                var length = (me.currentSource.source[0].src instanceof Array) ? me.currentSource.source[0].src.length : 1;
                if (++loaded == length) {
                    $container.find('video').off('canplay.video50');
                    
                    // restore video playback state if it exists
                    if (me.state !== undefined) {
                        me.cbHandlers.playbackRate(me.state.playbackRate || 1)
                        me.cbHandlers.seek(me.state.currentTime || 0);
                    }
                    else 
                        $container.find('.video50-play-pause-control').trigger('mousedown');
                }
            });
            break;
        case "flash":
            var loaded = 0;
            $.each([me.video].concat(me.subVideos), function(i, v) {
                v.onReady(function(e) {
                    var length = (me.currentSource.source[0].src instanceof Array) ? me.currentSource.source[0].src.length : 1;
                    if (++loaded == length) {
                        // restore video playback state if it exists
                        if (me.state !== undefined) {
                            me.cbHandlers.seek(me.state.currentTime);
                        }
                        $container.find('.video50-play-pause-control').trigger('mousedown');
                    }
                });
            });
            break;
    }
}

/*
 *  Attaches all the basic handlers to implement basic functionality of the control bar for a
 *  a new mode of the player, by passing an object where the following operations on the video 
 *  are implemented.
 *  
 *  @param handlers Object video function handlers
 *      play: function, plays the current video
 *      pause: function, pauses the current video
 *      seek: function, @param time in seconds, seeks to timecode in the current video
 *      duration: function, returns the duration of the video
 *      position: function, returns the current playback time of the video 
 *      playbackRate: function, @param speed, alters the playback rate of the video
 */
CS50.Video.prototype.controlBarHandlers = function(handlers) {
    var me = this;
    var $container = $(me.playerContainer);
    
    // expose control bar handlers in case we have to use them manually
    me.cbHandlers = handlers;
    
    // XXX: test for required handlers

    // toggle play pause
    $container.on('mousedown.video50', '.video50-play-pause-control, .video50-main-video-wrapper', function() {
        var playPauseButton = $container.find('.video50-play-pause-control')
        if (playPauseButton.toggleClass('pause').hasClass('pause')) {
            handlers.pause();
        } 
        else {
            handlers.play();
        }
    });

    // seek around by clicking on the progress bar
    $container.on('mousedown.video50', '.video50-timeline-wrapper', function(e) {
        var ratio = (e.pageX - $(this).offset().left)/$(this).width();
        
        // manual seeks can override other types of seeking
        me.seeking = false;
        handlers.seek(ratio * handlers.duration());
    });    
    
    // enable thumbnails when hovering over progress bar
    $container.on('mousemove.video50', '.video50-timeline-wrapper', function(e) {
        var x = e.pageX - $(this).offset().left;
        var ratio = x/$(this).width();
        var time = ratio * handlers.duration();
     
        if (me.thumbnailKeys && me.thumbnailKeys.length > 0) {
            // if successful update of thumbnail
            var success = me.updateThumbnail(time);
            if (success) {
                // center thumbnail wrapper
                var $thumbnailWrapper = $container.find('.video50-thumbnail-wrapper');
                $thumbnailWrapper.show().css({
                    left: x - $thumbnailWrapper.outerWidth(true)/2
                }); 
            } 
        }    
    });
   
    // disable thumbnails when mousing off progress bar
    $container.on('mouseout.video50', '.video50-timeline-wrapper', function(e) {
         if (me.thumbnailKeys.length > 0)
            $container.find('.video50-thumbnail-wrapper').hide();
    });
 
    // skip back 8 seconds when skip back control is hit
    $container.on('mousedown.video50', '.video50-sb-control', function(e) {
        var time = handlers.position() < 10 ? 0 : handlers.position() - 10;
        handlers.seek(time);
    });

    // skip forward 30 seconds when skip forward control is hit
    $container.on('mousedown.video50', '.video50-sf-control', function(e) {
        var time = handlers.position() + 30 > handlers.duration() ? handlers.duration() : handlers.position() + 30;
        handlers.seek(time);
    });
    
    // prevent control bar clicks from pausing the main video (or propagating in general)
    $container.on('mousedown.video50', '.video50-control-bar', function(e) {
        e.stopPropagation();
    });

    // control the speed of video playback
    // XXX: remove player control if this option is not defined
    if (handlers.playbackRate !== undefined) {
        $container.on('mousedown.video50', '.video50-speed-control [data-rate]', function(e) {
            e.preventDefault();
            var speed = $(this).attr('data-rate');
            $container.find('.video50-curspeed').text(speed + "x");
            $(this).addClass('active').siblings().removeClass('active');
            handlers.playbackRate(speed);
        });
    } 
    else {
        $container.find('.video50-speed-control').addClass('video50-disabled');
    }

    // close menus when anything else is clicked
    $container.on('click.video50', function(e) {
        $(this).find('.video50-control-togglee').hide();
    });

    // prevent clicks on menus from closing menus
    $container.on('click.video50', '.video50-control-toggle', function(e) {
        e.stopPropagation();
    });
    
    $container.on('mousedown.video50', '.video50-transcript-control', function(e) {
        if (me.externalTranscript)
            me.transcriptWindow.focus();
    });

    // toggle list controls in the control bar
    $container.on('mousedown.video50', '.video50-control-toggle', function(e) {
        var $child = $(this).find('.video50-control-togglee');
        $container.find('.video50-control-togglee').not($child).hide();
    
        if (!$(this).hasClass('video50-disabled'))
            $child.toggle();
    });

    // mark selected menu options as active
    $container.on('mousedown.video50', '.video50-control-list li', function(e) {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });

    // handle fading out of video controls after 3 second idle
    CS50.controlFade = undefined;
    $container.on('mousemove.video50, click.video50', function(e) {
        clearTimeout(CS50.controlFade);
        $container.find('.video50-control-bar').fadeIn();
        $container.find('.video50-right').fadeIn();
        CS50.controlFade = setTimeout(function() {
            if ($container.find('.video50-control-togglee:visible').length < 1)
                $container.find('.video50-control-bar').fadeOut();
        
            if ($container.find('.video50-wrapper').hasClass('fullscreen')) {
                $container.find('.video50-right').fadeOut();
            }
        }, 3000);
    });
    $container.trigger('mousemove');

    // request a native browser fullscreen, if possible
    $container.on('mousedown.video50', '.video50-fullscreen-control', function(e) { 
        var container = $container.find('.video50-wrapper')[0];
        if (!$(this).hasClass('active')) {
            if (container.requestFullscreen) 
                container.requestFullscreen();
             else if (container.mozRequestFullScreen) 
                container.mozRequestFullScreen();
             else if (container.webkitRequestFullscreen) 
                container.webkitRequestFullscreen();
        }
        else {
            if (document.cancelFullscreen) 
                document.cancelFullscreen();
            else if (document.mozCancelFullScreen) 
                document.mozCancelFullScreen();
            else if (document.webkitCancelFullScreen) 
                document.webkitCancelFullScreen();
        }
    });
   
    // handle DOM changes when a native browser fullscreen is initiated or cancelled
    $(document).on('webkitfullscreenchange.video50 mozfullscreenchange.video50 fullscreenchange.video50', function(e) {
        // element is being unfullscreened, so ...
        if (!document.fullscreenElement && !document.mozFullScreenElement && 
            !document.webkitFullscreenElement) {
            // ... move fullscreen controls back to the multivideo display
            $container.find('.video50-wrapper').removeClass('fullscreen');
            $container.find('.video50-fullscreen-control').removeClass('active');
        } 
        // element is being fullscreened, so ...
        else {
            // ... move fullscreen controls so they are part of fullscreened video
            $container.find('.video50-wrapper').addClass('fullscreen');
            $container.find('.video50-fullscreen-control').addClass('active');
        }
        $(window).trigger('resize');
    }); 
   
    // change the caption language, and change the caption download language
    $container.on('mousedown.video50', '.video50-captions-control [data-lang]', function(e) {
        e.preventDefault();
        var short = $(this).attr('data-lang');
        me.loadCC(short);
    });
    
    $container.on('mouseenter.video50', '.video50-quality.video50-disabled', function(e) {
        $container.find($('.video50-support-tooltip')).remove();
        var $tooltip = $('<div>').append(me.templates.supportTooltip({
            source: me.sources[$(this).attr('data-index')],
            supportPlayback: me.templates.supportPlayback
        })).children().css({
            right: $(window).width() - $(this).offset().left,
            bottom: $(window).height() - $(this).offset().top
        });
        $(this).append($tooltip);
    }).on('mouseleave.video50', '.video50-quality.video50-disabled', function(e) {
        $(this).find($('.video50-support-tooltip')).remove();
    });

    $container.on('mousedown.video50', '.video50-quality-control [data-index]', function(e) {
        e.preventDefault();
  
        if ($(this).hasClass('video50-disabled'))
            return false;

        // grab the quality of the new video and the file path, updating the UI
        var i = $(this).attr('data-index');
        me.currentSource = me.sources[i];
        $(this).addClass('active').siblings().removeClass('active');
        
        // save and restore state
        me.state = {
            currentTime: handlers.position(),
            playbackRate: handlers.playbackRate() || 1
        };

        me.createPlayer(); 
    });

    me.loadTranscriptHandlers($container.find('.video50-transcript-container-wrapper').parent());
};

/* 
 * Attaches transcript handlers, makes code reusable for external window.
 *
 * @param jQuery object $container, jquery container to which we should attach handlers
 * @param external bool, bool indicating whether the window is external or internal
 */
CS50.Video.prototype.loadTranscriptHandlers = function($container, external) {
    var me = this;

    // turn off handlers on the old transcript container
    if (me.transcriptContainer) {
        me.transcriptContainer.off('.video50-transcript');
    }
   
    $container.on('click.video50.video50-transcript', '[data-time]', function(e) {
        var time = $(this).attr('data-time');
        me.cbHandlers.seek(time); 
    });

    // prevent clicking of the transcript area from closing the transcript
    $container.on('mousedown.video50.video50-transcript', '.video50-transcript-container-wrapper', function(e) {
        e.stopPropagation();
    });

    // prevent keypresses from pausing the video/propagating 
    $container.on('keyup.video50.video50-transcript, keydown.video50.video50-transcript, keypress.video50.video50-transcript', '.video50-transcript-search', function(e) {
        e.stopPropagation();
    });

    $container.on('keyup.video50.video50-transcript', '.video50-transcript-search', function(e) {
        var $cancel = $container.find(".video50-transcript-cancel");
        if ($.trim($(this).val()) == "") {
            $cancel.removeClass('cancel');
            $container.find('.video50-search-time').remove();
            $container.find('.video50-transcript-container').removeClass('video50-transcript-searching');
            $container.find('[data-time], br').show().removeClass('video50-search-result');
        } 
        else {
            // perform a search and enable clearing the field
            $cancel.addClass('cancel');
            $container.find('.video50-transcript-container').addClass('video50-transcript-searching');
            $container.find('[data-time], br').hide().removeClass('video50-search-result');
            $container.find("[data-time]:Contains('" + $(this).val() + "')")
                .show()
                .addClass('video50-search-result');
            
            if ($container.find('.video50-search-time').length <= 0) {
                $container.find('.video50-search-result').prepend(function() {
                    return "<div class='video50-search-time'>" +
                                me.formatTimestamp($(this).attr('data-time'), me.video.duration) +
                            "</div>";
                })
            }
            
        }
    });

    // cancel a search
    $container.on('click.video50.video50-transcript', '.video50-transcript-cancel.cancel', function(e) {
        $container.find(".video50-transcript-search").val("").trigger('keyup');
    });
    
    // downloads
    $container.on('click.video50', '.video50-transcript-download', function(e) {
        window.open(me.keyedCaptions[language].src);
    });

    if (!external) {
        $container.on('click.video50.video50-transcript', '.video50-transcript-popout', function(e) {
            e.preventDefault();
            e.stopPropagation();
            me.transcriptWindow = window.open('', '', 'width=500, height=500');
            me.transcriptWindow.document.write('<!doctype html><html><head></head><body></body></html>');
            
            var $transcript = $(me.transcriptWindow.document);
            $transcript.find('head')
                       .append($(document).find('[data-library="video50"]').clone())
                       .append("<title>Transcript</title>");
                
            $transcript.find('body')
                       .empty()
                       .hide()
                       .append($container.find('.video50-transcript-container-wrapper').clone().addClass('external'))
            // once CSS is loaded, show the body 
            $transcript.find('link').load(function() {
                $transcript.find('body').show();
            });
            
            $(me.playerContainer).find('.video50-transcript-control').trigger('mousedown').addClass('video50-disabled');            
            me.loadTranscriptHandlers($transcript.find('body'), true);
        });
    } else {
        // reload the transcript into the main window when this window closes
        me.transcriptWindow.onbeforeunload = function() {
            me.loadTranscriptHandlers(
                $(me.playerContainer).find('.video50-transcript-container-wrapper').parent()
            );
            $(me.playerContainer).find('.video50-transcript-control').removeClass('video50-disabled').trigger('mousedown'); 
        }

        // convenience button
        $container.on('click.video50.video50-transcript', '.video50-transcript-popout', function(e) {
            me.transcriptWindow.close();
        });
    }
    
    // update current transcript container
    me.externalTranscript = external || false;
    me.transcriptContainer = $container;
};

/*
 *  Handles what to do in the case that a timeupdate event is received by the player.
 *  Separate from control bar method, because the event interfaces for each of the players
 *  do not match up (i.e. flash onTime and HTML5 timeupdate).
 *
 *  @param mode string the mode of the player, used to execute the correct actions
 */
CS50.Video.prototype.processTimeUpdates = function() {
    var me = this;
    var $container = $(me.playerContainer).find('.video50-wrapper');
   
    switch (me.mode) {
        case "video":
            // html5 timeupdate event
            $container.find('.video50-source-video').on('timeupdate.video50', function(e) {
                // update highlight on the transcript, update cc
                if (!this.lastUpdate || (this.lastUpdate + 500) < (new Date).getTime()) {
                    me.updateTranscriptHighlight(e.target.currentTime);
                    me.updateCC(e.target.currentTime);
                    me.updateTimeline(e.target.currentTime, me.video.duration);           
         
                    this.lastUpdate = (new Date).getTime();
                }
            });
            break;
        case "flash":
            // flash timeupdate event
            // XXX: probably want to use the main video after a swap...
            me.video.onTime(function(e) {
                // update highlight on the transcript, update cc
                if (!me.lastUpdate || (me.lastUpdate + 500) < (new Date).getTime()) {
                    me.updateTranscriptHighlight(e.position);
                    me.updateCC(e.position);
                    me.updateTimeline(e.position, me.video.getDuration());           
                    me.lastUpdate = (new Date).getTime();
                }
            });
            break;
    }
}

CS50.Video.prototype.formatTimestamp = function(time, total) {
    time = Math.floor(time);
    total = Math.floor(total);
    var h = Math.floor(time / 3600);
    var left = time % 3600; 
    var m = Math.floor(left / 60);
    var s = left % 60;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    return (total > 3600) ? h + ":" + m + ":" + s : m + ":" + s;
}

CS50.Video.prototype.updateTimeline = function(time, total) {
    var me = this;
    var $container = $(me.playerContainer);
    var video = $container.find('.video50-source-video')[0];   

    // update the length
    if ($container.find('.video50-timelength').text() == "-:--:--") {
        $container.find('.video50-timelength').text(me.formatTimestamp(total, total));
    }

    // update the timecode
    $container.find('.video50-timecode').text(me.formatTimestamp(time, total));

    // update the length of the bar
    var ratio = time / total;
    $container.find('.video50-progress').css("width", (ratio * 100) + "%");
};


CS50.Video.prototype.syncHTML5Videos = function() {
    var me = this;
  
    // only if we're not seeking do we try to sync
    if (!me.seeking) {
        for (var i = 0; i < me.subVideos.length; i++) {
            if (me.subVideos[i].readyState === 4 && 
                (Math.abs(me.subVideos[i].currentTime - me.video.currentTime) > .1)) {
                // XXX: add buffering icon
                me.cbHandlers.seek(me.video.currentTime);        
            }
        }
    }

    // use request animation frame to resync on subsequent frames
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                                window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    
    if (requestAnimationFrame) {
        me.syncTimer = requestAnimationFrame(function() {
            me.syncHTML5Videos();
        });
    } 
    else {
        me.syncTimer = window.setTimeout(function() {
            me.syncHTML5Videos();
        }, 50);
    }
}

CS50.Video.prototype.syncFlashVideos = function() {
    // XXX: doesn't currently do anything, since we don't support flash syncing
    return;
    
    var me = this;
    for (var i = 0; i < me.subVideos.length; i++) {
        if (me.subVideos[i].getState() !== "BUFFERING" && 
            (Math.abs(me.subVideos[i].getPosition() - me.video.getPosition()) > .3)) {
            me.subVideos[i].seek(me.video.getPosition());
        }
    }
  
    setTimeout(function() {
        me.syncFlashVideos();
    }, 100);
}

CS50.Video.prototype.swapHandlers = function() {
    var me = this;
    var $container = $(me.playerContainer).find('.video50-wrapper');
    
    return {
        video: function(el) {
            // retain prior pause state
            var paused = $(me.video).prop('paused');

            // pause the videos to avoid bugs
            me.video.pause();
            _.each(me.subVideos, function(video, index) {
                video.pause();
            });
            
            // swap the two dom elements and their classes
            var $oldMain = $container.find('.video50-main-video-wrapper .video50-video')
                                     .removeClass('video50-source-video');
            var $newMain = $(el).addClass('video50-source-video');
            $newMain.after($oldMain);
            $container.find('.video50-main-video-wrapper').prepend($newMain);

            // mute the old video and make the new video the sound source
            $oldMain.prop('muted', true);
            $newMain.prop('muted', false);

            // swap the video sources that the syncing code uses
            me.video = $container.find('.video50-source-video')[0];
            me.subVideos = $container.find('.video50-ancilliary-videos > video').get();
            
            // play the videos if they weren't paused before
            if (!paused) {
                me.video.play();
                _.each(me.subVideos, function(video, index) {
                    video.play();
                });
            }

            // trigger a resize to attain the correct dimensions
            $(window).trigger('resize');
        },
        flash: function(el) {
            // swap the two dom elements and their classes
            var $oldMain = $container.find('.video50-main-video-wrapper .video50-video')
                                     .removeClass('video50-source-video');
            var $newMain = $(el).addClass('video50-source-video');
            $newMain.after($oldMain);
            $container.find('.video50-main-video-wrapper').prepend($newMain);

            // swap the video sources that the syncing code uses
            me.video = jwplayer($newMain.find('.video50-flash').attr('id'));
            me.subVideos = [];
            $container.find('.video50-flash').each(function(i, e) {
                me.subVideos.push(jwplayer($(e).attr('id')))
            });

            // mute the old video and make the new video the sound source
            me.video.setMute(false);
            jwplayer($oldMain.find('.video50-flash').attr('id')).setMute(true);

            // trigger a resize to attain the correct dimensions
            $(window).trigger('resize');
        }
    };
}

/*
 *  Attaches all the basic handlers to implement basic functionality of the video area for a
 *  a new mode of the player, by passing an object with the following properties defined.
 *  
 *  @param handlers Object video function handlers
 *      swap: function, executes behavior when video on right pane is clicked
 *      resize: function, executes behavior when window is resized
 */
CS50.Video.prototype.videoHandlers = function(handlers) {
    var me = this;
    var $container = $(me.playerContainer);
    
    // handle swapping of videos
    $container.on('mousedown.video50', '.video50-ancilliary-videos .video50-video', function(e) {
        handlers.swap(this);
    });

    // handle keypress changes on the video
    $container.on('keydown.video50', function(e) {
        switch (e.which) {
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
                // handle swapping the video with key numbers
                var segment = e.which - 49;
                var $video = $container.find('[data-segment=' + segment + ']');
                if ($video.closest('.video50-main-video-wrapper').length == 0)
                    $video.trigger('mousedown');
                break;
            case 32:
                $container.find('.video50-main-video-wrapper').trigger('mousedown');
                break;
            default:
                break;
        }
    });
    
    // handle the mouse on and off behavior of the video dragger
    var move = false;
    $container.on('mousedown.video50', '.video50-dragger', function(e) {
        move = true;
    })
    
    $(document).on('mouseup.video50', function(e) {
        move = false;
    });
   
    $(document).on('mousemove.video50', function(e) {
        if (move) {
            me.resizeMultistream(e.pageX - $container[0].offsetLeft);
        }
    });
    
    // default position of the dragger, and % of the container's
    // viewport width taken up by the larger video
    me.containerX = me.containerX || (.65 * $container.width());
    me.oldRatio = me.oldRatio || .65;
    
    // resize the video whenever the container has the possibility of being resized
    // XXX: turn off resizing if a resizing handler is not defined
    $(window).on('resize.video50', function() {
        // recalcuate correct position of dragger based on old video ratio
        // XXX: handler.resize();
        var newX = me.oldRatio * $container.width();
        me.resizeMultistream(newX);
    });
};

// Given a desired keystone width (i.e. the apparent width of the container when keystoned),
// the angle of keystoning, and the z distance from the plane, returns the original width of
// the container needed to achieve such a keystone width.
CS50.Video.prototype.reverseKeystone = function(desired, angle, z) {
    var a = angle / 360.0 * Math.PI;
    return (z * desired)/(z * Math.cos(a) - desired * Math.sin(a));
}
   
// resizes the videos appropriately and positions the dragger at dividing point = x
CS50.Video.prototype.resizeMultistream = function(x) {
    var me = this;
    var $container = $(me.playerContainer).find('.video50-wrapper');
   
    // if we're in fullscreen mode, use a different algorithm
    if ($container.is('.fullscreen, .fullmode')) {
        $container.find('.video50-left').css({
            width: "auto",
        });
        
        $container.find('.video50-main-video-wrapper').css({
            height: "auto",
            "margin-top": "0px",
        });

        $container.find('.video50-main-video-wrapper .video50-video').css({
            height: "100%",
            width: "100%"
        });

        $container.find('.video50-right').css({
            left: "auto"
        });

        $container.find('.video50-ancilliary-videos').css({
            "margin-top": "0px"
        });

        $container.find('.video50-ancilliary-videos .video50-video').css({
            width: 200,
            height: "auto"
        });

        return;   
    }

    // do not allow main video to become smaller than 50% of viewport
    var ratio = x/$container.width();
    if (ratio < .5)
        return;
  
    // do not allow ancilliary video to become smaller than 200px wide
    if ($container.width() - x < 200)
        return;

    // else, update our resizing variables to reflect new state
    me.containerX = x;
    me.oldRatio = ratio;

    // update the position of the slider
    if ($container.find('.video50-videos-wrapper').hasClass("fullmode")) {
        $container.find('.video50-left').css('width', $container.width()); 
    }
    else {
        $container.find('.video50-left').css('width', x);
    }

    $container.find('.video50-right').css('left', x + 1);
    $container.find('.video50-dragger').css('left', x + 1);
 
    // calculate and invoke keystoning for ancilliary videos
    var degreeRight = ratio <= .6 ? 0 : (.6 - ratio) * 45;
    var drStr = "rotateY(" + degreeRight + "deg)";
    $container.find('.video50-ancilliary-videos > .video50-video').css({
        "-webkit-transform": drStr,
        "-moz-transform": drStr,
        "-ms-transform": drStr,
        "-o-transform": drStr,
        "transform": drStr,
    });

    // calculate new widths that will result in keystone widths fititng in containers
    var mvWidth = $container.find('.video50-main-video-wrapper').width();
    var mvHeight = mvWidth * 9.0/16.0;
    var ovWidth = me.reverseKeystone($container.find('.video50-ancilliary-videos').width(), -degreeRight, 200);
    var ovHeight = ovWidth * 9.0/16.0;

    // change the height of the main video wrapper for overflow or sizing
    $container.find(".video50-main-video-wrapper").css({
        height: mvHeight
    });
    
    // make the height for canvasing auto, so we can clip with overflow
    var $main = $container.find('.video50-main-video-wrapper > .video50-video');
    var top = (me.mode === "canvas") ? -mvHeight * $main.attr('data-segment') : "0px";
    var height = (me.mode === "canvas") ? "auto" : mvHeight;
    $main.css({
        width: mvWidth,
        height: height,
        top: top
    });
    $container.find(".video50-ancilliary-videos > .video50-video").css({
        width: ovWidth,
        height: ovHeight
    });

    // vertical centering for the containers
    $container.find('.video50-main-video-wrapper')
              .css('margin-top', -$container.find('.video50-main-video-wrapper').height()/2);
    $container.find('.video50-ancilliary-videos')
              .css('margin-top', -$container.find('.video50-ancilliary-videos').height()/2);
}

/*
 *  Updates the closed captioning for the video player.
 */
CS50.Video.prototype.updateCC = function(time, force) {
    var me = this;
    var time = Math.floor(time);
    
    if (me.currentCaptions[time] !== undefined && (time != me.lastActiveCC || force)) {
        me.lastActiveCC = time;
        
        var $text = $(me.playerContainer).find('.video50-cc-text');
       
        // if can be shown, change the text, then display. we must do this to
        // avoid an empty box when no text is present
        if ($text.hasClass('video50-show')) {
            $text.text(me.currentCaptions[time])
            $text.css('display', 'inline-block');
        }
    }
};

/*
 *   Updates the thumbnail for hovering over the time bar.
 */
CS50.Video.prototype.updateThumbnail = function(time) {
    var me = this;
    var $thumbnail = $(me.playerContainer).find('.video50-thumbnail');
    var s = me.lowerBound(me.thumbnailKeys, time);
   
    // if this doesn't index into the array, didn't update
    if (s == -1)
        return false;

    // update thumbnail if it's not the same as the last thumbnail
    if (me.lastThumbnail !== s) {
        // update the image for the time slider
        me.lastThumbnail = s;
        var thumbnail = me.thumbnails[me.thumbnailKeys[me.lastThumbnail]];
        $thumbnail.css(thumbnail);
    }
    return true;
};

/**
 * Highlight the line corresponding to the current point in the video in the transcript
 *
 */
CS50.Video.prototype.updateTranscriptHighlight = function(time, force) {
    var me = this;
    var time = Math.floor(time);

    // avoid subsecond update, unless forcing applied
    if (time == me.lastActiveTranscript && !force)
        return;
    
    var $container = $(me.transcriptContainer).find('.video50-transcript-container');
    var $active = $container.find('[data-time="' + time + '"]');

    // check if a new element should be highlighted
    if ($active && $active.length) {
        // update last transcript update time
        me.lastActiveTranscript = time;
        
        // remove all other highlights
        $container.find('a').removeClass('highlight');

        // add highlight to active element
        $active.addClass('highlight');
    }
};

/**
 * Load the specified vtt file for timeline thumbnails.
 *
 */
CS50.Video.prototype.loadThumbnails = function() {
    var me = this;

    me.thumbnailKeys = [];
    me.thumbnails = {};
    if (me.options.thumbnails && me.options.thumbnails.src) {
        $.get(me.options.thumbnails.src, function(response) {
            var timecodes = response.split(/\n\s*\n/);
        
            // build up an array mapping time in seconds to objects of
            // thumbnail srcs, and attributes necessary for display
            $.each(timecodes, function(i, timecode) {
                var timecode = timecode.split("\n");
                var timestamp = timecode[0];
                var path = timecode[1];                

                // XXX: support subsecond thumbnails?
                // convert from hours:minutes:seconds.ms to seconds
                if (timestamp && path) {
                    var time = timestamp.match(/(\d+):(\d+):(\d+).(\d+)/);
                    var seconds = parseInt(time[1], 10) * 3600 + parseInt(time[2], 10) * 60 + parseInt(time[3], 10);
                    path = path.split("#");
            
                    var css = path[1] ? path[1].split('=')[1].split(',') : [];

                    // hash timecodes to thumbnails
                    me.thumbnails[seconds] = {
                        background: "url(" + path[0] + ")",
                        "background-position-x": -parseInt(css[0]),
                        "background-position-y": -parseInt(css[1]),
                        width: parseInt(css[2]),
                        height: parseInt(css[3])
                    };

                    // create an array of keys to binary search over for time range buckets
                    me.thumbnailKeys.push(seconds);
                }
            });
        });
    }
}

/*
 *  Searches a sorted array for a number n, returning the index of the number
 *  in the array if found, else, returning the index of the largest number
 *  smaller than n. Returns -1 if no such index.
 * 
 *  Based on underscore.js's indexOf function.
 */
CS50.Video.prototype.lowerBound = function(array, item) {
    if (array == null) return -1;
    var i = 0, l = array.length;
    i = _.sortedIndex(array, item);
    return array[i] === item ? i : i - 1;
}

CS50.Video.prototype.loadCC = function(language) {
    var player = this.player;
    var me = this;
    me.currentCaptions = {};

    if (me.keyedCaptions[language]) {
        $.get(me.keyedCaptions[language].src, function(response) {
            var timecodes = response.split(/\n\s*\n/);

            // build CC object
            var n = timecodes.length;
            for (var i = 0; i < n; i++) {
                // split the elements of the timecode
                var timecode = timecodes[i].split("\n");
                if (timecode.length > 1) {
                    // extract time and content from timecode
                    var timestamp = timecode[1].split(" --> ")[0];
                    timecode.splice(0, 2);
                    var content = timecode.join(" ");

                    // convert from hours:minutes:seconds to seconds
                    var time = timestamp.match(/(\d+):(\d+):(\d+)/);
                    var seconds = parseInt(time[1], 10) * 3600 + parseInt(time[2], 10) * 60 + parseInt(time[3], 10);

                    // create mapping from time to content
                    me.currentCaptions[seconds] = content;
                }
            }

            // if there was a previously active timecode, update cc and highlight
            if (me.lastActiveCC)
                me.updateCC(me.lastActiveCC, true);
            
            $(me.playerContainer).find('.video50-cc-text').addClass('video50-show');
        });
    } 
    else {
        // hide captions if does not exist
        $(me.playerContainer).find('.video50-cc-text').removeClass('video50-show').hide();
    }
}

/**
 * Load the specified caption file.
 *
 * @param lang Language to load
 *
 */
CS50.Video.prototype.loadTranscript = function(language) {
    var player = this.player;
    var me = this;

    if (me.keyedCaptions[language]) {
        $.get(me.keyedCaptions[language].src, function(response) {
            var timecodes = response.split(/\n\s*\n/);

            // clear previous text
            var $container = $(me.transcriptContainer).find('.video50-transcript-container');
            $container.empty();

            // iterate over each timecode
            var n = timecodes.length;
            for (var i = 0; i < n; i++) {
                // split the elements of the timecode
                var timecode = timecodes[i].split("\n");
                if (timecode.length > 1) {
                    // extract time and content from timecode
                    var timestamp = timecode[1].split(" --> ")[0];
                    timecode.splice(0, 2);
                    var content = timecode.join(" ");

                    // if line starts with >> or [, then start a new line
                    if (content.match(/^(>>|\[)/) && i != 0)
                        $container.append('<br /><br />');
                    
                    // if line starts with a speakername and colon, insert a new line
                    content = content.replace(/^(.*?:)/, function(a, b) {
                        if (i != 0)
                            $container.append('<br />');
                        return '<strong>' + b + '</strong>';
                    });


                    // convert from hours:minutes:seconds to seconds
                    var time = timestamp.match(/(\d+):(\d+):(\d+)/);
                    var seconds = parseInt(time[1], 10) * 3600 + parseInt(time[2], 10) * 60 + parseInt(time[3], 10);

                    // add line to transcript
                    $container.append('<a href="#" data-time="' + seconds + '">' + content + '</a> ');
                }
            }

            // if there was a previously active timecode, highlight
            if (me.lastActiveTranscript)
                me.updateTrancriptHighlight(me.lastActiveTranscript, true);
        });
    } 
};
