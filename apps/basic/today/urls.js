var handlers = require('./handlers');

exports.mappings = [
    ['^$', handlers.today],
    ['^day/$', handlers.day],
    ['^month/$', handlers.month],
    ['^year/$', handlers.year]
];