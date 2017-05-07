var fs = require('fs');

var fsp = {

  readFile: function(filename) {
    return new Promise(function(fulfill, reject) {
      fs.readFile(filename, 'utf8', function(err, res) {
        if (err) reject(err);
        else fulfill(res);
      });
    });
  },

  writeFile: function(filename, data) {
    return new Promise(function(fulfill, reject) {
      fs.writeFile(filename, data, 'utf8', function(err, res) {
        if (err) reject(err);
        else fulfill("successful");
        });
      });
    },

    appendFile: function(filename, data) {
      return new Promise(function(fulfill, reject) {
        fs.appendFile(filename, data, 'utf8', function(err, res) {
          if (err) reject(err);
          else fulfill("successful");
        });
      });
    }
  }


module.exports = fsp;
