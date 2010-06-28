var jimi = require('jimi');

options = {
    url_conf: require('./urls'),
    public_path: __dirname + '/public',
    debug: true
}

jimi.run(options);