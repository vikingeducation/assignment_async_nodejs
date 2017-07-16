const fs = require('fs');

const fsp = {
  readFile: (path) => {
    return new Promise (
      (resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => {
          if (data) {
            resolve(data);
          } else {
            reject(err);
          }
        })
      }
    )
  },

  writeFile: (filename, data) => {
    return new Promise (
      (resolve, reject) => {
        fs.writeFile(filename, data, (err) => {
          if (err) {
            throw err;
            reject(err);
          } else {
            resolve(data);
          };
        })
      }
    )
  },

  appendFile: (path, data) => {
    return new Promise (
      (resolve, reject) => {
        fs.appendFile(path, data, (err) => {
          if (err) {throw error; reject(err);}
          else {resolve(data);}
        })
      }
    )
  }

};  

module.exports = fsp