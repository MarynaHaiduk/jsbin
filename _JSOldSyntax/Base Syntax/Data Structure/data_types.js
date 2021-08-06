// -----------------------------------------------------------
// ****************** JavaScript Data Types ******************
// -----------------------------------------------------------

// Type "number"
let type_number = 78.5;
console.log(typeof type_number);          // "number"
console.log(typeof +'1');                 // "number"
console.log(typeof (1 / 0), 1 / 0);       // "number", Infinity
console.log(typeof (-1 / 0), -1 / 0);     // "number", -Infinity
console.log(typeof (1 / 'a'), 1 / 'a');   // "number", NaN

// -----------------------------------------------------------
// Type "string"
let type_string = "text";
console.log(typeof type_string);      // "string"
console.log(typeof (2 + ''));         // "string"
console.log(typeof 'undefined');      // "string"

// -----------------------------------------------------------
// Type "boolean"
let type_boolean = true;
console.log(typeof type_boolean);     // "boolean"
console.log(typeof (2 < 3));          // "boolean"
console.log(1 == 1);     			  // true
console.log(1 == '1');   			  // true
console.log(3 === '3');  			  // false
console.log(1 != 2);     			  // true
console.log(1 != "1");   			  // false

// -----------------------------------------------------------
// Type "bigint"
let big = 1234567890123456789012345678901234567890n;
console.log(typeof big);              // "bigint"

// -----------------------------------------------------------
// Type "undefined"
let type_undefined = undefined;
console.log(typeof (type_undefined));  // "undefined"

let d;
console.log(typeof (d));               // "undefined"

// -----------------------------------------------------------
// Type "null" (but return "object")
console.log(typeof null);             // "object" (error in JS)

// -----------------------------------------------------------
// Type "object"
let arr = [];
console.log(typeof arr);              // "object"

let newObj = {};
console.log(typeof newObj);           // "object"

// -----------------------------------------------------------
// Type "symbol"
let type_symbol = Symbol('foo')
console.log(typeof type_symbol);      // "symbol"

// -----------------------------------------------------------