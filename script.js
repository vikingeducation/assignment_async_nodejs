var fsp = require('./lib/fsp');

// print after 1 sec
let p = new Promise(function(resolve, reject) {
	setTimeout(function() {
		resolve("Hello Promise!");
	}, 1000);
});

p.then(function(message) {
	console.log(message);
})


let delay = function(milliseconds) {
	let promise = new Promise(function(resolve, reject) {
			setTimeout(function() {
			resolve(milliseconds);
		}, milliseconds);
	});

	return promise;
}

let countdown = function(t) {
	// going to refer to solutions
	var output = t > 0 ? t : 'Done!';
  console.log(output);
  return delay(t - 100);
	
}

delay(1000)
	.then(countdown)
	.then(countdown)
	.then(countdown)
	.then(countdown)
	.then(countdown)
	.then(countdown)
	.then(countdown)
	.then(countdown)
	.then(countdown)
	.then(countdown)
	.then(countdown)



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



















