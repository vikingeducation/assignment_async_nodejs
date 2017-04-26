const Emitter = require('events');
const emitter = new Emitter;

const listener = emitter.on('foo', () => console.log('foo'))
const callbackA = a => console.log(a);

listener.on('click', (apple, car) => {
  console.log(apple);
  console.log(car);
}).on('click', (tons) => console.log(tons))

listener.on('book', callbackA)

console.log(emitter);

emitter.emit('click', 'apple', 'car');

emitter.removeListener('book', callbackA);

console.log(emitter);

emitter.removeAllListeners('click');

console.log(emitter);
