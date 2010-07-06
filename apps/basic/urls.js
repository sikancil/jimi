var handlers = require('./handlers');

var mappings = exports.mappings = [
    ['^$', handlers.root],
    ['^redirect/$', handlers.redirect],
    ['^error/$', handlers.error],
    ['^delay/', require('./delay/urls').mappings],
    ['^today/', require('./today/urls').mappings]
];

mappings.push(['^favicon\.ico$', handlers.favicon]);