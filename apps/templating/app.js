require('jimi').run({
    url_conf: require('./urls'),
    template_path: __dirname + '/templates',
    public_path: __dirname + '/public',
    debug: true
});