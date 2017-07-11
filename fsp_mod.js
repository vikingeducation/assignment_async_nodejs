//fsp module
  //the magical promise wrapper to fs
const fs = require('fs')
console.log("fsp module running");
//var text = fs.readFileSync( 'data/blank.txt', 'utf-8' );//, function(){ console.log("test done")});
//console.log( text )
var fsp = {

  //make the fs operation into a promise and return it
  readFile: function( filename ){
    //make a new promise
    var p = new Promise( function( resolve, reject ){
      //when readFile get an error reject
      //when readFile gets the data resolve it
      try {
        fs.readFile( filename, 'utf-8', (error, data) => {
          resolve( data );
        });
      } catch (error ) {
        reject( error );
      }
    });
    return p;
  },
  writeFile: function( filename, data ){
    //make a new promise
    var p = new Promise( function( resolve, reject ) {
      try {
        fs.writeFile( filename, data, (error) =>{
          fs.readFile( filename, 'utf-8', (error, data) =>{
            resolve( data );
          })
        })
      } catch ( error ){
        reject( error );
      }
    })
    return p;
  },
  appendFile: function( filename, data ){
    var p = new Promise( function( resolve, reject ) {
      try {
        fs.appendFile( filename, data, (error) =>{
          fs.readFile( filename, 'utf-8', (error, data) =>{
            resolve( data );
          })
        })
      } catch ( error ){
        reject( error );
      }
    })
    return p;
  }
}

module.exports = fsp;
