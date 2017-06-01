
var p = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Hello Promise');
  }, 1000);
})

p.then((message) => {
  console.log(message)
});
// thanks to Chris for helping out

var delay = function(milliseconds){
  var p = new Promise((resolve) => {
    setTimeout(() => {
      resolve(milliseconds);
    }, milliseconds);
  });
return p
};
delay(1000).then((milliseconds) => {
  console.log(milliseconds);
});

var square = function(number) {
  var squarep = new Promise((resolve, reject) => {
    if(isNaN(number)) {
      reject('this is not a number')
    }
    else {resolve(number * number);
    }
  })
  return squarep
};

square(4).then((number) =>{
  console.log(number);
});

square('hello').then((number) =>{
  console.log(number);
});
