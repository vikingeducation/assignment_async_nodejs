var fs = require('fs');

var fsp = {

  readFile: function(path){
    fs.readFile(path, 'utf8', function(err, data){
      if(err){
        return Promise.reject(err);
      }
      else {
        return Promise.resolve(data);
      }
    });
  },

  writeFile: function(fileName,data){
    fs.writeFile(fileName,data,function(err){
      if(err){
        return Promise.reject(err);
      }
      else {
        return Promise.resolve(data);
      }
    });
  }//,

  /*appendFile: function(fileName,data){
    fs.appendFile(fileName,data,function(err){
      err ? return Promise.reject(err) : return Promise.resolve(
          fs.readFile(fileName, 'utf8',function(err, data){
            err ? throw err : return data;
          }
        );
      );
    });
  }*/

};

module.exports = fsp;
/*fsp.readFile('./dummy_text.txt').then(function(data){
  console.log(data);
});*/
