
var fsp = require(`../modules/promise_fs`);

fsp
  .readFile(`dummy.txt`)
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.error(err);
  });

fsp
  .writeFile(`dummy.txt`, `Hello!`)
  .then(function(res) {
    console.log(res);
  })
  .catch(function(err) {
    console.error(err);
  });

fsp
  .appendFile(`dummy.txt`, `Hello again!`)
  .then(function(res) {
    console.log(res);
  })
  .catch(function(err) {
    console.error(err);
  });
