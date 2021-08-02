// Math
let x = 1;
let y = 1;
console.log('Postfix Increment:', x, x++); // 1 1
console.log('Postfix Decrement:', y, ++y); // 1 2
console.log('Prefix Increment:', x, x--); // 2 2
console.log('Prefix Decrement:', y, --y); // 2 1
console.log(5 / 2);  // 2.5
console.log(5 % 2);  // 1
console.log(1 + 2 + '3'); // 33
console.log('1' + 2 + 3); // 123
console.log(1 === 1);  // true
console.log(1 === '1');  // false
console.log('Math.pow():', Math.pow(2, 2));


// Const, let
const a = 1;
let b = 1;


// JavaScript Types
let number = 1;
console.log(typeof (number));  // number
let result = 1 / 0;
console.log(typeof (result));  // number
let string = '1';
console.log(typeof (string));  // string
let object = {};
console.log(typeof (object));  // object
let und = undefined;
console.log(typeof (und));  // undefined


// JavaScript Strings
let s = 'text';
console.log('String length: ', s.length);
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
let newStringJoined = s.concat(" ", newString);
console.log(newStringJoined);  // text *ex*
console.log(s + " " + newString);  // text *ex*
console.log(" text ".trim());  // text
console.log(s[0]);  // t
console.log(s.charAt(0));  // t
// returns the unicode of the character
console.log(s.charCodeAt(0));  // 116
// string can be converted to an array
let convertedString = s.split(',');
console.log(convertedString);  // [ 'text' ]
// split in characters
convertedString = s.split('');
console.log(convertedString);  // [ 't', 'e', 'x', 't' ]
// split on spaces
convertedString = s.split(' ');
console.log(convertedString);  // [ 'text' ]
// methods for searching strings
console.log(s.indexOf('t'));  // 0


// JavaScript Arrays
const arr = [1, 2, 3];
console.log(arr[0]);  // 1
arr.push(4);
console.log(arr); // [ 1, 2, 3, 4 ]


// JavaScript Objects
const obj = {
  id: 1,
  name: 'js',
  total: function() {
    return this.id + ': ' + this.name;
  }
};
console.log(obj.id);  // 1
console.log(obj.name);  // js
console.log(obj.total());  // 1: js
