var fsp = require('./lib/fsp');
var fs = require('fs');

// print after 1 sec
let p = new Promise(function(resolve, reject) {
	setTimeout(function() {
		resolve("Hello Promise!");
	}, 1000);
});

p.then(function(message) {
	console.log(message);
})

/*
Your delay function should return a promise that resolves the value milliseconds after delaying for the specified number of milliseconds
Create a countDown function that uses the delay function such that the following chaining and output is possible:

delay(1000)
  .then(countDown) //=> 1000
  .then(countDown) //=> 900
  .then(countDown) //=> 800
  .then(countDown) //=> 700
  .then(countDown) //=> 600
  .then(countDown) //=> 500
  .then(countDown) //=> 400
  .then(countDown) //=> 300
  .then(countDown) //=> 200
  .then(countDown) //=> 100
  .then(countDown); //=> Done!
 */

let delay = function(milliseconds) {
	let promise = new Promise(function(resolve, reject) {
			setTimeout(function() {
			resolve(milliseconds);
		}, milliseconds);
	});

	return promise;
}

let countdown = function() {
	delay(1000)
		.then(function(msg) {
			console.log(msg - 100);
			return msg - 100;
		})
	
}

// delay(1000)
// 	.then(countdown)
// 	.then(countdown)


// Promise.all and map on arrays
let numbers = function(n) {
	return new Promise(function(resolve, reject) {
		if (typeof n !== 'number') {
			reject(console.error('Not a number!'));
		}

		resolve(n * 2);
	})
}

let arr = [1,2,3,4,5];

arr = arr.map(function(num) {
	return numbers(num);
});

console.log(arr);

Promise.all(arr)
	.then(function(results) {
		console.log(results);
	})


// do bad things for realz function
let doBadThing = function(forRealz) {
	return new Promise(function(resolve, reject) {
		if (!forRealz) {
			resolve('Yay!');

		} else {
			reject('Noo!')
		}
	});
}

doBadThing(true)
	.then(function(res) {
		console.log(res);
	})
	.catch(function(err) {
		console.error(err);
	})


fsp.readFile('./data/test.txt')
	.then(function(data) {
		console.log(data);
	})
	.catch(function(err) {
		console.error(err);
	});

fsp.writeFile('./data/test.txt', 'booyeah!')
	.then(function(data) {
		console.log(data);
	})
	.catch(function(err) {
		console.error(err);
	});

fsp.appendFile('./data/test.txt', 'double time!')
	.then(function(data) {
		console.log(data);
	})
	.catch(function(err) {
		console.error(err);
	});



















