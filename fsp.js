//fps module exercise

const fsp = require('./fsp_mod');

//var p =  fsp.readFile('data/blank.txt');
//debugger;

//.catch( console.log( error ));
//console.log( text )

//error in file path
fsp.readFile('??????').then( function(data){
  console.log("????? = " + data)
}, function( error ){
  console.log("?????? = " + error)
})

//correct path
fsp.readFile('./data/blank.txt')
  .then(function(data) {
    // Outputs the file data
    console.log(data);
  })
  .catch(function(err) {
    console.error(err);
  });
//wrong path
fsp.readFile('???????')
  .then(function(data) {
    // Outputs the file data
    console.log(data);
  })
  .catch(function(err) {
    console.error(err);
  });


fsp.writeFile('./data/test.txt', 'Hello!')
  .then(function(res) {
    // Outputs the file data
    // after writing
    console.log(res);
  })
  .catch(function(err) {
    console.error(err);
  });

fsp.appendFile('./data/test.txt', 'Hello again!')
  .then(function(res) {
    // Outputs the file data
    // after appending
    console.log(res);
  })
  .catch(function(err) {
    console.error(err);
  });
