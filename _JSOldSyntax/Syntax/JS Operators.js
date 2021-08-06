// ----------------------------------------------------------------
// *******************  JavaScript Comparison operators ***********
// ----------------------------------------------------------------

// This is an in-line comment
/* This is a multi-line comment */

//------------------------------------------------------------------

// ==	equal to
// ===	equal value and equal type
// !=	not equal
// !==	not equal value or not equal type
// >=	greater than or equal to
// <=	less than or equal to
// ?	ternary operator

var income = 100, var strIncome = "100";
var result = income == strIncome;  // true

var income = 100, strIncome = "100";
var result = income === strIncome;  // false

//-------------------------------------------------------------------
// JavaScript Logical Operators
// &&	logical and
// Returns true if both comparison operations return true, otherwise false

// ||	logical or
// Returns true if at least one returns true, otherwise false

// !	logical not
// Returns true if the compare operation returns false.

//-------------------------------------------------------------------
// JavaScript Bitwise Operators
// &	  AND	                  5 & 1	   0101 & 0001	 0001	  1
// |	  OR	                  5 | 1	   0101 | 0001	 0101	  5
// ~	  NOT	                  ~ 5	     ~0101	1010	 10
// ^	  XOR	                  5 ^ 1	   0101 ^ 0001	 0100	  4
// <<	  Zero fill left shift	5 << 1	 0101 << 1	   1010	  10
// >>	  Signed right shift	  5 >> 1	 0101 >> 1	   0010	  2
// >>>	Zero fill right shift	5 >>> 1	 0101 >>> 1	   0010	  2
