function Emitter(){
  this.confirmation = function(){
    console.log("this totally works");
  };
  this.newListener = function(){};
  this.removeListener = function(){};
};

module.exports = Emitter;