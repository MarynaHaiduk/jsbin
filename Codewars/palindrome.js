function palindrome(num) {
  if (typeof num != 'number' || num < 0) {
    return 'Not valid';
  } else {
    const arr = +(num.toString().split('').reverse().join(''));
    return arr === num;
  }
}


console.log(palindrome(12321));  // true

