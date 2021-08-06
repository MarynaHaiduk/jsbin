function oddNumbers(n) {
  const oddNums = [];

  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      continue;
    }
    oddNums.push(i);
  }

  return oddNums;
}


console.log(oddNumbers(10));  // [1, 3, 5, 7, 9]
