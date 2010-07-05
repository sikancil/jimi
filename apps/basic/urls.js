var agents = require('./agents');

var mappings = exports.mappings = [
    ['^$', agents.root],
    ['^redirect/$', agents.redirect],
    ['^error/$', agents.error],
    ['^delay/', require('./delay/urls').mappings],
    ['^today/', require('./today/urls').mappings]
];

mappings.push(['^favicon\.ico$', agents.favicon]);