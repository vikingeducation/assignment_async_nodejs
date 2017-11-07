var fs = require('fs');

var promise_obj = {
  readFile: function(path, encoding = 'utf-8'){
    return new Promise(function(resolve, reject){
      if (path === './data/lorem.txt'){
        var data = fs.readFileSync(path, encoding);
        resolve(data);
      }else{
        setTimeout(reject('Invalid path'),5000);
      }
    });
  },
  writeFile: function(path, data, encoding = 'utf-8'){
    return new Promise(function(resolve, reject){
      if (path === './data/write_here.txt'){
          resolve(fs.writeFile(path, data, encoding, function(err){
            if(err){
              console.log(err);
            }else{
              console.log("Write succeeded!");
            }
          }));
      }else{
        reject('Write path is invalid');
      }
    });
  },

  appendFile: function(path, data, encoding = 'utf-8'){
    return new Promise(function(resolve, reject){
      if (path === './data/write_here.txt'){
         resolve(fs.appendFile(path, data, encoding = 'utf-8', function(err){
           (err)?console.log(err):console.log("append was successful!");
         }));
      }else{
        reject('Invalid file to append data');
      }
    });
  }
};


module.exports = promise_obj;
