var jimi = require('../../jimi/core');

exports.root = function(req, res) {
    jimi.respond(res, '<h1>jimi</h1> \
        <ul> \
            <li><a href="/redirect">Redirect back to /</a></li> \
            <li><a href="/doesnotexist">Page not found (404)</a></li> \
            <li><a href="/error">Error page with stacktrace (500)</a></li> \
            <li><a href="/static/hello.txt">Static file: hello.txt</a></li> \
        </ul> \
        <h2>Delayed Response Module</h2> \
        <ul> \
            <li><a href="/delay/1000">1 second delay</a></li> \
            <li><a href="/delay/3000">3 second delay</a></li> \
            <li><a href="/delay/5000">5 second delay</a></li> \
        </ul> \
        <h2>Today Module</h2> \
        <ul> \
            <li><a href="/today">Today\'s full date</a></li> \
            <li><a href="/today/day">Today\'s day</a></li> \
            <li><a href="/today/month">Today\'s month</a></li> \
            <li><a href="/today/year">Today\'s year</a></li> \
        </ul> \
    ');
}

exports.error = function(req, res) {
    "simon"("not a function");
}

exports.redirect = function(req, res) {
    jimi.redirect(res, '/');
}

exports.favicon = function(req, res) {
    jimi.respond(res, 'Not here!');
}