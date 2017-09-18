//
//Assignment source: http://www.vikingcodeschool.com/dashboard#/professional-development-with-javascript/building-with-async-node-js
//

////////////////////////////////////////////////////////////////////////////
//
//1.	Create a promise that resolves the message "Hello Promise!" after 1 second
//
////////////////////////////////////////////////////////////////////////////

var p = new Promise(function(resolve,reject) {
	//var delayOk = setTimeout(function() {console.log('delay ...')}, 1000);

	if (true) {
		//resolve('Hello Promise!');
		setTimeout(function() {resolve('Hello Promise!')}, 1000);
	} else {
		reject('REJECT');
	}
});

p.then(function(fromResolve) {
	console.log(fromResolve);
}).catch(function(fromReject) {
	console.log(fromReject);
});

////////////////////////////////////////////////////////////////////////////
//
//2.	Create a function with the following signature delay(milliseconds)
//
////////////////////////////////////////////////////////////////////////////

var delay = function(ms) {
	return new Promise(function(resolve,reject) {
		setTimeout(function() {resolve(ms)}, ms);
	});
};

var countDown = function(ms) {
	if (ms > 0) {
		console.log(ms);
		return delay(ms - 100);
	}
	console.log('Done!');
};

delay(1000)
  .then(countDown) //=> 1000
  .then(countDown) //=> 900
  .then(countDown) //=> 800
  .then(countDown) //=> 700
  .then(countDown) //=> 600
  .then(countDown) //=> 500
  .then(countDown) //=> 400
  .then(countDown) //=> 300
  .then(countDown) //=> 200
  .then(countDown) //=> 100
  .then(countDown); //=> Done!

////////////////////////////////////////////////////////////////////////////
//
//3. Create a function that accepts a number and returns a promise that resolves that number squared
//    * The promise should reject if it is not passed a number
//    * Now map an array of integers 1 to 9 to an array of promises using the function above
//    * Use Promise.all to get the result of all of the promises in the array
//
////////////////////////////////////////////////////////////////////////////

var square = function(num) {
	return new Promise(function(resolve,reject) {
		if (isNumeric(num)) {
			//resolve(Math.pow(num,2));
			resolve(num * num);
		} else {
			reject(NaN);
		};
	});
};

function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

/*
//test square function
square('12').then(function(fromResolve) {
	console.log(fromResolve);
}).catch(function(fromReject) {
	console.log(fromReject);
});
*/

var myArray = [1,2,3,4,5,6,7,8,9];

var mySquares = myArray.map(function(el) {
	return square(el);
});

//Promise.all
Promise.all(mySquares).then(function(fromResolve){
	console.log(fromResolve);
}).catch(function(fromReject) {
	console.log(fromReject);
});

////////////////////////////////////////////////////////////////////////////
//
// 4.	Create a function with this signature doBadThing(forRealz)
//
////////////////////////////////////////////////////////////////////////////

var doBadThing = function (forRealz) {
	return new Promise(function(resolve,reject) {
		if (isFalsy(forRealz)) {
			resolve('Yay! (actually falsy)');
		} else {
			reject('Boo ... (actually truthy)');
		};
	});
};

function isFalsy(i) {
	if ((i === false) || (i === null) || (i === undefined) || (i === NaN) || (i === 0) || (i === "")) {
		return true;
	} else {
		return false;
	};
};

doBadThing(false).then(function(fromResolve) {
	console.log('1) doBadThing: ' + fromResolve);
}).catch(function(fromReject) {
	console.log('1) doBadThing: ' + fromReject);
});

doBadThing(true).then(function(fromResolve) {
	console.log('2) doBadThing: ' + fromResolve);
}).catch(function(fromReject) {
	console.log('2) doBadThing: ' + fromReject);
});

/*
doBadThing(true).then(function(fromResolve) {
	console.log('3) doBadThing: ' + fromResolve);
}).then(function(fromReject) {
	console.log('3) doBadThing: ' + fromReject);
});
Result from (3) above is the following: 
(node:15148) UnhandledPromiseRejectionWarning: Unhandled promise rejection (reje
ction id: 3): Boo ... (actually truthy)
(node:15148) [DEP0018] DeprecationWarning: Unhandled promise rejections are depr
ecated. In the future, promise rejections that are not handled will terminate th
e Node.js process with a non-zero exit code.
*/

doBadThing(false).then(function(fromResolve) {
	console.log('4) doBadThing: ' + fromResolve);
	throw new Error("Thrown from .then and expect to be caught in .catch");
}).catch(function(fromReject) {
	console.log('4) doBadThing: ' + fromReject);
});
/*
Result from (4) above is that it goes to both the .then clause, and the .catch clause
*/
