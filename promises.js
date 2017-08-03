var delayed = require('delayed');

// Warmup 1:
var a = Promise.resolve('Hello Promise 1!');

a.then(function(result){
  console.log(result);
});


// Warmup 2.1
var b = Promise.resolve('Hello Promise 2.1!');

b.then(function(message) {
  delayed.delay(function(){
    console.log(message);
  }, 1000);
});

// Warmup 2.2
function delayer(milliseconds){
  var c = Promise.resolve(
    delayed.delay(function(){
      console.log(milliseconds);
      return milliseconds;
    }, milliseconds)
  );
};

function countDown(){
  console.log('yo');
};

delayer(3000);
  // .then(countDown)
  // .then(countDown)
  // .then(countDown);






// function sleep(milliseconds) {
//   var start = new Date().getTime();
//   for (var i = 0; i < 1e7; i++) {
//     if ((new Date().getTime() - start) > milliseconds){
//       break;
//     }
//   }
// }

// var num = 1000;

// while(num > 0){
//   sleep(num);
//   console.log(num);
//   num -= 100;
// };
// console.log('Done!');








