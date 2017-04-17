var hello = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve("Hello Promise");
  }, 1000);
});

hello.then(function(result){
  console.log(result);
  })
  .catch(function(err) {
    console.error(err);
});