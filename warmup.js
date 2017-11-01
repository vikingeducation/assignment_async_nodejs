var mes = new Promise(function(resolve,reject) {
var del = setTimeout(function(){
resolve('Hello Promise!');}, 1000);
});


mes.then(function(message){
console.log(message);

});

var delay = function(milliseconds){
	 return new Promise(function(resolve,reject){
	 	setTimeout(function(){
	 	resolve(milliseconds);}, milliseconds)
})
	};

var countDown = function(msg){
if (msg === 0) {
	return "Done!"
}
console.log(msg)
msg -=100
return delay(msg)

};


var squares = function(num){
var nums = num*num
return new Promise(function(resolve,reject){
	if (num >= 0) {
	resolve(num*num) } else {
	reject("empty") }

})

}
squares().then(function(result){
 console.log(result)}).catch(function(err){console.error(err)

 })



var numb = [1,2,3,4,5,6,7,8,9]

var numb = numb.map(function(i){

return squares(i);
});

Promise.all(numb).then(function(results){
	console.log(results)

})

var doBadThing = function(forRealz){
	return new Promise(function(resolve,reject){
if (forRealz){
	reject("Errors")
} else {
	resolve("Yay!")
}
})
}

doBadThing().then(function(result){console.log(result)}).catch(function(err){throw "error!"})
