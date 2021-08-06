function evenIndexesNums(arr) {

  let even = [];

  for (let i = 0; i < arr.length; i += 2) {
    even.push(i);
  }

  return even;
}


function oddIndexesNums(arr) {

  let odd = [];

  for (let i = 1; i < arr.length; i += 2) {
    odd.push(i);
  }

  return odd;
}


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(evenIndexesNums(arr));  // [0, 2, 4, 6, 8]
console.log(oddIndexesNums(arr));  // [1, 3, 5, 7]
