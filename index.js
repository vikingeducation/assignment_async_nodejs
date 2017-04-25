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

const fs = require('fs');

const fsp = {
  readFile: function(filePath) {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, 'utf-8', (err, data) => {
        if(err) {
          reject(err)
        } else {
          resolve(data);
        }
      });
    });
  },

  writeFile: function(filePath, content) {
    return new Promise((resolve, reject) => {
      fs.writeFile(filePath, content, (err) => {
        if(err) {
          reject(err);
        } else {
          resolve('sweeet');
        }
      });
    });
  },

  appendFile: function(filePath, content) {
    return new Promise((resolve, reject) => {
      fs.appendFile(filePath, content, (err) => {
        if(err) {
          reject(err);
        } else {
          resolve('aaaaaaadded');
        }
      });
    });
  }
}

fsp.readFile('./data/lorem.txt')
  .then(function(data) {
    // Outputs the file data
    console.log(data);
  })
  .catch(function(err) {
    console.error(err);
  });

fsp.writeFile('./data/test.txt', 'Hello!')
  .then(function(res) {
    // Outputs the file data
    // after writing
    console.log(res);
  })
  .catch(function(err) {
    console.error(err);
  });

fsp.appendFile('./data/test.txt', 'Hello again!')
  .then(function(res) {
    // Outputs the file data
    // after appending
    console.log(res);
  })
  .catch(function(err) {
    console.error(err);
  });
