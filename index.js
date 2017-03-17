//
//
debugger;
var firstPromise = new Promise(function(resolve, reject) {
  resolve("Hello Promise");
});

var check = firstPromise.then(function(message) {
  setTimeout(
    function() {
      console.log(message);
    },
    1000
  );
});
//write a function called delay that takes a number a
//as an argument
//that function should return a promise object
//promise object should delay for x time and then print
//
//create a countDown function
//countDown should return delay(original - 100)

function delay(milliseconds) {
  return new Promise(function(resolve, reject) {
    setTimeout(
      function() {
        resolve(milliseconds);
      },
      milliseconds
    );
  });
}
function countDown(mili) {
  if (mili > 0) {
    console.log(mili);
    return delay(mili - 100);
  } else {
    console.log("Done!");
  }
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
  .then(countDown)
  .then(countDown);

function numSquaredProm(num) {
  return new Promise(function(resolve, reject) {
    if (typeof num === "number") {
      resolve(num * num);
    } else
      reject("Not a number.");
  });
}

numSquaredProm(10).then(
  function(accept) {
    console.log(accept);
  },
  function(fail) {
    console.log("Fail! " + fail);
  }
);

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr = arr.map(numSquaredProm);

Promise.all(arr).then(function(results) {
  console.log(results);
});

function doBadThings(forRealz) {
  return new Promise(function(resolve, reject) {
    if (forRealz == true) {
      reject("The value it truthy");
    } else {
      resolve("Yay!");
    }
  });
}

doBadThings(0)
  .then(function(results) {
    console.log(results);
  })
  .catch(function(err) {
    console.log(err);
  });

doBadThings(1)
  .then(function(results) {
    console.log(results);
  })
  .catch(function(err) {
    console.log(err);
  });

doBadThings(1).then(
  function(results) {
    console.log(results);
  },
  function(fail) {
    console.log(fail);
  }
);
