/*
When a browser receives a web page with html and javascript
code, it interprets it. Interpretation of a web page occurs
sequentially from top to bottom. And until he finishes his work,
further interpretation of the web page does not go.
*/


// JavaScript code changes the content of the element with id="demo"
<button onclick="document.getElementById('demo').innerHTML=Date()">The time is?</button>

// This code changes the content of its own element (using this.innerHTML)
<button onclick="this.innerHTML = Date()">The time is?</button>

// It is more common to see event attributes calling Functions
<button onclick="displayDate()">The time is?</button>

// Common HTML Events
// onchange	- An HTML element has been changed
// onclick	- The user clicks an HTML element
// onmouseover	- The user moves the mouse over an HTML element
// onmouseout	- The user moves the mouse away from an HTML element
// onkeydown	- The user pushes a keyboard key
// onload	- The browser has finished loading the page
