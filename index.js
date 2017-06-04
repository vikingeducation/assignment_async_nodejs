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
  return new Promise(function(resolve){
    setTimeout(resolve(myDelay), 0);
  });
}
function countDown(){
  myDelay == 0 ? console.log("done!") : console.log(myDelay);
  myDelay -= 100;
  return new Promise(function(resolve){
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


/**
 * 3. Create a function that accepts a number and returns a promise that
 * resolves that number squared.
 *
 * The promise should reject if it is not passed a number.
 *
 * Now map an array of integers 1 to 9 to an array of promises using
 * the function above.
 *
 * Use Promise.all to get the result of all of the promises in the array.
 */
function square(n){
  return new Promise(function(resolve, reject){
    isNaN(n) ? reject("not a number") : resolve(n*n);
  });
}

var nums = [2,4,6,8,10];
nums = nums.map(function(i){
  return square(i);
});

Promise.all(nums).then(function(result){
  console.log(result);
}, function(err){
  console.log(err);
});

function doBadThing(forRealz){
  return new Promise(function(resolve, reject){
    forRealz ? reject("Whimp!") : resolve("Yay!");
  });
}

/**
 * 4.Create a function with this signature doBadThing(forRealz)
 *
 * Return a promise that resolves to "Yay!" when forRealz is falsy
 * The promise should reject when forRealz is truthy
 * Now call doBadThing with both a true and false value chaining on
 * .then and .catch
 *
 * Experiment with using .catch vs supplying a reject handler in your
 * .then call
 *
 * Experiment using now try throwing an error in the resolve handler of
 * your .then call
 *
 * What do you notice about when the .catch handler and the reject
 * handler are invoked? - Catch seems to have some kind of delay?
 */
doBadThing(false).then(function(result){
  console.log(result);
}, function(err){
  console.log(err);
});
doBadThing(true).then(function(result){
  console.log(result);
}, function(err){
  console.log(err);
});
/*doBadThing(false).then(function(result){
  console.log(result);
}).catch(function(err){
  console.log(err);
});
doBadThing(true).then(function(result){
  console.log(result);
}).catch(function(err){
  console.log(err);
});*/

/***********************************************************************
                       DIVIDER
************************************************************************/

/**
 * 4. Create a fsp module that wraps these fs methods and
 * makes the following promise based versions possible
 * fsp.readFile("sometext.txt")
 *   .then(function(data){
 *     console.log(data);
 *   }, function(err){
 *     console.log(err);
 *   });
 *
 * fsp.writeFile('test.txt', 'Hello!')
 *   .then(function(res) {
 *     // Outputs the file data
 *     // after writing
 *     console.log(res);
 *   })
 *   .catch(function(err) {
 *     console.error(err);
 *   });
 *
 * fsp.appendFile('test.txt', 'Hello again!')
 *   .then(function(res) {
 *     // Outputs the file data
 *     // after appending
 *     console.log(res);
 *   })
 *   .catch(function(err) {
 *     console.error(err);
 *   });
 */
const fs = require("fs");

var fsp = function() {
  function readFile(path) {
    return new Promise(function(resolve, reject){
      fs.readFile(path, "utf8", function(err, data){
        err ? reject("Error opening file") : resolve(data);
      });
    });
  };
  function writeFile(path, message) {
    return new Promise(function(resolve, reject){
      fs.writeFile(path, message, "utf8", function(err, data){
        err ? reject("Error writing file") : resolve("Done writing file");
      });
    });
  };
  function appendFile(path, message){
    return new Promise(function(resolve, reject){
      fs.appendFile(path, message, "utf8", function(err, data){
        err ? reject("Error appending to file") : resolve ("Append to file successful");
      });
    });
  };
  return {
    readFile: function(path) {return readFile(path);},
    writeFile: function(path, message) {return writeFile(path, message);},
    appendFile: function(path, message) {return appendFile(path, message);}
  };
}();

fsp.readFile("sometext.txt")
  .then(function(data){
    console.log(data);
  }, function(err){
    console.log(err);
  });

fsp.writeFile('test.txt', 'Hello!')
  .then(function(res) {
    // Outputs the file data
    // after writing
    console.log(res);
  })
  .catch(function(err) {
    console.error(err);
  });

  fsp.appendFile('test.txt', 'Hello again!')
  .then(function(res) {
    // Outputs the file data
    // after appending
    console.log(res);
  })
  .catch(function(err) {
    console.error(err);
  });
