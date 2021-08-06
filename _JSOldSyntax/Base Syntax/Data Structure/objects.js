// JS Objects

let x = {
    firstName: "John",
    lastName: "Doe",
    hobbies: [1, 2, 3],
    address: {
        street: 'street',
        city: 'NY'
    },
    "additional info": [
        {
            comments: 55,
            likes: 88
        }
    ],
    getFullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

console.log(x);
console.log(x.getFullName()); // "John"
console.log(x.firstName);  // "John Doe"
console.log(x.hobbies[0]);  // 1
console.log(x.address.city);  // "NY"
console.log(Object.keys(x));  // ["firstName", "lastName", "hobbies", "address", "getFullName"]
console.log(x["additional info"]);
console.log(x["additional info"]);
console.log(x["additional info"][0].comments);  // 55
console.log(x["additional info"][0]);  // 55
x.defaultValue = "default";  // add a new property or change
console.log(x);
delete x.defaultValue;  // removes the property from the object
console.log(x);
console.log(x.hasOwnProperty('b'));  // returns true/false if object has property
console.log(x["additional info"][0]);			// { comments: 55, likes: 88 }
console.log(x["additional info"][0].likes);		// 88
console.log('Attempt to access an undefined property: ', x.phone); // undefined

for (let idx in x) {
    console.log(x[idx]);
}

// Change items
x.firstName = "Mike";
console.log(x.firstName + " " + x.lastName);  // "Mike Doe"

// Create new item
x.age = 25;
console.log(x.age);  // 25
x.email = 'email@email';
console.log(x.email);

// Comparing two JavaScript objects will always return false!!!
let a = Number(500);
let b = Number(500);
console.log(a == b);  // false