const fs = require('fs');

function fsp () {
	this.readFile = function(string){
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
	this.writeFile = function(filePath, string){
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
	this.appendFile = function(filePath, string){
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

module.exports = new fsp();
