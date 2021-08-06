// var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';
// alert("Hello")


// Stringvar 
myVariable = 'Bob';

// Number
var myVariable = 10;

//Boolean 
var myVariable = true;

// Arrayvar 
myVariable = [1,'Bob','Steve',10];
// alert(myVariable[0])


// Object
var myVariable = document.querySelector('h1');

// Это комментарий

/*
Всё, что находится тут - комментарий.
*/

// Операторы

// Конкатенация
// alert(6 + 9);
// alert("Hello " + "world!");

// alert(9 - 3);
//alert(8 * 2); // умножение в JS это звездочка
//alert(9 / 3);

// Условия
var name = "Hi"
if (name === "Hi") {
	alert('Yes');
}
else {
	alert('No');
}

// Функции
var myVariable = document.querySelector('h1');
alert("Hello!!!");

function multiply(a, b){
	var result = a * b;
	return result;
}

console.log(multiply(4,7))
console.log(multiply(20,7))

document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}


