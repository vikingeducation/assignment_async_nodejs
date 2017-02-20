var fs = require('fs');


fsp = {

readFile: function(file) {
  return new Promise(function(resolve, reject) {
    fs.readFile(file, 'utf8', function(err, data) {
    err? reject(err) : resolve(data);
    });
  });
},

writeFile: function(file, msg) {
  return new Promise(function(resolve, reject) {
    fs.writeFile(file, msg, 'utf8', function(err, data) {
    err? reject(err) : resolve(data);
    });
  });
},

appendFile: function(file, msg) {
  return new Promise(function(resolve, reject) {
    fs.appendFile(file, msg, 'utf8', function(err, data) {
      err? reject(err) : resolve(data);
    });
  });
}

}

module.exports = fsp;
