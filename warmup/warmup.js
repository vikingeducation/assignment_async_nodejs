
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
        console.log("Done!");
        // throw new Error("Done!");
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

/* Create a function that accepts a number and returns a promise that resolves
that number squared, reject if not passed a number, and map an array of
numbers 1-9 to the function using promise.all */
var integers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function squared(number) {
  return new Promise((resolve, reject) => {
    if (isNaN(number)) {
      reject("Argument wasn't a number");
    } else {
      resolve(number * number);
    }
  });
}

Promise.all(integers.map(squared)).then(results => {
  console.log(results);
});

/* basically play with the differences between then with and without catch and
vice versa */
function doBadThing(forRealz) {
  var baddest = new Promise((resolve, reject) => {
    if (forRealz == false) {
      resolve("Yay!");
    } else if (forRealz == true) {
      reject("Only false will resolve");
    }
  });
  baddest.then(
    (response) => {
      console.log(response);
    },
    (broke) => {
      console.log(broke);
    }
  );
  baddest.catch(error => {
    console.log(error);
  });
  return baddest;
}

doBadThing(true);
doBadThing(false);
