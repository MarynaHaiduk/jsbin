/**
 * @param {string} s
 * @return {boolean}
 */


const isPalindrome = function(s) {
  let initialString = s.replace(/[\W]+/g, '').toLowerCase();
  let reversedString = s.replace(/[\W]+/g,
    '').toLowerCase().split('').reverse().join('');
  return initialString == reversedString;
};



console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('race a car'));   // false

