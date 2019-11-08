function Vehicle(id) {
    this.vehicleId = id;
    this.start = function() {
        console.log('start: ' + this.vehicleId);
    };
}

let truck = new Vehicle(123);
console.log(truck.start()); //start: 123