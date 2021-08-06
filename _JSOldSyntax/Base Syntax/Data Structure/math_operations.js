// -------------------------------------------------------------------
// *********************** Math properties and methods ***************
// -------------------------------------------------------------------

// rounds a number to the next largest integer
console.log(Math.ceil(9.2)); // 10
console.log(Math.ceil(-5.9)); // -5

// rounds a number to the next smallest integer
console.log(Math.floor(9.2)); // 9
console.log(Math.floor(-5.9)); // -6

// rounds a number to the next smallest integer if number < 0.5
// or to the next largest integer if number >= 0.5
console.log(Math.round(5.5)); // 6
console.log(Math.round(5.4)); // 5
console.log(Math.round(-5.4)); // -5
console.log(Math.round(-5.5)); // -5
console.log(Math.round(-5.6)); // -6

console.log(Math.random()); // returns random number from 0 to 1
console.log("Random # (1-10) = ", Math.floor((Math.random() * 10) + 1));

console.log("Math.pow(5,2) = ", Math.pow(5, 2));
console.log("Math.abs(-8) = ", Math.abs(-8));

console.log("Math.max(10,5) = ", Math.max(10, 5));
console.log("Math.min(10,5) = ", Math.min(10, 5));

console.log("Math.ceil(6.45) = ", Math.ceil(6.45));
console.log("Math.floor(6.45) = ", Math.floor(6.45));
console.log("Math.round(6.45) = ", Math.round(6.45));

console.log(Math.sqrt(81), Math.sqrt(81));
console.log(Math.sqrt(26), Math.sqrt(26));
console.log("Math.cbrt(1000) = ", Math.cbrt(1000));

console.log("Math.E = ", Math.E);
console.log("Math.PI = ", Math.PI);

console.log("Math.log(10) = ", Math.log(10)); // Natural log
console.log("Math.log10(10) = ", Math.log10(10)); // Base 10 log
