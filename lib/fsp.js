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


// writeFile(file, data, options, cb)
fsp.writeFile = function(path, options) {
  if (!options) {
    options = 'utf8';
  }

  return new Promise(function(resolve, reject) {
    fs.writeFile(path, options, function(err) {
      if (err) {
        reject(err);
      } else {
        fsp.readFile(path)
          .then(function(data) {
            resolve(data);
          })
          .catch(function(err) {
            reject(err);
          });
      }
    });
  });
};


// appendFile(file, data, options, cb)
fsp.appendFile = function(path, data, options) {
  if (!options) {
    options = 'utf8';
  }

  return new Promise(function(resolve, reject) {
    fs.appendFile(path, data, options, function(err) {
      if (err) {
        reject(err);
      } else {
        fsp.readFile(path)
          .then(function(data) {
            resolve(data);
          })
          .catch(function(err) {
            reject(err);
          });
      }
    });
  });
};


module.exports = fsp;














