var jimi = require('jimi');

exports.hello_world = function (req, res) {
    jimi.respond(res, 'Hello World');
}