class Person {
  constructor() {
    this.gender = 'male';
  }
  
  printGender() {
    console.log(this.gender);
  }
}

class User extends Person {
  constructor() {
    super();
    console.log(this.name = 'Max');
  }
  
  printUserName() {
    return this.name;
  }
}

const user = new User();
user.printGender();  // "Max"
user.printUserName();  // "male"