var agents = require('./agents');

exports.mappings = [
    ['^$', agents.today],
    ['^day/$', agents.day],
    ['^month/$', agents.month],
    ['^year/$', agents.year]
];