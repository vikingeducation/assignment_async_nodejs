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


function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

var num = 1000;

while(num > 0){
  sleep(num);
  console.log(num);
  num -= 100;
};
console.log('Done!');








