s = "text";

console.log(s.length);
console.log(s.indexOf('e'));  // first occurrence or -1
console.log(s.lastIndexOf('e'));  // last occurrence or -1
console.log(s.indexOf('t', 3));
console.log(s.lastIndexOf('t',6));
let arr = s.split(" "); // split a string into an array
console.log(arr);  // [ 'text' ]
console.log(s);
s.replace("t", "*"); // replace only the 1st match and casesensitive
console.log(s);

// var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var nums = "1234512345"
// Removes whitespace
// RegExp removes whitespace except 1st where \s means "match whitespace"
// s.replace(/\s+/g, " ");
//
// Additional
// var myString = String(10);
//
// // Extracting String Characters
// // Replace a string
// s.replace(/H/i, "*");			// to replace case insensitive
// s.replace(/l/g, "*");			// to replace all matches
//
// let str3 = `Sum  ${1 + 2}`;
// console.log(str3);  // "Sum  3"
