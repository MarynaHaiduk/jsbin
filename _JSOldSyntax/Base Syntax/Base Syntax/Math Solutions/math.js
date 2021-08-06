// -------------------------------------------------
// ********************* MATH **********************
// -------------------------------------------------

let x = 10;

x += 5; 
console.log(x); // 15

	var x = 5; x++; var z = x; //6
	var x = 5; x--; var z = x; //4
	var x = 5; var z = x ** 2; // result is 25
	var x = 5; var z = Math.pow(x,2); // result is 25
	var x = 10; x += 5; //15
	var x = 10; x -= 5; //5
	var x = 10; x *= 5; //50
	var x = 10; x /= 5; //2
	var x = 10; x %= 5; //0
	// document.write outputs data to the browser
	document.write("5 + 4 = ", 5 + 4, "<br/>"); //9
	// Using + instead of , will treat everything as a string unless you use ()
	document.write("5 + 4 = " + (5 + 4) + "<br/>"); //54
	document.write("5 - 4 = ", 5 - 4, "<br/>");
	document.write("5 * 4 = ", 5 * 4, "<br/>");
	document.write("5 / 4 = ", 5 / 4, "<br/>");
	document.write("5 % 4 = ", 5 % 2, "<br/>"); // Modulus remainder of a division //1
	var maxNum = Number.MAX_VALUE;
	document.write("Max Num = ", maxNum, "<br/>");
	document.write("Min Num = ", Number.MIN_VALUE, "<br/>");
	// Numbers have 16 digits of precision
	precisionTest = 0.1000000000000001;
	document.write(precisionTest + 0.1000000000000001, "<br/>");
	// Round number to 2 decimal places
	var balance = 1563.87;
	document.write("Monthly payment : ", (balance / 12).toFixed(2), "<br />");
	var randNum = 5;
	// Shortcut for adding 1
	document.write("randNum++ = ", randNum++, "<br/>");
	document.write("++randNum = ", ++randNum, "<br/>");
	// The same exists for -
	document.write("randNum-- = ", randNum--, "<br/>");
	document.write("--randNum = ", --randNum, "<br/>");
	// Perform a calculation on a value and assign the result
	document.write("randNum += 5 = ", randNum += 5, "<br/>");
	document.write("randNum -= 5 = ", randNum -= 5, "<br/>");
	document.write("randNum *= 5 = ", randNum *= 5, "<br/>");
	document.write("randNum /= 5 = ", randNum /= 5, "<br/>");
	// Order of operations
	document.write("3 + 2 * 5 = ", 3 + 2 * 5, "<br/>");
	document.write("(3 + 2) * 5 = ", (3 + 2) * 5, "<br/>");
