// compatibility with CS50 libraries
var CS50 = CS50 || {};

/*
 * Constructor for CS50 Video library.
 *
 * @param options Object Video50 options:
 *      aspectRatio: float, aspect ratio for a single video
 *      defaultLanguage: string, default language for subtitles, transcript
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
CS50.Video = function(options) {
    var me = this;
    this.options = options;

    // required options must be defined
    if (!this.options.playerContainer)
        throw 'Error: You must define a container for CS50 Video!';
    if (!this.options.files)
        throw 'Error: You must define a video for CS50 Video to play!';

    // fill in default values for optional, undefined values
    this.options = $.extend({
        aspectRatio: 16/9,
        defaultLanguage: 'eng',
        onReady: false,
        playbackRates: [0.7, 1, 1.2, 1.5],
        title: '',
    }, this.options);
    
    // detect compatibility for various video types
    var testEl = document.createElement("video");
    if (testEl.canPlayType) {
        this.options.supportsMP4 = "" !== (testEl.canPlayType('video/mp4; codecs="mp4v.20.8"') ||
                  testEl.canPlayType('video/mp4; codecs="avc1.42E01E"') ||
                  testEl.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"'));
        this.options.supportsWebM = "" !== testEl.canPlayType('video/webm; codecs="vp8, vorbis"');
    }

    // handle different argument types of "video" option
    for (var i = 0; i < this.options.files.length; i++) {
        // must support all videos in an array to support to entire array
        if (this.options.files[i] instanceof Array) {
            var support = true;
            for (var j = 0; j < this.options.files[i].length; j++) {
                 support = support && me.supportsFormat(this.options.files[i][j].type);
            }

            if (this.options.currentVideo === undefined && support)
                this.options.currentVideo = this.options.files[i];
        }
        // for supported files in concatenated format, fill in some default values if unspecified
        else if (me.supportsFormat(this.options.files[i].type)) {
            this.options.files[i] = $.extend({
                rows: 1,
                cols: 1,
                numVideos: (this.options.files[i].rows || 1) * (this.options.files[i].cols || 1)
            }, this.options.files[i]);

            this.options.files[i].singleHeight = this.options.files[i].height / this.options.files[i].rows;
            this.options.files[i].singleWidth = this.options.files[i].width / this.options.files[i].cols;

            if (this.options.currentVideo === undefined)
                this.options.currentVideo = this.options.files[i];
        }
    }

    // no supported file formats uh oh
    if (this.options.currentVideo === undefined) {
        throw 'Error: None of the given video files are supported in this browser';
    }

    // assign a (probably) unique id
    var id = Math.random().toString();
    me.options.fallbackId = id;

    // private member variable for template structure
    var templateHtml = {
        player: ' \
            <div class="video50-wrapper" tabindex="1"> \
                <div class="video50-source-video-fallback-wrapper"> \
                    <div class="video50-source-video-fallback"> \
                    </div> \
                </div> \
                <div class="video50-videos-wrapper">
                    <div class="video50-left"> \
                      <div class="video50-main-video-wrapper"> \
                        <video class="video50-source-video video50-video" data-segment="0" autoplay src="<%- video.file %>"> \
                        </video> \
                        <div class="video50-cc-container"> \
                            <div class="video50-cc-text"></div> \
                        </div> \
                      </div> \
                    </div> \
                    <%= canvasHtml %> \
                </div>
            </div> \
        ',

        playerCanvas: ' \
            <div class="video50-canvas-area"> \
                <% if (video.numVideos > 1) { %> \
                    <div class="video50-dragger">  \
                    </div> \
                    <div class="video50-right"> \
                      <div class="video50-ancilliary-videos"> \
                        <% for (var i = 1; i < video.numVideos; i++) { %> \
                            <canvas class="video50-canvas video50-video" width="<%- video.width / video.cols %>" height="<%- video.height / video.rows %>" data-segment="<%= i %>"></canvas> \
                        <% } %> \
                      </div> \
                    </div> \
                <% } %> \
            </div> \
        ',

        playerVideo: ' \
            <div class="video50-canvas-area"> \
                <% if (video.numVideos > 1) { %> \
                    <div class="video50-dragger">  \
                    </div> \
                    <div class="video50-right"> \
                      <div class="video50-ancilliary-videos"> \
                        <% for (var i = 1; i < video.numVideos; i++) { %> \
                            <video class="video50-canvas video50-video" data-segment="<%= i %>"></video> \
                        <% } %> \
                      </div> \
                    </div> \
                <% } %> \
            </div> \
        ',

        playerFlash: ' \
            <div class="video50-canvas-area"> \
                <% if (video.numVideos > 1) { %> \
                    <div class="video50-dragger">  \
                    </div> \
                    <div class="video50-right"> \
                      <div class="video50-ancilliary-videos"> \
                        <% for (var i = 1; i < video.numVideos; i++) { %> \
                            <video class="video50-canvas video50-video" data-segment="<%= i %>"></video> \
                        <% } %> \
                      </div> \
                    </div> \
                <% } %> \
            </div> \
        ',
        
        playerControls: ' \
            <div class="video50-control-bar"> \
              <div class="video50-left-controls"> \
                <div class="video50-play-pause-control"> \
                </div><div class="video50-sb-control"> \
                </div><div class="video50-sf-control"> \
                </div> \
              </div> \
              <div class="video50-time"> \
                <div class="video50-timecode"></div> \
                <div class="video50-timeline"><div class="video50-progress"></div></div> \
                <div class="video50-timelength"></div> \
              </div> \
              <div class="video50-right-controls"> \
                <div class="video50-download-control video50-control-toggle"> \
                    <ul class="video50-download-container video50-control-list"> \
                        <% _.each(files, function(file, i) { %> \
                            <% \
                                if (!(file instanceof Array)) \
                                    file = [file]; \
                            %> \
                            <% _.each(file, function(subfile, j) { %> \
                                <li class="video50-download"> \
                                    <a href="<%- subfile.subfile %>?download"> \
                                        <% if (subfile.type === "video/mp4" || subfile.type === "video/webm") { %> \
                                            <%- subfile.type.split("/")[1].toUpperCase() + " (" + subfile.height + "p)" %> \
                                        <% } else { %> \
                                            <%- subfile.type.split("/")[1].toUpperCase() %> \
                                        <% } %> \
                                    </a> \
                                </li> \
                            <% }) %> \
                        <% }) %> \
                        <% if (captions && _.keys(captions).length > 0) { %> \
                            <li class="video50-download"> \
                                <a class="video50-transcript-download" href="<%- captions[defaultLanguage] %>?download"> \
                                    SRT (<%- CS50.Video.Languages[defaultLanguage] || "Unknown Language" %>) \
                                </a> \
                            </li> \
                        <% } %> \
                    </ul> \
                </div><div class="video50-captions-control video50-control-toggle"> \
                    <ul class="video50-captions-container video50-control-list"> \
                        <li class="video50-caption"><a href="#" data-lang="">Off</a></li> \
                        <% _.each(captions, function(path, short) { %> \
                            <li class="video50-caption" data-lang="<%- short %>"><%- CS50.Video.Languages[short] || "Unknown Language" %></li> \
                        <% }) %> \
                    </ul> \
                    <div class="video50-transcript-container"></div> \
                </div><div class="video50-speed-control video50-control-toggle"><div class="video50-curspeed">1x</div> \
                    <ul class="video50-speed-container video50-control-list"> \
                        <% _.each(playbackRates, function(rate, index) { %> \
                            <li class="video50-speed" data-rate="<%- rate %>"><%- rate %>x</li> \
                        <% }) %> \
                    </ul> \
                </div><div class="video50-quality-control video50-control-toggle"><div class="video50-curquality">360p</div> \
                    <ul class="video50-quality-container video50-control-list"> \
                        <% _.each(files, function(file, i) { %> \
                            <% if (file.type === "video/mp4" && supportsMP4) { %> \
                                <li class="video50-quality" data-index="<%- i %>"><%- file.height / file.rows %>p (MP4)</li> \
                            <% } else if (supportsWebM && file.type === "video/webm") { %> \
                                <li class="video50-quality" data-index="<%- i %>"><%- file.height / file.rows %>p (WebM)</li> \
                            <% } else if (file instanceof Array) { %> \
                                <% var supports = true; %> \
                                <% var type = undefined; %> \
                                <% \
                                    _.each(file, function(subfile, j) { \
                                        if (subfile.type == "video/webm" && supportsWebM) \
                                            type = (type == "MP4" || type == "Mixed") ? "Mixed" : "WebM"; \
                                        else if (subfile.type == "video/mp4" && supportsMP4) \
                                            type = (type == "WebM" || type == "Mixed") ? "Mixed" : "MP4"; \
                                        else \
                                            supports = false; \
                                    }); \
                                %> \
                                <% if (supports) { %> \
                                    <li class="video50-quality" data-index="<%- i %>"><%- file[0].height %>p (<%- type %>)</li> \
                                <% } %> \
                            <% } %> \
                        <% }) %> \
                    </ul> \
                </div><div class="video50-fullscreen-control"> \
                </div> \
              </div> \
            </div> \
        ',
    };
    
    // compile templates with underscore, expose templates to prototype functions
    this.templates = {};
    for (var template in templateHtml) {
        this.templates[template] = _.template(templateHtml[template]);
    }

    this.createPlayer();
};

/*
 *  Detects whether the player can play a particular file, given a file format.
 *  @param format to test for support (e.g. video/mp4, video/webm)
 */
