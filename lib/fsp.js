var fs = require('fs');

var fsp = {
  readFile: function(file) {
    return new Promise(function(resolve, reject) {
      fs.readFile(file, 'utf8', (err, data) => {
        err ? reject(err) : resolve(data);
      });
    });
  },
  writeFile: function(file, text) {
    return new Promise(function(resolve, reject) {
      fs.writeFile(file, text, 'utf8', (err) => {
        err ? reject(err) : resolve("The file was overwritten! Text is: \n" + text);
      });
    });
  },
  appendFile: function(file, text) {
    return new Promise(function(resolve, reject) {
      fs.appendFile(file, text, 'utf8', (err) => {
        err ? reject(err) : resolve(fsp.readFile(file));
      });
    });
  }
};

module.exports = fsp;