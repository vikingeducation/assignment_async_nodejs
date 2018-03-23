
var fs = require('fs')

//fsp object
var fsp = {

  readFile: function(path){
    return new Promise(function(resolve, reject){
      fs.readFile(path, 'utf8', function(err, data){
        data ? resolve(data) : reject(err);
      });
    });
  },

  writeFile: function(file, data){
    return new Promise(function(resolve, reject){
      fs.writeFile(file, data, function(err, data){// don't need encoding option becasuse default is utf8
        data ? resolve(data) : reject(err);
      });
    });
  },

  appendFile: function(file, data){
    return new Promise(function(resolve, reject){
      fs.appendFile(file, data, function(err, data){
        data ? resolve(data) : reject(err);
      });
    });
  }

};

module.exports = fsp;
