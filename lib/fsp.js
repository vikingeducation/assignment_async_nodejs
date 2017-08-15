var fs = require("fs");

var fsp = {
	readFile: (file) => {
		return new Promise((res, rej) => {
			fs.readFile(file, 'utf8', (err, data) => {
				err ? console.error(err) : console.log(data);
			});
		});
	},

	writeFile: (file,data) => {
		return new Promise((res, rej) => {
			fs.writeFile(file, data, 'utf8', (err, data) => {
				if(err) {
					throw err;
				}
				console.log('Filed Saved!');
			});
		});
	},

	appendFile: (file, data) => {
		return new Promise((res, rej) => {
			fs.appendFile(file, data, 'utf8', (err, data) => {
				if (err) {
					throw err;
				}
				console.log('The data was appended')
			});
		});
	}
};


module.exports = fsp;