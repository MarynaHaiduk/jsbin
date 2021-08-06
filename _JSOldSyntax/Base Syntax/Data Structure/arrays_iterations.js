// -------------------------------------------------------------------
// array iteration
// -------------------------------------------------------------------

const arr = [1, 2, 3, 4, 5]
console.log(...arr);            // 1 2 3 4 5
console.log(arr);               // [1, 2, 3, 4, 5]
console.log(arr.toString());    // 1,2,3,4,5


for (let i = 0; i < arr.length; i++) {
    console.log(arr[i], i);
}


for (let i of arr) {
    console.log(i);
}


let text = "";
arr.forEach(func);

function func(value) {
    text += value;
}
console.log(text);  // 123456


for (let i in arr) {
    console.log(arr[i]);
}