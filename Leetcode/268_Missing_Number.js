/**
 * @param {number[]} nums
 * @return {number}
 */


const missingNumber = function(nums) {

  let sumTotal = 0;
  let sumNums = 0;
  let i = 0;
  let j = 0;

  while (i < nums.length + 1) {
    sumTotal += i;
    i++;
  }

  while (j < nums.length) {
    sumNums += nums[j];
    j++;
  }

  return sumTotal - sumNums;
};


console.log(missingNumber([3, 0, 1]));  // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));  // 8
