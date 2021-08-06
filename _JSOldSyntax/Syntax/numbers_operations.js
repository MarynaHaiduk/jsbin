//------------------Numbers------------------

let num1 = 2;               // integer
let num2 = 1.3;             // floating point number
let num3 = Infinity;        // Infinity
let num4 = 'string' / 2;    // NaN
console.log(typeof num1);

//------------------------------------------------------
// сначала увеличивает переменную на единицу, а затем возвращает ее значение
// префиксный инкремент
var x = 5;
var z = ++x;
console.log(x);                       // 6
console.log(z);                       // 6
// сначала возвращает значение переменной, а затем увеличивает его на единицу
// постфиксный инкремент
var a = 5;
var b = a++;                          // a = a + 1 the same as a++
console.log(a);                       // 6
console.log(b);                       // 5
++num1;
--num1;

// Декремент уменьшает значение переменной на единицу
// префиксный инкремент
var x = 5;
var z = ++x;
console.log(x); // 6
console.log(z); // 6
// постфиксный инкремент
var a = 5;                              // // a = a - 1 the same as a--
var b = a++;
console.log(a);                         // 6
console.log(b);                         // 5

//------------------------------------------------------
// Numbers
// i++; is the equivalent of i = i + 1;
// i--; is the equivalent of i = i - 1;

// JavaScript Numbers are Always 64-bit Floating Point
// Extra large or extra small numbers can be written with
// scientific (exponential) notation
var y = 123e5;      // 12300000
var z = 123e-5;     // 0.00123

// JavaScript Numbers are Always 64-bit Floating Point!!!
// the number (the fraction) is stored in bits 0 to 51,
// the exponent in bits 52 to 62, and the sign in bit 63
// 52 bits (0 - 51) 	11 bits (52 - 62)	1 bit (63)
// Integers (numbers without a period or exponent notation)
// are accurate up to 15 digits.
var x = 999999999999999;      // 999999999999999
var y = 9999999999999999;     // 10000000000000000

// the maximum number of decimals is 17, but floating point
// arithmetic is not always 100% accurate:
var x = 0.2 + 0.1;         // x will be 0.30000000000000004
// To solve the problem above, it helps to multiply and divide:
var x = (0.2 * 10 + 0.1 * 10) / 10;    // x will be 0.3

// JavaScript will try to convert strings to numbers in all numeric operations:
var x = "100";
var y = "10";
var z = x / y;       // z will be 10
var z = x * y;       // z will be 1000
var z = x - y;       // z will be 90
var z = x + y;       // z will not be 110 (It will be 10010)
var x = 100 / "Apple";  // x will be NaN (Not a Number)
var x = 100 / "10";     // x will be 10

var x = 100 / "Apple";
isNaN(x);               // returns true because x is Not a Number

var x = NaN, y = 5;
var z = x + y;         // z will be NaN

var x = NaN, y = "5";
var z = x + y;         // z will be NaN5

// NaN is a number: typeof NaN returns number:
typeof NaN;            // returns "number"

var a;
console.log(a + 2);     // NaN

var n = null;
console.log(n * 32);    // 0

//------------------------------------------------------------------
// Infinity
// Infinity (or -Infinity) is the value JavaScript will return
// if you calculate a number outside the largest possible number.

var myNumber = 2;
while (myNumber != Infinity) {   // Execute until Infinity
  myNumber = myNumber * myNumber;
}

// Division by 0 (zero) also generates Infinity:
var x =  2 / 0;       // x will be Infinity
var y = -2 / 0;       // y will be -Infinity
typeof Infinity;      // returns "number"

//------------------------------------------------------------------
// Hexadecimal
// JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.
var x = 0xFF;        // x will be 255

// Never write a number with a leading zero (like 07).
// Some JavaScript versions interpret numbers as octal if they are written with a leading zero.
// By default, JavaScript displays numbers as base 10 decimals.
// But you can use the toString() method to output numbers from base 2 to base 36.
// Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.
var myNumber = 32;
myNumber.toString(10);  // returns 32
myNumber.toString(32);  // returns 10
myNumber.toString(16);  // returns 20
myNumber.toString(8);   // returns 40
myNumber.toString(2);   // returns 100000

//------------------------------------------------------------------
// JavaScript Number Methods
// The toString() Method
// returns a number as a string
var x = 123;
x.toString();            // returns 123 from variable x
(123).toString();        // returns 123 from literal 123
(100 + 23).toString();   // returns 123 from expression 100 + 23

// The toExponential() Method
// returns a string, with a number rounded and written using exponential notation.
var x = 9.656;
x.toExponential(2);     // returns 9.66e+0
x.toExponential(4);     // returns 9.6560e+0
x.toExponential(6);     // returns 9.656000e+0

// The toPrecision() Method
// returns a string, with a number written with a specified length
var x = 9.656;
x.toPrecision();        // returns 9.656
x.toPrecision(2);       // returns 9.7
x.toPrecision(4);       // returns 9.656
x.toPrecision(6);       // returns 9.65600

// The valueOf() Method
// returns a number as a number
var x = 123;
x.valueOf();            // returns 123 from variable x
(123).valueOf();        // returns 123 from literal 123
(100 + 23).valueOf();   // returns 123 from expression 100 + 23

// Number Properties
// MAX_VALUE	Returns the largest number possible in JavaScript
var x = Number.MAX_VALUE;
var x = 6; var y = x.MAX_VALUE;    // y becomes undefined
// MIN_VALUE	Returns the smallest number possible in JavaScript
var x = Number.MIN_VALUE;
// POSITIVE_INFINITY	Represents infinity (returned on overflow)
var x = Number.POSITIVE_INFINITY;
var x = 1 / 0;   // Infinity
// NEGATIVE_INFINITY	Represents negative infinity (returned on overflow)
var x = Number.NEGATIVE_INFINITY;
var x = -1 / 0;  // -Infinity
// NaN	Represents a "Not-a-Number" value
var x = Number.NaN; //NaN
var x = 100 / "Apple";  // x will be NaN (Not a Number)
