// maintain compatibility with other CS50 libraries
var CS50 = CS50 || {};
CS50.Video.Render = CS50.Video.Render || {};

/**
 * Check an answer via the remote server
 *
 * @param question Question being answered
 * @param answer Student's selected answer
 *
 */
CS50.Video.Render.checkRemote = function(question, answer, video, callback) {
    // if no check url defined, then use survey50
    if (!video.options.checkUrl)
        video.options.checkUrl = video.options.survey50Url + '/survey/questions/check';

    // disable button while submitting
    $(video.options.playerContainer).find('.btn-submit').attr('disabled', true).text('Submitting...');

    // send answer to server
    $.ajax({
        dataType: 'jsonp',
        url: video.options.checkUrl,
        data: { 
            id: question.id,
            answer: answer,
            jsonp: true
        }, 
        success: function(response) {
            // inform the user if the response was correct
            CS50.Video.Render.displayCorrectness(response.correct, video);
            $(video.options.playerContainer).find('.btn-submit').attr('disabled', false).text('Submit Response');

            // finish with this question
            callback.call(video, question.id, response.correct, {});
        }
    });
};

/**
 * Display a message informing the user if their answer was correct
 *
 * @param correct Whether or not the user was correct
 * @param video Video player
 * @param $container Container to display alert within
 *
 */
CS50.Video.Render.displayCorrectness = function(correct, video, $container) {
    // if no container given, add to player
    if ($container === undefined)
        $container = $(video.options.playerContainer).find('.question-content');

    // remove previous messages from the container
    $container.find('.alert').remove();

    // display message depending on correctness of answer
    if (correct)
        var $message = $('<div class="alert alert-success"><strong>Correct!</strong></div>');       
    else
        var $message = $('<div class="alert alert-error">That\'s not the right answer, <strong>try again!</strong></div>');

    // display message
    $message.hide().appendTo($container).fadeIn('fast');
}

/**
 * Renderer for a multiple choice question
 *
 * @param video Video player object
 * @param container Container for question to be rendered within
 * @param data Question data
 * @param callback Response callback
 * @return Input element user types into
 * @param remote Whether or not the question is checked remotely, defaults to true
 *
 */
CS50.Video.Render.FreeResponse = function(video, container, data, callback, remote) {
    // render question and input area placeholder
    var $container = $(container);
    $container.append('<h2>' + CS50.Video.Render.renderCodeTags(data.question) + '</h2>');
    var $placeholder = $('<input type="text" class="txt-answer-location" />');
    $container.append($placeholder);

    // syntax highlight the post
    $container.find('pre').each(function(i, e) { hljs.highlightBlock(e, null) });

    // create input area that is absolutely positioned to avoid transform weirdness
    var $input = $('<input type="text" class="video50-txt-answer" />');
    setTimeout(function() {
        var offset = $placeholder.offset();
        $input.css({ position: 'absolute', 'top': offset.top + 'px', 'left': offset.left + 'px', 'z-index': 999 });
        $('body').append($input);
        $placeholder.css({ visibility: 'hidden' });
    }, 1000);

    // create submit button, hidden by default
    var $submit = $('<button class="btn btn-submit">Submit Response</button>').hide();
    $container.append($submit);

    // when submit button is pressed, check the answer
    var me = this;
    $container.on('click', '.btn-submit', function(e) {
        // local question
        if (remote === undefined || remote === false) {
            // a correct answer matches the supplied regex
            var correct = $input.val().match(data.answer);
            CS50.Video.Render.displayCorrectness(correct, video);

            // finish this question
            callback.call(video, data.id, correct, {});
        }

        // remote question
        else
            CS50.Video.Render.checkRemote(data, $input.val(), video, callback);

        e.preventDefault();
        return false;
    });

    // when answer is selected, make sure submit button is shown
    $('body').on('keyup', '.video50-txt-answer', function(e) {
        var $submit = $container.find('.btn-submit');
        var $input = $('.video50-txt-answer');

        // toggle submit button based on input state
        if ($input.val().match(/^\s*$/) && $submit.is(':visible'))
            $submit.fadeOut('fast');
        else if (!$submit.is(':visible'))
            $submit.fadeIn('fast');

        e.stopPropagation();
    });

    return $input;
};

/**
 * Renderer for a remote free response question
 *
 * @param video Video player object
 * @param container Container for question to be rendered within
 * @param data Question data
 * @param callback Response callback
 *
 */
CS50.Video.Render.FreeResponseRemote = function(video, container, data, callback) {
    CS50.Video.Render.FreeResponse(video, container, data, callback, true);
};

/**
 * Renderer for a multiple choice question
 *
 * @param video Video player object
 * @param container Container for question to be rendered within
 * @param data Question data
 * @param callback Response callback
 * @param remote Whether or not the question is checked remotely, defaults to true
 *
 */