CS50.Video.prototype.supportsFormat = function(format) {
    switch (format) {
        case "video/mp4":
            return this.options.supportsMP4;
        case "video/webm":
            return this.options.supportsWebM;
    }
};

/*
 *  Creates a new instance of the player in the specified container.
 */
CS50.Video.prototype.createPlayer = function() {
    var me = this;
    var $container = $(me.options.playerContainer);

    // clear out old containers 
    $container.empty();
    
    // construct new HTML for the player video area
    // XXX: depending on the video type, construct the different player types (html5 concatenated, etc.)
    $container = $container.html(me.templates.player({
        video: me.options.currentVideo,
        canvasHtml: me.templates.playerCanvas({
            video: me.options.currentVideo
        })
    })).find('.video50-wrapper');
    
    // XXX: only if necessary, cache canvases
    me.canvases = $container.find('.video50-canvas');
    if (me.options.currentVideo.numVideos == 1) {
        $container.addClass('single-video');
    } 

    // create player controls separately
    $container.append(this.templates.playerControls({
        playbackRates: this.options.playbackRates,
        downloads: this.options.downloads,
        captions: this.options.captions,
        defaultLanguage: this.options.defaultLanguage,
        files: this.options.files,
        supportsMP4: this.options.supportsMP4,
        supportsWebM: this.options.supportsWebM
    }));

    // construct the flash fallback if necessary
    if (me.options.fallback) {
        $container.find('.video50-source-video').attr('src', ''); 
        $container.find('.video50-source-video-fallback').attr('id', me.options.fallbackId);
        $container.find('.video50-source-video-fallback-wrapper').addClass('activated');
        this.flashPlayer = jwplayer(me.options.fallbackId).setup({
            file: this.options.currentVideo.file,
            width: "100%",
            aspectratio: "16:9",
            primary: "flash",
            controls: false,
            autostart: true
        });
    }
    
    // RESIZING CODE STARTS HERE
    // default position of the dragger, and % of the container's
    // viewport width taken up by the larger video
    var containerX = .65 * $container.width();
    var oldRatio = .65;

    // resize the video whenever the container has the possibility of being resized
    $(window).on('resize', function() {
        if (!me.options.fallback) {
            // recalcuate correct position of dragger based on old video ratio
            var newX = oldRatio * $container.width();
            resizeVideos(newX);
        }
        // XXX: fill in behavior for flash fallback
    });
    
    // given a desired keystoned width, gets the appropriate original width
    var reverseResize = function(desired, angle, z) {
        var a = angle / 360.0 * Math.PI;
        return (z * desired)/(z * Math.cos(a) - desired * Math.sin(a));
    }
   
    // resizes the videos appropriately and positions the dragger at dividing point = x
    var resizeVideos = function(x) {
        // do not allow main video to become smaller than 50% of viewport
        var ratio = x/$container.width();
        if (ratio < .5)
            return;
      
        // do not allow ancilliary video to become smaller than 200px wide
        if ($container.width() - x < 200)
            return;

        // else, update our resizing variables to reflect new state
        containerX = x;
        oldRatio = ratio;

        // update the position of the slider
        if ($container.hasClass("single-video")) {
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
        $container.find('.video50-ancilliary-videos > .video50-canvas').css({
            "-webkit-transform": drStr,
            "-moz-transform": drStr,
            "-ms-transform": drStr,
            "-o-transform": drStr,
            "transform": drStr,
        });

        // calculate new widths that will result in keystone widths fititng in containers
        var mvWidth = $container.find('.video50-main-video-wrapper').width();
        var mvHeight = mvWidth * 9.0/16.0;
        var ovWidth = reverseResize($container.find('.video50-ancilliary-videos').width(), -degreeRight, 200);
        var ovHeight = ovWidth * 9.0/16.0;

        $container.find(".video50-main-video-wrapper").css({
            height: mvHeight
        });
        var $main = $container.find('.video50-main-video-wrapper > .video50-video');
        $main.css({
            width: mvWidth,
            top: -mvHeight * $main.attr('data-segment')
        });
        $container.find(".video50-ancilliary-videos > .video50-canvas").css({
            width: ovWidth,
            height: ovHeight
        });

        // vertical centering for the containers
        $container.find('.video50-main-video-wrapper')
                  .css('margin-top', -$container.find('.video50-main-video-wrapper').height()/2);
        $container.find('.video50-ancilliary-videos')
                  .css('margin-top', -$container.find('.video50-ancilliary-videos').height()/2);
    }
   
    // toggle clicked video to main video in left panel
    $container.on('click', '.video50-ancilliary-videos .video50-canvas', function() {
        // simply swap the data-segment id of the two video canvases 
        var oldMain = $container.find('.video50-main-video-wrapper .video50-video')
                                .attr('data-segment');
        var newMain = $(this).attr('data-segment');

        $container.find('.video50-main-video-wrapper .video50-video')
                  .attr('data-segment', newMain);
        
        $container.find('.video50-main-video-wrapper .video50-video')
                  .css('top', - newMain * $container.find('.video50-main-video-wrapper').height()); 

        $(this).attr('data-segment', oldMain);
    });
    
    // handle the mouse on and off behavior of the video dragger
    var move = false;
    $container.on('mousedown', '.video50-dragger', function(e) {
        move = true;
    })
    
    $(document).on('mouseup', function(e) {
        move = false;
    });
   
    $(document).on('mousemove', function(e) {
        if (move) {
            resizeVideos(e.pageX - $container[0].offsetLeft);
        }
    });

    // video related updates 
    var video = $container.find(".video50-source-video")[0];

    // play pause interactions
    $container.on('mousedown', '.video50-play-pause-control, .video50-main-video-wrapper', function() {
        var playPauseButton = $container.find('.video50-play-pause-control')
        if (playPauseButton.toggleClass('pause').hasClass('pause')) {
            if (me.options.fallback)
                me.flashPlayer.play(false); 
            else
                video.pause();
        } 
        else {
            if (me.options.fallback)
                me.flashPlayer.play(false); 
            else
                video.play();
        }
    });
 
    // seek around by clicking on the progress bar
    $container.on('mousedown', '.video50-timeline', function(e) {
        var ratio = (e.pageX - $(this).offset().left)/$(this).width();
        if (me.options.fallback) {
            var player = me.flashPlayer;
            player.seek(ratio * player.getDuration());
        }
        else
            video.currentTime = ratio * video.duration;
    });    

    // skip back 8 seconds when skip back control is hit
    $container.on('mousedown', '.video50-sb-control', function(e) {
        if (me.options.fallback) {
            var player = me.flashPlayer;
            var time = player.getPosition() < 8 ? 0 : player.getPosition() - 8;
            player.seek(time);
        } 
        else {
            var time = video.currentTime < 8 ? 0 : video.currentTime - 8;
            video.currentTime = time;
        }
    });

    // skip forward 30 seconds when skip forward control is hit
    $container.on('mousedown', '.video50-sf-control', function(e) {
        if (me.options.fallback) {
            var player = me.flashPlayer;
            var time = player.getPosition() + 30 > player.getDuration() ? player.getDuration() : player.getPosition() + 30;
            player.seek(time);
        }
        else {
            var time = video.currentTime + 30 > video.duration ? video.duration : video.currentTime + 30;
            video.currentTime = time;
        }
    });

    // toggle play list controls
    $container.on('mousedown', '.video50-control-toggle', function(e) {
        var $child = $(this).find('.video50-control-list');
        $container.find('.video50-control-list').not($child).hide();
        $child.toggle();
    });    

    $container.on('mousedown', '.video50-speed-control [data-rate]', function(e) {
        e.preventDefault();

        // no speed control for flash version
        // XXX: notify that this doesn't work on the flash version
        if (me.options.fallback) {
            return; 
        }
        
        var speed = $(this).attr('data-rate');
        $container.find('.video50-curspeed').text(speed + "x");
        $(this).addClass('active').siblings().removeClass('active');
        video.playbackRate = speed;
    });
    
    // change the caption language, and change the caption download language
    $container.on('mousedown', '.video50-captions-control [data-lang]', function(e) {
        e.preventDefault();
        var short = $(this).attr('data-lang');
        $container.find('.video50-transcript-download')
                    .text("SRT (" + CS50.Video.Languages[short]+ ")")
                    .attr('href', me.options.captions[short]);
        me.loadCaption(short);
    });

    $container.on('mousedown', '.video50-quality-control [data-index]', function(e) {
        e.preventDefault();

        // grab the quality of the new video and the file path, updating the UI
        var i = $(this).attr('data-index');
        var quality = me.options.files[i].singleHeight;
        var path = me.options.files[i].file;
        me.options.currentVideo = me.options.files[i];
        $container.find('.video50-curquality').text(quality + "p");
        $(this).addClass('active').siblings().removeClass('active');

        // save the old time, swap the file out, and once the metadata 
        // has loaded, skip forward
        if (me.options.fallback) {
            var player = me.flashPlayer;
            var oldTime = player.getPosition();
            player.sendEvent('LOAD', path);
            player.seek(oldTime);
        }
        else {
            // remove or add canvases depending on the number of required video, cache canvases
            $container.find('.video50-canvas-area').replaceWith(me.templates.playerCanvas({
                video: me.options.currentVideo
            }));
            me.canvases = $container.find('.video50-canvas');
            
            // toggle class for fullscreen video in the case of a nonsplit
            if (me.options.currentVideo.numVideos == 1) {
                $container.addClass('single-video');
            }
            else {
                $container.removeClass('single-video');
            }
           
            // trigger a resize to make sure everything is the correct dimensions
            $(window).trigger('resize');

            var oldTime = video.currentTime;
            video.src = path;
            $(video).on('loadedmetadata.change', function(e) {
                video.currentTime = oldTime;
                $(this).off('loadedmetadata.change');
            });
        }
    });

    // fullscreen control
    $container.on('mousedown', '.video50-fullscreen-control', function(e) { 
        // select the right destination
        if (me.options.fallback) {
            var container = $container.find('.video50-source-video-fallback-wrapper')[0];
        }
        else {
            var container = $container.find('.video50-main-video-wrapper')[0];
        }

        if (!$(this).hasClass('active')) {
            if (container.requestFullscreen) {
              container.requestFullscreen();
            } else if (container.mozRequestFullScreen) {
              container.mozRequestFullScreen();
            } else if (container.webkitRequestFullscreen) {
              container.webkitRequestFullscreen();
            }
        }
        else {
            if (document.cancelFullscreen) {
              document.cancelFullscreen();
            } else if (document.mozCancelFullScreen) {
              document.mozCancelFullScreen();
            } else if (document.webkitCancelFullscreen) {
              document.webkitCancelFullscreen();
            }
        }
    });

    // handle exiting out of fullscreen via esc key, and dom changes on fullscreen
    $(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange', function(e) {
        // select the right destination
        if (me.options.fallback) {
            var container = $container.find('.video50-source-video-fallback-wrapper')[0];
        }
        else {
            var container = $container.find('.video50-main-video-wrapper')[0];
        }
        
        if (!document.fullscreenElement && !document.mozFullScreenElement && 
            !document.webkitFullscreenElement) {
            // move fullscreen controls back to the multivideo display
            $container.removeClass('fullscreen');
            $container.find('.video50-fullscreen-control').removeClass('active');
            $container.find('.video50-control-bar').appendTo($container);
        } 
        else {
            // move fullscreen controls so they are part of fullscreened video
            $container.addClass('fullscreen');
            $container.find('.video50-fullscreen-control').addClass('active');
            $container.find('.video50-control-bar').appendTo($(container));
        }
    }); 

    // prevent control bar clicks from pausing the main video
    $container.on('mousedown', '.video50-control-bar', function(e) {
        e.stopPropagation();
    });

    // handle keypress changes on the video
    $container.on('keydown', function(e) {
        switch(e.which) {
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
                // handle swapping the video with key numbers
                var segment = e.which - 49;
                $container.find('[data-segment=' + segment + ']').click();
                break;
            case 32:
                $container.find('.video50-main-video-wrapper').trigger('mousedown');
                break;
            default:
                break;
        }
    });

    // control fading out of videos
    CS50.controlFade = undefined;
    $container.on('mousemove', function(e) {
        clearTimeout(CS50.controlFade);
        $container.find('.video50-control-bar').fadeIn();
        CS50.controlFade = setTimeout(function() {
            $container.find('.video50-control-bar').fadeOut();
        }, 3000);
    });
    $container.trigger('mousemove');

    // trigger a resize to get the correct dimensions for the initialization
    $(window).trigger('resize');


    // load closed captioning and set closed captioning to happen in a loop
    this.loadCaption(this.options.defaultLanguage);
   
    if (this.options.fallback) {
        // flash timeupdate event
        me.flashPlayer.onTime(function(e) {
            if (!me.lastUpdate || (me.lastUpdate + 500) < (new Date).getTime()) {
                // update highlight on the transcript, update cc
                me.updateTranscriptHighlight(e.position);
                me.updateCC(e.position);
                me.updateTimeline(e.position);           
                me.lastUpdate = (new Date).getTime();
            }
        });
    } 
    else {
        // html5 timeupdate event
        $container.find('.video50-source-video').on('timeupdate', function(e) {
            if (!this.lastUpdate || (this.lastUpdate + 500) < (new Date).getTime()) {
                // update highlight on the transcript, update cc
                me.updateTranscriptHighlight(e.target.currentTime);
                me.updateCC(e.target.currentTime);
                me.updateTimeline(e.target.currentTime);           
     
                this.lastUpdate = (new Date).getTime();
            }
        });

        // set redrawing the video to run on a loop
        this.redrawVideo(video);
    }
};

