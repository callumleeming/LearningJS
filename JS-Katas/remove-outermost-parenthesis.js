var removeOuterParentheses = function(S) {
    let parenthesis = S.split("");
    let leftCount = 0, rightCount = 0;
    let start = 0;
    let result = [];

    for (let index = 0; index < parenthesis.length; index++) {
        let bracket = parenthesis[index];

        if(bracket === "(") { leftCount++ } 
        else { rightCount++ }
        
        if(leftCount == rightCount) {
            result.push(S.substring(start+1, index))
            start = index+1;
        }
    }

    return result.join("");
};

console.log(removeOuterParentheses("(()())(())")); // Output: "()()()"

