

var p = Promise.resolve("Hello Promise!");

p.then( function(message) {
  console.log(message);
});


var delay = function(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(function() {
      resolve(milliseconds);
    }, milliseconds);
  });
}

function countDown (message) {
  console.log(message);
  return message - 100;
}

var square = function(number) {
  return new Promise((resolve, reject) => {
    resolve(number * number);
    if (number == undefined) {
      reject('No Number');
    }
  });
}

var int = [1,2,3,4,5,6,7,8,9];
var num = int.map( function(i) {
  return square(i);
})

Promise.all(num).then(function(results) {
  console.log(results);
})

var doBadThing = function(forRealz){
  return new Promise((resolve, reject) => {
    if (forRealz == false) {
      resolve('Yay');
    } else {
      reject('rejected');
    }
  });
}

doBadThing(4).then( function(result) {
                  console.log(result);
                })
              .catch( function(err){
                console.error(err);
              });

doBadThing(true).then(function() {
  console.log('I am  falsy');
}, function() {
  console.error('I am truthy');
})

doBadThing(0).then( function(result) {
                console.log(result);
                throw "Boom Boom Boom! Finito!!";
              })
            .catch( function(err){
              console.error(err);
            });



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
  .then(countDown);
