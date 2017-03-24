var p = new Promise(function(resolve, reject) {
		resolve("Hello Promise!");
});

p.then(function(result) {
	setTimeout(function() {
		console.log(result);
	}, 1000);
}).catch(function(err) {
	console.error(err);
}); 


//================


function delay(milliseconds) {
	return new Promise(function(resolve, reject) {
		console.log("resolving", milliseconds);
		setTimeout(function() {
			resolve(milliseconds);
		}, milliseconds);
	});
}

function countDown(milliseconds) {
	console.log(milliseconds)
	return delay(milliseconds - 100);
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
	.then(countDown);

//==================


function square(num) {
	return new Promise(function(resolve, reject) {
		if(!(isNaN(num))) {
			resolve(num * num);
		} else {
			reject("Not a number");
		}
	});
}

square(9)
	.then(function(result){
		console.log(result);
	}, function(err){
		console.log(err);
	});

myArr = [1,2,3,4,5,6,7,8,9].map(function(num){
	return square(num);
});


Promise.all(myArr)
	.then(function(result) {
		console.log(result);
// 	})


//==================


function doBadThing(forRealz) {
	return new Promise(function(resolve, reject) {
		if(forRealz != true) {
			resolve("Yay!");
		} else {
			reject("True! Noooo!");
		}
	});
	
}

doBadThing(1)
	.then(function(result) {
		console.log(result);
	})
	.catch(function(err) {
		console.error(err);
	});









