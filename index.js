let p =  new Promise(function(resolve) {
	setTimeout( function() {
		resolve('Hello Promise!');
	}, 1000);
});



p.then(function(result) {
		console.log(result);
});

/*
function delay(milliseconds) { 
  return new Promise( function(resolve) {
    setTimeout( function() {
	  resolve(milliseconds);
	}, milliseconds);
  });
}

function countDown (milliseconds) {
	return delay(milliseconds);
}

delay(1000)
  .then( function(milliseconds) {
	console.log( milliseconds);
  })
  .then(countDown);

  function square(number) {
  	return new Promise( function(resolve, reject) {
  	if(isNaN(number) == true) {
  		reject(number);
  	} else {
  		resolve( number * number);
  	}
  });
}



let bench = [1,2,3,4,5,6,7,8,9];
bench = bench.map(function (number) {
	return square(number);
});


Promise.all(bench)
.then( function(result) {
	console.log(result)
});*/


function doBadThing(forRealz) {
	return new Promise( function(resolve, reject) {
		 if (forRealz === false) {
		 	resolve("Yay!");
		 } else {
		 	reject("Nay :(");
		 }
	});
}


doBadThing(false)
.then( function(result) {
	console.log(result);
}, function(err) {
	console.error(err);
	throw "Not bad";
})
.catch( function(err) {
	console.error(err)
});
