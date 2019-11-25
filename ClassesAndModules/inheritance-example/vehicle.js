// if this was using a transpiler, the syntax would look like the following:
// export default class Vehicle {
    
module.exports = class Vehicle {
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
