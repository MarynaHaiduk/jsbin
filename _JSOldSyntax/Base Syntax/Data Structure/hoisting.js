let a = 10;

function avg(num1, num2) {
  a = 5;
  return (num1 + num2) / 2;
}

console.log(a);  // 10
console.log(avg(5, 5));
console.log(a);  // 5!!!