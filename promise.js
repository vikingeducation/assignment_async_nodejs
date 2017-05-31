
var p = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Hello Promise');
  }, 1000);
})

p.then((message) => {
  console.log(message)
});
// thanks to Chris for helping out
