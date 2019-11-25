const Vehicle = require('./vehicle.js');
//if this was using a transpiler, the syntax would look like the following:
// import { Vehicle } from "./vehicle"


//again, if this was using a transpiler, the syntax would look like the following:
// export default class Car extends Vehicle {
module.exports = class Car extends Vehicle {
    constructor() {
        super("car"); //Note: You must call super(); before accessing the 'this' keyword.
    }

    countWheels() {
        return `Your ${this.vehicleType} has 4 wheels.`
    }
}