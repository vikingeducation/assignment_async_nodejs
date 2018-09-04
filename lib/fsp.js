var fs = require('fs');

var fsp = {
  // readFile: function(path){
  //   fs.readFile(path, 'utf8', function(err, data){
  //     err ? console.log('err', err) : console.log(data);
  //   })
  //
  // }

  readFile: function(path){
     fs.readFile(path, 'utf8', function(err, data){
      // console.log(data, 'data!')
      // return Promise.resolve(data);
      var x = Promise.resolve(data)
      console.log(x, 'datayay')
      return x;
    })
  }


};

module.exports = fsp;
