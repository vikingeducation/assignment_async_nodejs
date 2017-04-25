const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello World');
  }, 1000);
})

const delay = (duration) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(duration);

      resolve(duration);
    }, duration);
  });
}

const countDown = (duration) => {
  const count = duration - 100;

  if(count > 0) {
    return delay(count);
  } else {
    return console.log('Done!');
  }
}

const square = (number) => {
  return new Promise((resolve, reject) => {
    if(Number(number)) {
      resolve(number * number);
    } else {
      reject(new Error('oops'));
    }
  });
}

const doBadThings = forRealz => {
  return new Promise((resolve, reject) => {
    if(forRealz) {
      reject(new Error);
    } else {
      resolve('YAY');
    }
  });
}

doBadThings(false).then(value => { throw Error }).catch(error => console.log('test'));
