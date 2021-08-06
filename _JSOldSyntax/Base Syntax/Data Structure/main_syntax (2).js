// ----------------------------------------------------------------
// *********************** Math ***********************************
// ----------------------------------------------------------------
console.log(5 % 2);  			  // 1, returns reminder 
console.log(4 ** 1 / 2);  		  // square root
console.log(9 ** 1 / 3);  		  // cube root
console.log(+'5', typeof (+'5')); // 5, "number"

let i = 5;
console.log(i++, i);  	// 5, 6 (increase i, return _old syntax value)
console.log(++i, i);  	// 7, 7 (increase i, return new value) 
console.log(i--, i);  	// 7, 6 (decrease i, return _old syntax value)
console.log(--i, i);  	// 5, 5 (decrease i, return _old syntax value)
console.log(-i);      	// -5

console.log('1' + 2, typeof ('1' + 2)); 		// "12", "string"
console.log(+true, typeof (+true));  		// 1, "number"
console.log(+'2', typeof (+'2'));   			// 2, "number"
console.log(+null, typeof (+null));  		// 0, "number"
// for all math operations except '+'!!!
console.log(2 - '1', typeof (2 - '1'));   	// 1, "number"
// for all math operations except '+'!!!
console.log('6' / '2');  					// 3, "number" 
console.log(+'1a');  						// NaN
console.log('w' * 3);  						// NaN

const a = '8';
const b = '12';
const sum = +a + +b;
console.log(sum);  // 20

let a;
let b = 2;
let c = 3 - (a = b + 1);
console.log(c);  // 0

// оператор возведения в степень ** имеет приоритет выше, чем у унарных операторов
// console.log(-2 ** 2);   // Это некорректно в JavaScript
console.log(-(2 ** 2));    // -4 в JavaScript

// Find fisrst number and last from digit
const num = 23;
const firstDigit = +('' + num)[0];
const secondDigit = num % 10;
const sum = firstDigit + secondDigit;
console.log(num, firstDigit, secondDigit, sum);

// ------------------------------------------------------------------
// *********************** Logic operations *************************
// ------------------------------------------------------------------
let num1 = 1;
let num2 = 5;

let res1 = num1 > 0 && num2 < 10;   // true, if both returns true
let res2 = num1 > 5 || num2 < 10;   // true, if at least one return true
let res3 = !false;					// true, if operation return false
let res4 = !!true;					// true, if operation return true
console.log(res1, res2, res3, res4);

// ------------------------------------------------------------------
// ***********************  JS Data Types **********************
//-------------------------------------------------------------------

// Object
// Пустой объект можно создать двумя способами:
let user = {}; 		// "конструктор объекта"
let user2 = {};           		// "литерал объекта"


let person = {
  name: 'Mike',
  age: 25,
  address: null,
  'likes programming': true,
};

person.address = {
  city: 'San Francisco',
  state: 'CA',
};

console.log(person);
console.log(person.name);  					// "Mike"
console.log(person['name']);  				// "Mike"
console.log(person.address.city);  			// "San Francisco"
console.log(person['likes programming']); 	// true

// Add key of object
person.address.zip = 11111;
console.log(person.address.zip);  			// 11111

// Delete key of object
delete person.address.zip;
console.log(Boolean(person.address.zip));  	// false, (we delete it)

// Check if has property
console.log(Boolean(person.name.hasOwnProperty)); // true
console.log(person.hasOwnProperty('age'));   	  // true !!!
console.log('address' in person);  				  // true !!!
if (person.age) {
  console.log('Yes');
}   		  // 'Yes'
console.log(person.address === undefined);  	  // false 
console.log(Boolean(person.age));				  // true

// Iterate through the object
const i = 'address';
const j = 'city';
console.log(person[i][j]);  				// "San Francisco"

// Count income in stores
const shop1 = { count: 900, price: 1.4 };
const shop2 = { count: 1200, price: 1.3 };
const total = shop1.price * shop1.count + shop2.price * shop2.count;

