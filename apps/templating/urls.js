var agents = require('./agents');

exports.mappings = [
    ['^$', agents.root],
    ['^delay/', require('./delay/urls').mappings],
    ['^favicon\.ico$', agents.favicon]
];