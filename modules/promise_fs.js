
const fs = require(`fs`);

var fsp = {
  readFile: function(path) {
    var rf = new Promise((resolve, reject) => {
      fs.readFile(path, `utf8`, (err, data) => {
        err ? reject(err) : resolve(data);
      });
    });
    return rf;
  },

  writeFile: function(path, text) {
    var wf = new Promise((resolve, reject) => {
      fs.writeFile(path, text, `utf8`, (err, res) => {
        err ? reject(err) : resolve(text);
      });
    });
    return wf;
  },

  appendFile: function(path, text) {
    var af = new Promise((resolve, reject) => {
      fs.appendFile(path, text, `utf8`, (err, res) => {
        err ? reject(err) : resolve(text);
      });
    });
    return af;
  }
};

module.exports = fsp;
