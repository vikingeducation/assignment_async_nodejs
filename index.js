//Emitter exercise


var Emitter = require('./emitter')
var emitter = new Emitter();

//my test functions
var dank = function(){
  console.log("DANK MEMEZ")
}
var click_handler = function() {
  console.log("YOU CLICKED THINGS")
}
var unique_handler = function() {
  console.log( "one is the loniest #");
}
/*  REQUIREMENTS
Attach an event listener with emitter.on(eventType, callback)

Attach subsequent listeners with emitter.on

Emit an event with emitter.emit(eventType)

This should result in all listeners attached to that event being invoked


Remove a listener with emitter.removeListener(eventType, callback)

Remove all listeners on an event with emitter.removeAllListeners(eventType)

*/


//Attach an event listener with emitter.on(eventType, callback)
emitter.on( 'a', dank );

//Attach subsequent listeners with emitter.on
emitter.on("click", click_handler );
emitter.on("click", unique_handler );

//Emit an event with emitter.emit(eventType)
  //This should result in all listeners attached to that event being invoked
emitter.emit( "click" );

//Remove a listener with emitter.removeListener(eventType, callback)
emitter.removeListener( "click", unique_handler );


emitter.emit( "click" );
emitter.emit('a');
emitter.on("click", click_handler );

//Remove all listeners on an event with emitter.removeAllListeners(eventType)
//does it spazz out when it's run with and eventType that's not registered?
  //no
emitter.removeAllListeners( 'mouse' );
//does it remove all listeners with "click"?
  //yes
emitter.removeAllListeners( 'click' );
