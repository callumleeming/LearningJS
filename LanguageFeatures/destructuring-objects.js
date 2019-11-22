//Destructuring objects

// let pizza = { id: 1, topping: 'pepperoni'};
// let {id, topping} = pizza;

// console.log(id, topping);

//---------------------------------------------------------------------------------------

//Here's something that won't work...

let pizza = { id: 1, topping: 'pepperoni'};
let id, topping;
// {id, topping} = pizza; //'pizza is not iterable' -- {} are also used for code blocks!

//solution: 
({id, topping} = pizza);

console.log(id, topping);

//---------------------------------------------------------------------------------------
