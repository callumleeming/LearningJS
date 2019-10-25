// Unary Operators

// ++var1 ==> Incremented before its expression
// var1++ ==> Incremented after its expression
// --var1 ==> Decremented before its expression
// var1-- ==> Decremented after its expression
// +var1  ==> Can convert string into numeric type
// -var1  ==> Changes the sign (using this would make -5 turn into 5)

let number1 = 1234;
console.log(++number1); //output: 1235

let number2 = 1234;
console.log(number2++); //output: 1234
console.log(number2); //output: 1235

let number = 1234;
console.log(--number); //output: 1233

let number3 = 1234;
console.log(number3--); //output: 1234
console.log(number3); //output: 1233

let number4 = '1234';
console.log(+number4); //output: 1234
console.log(typeof(+number4)); //output: number

let number5 = -1234;
console.log(-number5); //output: 1234