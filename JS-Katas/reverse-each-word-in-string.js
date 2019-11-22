var wordToReverse = "I am a Junior Software Engineer";
var words = wordToReverse.split(" ");

let result = words.map(word => word.split('').reverse().join("")).join(" ");

console.log(result);
