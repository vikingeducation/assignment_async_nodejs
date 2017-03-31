

// Warmup 1

let myFirstPromise = new Promise((resolve, reject) => {
  setTimeout(function(){
    resolve("Hello Promise!");
  }, 1000);
});

myFirstPromise.then((successMessage) => {
  console.log(successMessage);
});


// Warmup 2

let delay = function(milliseconds) {
  return new Promise(function(resolve, reject) {
    setTimeout(function(){
      resolve(milliseconds);
    }, milliseconds);
  });
}

// shriking interval countdown timer
let countdown = function(timestep) {
  return new Promise(function(resolve, reject) {
    if (timestep === 0) {
      resolve(console.log("done"));
    } else {
      console.log(timestep);
      resolve(delay(timestep - 100));
    }
  });
}


delay(1000)
  .then(countdown)
  .then(countdown)
  .then(countdown)
  .then(countdown)
  .then(countdown)
  .then(countdown)
  .then(countdown)
  .then(countdown)
  .then(countdown)
  .then(countdown)
  .then(countdown);

// Warmup 3

let squareMe = function(number) {
  return new Promise(function(resolve, reject) {
    if (isNaN(number)) {
      reject("not a number");
    } else {
      resolve(number * number);
    }
  });
}

let warmupArray = [1,2,3,4,5,6,7,8,9];

warmupArray = warmupArray.map(squareMe);

Promise.all(warmupArray)
  .then(function(results) {
    console.log(results);
  });



// Warmup 4

let doBadThing = function(forRealz) {
  return new Promise(function(resolve, reject) {
    if (forRealz) {
      reject("danger, Will Robinson");
    } else {
      resolve("Yay!");
    }
  });
}

// falsy statement
doBadThing(false)
  .then(function(i){
    console.log(i);
  })
  .catch(function(err){
    console.error("In catch statement: " + err);
  });

// catch error on promise reject
doBadThing(true)
  .then(function(i){
    console.log(i);
  })
  .catch(function(err){
    console.error("In catch statement: " + err);
  });

// user error handler in reject
doBadThing(true)
  .then(function(i){
    console.log(i);
  }, function(err){
    console.error("In error statement: " + err);
  });


// throw error to catch 
doBadThing(false)
  .then(function(i){
    console.log(i);
    throw("we're not in Kansas any more");
  })
  .catch(function(err){
    console.error("In catch statement: " + err);
  });
