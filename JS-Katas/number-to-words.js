function convertToWords(number) {
    let numbers = number.split("");
    let length = numbers.length;

    let singleDigits = [
        "One",
        "Two",
        "Three",
        "Four",
        "Five",
        "Six",
        "Seven",
        "Eight",
        "Nine",
    ];
    let teenDigits = [
        "Eleven",
        "Twelve",
        "Thirteen",
        "Fourteen",
        "Fifteen",
        "Sixteen",
        "Seventeen",
        "Eighteen",
        "Nineteen"
    ];
    let doubleDigits = [
        "Ten",
        "Twenty",
        "Thirty",
        "Fourty",
        "Fifty",
        "Sixty",
        "Seventy",
        "Eighty",
        "Ninety",
    ];
    let tripleDigits = [
        "One Hundred",
        "Two Hundred",
        "Three Hundred",
        "Four Hundred",
        "Five Hundred",
        "Six Hundred",
        "Seven Hundred",
        "Eight Hundred",
        "Nine Hundred"
    ];

    if (number == "0") {
        return "Please enter a number higher than 0."
    }

    if (length == 1) {
        return singleDigits[number - 1];
    }

    if (length == 2 && numbers[1] == "0") {
        let val = numbers[0];
        return doubleDigits[val - 1];
    } 
    
    else if (length == 2 && numbers[0] < 2 && numbers[1] != "0") {
        let v = (Number(numbers[0]) + Number(numbers[1])) - 2;
        return teenDigits[v];
    } 
    
    else if (length == 2 && numbers[0] >= 2) {
        let firstWord = doubleDigits[numbers[0] - 1];
        let secondWord = singleDigits[numbers[1] - 1];
        return `${firstWord} ${secondWord}`;
    }
    
    else if (length === 3) {
        let firstWord = tripleDigits[numbers[0]-1];
        let secondWord = doubleDigits[numbers[1]-1] || '';
        let thirdWord = singleDigits[numbers[2]-1] || '';

        if(((numbers[1]) == 1) && ((numbers[2]) <= 9)) {
            let v = (Number(numbers[1]) + Number(numbers[2])) - 2;
            return `${firstWord} and ${teenDigits[v]}`;
        } 
        
        else if (numbers[1] == 0 && numbers[2] == 0) {
            return `${firstWord}`;
        }

        return `${firstWord} and ${secondWord} ${thirdWord}`;
    }
}

console.log(convertToWords("659")); //Six Hundred and Fifty Nine
