var handlers = require('./handlers');

exports.mappings = [
    ['^$', handlers.root],
    ['^delay/', require('./delay/urls').mappings],
    ['^favicon\.ico$', handlers.favicon]
];