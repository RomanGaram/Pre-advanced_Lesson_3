function CoffeeMake() {
    this.power = false;
  }
  
  CoffeeMake.prototype.on = function() {
    this.power = true;
    console.log("Coffee maker is ON");
  };
  
  CoffeeMake.prototype.off = function() {
    this.power = false;
    console.log("Coffee maker is OFF");
  };
  
  // Похідні класи
  function DripCoffeeMaker() {
    CoffeeMake.call(this);
  }
  
  DripCoffeeMaker.prototype = Object.create(CoffeeMake.prototype);
  DripCoffeeMaker.prototype.constructor = DripCoffeeMaker;
  
  DripCoffeeMaker.prototype.brew = function() {
    if (this.power) {
      console.log("Brewing drip coffee");
    } else {
      console.log("Turn on the coffee maker first");
    }
  };
  
  function EspressoMachine() {
    CoffeeMake.call(this);
  }
  
  EspressoMachine.prototype = Object.create(CoffeeMake.prototype);
  EspressoMachine.prototype.constructor = EspressoMachine;
  
  EspressoMachine.prototype.makeEspresso = function() {
    if (this.power) {
      console.log("Making espresso");
    } else {
      console.log("Turn on the coffee maker first");
    }
  };
  
  function AutoCoffeeMaker() {
    CoffeeMake.call(this);
  }
  
  AutoCoffeeMaker.prototype = Object.create(CoffeeMake.prototype);
  AutoCoffeeMaker.prototype.constructor = AutoCoffeeMaker;
  
  AutoCoffeeMaker.prototype.makeCoffee = function() {
    if (this.power) {
      console.log("Making coffee with coffee pods");
    } else {
      console.log("Turn on the coffee maker first");
    }
  };
  
  // Приклад використання:
  
  var dripMaker = new DripCoffeeMaker();
  dripMaker.on();
  dripMaker.brew();
  dripMaker.off();
  
  var espressoMachine = new EspressoMachine();
  espressoMachine.on();
  espressoMachine.makeEspresso();
  espressoMachine.off();
  
  var podMaker = new AutoCoffeeMaker();
  podMaker.on();
  podMaker.makeCoffee();
  podMaker.off();
  