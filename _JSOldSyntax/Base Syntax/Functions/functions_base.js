// -------------------------------------------------------------------
// *************************** Functions *****************************
// -------------------------------------------------------------------

let funcHello = function () {
    return "Hello World!";
}
console.log(funcHello());


// with parameters
function sayHello(item) {
    console.log(`Hello, ${item}`);
}

sayHello('Item 1');
sayHello('Item 2');

function mult(a = 1, b = 1) {
    return a * b;
}

console.log(mult(2, 4)); // 8
console.log(mult(2));  // 2
console.log(mult());  // 1

// -------------------------------------------------------------------
// arrow function
const arrowFunc = () => {
    console.log("arrow function");
}
arrowFunc();


// Arrow Functions
let func1 = () => {
    return "Hello World!";
}
console.log(func1());


// Arrow Functions Return Value by Default:
let func2 = () => "Hello World!";
console.log(func2());


// Arrow Function With Parameters:
let func3 = (val) => "Hello " + val;
console.log(func3("world!"));


// Arrow Function Without Parentheses:
let func4 = val => "Hello " + val;
console.log(func4("world!"));

// -------------------------------------------------------------------
// *** Function declaration. Can be called before it is announced.
console.log(sum(1, 2)); // 3

function sum(a, b) {
    return a + b;
}

console.log(sum(sum(1, 2), sum(2, 3))); // 8