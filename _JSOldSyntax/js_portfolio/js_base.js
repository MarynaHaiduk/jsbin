/**********************************************************************
 * Math
 **********************************************************************/
let x = 1;
let y = 1;
console.log('Postfix Increment:', x, x++); // 1 1
console.log('Postfix Decrement:', y, ++y); // 1 2
console.log('Prefix Increment:', x, x--); // 2 2
console.log('Prefix Decrement:', y, --y); // 2 1
console.log('Division:', 5 / 2);  // 2.5
console.log('Reminder:', 5 % 2);  // 1
console.log(1 + 2 + '3'); // 33
console.log('1' + 2 + 3); // 123
console.log('10' / 1, '10' * 1, 10 - '1', '10' % '2');
console.log(10 / 'abc'); // NaN
console.log(isNaN(10 / 'abc')); // true, find out if a value is a number
console.log(1 === 1);  // true
console.log(1 === '1');  // false
console.log('Math.pow():', Math.pow(2, 2));
console.log(Math.max(1, 2, 3));  // 3
console.log();
/*
Math.round(x)	Returns x rounded to its nearest integer
Math.round(4.9);    // returns 5
Math.ceil(x)	Returns x rounded up to its nearest integer
Math.ceil(4.4);     // returns 5
Math.floor(x)	Returns x rounded down to its nearest integer
Math.floor(4.9);    // returns 4
Math.trunc(x)	Returns the integer part of x (new in ES6)
Math.trunc(4.9);    // returns 4
//Math.sign(x) returns if x is negative, null or positive:
Math.sign(-4);    // returns -1
Math.sign(0);    // returns 0
Math.sign(4);    // returns 1
Math.pow(8, 2);      // returns 64
Math.sqrt(64);      // returns 8
Math.abs(-4.7);     // returns 4.7
Math.sin(90 * Math.PI / 180);     // returns 1 (the sine of 90 degrees)
Math.cos(0 * Math.PI / 180);     // returns 1 (the cos of 0 degrees)
Math.min(0, 150, 30, 20, -8, -200);  // returns -200
// returns a random number between 0 (inclusive), and 1 (exclusive)
Math.random();     // returns a random number
// Returns a random integer from 0 to 9:
Math.floor(Math.random() * 10);
// Returns a random integer from 0 to 99:
Math.floor(Math.random() * 100);

// Returns False: 0, -0, '', undefined, null, false, NaN

JavaScript supports different kinds of loops:
for - loops through a block of code a number of times
for/in - loops through the properties of an object
for/of - loops through the values of an iterable object
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true
 */
/**********************************************************************/

/**********************************************************************/
// Const, let
/**********************************************************************/
const a = 1;
let b = 1;

/**********************************************************************
 * JavaScript Type Conversion
 *********************************************************************/

console.log('Convert string to number:');
console.log((+'1'), typeof (+'1'));  // 1 number
console.log((~~'1'), typeof (~~'1')); // 1 number
console.log((~~'1'), typeof (~~'1')); // 1 number
console.log(Number('3.14'), typeof (Number('3.14'))); // 3.14 number
console.log(parseFloat('3.14'), typeof (parseFloat('3.14'))); // 3.14 number
console.log(parseInt('3.14'), typeof (parseInt('3.14'))); // 3 number
console.log();

console.log('Convert number to string:');
console.log((123).toString(), typeof ((123).toString())); // string
console.log();

/** ******************************************************************* */

/*
*** Converting Strings to Numbers:
// The unary + operator can be used to convert a variable to a number:
let y = "5";      // y is a string
let x = + y;      // x is a number


*** Converting Numbers to Strings:

// The global method String():
// console.log(String(x));         // returns a string from a number variable x
// console.log(String(123));  // returns a string from a number literal 123
// console.log(String(100 + 23)); // returns a string from a number from an expression

/*
toExponential()	Returns a string, with a number rounded and written using exponential notation.
toFixed()	Returns a string, with a number rounded and written with a specified number of decimals.
toPrecision()	Returns a string, with a number written with a specified length


*** Converting Dates to Numbers:
// The global method Number()

*** Converting Numbers to Dates
*** Converting Booleans to Numbers
*** Converting Numbers to Booleans
*/


/**********************************************************************
 * JavaScript Types
 **********************************************************************/

// Symbol

// Boolean
let a = true;
let b = false;
console.log(typeof a, typeof b);  // "boolean"
console.log(Boolean(''));  // false
console.log(Boolean(null));  // false
console.log(Boolean(undefined));  // false
console.log(Boolean(0));  // false
console.log(Boolean(NaN));  // false
console.log(!true);  // false
console.log(!!true);  // true

// Bigint
const bigNum = 1234567890123456789012345678901234567890n;
console.log(bigNum, typeof (bigNum));  // [object BigInt]

// Number
let d = 5;
console.log(typeof d);  // "number"
console.log(1 / 0, typeof (1 / 0));  // Infinity, "number"
console.log(-1 / 0, typeof (-1 / 0));  // -Infinity, "number"
console.log('1s' / 0, typeof ('1' / 0));  // NaN, "number"

