

var delay = function(milliseconds){
	return new Promise(function(resolve, reject){
			setTimeout(function(){
				console.log(`${milliseconds} millis left`);
				resolve(milliseconds-100);
			}, milliseconds);
		});
}

var countDown = function(result){

		return new Promise(function(resolve, reject){
			resolve(delay(result));
		})
}

/*
delay(1000)
.then(countDown)
.then(countDown)
.then(countDown)
.then(countDown)
.then(countDown)
.then(countDown)
.then(countDown)
*/

var promise_num = function(num){
	return new Promise(function(resolve, reject){
		if((typeof num == "number") == false){
			console.log('false');
			reject("Warning, one or more values was not a number");
		}
		resolve(num**2);
	})
}

var arr = [1,2,3,4,5,6,7,8,9];


var nums = arr.map(promise_num);

/*
Promise.all(nums)
.then(function(results){
	console.log(results);
})
.catch(function(err){
	console.log(err);
})
*/

var doBadThing = function(val){
	return new Promise(function(resolve, reject){

		if(val == false){
			resolve("Yay, Falsy");
		}
		else{
			reject("Nay, Truthy")
		}
	})
}

/*
doBadThing("")
.then(function(result){
	console.log(result);
})
.catch(function(err){
	console.log(err)
})
*/



