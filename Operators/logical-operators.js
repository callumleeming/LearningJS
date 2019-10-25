//Logical / Boolean Operators

//Check this out for reference:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

//'&&' evaluated before '||'
//'()' conditions in parenthesis have the highest presedence

let userCookies = null;
let defaultCookies = { device: "ad4b63ac-bf88-40dd-b851-87dee80625a9" }

console.log(userCookies || defaultCookies); //output: "{ device: "ad4b63ac-bf88-40dd-b851-87dee80625a9" }"
console.log(userCookies && defaultCookies); //output: null

//-------------------------------------------------------------------------------------------------------------------

let userCookies1 = { device: "52e262e9-e037-4f81-828b-f759438f0f37" };
let defaultCookies1 = { device: "ad4b63ac-bf88-40dd-b851-87dee80625a9" };

console.log(userCookies1 || defaultCookies1); //output: "{ device: "52e262e9-e037-4f81-828b-f759438f0f37" }"
console.log(userCookies1 && defaultCookies1); //output: "{ device: "ad4b63ac-bf88-40dd-b851-87dee80625a9" }"