var fs = require('fs');

var fsp = {

	readFile: function(path) {
		return new Promise(function(resolve, reject) {
			fs.readFile(path, 'utf8', function(err, data) {
				err ? reject(err) : resolve(data);
			});
		});
	},

	writeFile: function(path, text) {
		return new Promise(function(resolve, reject) {
			fs.writeFile(path, text, 'utf8', function(err) {
				err ? reject(err) : resolve('Write completed');
			});
		});
	},

	appendFile: function(path, text) {
		return new Promise(function(resolve, reject) {
			fs.appendFile(path, text, 'utf8', function(err) {
				err ? reject(err) : resolve('Append completed');
			});
		});
	}

};

module.exports = fsp;
