// Resolve a basic promise.
let p = new Promise((resolve, reject) => {
  resolve("This is a test");
});
p.then(console.log);

// Countdown promise chaining.
let delay = milleseconds => {
  return new Promise(resolve => {
    setTimeout(() => { resolve(milleseconds) }, milleseconds);
  });
}
let countDown = result => {
  console.log(result);
  if (result > 100)
    return delay(result-100);
  console.log("Done!");
}
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

// Squaring promise.
let square = num => {
  return new Promise((resolve, reject) => {
    typeof(num) === 'number' ? resolve(Math.pow(num, 2)) : reject('Not a number');
  });
}
square(5).then(console.log, console.log);
square("f").catch(console.log);
let nums = [1,2,3,4,5,6,7,8,9,10].map(square);
Promise.all(nums).then(console.log, console.log);

// doBadThing promise.
function doBadThing(forRealz) {
  return new Promise((resolve, reject) => {
    !forRealz ? resolve("Yay!") : reject("Nay!");
  })
}

setTimeout(() => {
doBadThing(true).then(console.log, console.log);
doBadThing(false).then(console.log, console.log);
doBadThing(true).then(console.log).catch(console.log);
doBadThing(false).then(console.log).catch(console.log);
doBadThing(true).then((r) => { console.log(r); throw "error"; }).catch(console.log);
}, 6000);

// File operations
const FS = require('./lib/fsp');
