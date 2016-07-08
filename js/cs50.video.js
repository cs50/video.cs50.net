// maintain compatibility with other CS50 libraries
var CS50 = CS50 || {};

/**
 * CS50 Video constructor
 *
 * @param options Player options:
 *      aspectRatio: Aspect ratio for the video
 *      autojoin: Group slug to automatically join upon logging in
 *      autostart: True to start video automatically, false otherwise
 *      baseUrl: Base URL for video50's directory
 *      checkUrl: URL to be used for checking the answers to questions remotely
 *      defaultLanguage: Default language for transcript and subtitles
 *      defaultVideo: If using multiple video URLs, the video to play by default
 *      download: String of single download URL, or object containing multiple download URLs
 *      mixpanelKey: API key for Mixpanel analytics
 *      onReady: Function to be called when player is ready
 *      playbackRates: List of supported playback rates
 *      playerContainer: Container to render player within
 *      playerOptions: Additional options to pass to the video player
 *      questions: List of questions to be displayed during video
 *      srt: Object mapping languages to SRT file locations
 *      streamUrl: Base URL for RTMP streaming
 *      survey50: Survey ID if using survey50 integration
 *      survey50Url: CNAME to use if using survey50 integration
 *      title: Title of Video
 *      user: User object for analytics tracking
 *      video: String of single video URL, or object containing multiple video URLs
 *          (if using RTMP streaming, this must be relative to streamUrl and videoUrl)
 *      videoUrl: Only used if using RTMP streaming; base URL for video file
 *
 */
