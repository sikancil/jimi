var views = require('./views');

var url_mappings = exports.mappings = [
    ['^(\\d+)/$', views.delayed]
];