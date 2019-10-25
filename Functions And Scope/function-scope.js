//Function Scope

function hello() {
    let message = "hello!";
}

hello();

// message is within function scope so will not exist outside of that context
// console.log(message); //output: message is not defined

//------------------------------------------------------------------------------

function startCar(carId) {
    let message = "Engine starting...";
    let startFunction = function startEngine() {
        console.log(message); //output: Engine starting...
    }
    startFunction();
}

startCar();

//------------------------------------------------------------------------------

function startCar(carId) {
    let message = "Engine starting...";
    let startFunction = function startEngine() {
        let message = "Override"
    }
    startFunction();
    console.log(message); //output: Engine starting...
}

startCar();