CS50.Video.Render.MultipleChoice = function(video, container, data, callback, remote) {
    // render question title
    var $container = $(container);
    $container.append('<h2>' + CS50.Video.Render.renderCodeTags(data.question) + '</h2>');

    // syntax highlight the post
    $container.find('pre').each(function(i, e) { hljs.highlightBlock(e, null) });

    // display each choice
    $choices = $('<div class="question-choices">');
    _.each(data.choices, function(e, i) {
        $choices.append('<input id="' + i + '" type="radio" name="question" value="' + i + '" />' + 
            '<label for="' + i + '">' + _.escape(e) + '</label><br />');
    });

    // create submit button, hidden by default
    var $submit = $('<button class="btn btn-submit">Submit Response</button>').hide();

    // add display questions
    $container.append($choices);
    $container.append($submit);

    // when submit button is pressed, check the answer
    var me = this;
    $container.on('click', '.btn-submit', function(e) {
        var answer = parseInt($container.find('input[type=radio]:checked').val());

        // represent true and false in the natural way
        if (data.trueFalse)
            answer = Number(!answer);

        // local question
        if (remote === undefined || remote === false) {
            // the index of the selected answer must match the correct answer
            var correct = (data.answer == answer);
            CS50.Video.Render.displayCorrectness(correct, video);

            // finish this question
            callback.call(video, data.id, correct, {});
        }

        // remote question
        else
            CS50.Video.Render.checkRemote(data, answer, video, callback);

        e.preventDefault();
        return false;
    });

    // when answer is selected, make sure submit button is shown
    $container.on('click', '.question-choices input[type=radio]', function() {
        $submit = $container.find('.btn-submit');
        if (!$submit.is(':visible')) {
            $submit.fadeIn('fast');
        }
    });
};

/**
 * Renderer for a remote multiple choice question
 *
 * @param video Video player object
 * @param container Container for question to be rendered within
 * @param data Question data
 * @param callback Response callback
 *
 */
CS50.Video.Render.MultipleChoiceRemote = function(video, container, data, callback) {
    CS50.Video.Render.MultipleChoice(video, container, data, callback, true);
};

/**
 * Renderer for a question with a numeric answer
 *
 * @param video Video player object
 * @param container Container for question to be rendered within
 * @param data Question data
 * @param callback Response callback 
 * @param remote Whether or not the question is checked remotely, defaults to true
 *
 */
CS50.Video.Render.Numeric = function(video, container, data, callback, remote) {
    // if no tolerance given, then assume exact answer
    data.tolerance = (data.tolerance === undefined) ? 1 : data.tolerance;

    // render free response
    var $input = CS50.Video.Render.FreeResponse(video, container, data, callback);

    // swap out event handler
    var $container = $(container);
    $container.off('click', '.btn-submit');

    // when submit is pressed, check answer
    var me = this;
    $container.on('click', '.btn-submit', function(e) {
        // make sure answer is given as a float
        var val = parseFloat($input.val());

        // local question
        if (remote === undefined || remote === false) {
            var correct = (!isNaN(val) && val <= data.answer + data.answer * data.tolerance && 
                val >= data.answer - data.answer * data.tolerance);
            CS50.Video.Render.displayCorrectness(correct, video);

            // finish this question
            callback.call(video, data.id, correct, {});
        }

        // remote question
        else
            CS50.Video.Render.checkRemote(data, val, video, callback);

        e.preventDefault();
        return false;
    });
};

/**
 * Renderer for a remote numeric question
 *
 * @param video Video player object
 * @param container Container for question to be rendered within
 * @param data Question data
 * @param callback Response callback
 *
 */
CS50.Video.Render.NumericRemote = function(video, container, data, callback) {
    CS50.Video.Render.Numeric(video, container, data, callback, true);
};

/**
 * Renderer for a true/false question
 *
 * @param video Video player object
 * @param container Container for question to be rendered within
 * @param data Question data
 * @param callback Response callback
 * @param remote Whether or not the question is checked remotely, defaults to true
 *
 */
CS50.Video.Render.TrueFalse = function(video, container, data, callback, remote) {
    // true/false is really just multiple choice
    CS50.Video.Render.MultipleChoice(video, container, {
        answer: data.answer,
        choices: ['True', 'False'],
        id: data.id,
        question: data.question,
        tags: data.tags,
        trueFalse: true,
    }, callback, remote);
};

/** 
 * Format the content of a post so that code and tt tags show
 * @param content Content to clean
 * @return Cleaned version of string
 *
 */
CS50.Video.Render.renderCodeTags = function(content) {
    // replace <code> with <pre>
    content = content.replace(/&lt;code&gt;/g, '<pre>').replace(/&lt;\/code&gt;/g, '</pre>');
    content = content.replace(/&lt;pre&gt;/g, '<pre>').replace(/&lt;\/pre&gt;/g, '</pre>');

    // enable <tt> elements
    content = content.replace(/`([^`]*)`/g, function($1) { return '<tt>' + $1.replace(/`/g, '') + '</tt>'; });       
    content = content.replace(/&lt;tt&gt;/g, '<tt>').replace(/&lt;\/tt&gt;/g, '</tt>');

    return content;
};

/**
 * Renderer for a remote true/false question
 *
 * @param video Video player object
 * @param container Container for question to be rendered within
 * @param data Question data
 * @param callback Response callback
 *
 */
CS50.Video.Render.TrueFalseRemote = function(video, container, data, callback) {
    CS50.Video.Render.TrueFalse(video, container, data, callback, true);
};
