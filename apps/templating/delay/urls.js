var handlers = require('./handlers');

exports.mappings = [
    ['^(\\d+)/$', handlers.delayed]
];