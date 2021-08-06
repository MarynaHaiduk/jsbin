// JavaScript Date Objects

// There are 4 ways to create a new date object:
// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// new Date(milliseconds)
// new Date(date string)


// By default, JavaScript will use the browser's time zone
// and display a date as a full text string:
var d = new Date();
// Fri Apr 26 2019 01:45:06 GMT-0400 (Eastern Daylight Time)

// 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):
var d = new Date(2018, 11, 24, 10, 33, 30, 0);
// Note: JavaScript counts months from 0 to 11.
// January is 0. December is 11.
// 6 numbers specify year, month, day, hour, minute, second:

var d = new Date(2018, 11, 24, 10, 33, 30);
//5 numbers specify year, month, day, hour, and minute:

var d = new Date(2018, 11, 24, 10, 33);
//4 numbers specify year, month, day, and hour:

var d = new Date(2018, 11, 24, 10);
//3 numbers specify year, month, and day:

var d = new Date(2018, 11, 24);
//2 numbers specify year and month:

var d = new Date(2018, 11);
//You cannot omit month. If you supply only one parameter it will be treated as milliseconds.

var d = new Date(2018);
//Previous Century
//One and two digit years will be interpreted as 19xx:

var d = new Date(99, 11, 24);
var d = new Date(9, 11, 24);
new Date(dateString)
new Date(dateString) creates a new date object from a date var d = new Date("October 13, 2014 11:13:00");
// Date strings are described in the next chapter.
// JavaScript Stores Dates as Milliseconds
// JavaScript stores dates as number of milliseconds since
// January 01, 1970, 00:00:00 UTC (Universal Time Coordinated).
// Zero time is January 01, 1970 00:00:00 UTC.
// Now the time is: 1556172692654 milliseconds past January 01, 1970

// new Date(milliseconds)
// new Date(milliseconds) creates a new date object as zero time plus milliseconds:
var d = new Date(0);
//01 January 1970 plus 100 000 000 000 milliseconds is approximately 03 March 1973:

var d = new Date(100000000000);
//January 01 1970 minus 100 000 000 000 milliseconds is approximately October 31 1966:

var d = new Date(-100000000000);
var d = new Date(86400000);
// One day (24 hours) is 86 400 000 milliseconds.

// Date Methods
// When a Date object is created, a number of methods allow you to operate on it.
// Date methods allow you to get and set the year, month, day, hour, minute, second, and
// millisecond of date objects, using either local time or UTC (universal, or GMT) time.
// Date methods and time zones are covered in the next chapters.
// Displaying Dates
// JavaScript will (by default) output dates in full text string format:
// Tue Mar 24 2015 20:00:00 GMT-0400 (Eastern Daylight Time)
// When you display a date object in HTML, it is automatically converted
// to a string, with the toString() method.

d = new Date();
// document.getElementById("demo").innerHTML = d;
// Same as:
d = new Date();
// document.getElementById("demo").innerHTML = d.toString();

// The toUTCString() method converts a date to a UTC string (a date display standard).
var d = new Date();
// document.getElementById("demo").innerHTML = d.toUTCString();

//The toDateString() method converts a date to a more readable format:
var d = new Date();
// document.getElementById("demo").innerHTML = d.toDateString();
