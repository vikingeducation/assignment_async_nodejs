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
				resolve(matchArray[0]);
			}
		});
	};

	// this.emit = function(event) {
	// 	let matchArray = [];
	// 	this.listeners.forEach(function(item) {
	// 		if (item.eventType === event) {
	// 			matchArray.push(item.callback);
	// 		};
	// 	});

	// 	if (matchArray === []) {
	// 		throw new Error("Event not found!");
	// 	} else {
	// 		console.log(matchArray[0]);
	// 		return matchArray[0];
	// 	}
	// }; //this.emit
}

module.exports = Emitter;