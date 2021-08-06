// Solution 1
function min_element(arr){
  let sorted_arr = arr.sort(function(a, b){return a - b;});
  return sorted_arr[0];
}

// Solution 2
// Math.min.apply(null, [1, 2, 3]) is equivalent to Math.min(1, 2, 3).
// function find_min(arr){
//   return Math.min.apply(null, arr);
// }

// Tests
console.log(min_element([9, 2, 13, 7, 1, 12, 123]));
