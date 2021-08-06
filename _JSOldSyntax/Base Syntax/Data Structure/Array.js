
// Sort numbers
// var numbers = [4,3,9,1,20,43];

// // Descending sort return y - x
// numbers.sort(function(x,y){ return x - y });
// document.write("Num Array : ", numbers.toString(), "<br />");

// // Convert an array into a string (Also use toString())
// document.write("Array : ", tomSmith.valueOf(), "<br />");
// // Convert an array into a string with separator
// document.write("Array : ", tomSmith.join(", "), "<br />");

// // Sort an array (reverse() for reverse sort)
// // Works for sorting strings
// tomSmith.sort();


// // Combine arrays
// var combinedArray = numbers.concat(tomSmith);

// // Adds item to the first index
// tomSmith.unshift("Tom Smith");


// Массивы
var myArray = [];  // пустой массив или как ниже
var myArray = []; 			// пустой массив

var people = ["Tom", "Alice", "Sam"];
var objects = ["Tom", 12, true, 3.14, false];      // один массив может хранить данные разных типов

console.log(people);
console.log(people[2]);
console.log(people[7]);	// undefined

people[0] = "Bob";
console.log(people[0]);  // Bob
people[7] = "Bob";   // Причем в отличие от других языков,можно установить элемент, который изначально не установлен!!!!!
console.log(people[7]);

let numbers1 = [1, 2, 3, 4];
// spread-оператор ... позволяет взять значения из массива по отдельности, не массивом
console.log(...numbers1);    // 1 2 3 4
console.log(numbers1);       // [1, 2, 3, 4]


// Многомерные массивы
var numbers2 = [[0, 1, 2], [3, 4, 5]]; // двумерный массив
console.log(numbers2[0][0])

var numbers = [];
console.log(numbers);
numbers[0] = []; 				// теперь numbers - двумерный массив
console.log(numbers);
numbers[0][0] = []; 				// теперь numbers - трехмерный массив
console.log(numbers);
numbers[0][0][0] = 5; 			// первый элемент трехмерного массива равен 5
console.log(numbers);
console.log(numbers[0][0][0]);

// Create an array
var empty_arr = [];
var users = [];
var arr = ["one", 1, 2, 3];

// Add items (or change)
arr[0] = 1;
console.log(arr);

// Returns the number of elements
console.log(arr.length);
// the length of the array will be the index of the last element + 1
var users = [];
users[0] = "Tom";
users[1] = "Kate";
users[4] = "Sam";
for (var i = 0; i < users.length; i++) {
    document.write(users[i] + "<br/>");
}  // returns Tom Kate undefined undefined Sam


// Array iterration
for (var i = 0; i < arr.length; i++) {
    document.write(arr[i] + "<br/>");
}

// Additional
arr[0];                   // Access first array item
arr[arr.length - 1]       // Access the Last array item
arr.indexOf('second');    // Find the index of an item in the array
arr.slice(1);             // Slices out an array from element 1 into a new array
arr.slice(1, 3);          // Selects elements from the start argument,
                          // and up to (but not including) the end argument.

console.log([0, 1, 2][0, 1]);   // arr slice - returns 1
console.log([0, 1, 2][1, 2]);   // arr slice - returns 2

// An array is a special variable, which can hold more than one value at a time.
const arr2 = [];     						// Creating an Array - Good
const arr1 = [];       // Creating an Array - Bad
var points = [40, 100];// Creates an array with two elements (40 and 100)
var points = new Array(40);  		// Creates an array with 40 undefined elements !!!

// Access Multi-Dimensional Arrays With Indexes
var arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];
arr[3];           						// equals [[10,11,12], 13, 14]
arr[3][0];        						// equals [10,11,12]
arr[3][0][1];     						// equals 11


arr.splice(2, 0, "a", "b");	  // Insert at position/how many elements remove/elements
// The 1st parameter (2) defines the position where
// new elements should be added (spliced in).
// The 2nd parameter (0) defines how many elements
// should be removed. The rest of the parameters
// define the new elements to be added
// Returns an array with the deleted items

arr.unshift("four");          // Adds item to the first index
arr.concat(["1", "2", "3"]);  // Merging an Array with Values
// Creates a new array by merging existing arrays
// Can take any number of array arguments
arr.push("555", "four");      // Append to the End of an Array
arr[arr.length] = "Lemon";    // Append to the End of an Array using the length
// Adding elements with high indexes can create
// undefined "holes" in an array!!!

arr.shift();                  // Remove the first element from the array
arr.pop();                    // Remove the last element from the array
arr.splice(2, 2);             // Remove an Item by Index Position
// Remove from this index/how many elements
// Remove elements without leaving "holes" in the array
arr.splice(0, 1);        			// Removes the first element of array
// The splice() method returns an array with the deleted items
delete arr[3];                // Delete an index (changes an item to undefined)
// Using delete may leave undefined holes in the array.
// Use pop() or shift() instead.

arr.toString();               // Converts an array to a string (comma separated)
arr.join("*"); 							  // Convert an array into a string with separator
// Same as toString(), but can be with the separator

arr.sort();  									// Sorts an array alphabetically
arr.reverse();                // Reversing an Array
let b = arr.slice();          // Shallow copy array into a new object

// Numeric Sort
var points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
    return a - b
});   // sort asc with a compare function
points.sort(function (a, b) {
    return b - a
});   // sort desc with a compare function
points.sort(function (a, b) {
    return 0.5 - Math.random()
}); // sort an array in random order


document.write("Array : ", arr.valueOf(), "<br />");
arr.includes('value');              // true/false есть ли значение в массиве
console.log(Array.isArray(arr));    // check if it an array
console.log(arr2.indexOf('one'));   // return index of element
console.log(arr2);
console.log(arr[1].toUpperCase());
//-----------------------------------------------------------------------------------
// How do I know if a variable is an array?
// Solution 2:
Array.isArray(arr);   // The new ES5 method isArray returns true when used on an array

// Solution 2:
// To solve this problem you can create your own isArray() function:
function isArray(x) {
    return x.constructor.toString().indexOf("Array") > -1;
}

// The function above always returns true if the argument is an array.
// Or more precisely: it returns true if the object prototype contains the word "Array".

//Solution 3:
// The instanceof operator returns true if an object is created by a given constructor:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits instanceof Array;   // returns true
//-----------------------------------------------------------------------
// Sort numbers
var numbers = [4, 3, 9, 1, 20, 43];
// Descending sort return y - x
numbers.sort(function (x, y) {
    return x - y
});
document.write("Num Array : ", numbers.toString(), "<br />");
for (var i = 0; i < arr.length; i++) {
    document.write(arr[i], "<br />");
}

//-----------------------------------------------------------------------------------
//3. Loop Over an Array
var a = ['first', 'second'];
a.forEach(function (e, i, array) {
    // 'i' is the index
    // 'e' is the element
    console.log(i + ' ' + e);
});

var a = ['c', 'a', 'd', 'b', 'aa'];
var b = [9, 2, 13, 7, 1, 12, 123];
// Sort in descending lexicographical order using a compare function
a.sort(function (x, y) {
    return x < y;
});
b.sort(function (x, y) {
    return x < y;
});

var a = ['c', 'a', 'd', 'b', 'aa'];
// Sort in descending lexicographical order using a compare arrow function
a.sort((x, y) => x < y);
console.log('a:', a);
