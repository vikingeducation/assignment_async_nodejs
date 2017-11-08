var p =new Promise(function(resolve, reject){
  setTimeout(function(){resolve('Hello Promise!')}, 1000);
});

p.then(function(message, err){
  console.log(message);
}).catch(function(error){
  console.log(error);
});

function delay(milliseconds){

  let prom = new Promise(function(resolve, reject){
    setTimeout(function(){resolve(milliseconds)}, milliseconds);
  })

  return prom;
}

function countDown(number){
  console.log(number);
  if (number>0){
    return number-100;
  }
  else
    return number;
};

delay(1000)
  .then(countDown)
  .then(countDown)
  .then(countDown)
  .then(countDown)
  .then(countDown)
  .then(countDown)
  .then(countDown)
  .then(countDown)
  .then(countDown)
  .then(countDown);


function squarePromise(number){
  let prom = new Promise(function(resolve, reject){
    if (typeof number !=="number"){
      reject("Rejected!");
    }
    else
      resolve(number*number);
  })
  return prom;
}

num_array=[1,2,3,4,5,6,7,8,9];

num_array=num_array.map(i => {return squarePromise(i)});

Promise.all(num_array).then(function(result){
  console.log(result);
});


function doBadThing(forRealz){
  let prom = new Promise(function(resolve, reject){
    if (!forRealz){
      resolve('Yay!');
    }
    else{
      reject('Rejected!');
    }
  });
  return prom;
}

doBadThing(true).then(function(result){
  console.log(result);
}, function(reject){
  console.log("This was given a rejection handler");
})

doBadThing(0).then(function(result){
  console.log(result);
})
  .catch(error =>{
    console.log(error);
  });

