'use strict';

let fs = require('fs');

let fsp = {
  // Promises for reading!
  readFile: function(path) {
    return new Promise(function(resolve, reject) {
      fs.readFile(path, 'utf8', function(error, data) {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      })
    });
  },

  writeFile: function(path, content) {
    return new Promise(function(resolve, reject) {
      fs.writeFile(path, content, function(error) {
        if (error) {
          reject(error);
        } else {
          resolve(fsp.readFile(path));
        }
      })
    });
  },

  appendFile: function(path, content) {
    return new Promise(function(resolve, reject) {
      fs.appendFile(path, content, function(error) {
        if (error) {
          reject(error);
        } else {
          resolve(fsp.readFile(path));
        }
      })
    });
  },

}


module.exports = fsp;
