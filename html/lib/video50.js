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
 *      srt: object, maps language abbreviation to URLs of SRT files
 *      title: string title of the video
 *      video: string for single video, or 
 *             object that maps bitrate to a single video source's URL, or
 *             object that maps bitrate to an array of video URLs, if the videos are not concatenated. 
 *
 */
CS50.Video = function(options) {
    this.options = options;

    // required options must be defined
    if (!this.options.playerContainer)
        throw 'Error: You must define a container for CS50 Video!';
    if (!this.options.video)
        throw 'Error: You must define a video for CS50 Video to play!';

    // XXX: handle different argument types of "video" option

    // fill in default values for optional, undefined values
    this.options = $.extend({
        aspectRatio: 16/9,
        defaultLanguage: 'en',
        onReady: false,
        numVideos: 1,
        playbackRates: [0.7, 1, 1.2, 1.5],
        title: '',
    }, this.options);

    // private member variable for template structure
    var templateHtml = {
        player: ' \
            <div class="video-wrapper"> \
                <video class="source-video" autoplay src="<%= video %>"> \
                </video> \
                <div class="left"> \
                  <div class="main-video-wrapper"> \
                    <canvas class="video-canvas" width="640" height="360" data-segment="1"></canvas> \
                    <div class="video50-cc-container"> \
                        <div class="video50-cc-text"></div> \
                    </div> \
                  </div> \
                </div> \
                <% if (numVideos > 1) { %> \
                    <div class="dragger">  \
                    </div> \
                    <div class="right"> \
                      <div class="ancilliary-videos"> \
                        <% for (var i = 2; i <= numVideos; i++) { %> \
                            <canvas class="video-canvas" width="640" height="360" data-segment="<%= i %>"></canvas> \
                        <% } %> \
                      </div> \
                    </div> \
                <% } %> \
            </div> \
        ',
        
        playerControls: ' \
            <div class="control-bar"> \
              <div class="left-controls"> \
                <div class="play-pause-control"></div><div class="skip-control"> \
                </div> \
              </div> \
              <div class="time"> \
                <div class="timecode"></div> \
                <div class="timeline"><div class="progress"></div></div> \
                <div class="timelength"></div> \
              </div> \
              <div class="right-controls"> \
                <div class="download-control"></div><div class="captions-control"> \
                    <div class="video50-transcript-container"></div> \
                </div><div class="speed-control" data-speed="1"> \
                    1x \
                </div><div class="quality-control"> \
                  HD \
                </div><div class="fullscreen-control"> \
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
 *  Creates a new instance of the player in the specified container.
 */
CS50.Video.prototype.createPlayer = function() {
    var me = this;
    
    // clear out old containers and add video player html
    var $container = $(this.options.playerContainer);
    $container.empty();
    $container = $container.html(this.templates.player({
        video: this.options.video,
        numVideos: this.options.numVideos
    })).find('.video-wrapper');
    $container.append(this.templates.playerControls({}));

    // RESIZING CODE STARTS HERE
    // default position of the dragger, and % of the container's
    // viewport width taken up by the larger video
    var containerX = .65 * $container.width();
    var oldRatio = .65;

    // resize the video whenever the container has the possibility of being resized
    $(window).on('resize', function() {
        // recalcuate correct position of dragger based on old video ratio
        var newX = oldRatio * $container.width();
        resizeVideos(newX);
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
        $container.find('.left').css('width', x);
        $container.find('.right').css('left', x + 1);
        $container.find('.dragger').css('left', x + 1);
     
        // calculate and invoke keystoning for ancilliary videos
        var degreeRight = ratio <= .6 ? 0 : (.6 - ratio) * 45;
        var drStr = "rotateY(" + degreeRight + "deg)";
        $container.find('.ancilliary-videos > .video-canvas').css({
            "-webkit-transform": drStr,
            "-moz-transform": drStr,
            "-ms-transform": drStr,
            "-o-transform": drStr,
            "transform": drStr,
        });

        // calculate new widths that will result in keystone widths fititng in containers
        var mvWidth = $container.find('.main-video-wrapper').width();
        var mvHeight = mvWidth * 9.0/16.0;
        var ovWidth = reverseResize($container.find('.ancilliary-videos').width(), -degreeRight, 200);
        var ovHeight = ovWidth * 9.0/16.0;
        $container.find(".main-video-wrapper > .video-canvas").css({
            width: mvWidth,
            height: mvHeight
        });
        $container.find(".ancilliary-videos > .video-canvas").css({
            width: ovWidth,
            height: ovHeight
        });

        // vertical centering for the containers
        $container.find('.main-video-wrapper').css('margin-top', -$container.find('.main-video-wrapper').height()/2);
        $container.find('.ancilliary-videos').css('margin-top', -$container.find('.ancilliary-videos').height()/2);
    }
    
    // toggle clicked video to main video in left panel
    $container.on('click', '.ancilliary-videos .video-canvas', function() {
        // simply swap the data-segment id of the two video canvases 
        var oldMain = $container.find('.main-video-wrapper .video-canvas').attr('data-segment');
        var newMain = $(this).attr('data-segment');

        $container.find('.main-video-wrapper .video-canvas').attr('data-segment', newMain);
        $(this).attr('data-segment', oldMain);
    });
    
    // handle the mouse on and off behavior of the video dragger
    var move = false;
    $container.on('mousedown', '.dragger', function(e) {
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
    var video = $container.find(".source-video")[0];

    // play pause
    $container.on('mousedown', '.play-pause-control', function() {
        $(this).toggleClass('pause');
    
        if ($(this).hasClass('pause')) {
            video.pause();
        } else {
            video.play();
        }
    });
 
    // seek around by clicking on the progress bar
    $container.on('mousedown', '.timeline', function(e) {
        var ratio = (e.pageX - $(this).offset().left)/$(this).width();
        video.currentTime = ratio * video.duration;
    });    

    // skip back 30 seconds on the 30 second button
    $container.on('mousedown', '.skip-control', function(e) {
        var time = video.currentTime < 30 ? 0 : video.currentTime - 30;
        video.currentTime = time;
    });    

    // toggle video speed
    $container.on('mousedown', '.speed-control', function(e) {
        var index = (parseInt($(this).attr('data-speed')) + 1) % me.options.playbackRates.length;
        var speed = me.options.playbackRates[index];
        $(this).attr('data-speed', index);
        $(this).text(speed + "x");
        video.playbackRate = speed;
     });    

    // trigger a resize to get the correct dimensions for the initialization
    $(window).trigger('resize');

    // load closed captioning and set closed captioning to happen in a loop
    this.loadSrt(this.options.defaultLanguage);
    $container.find('.source-video').on('timeupdate', function(e) {
        if (!this.lastUpdate || (this.lastUpdate + 500) < (new Date).getTime()) {
            // update highlight on the transcript, update cc
            me.updateTranscriptHighlight(e.target.currentTime + 7);
            me.updateCC(e.target.currentTime + 7);
            me.updateTimeline(e.target.currentTime);           
 
            this.lastUpdate = (new Date).getTime();
        }
    });

    // set redrawing the video to run on a loop
    this.redrawVideo(video);
};

CS50.Video.prototype.updateTimeline = function(time) {
    var time = Math.floor(time);
    var $container = $(this.options.playerContainer);
    var video = $container.find('.source-video')[0];   
 
    // update the length
    if ($container.find('.timelength').text() == "") {
        var total = Math.floor(video.duration);
        var m = Math.floor(total / 60);
        var s = total % 60;
        m = m < 10 ? "0" + m : m;
        s = s < 10 ? "0" + s : s;
        $container.find('.timelength').text(m + ":" + s);   
    }

    // update the timecode
    var m = Math.floor(time / 60);
    var s = time % 60;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    $container.find('.timecode').text(m + ":" + s);

    // update the length of the bar
    var ratio = time/video.duration;
    $container.find('.progress').css("width", (ratio * 100) + "%");
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
 * Load the specified SRT file.
 *
 * @param lang Language to load
 *
 */
CS50.Video.prototype.loadSrt = function(language) {
    this.srtData = {};
    var player = this.player;
    var me = this;

    if (this.options.srt[language]) {
        $.get(this.options.srt[language], function(response) {
            var timecodes = response.split(/\n\s*\n/);

            // if transcript container is given, then build transcript
            if (_.keys(me.options.srt).length) {
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
    var $container = $(this.options.playerContainer);
    $container.find('.video-canvas').each(function(i, canvas) {
        var context = canvas.getContext('2d');
        var x = ($(canvas).attr('data-segment') - 1) * 640;
        context.drawImage(video, x, 0, 640, 360, 0, 0, 640, 360);
    });

    // redraw the video at approximately 30fps
    var that = this;
    setTimeout(function() { that.redrawVideo(video) }, 30);
};
