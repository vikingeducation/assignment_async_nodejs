var fsp = require('./fsp');

// var p = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     resolve('Hello Promise!')
//   }, 1000);
// });

// p.then(function(message) {
//   console.log(message);
// });
//
// function delay(milliseconds) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve(milliseconds)
//     }, milliseconds);
//   });
// };
//
// function countDown(value) {
//   if (value >= 100) {
//     console.log(value);
//     return delay(value-100);
//   } else {
//     console.log("Done!");
//   };
// };
//
// delay(1000)
//   .then(countDown)
//   .then(countDown)
//   .then(countDown)
//   .then(countDown)
//   .then(countDown)
//   .then(countDown)
//   .then(countDown)
//   .then(countDown)
//   .then(countDown)
//   .then(countDown)
//   .then(countDown);
//
// function squarePromise(n) {
//   var p = new Promise(function(resolve, reject) {
//     if (Number.isInteger(n)) {
//       resolve(n*n);
//     } else {
//       reject("Not a number!");
//     };
//   });
//   return p;
// }

// squarePromise("Hi").then(function(message) {
//   console.log(message);
// }, function(err) {
//   console.error(err);
// });
//
// var nums = [1,2,3,4,5,6,7,8,9];
// numsSquared = nums.map(function(i) {
//   return squarePromise(i);
// });
//
// Promise.all(numsSquared)
//   .then(function(results) {
//     console.log(results);
//   });
//
// function doBadThing(forRealz) {
//   var p = new Promise(function(resolve, reject) {
//     if (forRealz) {
//       reject("Bad! Truthyyyyy");
//     } else {
//       resolve("Yay!");
//     }
//   });
//   return p;
// }
//
// doBadThing(true)
//   .then(function(result) {
//     console.log(result);
//     throw("Thrown true");
//   }, function(result) {
//     console.error(result);
//   });
//
// doBadThing(false)
//   .then(function(result) {
//     console.log(result);
//     throw("Thrown false");
//   })
//   .catch(function(err) {
//     console.error(err);
//   });

fsp.readFile('./test.txt')
  .then(function(data) {
    // Outputs the file data
    console.log(data);
  })
  .catch(function(err) {
    console.error(err);
  });

  fsp.writeFile('./test2.txt', 'Hello!')
    .then(function(data) {
      // Outputs the file data
      // after writing
      console.log(data);
    })
    .catch(function(err) {
      console.error(err);
    });

  fsp.appendFile('./test2.txt', 'Hello again!')
  .then(function(res) {
    // Outputs the file data
    // after appending
    console.log(res);
  })
  .catch(function(err) {
    console.error(err);
  });
