const fs = require("fs");

var fsp = {

  readFile: function(path) {
    return new Promise( function(resolve, reject) {
      fs.readFile(path, "utf8", function(err, data) {
        err ? reject(err) : resolve(data);
      });
    });
  },

  writeFile: function(path, content) {
    return new Promise( function(resolve, reject) {
      fs.writeFile(path, content, "utf8", function(err, data) {
        err ? reject(err) : resolve(data);
      });
    });
  },

  appendFile: function(path, content) {
    return new Promise( function(resolve, reject) {
      fs.appendFile(path, content, "utf8", function(err, data) {
        err ? reject(err) : resolve(data);
      });
    })
  }

};

module.exports = fsp;
