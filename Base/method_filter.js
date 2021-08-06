function numbersGreater(value, index, array, number=5) {
  return value > number;
}


const numbers = [3, 4, 8, 11, 25];
const greater = numbers.filter(numbersGreater);
console.log(greater);  // [ 8, 11, 25 ]
