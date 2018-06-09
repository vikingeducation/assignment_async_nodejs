//These few warmups will get you started working with promises.

//1. create a promise that logs  "Hello Promise!" after one second using .then
var helloPromise = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve(`Hello Promise!`);
  }, 1000);
});

helloPromise.then(function(hello) {
  console.log(hello);
});
