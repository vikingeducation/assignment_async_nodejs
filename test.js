var testEven = new Promise(function(resolve, reject) {
  if (Date.now() % 2 === 0) {
    resolve('Even');
  } else {
    reject('Odd');
  }
});



testEven
  .then(function(result) {
    console.log(result);
  })
  .catch(function(err) {
    console.error(err +" = >I'm an error!");
  });
