var fs = require('fs');

var fsp = {
    readFile: function(path) {
        return new Promise(function(resolve, reject) {
            fs.readFile(path, 'utf8', function(err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    },

    writeFile: function(path, message) {
        return new Promise(function(resolve, reject) {
            fs.writeFile(path, message, 'utf8', function(err) {
                if (err) {
                    reject(err);
                } else {
                    resolve(fsp.readFile(path));
                }
            });
        });
    },

    appendFile: function(path, message) {
        return new Promise(function(resolve, reject) {
            fs.appendFile(path, message, 'utf8', function(err) {
                if (err) {
                    reject(err);
                } else {
                    resolve(fsp.readFile(path));
                }
            });
        });
    },
};

module.exports = fsp;