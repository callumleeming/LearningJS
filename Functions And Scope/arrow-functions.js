//Arrow Functions

let getNumber = () => 231654987;
console.log(getNumber()); //231654987

let addNumbers = (a, b) => a+b;
console.log(addNumbers(5, 5)); //10

let getId = (prefix, suffix) => {
    return prefix + 342 + suffix;
};
console.log(getId("ID: ", "!!!")); //ID: 342!!!

let getNum = _ => 123;
console.log(getNum()); //123


