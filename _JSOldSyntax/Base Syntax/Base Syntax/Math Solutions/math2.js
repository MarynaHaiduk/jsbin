// ---------- MATH ----------
let x = 5; x++; let z = x; // 6
x = 5; x--; z = x; // 4
x = 5; z = x ** 2; // 25
x = 10; x += 5; // 15
x = 10; x -= 5; // 5
x = 10; x *= 5; // 50
x = 10; x /= 5; // 2
x = 10; x %= 5; // 0

// rounds a number to the next largest integer
document.write(Math.ceil(9.2) + "<br/>"); // 10
document.write(Math.ceil(-5.9) + "<br/>"); // -5

// rounds a number to the next smallest integer
document.write(Math.floor(9.2) + "<br/>"); // 9
document.write(Math.floor(-5.9) + "<br/>"); // -6

// rounds a number to the next smallest integer if number < 0.5
// or to the next largest integer if number >= 0.5
document.write(Math.round(5.5) + "<br/>"); // 6
document.write(Math.round(5.4) + "<br/>"); // 5
document.write(Math.round(-5.4) + "<br/>"); // -5
document.write(Math.round(-5.5) + "<br/>"); // -5
document.write(Math.round(-5.6) + "<br/>"); // -6

// returns random number from 0 to 1
document.write(Math.random() + "<br/>");

// Math properties and methods
document.write(Math.abs(-5) + "<br/>"); // 5
document.write(Math.pow(5,2) + "<br/>");  // 25
document.write(Math.min(1,2,3) + "<br/>"); // 1
document.write(Math.max(1,2,3) + "<br/>"); // 3
document.write(Math.sqrt(81) + "<br/>");  // 9
document.write(Math.sqrt(26) + "<br/>");  // 5.0990195135927845

// Trigonometric Functions (takes a value in radians)
document.write(Math.log(1) + "<br/>");  // // Natural log, returns 0
document.write(Math.log(10) + "<br/>"); // 2.302585092994046
document.write(Math.log10(10) + "<br/>"); // Base 10 log
document.write(Math.sin(Math.PI/2) + "<br/>"); // 1
document.write(Math.cos(0) + "<br/>"); // 1
document.write(Math.tan(Math.PI/4) + "<br/>"); // 0.9999999999999999
document.write(Math.cos(Math.PI/4) + "<br/>"); // 0.7071067811865476
document.write(Math.asin(0.9) + "<br/>"); // 1.1197695149986342
document.write(Math.acos(1) + "<br/>"); // 1
document.write(Math.atan(1) + "<br/>"); // 0.7853981633974483

// constants
document.write(Math.PI); // 3.141592653589793
document.write(Math.SQRT2) // 1.4142135623730951
document.write(Math.SQRT2); // (квадратный корень из двух): 1.4142135623730951
document.write(Math.SQRT1_2); //половина от квадратного корня из двух: 0.7071067811865476
document.write(Math.E); // (число e или число Эйлера): 2.718281828459045
document.write(Math.LN2); // (натуральный логарифм числа 2): 0.6931471805599453
document.write(Math.LN10); // (натуральный логарифм числа 10): 2.302585092994046
document.write(Math.LOG2E); // (двоичный логарифм числа e): 1.4426950408889634
document.write(Math.LOG10E); // (десятичный логарифм числа e): 0.4342944819032518
