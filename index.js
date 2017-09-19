const fsp = require("./lib/fsp")

console.log(fsp);

delay = function(milliseconds) {
	var p = new Promise(function(resolve, reject) {	
		setTimeout(function() {
			resolve(milliseconds);
		}, milliseconds)
	});

	return p;
};

countDown = function(milliseconds) {
	if (milliseconds > 0) {
		console.log(milliseconds);
		milliseconds -=100;
	} else {
		console.log("Done!");
	};

	return delay(milliseconds);
};

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

var square = function(number) {
	var p = new Promise(function (resolve, reject) {
		if (typeof number === "number") {
			var newNum = number * number;
			resolve(newNum);
		} else {
			reject("Not a number");
		}
	});

	return p;
};

var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

numArray = numArray.map(function(num) {
	return square(num);
});

Promise.all(numArray)
	.then(function(number) {
		console.log(number);
	});

doBadThing = function(forRealz) {
	var p = new Promise(function(resolve, reject) {
		if (!forRealz) {
			resolve("Yay!");
		} else {
			reject("Oh noooooo!")
		};
	});

	return p;
};

doBadThing(true)
	.then(function(result) {
		console.log(result);
	})
	.catch(function(err) {
		console.error(err)
	});

doBadThing(false)
	.then(function(result) {
		throw "Whoops~!";
		console.log(result);
	})
	.catch(function(err) {
		console.error(err)
	});

fsp.readFile('./data/lorem.txt')
  .then(function(data) {
    // Outputs the file data
    console.log(data);
  })
  .catch(function(err) {
    console.error(err);
  });

fsp.writeFile('./data/test.txt', 'Hello!')
  .then(function(res) {
    // Outputs the file data
    // after writing
    console.log(res);
  })
  .catch(function(err) {
    console.error(err);
  });

fsp.appendFile('./data/test.txt', 'Hello again!')
  .then(function(res) {
    // Outputs the file data
    // after appending
    console.log(res);
  })
  .catch(function(err) {
    console.error(err);
  });