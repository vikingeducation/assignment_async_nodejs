
var fs = require('fs')

//fsp object
var fsp = {

  readFile: function(path){
    return new Promise(function(resolve, reject){
      fs.readFile(path, 'utf8', function(err, data){
        data ? resolve(data) : reject(err);
      });
    })
  },


};

module.exports = fsp;
