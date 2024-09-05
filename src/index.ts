//@ts-check

class Vehicle {
    status : 'stopped' | 'started' = 'stopped';
    public make;
    public model;
    public wheels ;  //declared as public means it can be accsesed outside of the class: subclassses can access it also
  
    constructor(make: string, model: string, wheels: number) {
      this.make = make;
      this.model = model;
      this.wheels = wheels;
    }
    start() {
      this.status = "started";
    }
    stop() {
      this.status = "stopped";
    }
  }
  
  class Car extends Vehicle {
    constructor(make: string, model: string) {
      super(make, model, 4);
    }
  }
  
  class MotorCycle extends Vehicle {
    constructor(make: string, model: string) {
      super(make, model, 2);
    }
  }
  
  function printStatus(vehicle: Vehicle) {
    if (vehicle.status === "started") {
      console.log("The vehicle is running.");
    } else {
      console.log("The vehicle is stopped.");
    }
  }
  
  const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
  myHarley.start();
  printStatus(myHarley);
  console.log(myHarley.make.toUpperCase());
  
  const myBuick = new Car("Buick", "Regal");
  myBuick.wheels = (myBuick.wheels) - 1;
  console.log(myBuick.wheels);
  console.log(myBuick.model);
  

  //part 3//  Create a generic class/// NCycle


class NCycle  <T> {
  status : 'stopped' | 'started' = 'stopped';
  public make;
  public model;
  public wheels ;  //declared as public means it can be accsesed outside of the class: subclassses can access it also

  constructor(make: T | T[], model: T | T[], wheels: number) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }
  start() {
    this.status = "started";
  }
  stop() {
    this.status = "stopped";
  }
  print(index: number = 0): void{
if( Array.isArray(this.make)) && Array.isArray(this.model) {
  if(this.make[index] && this.model[index]){
    console.log(`This NCycle has a ${this.make} ${this.model} at ${index}`)
  }
  else{
    console.log(`This is a ${this.make} ${this.model} NCycle`)
  }
}
  }


//const test =  new NCycle < string[]>()
class Car extends Vehicle {
  constructor(make: string, model: string) {
    super(make, model, 4);
  }
}

class MotorCycle extends Vehicle {
  constructor(make: string, model: string) {
    super(make, model, 2);
  }
}

function printStatus(vehicle: Vehicle) {
  if (vehicle.status === "started") {
    console.log("The vehicle is running.");
  } else {
    console.log("The vehicle is stopped.");
  }
}
