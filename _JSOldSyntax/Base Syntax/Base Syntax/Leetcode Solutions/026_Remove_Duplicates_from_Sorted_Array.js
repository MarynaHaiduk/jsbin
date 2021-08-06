/**
 * @param {number[]} nums
 * @return {number}
 */


const removeDuplicates = function(nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
    }
  }
  return nums.length;
};


console.log(removeDuplicates([1, 1, 2]));  // 2
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));  // 5
