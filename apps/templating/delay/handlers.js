var jimi = require('jimi');

exports.delayed = function (req, res, how_long) {
    setTimeout(function () {
        var context = {
            how_long: how_long
        }
        jimi.respond_using_template(res, 'delay/delayed.html', context);
    }, parseInt(how_long, 10));
}