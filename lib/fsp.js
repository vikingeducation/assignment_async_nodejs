var fs = require('fs');

var fsp = {
  readFile: function(path) {
    return new Promise(function(resolve, reject) {
      fs.readFile(path, 'utf-8', (err, data) => {
        err ? reject(err) : resolve(data);
      });
    });
  },
  writeFile: function(path, msg) {
    return new Promise(function(resolve, reject) {
      fs.writeFile(path, msg, 'utf-8', (err, data) => {
        err ? reject(err) : console.log(msg);
      });
    });
  },
  appendFile: function(path, msg) {
    return new Promise(function(resolve, reject) {
      fs.appendFile(path, msg, 'utf-8', (err, data) => {
        err ? reject(err) : console.log(msg);
      });
    });
  }
};

module.exports = fsp;
