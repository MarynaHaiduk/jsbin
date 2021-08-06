class User {
    constructor(name) {
        this.name = name;
    }

    printUserName() {
        return this.name;
    }
}

const user = new User('Max');
console.log(user.name);  // "Max"
console.log(user.printUserName());  // "Max"


// with constant
class User {
    constructor() {
        this.name = 'Max';
    }

    printUserName() {
        return this.name;
    }
}

const user = new User();
console.log(user.name);  // "Max"
console.log(user.printUserName());  // "Max"