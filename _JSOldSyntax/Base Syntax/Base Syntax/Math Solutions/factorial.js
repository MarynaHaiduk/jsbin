// Solution 1
function fact(num) {
  if (num === 1 || num === 0) return 1;
  else return num * fact(num - 1);
}


// Solution 2
// function fact(num) {
//   return (num === 1 || num === 0) ? 1 : num * fact(num - 1);
// }


console.log(fact(0)); // 1
console.log(fact(5)); // 120
