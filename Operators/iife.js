//IIFE's
//Immediately Invoked Function Expression

//-----------------------------------------------------------------------------------------------
//Example One - This is a formal function declaration that is invoked by an RHS reference explicitly 
function something() {
    console.log("function called"); //output: function called
}

//Example Two - This is a immediately invoked function expression which is a common pattern in js to
//encapsulate code in order to prevent it leaking into the global execution context
something();

(function() {
    console.log("IIFE Function Called"); //output: IIFE Function Called
})();
//-----------------------------------------------------------------------------------------------

let car = (function() {
    let carId = 987;
    let carMake = 'Audi';
    let carModel = 'RS4';
    let carYear = '2019'

    return {
        carId,
        carMake,
        carModel,
        carYear
    }
})();

console.log(car); //output: "{ carId: 987, carMake: 'Audi', carModel: 'RS4', carYear: '2019' }"
