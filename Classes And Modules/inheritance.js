class Vehicle {
    constructor(vehicleType = "default") {
        this.vehicleType = vehicleType;
    }

    startEngine() {
        return `Starting your ${this.vehicleType}'s engine.`;
    }

    stopEngine() {
        return `Stopping your ${this.vehicleType}'s engine.`;
    }
}

class Car extends Vehicle {
    constructor() {
        super(); //Note: You must call super(); before accessing the 'this' keyword.
        this.vehicleType = 'car';
    }

    countWheels() {
        return `Your ${this.vehicleType} has 4 wheels.`
    }
}

let car = new Car();

console.log(car.startEngine()); //Output: Starting your car's engine.
console.log(car.stopEngine());  //Output: Stopping your car's engine.
console.log(car.countWheels()); //Output: Your car has 4 wheels.