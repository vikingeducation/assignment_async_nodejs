var delayed = require('delayed');

// Warmup 1:
// Create a promise that resolves the message "Hello Promise!" after 1 second
var a = Promise.resolve('Hello Promise 1!');

a.then(function(result){
  console.log(result);
});


// Warmup 2.1
// Create a function with the following signature delay(milliseconds)
var b = Promise.resolve('Hello Promise 2.1!');

b.then(function(message) {
  delayed.delay(function(){
    console.log(message);
  }, 1000);
});

// Warmup 2.2
function delayer(milliseconds){
  var c = Promise.resolve(
    delayed.delay(function(){
      console.log(milliseconds);
      return milliseconds;
    }, milliseconds)
  );
};

function countDown(){
  console.log('yo');
};

delayer(3000);
  // .then(countDown)
  // .then(countDown)
  // .then(countDown);

  // function sleep(milliseconds) {
  //   var start = new Date().getTime();
  //   for (var i = 0; i < 1e7; i++) {
  //     if ((new Date().getTime() - start) > milliseconds){
  //       break;
  //     }
  //   }
  // }

  // var num = 1000;

  // while(num > 0){
  //   sleep(num);
  //   console.log(num);
  //   num -= 100;
  // };
  // console.log('Done!');


// Warmup 3:
// Create a function that accepts a number and returns a promise that resolves that number squared
function squarer(input){
  var squaredNum = new Promise(function(resolve, reject) {
    if( typeof(input) === "number" ){
      resolve(input * input);
    } else {
      reject("Whoops. That's not a number");
    };
  });

  squaredNum
    .then(function(result) {
      console.log(result);
    })
    .catch(function(err) {
      console.error(err);
    });


};
// squarer(5);

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
nums = nums.map(function(i) {
  return Promise.resolve(squarer(i));
});

Promise.all(nums)
  .then(function(results) {
    console.log(results);
  });



// Warmup 4:
// Create a function with this signature doBadThing(forRealz)
function doBadThing(forRealz){
  var oppositeLogicker = new Promise(function(resolve, reject) {
    if (forRealz == false) {
      resolve("Yay! -- but actually falsy");
    } else {
      reject("Rejected, but actually truthy");
    }
  });
  // oppositeLogicker
  //   .then(function(resolvedResult) {
  //     console.log(resolvedResult);
  //   })
  //   .catch(function(rejectedResult) {
  //     console.log(rejectedResult);
  //   });
  oppositeLogicker
  .then(function(resolvedResult) {
    console.log(resolvedResult);
  }, function(rejectedResult) {
    console.log(rejectedResult);
  });
};

doBadThing("");

