function bigNumber(number) {
    if (number > 100) {
        return true;
    } else {
        return false;
    };
}

console.log(bigNumber(140));



function brenda(maxNumber, currentNumber, ageNumber) {
    if (ageNumber >= 18 && currentNumber <= 1000) {
        return "Come in!";
    } else if (ageNumber <= 18) {
        return "This club is for adults.";
    } else if (currentNumber >= 1000) {
        return "It's too busy now, come back later."
    }
}

console.log(brenda(1000, 975, 19));

console.log(brenda(1000, 1001, 21));

console.log(brenda(1000, 975, 17));

function averageNumber(number1, number2, number3, number4, number5) {
    const average = number1 + number2 + number3 + number4 + number5;
    return sum/5;
}

const average = averageNumber(5, 9, 2, 34, 87);
console.log(result);

