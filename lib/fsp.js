const fs = require('fs');

/*
//test code
fsp.readFile('./test.txt', 'utf8', function(err, data) {
	console.log('done reading file');
});

fsp.writeFile('./writetome.txt', '>>WRITE STUFF<<\n', 'utf8', function(err, data) {
	console.log('done writing file');
});

fsp.appendFile('./writetome.txt', '>>APPEND STUFF<<', 'utf8', function(err, data) {
	console.log('done appending stuff');
});
*/

const fsp = {
	readFile: 	function(path) {
		return new Promise(function(resolve,reject) {
			fs.readFile(path, 'utf8', function(err, data){
				if (err) reject(err);
				else resolve(data);
			});
		});
	},	
	writeFile: 	function(path, stuff) {
		return new Promise(function(resolve,reject) {
			//note: writeFile callback only returns err, no data like readFile
			fs.writeFile(path, stuff, 'utf8', function(err) {
				if (err) reject(err);
				else resolve('>>Done with write<<');
			});
		});
	},
	appendFile: function(path, stuff) {
		return new Promise(function(resolve,reject) {
			//note: appendFile callback only returns err, no data like readFile
			fs.appendFile(path, stuff, 'utf8', function(err) {
				if (err) reject(err);
				else resolve('>>Done with append<<');
			});
		});
	}
};

module.exports = fsp;