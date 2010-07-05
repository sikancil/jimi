var agents = require('./agents');

exports.mappings = [
    ['^(\\d+)/$', agents.delayed]
];