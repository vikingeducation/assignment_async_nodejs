"use strict";

//create Emitter constructor
function Emitter(eventType, callback) {

	this.listeners = [];

	this.on = function(eventType, callback) {
		this.listeners.push({
			"eventType": eventType,
			"callback": callback
		});
	}; //this.on

	this.emit = function(event) {

		let listeners = this.listeners;
		return new Promise(function(resolve, reject) {

			let matchArray = [];
			listeners.forEach(function(item) {
				if (item.eventType === event) {
					matchArray.push(item);
				};
			});
			
			if (matchArray === []) {
				reject("Event not found!");
			} else {
				resolve(matchArray);
			}
		});
	}; //this.emit

	this.removeListener = function(event, callFunc) {
		console.log(this.listeners);
		this.listeners = this.listeners.filter(function(item) {
			// console.log("ITEM " + item.eventType);
			// console.log(event);
			// console.log(item.callback.toString());
			// console.log(callFunc.toString());
			if (item.eventType !== event) {
				if (item.callback.toString() !== callFunc.toString()) {
					return item; //YOUAREHERE - this is currently filtering out all listeners with a matching eventType, with no regard for the callback match. FIX IT!!!
				}
			}
		});
		console.log(this.listeners);
	}
}

module.exports = Emitter;