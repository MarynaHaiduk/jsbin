function powerOfTwo(n) {

  const power = [];

  for (let i = 0; i <= n; i++) {
    power.push(2 ** i);
  }

  return power;
}


console.log(powerOfTwo(5));  // [1, 2, 4, 8, 16, 32]
