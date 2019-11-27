/*Students are asked to stand in non-decreasing order of heights for an annual photo.
Return the minimum number of students not standing in the right positions.
(This is the number of students that must move in order for all students 
to be standing in non-decreasing order of height.)*/

let heights = [10,6,6,10,10,9,8,8,3,3,8,2,1,5,1,9,5,2,7,4,7,7];

var heightChecker = function(heights) {
  let sortedHeights = sort(heights.slice(0));
  let wrongHeights = [];

  for(let i = 0; i <= heights.length - 1; i++) {    
    if(sortedHeights[i] != heights[i]) {
      wrongHeights.push(heights[i]);
    };
  }

  return wrongHeights.length;
};

function sort(arr) {
  return arr.sort((a,b) => a-b);
}

console.log(heightChecker(heights));