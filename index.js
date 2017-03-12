// Hello Promise
var p = new Promise(function (resolve, reject) {
	resolve('Hello Promises');
	reject('error');
});
p.then(function (message) {
	setTimeout(function () {
		console.log(message);
	}, 1000);
});

// delay(milliseconds)
function delay (milliseconds) {
	setTimeout(function () {
		var p = new Promise(function (resolve, reject) {
			resolve(milliseconds - 100);
			reject('error');
		});
	}, milliseconds);
	console.log(milliseconds);
	return p;
}
function countDown () {
	delay();
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
	.then(countDown);

// warmup 3
function squared (number) {
	var p = new Promise(function (resolve, reject) {
		resolve(number * number);
		reject('error');
	});
}
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
nums = nums.map(function (i) {
	return Promise.resolve(squared(i));
});
Promise.all(nums)
	.then(function (results) {
		console.log(results);
	});

// warmup 4
function doBadThing (forRealz) {
	var p = new Promise(function (resolve, reject) {
		if (forRealz) {
			reject('error');
		} else {
			resolve('Yay');
		}
	});
}
doBadThing(true);
doBadThing(false);

// File Op 1
var fsp = require('fsp');
// var pathLorem = './data/lorem.txt';
// var pathTest = './data/test.txt';
fsp.readFile('./data/lorem.txt')
.then(function (data) {
	console.log(data);
})
.catch(function (err) {
	console.error(err);
});
fsp.writeFile('./data/test.txt', 'Hello!')
.then(function (res) {
	console.log(res);
})
.catch(function (err) {
	console.error(err);
});
fsp.appendFile('./data/test.txt', 'Hello again!')
.then(function (res) {
	console.log(res);
})
.catch(function (err) {
	console.error(err);
});
