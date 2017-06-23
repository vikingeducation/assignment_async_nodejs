var p = Promise.resolve('Hello Promise!');
p.then(function(message) {
  console.log(message);
  return 'Hi';
});

var pDelay = Promise.resolve(1000);

function delay(ms){

   var start = new Date().getTime();
   console.log(start);
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
console.log(end);
pDelay.then(function(ms) {
  console.log(ms);
  return 'Hi';
});
}
delay(1111);
