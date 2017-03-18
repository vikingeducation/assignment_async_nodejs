function Emitter() {
  this.array = [];
  this.on = function(eventType, callback) {
    this.array.push([
      new Promise(function(result, reject) {
        result(callback);
      }),
      eventType
    ]);
  };
  this.emit = function(eventType) {
    for (var i = 0; i < this.array.length; i++) {
      if (this.array[i][1] === eventType) {
        this.array[i][0]
          .then(function(results) {
            results();
          })
          .catch(function(err) {
            console.log(err);
          });
      }
    }
  };
  this.removeListener = function(eventType, callback) {
    for (var i = this.array.length - 1; i >= 0; i--) {
      if (this.array[i][1] === eventType) {
        this.array.splice(i, 1);
        console.log("event removed " + eventType);
        break;
      }
    }
    callback();
  };
  this.removeAllListeners = function(eventArr) {
    for (var j = 0; j < eventArr.length; j++) {
      var type = eventArr[j];
      for (var i = this.array.length - 1; i >= 0; i--) {
        if (this.array[i][1] === type) {
          this.array.splice(i, 1);
          console.log("event removed " + type);
        }
      }
    }
  };
}

// var em = new Emitter();
//
// em.on("click", function() {
//   console.log("Success. The listener fired");
// });
// em.on("click", function() {
//   console.log("Success. The listener fired");
// });
// em.on("click", function() {
//   console.log("Success. The listener fired");
// });
//
// em.removeAllListeners("click");
//
// em.removeListener("click", function() {
//   console.log("finished removal");
// });
//
// em.emit("click");
//
// console.log(em.array);

module.exports = Emitter;
