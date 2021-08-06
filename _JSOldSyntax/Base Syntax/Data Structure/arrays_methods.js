// -------------------------------------------------------------------
// ***************** Arrays (can contain multiple types) *************
// -------------------------------------------------------------------

let arr = [1, 2, 3, 5];

console.log("Length:", arr.length);
console.log("First element:", arr[0]);
console.log("Reverse:", arr.reverse());
console.log("Sorting:", arr.sort());
console.log("Check if contain this number:", arr.includes(1));
console.log("Concatenation:", arr[0] + arr[2]);
arr[4] = 6;
console.log("Change an element:", arr);
arr[arr.length] = 7;
console.log("Add to the end:", arr);
arr.push(7); // add items to the end and returns new length
console.log("Change an element with push():", arr);
const newLength = arr.push(1, 2, 3);
console.log(arr, newLength);
arr.unshift(0);
console.log("Add value to begin:", arr);
let removed = arr.pop();
console.log("Remove last value:", removed, arr);
console.log("Check if array:", Array.isArray(arr));
console.log("Get index:", arr.indexOf(3));

// Overwrite the item with index 2 (index where change, number of items to exchange)
arr.splice(1, 1, 8);
console.log(arr);  // [1,  8,  3, 5, 7, 55, 77]

arr.splice(1, 3, 8);
console.log(arr);  // [ 1, 8, 7, 55, 77 ]

arr.unshift(4);
console.log(arr);  // add element to the start and returns new length
const newLength2 = arr.unshift(1, 2, 3);
console.log(arr, newLength2);

// delete
arr.splice(3, 1);   // delete the 4th index item
arr.shift();  // delete the first item and return it
arr.pop();  // remove the last item and return it
delete arr[1];  // delete an index

// create array
const emptyArr1 = Array();
const createArr = [1, 2, 3]; // same as arr = [1, 2, 3]
const createArrWith = Array.of(1, 2, 3);

let create_arr = [];
for (let i = 1; i < 11; i++) {
    create_arr.push(i);
}
console.log(create_arr);  // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
