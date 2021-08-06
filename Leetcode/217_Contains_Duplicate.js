/**
 * @param {number[]} nums
 * @return {boolean}
 */


// Solution 1
// const containsDuplicate = function(nums) {
//   let uniqueNums = new Set(nums);
//   if (uniqueNums.size !== nums.length) {
//     return true;
//   } else {
//     return false;
//   }
// };


// Solution 2
const containsDuplicate = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        return true;
      }
    }
  }
  return false;
};


console.log(containsDuplicate([1, 2, 3, 1]));  // true
console.log(containsDuplicate([1, 2, 3, 4]));  // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));  // true
