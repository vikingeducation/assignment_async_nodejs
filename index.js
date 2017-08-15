const fs = require('fs');
const fsp = require('./lib/fsp');
const path = './data/lorem.txt';


let promise = new Promise((resolve) => {
	setTimeout( () => {
		resolve('Hello Promise!');
	}, 1000);
});

promise.then((message) => {
	console.log(message);
});


const delay = (milliseconds) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(milliseconds);
		}, milliseconds);
	});
};

const countDown = (data) => {
	if(data === 0) {
		console.log('Done!');
	} else {
		console.log(data)
		return delay(data - 100);
	};
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


let numbers = [1,2,3,4,5,6,7,8,9];

numbers = numbers.map(function (x) {
	// body... 
	return new Promise((resolve, reject) => {
		if (isNaN(x) === false) {
			resolve(x * x);
		} else {
			reject('Not a number: ' + x);
		}
	})
});

Promise.all(numbers)
	.then((result) => {
		console.log(result);
	})
	.catch((err) => {
		console.error(err);
	});


function doBadThingz(forRealz) {
	return new Promise((resolve, reject) => {
		if(forRealz != true) {
			resolve('Yay!');
		} else {
			reject('Not Bad enough!');
		}
	});
}

doBadThingz(1<4)
	.then((result) => {
		console.log(result);
	})
	.catch((err) => {
		console.error(err);
	});

fsp.readFile(path)
	.then((data) => {
		console.log(data);
	})
	.catch((err) => {
		console.error(err);
	});

fsp.writeFile(path, 'Hello!')
	.then((res) => {
		console.log(res)
	})
	.catch((err) => {
		console.error(err);
	});
fsp.appendFile(path, 'Hello Again!')
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.error(err);
	});
