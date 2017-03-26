const Emitter = function() {

    this.listeners = {}

    this.on = (eventType, cb) => {
        if (!this.listeners.hasOwnProperty(eventType)) {
            this.listeners[eventType] = [cb]
        } else {
            this.listeners[eventType].push(cb)
        }
        return this
    }

    this.emit = (eventType) => {
        if (!this.listeners.hasOwnProperty(eventType)) {
            return false
        } else {
            for (let i = 0; i < this.listeners[eventType].length; i++) {
                this.listeners[eventType][i]()
            }
            return true
        }
    }

    this.removeListener = (eventType, cb) => {
        if (this.listeners[eventType] && this.listeners[eventType].indexOf(cb) > -1) {
            this.listeners[eventType].splice(this.listeners[eventType].indexOf(cb), 1)
        }
        return this
    }

    this.removeAllListeners = (eventType) => {
        delete this.listeners[eventType]
        return this
    }
}

module.exports = Emitter