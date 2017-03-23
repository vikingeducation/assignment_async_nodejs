// Problem 1:

var p = Promise.resolve('Hello Promise!');

p.then(function(message){
  delay(1000);
  console.log(message);
});

// Reference: stackoverflow.com/questions/16873323/javascript-sleep-wait-before-continuing
function delay(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
