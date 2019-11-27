/*
  Given an array of integers A sorted in non-decreasing order,
  return an array of the squares of each number,
  also in sorted non-decreasing order.
*/

let input = [-4,-1,0,3,10];

var sortedSquares = function(A) {
    let results = A.map(val => {
        return Math.pow(val, 2);
    });

    return results.sort((a,b) => a-b);
};

console.log(sortedSquares(input)); // Output: [0,1,9,16,100]