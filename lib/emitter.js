
// should properly have some value checks/error checks

function emitter() {
  this.eventArray = [];

  // add a function ON that takes a type and a callback function
  // store those as an ojbect in an array
  this.on = function(eventType, callback){
    this.eventArray.push({'eventVal': eventType, 'callbackVal': callback});
  };


  // add a function EMIT that takes a type and searches array for
  // all objects with those types resolving the callbacks
  this.emit = function(eventType){
    for (var i=0, iLen = this.eventArray.length; i < iLen; i++) {
      if (this.eventArray[i].eventVal === eventType) {
        (this.eventArray[i].callbackVal)();
      }
    }
  };

  // add a function REMOVELISTERNER to delete a specific combo of
  // type and callack signature
  this.removeListener = function(eventType, callback){
    for (var i=0, iLen = this.eventArray.length; i < iLen; i++) {
      if (this.eventArray[i].eventVal === eventType && this.eventArray[i].callbackVal.toString() === callback.toString()) {
        this.eventArray.splice(i,1);
        i--; //need to keep indexes on track with the removal so we don't miss checking the next item which is now the current index
        iLen--; //array just got shorter
      }
    }
  };


  // add a function REMOVEALLLISTERS to clear the array of all of that type
  this.removeAllListeners = function(eventType) {
    for (var i=0, iLen = this.eventArray.length; i < iLen; i++) {
      if (this.eventArray[i].eventVal === eventType) {
        this.eventArray.splice(i,1);
        i--; //need to keep indexes on track with the removal so we don't miss checking the next item which is now the current index
        iLen--; //array just got shorter
      }
    }
  };
}

module.exports = emitter;
