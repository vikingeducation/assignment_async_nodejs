"use strict";

var fs = require('fs');


// WARMUP 1
let promise1 = new Promise(function(resolve, reject) {
	if (1===1) {
		resolve("Hello Promise!");
	} else {
		reject("UNIVERSE BROKEN.");
	}
})
	.then(function(message) {
		setTimeout(function() {
			return;
		}, 1000);
		console.log(message);
	});


// WARMUP 2
let delay = function(milliseconds) {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			resolve(milliseconds);
		}, milliseconds);
	});
}

let countDown = function(value) {
	let newValue = value - 100;
	if (newValue < 100) {
		newValue = 0;
	}
	console.log(newValue);
	return new Promise(function(resolve, reject) {
		resolve(delay(newValue));
	});
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
	.catch(function(error) {
		console.log(error);
	});


// WARMUP 3
let squaredPromise = function(number) {
	return new Promise(function(resolve, reject) {
		if (typeof number === 'number') {
			var numSquared = number * number;
			resolve(numSquared);
		} else {
			reject("NOT A NUMBER");
		}
	});
}

let numbers = [2, 3, 4, 5, 6];

numbers = numbers.map(squaredPromise);

Promise.all(numbers)
	.then(function(results) {
		console.log(results);
	})
	.catch(function(error) {
		console.log(error);
	});


// WARMUP 4
let doBadThing = function(forRealz) {
	return new Promise(function(resolve, reject) {
		if(forRealz == true) {
			resolve("Yay!");
		} else {
			reject("BOO.");
		}
	});
}

doBadThing(true)
	.then(function(result) {
		console.log(result);
	})
	.catch(function(error) {
		console.log(error);
	});


// FILE OPERATIONS
let fsp = {
	readFile: function(path) {
		return new Promise(function(resolve, reject) {
			var text = fs.readFile(path, 'utf8', (error, data) => {
				if (error) throw error;
				resolve(data);
			});
		});
	},

	writeFile: function(path, input) {
		return new Promise(function(resolve, reject) {
			var text = fs.writeFile(path, input, 'utf8', (error) => {
				if (error) reject(error);
				resolve(fsp.readFile(path));
			});
		});
	},

	appendFile: function(path, input) {
		return new Promise(function(resolve, reject) {
			var text = fs.appendFile(path, input, 'utf8', (error) => {
				if (error) reject(error);
				resolve(fsp.readFile(path));
			});
		});
	},
}


fsp.readFile('./data/text.txt')
	.then(function(data) {
		console.log(data);
	})
	.catch(function(error) {
		console.log(error);
	});

fsp.writeFile('./data/testy.txt', "The mouse is a big blue rabbit fox hound nugget!!!!")
	.then(function(data) {
		console.log("File saved! CONTENTS:  " + data);
	})
	.catch(function(error) {
		console.log(error);
	});

fsp.appendFile('./data/testy.txt', "  MEOWWWWW!!!")
	.then(function(data) {
		console.log("File saved! CONTENTS:  " + data);
	})
	.catch(function(error) {
		console.log(error);
	});



// CREATE AN EVEN EMITTER FROM SCRATCH
//YOUAREHERE

















