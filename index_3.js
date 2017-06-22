 "use strict";

/*
Create a function that accepts
a number and returns a promise that resolves that number squared

The promise should reject if it is not passed a number

Now map an array of integers 1 to 9 to an array of
promises using the function above

Use Promise.all to get the result of all of the
promises in the array
 */
var squared = function(num){
  return new Promise(function(resolve, reject) {
    if(!isNaN(num)) {
      resolve(num * num)
    }else {
      reject(num);
      console.error("Not a number");
    }
  })
};

let arr = [1,2,3,4,5,6,7,8,9];
let p = arr.map(function(i){
  return squared(i);
});

Promise.all(p)
  .then((results) => console.log(results));
