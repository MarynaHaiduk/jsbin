function getEven(n) {

  const evenNums = [];

  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
        evenNums.push(i);
    }
  }

  return evenNums;
}


console.log(getEven(10));  // [0, 2, 4, 6, 8, 10]