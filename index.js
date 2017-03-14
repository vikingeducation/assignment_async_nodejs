/*
var p = new Promise(function(resolve, reject) {
  setTimeout(function() {console.log("Hello promise!") }, 1000);
});

p.then(function(message) {
  console.log(message);
});
*/



/*
function delay(milliseconds) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {resolve(milliseconds);}, milliseconds);
  });
}

function countDown(result) {
  console.log(result);
  return delay(result - 100);
}

delay(1000)
  .then(countDown)
  .then(countDown)
  .then(countDown)
  .then(countDown)
  .then(countDown)
  .then(countDown)
  .then(countDown)
  .then(countDown)
  .then(countDown)
  .then(countDown)
  .then(countDown);
*/



/*
function squarer(int) {
  new Promise(function(resolve, reject) {
    if (isNaN(int)) {
      reject('Not a number!');
    }
    else {
      resolve(console.log(Math.pow(int, 2)));
    }
  });
}

var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numArray.map(function(i) {
  return (squarer(i));
});

Promise.all(numArray).then(function(res) {
  console.log(res);
});
*/



/*
function doBadThing(forRealz) {
  return new Promise(function(resolve, reject) {
    if (forRealz === false) {
      resolve('Yay!');
    }
    else {
      reject('Nay!');
    }
  });
}

doBadThing(3 == 3)
 .then(function(res) {
   console.log(res);
 })
 .catch(function(err) {
   console.error(err);
 });
*/
