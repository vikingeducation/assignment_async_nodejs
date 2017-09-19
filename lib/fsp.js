const fs = require("fs");

const fsp = {
	readFile: function(file) {
		var p = new Promise(function(resolve, reject) {
			fs.readFile(file, "utf8", function(err, data) {
				if (err) {
					reject(err);
				} else {
					resolve(data);
				};
			});
		});

		return p;
	},

	writeFile: function(file, text) {
		var p = new Promise(function(resolve, reject) {
			fs.writeFile(file, text, "utf8", function(err) {
				if (err) {
					reject(err);
				}

				resolve(fsp.readFile(file));
			});
		});

		return p;
	},

	appendFile: function(file, text) {
		var p = new Promise(function(resolve, reject) {
			fs.appendFile(file, text, "utf8", function(err) {
				if (err) {
					reject(err);
				}

				resolve(fsp.readFile(file));
			});
		});

		return p;
	}
};

module.exports = fsp;