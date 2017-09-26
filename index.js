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

debugger;
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







