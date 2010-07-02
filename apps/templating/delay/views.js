var jimi = require('jimi');
var template_loader = require('jimi/template/loader');

exports.delayed = function(req, res, how_long) {
    setTimeout(function() {
        var context = {
            how_long: how_long
        }
        template_loader.load_and_render('delay/delayed.html', context, function (error, result) {
            if (!error) {
                jimi.respond(res, result);
            }
        });
    }, parseInt(how_long, 10));
}