// String
let s = 'hkjk';
console.log(typeof s);  // "string"
console.log(`${s}!`);  // "hkjk!"
console.log(s.length); // 4

// Undefined (without declaration)
let c;
console.log(typeof c);  // "undefined"
console.log(2 + undefined); // NaN

// Null (declared as null)
let n = null;
console.log(typeof n);  // "object"
console.log(null === n);  // true,(to check if it equal null)
console.log(undefined == n, undefined === n);  // true, false
console.log(null + 1);  // 1


console.log(typeof 1 === 'number');  // true
console.log(typeof (1));  // number
console.log(typeof (1 / 0));  // number
console.log(NaN, typeof (NaN));  // NaN, number
console.log(1 / Infinity, typeof (1 / Infinity));  // Infinity, number
console.log(-1 / 0, typeof (-1 / Infinity));  // -Infinity, number
console.log(0xFF);  // 255, interprets numeric constants as hexadecimal
let myNumber = '123';
myNumber.toString();
console.log(myNumber, typeof myNumber);  // 123 string
console.log((001).toString(2));  // 1, convert to 2 base
console.log('Convert number to string:', (100 + 23).toString());
console.log((9.656).toExponential(2));  // 9.66e+0
console.log((9.656).toFixed(2));  // 9.66
console.log((9.656).toPrecision(2));  // 9.7
console.log((100 + 23).valueOf());  // 123
console.log(Number(true)); // 1, convert JavaScript variables to numbers
console.log(parseInt('-10.33')); // -10, parses a string, returns a whole number
console.log(parseFloat('10.33')); // 10.33, parses a string, returns a number
console.log(Number.MAX_VALUE);  // 1.7976931348623157e+308, the largest possible number in JS
console.log(Number.MIN_VALUE);  // 5e-324, the lowest possible number in JS
console.log(Number.POSITIVE_INFINITY);  // Infinity
console.log(Number.NEGATIVE_INFINITY);  // -Infinity
console.log(Number.NaN);  // NaN
let string = '1';
console.log(typeof (string));  // string
let object = {};
console.log(typeof (object));  // object
let und = undefined;
console.log(typeof (und));  // undefined
console.log();

/**********************************************************************
 * JavaScript Strings
 **********************************************************************/

let s = 'text';
console.log('Length: ', s.length);
// slice(): the start position, and the end position (end not included)
console.log('Method slice(): ', s.slice(0));  // text
console.log('Method slice(): ', s.slice(0, 2));  // te
console.log('Method slice(): ', s.slice(2, -1));  // x
// substring(): the start position, and the end position (end not included)
console.log('Method substring(): ', s.substring(0));  // text
console.log('Method substring(): ', s.substring(0, 2));  // te
// substr(): the start position, length
console.log('Method substr(): ', s.substr(0));  // text
console.log('Method substr(): ', s.substr(0, 2));  // te
let newString = s.replace('t', '*');
console.log(newString);  // *ext
// to replace case insensitive
newString = s.replace(/t/i, '*');
console.log(newString);  // *ext
// to replace all matches
newString = s.replace(/t/g, '*');
console.log(newString);  // *ex*
console.log(s.toUpperCase());  // TEXT
console.log(s.toLowerCase());  // text
// joins two or more strings:
let newStringJoined = s.concat(' ', newString);
console.log(newStringJoined);  // text *ex*
console.log(s + ' ' + newString);  // text *ex*
console.log(' text '.trim());  // text
console.log(s[0]);  // t
console.log(s.charAt(0));  // t
// returns the unicode of the character
console.log(s.charCodeAt(0));  // 116
console.log('Convert string to array:', s.split(','));  // [ 'text' ]
console.log('Split in characters:', s.split('')); // ['t', 'e', 'x', 't']
// methods for searching strings
console.log(s.indexOf('t'));  // 0
console.log('Last index:', s.lastIndexOf('t'));  // 3
console.log(s.includes('t'));  // true, check if the string includes the value
console.log(s.startsWith('t'));  // true
console.log(s.endsWith('t'));  // true
console.log(s.search('t'));  // 0
console.log(s.match('t')); // [ 't', index: 0, input: 'text',
// groups: undefined ]
// global, case-insensitive search
console.log(s.match(/t/gi)); // [ 't', 't' ]
console.log(`The result is ${1 + 2}`);
console.log();


/*******************************************************************************
 * JavaScript Arrays
 ******************************************************************************/

