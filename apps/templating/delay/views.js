var jimi = require('jimi');
var template_system = require('jimi/template/template');
var template_loader = require('jimi/template/loader');

exports.delayed = function(req, res, how_long) {
    setTimeout(function() {
        var context = {
            how_long: how_long
        }
        template_loader.set_path('templates');
        template_loader.load_and_render('delay/delayed.html', context, function (error, result) {
            if (error) {
                jimi.default_show_500(req, res, error);
            } else {
                jimi.respond(res, result, 'text/html');
            }
        });
    }, parseInt(how_long, 10));
}