const fsp = require('./fileFunctions');

fsp.readFile('./data/lorem.txt')
	.then(function(data){
		console.log(data);
		return data;
	})
	.catch(function(err){
		console.error(err);
	});

fsp.writeFile('./data/test.txt', 'Hello!')
	.then(function(res){
		console.log(res);
		return res;
	})
	.catch(function(err){
		console.error(err);
	});

fsp.appendFile('./data/test.txt', 'Hello again!')
	.then(function(res){
		console.log(res);
		return res;
	})
	.catch(function(err){
		console.error(err);
	});
