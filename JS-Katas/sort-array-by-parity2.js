// Expected Output: [2,4,3,1]

var sortArrayByParity = function(A) {
    let odds = [];
    let evens = [];
  
    for (let index = 0; index < A.length; index++) {
      const element = A[index];
  
      if(element % 2 != 0) {
        odds.push(element);
      } else {
        evens.push(element);
      }
    }
  
    return evens.concat(odds);
  };
  
  //OR YOU COULD USE AN APPROACH LIKE THIS, WHICH IS A BIT LESS PERFORMANT. 
  
  var sortArrayByParityII = function (A) {
    return A.sort(function (a, b) {
      return a % 2 - b % 2 || a - b;
    });
  };
  
  console.log(sortArrayByParity([3, 1, 2, 4])); //Output: [2,4,3,1]
  console.log(sortArrayByParityII([3, 1, 2, 4])); //Output: [2,4,1,3]