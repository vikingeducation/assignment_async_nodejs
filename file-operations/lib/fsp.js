var fs = require('fs');

var fsp = {};

// readFile(fd, options, cb)
fsp.readFile = function(path, options) {
  if (!options) {
    options = 'utf8';
  }
  return new Promise(function(resolve, reject) {
    fs.readFile(path, options, function(err, data) {
      err ? reject(err) : resolve(data);
    });
  });
};

// writeFile(fd, data, cb)
fsp.writeFile = function(path, data) {
  return new Promise(function(resolve, reject) {
    fs.writeFile(path, data, function(err) {
      err ? reject(err) : resolve(data);
    });
  });
};

// appendFile(fd, data, cb)
fsp.appendFile = function(path, data) {
  return new Promise(function(resolve, reject) {
    fs.appendFile(path, data, function(err) {
      err ? reject(err) : resolve(fsp.readFile(path));
    });
  });
};

module.exports = fsp;
