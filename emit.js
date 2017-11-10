class Event{
	constructor(eventType){
		this.eventType = eventType
	}
}

class Listener{
	constructor(eventType, callback){
		if(typeof callback != "function"){
			throw new TypeError("callback must be a function!");
		}else{
			this.eventType = eventType,
			this.callback = callback
		}
	}
}

class emitter {
	constructor(){
		this.listenerArray = [],
			
		this.emit = function(eventType){
			let x = new Event(eventType);
			let i = 0;
			this.listenerArray.map(function(listener){
				if(x.eventType === listener.eventType){
					listener.callback();
					i++;
				}
			if(i === 0){
				return false;
			}else{
				return true;
			}
			});
		}
		this.on = function(eventType, callback){
			try{
				this.listenerArray[this.listenerArray.length] = new Listener(eventType, callback);
				this.emit("newListener");
				return this;
			}
			catch(e){
				console.error(e.message);
			}
		}
		this.removeListener = function(eventType, callback){
			try{
				let i = 0;
				let newArray = [];
				let x = new Listener(eventType, callback);
				this.listenerArray.map(function(listener){
					if(x.eventType != listener.eventType || x.callback.toString() != listener.callback.toString()){
						newArray[i] = listener;
						i++
					}
				});
				this.listenerArray = newArray;
				this.emit('removeListener');
				return this;
			}
			catch(e){
				console.error(e.message);
			}			
		}
		this.removeAllListeners = function(eventType){
			let i = 0;
			let newArray = [];
			this.listenerArray.map(function(listener){
				if(eventType != listener.eventType){
					newArray[i] = listener;
					i++
				}
			});
			this.listenerArray = newArray;
			return this;
		}
	}
}

module.exports =  emitter;
