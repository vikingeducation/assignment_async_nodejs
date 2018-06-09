//These few warmups will get you started working with promises.

//1. create a promise that logs  "Hello Promise!" after one second using .then
var helloPromise = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve(`Hello Promise!`);
  }, 1000);
});

helloPromise.then(function(hello) {
  console.log(hello);
});

//2. Create a delay(milliseconds) function that should return a promise thatresolves the value milliseconds after delaying for the specified number of milliseconds
function delay(milliseconds) {
  return new Promise((resolve, reject) => {
    if (milliseconds > 0) {
      console.log(milliseconds);
      resolve(milliseconds);
    } else {
      console.log(`Done!`);
    }
  });
}

function countDown(time) {
  return delay(time - 100);
}

delay(1000)
  .then(countDown) //=> 1000
  .then(countDown) //=> 900
  .then(countDown) //=> 800
  .then(countDown) //=> 700
  .then(countDown) //=> 600
  .then(countDown) //=> 500
  .then(countDown) //=> 400
  .then(countDown) //=> 300
  .then(countDown) //=> 200
  .then(countDown) //=> 100
  .then(countDown); //=> Done!
