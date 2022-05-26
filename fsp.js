var fs = require('fs');

var fsp = {
  readFile: function(file) {
    return new Promise(function(resolve, reject) {
      fs.readFile(file, 'utf8', function(err, data) {
        if (err) {
          reject('No Such File');
        } else {
          resolve(data);
        }
      });
    });
  },

  writeFile: function(file, text) {
    return new Promise(function(resolve, reject) {
      fs.writeFile(file, text, 'utf8', function(err) {
        if (err) {
          reject('There was an error');
        } else {
          resolve(text);
        }
      });
    });
  },

  appendFile: function(file, text) {
    return new Promise(function(resolve, reject) {
      fs.appendFile(file, text, 'utf8', function(err) {
        if (err) {
          reject('There was an error');
        } else {
          resolve(fsp.readFile(file));
        }
      });
    });
  }
};

module.exports = fsp;
