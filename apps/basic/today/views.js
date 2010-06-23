var jimi = require('jimi');

var now = new Date();
var month_names = new Array("January", "February", "March", "April", "May",
    "June", "July", "August", "September", "October", "November", "December");
var today = {
    day: now.getDay(),
    month: month_names[now.getMonth()],
    year: now.getFullYear()
}
exports.today = function(req, res) {
    jimi.respond(res, 'Today is: ' + today.day + '/' + today.month + '/' + today.year);
}

exports.day = function(req, res) {
    jimi.respond(res, 'The day of the month is: ' + today.day);
}

exports.month = function(req, res) {
    jimi.respond(res, 'The month is: ' + today.month);
}

exports.year = function(req, res) {
    jimi.respond(res, 'The year is: ' + today.year);
}