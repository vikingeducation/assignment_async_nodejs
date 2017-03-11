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
