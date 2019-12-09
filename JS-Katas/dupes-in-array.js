var findDuplicates = function(nums) {
    return Object.values(nums.reduce((acc, val, index) => {
      if(!acc[val] && (nums.lastIndexOf(val) != index)) {
        acc[val] = val;
      }
  
      return acc;
    }, {}));
  };
  
  console.log(findDuplicates([4,3,2,7,8,2,3,1])); //[ 2, 3 ]