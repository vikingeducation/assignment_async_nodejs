// var p = Promise.resolve('Hello Promise!');
// p.then(function(message) {
//   console.log(message);
//   return 'Hi';
// });
//
//
//
// function delay(ms){
// var msToWait = ms;
//    var start = new Date().getTime();
//
//    var end = start;
//    while(end < start + ms) {
//      end = new Date().getTime();
//   }
//
// var pDelay = Promise.resolve(ms);
// pDelay.then(function(ms) {
//
//    if(ms > 1){ console.log(ms); delay(ms - 100);}else{ console.log('done');}
//
//   return 'Hi';
// });
// }
// delay(1000);
// var sqrThis = 2;
//
//   var pSqr = new Promise(function(resolve, reject)
// {if (isNaN(sqrThis)){reject("It broke"); }else{ resolve(sqrThis);}
// });




// function doBadThing(forReelz)
// { return forReelz; }
//
// var realBad = new Promise(function(resolve, reject)
// {
//   if (doBadThing(false)){reject("It broke"); }else{ resolve("Yay!");}
// });
//
// realBad.then(function(result) {
//     console.log(result);
//
//   })
//   .catch(function(err) {
//     console.log("not as intended"); //=> Boom!
//   });


//
//
//
//
//
//
// var sqrThis = 2;
//
//   var pSqr = new Promise(function(resolve, reject)
// {if (isNaN(sqrThis)){reject("It broke"); }else{ resolve(sqrThis);}
// });
//
//
// pSqr.then(function(result) {
//
//   console.log(result * result + " Is Squared"); // "Stuff worked!"
// }, function(err) {
//   console.log(err); // Error: "It broke"
// });
//
//
// var sqrThis = [1,2,3,4,5,6,7,8,9];
// sqrThis = sqrThis.map(function(i) {
//   return Promise.resolve(i * i);
// });
//
// Promise.all(sqrThis)
//   .then(function(results) {
//     console.log(results); //=> [ 2, 3, 4, 5 ]
//   });
var fs = require('fsp');

var makeFile = new Promise(function(resolve, reject)
 {fs.writeFile('test.txt', 'Hello!');
 console.log("writing");
 });
 var readFile = new Promise(function(resolve, reject)
  {fs.readFile('test.txt')
 console.log("reading");

  });
  var appendFIle = new Promise(function(resolve, reject)
   {fs.appendFile('test.txt', 'Hello!');
    console.log("appending");
   });
makeFile.then(readFile.then().appendFile);
