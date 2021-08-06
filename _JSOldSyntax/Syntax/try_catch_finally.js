"use strict";

const arr = [1, 4, 3, 4, 5];

try {
    arr = [4, 2];
    console.log(arr.sort());
}
catch (e) {
    console.log(e.message);
}
finally {
    console.log(arr.sort());
}

//-----------------------------------------
// console.error()
// console.warn()
function sum(a, b) {
    var result = a - b;
    console.error("The sum of " + a + " and " + b + " is " + result);
    console.warn("Something");
    return result;
}

//-----------------------------------------
// Throw
function throwString() {
    // Generate an exception with a String value
    throw "some exception";
}

function throwFalse() {
    // Generate an exception with a boolean value of false
    throw false;
}

function throwNumber() {
    // Generate an exception with a Number value of -1
    throw -1;
}

try {
    throwString();
}
catch (e) {
    console.log(e);
}

try {
    throwFalse();
}
catch (e) {
    console.log(e);
}

try {
    throwNumber();
}
catch (e) {
    console.log(e);
}

//-----------------------------------------
// throw new Error(customError)
ar input = "";
process.stdin.on('data', function (data) {
    input = String(data).trim();
    main();
});
/** Ignore above this line. **/

function throwMyError() {
    // Generate an exception with a value read from stdin
    throw new Error(input);
}

function main() {
    try {
        throwMyError();
    }
    catch (e) {
        console.log(e.message);
    }
}

//-----------------------------------------
"use strict";
var input = "";
var index = 0;
process.stdin.on('data', function (data) {
    input = String(data).split(" ");
    main();
});
function readLine() { return +(input[index++]); }
/**** Ignore above this line. ****/

/*
 * This function returns the value at index pos (i.e., arr[pos]).
 *
 * If the index 'pos' is outside of the bounds of the array (i.e., value of arr[pos] is 'undefined'), throw errors.
 */
function getValue(arr, pos) {
    if (pos < 0) {
        throw new Error("Index Underflow: " + pos);
    }

    let len = arr.length;

    if (pos >= len) {
        throw new Error("Index Overflow: " + pos);
    }

    return arr[pos];
}

function main() {
    var index;
    const arr = [1, 2, 3, 4, 5];
    try {
        index = readLine()
        console.log(getValue(arr, index));
    }
    catch (e) {
        console.log(e.message);
    }

    try {
        index = readLine();
        console.log(getValue(arr, index));
    }
    catch (e) {
        console.log(e.message);
    }

    try {
        index = readLine();
        console.log(getValue(arr, index));
    }
    catch (e) {
        console.log(e.message);
    }
}
