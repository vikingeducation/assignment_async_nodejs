p = new Promise(function(resolve){
	setTimeout(resolve, 1000, "Hello Promise");
});

p
  .then(function(result){
	    console.log(result);
  })
  .catch(function(err){
	 console.error(err);
 });

function delay(milliseconds){

	return new Promise(function(resolve){
		setTimeout(resolve, milliseconds, milliseconds);
	});
}

function countDown(milliseconds){
	if(milliseconds === 0){
		console.log("Done!")
	}else{
		console.log(milliseconds);
		return delay(milliseconds - 100);
	}	
}

delay(1000)
   .then(countDown)
   .then(countDown)
   .then(countDown)
   .then(countDown)
   .then(countDown)
   .then(countDown)
   .then(countDown)
   .then(countDown)
   .then(countDown)
   .then(countDown)
   .then(countDown);

function squarePromiseReturn(number){

	return new Promise(function(resolve, reject){
		if(typeof number === "number"){
			resolve(number * number);
		}else{
			reject("Not A Number!");
		}
	});
}

let promiseArray = [];

for(i = 0; i < 9; i++){
	promiseArray[i] = squarePromiseReturn(i + 1);
}

Promise.all(promiseArray)
  .then(function(result){
	  console.log(result);
  });

function doBadThing(forRealz){
	return new Promise(function(resolve, reject){
		if(!forRealz){
			resolve("Yay!");
		}else{
			reject("Boo!");
		}
	});
}

doBadThing(0)
  .then(function(result){
	  console.log(result);
  })
  .catch(function(err){
	  console.error(err);
  });

doBadThing("FGSFDS")
  .then(function(result){
	  console.log(result);
  })
  .catch(function(err){
	  console.error(err);
  });
