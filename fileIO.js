//Take the Node.js fs modules and wrap in promises.

var fs = require('fs');

var fsp = {
  readFile: function (path) {
    return new Promise (function (resolve,reject) {
      fs.readFile (path, 'utf8', (err,data) => {
        err ? console.log(err) : resolve(data);
      });
    });
  },
  writeFile : function (filename, data) {
    return new Promise ( function (resolve, reject) {
      fs.writeFile(filename, data, 'utf8', (err,res) => {
        err ? console.error("write err", err) : console.log("write data", data);
      });
    });
  },
  appendFile : function (filename, data) {
    return new Promise ( function (resolve, reject) {
      fs.appendFile (filename, data, 'utf8', (err,res) => {
        err ? console.error("append err", err) : console.log("append data", data);
      });
    });
  }
}

module.exports = fsp;