CS50.Video = function(options) {
    this.options = options;

    // make sure default options are defined
    if (!this.options.playerContainer)
        throw 'Error: You must define a container for the player!';
    if (!this.options.video)
        throw 'Error: You must define a video to play!';

    // if video is an object, make sure default key is given
    if (typeof(this.options.video) == 'object' && !this.options.defaultVideo)
        throw 'Error: You must define a default video to play!';

    // determine initial video to play
    this.currentVideo = (typeof(this.options.video) == 'object') ? this.options.video[this.options.defaultVideo].path : this.options.video;

    // specify default values for optional parameters
    this.options = $.extend({
        aspectRatio: 16/9,
        autojoin: false,
        autostart: true,
        baseUrl: '.',
        checkUrl: false,
        defaultLanguage: 'eng',
        defaultVideo: false,
        download: false,
        mixpanelKey: false,
        onReady: false,
        playbackRates: [0.75, 1, 1.25, 1.5],
        playerOptions: {},
        questions: [],
        srt: {},
        streamUrl: false,
        survey50: false,
        survey50Url: 'http://apps.cs50.com',
        title: '',
        user: { id: 0, name: '' },
        videoUrl: false
    }, this.options);

    // if stream url given, add to player options
    if (this.options.streamUrl) {
        this.options.playerOptions.provider = 'rtmp';
        this.options.playerOptions.streamer = this.options.streamUrl;
    }

    // if base url given, prefix video
    var html5Video = this.currentVideo;
    if (this.options.videoUrl)
        html5Video = this.options.videoUrl + this.currentVideo;

    // default options to video player
    this.options.playerOptions = $.extend({
        controlbar: 'bottom',
        file: this.currentVideo,
        provider: 'http',
        modes: [{ 
            type: 'html5' ,
            config: {
                file: html5Video,
                provider: 'video'
            }
        }, { 
            type: 'flash', 
            src: [this.options.baseUrl, 'player.swf'].join('/')
        }],
        width: '100%',
        skin: [this.options.baseUrl, 'skins/glow/glow.xml'].join('/')
        /*plugins: {
            'captions-2': {
                files: _.values(this.options.srt).join(),
                labels: _.map(_.keys(this.options.srt), function(e) { return CS50.Video.Languages[e] }).join(),
                state: false
            }
        }*/
    }, this.options.playerOptions);

    // templates for plugin
    var templateHtml = {
        playbackControls: ' \
            <div class="video50-playback-controls"> \
                <% if (typeof(videos) == "object") { %> \
                    <div class="btn-group btn-video-select"> \
                        <a class="btn dropdown-toggle" data-toggle="dropdown" href="#"> \
                            <%= defaultVideo %> <span class="caret"></span> \
                        </a> \
                        <ul class="dropdown-menu"> \
                            <% for (var i in videos) { %> \
                                <li><a href="#" data-video="<%= videos[i].path %>"><%= i %></a></li> \
                            <% } %> \
                        </ul> \
                    </div> \
                <% } %> \
                <% if (typeof(downloads) == "object") { %> \
                    <div class="btn-group btn-download"> \
                        <a class="btn dropdown-toggle" data-toggle="dropdown" href="#"> \
                            Download <span class="caret"></span> \
                        </a> \
                        <ul class="dropdown-menu"> \
                            <% for (var i in downloads) { %> \
                                <li><a href="<%= downloads[i] %>" target="_blank"><%= i %></a></li> \
                            <% } %> \
                        </ul> \
                    </div> \
                <% } else { %> \
                    <a href="<%= downloads %>" target="_blank" class="btn btn-download">Download</a> \
                <% } %> \
                <ul class="nav nav-pills speed-pills"> \
                    <% for (var i in rates) { %> \
                        <li data-rate="<%= rates[i] %>" class="btn-playback-rate"> \
                            <a href="#"><%= rates[i] %>x</a> \
                        </li> \
                    <% } %> \
                </ul> \
            </div> \
        ',

        player: ' \
            <div class="video50-player panel"> \
                <div class="player-navbar"> \
                    <button class="btn btn-back"><i class="icon-arrow-left"></i> Back</button> \
                    <div class="player-navbar-title"><%= title %></div> \
                    <div class="btn-group-right"> \
                        <button class="btn btn-questions btn-modal"> \
                            <span class="questions-number">0</span> \
                            <span>Questions</span> \
                        </button> \
                        <div class="btn-group btn-group-transcript"> \
                            <button class="btn btn-transcript btn-modal"><i class="icon-search"></i></button> \
                            <button class="btn btn-cc"><span class="cc-label">CC</span></button> \
                            <button class="btn dropdown-toggle" data-toggle="dropdown"> \
                                <span class="caret"></span> \
                            </button> \
                            <ul class="dropdown-menu transcript-lang pull-right"> \
                                <li> \
                                    <table> \
                                        <tr> \
                                        <% var counter = 0; %> \
                                        <% _.each(srt, function(elem, key) { %> \
                                            <% if (counter % 12 == 0) { %> \
                                                <td> \
                                            <% } %> \
                                            <a href="#" data-lang="<%= key %>"> \
                                                <%= CS50.Video.Languages[key] %> \
                                                <% counter++ %> \
                                            </a> \
                                            <% if (counter % 12 == 0) { %> \
                                                </td> \
                                            <% } %> \
                                        <% }) %> \
                                        </tr> \
                                    </table> \
                                </li> \
                            </ul> \
                        </div> \
                    </div> \
                </div> \
                <div class="flip-container"> \
                    <div class="video-container"> \
                        <div class="noflash"> \
                            <a href="http://get.adobe.com/flashplayer" target="_blank">Download Flash</a> to view this video. \
                        </div> \
                    </div> \
                    <div class="cc-container"> \
                        <div class="cc-text"></div> \
                    </div> \
                    <div class="modal-container"> \
                        <div class="transcript-container"> \
                            <div class="transcript-text-wrapper"> \
                                <div class="transcript-text"></div> \
                            </div> \
                            <div class="transcript-search-wrapper"> \
                                <input class="transcript-search" placeholder="Search...">\
                                <i class="icon-search"></i> \
                            </div> \
                        </div> \
                    </div> \
                    <div class="flip-question-container video50-question"> \
                        <div class="question-content"></div> \
                    </div> \
                </div> \
            </div> \
        ',

        notifications: ' \
            <div class="video50-notifications"> \
                <table class="table table-bordered table-striped"> \
                    <thead> \
                        <tr> \
                            <td class="video50-notifications-options" colspan=2> \
                                <strong>Available Questions</strong> \
                                <input id="video50-notifications-auto" type="checkbox" /> \
                                <label for="video50-notifications-auto">Automatically go to new questions</label> \
                                <input id="video50-notifications-all" type="checkbox" /> \
                                <label for="video50-notifications-all">Show all questions for this video</label> \
                            </td> \
                        </tr> \
                    </thead> \
                    <tbody></tbody> \
                </table> \
            </div> \
        ',

        notification: ' \
            <tr data-question-id="<%= question.question.id %>"> \
                <% if (question.state == CS50.Video.QuestionState.CORRECT) { %> \
                    <td class="question-state" style="width: 1px"><i class="icon-ok"></i></td> \
                <% } else if (question.state == CS50.Video.QuestionState.INCORRECT) { %> \
                    <td class="question-state" style="width: 1px"><i class="icon-remove"></i></td> \
                <% } else { %> \
                    <td class="question-state" style="width: 1px"></td> \
                <% } %> \
                <td> \
                    <a href="#" rel="tooltip" title="<%- question.question.question.substring(0, 255) %>"> \
                        <% \
                            if (question.question.tags && question.question.tags.length) \
                                print(question.question.tags.join(", ")); \
                            else \
                                print(question.question.question); \
                        %> \
                    </a> \
                </td> \
            </tr> \
        ',

        
    };

    jQuery.expr[':'].Contains = function(a, i, m) {
        return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
    };

    // compile templates
    this.templates = {};
    for (var template in templateHtml)
        this.templates[template] = _.template(templateHtml[template]);

    // determine browser support for the flippity flip
    this.supportsFlip = ((function IEVersion() {
        var rv = -1;
        if (navigator.appName == 'Microsoft Internet Explorer') {
            var ua = navigator.userAgent;
            var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
            if (re.exec(ua) != null)
            rv = parseFloat(RegExp.$1);
        }
        return rv;
    })() == -1);

    // sort questions by timecode
    this.options.questions.sort(function(a, b) { return (a.timecode - b.timecode); }); 

    // initialize analytics
    if (!this.options.mixpanelKey)
        window.analytics50 = false;

    else if (!window.analytics50) {
        window.analytics50 = new CS50.Analytics({
             mixpanel: { 
                 token: this.options.mixpanelKey
             }
        }, true);

        // identify user
        window.analytics50.identify(this.options.user.id);
        window.analytics50.name_tag(this.options.user.name);
    }

    // if survey50 ID given, then load questions remotely
    if (this.options.survey50)
        this.loadSurvey50();

    // no survey50 usage, so use local questions
    else {
        // mark all questions as unseen
        _.each(this.options.questions, function(e) {
            e.state = CS50.Video.QuestionState.UNSEEN;
        });

        this.createPlayer();
    }
};

