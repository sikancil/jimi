var views = require('./views');

var mappings = exports.mappings = [
    ['^$', views.root],
    ['^redirect/$', views.redirect],
    ['^error/$', views.error],
    ['^delay/', require('./delay/urls').mappings],
    ['^today/', require('./today/urls').mappings]
];

mappings.push(['^favicon\.ico$', views.favicon]);