const empty_arr = [];
const arr = [1, 2, 3];
console.log(arr.join(''));  // 123, type string
console.log('Create array:', Array.from('123'));  // [ '1', '2', '3' ]
console.log('Length:', arr.length);  // 3
console.log('First element:', arr[0]);  // 1
console.log('Last element:', arr[arr.length - 1]);  // 3
console.log('Convert to string:', arr.toString());  // 1,2,3
console.log('Convert to array:', arr.join('-'));  // 1-2-3
console.log('Check if array:', Array.isArray(arr));  // true
console.log('Check if array:', arr instanceof Array);  // true
console.log('Include element:', arr.includes(1)); // true, can check for NaN
console.log('Max element:', Math.max.apply(null, arr));  // 3
console.log('Min element:', Math.min.apply(null, arr));  // 1
console.log('Sort:', arr.sort());  // [ 1, 2, 3], sorts values as strings
console.log('Add element:', arr.push(4), arr);  // 4 [ 1, 2, 3, 4 ]
arr[0] = 5; // change first element
console.log('Change first element:', arr); // [ 5, 2, 3, 4]
arr[arr.length] = 8;  // add last element
console.log('Add last element:', arr); // [ 5, 2, 3, 4, 8 ]
console.log('Remove last element:', arr.pop(), arr);  // 8 [ 5, 2, 3, 4 ]
console.log('Remove first:', arr.shift(), arr);  // 5 [ 2, 3, 4 ]
console.log('Add to beginning:', arr.unshift(8));  // 4, returns new length
console.log(arr); // [ 8, 2, 3, 4 ], add to beginning
delete arr[0]; // changes the first element in arr to undefined
// position where add, how many remove, define the new elements to be added
arr.splice(2, 0, 7, 7);
console.log(arr); // [ <1 empty item>, 2, 7, 7, 3, 4 ]
arr.splice(0, 2);   // removes the first 2 element
console.log(arr);  // [ 7, 7, 3, 4 ]
let newArray = arr.concat([1, 2, 3]);
console.log(arr);  // [ 7, 7, 3, 4 ]
console.log(newArray); // [ 7, 7, 3, 4, 1, 2, 3 ]
console.log(arr.slice(1, 3)); // [ 7, 3 ]
console.log(arr.slice(1)); // [ 7, 3, 4 ]
console.log('Reverse:', arr.reverse()); // [4, 3, 7, 7]

// compares all the values in the array, two values at a time (a, b)
arr.sort(function(a, b) {
  return b - a;
});
console.log('Sort:', arr);  // [ 7, 7, 4, 3 ]

// sorting an array in random order
arr.sort(function(a, b) {
  return 0.5 - Math.random();
});
console.log(arr);  // [ 4, 3, 7, 7 ]
// array iteration
let txt = '';
arr.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value;
}

console.log(arr);  // [ 3, 7, 7, 4 ]
// The map() method creates a new array by performing a
// function on each array element.
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}

console.log(numbers2);  // [ 90, 8, 18, 32, 50 ]
// The filter() method creates a new array with array elements
// that passes a test.
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(functionFilter);

function functionFilter(value, index, array) {
  return value > 18;
}

console.log(over18);  // [ 45, 25 ]
// The reduce() method runs a function on each array element to
// produce (reduce it to) a single value.
const numbers3 = [45, 8, 9, 16, 25];
let sumNums = numbers3.reduce(functionReduce);

function functionReduce(total, value, index, array) {
  return total + value;
}

console.log(sumNums);  // 103
// with parameter
let sumNums2 = numbers3.reduce(functionReduce, 100);

function functionReduce(total, value, index, array) {
  return total + value;
}

console.log(sumNums2);  // 203
// The every() method check if all array values pass a test.
// check if all array values pass a test
const numbers5 = [45, 4, 9, 16, 25];
let allOver18 = numbers5.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

console.log(allOver18);
// check if some array values pass a test
const numbers7 = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

console.log(someOver18);
// searches an array for an element value and returns its position
console.log(arr.indexOf(1)); //-1
console.log(arr.lastIndexOf(1)); //-1
// returns the value of the first array element that passes a test function
const numbers8 = [4, 9, 16, 25, 29];
let first = numbers8.find(myFunction4);

function myFunction4(value, index, array) {
  return value > 18;
}

// The findIndex() method returns the index of the first array
// element that passes a test function.
const numbers11 = [4, 9, 16, 25, 29];
let first2 = numbers11.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

// The Array.keys() method returns an Array Iterator object with the keys of an array.
const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
const keys = fruits.keys();
let text = '';
for (let x of keys) {
  text += x;
}
console.log();
let tmp = 0;
for (let i = 0; i <= arr.length; i++) {
  tmp += i;
}
console.log(tmp);  // 10
arr.forEach(function(value) {
  console.log(value);
});


/**********************************************************************
 * JavaScript Objects
 *********************************************************************/
const obj = {
  id: 1,
  name: 'js',
  total: function() {
    return this.id + ': ' + this.name;
  },
};
console.log(obj.id);  // 1
console.log(obj.name);  // js
console.log(obj.total());  // 1: js
console.log();

const obj2 = [
  { id: 1, name: 'js', year: 2011 },
  { id: 2, name: 'html', year: 2000 },
  { id: 3, name: 'css', year: 2005 },
];
obj2.sort(function(a, b) {
  return a.year - b.year;
});
console.log(obj2);
// Comparing string properties
obj2.sort(function(a, b) {
  let x = a.name.toLowerCase();
  let y = b.name.toLowerCase();
  if (x < y) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
  return 0;
});
console.log(obj2);

/**********************************************************************
 * JavaScript Set
 *********************************************************************/

let arrNums = [1, 2, 3, 1];
let arrUnique = new Set(arrNums);
console.log(arrUnique); // Set(3) { 1, 2, 3 }
