var fs = require('fs')
var testTXT = 'test.txt';

var fsp = {

  readFile: function(file){
    return new Promise(function(resolve, reject){
      fs.readFile(file, 'utf8', function(err, data){
        err ? reject(err) : resolve(data);
      })
    })
  },

  writeFile: function(file, text){
    return new Promise(function(resolve, reject){
      fs.writeFile(file, text, function(err, data){
        if (err) { reject(err) }
        else {
          fs.readFile(file, 'utf8', function(err, data){
            err ? reject(err) : resolve(data);
          })
        }
      })
    })
  },

  appendFile: function(file, text){
    return new Promise(function(resolve, reject){
      fs.appendFile(file, text, function(err){
        if (err){
          reject(err)
        } else {
          fs.readFile(file, 'utf8', function(err, data){
            err ? reject(err) : resolve(data);
          })
        }
      })
    })
  }

}

fsp.writeFile(testTXT, "Hello").then(function(data){
  console.log(data);
})
  .catch(function(err){
    console.log(err);
  });
