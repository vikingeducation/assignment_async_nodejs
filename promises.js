// Warmup 1:
// Create a promise that resolves the message "Hello Promise!" after 1 second
var promise = new Promise(function(resolve, reject) {
  if (true) {
    resolve("Hello Promise!");
  } else {
    reject("Whoa, you screwed up!");
  };
});

promise.then(function(result){
  setTimeout(function(){console.log(result)}, 1000);
}, function(err){
  console.error(err);
});


// Warmup 2
// Create a function with the following signature delay(milliseconds)
// Your delay function should return a promise that resolves the value milliseconds
// after delaying for the specified number of milliseconds

var delay = function(milliseconds){
  return new Promise(function(resolve, reject){
    console.log(milliseconds);
    var remaining = milliseconds - 100;
    resolve(remaining);
    reject("Whoa, you messed up!");
  });
};

// Create a countDown function that uses the delay function such that the following
// chaining and output is possible:
var countDown = function(remaining) {

  if(remaining <= 0 || remaining == undefined){
    console.log("DONE!");
  } else {
    // use return to return the promise itself instead of just the value of remaining
    return delay(remaining);
  }
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
.then(countDown)
.then(countDown);






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

