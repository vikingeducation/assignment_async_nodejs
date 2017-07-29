var fs = require('fs');
var file = "randomtext_gibberish_p-longer.txt";
var fsp = require('./fsp.js');

fsp.readFile(file)
.then(function(results){
	console.log(results);
})
.catch(function(err){
	console.log(err);
})

/*
fsp.writeFile(file, "hello world")
.then(function(results){
	console.log(results);
})
.catch(function(err){
	console.log(err)
});
*/

fsp.appendFile(file, "hello world 2356 ")
.then(function(results){
	console.log(results);
})
.catch(function(err){
	console.log(err)
})

/*
fs.appendFile(file, "more ", {"encoding": "utf8","flags": "a"}, function(err){
	if(err){ throw err; }
})

function read_file(){
fs.readFile(file, 'utf8',
	function(err,data){
		if(err){ throw err; }
		var line = data.split(" ");
		for(var i in line){
			console.log(`${i} ${line[i]}`)
		}
	})
}


read_file();
*/