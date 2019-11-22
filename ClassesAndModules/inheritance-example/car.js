const Vehicle = require('./vehicle.js');

module.exports = class Car extends Vehicle {
    constructor() {
        super("car"); //Note: You must call super(); before accessing the 'this' keyword.
    }

    countWheels() {
        return `Your ${this.vehicleType} has 4 wheels.`
    }
}