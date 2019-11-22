//Spread Syntax

//Function with 3 params for ID
function startCars(car1, car2, car3, ...restOfIds) {
    console.log(car1, car2, car3, restOfIds);
}

//Make array of car id's to pass to startCars
let carIds = [1,2,3,4,5,6,7,8,9,10]; //Same can be done for a string, example:
// let carIds = 'abc'; //Output 'a','b','c'

//'...carIds' will spread it's values for the methods params
startCars(...carIds);