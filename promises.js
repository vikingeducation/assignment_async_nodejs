p.then(function(message) {
  // 1 second delay
  console.log(message); //=> Hello Promise!
});

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
nums = nums.map(function(i) {
  return Promise.resolve(i * i);
});

Promise.all(nums)
  .then(function(results) {
    console.log(results);
  });

var doBadThing = new Promise(function(resolve, reject) {
  if (true) {
    reject('Failed');
  } else {
    resolve('Yay!');
  }
});

