"use strict";
const fs = require('fs');
/*
fsreadFile
fswriteFile
fsappendFile
*/


let fsp = {
  readFile: function(file){
    return new Promise(function(resolve, reject) {
      fs.readFile(file, function(err, data){
        if (data) {
          resolve(data.toString());
        } else {
          reject(err);
        }
      })
    })
  },

  writeFile: function(file, msg){
    return new Promise(function(resolve, reject) {
      fs.writeFile(file, msg, 'utf8', function(err, data){
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    })
  },

  appendFile: function(file, msg){
    return new Promise(function(resolve, reject) {
      fs.appendFile(file, msg, 'utf8', function(err, data){
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    })
  },
};


module.exports = fsp;
