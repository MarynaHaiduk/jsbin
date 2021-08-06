// check if number greater than value
const value = 11;
const greater = value > 10 ? 'yes' : 'no';
console.log(greater);  // yes



// check if number even or odd
let userInput = 2;
let output = userInput % 2 === 0 ?
  console.log(userInput + ' is even') :
  console.log(userInput + ' is odd');



// compare two numbers
function compareNumbers(a, b) {
  return a > b ? true : false;
}

console.log(compareNumbers(1, 2));



// nested ternary
function findGreaterOrEqual(a, b) {
  return (a === b) ? 'a and b are equal' :
    (a > b) ? 'a is greater' : 'b is greater';
}

console.log(findGreaterOrEqual(1, 2));
console.log(findGreaterOrEqual(2, 2));
console.log(findGreaterOrEqual(3, 2));
