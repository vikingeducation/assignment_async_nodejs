

//1)

const p = new Promise (
  (res, rej) => {
    setTimeout( () => {
      res("Hello Promise!");
    }, 1000)
  }
);

p.then((x) => {
  console.log(x);
  }
);

//2)

const delay = (ms) => {
  return new Promise (
    (res, rej) => {
      setTimeout( () => {
        res(ms);
      }, ms);
    });
}

const countDown = (ms) => {
  if (ms>0) {
    console.log(ms);
    return delay(ms-100);
  } else {
    console.log("Done!");
  }; 
}

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
  .then(countDown)
  .then(countDown);

//3)
  
const sqr = n => {
  return new Promise (
    (res, rej) => {
      if (isNaN(n)) {
        rej(new Error("Input was not a number"));
      } else {
        res(n*n);
      };
    });
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
arrs = arr.map(sqr);
Promise.all(arrs).then(x => {
  console.log(x);
});


//4)


const doBadThing = forRealz => {
  return new Promise (
    (resolve, reject) => {
      if (!forRealz) {
        resolve("Yay!");
      } else {
        reject(new Error("forRealz, um, was."));
      }
    }
  )
};

doBadThing(0)
  .then(x => {console.log(x)})
  .catch(x => {console.error(x)});

doBadThing(0)
  .then(x => {
    if (typeof x == 'string') {
      console.log(x);
    } else {
      console.error(x);
    };
  });

doBadThing(0)
  .then(x => {
    console.log(x); 
    throw "Despite resolution, here's an error of some sort";
  })
  .catch(x => {console.error(x)});




