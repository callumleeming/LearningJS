//Inputs
let Jewel = "aA", Stone = "aAAbbbb";

//Results
console.log(numJewelsInStones(Jewel, Stone)); //Result: 3
console.log(jewels(Jewel, Stone)); //Result: 3

//Using reduce and filter
function numJewelsInStones(J, S) {
  return J.split("").reduce((map, char) => {
    const occurences = S.split("").filter(c => c === char);
    console.log(occurences);
    
    return map += occurences.length
  }, 0);
};

//Using a lookup 
function jewels(a, b) {
  const bMap = b.split("").reduce((map, char) => {
    if (!map[char]) {
      map[char] = 1;
    } else {
      map[char] += 1;
    }
    return map;
  }, {});
  return a.split("").reduce(function countOccurences(result, char) {
    return result += (bMap[char] || 0);
  }, 0);
}
