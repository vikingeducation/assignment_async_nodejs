const fs = require('fs');

const fsp = {
  readFile: function(path) {
    return new Promise((resolve, reject) => {
      fs.readFile(path, 'utf8', (error, data) => {
        if(error) {
          reject(error);
        }
        resolve(data);
      });
    });
  },

  writeFile: function(file, data) {
    return new Promise((resolve, reject) => {
      fs.writeFile(file, data, (error) => {
        if(error) {
          reject(error);
        }
        resolve(data);
      });
    });
  },

  appendFile: function(file, data) {
    return new Promise((resolve, reject) => {
      fs.appendFile(file, data, (error) => {
        if(error) {
          reject(error);
        }
        resolve(data);
      });
    });
  },
};

module.exports = fsp;