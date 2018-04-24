
/*
  cd Documents/Viking/Node/async
*/

function paused() {
  // empty on purpose
}

var greet = new Promise(function(resolve, reject) {
  resolve("Hello Promise!");
});

greet.then(function(greeting) {
  setTimeout(() => {
    console.log(greeting);
  }, 1000);
});









console.log("I ran");



// spacing
