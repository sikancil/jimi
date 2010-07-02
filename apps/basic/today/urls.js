var views = require('./views');

exports.mappings = [
    ['^$', views.today],
    ['^day/$', views.day],
    ['^month/$', views.month],
    ['^year/$', views.year]
];