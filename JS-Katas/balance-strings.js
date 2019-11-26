let s = "RLRRLLRLRL"
// Expected Output: 4

var balancedStringSplit = function(s) {
    let splitString = s.split("");
    let lCount = 0, rCount = 0, balanceCount = 0;

    for (let index = 0; index < splitString.length; index++) {
      if(splitString[index] == "L") {
        lCount++;
      }
      
      if(splitString[index] == "R") {
        rCount++;
      }

      if(rCount == lCount) {
        balanceCount++;
      }
    }

    return balanceCount;
};

console.log(balancedStringSplit(s)); //4