// question state constants
CS50.Video.QuestionState = {
    UNSEEN: 'unseen',
    UNANSWERED: 'unanswered',
    CORRECT: 'correct',
    INCORRECT: 'incorrect'
};

/**
 * Check if a new question is available, adding it to the notifications container if so
 *
 */
CS50.Video.prototype.checkQuestionAvailable = function(time) {
    var player = this.player;
    var $container = $(this.notificationsContainer).find('tbody');

    // check if show all questions is checked
    var showAll = $(this.notificationsContainer).find('#video50-notifications-all').prop('checked');

    // check if any of the given questions should be displayed at this timecode
    var me = this;
    var unseen = 0;
    _.each(this.options.questions, function(e, i) {
        // question should be shown if timecodes match and it isn't already shown
        if (e.timecode <= Math.floor(time.position) && 
                !$container.find('tr[data-question-id="' + e.question.id + '"]').length) {

            // don't take both actions on the same question
            if (me.currentQuestion != e.question.id) {
                // automatically go to the new question if user checked that box
                if ($(me.notificationsContainer).find('#video50-notifications-auto').is(':checked') &&
                        e.timecode == Math.floor(time.position))
                    me.showQuestion(e.question.id)

                // put question at the top of the list of available questions
                var $question = $(me.templates.notification({
                    question: e
                }))
    
                $question.find('td').hide();
                $container.prepend($question);
                $question.find('td').fadeIn('fast', function() {
                    $question.find('[rel=tooltip]').tooltip({
                        placement: 'right'
                    });
                })
            }
        }
        
        // keep track of questions that haven't been seen yet
        if ((e.timecode <= Math.floor(time.position) || showAll) && e.state == CS50.Video.QuestionState.UNSEEN)
            unseen++;
    })
    
    // update question count
    var $num = $(me.options.playerContainer).find('.questions-number');
   
    // bounce if number of questions increases
    if (unseen > parseFloat($num.text())) {
        // update the number 
        $num.text(unseen);

        // clear old bounces, set up new bounce
        clearInterval(me.bounceInterval);
        
        me.bounceInterval = setInterval(function() {
            $num.animate({"margin-top": "-10px"}, 300, 'jswing')
            .animate({"margin-top": "0px"}, 400, 'easeOutBounce');
        }, 1500);

        // bounce disappears after 10 seconds
        clearInterval(me.bounceTimeout);
        me.bounceTimeout = setTimeout(function() {
            clearInterval(me.bounceInterval);
        }, 10000);
    } 
    else {
        // update the number 
        $num.text(unseen);
    }
};


/**
 * Force a container to redraw itself, needed for fullscreen bugfix. 
 * http://stackoverflow.com/questions/8927478/jquery-css-rendering-works-in-firefox-not-in-chrome
 */
CS50.Video.prototype.forceRedraw = function($container) {
    $container[0].style.display = 'none';
    $container[0].offsetHeight; // no need to store this anywhere, the reference is enough
    $container[0].style.display = 'block';
    $(window).trigger('resize');
   
    // I don't even why doesn't the full screen event have a callback
    setTimeout(function() {
        $(window).trigger('resize');
    }, 1000);
    
    setTimeout(function() {
        $(window).trigger('resize');
    }, 2000);
}

/**
 * Create a new instance of the video player at the specified container
 *
 */
