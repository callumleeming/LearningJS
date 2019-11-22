//Bind
//Makes a copy of a function and assigns a new context
let p = {
    pizza: "pepperoni",
    getPizza: function() {
        return this.pizza;
    }
};

let newPizza = { pizza: "American Hot" };

let newFunction = p.getPizza.bind(newPizza); 

newFunction(); //American Hot