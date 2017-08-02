var delayed = require('delayed');

var delayer = function(milliseconds){
  // var p = Promise.resolve(milliseconds);
  var p = new Promise(function(resolve, reject) {
    resolve(
      delayed.delay(function(){
        console.log(milliseconds);
      }, milliseconds)
    );
  });

};

delayer(500);


// var p = Promise.resolve('Hello Promise!');

// p.then(function(message) {
//   delayed.delay(function(){
//     console.log(message);
//   }, 1000);
// });











