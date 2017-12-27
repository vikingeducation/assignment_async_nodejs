const Emitter = require('./emitter');
//const Emitter = require('events');

const emitter = new Emitter();

// Event listeners
const betListener = () => console.log('Bet!');
const betListener2 = () => console.log('Bet!Bet!');
const msgListener = (msg) => console.log(msg);

emitter.on( 'bet', betListener );

emitter.on( 'bet', betListener2 );

emitter.on( 'msg', msgListener);

emitter.emit('bet');

emitter.emit('msg', 'Whats Up!');

//emitter.removeAllListeners('bet');
//emitter.emit('bet');
emitter.removeListener('msg', msgListener);

emitter.emit('msg', 'Im a message!');
