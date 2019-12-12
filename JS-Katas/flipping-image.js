// Output: [[1,0,0],[0,1,0],[1,1,1]]
// Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
// Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]

var flipAndInvertImage = function (A) {
    return A.map(number => {
      return number.map(x => {
        if (x == 1) {
          return x = 0;
        } else {
          return x = 1;
        }
      }).reverse();
    })
  };
  
  console.log(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]])); //[[1,0,0],[0,1,0],[1,1,1]]
  