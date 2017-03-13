
var p = new Promise(function(resolve, reject) {
  resolve('Hello Promise!');
});

p.then(function(message) {
  setTimeout(function() {
    console.log(message);
  }, 1000);
});


var delay = function(milliseconds) {
  return new Promise(function(resolve) {
      resolve(console.log(milliseconds));
  })
};

delay.then()
//
// return new Promise(function(resolve) {
//     resolve(function() {
//         console.log('rrrr');
//         return $timeout(function(){},100);
//     }());
// }


var countdown = function () {
//  delay(1000).resolve();
  Promise.resolve("Something");
};

countdown();
//
// delay(5000)
//   .then(countDown)
//   .then(countDown)
//   .then(countDown)
//   .then(countDown)
//   .then(countDown)
//   .then(countDown)
//   .then(countDown)
//   .then(countDown)
//   .then(countDown)
//   .then(countDown);
