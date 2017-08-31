var fs = require('fs');

var fsp = {
  readFile: function(path) {
    return new Promise(function(resolve, reject) {
      fs.readFile(path, 'utf8', function(err, data) {
        err ? console.error(err) : resolve(data);
      });
    });
  },
  writeFile: function(path, text) {
    return new Promise(function(resolve, reject) {
      fs.writeFile(path, text, 'utf8', function(err, data) {
        err ? console.error(err) : resolve(fsp.readFile(path));
      });
    });
  },
  appendFile: function(path, text) {
    return new Promise(function(resolve, reject) {
      fs.appendFile(path, text, 'utf8', function(err, data) {
        err ? console.error(err) : resolve(fsp.readFile(path));
      });
    });
  }
};
