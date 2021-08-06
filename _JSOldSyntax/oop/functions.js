// JavaScript Functions
//------------------------------------------------------------

// Solution 1
function greet(name) {
    return "Hello " + name + "!";
}

console.log(greet("Eric"));      // prints out Hello Eric!

// Solution 2
var greet = function (name) {
    return "Hello " + name + "!";
}
console.log(greet("Eric"));      // prints out Hello Eric!

//------------------------------------------------------------
// Callbacks in JavaScript are Functions that are
// passed as arguments to other Functions!!!!!!!
var callback = function () {
    console.log("Done!");
}

setTimeout(callback, 5000); // This code waits 5 seconds and prints out "Done!"

// It is also possible to define callbacks as anonymous Functions, like so:
setTimeout(function () {
    console.log("Done!");
}, 5000);
//------------------------------------------------------------
var person = {name: "John"};

function printName() {
    console.log(this.name);
}

// Binding a method to an object
// Obviously, we are not able to call printName() without associating the function
// with the object person. To do this we must create a bound method of the function
// printName to person, using the following code:
var boundPrintName = printName.bind(person);
boundPrintName();    // prints out "John"

// Calling a function with a different context
// We can use the call and apply Functions to call a function as if it was bound to an object.
printName.call(person);      // prints out "John"
//------------------------------------------------------------
var x = myFunction(4, 3);   // Function is called, return value will end up in x
function myFunction(a, b) {
    return a * b;             // Function returns the product of a and b
}

function toCelsius(f) {
    return (5 / 9) * (f - 32);
}

// <script>document.getElementById("demo").innerHTML = toCelsius(77);</script>

// Functions Used as Variable Values
var x = toCelsius(77);
var text = "The temperature is " + x + " Celsius";

// Functions
function func1() {
    console.log("Hello world");
}

func1();

// Functions with Arguments
function func2(a, b) {
    console.log(a - b);
}

func2(10, 5); // Outputs 5

//-----------------------------------------------------------------------------------
// Global Scope and Functions
// Declare your global variable here
var myGlobal = 10;

function fun1() {
    // Variables which are used without the var keyword
    // are automatically created in the global scope.
    oopsGlobal = 5;
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

//-----------------------------------------------------------------------------------
//Local Scope and Functions
function myTest() {
    var loc = "foo";
    console.log(loc);
}

myTest(); // logs "foo"
// console.log(loc); // Error: loc is not defined

//-----------------------------------------------------------------------------------
// Return a Value from a Function with Return
function plusThree(num) {
    return num + 3;
}

let answer = plusThree(5); // 8

// Without return the function return Undefined value!!!
let sum = 0;

function addSum(num) {
    sum = sum + num;
}

let returnedValue = addSum(3); // sum will be modified but returned value is undefined
