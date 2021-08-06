/**
 * @param {string} s
 * @return {boolean}
 */


var isPalindrome = function(s) {
	var initital_s = s.replace(/[\W]+/g, "").toLowerCase();
  var reversed_s = s.replace(/[\W]+/g, "").toLowerCase().split("").reverse().join("");
	return initital_s == reversed_s;
};


// Tests
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car"));   // false
