var fs = require('fs');

var fsp = {

	readFile: function(file){
		return new Promise(function(resolve, reject){
			fs.readFile(file, 'utf8', function(err, data){
				if(err){ reject(err)}
				resolve(data);
			})
		})
	},

	writeFile: function(file, text){
		return new Promise(function(resolve, reject){
			fs.writeFile(file, text, 'utf8', function(err, data){
				if(err){ reject(err) }
				resolve(`successfully wrote "${text}" to ${file}`)
			})
		});
	},

	appendFile: function(file, text){
		return new Promise(function(resolve, reject){
			fs.appendFile(file, text, 'utf8', function(err,data){
				if(err){ reject(err) }
				resolve(`successfully appended "${text}" to ${file}`);
			})
		})
	}

}
module.exports = fsp;