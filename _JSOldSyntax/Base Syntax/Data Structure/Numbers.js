// BigInt. An integer with arbitrary precision. For example: 9007199254740992n

// Increment
var x = 5, x++;
var z = x;  // returns 6

// Decrement
var x = 5, x--;
var z = x;  // returns 4

// Precision
var x = 999999999999999;              // output 999999999999999
var y = 9999999999999999;             // output 10000000000000000
var x = 0.2 + 0.1;                    // x will be 0.30000000000000004
var x = (0.2 * 10 + 0.1 * 10) / 10;   // x will be 0.3

//-----------------Rounding numbers--------------------------
console.log(Math.round(5.45));  			// 5
console.log(Math.ceil(5.45));  				// 6
console.log(Math.floor(5.45));  			// 5 (removes the fraction part)

// The toFixed() Method
// Returns a string, with the number written with a specified number of decimals
var x = 9.656;
x.toFixed(0);           // returns 10
x.toFixed(2);           // returns 9.66
x.toFixed(4);           // returns 9.6560
x.toFixed(6);           // returns 9.656000

var number1 = 2.437, number2 = 2.457;
console.log(number1.toFixed(1));			// 2.4
console.log(number2.toFixed(1));			// 2.5

//---------------------JavaScript Arithmetic-------------------------
var x = 5 + 2 + 3;                    // 10 - type number
var x = "1" + "1";                    // 11 - type string
var x = 10, var y = 20;
var z = "The result is: " + x + y;    // The result is: 1020
var z = "The result is: " + (x + y);  // The result is: 30
// JavaScript will try to convert strings to numbers in all numeric operations:
var x = "100";
var y = "10";
var z = x / y;          // z will be 10
var z = x * y;          // z will be 1000
var z = x - y;          // z will be 90

//------------------NaN-------------------------
// If you do a mathematical operation on an undefined variable
// your result will be NaN which means "Not a Number".
// Denotes an unrepresentable value
var x = 100 / "Apple";  // x will be NaN
var z = NaN + 5;        // z will be NaN
var z = NaN + "5";      // z will be NaN5
isNaN(x);               // returns true if is Not a Number
typeof NaN;             // returns "number"

//------------------Infinity-------------------------
// Return if you calculate a number outside the largest possible number
// Infinity: This is any number divided by 0, or an attempt to multiply
// Number.MAX_VALUE by an integer > 1.
// -Infinity: This is any number divided by 0, or an attempt to multiply
// Number.MAX_VALUE by an integer <-1.
var x =  2 / 0;         // x will be Infinity
var y = -2 / 0;         // y will be -Infinity
typeof Infinity;        // returns "number"

var myNumber = 2;
while (myNumber != Infinity) {   // Execute until Infinity
  myNumber = myNumber * myNumber;
}

//-----------------Hexadecimal-------------------------
// Numeric constants as hexadecimal if they are preceded by 0x
var x = 0xFF;        // x will be 255
// Never write a number with a leading zero (like 07).
// Some JavaScript versions interpret numbers as octal if they are written with a leading zero.

//--------------------------------------------
// By default, JavaScript displays numbers as base 10 decimals.
// But you can use the toString() method to output numbers from base 2 to base 36.
// But you can use the toString() method to output numbers from base 2 to base 36.
var myNumber = 32;
myNumber.toString(10);  // returns 32
myNumber.toString(32);  // returns 10
myNumber.toString(16);  // returns 20
myNumber.toString(8);   // returns 40
myNumber.toString(2);   // returns 100000

//-------------Converting Variables to Numbers--------------
// Number()	Returns a number, converted from its argument.
Number(true);          // returns 1
Number(false);         // returns 0
Number("10");          // returns 10
Number(" 10  ");       // returns 10
Number("10.33");       // returns 10.33
Number("10,33");       // returns NaN
Number("10 33");       // returns NaN
Number("John");        // returns NaN
Number(new Date("2017-09-30"));    // returns 1506729600000

// parseFloat()	Parses its argument and returns a floating point number
parseFloat("10");        // returns 10
parseFloat("10.33");     // returns 10.33
parseFloat("10 20 30");  // returns 10
parseFloat("10 years");  // returns 10
parseFloat("years 10");  // returns NaN

// parseInt()	Parses its argument and returns an integer
parseInt("10");         // returns 10
parseInt("10.33");      // returns 10
parseInt("10 20 30");   // returns 10
parseInt("10 years");   // returns 10
parseInt("years 10");   // returns NaN

//------------------Number Methods------------------
(123).toString();        // returns 123 from literal 123
(100 + 23).toString();   // returns 123 from expression 100 + 23
Math.abs(-1);           // calculates the absolute value of a number
Math.exp(2);            // calculates e to the power of a number
Math.pow(2,2);          // calculates the result of x to the power of y
Math.random();          // a random number x where 0<=x<1
Math.sqrt(25);
Math.sqrt(b), 2)

// toExponential() returns a string, with a number rounded and written using exponential notation.
// The parameter is optional. If you don't specify it, JavaScript will not round the number.
var x = 9.656;
x.toExponential(2);     // returns 9.66e+0
x.toExponential(4);     // returns 9.6560e+0
x.toExponential(6);     // returns 9.656000e+0

// toPrecision() returns a string, with a number written with a specified length:
var x = 9.656;
x.toPrecision();        // returns 9.656
x.toPrecision(2);       // returns 9.7
x.toPrecision(4);       // returns 9.656
x.toPrecision(6);       // returns 9.65600

// valueOf() returns a number as a number.
var x = 123;
x.valueOf();            // returns 123 from variable x
(123).valueOf();        // returns 123 from literal 123
(100 + 23).valueOf();   // returns 123 from expression 100 + 23

//--------------JavaScript MIN_VALUE and MAX_VALUE----------
var x = Number.MAX_VALUE;
var x = Number.MIN_VALUE;
var x = Number.POSITIVE_INFINITY;
var x = Number.NEGATIVE_INFINITY;
var x = Number.NaN;
var x = 6;
var y = x.MAX_VALUE;    // y becomes undefined

// Symbolic Numbers
var var1 = 1, var2 = 0, var3 = -0;

console.log("MAX_VALUE: " + Number.MAX_VALUE);
// MAX_VALUE: 1.7976931348623157e+308

console.log("MAX_VALUE + 1 = " + Number.MAX_VALUE * 2);
// MAX_VALUE + 1 = Infinity
console.log("MIN_VALUE = " + Number.MIN_VALUE);
// MIN_VALUE = 5e-324

console.log("MIN_VALUE - 1 = " + Number.MIN_VALUE - 1);
// NaN
console.log("MAX_SAFE_INTEGER = " + Number.MAX_SAFE_INTEGER);
// MAX_SAFE_INTEGER = 9007199254740991
console.log("MIN_SAFE_INTEGER = " + Number.MIN_SAFE_INTEGER);
// MIN_SAFE_INTEGER = -9007199254740991

console.log("SquareRoot(-1) = " + Math.sqrt(-1));
// SquareRoot(-1) = NaN
console.log("isSafeInteger(100) = " + Number.isSafeInteger(100));
// isSafeInteger(100) = true

/* ------------The isSafeInteger Method----------------
A safe integer is an integer that:
Can be exactly represented as an IEEE-754 double precision number, and
Whose IEEE-754 representation cannot be the result of rounding
any other integer to fit the IEEE-754 representation.
The Number.isSafeInteger() method determines whether the
provided value is a number that is a safe integer.
*/
