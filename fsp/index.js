fs = require('fs');

var fsp = {
	readFile: function(path){
		p = new Promise(function(resolve, reject){
			fs.readFile(path, 'utf8', function(err, data){
				if (err) {
					reject(err);
				} else {
					resolve(data);
				}
			});
		});
		return p;
	},
	writeFile: function(path, data){
		fs.writeFile(path, data, function(){});
		return fsp.readFile(path);
	},
	appendFile: function(path, data){
		fs.appendFile(path, data, function(){});
		return fsp.readFile(path);
	},	
};

module.exports = fsp;