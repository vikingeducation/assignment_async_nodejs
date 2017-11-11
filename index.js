// FIRST TASK

// First way 

let delayedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
   resolve("Hello Promise!");
  }, 1000); 
})

delayedPromise.then((message) => {
  console.log(message);
});

// Second way

let otherDelayedPromise = Promise.resolve("Hello promise 2!");

otherDelayedPromise.then((message) => {
  setTimeout(() => {
    console.log(message); 
  }, 1000);
});

// The second way doesn't delay the promise resolution by one sec; the promise resolves immediately, 
// then the logging message is delayed.

// SECOND TASK

let delay = (milliseconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(milliseconds);
    }, milliseconds);
  });
}

console.log(delay(1000));

let countDown = (result) => {
  if (result === 0) {
    console.log("Done!");
    return;
  } 
  console.log(result);
  return delay(result - 100);
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

// THIRD TASK

// function returns a promise to square if num is a number, to reject otherwise
let asyncSquaring = (num) => {
  return new Promise((resolve, reject) => {
    if (!(typeof num === 'number')) {
      reject("Not a number, bro");
    } 
    resolve(num**2);
  });
}

// testing function with 4 and "g" 

asyncSquaring("g").then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
});

// create array of promises that will be executed shortly
let arr = [1,2,3,4,5,6,7,8,9];
let mapped = arr.map((i) => {
  return asyncSquaring(i);
});

// wait until all promises resolve, then print array of them
Promise.all(mapped).then((result) => {
  console.log(result);
});

// FOURTH TASK

// function returns promise to approve of not doing bad things and reject doing bad things
let doBadThing = (forRealz) => {
  return new Promise((resolve, reject) => {
    if (!forRealz) {
      resolve("Yay!");
    }
    reject("You will not do bad thing"); 
  });
};

// verify that function is working
doBadThing(true)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  })

doBadThing(false)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  })

// experiment throwing an error in the resolve handler

doBadThing(false)
  .then((result) => {
    console.log("--------- Experiment 1 --------");
    throw "error";
    console.log(result);
  })
  .catch((err) => {
    console.log("--------- Experiment 1 --------");
    console.log(err);
  })

// now throw error in the resolve handler, using a reject handler, and delay by 
// enough time not to confuse with first experiment
setTimeout(() => {

  return doBadThing(false)
    .then((result) => {
      console.log("--------- Experiment 2 --------");
      throw "error";
      console.log(result);
    },
    (err) => {
      console.log("--------- Experiment 2 --------");
      console.log(err);
    });

}, 2000);
~                
// experiment using second handler to 'then' instead of 'catch'

doBadThing(true)
  .then((result) => {
    console.log(result);
  }, 
  (err) => {
    console.log(err);
  });

doBadThing(false)
  .then((result) => {
    console.log(result);
  }, 
  (err) => {
    console.log(err);
  });

// experiment throwing an error in the resolve handler

doBadThing(false)
  .then((result) => {
    console.log("-------- Experiment 1--------");
    return result;
  })
  .then((result) => {
    console.log("--------- Experiment 1 --------");
    throw "error";
    console.log(result);
  })
  .catch((err) => {
    console.log("--------- Experiment 1 ----------");
    console.log(err);
  })

