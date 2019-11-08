//Prototypes

function Pizza(topping) {
    this.pizzaTopping = topping;
}

Pizza.prototype.getTopping = function() {
    console.log(`Topping of pizza: ${this.pizzaTopping}`);
}

let pizza = new Pizza("Bacon and Pepperoni");
pizza.getTopping(); //Bacon and Pepperoni

//===============================================================

String.prototype.bar = function() {
    return this.toString() + " bar";
};

console.log("foo".bar()); //foo bar
