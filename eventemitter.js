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
        //else create new key for eventType with callback as the value in an array.
        //reference to the emitter obj that also calls "on"
        
    };
    /** Calls all callbacks for a given eventType with the emitter. Calls each function as it was bound or defaults to global.
     * @params eventType [String] string representation of event type
     * @return undefined
     * */
    this.emit = function emit(eventType) {
        //Look up the eventType in emitter.listener obj
        let cbs = this.listeners[eventType];
        if (Array.isArray(cbs) && cbs.length > 0) { //checks that there is an Array at this property and is not empty
            //call each function in the array
            cbs.forEach(function (element, index, arr) { //calls occur async
                element();
            });
        }
    };
    /** Removes a callback from the callbacks array of the given eventType
     * Will only remove one of the callbacks if multiples of the same callback are present
     * @params eventType [String] string of eventType
     * @params callback [Function] reference to the function to remove
     * @return undefined. Maybe make true or false depending on success, Wrap in promise?
     * */
    
    this.removeListener = function removeListener(eventType, callback) {
        let listeners = this.listeners[eventType]; //See if eventType is in the listener property

        if (listeners) {//If so, loop through the array to see if there is a matching reference for the function passed in callback
            //If so, remove it.
            let i = 0;
            while (i < listeners.length){
                if (listeners[i] === callback) {//if matches, splice callback out, and break out of while
                    listeners.splice(i, 1);
                    break;
                    //To allow for removing all callbacks of callback reference, do not break and do not increment i before continuing the loop
                }
                else {
                    i++;
                }
            }
            //If the array for this callback is now empty, remove the eventType property from the listeners
            if (listeners.length === 0) {
                delete this.listeners[eventType];
            }
        }
        //If there are no listeners of property eventType, then finish
    };
    /** Deletes an eventType property from a listeners object
     * @params eventType [String] event type to remove
     * @return undefined
     * Extend to return true if property is own non-configurable property, else throws an error
    **/
    this.removeAllListeners = function removeAllListeners(eventType) {
        delete this.listeners[eventType];
    };
}

//the obj instance has properties that correspond to listeners and subsequent handlers


module.exports = EventEmitter;