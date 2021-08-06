/**
 * @param {number} num
 * @return {boolean}
 */


 var checkPerfectNumber = function(num) {
 	let arr = [];
 	let sum = 0;

 	if (num <= 0) {
 		return false;
 	}

 	for (let i = num - 1; i > 0; i--) {
 			if (num % i == 0){
 				arr.push(i);
 			}
 		}

 	for (let j = 0; j < arr.length; j++){
 			sum += arr[j];
 		}
 	return sum == num;
};


// Tests
console.log(checkPerfectNumber(28));	// true
console.log(checkPerfectNumber(0));	  // false
