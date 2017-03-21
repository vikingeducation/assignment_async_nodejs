// var p = Promise.resolve('hello');

// p.then(function(message) {
//   setTimeout(function() {
//     console.log(message)
//   }, 1000)
// });
// //////////////////////////////////////

// // function delay(milliseconds) {
// //   return new Promise(function(resolve, reject) {
// //     setTimeout(function() {
// //       resolve(ms)
// //     }, milliseconds)
// //   });
// // };

// // function countDown(milliseconds) {
// //   var counter = milliseconds
// // }

// // delay(1000)
// //   .then(function(value) {
// //   console.log(value);
// // })

// /////////////////////////////////////////

// function square(num) {
//   var p = new Promise(function(value, error) {
//     if (num == NaN ) {
//       error("not a number");
//     } else {
//       value(num*num);
//     }
//   });
//   return p;
// };

// var nums = [1,2,3,4,5,6,7,8,9];

// nums = nums.map(function(i) {
//   return square(i);
// });

// Promise.all(nums)
//   .then(function(results) {
//     console.log(results);
// });


// //////////////////////////////////////////

// function doBadThing(forRealz) {
//   var p = new Promise(function(resolve, reject) {
//     if (forRealz) {
//       reject('reject the truth!!')
//     } else {
//       resolve('EMBRACE THE FALSEY!!!')
//     }
//   });
//   return p;
// }

// doBadThing("Heya")
//   .then(function(resolve) {
//     console.log(resolve)
//   })
//   .catch(function(reject) {
//     console.error(reject);
//   });

////////////////////////////////////////////

var Emitter = require('./lib/my-emitter.js');
var emitter = new Emitter

emitter.on("boobs", "things")