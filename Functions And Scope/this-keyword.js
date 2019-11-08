//This keyword
//This refers to the object that holds the function

let p = {
    pizza: "pepperoni",
    getPizza: function() {
        return this.pizza;
    }
};

p.getPizza(); //pepperoni