var jimi = require('jimi');
var views = require('./views');

var url_mappings = exports.mappings = [
    ['^$', views.root],
    ['^delay/', require('./delay/urls').mappings]
];

// favicon
url_mappings.push(['^favicon\.ico$', views.favicon]);