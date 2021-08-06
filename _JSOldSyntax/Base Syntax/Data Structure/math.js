// ---------- MATH ----------
let x = 5;
x++;
let z = x; // 6
x = 5;
x--;
z = x; // 4

// Trigonometric Functions (takes a value in radians)
document.write(Math.log(1) + '<br/>');  // // Natural log, returns 0
document.write(Math.log(10) + '<br/>'); // 2.302585092994046
document.write(Math.log10(10) + '<br/>'); // Base 10 log
document.write(Math.sin(Math.PI / 2) + '<br/>'); // 1
document.write(Math.cos(0) + '<br/>'); // 1
document.write(Math.tan(Math.PI / 4) + '<br/>'); // 0.9999999999999999
document.write(Math.cos(Math.PI / 4) + '<br/>'); // 0.7071067811865476
document.write(Math.asin(0.9) + '<br/>'); // 1.1197695149986342
document.write(Math.acos(1) + '<br/>'); // 1
document.write(Math.atan(1) + '<br/>'); // 0.7853981633974483

// constants
document.write(Math.PI); // 3.141592653589793
document.write(Math.SQRT2); // 1.4142135623730951
document.write(Math.SQRT2); // (квадратный корень из двух): 1.4142135623730951
document.write(Math.SQRT1_2); //половина от квадратного корня из двух: 0.7071067811865476
document.write(Math.E); // (число e или число Эйлера): 2.718281828459045
document.write(Math.LN2); // (натуральный логарифм числа 2): 0.6931471805599453
document.write(Math.LN10); // (натуральный логарифм числа 10): 2.302585092994046
document.write(Math.LOG2E); // (двоичный логарифм числа e): 1.4426950408889634
document.write(Math.LOG10E); // (десятичный логарифм числа e): 0.4342944819032518

// Математические операции

var x = 55;
var res = x + 10;
console.log(res);

res++;
console.log(res);
res--;
console.log(res);

// префиксный ИНКРЕМЕНТ, который сначала увеличивает переменную на единицу, а затем возвращает ее значение
var x = 5;
var z = ++x;
console.log(x); // 6
console.log(z); // 6

// постфиксный ИНКРЕМЕНТ, который сначала возвращает значение переменной, а затем увеличивает его на единицу
var a = 5;
var b = a++;
console.log(a); // 6
console.log(b); // 5

// префиксный ДЕКРЕМЕНТ
var x = 5;
var z = --x;
console.log(x); // 4
console.log(z); // 4

// постфиксный ДЕКРЕМЕНТ
var a = 5;
var b = a--;
console.log(a); // 4
console.log(b); // 5

var x = 10;
var y = 5 + (6 - 2) * --x; //41

var a = 23;
a += 5; // аналогично a = a + 5 	// 28
a -= 10; // аналогично a = a - 10   // 13


var x = 5;

var y = x + 50;
console.log(y);
