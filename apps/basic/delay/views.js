var jimi = require('jimi');

exports.delayed = function(req, res, how_long) {
    setTimeout(function() {
        jimi.respond(res, 'I was delayed by ' + how_long + ' milliseconds.');
    }, parseInt(how_long, 10));
}