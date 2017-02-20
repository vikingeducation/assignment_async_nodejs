var p = Promise.resolve("Hello Promise!");

p.then(function(result) {
  setTimeout(function() {
    console.log(result);
  }, 1000)
});

var starttime = Date.now();

var delay = function(milliseconds) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log(milliseconds);
      resolve();
    }, milliseconds);
  });
};

var countDown = function(result) {
 return new Promise(function(resolve) {
   console.log(parseInt(result) - 100);
 });
 };

delay(3000).then(countDown);



var isSquared = function(num) {
return new Promise(function(resolve, reject) {
  if (isNaN(num)) {
    reject(num);
  } else {resolve(Math.pow(num,2));
  };
});
};

var nums = [1,2,3,4,5,6,7,8,9];

nums = nums.map(function(i) {
  return isSquared(i);
});


Promise.all(nums)
.then(function(results) {
  console.log(results);
});


var DoBadThing = function(forRealz) {
  return new Promise(function(resolve, reject) {
  if(forRealz === false) {
    resolve('Yay!');
  }  else {reject("Its too true!");}
  });
};



  DoBadThing(3<2)
  .then(function(result) {
    console.log(result);
    throw "Catch this";
  })
  .catch(function(err) {
    console.error(err);
  })


  DoBadThing(3<2)
  .then(function(result) {
    console.log(result);
    throw "Catch this";
  }, function(err) {
    console.error(err);
  })
  .catch(function(err) {
    console.error("Caught it");
  });
