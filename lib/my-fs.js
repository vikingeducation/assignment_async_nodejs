var fs = require('fs');

var fsp = {

  'readFile' : function(path, options) {
    if (!options) {options = "utf-8";}

    return new Promise(function(resolve, reject) {
      fs.readFile(path, options, function(err, data) {
        err ? reject(err) : resolve(data);
      })
    })
  }

  'writeFile' :  function(file, path, options) {
    if (!options) {options = "utf-8"}

    return new Promise(function(resolve, reject) {
      fs.readFile(path, options, function(err, data) {
        err ? reject(err) : resolve(data);
      })
    })
  }

    'appendFile' :  function(file, path, options) {
    if (!options) {options = "utf-8"}

    return new Promise(function(resolve, reject) {
      fs.readFile(path, options, function(err, data) {
        err ? reject(err) : resolve(data);
      })
    })
  }

};

module.exports = fsp;