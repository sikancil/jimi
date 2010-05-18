var jimi = require('../../jimi/core');
var views = require('./views');

var url_mappings = exports.mappings = [
    ['^$', views.root],
    ['^redirect/$', views.redirect],
    ['^error/$', views.error],
    ['^delay/', require('./delay/urls').mappings],
    ['^today/', require('./today/urls').mappings]
];

// static file serving & favicon
url_mappings.push(['^(static/.*)$', jimi.static_serve]);
url_mappings.push(['^favicon\.ico$', views.favicon]);