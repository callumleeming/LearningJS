//Array iteration

let pizzas = [
    { pizzaId: 321, topping: "pepperoni"},
    { pizzaId: 311, topping: "american"},
    { pizzaId: 331, topping: "margherita"},
    { pizzaId: 231, topping: "pepperoni"},
    { pizzaId: 221, topping: "pepperoni"},
];

pizzas.forEach(pizza => console.log(pizza)); //will log out data for each pizza
pizzas.forEach((pizza, index) => console.log(pizza, index)); //will log out data for each pizza with its index
let pepperoniPizzas = pizzas.filter(pizza => pizza.topping === "pepperoni");
console.log(pepperoniPizzas); 
// The above log prints:
// [ 
//   { pizzaId: 321, topping: 'pepperoni' }, 
//   { pizzaId: 231, topping: 'pepperoni' }, 
//   { pizzaId: 221, topping: 'pepperoni' }
//  ] 
