function reverseArray(arr) {

  const reversedArray = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }

  return reversedArray;
}


console.log(reverseArray([1, 2, 3, 4, 5]));  // [5, 4, 3, 2, 1]
