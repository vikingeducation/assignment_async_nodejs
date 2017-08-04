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
  },

  writeFile: function(path, newContent){
    return new Promise(function(resolve, reject) {
      fs.writeFile(path, newContent, 'utf8', function(err){
        if (err) {
          reject(err);
        } else {
          console.log('The file has been saved!');
          resolve(fsp.readFile(path));
        }
      });
    });
  }
};




module.exports = fsp;