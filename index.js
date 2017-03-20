// 1 -

// var p = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     resolve('Hello Promise');
//   }, 1000);
// });

// p.then(function(message) {
//   console.log(message);
// });

// 2 -

// function delay(milliseconds) {
//   var p = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//     resolve(milliseconds);
//     }, milliseconds);
//  });
// return p;
// }

// function countDown(value) {
//   if (value === 0) {
//     console.log('Done!');
//   } else {
//     console.log(value);
//     return value - 100;
//   }
// }

// delay(1000)
// .then(countDown) //1000
// .then(countDown)
// .then(countDown)
// .then(countDown)
// .then(countDown)
// .then(countDown)
// .then(countDown)
// .then(countDown)
// .then(countDown)
// .then(countDown)
// .then(countDown);//done

// 3 -

// function promiseSquared(number) {

//   var p = new Promise(function(resolve, reject) {
//     if (typeof number === 'number') {
//       resolve(number * number);
//     } else {
//       reject('REJECTED');
//     }
//   });
//   return p;
// }

// var nums = [1,2,3,4,5,6,7,8,9];
// nums = nums.map(function(number) {
//   return promiseSquared(number);
// });

// Promise.all(nums)
// .then(function(results) {
//   console.log(results);
// });

// 4 -

function doBadThing(forRealz) {
  var p = new Promise(function(resolve, reject) {
    if (!forRealz) {
      resolve('Yay!');
    } else {
      reject('reJected');
    }
  });
  return p;
}

doBadThing(false)
.then(function(result) {
  console.log(result);
  throw "Error";
})
.catch(function(rejected) {
  console.log(rejected);
});

// doBadThing(false)
// .then(function(result) {
//   console.log(result);
//   throw "Error";
// }, function(reject) {
//   console.log(reject);
// });