CS50.Video.prototype.createPlayer = function(seekStart) {
    // create html for video player
    var $container = $(this.options.playerContainer);
    $container.empty();

    $container.html(this.templates.player({
        defaultLanguage: this.options.defaultLanguage,
        srt: this.options.srt,
        swf: this.options.swf,
        title: this.options.title,
    }));

    // show transcript button if there is a transcript
    if (_.keys(this.options.srt).length)
        $container.find('.btn-group-transcript').css({ 'display': 'inline-block' });

    // show questions button if there are questions
    if (this.options.questions.length != 0)
        $container.find('.btn-questions').css({ 'display': 'inline-block' });

    // apply degraded classes if flip is not supported
    if (!this.supportsFlip)
        $(this.options.playerContainer).find('.flip-container').addClass('degraded');

    // generate random id for player since jwplayer needs an id
    var id = Math.random().toString();
    $container.find('.video-container div').attr('id', id);

    // create video player
    var me = this;
    var NAVBAR_HEIGHT = 29;
    this.player = jwplayer(id).setup(this.options.playerOptions).onReady(function() {
        var width = $container.find('.video-container').width();
        var height = width / me.options.aspectRatio;
        jwplayer(id).resize(width, height + NAVBAR_HEIGHT);
        $container.find('.flip-question-container').css({ minHeight: height  + NAVBAR_HEIGHT });
        
        // update the font size of the captions
        $container.find('.cc-container .cc-text').css({
            "font-size": Math.max(12, width/45) + "px",
            "padding": (.00875 * width) + "px " + (.01 * width) + "px",
            "line-height": Math.max(12, width/45) + 6 + "px"
        });
    });

    // when resized, 
    $(window).on('resize', function() {
        // fit the player to the video, perfectly
        var width = $container.find('.video-container').width();
        var height = width / me.options.aspectRatio;
        jwplayer(id).resize(width, height + NAVBAR_HEIGHT);
        $container.find('.flip-question-container').css({ minHeight: height + NAVBAR_HEIGHT });
    
        // update the font size of the captions
        $container.find('.cc-container .cc-text').css({
            "font-size": Math.max(12, width/45) + "px",
            "padding": (.00875 * width) + "px " + (.01 * width) + "px",
            "line-height": Math.max(12, width/45) + 6 + "px"
        });
    }); 

    // player fullscreen
    this.player.onFullscreen(function(e) {
        if (window.analytics50)
            window.analytics50.track('video50/fullscreen', { video: me.currentVideo });
      
        // degrade webkit perspective so fixed positioning works
        if (e.fullscreen) {
            $container.find('.video50-player').addClass('fullscreen');
               
            // if safari, don't bother, since natively supports
            var userAgent = navigator.userAgent;
            if (userAgent.indexOf('Safari') != -1 && userAgent.indexOf('Chrome') == -1) {
                return;
            }
            
            // native fullscreen support
            var player = $container.find('.video50-player')[0];
            if (player.webkitRequestFullScreen)
                player.webkitRequestFullScreen();
            
        }
        else {
            if (document.webkitCancelFullScreen)
                document.webkitCancelFullScreen();
           
            $container.find('.video50-player').removeClass('fullscreen');
        }
        
        // redraw container to avoid FF and Chrome bug    
        me.forceRedraw($container);
    });

    // player pause
    this.player.onPause(function(e) {
        if (window.analytics50)
            window.analytics50.track('video50/pause', { video: me.currentVideo });
    });

    // player resume
    this.player.onPlay(function(e) {
        if (window.analytics50)
            window.analytics50.track('video50/play', { video: me.currentVideo });
    });

    // player seek
    this.player.onSeek(function(e) {
        if (window.analytics50)
            window.analytics50.track('video50/seek', { 
                from: e.position,
                to: e.offset,
                video: me.currentVideo 
            });
    });

    // update questions and transcripts as video plays
    this.player.onTime(function(e) {
        if (!this.lastUpdate || (this.lastUpdate + 500) < (new Date).getTime()) {
            // check if a new question is available
            me.checkQuestionAvailable(e);

            // update highlight on the transcript, update cc
            me.updateTranscriptHighlight(e);
            me.updateCC(e);
            
            this.lastUpdate = (new Date).getTime();
        }
    });

    var initialized = false;
    this.player.onPlay(function() {
        if (!initialized && seekStart) {
            setTimeout(function() {
                // skip to seek start
                me.player.seek(seekStart);
                initialized = true;

                // after video has seeked, show again
                setTimeout(function() {
                    me.player.setMute(false);
                    $container.find('.video-container').css('visibility', 'visible');
                }, 300);
            }, 300);
        }
    });

    this.player.onReady(function() {
        // if seek given, then hide video while seek occurs
        if (seekStart) {
            me.player.setMute(true);
            $container.find('.video-container').css('visibility', 'hidden');
        }

        // start video immediately if autostart is enabled
        if (me.options.autostart)
            me.player.play(true);

        // determine if browser is capable of variable playback speeds
        var canAdjustPlayback = (me.player.renderingMode != 'flash');
        if (!canAdjustPlayback)
            me.options.playbackRates = [];

        // display playback container
        var $playbackContainer = $(me.templates.playbackControls({ 
            defaultVideo: me.options.defaultVideo,
            downloads: me.options.download,
            rates: me.options.playbackRates,
            videos: me.options.video
        }));
        $container.find('.video50-playback-controls').remove();
        $container.find('.video50-player').after($playbackContainer);

        // 1 is the default playback rate
        $playbackContainer.find('[data-rate="1"]').addClass('active');

        // when playback button is changed, alter rate of video
        $playbackContainer.on('click', '.btn-playback-rate', function(e) {
            // highlight the current control and remove highlight from others
            $(this).siblings().removeClass('active');
            $(this).addClass('active');

            // adjust video rate
            var rate = parseFloat($(this).attr('data-rate'));
            $container.find('video')[0].playbackRate = rate;

            // log playback speed change
            if (window.analytics50)
                window.analytics50.track('video50/playbackRate', { 
                    rate: rate,
                    video: this.currentVideo 
                });

            e.preventDefault();
            return false;
        });

        // different video selected
        $playbackContainer.on('click', '.btn-video-select li a', function(e) {
            // remember where we were
            var position = me.player.getPosition();

            // if base url given, prefix video
            me.currentVideo = $(this).attr('data-video');
            var html5Video = me.currentVideo;
            if (me.options.videoUrl)
                html5Video = me.options.videoUrl + html5Video;

            // update player options
            me.options.defaultVideo = $(this).text();
            me.options.playerOptions.file = me.currentVideo;
            me.options.playerOptions.modes[0].config.file = html5Video;

            // refresh video player
            $(me.options.playerContainer).empty();
            me.createPlayer(position);

            return false;
        });

        // video downoaded
        $playbackContainer.on('click', '.btn-download li a', function(e) {
            // log download
            if (window.analytics50)
                window.analytics50.track('video50/download', {
                    href: $(this).attr('href'),
                    video: me.currentVideo
                });
        });

        // inform that player is ready
        if (typeof(me.options.onReady) === 'function') {
            me.options.onReady();
        }
    });

    $(document).on('mozfullscreenchange', function() {
        if (!document.mozFullScreen) {
            jwplayer(id).setFullscreen(false);
            
            $(window).trigger('resize');
            setTimeout(function() {
                $(window).trigger('resize');
            }, 1000);
            setTimeout(function() {
                $(window).trigger('resize');
            }, 2000);
        }
    });
    
    $(document).on('webkitfullscreenchange', function() {
        if (!document.webkitIsFullScreen) {
            jwplayer(id).setFullscreen(false);
            
            $(window).trigger('resize');
            setTimeout(function() {
                $(window).trigger('resize');
            }, 1000);
            setTimeout(function() {
                $(window).trigger('resize');
            }, 2000);
        }
    });

    $container.on('click', '.btn-modal', function(e) {
        // if this button is active already, undepress it
        if ($(this).hasClass('active'))
            $container.find('.btn-modal').removeClass('active');
        else
        {
            // otherwise, undepress all buttons, depress this one
            $container.find('.btn-modal').removeClass('active');
            $(this).addClass('active');
        }
    });

    // when back button is pressed, return to video
    $container.on('click', '.btn-back', function(e) {
        // hide button
        $(this).fadeOut('medium');

        // start video and flip back
        me.player.play(true);
        if (me.supportsFlip) {
            $container.find('.flip-container').removeClass('flipped');
            
            // remove input
            $('.video50-txt-answer').remove();
            $container.find('.modal-container').fadeIn();
            $container.find('.cc-container').fadeIn();

            // hide question list if it was not visible before
            if (!$(me.notificationsContainer).find('#video50-notifications-auto').is(':checked'))
                me.toggleModal($(me.notificationsContainer));

            // fade video back in while flip is occurring for smoothness
            $container.find('.video-container').fadeIn(600);
        }

        else {
            $container.find('.flip-question-container').fadeOut('fast', function() {
                // remove input
                $('.video50-txt-answer').remove();
                $container.find('.modal-container').fadeIn();
                $container.find('.cc-container').fadeIn();

                // hide question list if it was not visible before
                if (!$(me.notificationsContainer).find('#video50-notifications-auto').is(':checked'))
                    me.toggleModal($(me.notificationsContainer));

                // fade video back in while flip is occurring for smoothness
                $container.find('.video-container').fadeIn(600);
            });
        }
    });

    // toggle CC when toolbar button clicked
    $container.on('click', '.btn-cc', function(e) {
        if ($(this).hasClass('on')) {
            $(this).removeClass('on');
            $container.find('.cc-text').hide();
        }
        else {
            $(this).addClass('on');
            $container.find('.cc-text').css({ "display" : "inline-block" });
        }
    });

    // when transcript button pressed, toggle transcript
    $container.off('click', '.btn-transcript').on('click', '.btn-transcript', function(e) {
        // don't show transcript if we are viewing a question
        if ($container.find('.question-content').is(':visible')) {
            $(this).removeClass('active');
            return false;
        }

        var $transcript = $container.find('.transcript-container');
        me.toggleModal($transcript, function() {
            // scroll modal to the correct point
            if ($container.find('.transcript-text-wrapper .highlight').length) {
                var top = $container.find('.transcript-text-wrapper .highlight').position().top || 0;
                top -= $container.find('.transcript-container').height() / 2;
                $container.find('.transcript-text-wrapper').scrollTop(top);
            }
        });
    });

    // log video view
    if (window.analytics50)
        window.analytics50.track('video50/load', { video: this.currentVideo });

    this.loadSrt(this.options.defaultLanguage);
    this.createNotifications();
};

