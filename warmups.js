// 1

var p = new Promise(function(resolve, reject){
	setTimeout(function(){
		resolve('Hello Promise!');
	}, 1000);
});


// 2

var delay = function(milliseconds) {
	var p = new Promise(function(resolve, reject){
		setTimeout(function(){
			resolve(milliseconds);
		}, milliseconds);
	});
	return p;
};

var countDown = function(milliseconds) {
	console.log(milliseconds);
	if (milliseconds > 100) {
		return delay(milliseconds - 100);
	} else {
		return "Done!"
	}
};

// 3

var squarer = function(num) {
	var p = new Promise(function(resolve, reject){
		if (num.toFixed) {
			resolve(num*num);
		} else {
			reject("Not a number!");
		}
	});
	return p;
};

var integers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

integers = integers.map(squarer);

Promise.all(integers)
	.then(function(ary){
		console.log(ary);
	});

// 4

var doBadThing = function(forRealz) {
	return new Promise(function(resolve, reject){
		if (!forRealz) {
			resolve('Yay!');
		} else {
			reject('Very bad');
		}
	});
};


doBadThing(0)
	.then(function(message) {
		console.log(message);
		throw("Error");
	})
	.catch(function(err) {
		console.error(err);
	});



doBadThing(true)
	.then(function(message) {
		console.log(message);
	}, function(message){
		console.error(message);
	});


