'use strict';

const fsp = require('./fsp');

// 1. Create a promise that resolves the message "Hello Promise!" after 1 sec
let p = Promise.resolve('Hello Promise!');

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


//File Operations
fsp.readFile('./data/lorem.txt')
  .then(function(data) {
    // Outputs the file data
    console.log(data);
  })
  .catch(function(err) {
    console.error(err);
  }
);

fsp.writeFile('./data/test.txt', 'Hello!')
  .then(function(res) {
    // Outputs the file data
    // after writing
    console.log(res);
  })
  .catch(function(err) {
    console.error(err);
  }
);

fsp.appendFile('./data/test.txt', 'Hello again!')
  .then(function(res) {
    // Outputs the file data
    // after appending
    console.log(res);
  })
  .catch(function(err) {
    console.error(err);
  }
);


