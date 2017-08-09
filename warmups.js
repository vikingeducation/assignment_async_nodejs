//---Problem 1--
var p = Promise.resolve("Hello Promise!");

p.then(function(message){
  setTimeout(console.log(message),1000);
})

//----Problem 2---
var delay = function (milliseconds) {
  if (milliseconds < 1){
    console.log("Done!");
    milliseconds = 0;
  }
  else {
    console.log(milliseconds);
    setTimeout( function(){}, milliseconds);
  }
  return Promise.resolve(milliseconds);
}

var countDown = function(value){
  delay(value-100)
  return Promise.resolve(value-100);
}

delay(1000).then(countDown).then(countDown).then(countDown).then(countDown).then(countDown).then(countDown).then(countDown).then(countDown).then(countDown).then(countDown);

//---Problem 3----
var squareNumber = function(number) {
  if (isNaN(number)) {
    return Promise.reject('err');
  }
  else {
    return Promise.resolve(number*number);
  }
}

var integerNumbers = [1,2,3,4,5,6,7,8,9];
var promisedSquares = integerNumbers.map(squareNumber);

Promise.all(promisedSquares).then(function (values) {
  console.log(values)
});

//---Problem 4---
var doBadThing = function(forRealz){
  if (forRealz === false) {
    return Promise.resolve("Yay!");
  }
  else {
    return Promise.reject('err');
  }
}

doBadThing(true).then(function(value){console.log(value)});
doBadThing(false).then(function(value){console.log(value)});
