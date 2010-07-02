var views = require('./views')

exports.mappings = [
    ['^$', views.root],
    ['^delay/', require('./delay/urls').mappings],
    ['^favicon\.ico$', views.favicon]
];