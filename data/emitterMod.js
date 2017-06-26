"use strict";
function Emitter(){

	this.listeners = {}

	this.on = function(eventType, callback){
		if(this.listeners.hasOwnProperty(eventType)){
			this.listeners[eventType].push(callback);
		}else{
			this.listeners[eventType] = [callback];
		}
		return this;
	}

	this.emit = function(eventType){
		if(this.listeners[eventType]){
			this.listeners[eventType].forEach(function(func){
				func();
			});
		};

	}

	this.removeListener= function(eventType, callback){
		if(this.listeners.hasOwnProperty(eventType)){
			var index = this.listeners[eventType].indexOf(callback);
			this.listeners[eventType].splice(index, 1);
		}
	}

	this.removeAllListeners= function(eventType){
		delete this.listeners[eventType];
	}
}

module.exports = Emitter;