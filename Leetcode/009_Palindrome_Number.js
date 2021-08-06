/**
 * @param {number} x
 * @return {boolean}
 */


const isPalindrome = function(x) {
  let reversedNumber = x.toString().split('').reverse().join('');
  return (reversedNumber == x);
};


console.log(isPalindrome(121));  // true
console.log(isPalindrome(-121));  // false
console.log(isPalindrome(10));  // false
