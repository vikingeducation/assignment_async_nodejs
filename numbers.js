let numbers = function(number){
	return new Promise(function(resolve, reject){
		if(typeof number !== "number"){
			reject("not a number")
		} else {
			resolve(number * number)
		}
	})	
}
let numArray = [2,56,67,8,90,88]

let mapped = numArray.map(numbers)

Promise.all(mapped).then(function(results){
	console.log(results)
})

numbers(3)