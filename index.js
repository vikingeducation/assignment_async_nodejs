
let myFunc =  function( result ) {
		console.log( result );
}
let count = 1000
let prom = new Promise( function( resolve, reject ){
	setTimeout(function(){
		resolve( "Hello Promise!" )
	}, 1000);
});

prom.then(myFunc) 

function delay(milliseconds){
	return new Promise( function(resolve, reject){
		setTimeout(function(){
			resolve( milliseconds )
		}, 1000);
	})
}
function countdown(){
	return delay(count).then(function(){
		if(count >= 100){
			console.log(count)
			count -=100
		} else{
			console.log("Done!")
		} 

	})
}



delay( 1000 )
	.then( countdown )
	.then( countdown )	
	.then( countdown )
	.then( countdown )
	.then( countdown )
	.then( countdown )
	.then( countdown )
	.then( countdown )
	.then( countdown )
	.then( countdown )
	.then( countdown )


/*
	(function(){
		console.log( "done" );
		console.log( "now What" );
	})();
*/

