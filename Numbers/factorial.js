function factorial(num) {
  if (num === 1 || num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}


// with ternary operator
// function factorial(num) {
//   return (num === 1 || num === 0) ? 1 : num * factorial(num - 1);
// }


console.log(factorial(0)); // 1
console.log(factorial(5)); // 120
