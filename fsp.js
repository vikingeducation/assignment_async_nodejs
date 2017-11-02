'use strict';

const fs = require('fs');

let fsp = {};

fsp.readFile = function(path) {
  return new Promise(function(resolve, reject) {
    fs.readFile(path, 'utf8', function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

fsp.writeFile = function(path, data) {
  return new Promise(function(resolve, reject) {
    fs.writeFile(path, data, function(err) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

fsp.appendFile = function(path, data) {
  return new Promise(function(resolve, reject) {
    fs.appendFile(path, data, function(err) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

module.exports = fsp;
