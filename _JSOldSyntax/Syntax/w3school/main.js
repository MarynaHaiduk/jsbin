

function changeImage() {
	return document.getElementById("myImage").src='images/pic_bulbon.gif';
}

// When a user clicks on a button, hide all elements with the class name "city":
// <script>
// function myFunction() {
//   var x = document.getElementsByClassName("city");
//   for (var i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
// }
// </script>

// https://www.youtube.com/watch?v=hdI2bqOjy3c 54:47


//------------------------
// Here is a nested object:
var ourStorage = {
	"desk": {
		"drawer": "stapler"
	},
	"cabinet": {
		"top drawer": {
			"folder1": "a file",
			"folder2": "secrets"
		},
		"bottom drawer": "soda"
	}
};
ourStorage.cabinet["top drawer"].folder2; // "secrets"
ourStorage.desk.drawer; // "stapler"

//------------------------------------------
// Accessing Nested Arrays
var ourPets = [
	{
		animalType: "cat",
		names: [
			"Meowzer",
			"Fluffy",
			"Kit-Cat"
		]
	},
	{
		animalType: "dog",
		names: [
			"Spot",
			"Bowser",
			"Frankie"
		]
	}
];
ourPets[0].names[1]; // "Fluffy"
ourPets[1].names[0]; // "Spot"
//--------------------------------------------------------
// Creating Objects
// Using Object Initializers
var a = 3;
var b = 'Rome';
var c = false;

var o = {a, b, c};

console.log('Object \'o\':', o);

var p = {
	a: 3,
	b: 'Rome',
	c: false
};

console.log('Object \'p\':', p);

var q = {};
console.log('Object \'q\' (Initial):', q);
q.a = a;
q.b = b;
q.c = c;
console.log('Object \'q\' (Updated):', q);

// Using new Object()
var o = {};
o.a = 4;
o.b = 'Rome';
o.c = true;
console.log('Object \'o\':', o);

// Using Object.create()
var x = {
	a: 5,
	foo: function() {
		return this.a * this.a;
	}
};
var o = Object.create(x);
console.log('\'x\':', x);
console.log('Object \'o\':', o);
console.log('Property \'o.a\':', o.a);
console.log('Method \'o.foo()\':', o.foo());
o.a = 7;
console.log('Property \'o.a\':', o.a);
console.log('Method \'o.foo()\':', o.foo());

// Using a Constructor Function
function Actor(firstName, lastName, Age) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.Age = Age;
}
var a1 = new Actor('Julia', 'Roberts', 48);
var a2 = new Actor('Kate', 'Winslet', 40);
console.log('Object \'a1\':', a1);


console.log('Object \'a2\':', a2);
