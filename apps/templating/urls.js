var jimi = require('../../jimi/core');
var views = require('./views');

var url_mappings = exports.mappings = [
    ['^$', views.root],
    ['^delay/', require('./delay/urls').mappings]
];

// static file serving & favicon
url_mappings.push(['^(static/.*)$', jimi.static_serve]);
url_mappings.push(['^favicon\.ico$', views.favicon]);