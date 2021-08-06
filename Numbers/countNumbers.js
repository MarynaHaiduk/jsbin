function countOfNumbers(arr) {

  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      count++;
    }
  }

  return count;
}


console.log(countOfNumbers([2, 'a', 5, true, 'b', 1, 'c']));  // 3
 