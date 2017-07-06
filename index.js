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