/*
var p= Promise.resolve("Hello Promise!")

p.then(function(message){
 setTimeout(function(){
  // 1 second delay
  console.log(message); //=> Hello Promise!
},1000)})



function delay(milliseconds){
	return new Promise(function(resolve, reject) {
	setTimeout(function(){
  console.log(milliseconds);
  resolve(milliseconds);
},milliseconds)
  
});
}

function countDown(results){
	if (results>0){
		results-=100;
		return delay(results)
	}else{
	console.log("Done!");
	};
}

delay(1000)
  .then(countDown) //=> 1000
  .then(countDown) //=> 900
  .then(countDown) //=> 800
  .then(countDown) //=> 700
  .then(countDown) //=> 600
  .then(countDown) //=> 500
  .then(countDown) //=> 400
  .then(countDown) //=> 300
  .then(countDown) //=> 200
  .then(countDown) //=> 100
  .then(countDown); //=> Done!




 function square(number){
 	return new Promise(function(resolve, reject) {
		if(isNaN(number)){
			reject();
		}else{
			resolve(Math.pow(number, 2));
		}
	})
}

testArray=[1,2,3,4,5,6,7,8,9];

var testArrayPromises= testArray.map(function(i){
	return square(i);
})


Promise.all(testArrayPromises).then(
	function(results){
		console.log(results);
	});
*/

function doBadThing(forRealz){
	return new Promise(function(resolve, reject) {
		if(forRealz){
			reject("Boo!");
		}else{
			resolve("Yay!");
		}
	})
}

function report(results){
	console.log(results);
}

function error(err){
	console.log(err + " You have an error!");
}

doBadThing(true)
	.then(report)
	.catch(error);

