var fs = require('fs');

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
  },

  appendFile: function(path, newContent){
    return new Promise(function(resolve, reject) {
      fs.appendFile(path, newContent, 'utf8', function(err){
        if (err) {
          reject(err);
        } else {
          console.log('This was appended to the file: '+ newContent);
          resolve(fsp.readFile(path));
        }
      });
    });
  }
};


module.exports = fsp;