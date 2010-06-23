exports.has = function (object, key) {
    return Object.prototype.hasOwnProperty.call(object, key);
};

exports.mixin = function () {
    return variadicHelper(arguments, function(target, source) {
        var key;
        for (key in source) {
            if (exports.has(source, key)) {
                target[key] = source[key];
            }
        }
    });
};

exports.deepMixin = function (target, source) {
    var key;
	for (key in source) {
        if(exports.has(source, key)) {
            if(typeof source[key] == "object" && exports.has(target, key)) {
                exports.deepUpdate(target[key], source[key]);
            } else {
                target[key] = source[key];
            }
        }
    }
};

var variadicHelper = function (args, callback) {
    var sources = Array.prototype.slice.call(args);
    var target = sources.shift();

    sources.forEach(function(source) {
        callback(target, source);
    });

    return target;
};