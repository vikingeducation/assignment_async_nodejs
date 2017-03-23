// Problem 2:
function delay(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
  return Promise.resolve(milliseconds);
}

function countdown(milliseconds){
  console.log(milliseconds);
  if(milliseconds - 100 > 0){
    return milliseconds - 100;
  }
  else{
    return "DONE!"
  }
}

delay(1000)
  .then(countdown)
  .then(countdown)
  .then(countdown)
  .then(countdown)
  .then(countdown)
  .then(countdown)
  .then(countdown)
  .then(countdown)
  .then(countdown)
  .then(countdown)
  .then(countdown);
