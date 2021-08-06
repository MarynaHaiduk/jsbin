function outputNumbers(value, index, array) {
  console.log(`Index ${index}:`, value);
}


let numbers = [45, 4, 9, 16, 25];
let getNumbers = numbers.forEach(outputNumbers);
console.log(getNumbers);
