const FS = require('fs');

const FSP = {
  readFile: (path, options) => {
    return new Promise(resolve => {
      FS.readFile(path, options, (err, data) => {
        if (err) throw err;
        resolve(data);
      });
    });
  },
  writeFile: (path, data, options) => {
    return new Promise(resolve => {
      FS.writeFile(path, data, options, err => {
        if (err) throw err;
        resolve(FSP.readFile(path, options));
      })
    });
  },
  appendFile: (path, data, options) => {
    return new Promise(resolve => {
      FS.appendFile(path, data, options, err => {
        if (err) throw err;
        resolve(FSP.readFile(path, options));
      })
    })
  }
}

module.exports = FSP;
