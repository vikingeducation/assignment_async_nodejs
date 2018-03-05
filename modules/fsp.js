var fs = require('fs');

var fsp = {
  readFile: function(path) {
    var readF = new Promise(function(resolve, reject) {
      fs.readFile(path, 'utf8', function(err, data) {
        err ? reject('an error has occured')
        : resolve(data+'\nread from '+path);
      });
    });
    return readF;
  },

  writeFile: function(path, write) {
    var writeF = new Promise(function(resolve, reject) {
      fs.writeFile(path, write, function(err, data) {
        err ? reject('an error has occured')
        : resolve(write+' wrote to '+path);
      });
    });
    return writeF;
  },

  appendFile: function(path, write) {
    var appendF = new Promise(function(resolve, reject) {
      fs.appendFile(path, write, function(err, data) {
        err ? reject('an error has occured')
        : resolve(write+' appended to '+path);
      });
    });
    return appendF;
  }
};

module.exports = fsp;
