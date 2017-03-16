var fs = require('fs');

var fsp = {
  readFile: function(location) {

  return new Promise(function(resolve, reject) {
    if (true) {
      fs.readFile(location, 'utf8', function (err, data) {
         if (err) {
            throw err;
         }
         resolve(data);
      });
    }
    else {
      reject(err);
    }

  });

  },
  writeFile: function(location, text) {
    return new Promise(function(resolve, reject) {
      if (true) {
        fs.writeFile(location, text, 'utf8', function (err, data) {
           if (err) {
              throw err;
           }
           fs.readFile(location, 'utf8', function (err, data) {
              if (err) {
                 throw err;
              }
              console.log(data);
           });
        });


      }
      else {
        reject(err);
      }

    });
  },
  appendFile: function(location, text) {
    return new Promise(function(resolve, reject) {
      if (true) {
        fs.appendFile(location, text, 'utf8', function (err, data) {
           if (err) {
              throw err;
           }
           fs.readFile(location, 'utf8', function (err, data) {
              if (err) {
                 throw err;
              }
              console.log(data);
           });
        });


      }
      else {
        reject(err);
      }

    });

  }
};

module.exports = fsp;
