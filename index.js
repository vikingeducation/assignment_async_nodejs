/**
 * 1. Create a promise that resolves the message "Hello Promise!"
 * after 1 second
 */
var p = new Promise(function(resolve){resolve("hello")});

setTimeout(function(){
  p.then(function(message){
    console.log(message);
  });
}, 1500);

/**
 * 2. Create a function with the following signature delay(milliseconds)
 *
 * Your delay function should return a promise that resolves the value
 * milliseconds after delaying for the specified number of milliseconds
 *
 * Create a countDown function that uses the delay function such that
 * the following chaining and output is possible:
 *
 * delay(1000)
 *  .then(countDown) //=> 1000
 *  .then(countDown) //=> 900
 *  .then(countDown) //=> 800
 *  .then(countDown) //=> 700
 *  .then(countDown) //=> 600
 *  .then(countDown) //=> 500
 *  .then(countDown) //=> 400
 *  .then(countDown) //=> 300
 *  .then(countDown) //=> 200
 *  .then(countDown) //=> 100
 *  .then(countDown); //=> Done!
 */
var myDelay;

function delay(ms){
  myDelay = ms;
  return new Promise(function(resolve) {
    setTimeout(resolve(myDelay), 0);
  });
}
function countDown() {
  myDelay == 0 ? console.log("done!") : console.log(myDelay);
  myDelay -= 100;
  return new Promise(function(resolve) {
    setTimeout(resolve(myDelay), 100);
  });
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
