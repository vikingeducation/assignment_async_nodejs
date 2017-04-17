var hello = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve("Hello Promise");
  }, 1000);
});

hello.then(function(result){
  console.log(result);
  })
  .catch(function(err) {
    console.error(err);
});

var delay = function(milliseconds) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(milliseconds);
    }, milliseconds);
  });
};

var countDown = function (result) {
  // console.log(result);
  return delay(result - 100);
};

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
  .then(countDown);
//   .then(function(result) {
//   console.log(result);
// });