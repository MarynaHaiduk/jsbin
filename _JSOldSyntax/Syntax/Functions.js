function sum(a, b) {
  console.log(a + b);
}
sum(5, 5);

//------------------------------------------------------------
function sum2(a, b) {return a + b;}
console.log(sum2(5, 5));

//------------------------------------------------------------
let res = sum(1, 2, 3);
function sum(a, b, c){ console.log(a + b + c);}

//------------------------------------------------------------
// return the function result
function toCelsius(fahrenheit) { return (5/9) * (fahrenheit-32);}
document.getElementById("demo").innerHTML = toCelsius(77);

// return the function definition instead of the function result
function toCelsius(fahrenheit) {return (5/9) * (fahrenheit-32);}
document.getElementById("demo").innerHTML = toCelsius;

//------------------------------------------------------------
// Functions Used as Variable Values
var text = "The temperature is " + toCelsius(77) + " Celsius";

// Functions

let nums = [4, 5, 6];
sum(...nums);

//------------------------------------------------------------

function display(){
   var z = 1;
   for(var i=0; i<arguments.length; i++)
       z *= arguments[i];
   console.log(z);
}
display(6); // 6
display(6, 4) // 24
display(6, 4, 5) // 120

//------------------------------------------------------------
// С помощью spread-оператора можно передать переменное количество значений
function display(season, ...temps){
   console.log(season);
   for(index in temps){
       console.log(temps[index]);
   }
}
display("Весна", -2, -3, 4, 2, 5);
display("Лето", 20, 23, 31);

//------------------------------------------------------------
//Функции в качестве параметров
function sum(x, y){
   return x + y;
}

function subtract(x, y){
   return x - y;
}

function operation(x, y, func){

   var result = func(x, y);
   console.log(result);
}

console.log("Sum");
operation(10, 6, sum);  // 16

console.log("Subtract");
operation(10, 6, subtract); // 4

//---------------------------------------------
// Замыкания и функции IIFE
function outer(){
   let x = 5;
   function inner(){
       x++;
       console.log(x);
   }
   return inner;
}
let fn = outer();   // fn = inner, так как функция outer возвращает функцию inner
// вызываем внутреннюю функцию inner
fn();   // 6
fn();   // 7
fn();   // 8

//--------------------------------
function multiply(n){
   var x = n;
   return function(m){ return x * m;};
}
var fn1 = multiply(5);
var result1 = fn1(6); // 30
console.log(result1); // 30

var fn2= multiply(4);
var result2 = fn2(6); // 24
console.log(result2); // 24

// ИЛИ
var result = multiply(5)(6); // 30
console.log(result);

// Паттерн Модуль
let foo = (function(){
   let obj = {greeting: "hello"};
   return {
       display: function(){
           console.log(obj.greeting);
       }
   }
})();
foo.display();  // hello

//----------------------------------------
function createUser(pName, pAge) {
   return {
       name: pName,
       age: pAge,
       displayInfo: function() {
           document.write("Имя: " + this.name + " возраст: " + this.age + "<br/>");
       }
   };
}
var tom = createUser("Tom", 26);
tom.displayInfo();
var alice = createUser("Alice", 24);
alice.displayInfo();

// Оператор instanceof позволяет проверить, с помощью какого конструктора создан объект.
// конструктор типа Car
function Car(mName, mYear){
   this.name = mName;
   this.year = mYear;
   this.getCarInfo = function(){
       document.write("Модель: " + this.name + "  Год выпуска: " + this.year + "<br/>");
   };
}
// конструктор типа User
function User(pName, pAge) {
   this.name = pName;
   this.age = pAge;
   this.driveCar = function(car){
       document.write(this.name + " ведет машину " + car.name + "<br/>");
   };
   this.displayInfo = function(){
       document.write("Имя: " + this.name + "; возраст: " + this.age + "<br/>");
   };
}

var tom = new User("Том", 26);
tom.displayInfo();
var bently = new Car("Бентли", 2004);
tom.driveCar(bently);
ar isUser = tom instanceof User;
var isCar = tom instanceof Car;
console.log(isUser);    // true
console.log(isCar);     // false
