// -------------------------------------------------------------------
// ********************* Arithmetic Operations ***********************
//--------------------------------------------------------------------

console.log(2 + 3);            // 5
console.log('2' + 3);          // "23"

console.log(4 - 2);            // 2
console.log('4' - 2);          // 2

console.log('9' / 3);          // 3
console.log(9 / 3);            // 3
console.log('20' / 3.5);       // 5.714285714285714

console.log(5 * 3.5);          // 17.5
console.log('5' * 3.5);        // 17.5
console.log('5a' * 3.5);       // NaN

console.log(5 % 2);            // 1
 
console.log(2 ** 3);           // 8
console.log(Math.pow(2, 3));   // 8
console.log(2 ** 2 ** 3);      // 256, равносильно 2 ** (2 ** 3)
console.log(2 ** (2 ** 3));    // 256

//--------------------------------------------------------------------

let num = 5;

// Increment 
console.log(num, num++, num);  // 5, 5, 6 (postfix)
console.log(num, ++num, num);  // 6, 7, 7 (prefix)

// Decrement
console.log(num, num--, num);  // 7, 7, 6 (postfix)
console.log(num, --num, num);  // 6, 5, 5 (prefix)

num = -2;
console.log(-num);  		   // 2
console.log(Math.abs(num));    // 2

console.log(+num);             // convert to number!!!

let a = 1, b = 1;
let c = ++a;
let d = b++;
console.log(a, b, c, d);       // 2, 2, 2, 1

// -------------------------------------------------------------------
// **************************** Precedence ***************************
//--------------------------------------------------------------------

// О приоритете операторов можно почитать здесь: 
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// Приоритет (начиная с самого высокого)
// ++, --, !, унарный +, унарный - 
// **
// *, /, %
// +, -
// >, >=, <, <=
// ==, !=, ===, !==
// &&
// ||
// ?, :
// =, +=, -=, *=, /=, %=


// -------------------------------------------------------------------
// **************************** MATH *********************************
//--------------------------------------------------------------------

// Random number in the range 0 to less than 1 (inclusive of 0, but not 1) 
console.log(Math.random());

// Math.trunc(), Math.floor(), Math.round(), number.toFixed()
//--------------------------------------------------------------------


