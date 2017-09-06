'use strict';

const fsp = require("./fsp");
const Emitter = require("./emitter"); //"events"); -- works just the same after switch out


// 1. Create a promise that resolves the message "Hello Promise!" after 1 sec
let p = Promise.resolve("Hello Promise!");

p.then(function(message) {

  setTimeout(function () {
    console.log(message);
  }, 1000);

});


// 2. Create a function with the following signature: delay(milliseconds)
function delay (time) {
  return new Promise(resolve => setTimeout(resolve(time), time));
}

function countDown(num) {

  if(num > 0) {
    console.log(num);
    num -= 100;
  } else {
    console.log('Done!');
  }

  return num;
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



// 3. Create a function that accepts a number and returns a promise
// that resolves that number squared
function square(integer) {
  return new Promise( function(resolve, reject) {

    if(Number.isInteger(integer)) {
	  resolve(integer * integer);
	} else {
	  reject();
	}

  });
}  

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
nums = nums.map(i => square(i));

Promise.all(nums)
  .then(results => console.log(results));



// 4. Create a function with this signature doBadThing(forRealz)	
function doBadThing(forRealz) {
  return new Promise( function(resolve, reject){
	if (forRealz == false) {
	  resolve("Yay!");
	} else {
	  reject("Nay!");
	}
  });
}

doBadThing(true).then(function(result) {
  console.log(result);						
}, function(err) {										//reject handler
     console.error("reject message: " + err);
   }
);

doBadThing(false)
  .then(function(result) {
    console.log(result);
    throw "Trigger the catch!";							//throw error
  })
  .catch(function(err) {								//catch error
    console.error("catch message: " + err);
  });   



// File Operations using Promises
// readFile, writeFile, appendFile

fsp.readFile("./data/lorem.txt")
  .then(function(data) {
    // Outputs the file data
    console.log(data);
  })
  .catch(function(err) {
    console.error(err);
  }
);

fsp.writeFile("./data/test.txt", "Hello!")
  .then(function(res) {
    // Outputs the file data
    // after writing
    console.log(res);
  })
  .catch(function(err) {
    console.error(err);
  }
);

fsp.appendFile("./data/test.txt", 'Hello again!')
  .then(function(res) {
    // Outputs the file data
    // after appending
    console.log(res);
  })
  .catch(function(err) {
    console.error(err);
  }
);



// Event Emitter
// Create an event emitter similar to the NodeJS EventEmitter but a smaller version
//  Should be able to: 
// 	a. attach an event listener with `.on(eventType, callback)`
// 	b. invoke all listeners attached to a particular event with `.emit(eventType)`
//	c. remove a particular listener from the given event with `.removeListener(eventType, callback)`
//	d. remove all listeners from the given event with `.removeAllListeners(eventType)`

// Set up Emitter
let emitter = new Emitter();

const callback1 = function(){
  console.log("Click 1");
};

// Attach an event listener on click event
emitter.on("click", callback1);

// Attach another listener on click event
emitter.on("click", function(){
  console.log("Click 2");
});

// Attach another listener on click event
emitter.on("click", function(){
  console.log("Click 3");
});

// Attach a listener on change event
emitter.on("change", function(){
  console.log("Change 1");
});

// Attach another listener on change event
emitter.on("change", function(){
  console.log("Change 2");
});


// Emit a click event - should result in all listeners attached to click event being invoked
console.log("Print out all listeners on click event");
emitter.emit("click");

// Emit a change event - should result in all listeners attached to change event being invoked
console.log("Print out all listeners on change event");
emitter.emit("change");

console.log("Remove Click 1 listener on click event");
emitter.removeListener("click", callback1);

// Emit a click event - should result in all listeners attached to click event being invoked
console.log("Print out all listeners on click event - should have Click 2 and Click 3");
emitter.emit("click");

// Remove all listeners on an event with emitter.removeAllListeners(eventType)
console.log("Remove all listeners on click event");
emitter.removeAllListeners("click");

// Emit a click event - should result in all listeners attached to click event being invoked
console.log("Print out all listeners on  click event - should not have any left");
emitter.emit("click");



