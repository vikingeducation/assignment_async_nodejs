/* 1. ****************************************/
/*
var p = new Promise(function(resolve, reject) {
	setTimeout(function() {
		resolve('Hello Promise!');
	}, 1000);
});

p.then(function(message) {
	console.log(message);
});
*/
/* 2. ****************************************/
/*
function delay(milliseconds) {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			resolve(milliseconds);
		}, milliseconds);
	});
}

function countdown(milliseconds) {
	if (milliseconds >= 100) {
		console.log(milliseconds);
		return delay(milliseconds - 100);
	}
	console.log("Done!");
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
	.then(countdown);
*/
/* 3. ****************************************/
/*function square(num) {
	return new Promise(function(resolve, reject) {
		if (typeof num === 'number' && isFinite(num)) {
			resolve(num * num);
		} else {
			reject(NaN);
		}
	});
}

var squares = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(function(i) {
	return square(i);
});

Promise.all(squares)
	.then(function(result) {
		console.log('All square promises resolve to:', result);
	});
*/
/* 4. ****************************************/

function doBadThing(forRealz) {
	return new Promise(function(resolve, reject) {
		if (!forRealz) {
			resolve('Yay!');
		} else {
			reject('Nay!');
		}
	});
}

doBadThing(true)
	.then(function(result) {
		console.log('doBadThing(true)', 'resolves to:', result);
	})
	.catch(function(err) {
		console.error('doBadThing(true)', 'rejects with catch to:', err);
	});

doBadThing(false)
	.then(function(result) {
		console.log('doBadThing(false)', 'resolves to:', result);
	})
	.catch(function(err) {
		console.error('doBadThing(false)', 'rejects with catch to:', err);
	});

doBadThing(true)
	.then(function(result) {
		console.log('doBadThing(true)', 'resolves to:', result);
	}, function(err) {
		console.error('doBadThing(true)', 'rejects to:', err);
	});

doBadThing(false)
	.then(function(result) {
		console.log('doBadThing(false)', 'resolves to:', result);
	}, function(err) {
		console.error('doBadThing(false)', 'rejects to:', err);
	});

doBadThing(true)
	.then(function(result) {
		console.log('doBadThing(true)', 'resolves to:', result);
		throw "throw after resolve";
	})
	.catch(function(err) {
		console.error('doBadThing(true)', 'rejects with catch to:', err);
	});

doBadThing(false)
	.then(function(result) {
		console.log('doBadThing(false)', 'resolves to:', result);
		throw "throw after resolve";
	})
	.catch(function(err) {
		console.error('doBadThing(false)', 'rejects with catch to:', err);
	});
