"use strict";

function EventEmitter() {
    this.listeners = {};
    
    /** Adds a callback for a given eventType to the emitter obj
     * Will add multiples of a callback for a eventType if invoked. No unique callback identifier.
     * @params eventType [String] string of event type
     * @params callback [Function] the callback function for the event. 
     * Be aware that anonymous callbacks will be unable to be specifically removed by the removeListener function
     * @return undefined
     * */
    
    this.on = function on(eventType, callback) {
        //check listeners obj for eventType
        if (this.listeners[eventType]) { //Does removing a listener that becomes an empty array delete the property?
            this.listeners[eventType].push(callback);
        }
        else {
            this.listeners[eventType] = [callback];
        }
        //if already a key, push callback onto the array
        //else create new key for eventType with callBack as the value in an array.
        //reference to the emitter obj that also calls "on"
        
    };
    /** Calls all callbacks for a given eventType with the emitter. Calls each function as it was bound or defaults to global.
     * @params eventType [String] string representation of event type
     * @return undefined
     * */
    this.emit = function emit(eventType) {
        //Look up the eventType in emitter.listener obj
        let cbs = this.listeners[eventType];
        if (cbs) {
            //call each function in the array
            cbs.forEach(function (element, index, arr) { //calls occur async
                element();
            });
        }
    };
    this.removeListener = function removeListener(eventType, callback) {
        
    };
    this.removeAllListeners = function removeAllListeners(eventType) {
        
    };
}

//the obj instance has properties that correspond to listeners and subsequent handlers


module.exports = EventEmitter;