/**
 * Create a new instance of the notification area at the specified container
 *
 */
CS50.Video.prototype.createNotifications = function() {
    var me = this;
    var $player = $(this.options.playerContainer);
    
    // create notifications container
    var $modal = $player.find('.video50-player .modal-container');
    this.notificationsContainer = $('<div class="video50-player-questions">').hide()[0];
   
    // build notifications container
    var $container = $(this.notificationsContainer);
    $container.html(this.templates.notifications());
    $modal.append($container);

    // toggle modal when button clicked
    $player.on('click', '.btn-questions', function(e) {
        // don't show transcript if we are viewing a question
        if ($player.find('.question-content').is(':visible')) {
            $(this).removeClass('active');
            return false;
        }

        me.toggleModal($container);
    });

    // selecting a question should view displays that question
    var me = this;
    $container.on('click', 'a', function() {
        // display question
        var id = $(this).parents('[data-question-id]').attr('data-question-id');
        me.showQuestion(id);

        // remove selected question from list
        $(this).tooltip('hide');
    });

    // toggling the show all questions toggles unseen questions
    $container.on('change', '#video50-notifications-all', function() {
        // display all questions
        if ($(this).is(':checked')) {
            _.each(me.options.questions, function(e) {
                if (!$container.find('tr[data-question-id="' + e.question.id + '"]').length)
                    $container.find('tbody').append(me.templates.notification({
                        question: e
                    })).find('[rel=tooltip]').tooltip({
                        placement: 'right'
                    });
            });
        }

        // remove all questions that appear after the current timecode
        else {
            _.each(me.options.questions, function(e) {
                if (e.timecode > Math.floor(me.player.getPosition()))
                    $container.find('tr[data-question-id="' + e.question.id + '"]').remove();
            });
        }
    });
};

