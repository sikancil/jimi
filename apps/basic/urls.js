var jimi = require('jimi');
var views = require('./views');

var url_mappings = exports.mappings = [
    ['^$', views.root],
    ['^redirect/$', views.redirect],
    ['^error/$', views.error],
    ['^delay/', require('./delay/urls').mappings],
    ['^today/', require('./today/urls').mappings]
];

// favicon
url_mappings.push(['^favicon\.ico$', views.favicon]);