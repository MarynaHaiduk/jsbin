// Solution 1
// function findMinElement(arr){
//   return Math.min.apply(null, arr);
// }


// Solution 2
function findMinElement(arr) {
  const sortedArray = arr.sort(function(a, b) {
    return a - b;
  });

  return sortedArray[0];
}


console.log(findMinElement([9, 2, 13, 7, 3, 12, 123]));  // 2
