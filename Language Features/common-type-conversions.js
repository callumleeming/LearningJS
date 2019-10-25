//Common Type Conversions

let a = 5;
console.log(typeof(a.toString())); //type: string value: '5'
console.log(typeof(Number.parseInt("1999"))); //type: number value: 1999
console.log(typeof(Number.parseFloat("10.03"))); //type: number value: 10.03
console.log(typeof(Number.parseInt('55hello'))); //type: number value: 55
console.log(typeof(Number.parseInt('5a5hello'))); //type: number value: 5
console.log(typeof(Number.parseInt('a5hello'))); //type: number value: NaN