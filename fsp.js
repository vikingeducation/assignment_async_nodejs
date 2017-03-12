readFile(path, 'utf8', function(err, data) {
	var p = new Promise(resove, reject) {
		err ? reject(console.error(err)) : resolve(console.log(data));
	};
});

writeFile(path, message, function (err) {
	var p = new Promise(resolve, reject) {
		err ? reject(consle.error(err)) : resolve(console.log(message));
	};
};

appendFile(path, message, function(err) {
	var p = new Promise(resolve, reject) {
		err ? reject(console.error(err)) : resolve(console.log(message));
	};
});
