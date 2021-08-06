function eachGreater(value, index, array, number = 5) {
  return value > number;
}


const numbers = [3, 4, 8, 11, 25];
const greater = numbers.every(eachGreater);
console.log(greater);  // false
