"use strict";

const fs = require("fs");

let fsp = {
  readFile: function(filename) {
    return new Promise((resolve, reject) => {
      fs.readFile(filename, "utf8", (err, data) => {
        if(err) {
          reject(err);
        } else {
          resolve(data);
        }
      })
    });
  },

  writeFile: function(filename, message) {
    return new Promise((resolve, reject) => {
      fs.writeFile(filename, message, "utf8", (err, data) => {
        if(err) {
          reject(err);
        } else {
          resolve(data);
        }
      })
    });
  },

  appendFile: function(filename, message) {
    return new Promise((resolve, reject) => {
      fs.appendFile(filename, message, "utf8", (err, data) => {
        if(err) {
          reject(err);
        } else {
          resolve(data);
        }
      })
    });
  }
}


module.exports = fsp;
