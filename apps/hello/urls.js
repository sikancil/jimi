var handlers = require('./handlers');

exports.mappings = [
    ['^$', handlers.hello_world]
];