var fs = require('fs');

var fsp = {
  readFile:  function(path) {
    return new Promise(function(resolve) {
      fs.readFile(path, 'utf8', (err, data) => {
        if (err) throw err;
        resolve(data);
      });
    });
  },
  writeFile: function(path, text) {
    fs.writeFile(path, text, (err) => {
      if (err) throw err;
    });
    return this.readFile(path);
  },
  appendFile: function(path, text) {
    fs.appendFile(path, text, (err, data) => {
      if (err) throw err;
    });
    return this.readFile(path);
  }
};

module.exports = fsp;
