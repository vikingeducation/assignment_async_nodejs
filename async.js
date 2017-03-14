// 1.

// var p = new Promise(function(resolve, reject) {
//     resolve('Hello Promise!');
// });
//
// p.then(function(message) {
//   setTimeout(function() {
//     console.log(message);
//     }, 1000);
// });

// 2.

// var delay = function (milliseconds) {
//
//   return new Promise(function(resolve, reject) {
//     setTimeout(function(){
//       resolve(milliseconds);
//     }, 100);
//   });
//
// };
//
// var countDown = function (currentCount) {
//   console.log(currentCount);
//   return currentCount - 100;
// };
//
// delay(1000)
// .then(countDown) //=> 1000
// .then(countDown) //=> 900
// .then(countDown) //=> 800
// .then(countDown) //=> 700
// .then(countDown) //=> 600
// .then(countDown) //=> 500
// .then(countDown) //=> 400
// .then(countDown) //=> 300
// .then(countDown) //=> 200
// .then(countDown) //=> 100
// .then(countDown); //=> Done!

// 3.

// var promiseSquare = function(number) {
//   return new Promise(function(resolve, reject) {
//     if (Number.isInteger(number)) {
//       resolve(number * number);
//     }
//     else {
//       reject("Not a number");
//     }
//   });
// };
//
// var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//
// nums = nums.map(function(i) {
//   return promiseSquare(i);
// });
//
// Promise.all(nums)
//   .then(function(results) {
//     console.log(results);
//   });

// 4.

var doBadThing = function(forRealz) {
  return new Promise(function(resolve, reject) {
    if (!forRealz) {
      resolve("Yay!");
    }
    else {
      reject("Meh");
    }
  });
};

doBadThing(false)
  .then(function(result) {
    console.log(result); //meh
    throw("But also:");
  })
  .catch(function(err) {
    console.error(err); //yay
  });

  // Throw happens after catch even if it's placed before
