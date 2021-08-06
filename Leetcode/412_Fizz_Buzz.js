/**
 * @param {number} n
 * @return {string[]}
 */


let fizzBuzz = function(n) {

  let i = 1;
  let arr = [];

  while (i <= n) {
    if (i % 5 === 0 && i % 3 === 0) {
      arr.push('FizzBuzz');
    } else if (i % 3 === 0) {
      arr.push('Fizz');
    } else if (i % 5 === 0) {
      arr.push('Buzz');
    } else {
      arr.push(i.toString());
    }
    i++;
  }
  return arr;
};


console.log(fizzBuzz(15));