/**
 * Load the specified SRT file
 *
 * @param lang Language to load
 *
 */
CS50.Video.prototype.loadSrt = function(language) {
    this.srtData = {};
    var player = this.player;
    var me = this;
    
    $(me.options.playerContainer).find('.transcript-lang a[data-lang]').removeClass('active');
    $(me.options.playerContainer).find('.transcript-lang a[data-lang=' + language + ']').addClass('active');

    if (this.options.srt[language]) {
        $.get(this.options.srt[language], function(response) {
            var timecodes = response.split(/\n\s*\n/);

            // if transcript container is given, then build transcript
            if (_.keys(me.options.srt).length) {
                // clear previous text
                var $container = $(me.options.playerContainer).find('.transcript-text');
                
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

                // when transcript language is changed, refresh srt data and captioning
                $(me.options.playerContainer).off('click', '.transcript-lang a[data-lang]')
                    .on('click', '.transcript-lang a[data-lang]', function() {
                    var lang = $(this).attr('data-lang');
                    me.loadSrt(lang);
                    
                    // refresh transcript
                    if (!$(me.options.playerContainer).find('.btn-cc').is('.on'))
                        $(me.options.playerContainer).find('.btn-cc').click();
                });

                // when a line is clicked, seek to that time in the video
                $container.off('click', 'a').on('click', 'a', function() {
                    // determine timecode associated with line
                    var time = $(this).attr('data-time');

                    if (time) {
                        player.seek(Math.floor(time));
                        player.play(true);
                    }
                });

                // searching over a transcript
                $(me.options.playerContainer).off('keyup', '.transcript-search')
                    .on('keyup', '.transcript-search', function() {
                    if ($.trim($(this).val()) == "") {
                        $(me.options.playerContainer).find("[data-time], br")
                            .css({ "display": "inline", "margin-bottom": "0px" });
                   
                        $(me.options.playerContainer).find('.transcript-search-wrapper i')
                            .removeClass('icon-remove').addClass('icon-search');
                    }
                    else {
                        $(me.options.playerContainer).find('.transcript-search-wrapper i')
                            .removeClass('icon-search').addClass('icon-remove');
                        
                        $(me.options.playerContainer).find("[data-time], br").hide();
                        $(me.options.playerContainer).find("[data-time]:Contains('" + $(this).val() + "')")
                            .show().css({ "display": "block", "margin-bottom": "10px" });
                    }
                });
                
                $(me.options.playerContainer).off('click', '.transcript-search-wrapper i')
                    .on('click', '.transcript-search-wrapper i', function() {
                    $(me.options.playerContainer).find('.transcript-search-wrapper .transcript-search').val("");
                    $(me.options.playerContainer).find('.transcript-search').trigger('keyup');
                });
            }
        });
    }
};

