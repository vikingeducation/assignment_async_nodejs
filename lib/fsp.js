var fs = require('fs');

module.exports = {
	readFile: function(filePath) {
		return new Promise(function(resolve, reject) {
			fs.readFile(filePath, function(err, data) {
				if (err) {
					reject(err);
				}

				resolve(data);
			})
		})
	},

	writeFile: function(filePath, msg) {
		return new Promise(function(resolve, reject) {
			fs.writeFile(filePath, msg, function(err) {
				if (err) {
					reject(err);
				}

				resolve(msg);
			})
		})
	},

	appendFile: function(filePath, msg) {
		return new Promise(function(resolve, reject) {
			fs.appendFile(filePath, msg, function(err) {
				if (err) {
					reject(err);
				}

				resolve(msg);
			})
		})
	}
}