//Inputs
let Jewel = "aA", Stone = "aAAbbbb";

//Results
console.log(numJewelsInStones(Jewel, Stone)); //Result: 3

//Using reduce and filter
function numJewelsInStones(J, S) {
  return J.split("").reduce((map, char) => {
    const occurences = S.split("").filter(c => c === char);
    console.log(occurences);
    
    return map += occurences.length
  }, 0);
};


