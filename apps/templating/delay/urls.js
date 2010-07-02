var views = require('./views');

exports.mappings = [
    ['^(\\d+)/$', views.delayed]
];