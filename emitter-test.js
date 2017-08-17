const EventEmitter = require('./emitter');
// const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

const callback = () => {
  console.log('an event occurred!');
};

eventEmitter.on('event', callback);
eventEmitter.emit('event');

eventEmitter.removeListener('event', callback);