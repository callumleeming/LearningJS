//Rest Parameters
//One parameter to catch all values into an array
function sendCars(...allCarIds) {
    allCarIds.forEach(carId => console.log(carId));
}

// sendCars(1,2,3,4,5,6,7,8,9,10,11,12); //12 params - Logs 1-12 to the console
// sendCars(1,2,3); //3 params - Logs 1-3 to the console

//You can also use normal parameters, just always specify the rest param last
function sendCarAndDay(day, ...allCarIds) {
    console.log(day);
    allCarIds.forEach(carId => console.log(carId))
}

//for example, the rest parameter is always last
sendCarAndDay('Friday', 1,2,3,4,5);