// Count number
const trip = { 'teachers': 4, '9a': 15, '9b': 17, '10a': 12 };
const count = trip.teachers + trip['9a'] + trip['9b'] + trip['10a'];

//--------------------------------------------------------------------

// When key === value
const name = 'Mike';
const age = 33;

const user = {
  name,
  age,
};

console.log(user);  // [object Object] { age: 33, name: "Mike" }
//--------------------------------------------------------------------
// ****************** Comparison *************************************
// -------------------------------------------------------------------
console.log(2 > 1); 		 // true, верно
console.log(2 == 1); 		 // false, неверно
console.log(2 != 1); 		 // true
console.log(true || false);  // true
console.log(true && false);  // false
console.log(12 || 0);  		 // 12
console.log(2 && 0);  		 // 0
console.log(false || undefined || '' || null || 12 || 0); // 12, first true!!!
console.log(2 && 6 && 'hjkj' && 0);  // 0, returns first false
console.log(NaN || 3 < 0 || 1);  // 1
console.log(NaN || 3 < 0);  	// false, or return last false!!!

// '||' Return first TRUE!!! (or last false)
console.log(true || true); 	// true
console.log(false || true); 	// true
console.log(true || false); 	// true
console.log(false || false); 	// false

// '&&' return first FALSE!!! (or last true)
console.log(true && true);  	// true
console.log(false && true); 	// false
console.log(true && false); 	// false
console.log(false && false); 	// false
console.log(2 && 3); 			// 3
console.log(0 && 3);       	// 0

// Приоритет '&&' над '||' !!!
console.log(1 || 3 && 0);  				// 1
console.log(1 || 3 && 0 || null && 2);  // 1
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// Weekend
const day = 5;
const isWeekend = day === 6 || day === 7;

console.log(!true); 			// false
console.log(!0); 				// true
console.log(!!'string'); 		// true
console.log(!!null); 			// false
console.log(typeof x !== 'number');
console.log(!(typeof x === 'number'));

// -------------------------------------------------------------------
// *********************** Loops and Statements **********************
// -------------------------------------------------------------------

// if- else If - else
let a = 5;

if (a < 0) {
  console.log('negative');
} else if (a === 0) {
  console.log('negative');
} else {
  console.log('positive');
}

// -------------------------------------------------------------------

// Ternary operation
let res = (2 > 10) ? 'ON' : 'OFF';
console.log(res);  // "OFF"

let num = 5;
let result = (num % 2 == 0) ? 'even' : 'odd';  // even

// -------------------------------------------------------------------

// Switch
let day = 6;
switch (day) {
  case 6: // (*) группируем оба case
  case 7:
    console.log('weekend');
    break;
  default:
    console.log('work day');
}

let month = 3;
let season;

switch (month) {
  case 12:
  case 1:
  case 2:
    season = 'Winter';
    break;
  case 3:
  case 4:
  case 5:
    season = 'Spring';
    break;
  case 6:
  case 7:
  case 8:
    season = 'Summer';
    break;
  case 9:
  case 10:
  case 11:
    season = 'Fall';
    break;
  default:
    season = 'Error';
}

// -------------------------------------------------------------------

// while
let res = true;

while (res) {
  console.log('Hello');
  res = false;
}

// -------------------------------------------------------------------

// do - while
do {
  console.log('Hello');
  break;
} while (true);

// -------------------------------------------------------------------

// For
for (let i = 1; i <= 10; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
  console.log('************');
}

for (let i = 0; i < 5; i++) {
  // do something
}  // 5 итераций

for (let i = 0; i < 5; ++i) {
  // do something
}  // 5 итераций

// -------------------------------------------------------------------
let arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
let sum = 0;
let i = 0;

while (i < arr.length) {
  sum += arr[i];
  i++;
}

// -------------------------------------------------------------------

const arr2 = [[5, 7], [3, 2], [6, 8], [9, 3]];
let count = 0;

for (let i = 0; i < arr2.length; i++) {
  count += arr2[i][0] - arr2[i][1];
}
console.log(count);  // 3

// -------------------------------------------------------------------

