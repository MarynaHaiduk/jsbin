/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */


const moveZeroes = function(nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
  return nums;
};


console.log(moveZeroes([0, 1, 0, 3, 12]));  // [1, 3, 12, 0, 0]
