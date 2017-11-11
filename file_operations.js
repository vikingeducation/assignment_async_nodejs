let fsp = require('./fsp.js');

fsp.readFile('./data/lorem.txt')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });

fsp.writeFile('./data/test.txt', 'Hello!')
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  })

fsp.appendFile('./data/test.txt', 'Hello again!')
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
