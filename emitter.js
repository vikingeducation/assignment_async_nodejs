

   var Emitter = function() {
	this.events = {};
	this.on = function(event,listener){
		if(typeof this.events[event] !== 'object') {
			this.events[event] = [];
		};
		this.events[event].push(listener);
		console.log(this.events)
	};

	this.removeListener = function(event,listener) {
		var idx;
		if (typeof this.events[event] === 'object'){
				idx = this.events[event].indexOf(listener)
			if (idx > -1) {
				this.events[event].splice(idx,1);
			}
		}
	};
	this.emit = function(event) {
		if (typeof this.events[event] === 'object'){
		listeners = this.events[event].slice();
		length = listeners.length;
		for (i = 0; i < listeners.length; i++) {
			listeners[i].apply();
		}
		}
		
	};

	this.removeAllListeners = function(event){
		if(typeof this.events === 'object'){
			this.events[event] = [];
		}

	};


}


module.exports = Emitter

