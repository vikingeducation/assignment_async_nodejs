
class Emitter {
  constructor () {
    this.domain = null;
    this._events = {};
    this._eventsCount = 0;
    this._maxListeners = undefined;
  }

    on (eventType, callback) {
      if (this._events[eventType] !== undefined) {
          this._events[eventType] = [this._events[eventType], callback];
      } else {
          this._events[eventType] = callback;
      }
      this._eventsCount = Object.keys(this._events).length;
    }

    emit (eventType) {
        if (this._events[eventType] !== undefined && typeof this._events[eventType] === 'object') {
            this._events[eventType].forEach (function (i) {
              i();
            })
        } else {
            this._events[eventType]();
        }
    }

    removeListener(eventType, callback) {
      if (eventType in this._events) {
        if (typeof this._events[eventType] === 'object') {
          var index = this._events[eventType].indexOf(callback);
          this._events[eventType].splice(index,1);
        } else {
          delete this._events[eventType];
        }
      }
      this._eventsCount = Object.keys(this._events).length;
    }


    removeAllListeners(eventType) {
      if (eventType in this._events) {
        delete this._events[eventType];
        this._eventsCount += 1;
      }
      this._eventsCount = Object.keys(this._events).length;
    }

}





module.exports = Emitter;