/** 
 * Format the content of a post so that code and tt tags show up it can be highlighted correctly
 * @param content Content to clean
 * @return Cleaned version of string
 *
 */
CS50.Video.prototype.renderCodeTags = function(content) {
    // replace <code> with <pre>
    content = content.replace(/&lt;code&gt;/g, '<pre>').replace(/&lt;\/code&gt;/g, '</pre>');

    // enable <tt> elements
    content = content.replace(/`([^`]*)`/g, function($1) { return '<tt>' + $1.replace(/`/g, '') + '</tt>'; });         content = content.replace(/&lt;tt&gt;/g, '<tt>').replace(/&lt;\/tt&gt;/g, '</tt>');

    // strip paragraph tags only when within pre tags
    content = content.replace(/<pre>([\s\S]*)<\/pre>/g, function($1) {
        return $1.replace(/(<p>)|(<\/p>)/g, '')
                 .replace(/(&nbsp;\n){2}|(&nbsp;$)/g, '');
    });

    return content;
};

/**
 * Load questions from survey50
 *
 */
CS50.Video.prototype.loadSurvey50 = function() {
    // renders for survey50 question types
    var renderers = {
        0: CS50.Video.Render.MultipleChoiceRemote,
        1: CS50.Video.Render.NumericRemote,
        2: CS50.Video.Render.FreeResponseRemote,
        3: CS50.Video.Render.TrueFalseRemote
    };

    // check if user is logged in
    var me = this;
    $.ajax(this.options.survey50Url + '/users/authenticated', {
        data: {
            jsonp: true
        },
        dataType: 'jsonp',
        success: function(response) {
            // user does not have an authenticated session, so redirect
            if (!response.authenticated) {
                if (me.options.autojoin)
                    window.location.href = me.options.survey50Url + '/join/' + me.options.autojoin + 
                        '?return=' + window.location.href;
                else
                    window.location.href = me.options.survey50Url + '/login?return=' + window.location.href;
            }

            // save authenticated user
            me.options.user = response.user;
            if (window.analytics50) {
                window.analytics50.identify(me.options.user.id);
                window.analytics50.name_tag(me.options.user.name);
            }
        }
    });

    // load questions from survey50
    $.ajax(me.options.survey50Url + '/survey/surveys/get/' + me.options.survey50, {
        data: {
            jsonp: true
        },
        dataType: 'jsonp',
        success: function(response) {
            me.options.questions = [];
            _.each(response.Questions, function(e) {
                // parse question data/metadata
                var data = {};
                var metadata = {};
                if (e.question_data)
                    data = JSON.parse(e.question_data);
                if (e.metadata)
                    metadata = JSON.parse(e.metadata);

                // timecode must be defined for video50 questions
                if (metadata.timecode) {
                    // add basic question data
                    var question = {
                        timecode: metadata.timecode,
                        question: {
                            id: e.id,
                            question: e.question,
                            render: renderers[e.type],
                            tags: metadata.tags || []
                        }
                    };

                    // add each key from question data
                    for (var key in data)
                        question.question[key] = data[key];

                    // determine correctness of question
                    question.state = CS50.Video.QuestionState.UNSEEN;
                    _.each(e.Responses, function(r) {
                        if (question.state == CS50.Video.QuestionState.UNSEEN && !r.correct)
                            question.state = CS50.Video.QuestionState.INCORRECT;
                        else if (r.correct)
                            question.state = CS50.Video.QuestionState.CORRECT;
                    });

                    me.options.questions.push(question);
                }
            });

            // load video player
            me.createPlayer();
        }
    });
};

/**
 * Callback for logging question data
 * 
 * @param id ID of question that was answered
 * @param correct Whether or not the question was answered correctly
 * @param data Additional data to be logged by server
 *
 */
CS50.Video.prototype.renderCallback = function(id, correct, data) {
    // determine question that was answered
    var question = _.find(this.options.questions, function(e) { return e.question.id == id; });

    // keep track of new question state locally
    question.state = (correct) ? CS50.Video.QuestionState.CORRECT : CS50.Video.QuestionState.INCORRECT;

    // log event
    if (window.analytics50)
        window.analytics50.track('video50/answerQuestion', {
            correct: correct,
            id: id,
            video: this.currentVideo
        });

    // update notifications container
    var $cell = $(this.notificationsContainer).find('[data-question-id=' + id + ']').find('.question-state');
    if (correct)
        $cell.html('<i class="icon-ok"></i>');
    else
        $cell.html('<i class="icon-remove"></i>');

    return true;
};

/**
 * Show the question with the given ID
 *
 */
