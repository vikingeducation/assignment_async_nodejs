var delayed = require('delayed');
var p = Promise.resolve('Hello Promise!');

p.then(function(message) {
  delayed.delay(function(){
    console.log(message);
  }, 1000);
});

