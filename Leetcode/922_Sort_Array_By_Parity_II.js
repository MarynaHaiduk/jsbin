/**
 * @param {number[]} A
 * @return {number[]}
 */


const sortArrayByParityII = function(A) {
  let odd = [];
  let even = [];
  let sortedArray = [];

  for (let i = 0; i < A.length; i++) {
    A[i] % 2 ? odd.push(A[i]) : even.push(A[i]);
  }

  for (let i = 0, j = 0; i < even.length, j < odd.length; i++, j++) {
    sortedArray.push(even[i]);
    sortedArray.push(odd[j]);
  }

  return sortedArray;
};


console.log(sortArrayByParityII([4, 2, 5, 7]));
// [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted
