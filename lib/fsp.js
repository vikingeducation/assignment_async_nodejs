var fs = require('fs');
var textPath = './data/lorem.txt';


// wrapping you in an obj that's full of promises. awwww.

var fsp = {
  readFile: function(path){
    return new Promise(function(resolve, reject) {
      fs.readFile(path, 'utf8', function(err, data){
        err ? reject(err) : resolve(data);
      });
    });
  }
};




module.exports = fsp;