/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sortedArray = nums.sort((a, b) => a - b);
    let numbers = [];

    for(let i = 0; i <= nums.length; i++) {
        numbers.push(i);
    }

    return numbers.filter(num => {
        return !sortedArray.includes(num);
    });
};