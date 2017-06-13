// var p = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('Hello Promise');
//   }, 1000);
// })

// p.then((message) => {
//   console.log(message)
// });
// // thanks to Chris for helping out

// var delay = function(milliseconds){
//   var p = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(milliseconds);
//     }, milliseconds);
//   });
// return p
// };
// delay(1000).then((milliseconds) => {
//   console.log(milliseconds);
// });

// var square = function(number) {
//   var squarep = new Promise((resolve, reject) => {
//     if(isNaN(number)) {
//       reject('this is not a number')
//     }
//     else {resolve(number * number);
//     }
//   })
//   return squarep
// };

// var nums = [1,2,3,4,5,6,7,8,9];
// nums = nums.map(function(i){
//   return Promise.resolve(i);
// });

// Promise.all(nums)
//   .then(function(results){
//     console.log(results);
//   });


// square(4).then((number) =>{
//   console.log(number);
// });

// square('hello').then((number) =>{
//   console.log(number);
// });
///////////////////////

// var doBadThing = function(realz){
//   return new Promise((resolve, reject) => {
//     if( !realz ) {
//        resolve('Yay');
//     } else {
//       throw 'error'
//     }
//   })
// }

// function fakePromise( realz ){
//   if( !realz ) {
//     return 'Yay';
//   } else {
//     return 'error';
//   }
// }

// var someValue = fakePromise(1);
// console.log(someValue);
// doBadThing('hi').then(
//   (message) => {
//   console.log(message);
// }).catch(function(message){
//   console.log(message);
// })

// doBadThing(0).then(
//   (message) => {
//   console.log(message);
// },function(message){
//   console.log(message);
// });

let p1 = new Promise((resolve, reject) => {
  Date.now() % 2 === 0 ? resolve('Even') : reject('Odd');
});

// This is with a .then call
// with a reject handler provided as
// a  subsequent argument
p1
  .then(
    result => { console.log(result) },
    err => { console.error(err) }
  );


// p2 = new Promise((resolve, reject) => {
//   Date.now() % 2 === 0 ? resolve('Even') : reject('Odd');
// });

// // This a .catch that is only fired
// // if the promise is rejected
// // It's really just cleaner more
// // semantic syntax
// p2
//   .then(result => { console.log(result) })
//   .catch(err => { console.log(err) });

// testEven
//   .then(function(result) {
//     if( result % 2 === 0 && result > 0 ){
//       console.log('This number is even: ' + result);
//       console.log('Each person gets $' + (500/result) ' dollars.');
//     }
//     else{
//       throw "Boom! This number's odd!!!!!!";
//     }
//   })
//   .catch(function(err) {
//     console.error(err); //=> Boom!
//   });

var fs = require('fs');
var path = './data/lorem.txt';

fs.readFile(path, 'utf8', function(err, data) {
  console.log('Async!');
  err ? console.error(err) : console.log(data);
});

console.log('Done!');




