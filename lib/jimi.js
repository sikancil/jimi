var sys = require('sys'),
    url = require('url'),
    connect = require('connect');

var respond = exports.respond = function respond(res, body, content_type, status) {
    content_type = content_type || 'text/html';
    res.writeHead(status || 200, {
        'Content-Type': content_type  + '; charset=utf-8'
    });
    res.write(body, 'utf8');
    res.end();
};

function create_app(url_mappings) {
    
    function build_url_mappings(url_mappings, partial_pattern) {
        var mappings = [];
        partial_pattern = partial_pattern || '';
        url_mappings.map(function (pair) {
            if (partial_pattern) {
                pair[0] = partial_pattern + pair[0].substring(1,pair[0].length);
            } else {
                pair[0] = pair[0].charAt(0) + '/' + pair[0].substring(1,pair[0].length);
            }
            if (typeof(pair[1]) == 'object') {
                build_url_mappings(pair[1], pair[0]).map(function (pair) {
                    mappings.push(pair);
                });
            } else {
                mappings.push(pair);
            }
        });
        return mappings;
    }

    function is_valid_path(compiled, path) {
        var valid = false;
        for (var pair, i = 0; pair = compiled[i]; i++) {
            var match = pair[0](path);
            if (match) {
                valid = true;
                break;
            }
        }
        return valid;
    }
    
    var compiled = build_url_mappings(url_mappings).map(function (pair) {
        return [new RegExp(pair[0]), pair[1]];
    });
    
    return function (req, res) {
        var path = url.parse(req.url).pathname;
        if (path.length > 1) {
            if (!is_valid_path(compiled, path) && is_valid_path(compiled, path + '/')) {
                res.redirect(req.url + '/');
            }
        }
        var view = function (req, res) { respond(res, '', '', 404); };
        var args = [req, res];
        for (var pair, i = 0; pair = compiled[i]; i++) {
            var match = pair[0](path);
            if (match) {
                match.slice(1).forEach(function (arg) {
                    args.push(arg);
                });
                view = pair[1];
                break;
            }
        }
        try {
            view.apply(null, args);
        } catch (e) {
            throw new Error(e);
        }
    };
}

exports.run = function (options) {
    var application = create_app((options.url_conf.mappings || []));
    var port = (options.port || 8009);
    var debug = (options.debug || false);
    var public_path = (options.public_path || '.');
    sys.puts((debug ? '(debug) ' : '') + 'jimi running on port ' + port + '...\n');
    if (options.debug) {
        return connect.createServer(
            connect.logger(),
            connect.redirect(),
            connect.staticProvider(public_path),
            application,
            connect.errorHandler({
                dumpExceptions: true,
                showStack: true
            })
        ).listen(port);
    } else {
        return connect.createServer(
            connect.redirect(),
            connect.staticProvider(public_path),
            application
        ).listen(port);
    }
};