//test

//findIndex

var a = [1, 2, 3, 11];
a.forEach( function( element, index, arr ) {
  if ( element % 2 != 0 ){
    a.splice( index, 1);
  }
})
a.forEach( function( element, index, arr ) {if ( element % 2 != 0 ){a.splice( index, 1);}})
console.log(a);
var arr = [
  [1,2],
  ["a", "b"],
  [3,3]
]
debugger;
//console.log( typeof( arr ) );
//console.log( typeof( a ) );
//console.log( arr.includes( ["a", "b"] ) );
//console.log( arr.findIndex( ["a", "b"] ) );
//console.log( arr.splice
/*
a.includes(2); // true
a.includes(4); // false
array.splice(start)
array.splice(start, deleteCount)
array.splice(start, deleteCount, item1, item2, ...)
*/



/*
var keep_the_light_on = new Promise( resolve, reject) {
  setTimeout( function( resolve, reject){

  }, 1000, resolve, reject )
}
var s = 1
var a = 2
setTimeout( function( resolve, rejec ){

}, 1000, resolve, reject )
*/
