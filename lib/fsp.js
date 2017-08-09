var fs = require("fs");

var fileSystem = {
  readFile: function (path) {

    var results = new Promise(function(resolve,reject){
      fs.readFile(path, 'utf8', function(err, data){

        if (err){
          return reject(err);
        }
        else {
          return resolve(data);
        }
      })
    });
    return results;
  },

  writeFile: function (path, newText) {

    var results = new Promise(function(resolve,reject) {
      fs.writeFile(path, newText, 'utf8', function(err, data){
        if (err){
          return reject(err);
        }
        else {
          return resolve(newText);
        }
      })
    });
   return results;
 },

 appendFile: function (path, newText) {

   var results = new Promise(function(resolve,reject) {
     fs.appendFile(path, newText, 'utf8', function(err, data){
       if (err){
         return reject(err);
       }
       else {
         var oldData = fs.readFileSync(path, 'utf8');
         return resolve(oldData);
       }
     })
   });
  return results;
},

}

module.exports = fileSystem;
