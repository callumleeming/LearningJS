
var sortArrayByParityII = function (A) {
    let result = [];
    let evens = A.filter(x => x % 2 === 0);
    let odds = A.filter(x => x % 2 !== 0);

    for (let index = 0; index < A.length; index++) {
        if (index % 2 == 0) {
            result.push(evens.shift());
        } else {
            result.push(odds.shift());
        }
    }

    return result;
};

sortArrayByParityII([4, 2, 5, 7]);

//link: https://leetcode.com/problems/sort-array-by-parity-ii/