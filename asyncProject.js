const fs = require('fs');

let fsp = {
	readFile: function(string){
		return new Promise(function(resolve,reject){
			fs.readFile(string, 'utf-8', function(err, data){
				if(err){
					throw err;
				}else{
					resolve( data );
				}
			})
		});
	},
	writeFile: function(filePath, string){
		return new Promise(function(resolve,reject){
			fs.writeFile(filePath, string, function(err){
				if(err){
					throw err;
				}else{
					resolve('The file has been updated.');
				}
			});
		});
	},
	appendFile: function(filePath, string){
		return new Promise(function(resolve,reject){
			fs.appendFile('./data/test.txt', 'Hello again!', function(err){
				if(err){
					throw err;
				}else{
					resolve('The file has been appended to.');
				}
			});
		});
	}
}

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
