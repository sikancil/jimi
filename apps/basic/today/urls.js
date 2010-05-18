var views = require('./views');

var url_mappings = exports.mappings = [
    ['^$', views.today],
    ['^day/$', views.day],
    ['^month/$', views.month],
    ['^year/$', views.year]
];