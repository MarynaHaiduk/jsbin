// Преобразования данных

let number1 = "46";
let number2 = "4";
let sumNums = number1 + number2;
console.log(sumNums); // 464

let result = parseInt(number1) + parseInt(number2);   //parseInt() для преобразования строки в число
console.log(result); // 50


let result2 = parseFloat(number1) + parseFloat(number2);  // parseFloat() для преобразования строк в дробные числа применяется функция
console.log(result2); // 51.05


// Если методу не удастся выполнить преобразование, то он возвращает значение NaN (Not a Number)
let num1 = "123hello";
//С помощью специальной функции isNaN() можно проверить, представляет ли строка число
let result3 = isNaN(num1)
console.log(result3); // true - num1 не является числом


// перевод в двоичную систему исчисления
let num1 = "110";
let num2 = parseInt(num1, 2);
console.log(num2); // 6