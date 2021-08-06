function someGreater(value, index, array) {
  return value > 18;
}


// The some() method check if some array values pass a test.
const numbers = [45, 4, 9, 16, 25];
const greater = numbers.some(someGreater);
console.log(greater);  // true