CS50.Video.prototype.updateTimeline = function(time) {
    var me = this;
    var time = Math.floor(time);
    var $container = $(this.options.playerContainer);
    var video = $container.find('.video50-source-video')[0];   

    // update the length
    if ($container.find('.video50-timelength').text() == "") {
        if (this.options.fallback)
            var total = Math.floor(me.flashPlayer.getDuration());
        else
            var total = Math.floor(video.duration);
        var m = Math.floor(total / 60);
        var s = total % 60;
        m = m < 10 ? "0" + m : m;
        s = s < 10 ? "0" + s : s;
        $container.find('.video50-timelength').text(m + ":" + s);   
    }

    // update the timecode
    var m = Math.floor(time / 60);
    var s = time % 60;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    $container.find('.video50-timecode').text(m + ":" + s);

    // update the length of the bar
    if (this.options.fallback)
        var ratio = time / me.flashPlayer.getDuration();
    else
        var ratio = time / video.duration;
    $container.find('.video50-progress').css("width", (ratio * 100) + "%");
};

/*
 *  Updates the closed captioning for the video player.
 */
CS50.Video.prototype.updateCC = function(time) {
    var time = Math.floor(time);
    var $container = $(this.options.playerContainer);
    var $active = $container.find('.video50-transcript-container [data-time="' + time + '"]');
    var $text = $container.find('.video50-cc-text');

    // if current CC is not correct
    if ($active.length && $text.attr('data-time') != time) {
        $text.text($active.text());
    }  
};

