// getters, setters, statics

// what is a getter?

//      A getter lets an object expose a value as if it were a property.
//                      even though, the code itself might run behind the scenes.

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // a getter function
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // our getter function, computes something (that we tell it to)
  // and returns a value.
}

const p1 = new Person("Joe", "Jones");

console.log(p1.fullName);

// p1.fullName();
//  ^ this would throw an error, because a getter is accessed like a property
//      not like a normal method

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // area is not stored directly. it's computed!
  get area() {
    return this.width * this.height;
  }
}

const rect = new Rectangle(4, 5);
console.log(rect.area);

// why getters are useful?

//  in case, a value should be computed from other values
//  in case, (encouraged) you want cleaner syntax
//  in case, you want to hide implementation details

/**
 * Setters
 */

// a setter lets you control what happens when someone
// assigns a value.

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price; // public property
  }

  // private property
  set price(value) {
    if (value < 0) {
      throw new Error("Price cannot be negative");
    }
    this.__price = value;
  }

  // private property
  get price() {
    return this.__price;
  }
}

const product1 = new Product("Keyboard", 49.99);
console.log(product1.price); // getting the value
product1.price = 60; // assigning the value
console.log(product1.price);
// product1.price = -160; // this throws an error now!
// console.log(product1.price);

class User {
  constructor(username) {
    this.username = username;
  }

  // setter here allows to have full control
  // over how the value is being treated and then assigned.
  set username(value) {
    // .trim removes all the empty space from both ends of our string
    this.__username = value.trim();
  }

  get username() {
    return this.__username;
  }
}

const u1 = new User("    t-rex     ");
console.log(u1.username);

class Bug {
  constructor(name) {
    this.name = name;
  }

  set name(value) {
    // this.name = value; // recursive call!
    this.__name = value; // this is ok
  }

  get name() {
    // return this.name; // recursive call!
    return this.__name; // this is ok
  }
}

bug = new Bug("hi"); // throws an error if there are no setters
console.log(bug.name);
