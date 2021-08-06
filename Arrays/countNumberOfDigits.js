function countNumberOfDigits(number) {
    let count = 0;
    let last = 1;

    if (number === 0){
        return 1;
    }

    while (number !== 0) {
        last = number % 10;
        number = (number - last) / 10;
        count++;
    }
    return count;
}


console.log(countNumberOfDigits(342167));  // 6
console.log(countNumberOfDigits(0));  // 1