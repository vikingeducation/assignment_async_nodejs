//Emitter module

function Emitter(){
  this.say_hello = function(){
    console.log("DANK MEMEZ");
  }

  //keep a list of listeners
    //confusing naming on my part but
    //a listener obj is  { event: "", callback: function }
  this.listeners = [ ];

  //when passed an event run relevant listeners
  this.emit = function( eventType ){
    var event_listeners = this.find_listeners( eventType );

    event_listeners.forEach( function( element ) {
      element['callback']();
    });
  }

  //add listeners to the list
  this.on = function( event, callback ){
    var listener = {
      "event": event,
      "callback": callback
    }
    this.listeners.push( listener );
  }

  //remove a listener from the list
  this.removeListener = function (eventType, callback){

    this.listeners = this.listeners.filter( function( element, index, arr ){
      if ( element['event'] === eventType  && element['callback'] === callback ){
        //don't return this listener
      }else{
        return element;
      }
    })
  }

  //remove all listeners from the list
  this.removeAllListeners = function( eventType ){

    this.listeners = this.listeners.filter( function( element, index, arr ){
      if ( element['event'] !== eventType ){
        return element;
      }
    })
  }

  //search for listeners with an eventType
  this.find_listeners = function( eventType ) {

    //find the listeners with event == eventType
    var listeners = this.listeners.filter( function( element, index ){
      if ( element['event'] === this.eventType ){
        return element;
      }
      return;
    }, { 'eventType': eventType } )
    return listeners;
  }

}



//console.log( new s() )
//console.log( new s().say_hello() )
//console.log( new b() )
//console.log( new b().say_hello() )

module.exports = Emitter;

/*  REQUIREMENTS
Attach an event listener with emitter.on(eventType, callback)

Attach subsequent listeners with emitter.on

Emit an event with emitter.emit(eventType)

This should result in all listeners attached to that event being invoked


Remove a listener with emitter.removeListener(eventType, callback)

Remove all listeners on an event with emitter.removeAllListeners(eventType)

*/
