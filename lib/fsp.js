const fs = require('fs');

let fsp = {
    readFile: function(filename) {
        return new Promise(function(resolve, reject) {
            fs.readFile(filename, 'utf8', (err, data) => {
                if (err) reject(err);
                resolve(data);
            });
        });
    },
    writeFile: function(filename, msgText) {
      return new Promise(function(resolve, reject) {
          fs.writeFile(filename, msgText, 'utf8', (err, data) => {
              if (err) reject(err);
              resolve(fsp.readFile(filename));
          });
      });
    },
    appendFile: function(filename, msgText) {
      return new Promise(function(resolve, reject) {
          fs.appendFile(filename, msgText, 'utf8', (err, data) => {
              if (err) reject(err);
              resolve(fsp.readFile(filename));
          });
      });
    }
};

module.exports = fsp;
