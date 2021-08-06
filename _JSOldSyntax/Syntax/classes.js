// Functional Classes
/*
Define a normal JavaScript function.
Create an object by using the new keyword.
Define properties and methods for a created object using the this keyword.
*/
'use strict';
function Fruit (type) {
    this.type = type;
    this.color = 'unknown';
    this.getInformation = getFruitInformation;
}

function getFruitInformation() {
    return 'This ' + this.type + ' is ' + this.color + '.';
}

let lime = new Fruit('Mexican lime');
console.log(lime.getInformation());
lime.color = 'green';
console.log(lime.getInformation());

//------------------------------------------------------
'use strict';
function Fruit (type) {
    this.type = type;
    this.color = 'unknown';
    this.getInformation = function() {
        return 'This ' + this.type + ' is ' + this.color + '.';
    }
}

let lime = new Fruit('Mexican lime');
console.log(lime.getInformation());
lime.color = 'green';
console.log(lime.getInformation());

//------------------------------------------------------
// The Prototype Property
'use strict';

function Fruit (type) {
    this.type = type;
    this.color = 'unknown';
}

Fruit.prototype.getInformation = function() {
    return 'This ' + this.type + ' is ' + this.color + '.';
}

let lime = new Fruit('Mexican lime');
console.log(lime.getInformation());

lime.color = 'green';
console.log(lime.getInformation());

//------------------------------------------------------
// Using Object Literals
'use strict';

let lime = {
    type: 'Mexican lime',
    color: 'green',
    getInformation: function() {
        return 'This ' + this.type + ' is ' + this.color + '.';
    }
}

console.log(lime.getInformation());

lime.color = 'yellow';
console.log(lime.getInformation());

//------------------------------------------------------
// Singleton Class Using a Function
'use strict';
let lime = new function() {
    this.type = 'Mexican lime';
    this.color = 'green';
    this.getInformation = function() {
        return 'This ' + this.type + ' is ' + this.color + '.';
    };
}
console.log(lime.getInformation());
lime.color = 'yellow';
console.log(lime.getInformation());

//------------------------------------------------------
// Class Declarations
class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

let p = new Polygon(1, 2);
console.log('Polygon p:', p);

//------------------------------------------------------
try {
    let p = new Polygon(1, 2);
    console.log('Polygon p:', p);
}
catch (exception) {
    console.log(exception.name + ': ' + exception.message);
}
class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

p = new Polygon(1, 2);
console.log('Polygon p:', p);

//------------------------------------------------------
// Class Expressions
// Unnamed Class Expression
let Polygon = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};

console.log('Polygon:', Polygon);
let p = new Polygon(1, 2);
console.log('p:', p);

// Named Class Expression
let Polygon = class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};

console.log('Polygon:', Polygon);
let p = new Polygon(1, 2);
console.log('p:', p);

// The Constructor Method
// Prototype Methods
'use strict';
class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    getArea() {
        return this.height * this.width;
    }
}
const square = new Polygon(10, 10);
console.log(square.getArea());


// Static Methods
'use strict';
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
// The correct way to call a static method
console.log(Point.distance(p1, p2));
// Attempt to call a static method on an instance of the class
try {
    console.log(p1.distance(p1, p2));
}
catch (exception) {
    console.log(exception.name + ': ' + exception.message);
}


// Inheritance
// Subclassing with the extends Keyword
'use strict';
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name, 'speaks.');
    }
}

class Dog extends Animal {
    speak() {
        console.log(this.name, 'barks.');
    }
}

let spot = new Dog('Spot');
spot.speak();

spot = new Animal('Spot');
spot.speak();

//We can also extend functional classes:
'use strict';
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(this.name, 'speaks.');
}

class Dog extends Animal {
    speak() {
        console.log(this.name, 'barks.');
    }
}

let spot = new Dog('Spot');
spot.speak();
spot = new Animal('Spot');
spot.speak();


// Superclass Calls Using the super Keyword
'use strict';
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name, 'speaks.');
    }
}

class Dog extends Animal {
    speak() {
        super.speak();
        console.log(this.name, 'barks.');
    }
}

let spot = new Dog('Spot');
spot.speak();


// Extending an Object
'use strict';
class Animal {
    constructor(name) {
        this.animalType = 'Animal'
        this.name = name;
    }
    type() {
        console.log(this.name, 'is type', this.animalType);
    }
    speak() {
        console.log(this.name, 'speaks.');
    }
}

class Dog extends Animal {
    constructor(name, collarColor) {
        super(name);
        this.animalType = 'Dog';
        this.collarColor = collarColor;
    }
    speak() {
        console.log(this.name, 'barks.');
    }
    collar() {
        console.log(this.name, 'has a', this.collarColor, 'collar.');
    }
}
let spot = new Dog('Spot', 'red');
spot.type();
spot.speak();
spot.collar();
// Because the Animal constructor only expects one argument,
// only the first value passed to it is used
spot = new Animal('Spot', 'white');
spot.type();
spot.speak();
try {
    spot.collar();
}
catch (exception) {
    console.log(exception.name + ': ' + exception.message
    + ' (collar is a method of Dog, not Animal).');
}
