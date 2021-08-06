function sumNumbers() {
    let sum = 0;
    while (true) {
        let userInput = prompt('Enter number', '');
        if (!userInput) break;
        sum += userInput;
    }
    return sum;
}

console.log(sumNumbers());
