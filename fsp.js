var fs = require('fs')


var fsp = {
readFile: function(filename){
	return new Promise(function(resolve, reject){
		fs.readFile(filename, "utf8", function(error,data){
if (error) {
	reject("error");
} else {
	resolve(data)
}
});		
	})
}
,
writeFile: function(file,msg){
	return new Promise(function(resolve,reject){
		fs.writeFile(file,msg, function(err){
	if (err){
		reject(err) 
	}
	 else {
		resolve(fsp.readFile(file))
	}

})
	})
},
appendFile: function(file,msg){
	return new Promise(function(resolve,reject){
		fs.appendFile(file,msg, function(err){
		if(file && msg)
		{
			resolve(fsp.readFile(file))
		} 

			else {reject(err) }


			})
		})


	}
};
fsp.appendFile("texts.txt", "hellos").then(function(result){
	console.log(result)}).catch(function(err){console.error(err)})







module.exports = fsp