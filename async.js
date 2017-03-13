
var p = new Promise(function(resolve, reject) {
  if (true) {
    resolve('Hello Promise!');
  }
  else {
    reject('Something is wrong..');
  }
});

p.then(function(message) {
  setTimeout(function() {
    console.log(message);
  }, 5000);
});
