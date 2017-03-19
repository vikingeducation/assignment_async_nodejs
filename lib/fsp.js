var fs = require('fs')
// fs.readFile('./files/data.txt', function(err,data){
//   if (err) throw err;
//   console.log(data.text);
// })


// fs.appendFile('./files/data.txt', 'dummy data', (err) => {
//   if (err) throw err;
//   console.log('The "data to append" was appended to file!');
// });

var fsp = {
  readFile: function(file){
    return new Promise(function(resolve, reject){
      fs.readFile(file, "utf-8", function(err, data){
        err ? reject(err) : resolve(data)
      })
    })
  },
  writeFile: function(file, text){
    return new Promise(function(resolve, reject){
      fs.writeFile(file, text, function(e){
        e ? reject(e) : resolve(file)
      })
    })
  },
  appendFile: function(file, text){
    return new Promise(function(resolve, reject){
      fs.appendFile(file, text, function(e){
        e ? reject(e) : resolve(file)
      })
    })
  }
}

module.exports = fsp;



