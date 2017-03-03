"use strict";

let fsp = require("./fsp.js");
/* Demonstration Purposes
let p = new Promise(function(resolve, reject) {
    setTimeout(resolve.bind(null, "Hello Promise!"), 3000);
});
p.then(function onFulfilled(value) {
    console.log(value);
});
*/

function delay(milliseconds) {
    let p = new Promise(function(resolve, reject) {
        setTimeout(resolve.bind(null, milliseconds), milliseconds);
    });
    return p;
}

function countDown(milliseconds) {
    if (milliseconds > 0) {
        console.log(milliseconds);
        return delay(milliseconds - 100);
    }
    else {
        console.log("Done");
        //returns undefined
    }
}
//let delayed = delay(1000);
/*
delayed.then(countDown)
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
*/


function numSquare(num) {
    if (typeof num === "number" && num === num) { //Check for number types and that it is not NaN. Need to check for Infinity or within acceptable range?
        return Promise.resolve(Math.pow(num, 2));
    }
    else {
        return Promise.reject(num + " is not an acceptable num");
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr = arr.map(function (element, index, arr) {
    numSquare(element);
});
let promiseAll = Promise.all(arr);

function doBadThing(forRealz) {
    if (forRealz) {
        return Promise.reject("Rejected!");
    }
    else {
        return Promise.resolve("Yay!");
    }
}

let p1 = doBadThing(true);
p1.then(function onFulfilled(data) {
    throw "Booboo";
}).catch(function errorHandler(err) {
    console.error("A big error occured:", err);
});

p1.then(function onFulfilled(data) {
    throw "Booboo";
}, function onRejected(err) {
    console.error("Error message", err);
}).catch(function errorHandler(err) {
    console.error("An different error occured:", err);
});

p1.then(function onFulfilled(data) {
    throw "Booboo";
}, function onRejected(err) {
    console.error("Error message", err);
}).then(function onFulfilled(data) {
    console.log(data, "no data but resolved promise now");
}).catch(function errorHandler(err) {
    console.error("An different error occured:", err);
});



let p2 = doBadThing(false);
p2.then(function onFulfilled(data) {
    throw "Booboo";
}).catch(function errorHandler(err) {
    console.error("An error occured:", err);
});

p2.then(function onFulfilled(data) {
    console.log("We did it! Message received:", data);
}).catch(function errorHandler(err) {
    console.error("An error occured:", err);
});

//Promise from last chained then or catch fizzles for now
//Error stop at the first method that catches them. Method can element to continue to throw the error. But this will occur if onRejected handlers are omitted



//See if fsp module is working properly

fsp.readFile('./data/secretmessages.txt')
  .then(function(data) {
    // Outputs the file data
    console.log("Reading data from readFile call", data);
  })
  .catch(function(err) {
    console.error(err);
  });

fsp.appendFile('./data/secretmessages.txt', 'ByeILikeSkatesbyeKonichiwaagain!ThisisJustjustwritingOver')
  .then(function(res) {
    // Outputs the file data
    // after appending
    console.log("File append successful", res);
  })
  .catch(function(err) {
    console.error(err);
  });

fsp.writeFile('./data/secretmessages.txt', 'Hello!')
  .then(function(res) {
    // Outputs the file data
    // after writing
    console.log("File write successful", res);
  })
  .catch(function(err) {
    console.error(err);
  });






/*
let p = Promise.resolve("Hello Promise!");
p.then(function onFulfilled(message) {
    let p = new Promise(function (resolve, reject) {
        setTimeout(resolve, 3000);
    });
        p.then(function onFulfilled() {
            console.log(message);
        });
})
*/