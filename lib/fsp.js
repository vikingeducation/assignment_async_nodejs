var fs = require("fs");

var _data;

var fsp = {
  readFile: function(path) {
    return new Promise(function(resolve, reject) {
      fs.readFile(path, "utf8", function(err, data) {
        _data = data;
        err ? reject(err) : resolve(data);
      });
    });
  },

  writeFile: function(path, data) {
    return new Promise(function(resolve, reject) {
      fs.writeFile(path, data, function(err, data) {
        _data = data;
        err ? reject(err) : resolve(data);
      });
    });
  },

  appendFile: function(path, data) {
    return new Promise(function(resolve, reject) {
      fs.appendFile(path, data, function(err, data) {
        _data = data;
        err ? reject(err) : resolve(data);
      });
    });
  }
};

module.exports = fsp;
