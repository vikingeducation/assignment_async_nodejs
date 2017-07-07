fs = require('fs');


var fsp = {

    readFile:function(path){
      return new Promise(function(resolve, reject) {
        fs.readFile(path, "utf8", function(err, data){
          if (data){
            resolve(data);
          }
          else {
            reject(err);
          }
        })
      });
    },


    writeFile:function(path, text){
      return new Promise(function(resolve, reject) {
        fs.writeFile(path, text, function(err){
          if (err) {throw err; reject(err)}
          else {
            fs.readFile(path, "utf8", function(err, data){resolve(data)})
          }
        }
          );
        })
      },



    appendFile: function(path, text){
      return new Promise(function(resolve, reject) {
        fs.appendFile(path, text, function(err){
          if (err) {throw err; reject(err)}
          else {
            fs.readFile(path, "utf8", function(err, data){resolve(data)})
          }
        }
          );
        })
      },



}

module.exports = fsp
