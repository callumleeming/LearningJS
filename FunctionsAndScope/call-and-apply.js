//Call and Apply

let a = {
    pizza: "pepperoni",
    getPizza: function() {
        return this.pizza;
    }
};

let aNewPizza = { pizza: "American Hot" };

a.getPizza.call(aNewPizza); //American Hot

//---------------------------------------------------------------------------

let b = {
    pizza: "pepperoni",
    getPizza: function(pizzaType) {
        return pizzaType + this.pizza;
    }
};

let bNewPizza = { pizza: "American Hot" };

b.getPizza.apply(bNewPizza, ['Pizza Type: ']); //Pizza Type: American Hot
