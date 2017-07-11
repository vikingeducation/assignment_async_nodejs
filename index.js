/*var n = Promise.resolve( function() {
  setTime
})
*/
var baz = (boop) =>{
    console.log(boop);
}

var scope = function() {
  console.log(this);
}

/*  WARMUPS */
/*
var p = new Promise( function(resolve, reject ){
  //scope.call(this);
  setTimeout( function(){
    //scope.call(this);
    resolve( "Hello Promise! ");
  })
})
p.then( function(message){
  console.log(message);
})

var square = function( number ) {
  var p = new Promise( function( resolve, reject ){
    if ( typeof( number ) === 'number' ){
      resolve( number * number )
    }else {
      reject( "Input not a number")
    }
  })
  return p;
}
var nums = [1,2,3,4,5,6,7,8,9]
var promise = nums.map( function( element, index ){
  return square( element )
})
Promise.all( promise ).then( function( result ){
  console.log( result );
})
*/
//console.log(promise)

var doBadThing = function(forRealz){
  var p = new Promise( function( resolve, reject ){
    if ( forRealz ){
      reject( "Such errorz" );
    }else{
      resolve( "Yay!");
    }
  })
  return p;
}

doBadThing( true )
  .then( function(result) {
    //throw ( "ERROR ERROR ALERT ")
    console.log("Dank FAKE TRUTH");
    console.log( result );

}, function( reason ){
  //throw ( "ERROR ERROR ALERT ")
  console.log( reason );
  //throw ( "ERROR ERROR ALERT ")

}).catch( function( result ){
  console.log("DON'T BELIEVE THE MEDIA");
  console.log( result );
})

doBadThing( null )
  .then( function(result) {
  console.log("Dank FAKE TRUTH");
  console.log( result );
  throw ( "ERROR ERROR ALERT ")
}, function( reason ){
  console.log( "Running reject handler ");
  console.log( reason );
}).catch( function( result ){
  console.log("DON'T BELIEVE THE MEDIA");
  console.log( result );
})








//
