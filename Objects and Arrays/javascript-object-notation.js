let pizzaOrder = {
    customerName: "callum",
    pizza: {
        crust: "stuffed crust",
        topping: "pepperoni",
        extras: "none"
    },
    deliveryType: "collection",
    timeOrdered: new Date().toISOString()
}

let pizzaOrderRequest = JSON.stringify(pizzaOrder);

console.log(pizzaOrderRequest);

// pizzaOrderRequest will be in this format:
// {
//     "customerName": "callum",
//     "pizza": {
//       "crust": "stuffed crust",
//       "topping": "pepperoni",
//       "extras": "none"
//     },
//     "deliveryType": "collection",
//     "timeOrdered": "2019-11-08T13:06:55.477Z"
//   }

//======================================================================
// You can also convert the payload back like so:

let pizzaData = JSON.parse(pizzaOrderRequest);

console.log(pizzaData);
// pizzaData will be
// { 
//     customerName: 'callum', 
//     pizza: {
//         crust: 'stuffed crust',
//         topping: 'pepperoni',
//         extras: 'none' 
//     }, 
//     deliveryType: 'collection', 
//     timeOrdered: '2019-11-08T13:10:17.021Z'
// }