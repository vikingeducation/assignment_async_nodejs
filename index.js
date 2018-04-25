
/*
  cd Documents/Viking/Node/async
*/

// create a promise that resolves "Hello Promise!" after one second using .then
var greet = new Promise(function(resolve, reject) {
  resolve("Hello Promise!");
});

greet.then(function(greeting) {
  setTimeout(() => {
    console.log(greeting);
  }, 1000);
});

/* Create a delay(milliseconds) function that should return a promise that
resolves the value milliseconds after delaying for the specified number of
milliseconds */

function delay(milliseconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (milliseconds > 0) {
        console.log(milliseconds);
        resolve(milliseconds);
      } else {
        console.log("Done!")
      }
    }, milliseconds);
  });
}

function countDown(ms) {
  return delay(ms - 100);
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






// spacing
