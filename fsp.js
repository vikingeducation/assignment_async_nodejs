var fs = require("fs");
var fps = {
  readFile: function(fileToRead) {
    return new Promise(function(result, reject) {
      fs.readFile(fileToRead, "utf8", function(err, data) {
        if (err) {
          reject(err);
        } else {
          result(data);
        }
      });
    });
  },

  writeFile: function(fileToWrite, content) {
    return new Promise(function(result, reject) {
      fs.writeFile(fileToWrite, content, function(err) {
        if (err) {
          reject(err);
        } else {
          result(content);
        }
      });
    });
  },

  appendFile: function(fileToAppend, content) {
    return new Promise(function(result, reject) {
      fs.appendFile(fileToAppend, content, function(err) {
        if (err) {
          reject(err);
        } else {
          result(content);
        }
      });
    });
  }
};

module.exports = fps;
