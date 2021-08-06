/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */


const intersection = function(nums1, nums2) {
  let commonNumbers = [];

  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i]) && !commonNumbers.includes(nums1[i])) {
      commonNumbers.push(nums1[i]);
    }
  }

  return commonNumbers;
};


console.log(intersection([1, 2, 2, 1], [2, 2]));  // [2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));  // [4, 9]
