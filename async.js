var p = Promise.resolve('Hello Promise!');
p.then(function(message) {
  console.log(message);
  return 'Hi';
});