function sumOfPositive(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }

  return sum;
}


console.log(sumOfPositive([1, 2, -3, 4])); // 7