const arr2 = [
  { in: 10, out: 15 },
  { in: 10, out: 15 },
  { in: 10, out: 15 },
];

let count = 0;

for (let i = 0; i < arr2.length; i++) {
  count += arr2[i].in - arr2[i].out;
}
console.log(count);  // -15

// -------------------------------------------------------------------
// Вывод массива с "дырами"
const arr = [];
arr[0] = 0;
arr[3] = 3;
console.log(arr); // [0, undefined, undefined, 3]

// Приведенный выше пример будет эквивалентен следующему способу задания массива:
const arr = [0, , , 3];
console.log(arr); // [0, undefined, undefined, 3]

//-----------------------------------------------------
//****************** Functions ************************
//-----------------------------------------------------

// Hoisting
console.log(sum(2, 3));  // 5
function sum(a, b) {
  return a + b;
}

//-----------------------------------------------------
console.log(mult(2, 4));  // 8
//-----------------------------------------------------
const a = mult;
console.log(a(2, 4));  // 8

function mult(a, b) {
  return a * b;
}

//-----------------------------------------------------
function sum(a, b) {
  return a + b;
}

let x = 8;
let y = 145;
let add = sum(x, y);  // вызов функции sum с параметрами x = 8, y = 145
console.log(add);            //153
console.log(sum(x, y));      //153
console.log(sum(2, 18));     //20
console.log(sum(x + 2, y - 5));  //150

//-----------------------------------------------------

function mult(a, b) {
  return a * b;
}

console.log(mult(2, 7)); // 14
console.log(mult(2)); // NaN
console.log(mult()); // NaN

function mult(a = 0, b = 0) {
  return a * b;
}

function mult(a = 0, b = 0) {
  return a * b;
}

console.log(mult(6, 9)); // 54
console.log(mult(2)); // 0
console.log(mult()); // 0

//-----------------------------------------------------

// Задание для самопроверки

//Тема: “Кирпичики” программы
// Ваше имя и фамилия:

//1. Напишите функцию sum, которая принимает как аргументы два числа 
//   и возвращает сумму этих чисел.
//   Выведите в консоль результат  работы функции для чисел 23 и 18.  

//2. Напишите функцию с именем mult, которая принимает как аргументы два числа 
//   и вычисляет произведение этих чисел.
//   Выведите в консоль результат работы функции для чисел 25 и 4.

//3. Напишите функцию multiply, которая принимает три числа 
//   и возвращает их произведение. 
//   Выведите в консоль результат работы функции для чисел: 2, 4, 7.

//4. Напишите функцию absValue, которая принимает значение числа и 
//   возвращает абсолютное значение (модуль) этого числа. 
//   Выведите в консоль результат работы функции для чисел: -10, 0, 10.

//5. Напишите функцию distance, которая принимает два числа x,y 
//   (координату точки на плоскости) и возвращает расстояние от этой точки до начала координат. 
//   Найдите и выведите в консоль расстояние от начала координат до точки (3, 4).


//Тема: “Кирпичики” программы
// Ваше имя и фамилия:

//1. Напишите функцию sum, которая принимает как аргументы два числа 
//   и возвращает сумму этих чисел.
//   Выведите в консоль результат  работы функции для чисел 23 и 18.  

//2. Напишите функцию с именем mult, которая принимает как аргументы два числа 
//   и вычисляет произведение этих чисел.
//   Выведите в консоль результат работы функции для чисел 25 и 4.

//3. Напишите функцию multiply, которая принимает три числа 
//   и возвращает их произведение. 
//   Выведите в консоль результат работы функции для чисел: 2, 4, 7.

//4. Напишите функцию absValue, которая принимает значение числа и 
//   возвращает абсолютное значение (модуль) этого числа. 
//   Выведите в консоль результат работы функции для чисел: -10, 0, 10.

//5. Напишите функцию distance, которая принимает два числа x,y 
//   (координату точки на плоскости) и возвращает расстояние от этой точки до начала координат. 
//   Найдите и выведите в консоль расстояние от начала координат до точки (3, 4). 