/**
 * Highlight the line corresponding to the current point in the video in the transcript
 *
 */
CS50.Video.prototype.updateTranscriptHighlight = function(time) {
    var time = Math.floor(time);
    var $container = $(this.options.playerContainer).find('.video50-transcript-container');
    var $active = $container.find('[data-time="' + time + '"]');

    // check if a new element should be highlighted
    if ($active && $active.length) {
        // remove all other highlights
        $container.find('a').removeClass('highlight');

        // add highlight to active element
        $active.addClass('highlight');
    }
};

/**
 * Load the specified caption file.
 *
 * @param lang Language to load
 *
 */
CS50.Video.prototype.loadCaption = function(language) {
    var player = this.player;
    var me = this;

    if (this.options.captions[language]) {
        $.get(this.options.captions[language], function(response) {
            var timecodes = response.split(/\n\s*\n/);

            // if transcript container is given, then build transcript
            if (_.keys(me.options.captions).length) {
                // clear previous text
                var $container = $(me.options.playerContainer).find('.video50-transcript-container');
                
                // look for a previous caption if already active, keep the timecode
                var oldTime = $container.find('.highlight[data-time]').attr('data-time');
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
                        if (content.match(/^(>>|\[)/))
                            $container.append('<br /><br />');

                        // convert from hours:minutes:seconds to seconds
                        var time = timestamp.match(/(\d+):(\d+):(\d+)/);
                        var seconds = parseInt(time[1], 10) * 3600 + parseInt(time[2], 10) * 60 + parseInt(time[3], 10);

                        // add line to transcript
                        $container.append('<a href="#" data-time="' + seconds + '">' + content + '</a> ');
                    }
                }

                // if there was a previously active timecode, update cc and highlight
                if (oldTime) {
                    var time = { position: oldTime };
                    me.updateCC(time);
                    me.updateTranscriptHighlight(time);
                }
            }
        });
    }
};


/*
 *  Draws a frame from the video to the canvases.
 */
CS50.Video.prototype.redrawVideo = function(video) {
    // for each canvas object, draw the appropriate segment onto the canvas
    var that = this;
    that.canvases.each(function(i, canvas) {
        var context = canvas.getContext('2d');
        var segment = canvas.getAttribute('data-segment');
        var rows = that.options.currentVideo.rows;
        var cols = that.options.currentVideo.cols;
        var height = that.options.currentVideo.singleHeight;
        var width = that.options.currentVideo.singleWidth;
        var y = Math.floor(segment / cols) * height;
        var x = (segment % cols) * width;
        context.drawImage(video, x, y, width, height, 0, 0, width, height);
    });

    // redraw the video at approximately 30fps
    setTimeout(function() { that.redrawVideo(video) }, 20);
};
