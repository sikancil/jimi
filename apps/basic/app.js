var jimi = require('../../jimi/core');

url_mappings = require('./urls').mappings;

app = jimi.make_app(url_mappings);

jimi.run(app, 8009);
