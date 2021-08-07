/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */


const rotate = function(nums, k) {
  while (k > 0) {
    nums.unshift(nums[nums.length - 1]);
    nums.pop();
    k--;
  }
};


console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));  // [5, 6, 7, 1, 2, 3, 4]

