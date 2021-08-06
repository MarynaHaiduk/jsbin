class Car {
    constructor(name) {
        this.brand = name;
    }

    present() {
        return 'I have a ' + this.brand;
    }
}


// Class Inheritance
class Model extends Car {
    constructor(name, mod) {
        super(name);
        this.model = mod;
    }

    show() {
        return this.present() + ', it is a ' + this.model;
    }
}


mycar1 = new Car("Ford");
console.log(mycar1.brand);
console.log(mycar1.present());

mycar2 = new Model("Ford", "Mustang");
console.log(mycar2.show());

