var jimi = require('jimi');
var template_loader = require('jimi/template/loader');

exports.root = function(req, res) {
    template_loader.load_and_render('root.html', {}, function (error, result) {
        if (!error) {
            jimi.respond(res, result, 'text/html');
        }
    });
}

exports.favicon = function(req, res) {
    jimi.respond(res, 'Not here!');
}