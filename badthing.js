function doBadThing(forRealz){
	return new Promise(function(resolve, reject){
		if(!forRealz){
			resolve("Yay!")
		} else {
			reject("truthy")
		}
	})
}

doBadThing(true).then(function(result){
	console.log(result)
})

doBadThing(true).then(function(result){
	console.log(result)
}).catch(function(err){
	console.log(err)
})