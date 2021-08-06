function sumNumbers(nums) {

  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  return sum;
}


console.log(sumNumbers([1, 2, 3, 4, 5]));  // 15
