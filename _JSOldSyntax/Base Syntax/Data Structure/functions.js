// *** Function expression (anonymous Functions)
// 1. Нужно объявить и только потом использовать!!!

const getNum = function(a) {
  return a;
}

const getNums = (a, b) return (a, b);
const getNums2 = (a, b) => (a, b); // same as above
const getNum2 = a => a + 2; // with one parameter
let power = (num, n) => num ** n;

let mult = function (a, b) {return a * b;}
let sum3 = function (a, b) {return a + b;}

// ---------------------------------------------------------

// Существует ещё один способ создания функции, который, правда, используется очень редко.
// Он позволяет создавать функцию полностью «на лету» из строки, вот так:

let sum2 = new Function('a, b', 'return a + b;');
