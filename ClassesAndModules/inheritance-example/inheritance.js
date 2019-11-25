const Car = require('./car.js');
//if this was using a transpiler, the syntax would look like the following:
// import { Car } from "./car"

let car = new Car();

console.log(car.startEngine()); //Output: Starting your car's engine.
console.log(car.stopEngine());  //Output: Stopping your car's engine.
console.log(car.countWheels()); //Output: Your car has 4 wheels.

