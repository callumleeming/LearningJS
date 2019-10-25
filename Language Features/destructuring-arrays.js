//Destructuring arrays

//This is our array with 3 values
//let carIds = [123, 456, 789];

//Here we declare the values we want to pull out from carIds
//Because the "[]" on the left side of the declaration, it will destructure
//let [car1, car2, car3] = carIds;

//console.log(`car1: ${car1}, car2: ${car2}, car3: ${car3}`);

//---------------------------------------------------------------------------------------

//Here we can also use the spread syntax mentioned in `rest-parameter.js`
//let carIds = [1,2,3,4,5,6,7,8,9,10];

//Same as before with the params, but instead, we don't care about the other car Ids
//just the first car, this is where we can use the rest parameter to help us
//let [car1, ...remainingCars] = carIds;

//console.log(`Car1: ${car1}, remaining cars: ${remainingCars}`);

//---------------------------------------------------------------------------------------

//Here is an example of how to skip the first value in an array when destructuring
 let carIds = [1,2,3,4,5,6,7,8,9,10];
 let [, ...remainingCars] = carIds;

 //First value is skipped!
console.log(remainingCars);
