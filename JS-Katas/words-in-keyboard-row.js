let input = ["Hello", "Alaska", "Dad", "Peace"];

var findWords = function (words) {
  return words.filter(word => {
    return checkWord(word);
  });
};

var checkWord = function (word) {
  let firstCount = 0, secondCount = 0, thirdCount = 0;
  let row1 = "qwertyuiop";
  let row2 = "asdfghjkl";
  let row3 = "zxcvbnm";

  word = word.toLowerCase();

  for (const char of word) {
    if (row1.includes(char)) { firstCount++ }
    else if (row2.includes(char)) { secondCount++ }
    else if (row3.includes(char)) { thirdCount++ }
  }

  return firstCount === word.length || secondCount === word.length || thirdCount === word.length;
};

console.log(findWords(input)); //Output ["Alaska", "Dad"]
