var p = new Promise(function(resolve, reject) {
	setTimeout(function() {
		resolve("Hello world!");
	}, 1000);
});

p.then(function(message) {
	console.log(message);
});