CS50.Video.prototype.showQuestion = function(id) {
    // determine question to show
    var question = _.find(this.options.questions, function(e) { return e.question.id == id; });

    if (question) {
        // log question view
        if (window.analytics50)
            window.analytics50.track('video50/viewQuestion', {
                id: id,
                video: this.currentVideo
            });

        // keep track of the current question
        this.currentQuestion = id;
        $('.video50-txt-answer').remove();

        // mark question as unanswered if it was previously unseen
        if (!question.state || question.state == CS50.Video.QuestionState.UNSEEN)
            question.state = CS50.Video.QuestionState.UNANSWERED;

        // stop video so we can think, think, thiiiiiink
        this.player.pause(true);

        // clear previous question contents and events
        var player = $(this.options.playerContainer);
        var $container = $(this.options.playerContainer).find('.flip-question-container .question-content');
        $container.empty().off();

        // untoggle question button
        player.find('.btn-questions').removeClass('active');

        // render question
        question.question.render(this, $container, question.question, this.renderCallback);

        // flip player to show question
        var me = this;
        $(this.options.playerContainer).find('.cc-container').fadeOut();
        $(this.options.playerContainer).find('.modal-container').fadeOut(100, function() {
            
            if (me.supportsFlip) {
                $(me.options.playerContainer).find('.video-container').fadeOut(600);
                $(me.options.playerContainer).find('.flip-container').addClass('flipped');
            }
            else {
                $(me.options.playerContainer).find('.video-container').fadeOut('fast', function() {
                    $(me.options.playerContainer).find('.flip-question-container').fadeIn('fast');
                });
            }
        });

        // display back button
        setTimeout(function() {
            player.find('.btn-back').show();
        }, 100);
    }
};

/**
 * Swaps out the current modal for the one passed in, or toggles if already visible
 *
 * @param modal jquery object for the modal to show
 *
 */
CS50.Video.prototype.toggleModal = function(modal, cb) {
    if (cb == undefined) {
        cb = function() {};
    }

    $container = $(this.options.playerContainer).find(".modal-container");
    if (modal.is(':hidden')) {
        $container.children().not(modal).slideUp('fast', function() {
            modal.slideDown('fast', cb);
        });
    }

    else
        modal.slideUp('fast', cb);

    return modal;
}

/**
 * Update CC based on current timecode
 *
 */
CS50.Video.prototype.updateCC = function(time) {
    var time = Math.floor(time.position);
    var $container = $(this.options.playerContainer);
    var $active = $container.find('.transcript-container [data-time="' + time + '"]');
    var $text = $container.find('.cc-container .cc-text');
 
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
    var time = Math.floor(time.position);
    var $container = $(this.options.playerContainer).find('.transcript-container');
    var $active = $container.find('[data-time="' + time + '"]');

    // check if a new element should be highlighted
    if ($active && $active.length) {
        // remove all other highlights
        $container.find('a').removeClass('highlight');

        // add highlight to active element
        $active.addClass('highlight');
    }
};

// add CORS support to IE
(function(c){if(c.browser.msie&&"XDomainRequest"in window&&!("__jquery_xdomain__"in c)){c.__jquery_xdomain__=c.support.cors=!0;var e=function(a){return"object"===c.type(a)?a:(a=/^(((([^:\/#\?]+:)?(?:\/\/((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?]+)(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/.exec(a))?{href:a[0]||"",hrefNoHash:a[1]||"",hrefNoSearch:a[2]||"",domain:a[3]||"",protocol:a[4]||"",authority:a[5]||"",username:a[7]||"",password:a[8]||"",host:a[9]||"", hostname:a[10]||"",port:a[11]||"",pathname:a[12]||"",directory:a[13]||"",filename:a[14]||"",search:a[15]||"",hash:a[16]||""}:{}},f=c.ajaxSettings.xhr,d="SESSION_COOKIE_NAME"in window?window.SESSION_COOKIE_NAME:"jsessionid",g=e(document.location.href).domain;c.ajaxSettings.xhr=function(){var a=e(this.url).domain;if(""===a||a===g)return f.call(c.ajaxSettings);try{var b=new XDomainRequest;if(!b.setRequestHeader)b.setRequestHeader=c.noop;if(!b.getAllResponseHeaders)b.getAllResponseHeaders=c.noop;if(d){var h= b.open;b.open=function(){var a=RegExp("(?:^|; )"+d+"=([^;]*)","i").exec(document.cookie);if(a=a&&a[1]){var b=arguments[1].indexOf("?");arguments[1]=-1==b?arguments[1]+(";"+d+"="+a):arguments[1].substring(0,b)+";"+d+"="+a+arguments[1].substring(b)}return h.apply(this,arguments)}}b.onload=function(){if("function"===typeof b.onreadystatechange)b.readyState=4,b.status=200,b.onreadystatechange.call(b,null,!1)};b.onerror=b.ontimeout=function(){if("function"===typeof b.onreadystatechange)b.readyState=4, b.status=500,b.onreadystatechange.call(b,null,!1)};return b}catch(i){}}}})(jQuery);
