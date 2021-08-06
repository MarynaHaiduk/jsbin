// ---------------------------------------------------------------------
// ************************* JS String methods *************************
// ---------------------------------------------------------------------

let s = "JavaScript";

console.log(typeof s);  	   		// "string"
console.log(s + " " + s);  	   		// string concatenation
console.log(s.length);  	   		// 10, string length
console.log(s.repeat(3));  	// repeat the string n times
console.log(`Hello, ${s}`);    		// "Hello, JavaScript"
console.log(`Sum of numbers: ${1 + 2}`);  // "Sum  3"


// Converting to Upper and Lower Case
console.log(s.toLowerCase());  		// "javascript"
console.log(s.toUpperCase());  		// "JAVASCRIPT"


// Remove whitespaces (both sides, left, right)
console.log(" JS ".trim());         // "JS"
console.log(" JS ".trimLeft());     // "JS "
console.log(" JS ".trimRight());    // " JS"


// Returns the character at an index
console.log(s[0]);                  // "J", first symbol
console.log(s[s.length - 1]);       // "t", last symbol
console.log(s.charAt(0));           // "J" (or returns an empty string)
console.log(s.charCodeAt(0));       // 74 (returns the unicode)
console.log(""[0]);                 // returns undefined 


// Finding a string in a string
console.log(s.indexOf("v"));        // 2 - the index of 1st occurrence or -1
console.log(s.lastIndexOf("v"));    // 2 (the index of last occurrence or -1)
console.log(s.indexOf("v", 2));     // 2 - return the index from this position
console.log(s.search("v"));  // 2 - returns the position of the match (RegExp)
console.log(s.search("[a-z]+"));  // 1 (or returns -1)
console.log(s.match("[a-z]+"));   // ["ava"] (or returns null)


// Extracting string parts
console.log(s.slice(0));            // "JavaScript", return all after the start index
console.log(s.slice(3, 5));         // "aS", values from a start to end index (not included)
console.log(s.substr(3));           // "aScript", similar to slice(), but without negative indexes
console.log(s.substr(3, 2));  // "aS", return the value using the start index and LENGTH
console.log(s.substr(-4));          // "ript", without the 2nd parameter, it's slice out until the end
console.log(s.substring(0, 5));          // "JavaS", slice=substring from 0 to 5 (5th not included)


// Concatenation
console.log(s + s);                 // concatenation
console.log(s.concat(" ", s));      // "JavaScript JavaScript",  joins two or more strings
s += s;
console.log(s);                     // "JavaScriptJavaScript"


console.log(" ***  ");
console.log(s.startsWith(1));       // false, true/false if start with
console.log(s.endsWith(3));         // false, true/false if end with
console.log(s.includes("3"));       // false, true/false if value in the string

// Code output: \n newline, \r carriage return, \t tab, \b backspace, \f form feed
