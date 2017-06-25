 "use strict";

var delay = function(milliseconds) {
  return new Promise(function(resolve) {
    setTimeout(() => {resolve(milliseconds)}, 1000)
  })
};
var countDown = function(time){
  if(time >= 100){
    console.log(time);
    time = time - 100;
    countDown(time);
  } else {
    console.log("Done!");
  }
};
delay(1000).then(countDown);
