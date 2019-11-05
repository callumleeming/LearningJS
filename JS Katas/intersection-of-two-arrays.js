/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let dupes = [];

    for(let i = 0; i <= nums1.length; i++) {
        const index = nums2.indexOf(nums1[i]);

        if(index > -1 && !dupes.includes(nums1[i])) {
            dupes.push(nums1[i]);
            nums2.splice(index, 1)
        }
    }

    return dupes;
};