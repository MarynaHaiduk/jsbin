function indexOfFirstNegative(arr) {

  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      index = i;
      return index;
    }
  }

  return 'no negative elements';
}


console.log(indexOfFirstNegative([-2, 4]));  // 0
console.log(indexOfFirstNegative([2, 7, 8]));  // "no negative elements"
