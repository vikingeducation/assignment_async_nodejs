// var p = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     resolve("Hello Promise");
//   }, 1000);
// });

// p.then(function(message) {
//   console.log(message);
// });

// function delay(milliseconds) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function(){
//       resolve(milliseconds);
//     }, milliseconds);
//   });
// }

// function countDown(message) {
//   console.log(message);
//   return delay(message-100);
// }

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

// function makePromise(number) {
//   return new Promise(function(resolve, reject) {
//     if (isNaN(number)) {
//       reject("Not a number");
//     }
//     else {
//       var square = number*number;
//       resolve(square);
//     }
//   });
// }

// var promises = [1,2,3,4,5,6,7,8,9].map(function(i) {
//   return makePromise(i);
// });

// Promise.all(promises)
//   .then(function(results) {
//     console.log(results);
//   });

function doBadThing(forRealz) {
  return new Promise(function(resolve, reject) {
    if (forRealz) {
      reject();
    } else {
      resolve("Yay!");
    }
  });
}

doBadThing(true)
  .then(function(result) {
  console.log(result);
  })
  .catch(function(err) {
    console.error(err);
  });

doBadThing(false)
  .then(function(result) {
  console.log(result);
  throw "Error";
  })
  .catch(function(err) {
    console.error(err);
  });

doBadThing(false).then(function(result) {
    console.log(result);
  }, function(err) {
    console.error(err);
  });
