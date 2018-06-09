//Take the Node.js fs modules and wrap in promises.
var fs = require('fs');

var fsp = {
  readFile: function (path) {
    return new Promise (function (resolve,reject) {
      fs.readFile (path, 'utf8', (err,data) => {
        err ? console.log(err) : resolve(data);
      });
    });
  },
  writeFile : function (path, data) {
    return new Promise ( function (resolve, reject) {
      fs.writeFile(path, data, function(err) {
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
  },
  appendFile : function (path, data) {
    return new Promise ( function (resolve, reject) {
      fs.appendFile(path, data, function(err) {
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
  }
}

module.exports = fsp;
