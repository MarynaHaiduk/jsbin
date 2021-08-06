function palindrome(num) {
    if (typeof num != 'number' || num < 0) {
        return 'Not valid';
    } else {
        const arr = +(num.toString().split('').reverse().join(''));
        console.log(arr);
        return arr === num;
    }
}

console.log(palindrome(12321));