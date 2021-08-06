function countWordsWithLength(arr, len) {

  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === len) {
      count++;
    }
  }

  return count;
}


console.log(countWordsWithLength(['one', 'two', 'three'], 3));  // 2