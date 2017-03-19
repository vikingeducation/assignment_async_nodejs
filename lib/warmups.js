/////////////////////////////////////////////////////////////
// Create a promise that resolves the message "Hello Promise!" after 1 second
// Use .then to resolve the promise and console.log the message

var p = Promise.resolve('Hello Promise!');

p.then(function(message){
  setTimeout(function(){
    console.log(message)
  }, 1000)
});

//////////////////////////////////////////////////////////////
// Create a function with the following signature delay(milliseconds)
// Your delay function should return a promise that resolves the value milliseconds after delaying for the specified number of milliseconds
// Create a countDown function that uses the delay function such that the following chaining and output is possible:

function delay(milliseconds){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve(milliseconds)
    }, milliseconds)
  });
}

function countDown(milliseconds){
  if (milliseconds === 0){
    console.log("Done!")
  } else {
    console.log(milliseconds);
  }
  return delay(milliseconds - 100)
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

//////////////////////////////////////////////////////////////

// Create a function that accepts a number and returns a promise that resolves that number squared
// 1) The promise should reject if it is not passed a number
// 2) Now map an array of integers 1 to 9 to an array of promises using the function above
// 3) Use Promise.all to get the result of all of the promises in the array

var squaredNum = function(n){
  return new Promise(function(resolve, reject){
    if (isNaN(n)){
      reject('Not a number')
    } else {
      resolve(n*n)
    }
  })
}

var nums = [1,2,3,4,5,6,7,8,9];
nums = nums.map(function(val){
  return squaredNum(val)
});

Promise.all(nums).then(function(results){
  console.log(results)
})

//////////////////////////////////////////////////////////////

// Create a function with this signature doBadThing(forRealz)
// Return a promise that resolves to "Yay!" when forRealz is falsy
// The promise should reject when forRealz is truthy
// Now call doBadThing with both a true and false value chaining on .then and .catch
// Experiment with using .catch vs supplying a reject handler in your .then call
// Experiment using now try throwing an error in the resolve handler of your .then call
// What do you notice about when the .catch handler and the reject handler are invoked?

function doBadThing(forRealz){
  return new Promise(function(resolve, reject){
    forRealz ? resolve('Yay!') : reject()
  })
}

[0, 1].forEach(function(bool){
  doBadThing(bool)
  .then(function(result){
    console.log(result)
  }).catch(function(e){
    console.log("Error! ")
  })
});

[0, 1].forEach(function(bool){
  doBadThing(bool)
  .then(
    function(result){
    console.log(result)
  }, function(reject){
    console.log('Rejected!' )
  })
});







