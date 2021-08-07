/**
 * @param {number[]} A
 * @return {number[]}
 */


let sortedSquares = function(A) {
  let newArr = [];

  for (let i = 0; i < A.length; i++) {
    newArr.push(A[i] * A[i]);
  }

  return newArr.sort(function(a, b) {
    return a - b;
  });
};


console.log(sortedSquares([-7, -3, 2, 3, 11]));  // [4, 9, 9, 49, 121]
console.log(sortedSquares([-4, -1, 0, 3, 10]));  // [0, 1, 9, 16, 100]
