function maxMultiple(divisor, bound) {
  let result = 0;

  for (let i = divisor; i <= bound; i += divisor) {
    result = i;
  }

  return result;
}


console.log(maxMultiple(2, 7)); // 6