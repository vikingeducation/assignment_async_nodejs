function my_emitter() {
  this.EventListenerArray = [];
  //Function: on(eventType, callback)
  this.on = function(eventType, callback){
    // console.log("Type of event " + typeof eventType);
    // console.log("Type of callback " + typeof callback);
    //Creating an array with key-value pairs as each element
    this.EventListenerArray.push(
                                  {
                                    eventName : eventType, // key - accessed by EventListenerArray.eventName
                                    listenerName : callback // value - accessed by EventListenerArray.listenerName
                                  }
                                );
  };
  //Function: emit(eventType)
  this.emit = function(eventType, options){
    //console.log(options);
    console.log("Beginning to fire listeners for "+eventType+ " :");
    for(var i=0; i<this.EventListenerArray.length; i++){
      if(this.EventListenerArray[i].eventName === eventType){
        this.EventListenerArray[i].listenerName(options);
      }
    }
    console.log("Done firing listeners for "+eventType+ ".");
  };

  //Function: removeListener(eventType, callback)
  this.removeListener = function(eventType, callback){
    // console.log("Inside removeListener function");
    // console.log("Length of EventListenerArray before the removal "+ this.EventListenerArray.length);
    var i = this.EventListenerArray.length;
    while(i--){
      if(this.EventListenerArray[i].eventName === eventType && this.EventListenerArray[i].listenerName === callback){
        this.EventListenerArray.splice(i,1);
      }
    }
    // console.log("Length of EventListenerArray after the removal "+ this.EventListenerArray.length);
    // console.log(this.EventListenerArray);
  };

  //Function: removeAllListeners(eventType)
  this.removeAllListeners = function(eventType){
    console.log("Inside removeAllListeners function");
    console.log("Length of EventListenerArray before the removal "+ this.EventListenerArray.length);
    console.log("Item to be removed " + eventType);
    var i = this.EventListenerArray.length;
    while(i--){
      if(this.EventListenerArray[i].eventName === eventType){
        this.EventListenerArray.splice(i,1);
      }
    }
    console.log("Length of EventListenerArray after the removal "+ this.EventListenerArray.length);
    // console.log(this.EventListenerArray);
  };
}

module.exports = my_emitter;
