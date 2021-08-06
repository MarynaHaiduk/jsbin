// -----------------------------------------------------
// *************** JS Arrays iterrations **************
// -----------------------------------------------------

// Get numbers from 5 to 0.

let arr = [];

for (let i = 5; i >= 0; i--) {
  arr.push(i);
}

console.log(arr);  // [5, 4, 3, 2, 1, 0]

//-----------------------------------------------------

// Get even numbers from 0 to 10.

arr = [];

for (let i = 0; i < 10; i += 2) {
  arr.push(i);
}

console.log(arr);  // [0, 2, 4, 6, 8]

//-----------------------------------------------------

// Create the array.

function fillArray(n){
  let arr = [];
  
  for (let i = 0; i <= n; i++) {
    arr.push(i);
  }
  
  return arr;
}

console.log(fillArray(5));  // [0, 1, 2, 3, 4, 5]

//-----------------------------------------------------

// Create the array from a numbers to b.

function fillArray(a, b){
  
 let arr = [];
 for (a; a <= b; a++) {
   arr.push(a);
 }
  return arr;
}

console.log(fillArray(3, 5));  // [3, 4, 5]

//-----------------------------------------------------

// Iterate Over One-dimensional Array

const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}  // 1 2 3 4 5



for (let each of arr){
  console.log(each);
}  // 1 2 3 4 5 


//-----------------------------------------------------

// Iterate Over Multi-dimensional Array

let arr = [[1, 2], [3, 4], [5, 6]];

for (let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}  // 1 2 3 4 5 6



const obj = {a: 1, b: 2, c: 3, d: 4};

for (i in obj) {
    console.log(i + ': ' + obj[i]);
}  // "a: 1" "b: 2" "c: 3" "d: 4"



const obj2 = ['first', 'second', false];

for (let i in obj2) {
    console.log(i + ' ' + obj2[i]);
}  // "0 first"  "1 second"  "2 false"


//-----------------------------------------------------

const arr = ['a', 'b', 'c', 'd'];

arr.forEach((value, index, array) => {
    console.log('index=', index, 'value=', value,
    'array[' + index + ']:', array[index]);
});  
// "index=" 0 "value=" "a" "array[0]:" "a" 
// "index=" 1 "value=" "b" "array[1]:" "b" 
// "index=" 2  "value=" "c" "array[2]:" "c"
// "index=" 3 "value=" "d" "array[3]:" "d"



arr.forEach((value, index) => {
    console.log('index=', index, 'value=', value);
});
// "index=" 0 "value=" "a"
// "index=" 1 "value=" "b"
// "index=" 2 "value=" "c"
// "index=" 3 "value=" "d"



arr.forEach((value) => {
    console.log('value=', value);
});
// "value=" "a" "value=" "b" "value=" "c" "value=" "d"

//-----------------------------------------------------
