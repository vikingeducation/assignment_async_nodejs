var fs = require("fs");

		let fsp = {
			readFile: function(path, encoding) {
				return new Promise(function(resolve, reject){
					fs.readFile( path, encoding, function(err, data){
						if(err) {throw (err)} else{resolve( data )}
					})
				})
			},
			writeFile: function(path, message, encoding) {
				return new Promise(function(resolve, reject){
					fs.writeFile( path, message, encoding, function(err, data){
						if(err) {throw (err)}
						resolve(data)
					})	
				})
			},
			appendFile: function(path, message, encoding) {
				return new Promise(function(resolve, reject){
					fs.appendFile( path, message, encoding, function(err, data){
						if(err) {throw (err)}
						resolve(data)
					})	
				})
			}			
		}



		


				
				/*
let path = "./text.txt";

fs.readFile(path, "utf-8", function(err, data){
	console.log(data);
});

let hello = console.log("hello world!");
hello;
let goodbye = 3;

*/

module.exports = fsp
