// Variables! review

/**
 * let && const
 */

// let gives us the possibility to change a
// value (after it's stored)
let number = 10;
number = number + 1;

console.log(number);

// const means the variable should not change
const courseName = "Web Interface Programming 2";
// courseName = "kamyar"; constant cannot be changed
console.log(courseName);

let numbers = [1, 2, 3];
numbers.push(4); // adding a new element!
console.log(numbers);

// in this case, an array is assigned to const grades
// we cannot change the variables grades itself,
// but we can manipulate the array.
const grades = [80, 90, 100];
// we're not changing the variable,
// we're just using a function of our array
grades.push(75);
grades[1]; // second element in the array
console.log(grades);

// JS object
const student = {
  name: "Sam",
  grade: 85,
};

console.log(student);
console.log(student.name);
console.log(student.grade);

student.name = "john";
console.log(student.name);

// This would result in an error!
// student = {
//   name: "abc",
//   grade: 0,
// };

/**
 * block scope!!!!
 * Scope protects variables and prevents accidental misuse.
 */

a = 5;
if (a == 5) {
  let message = "You guessed the number right!!!";
  console.log(message);
}

// WARNING: this wouldn't work, because message is
// in the conditional's scope and not accessible.
// console.log(message);

function showUser() {
  const username = "Mina";
  console.log(`${username} is logged in!`);
}

showUser();

// WARNING: this wouldn't work, because username is
// in the function's scope and not accessible.
// console.log(username);

/**
 * Mini check in
 */

// let or const?
let page = 1; // page can change!
const maxItems = 20; // maxItems could not change!!
const categories = ["movies", "books"]; // categories also stay the same!

/**
 * Functions
 */

// we take an argument/parameter in this function
function greetUser(name) {
  // this is a void function!
  console.log("Hello, " + name + " I hope you're good");
}

const name = "Nora";
greetUser(name);

function add(a, b) {
  // this is a return function
  return a + b;
}

const result = add(3, 5);
console.log("result is: " + result);

// a void function, executes whatever it's supposed to.
// but it doesn't return any values
// hence, it can't be assigned to a variable

// let a = greetUser() doesn't work, since greetUser doens't
//                                           return anything

// BUT, a return function can be assigned to a variable.
// BECAUSE, it returns a value!
let number1 = add(10, 20);

// MINI EXERCISE:
const newName = "Jane";
const lastName = "Doe";

const fullName = getFullName(newName, lastName);

// 1.
// write a RETURN function that adds name
// and lastName (with a space) and returns it to fullName
function getFullName(name, lastname) {
  let fullName = name + " " + lastName;
  return fullName;
}

// 2.
// write a function that greets the user calling their
// fulName
function greet(fullName) {
  console.log("Hello " + fullName);
  return "Hello " + fullName;
}
greet(fullName);

// DOM
document.getElementById("title").innerText = greet(fullName);

/**
 * one responsibility per function!
 * We want our functions to be modular: as in they're
 * easy to test and REUSE.
 * With single responisibility functions, we can attain that.
 */

function calculateTotal(price, quantity) {
  return price * quantity;
}

function formatPrice(amount) {
  return "$" + amount.toFixed(2);
}

const totalPrice = calculateTotal(20.99, 3);

console.log(totalPrice);
console.log(formatPrice(totalPrice));

/**
 * Arrays and loops
 */

const fruits = ["apple", "banana", "orange", "cherry"];
console.log(fruits);
console.log(fruits[0]); // first element
console.log(fruits.length); // length
console.log(fruits[fruits.length - 1]); // last element

// let's loop through an array!
console.log("===========");
console.log("Lambda: ");
fruits.forEach((fruit) => console.log(fruit));

console.log("===========");
console.log("Callback fn: ");
fruits.forEach(function (fruit) {
  console.log(fruit);
});

console.log("===========");
console.log("for loop: ");
for (const fruit of fruits) {
  console.log(fruit);
}

console.log("===========");
console.log("with indexes loop: ");
for (let i = 0; i < fruits.length; i++) {
  if (i == 1) {
    // optional, if you want :D
    // here we have more control over indexes
    console.log(fruits[i]);
  }
}

console.log("===========");
console.log("with while loop: ");
let index = 0;
while (index < fruits.length) {
  console.log(fruits[index]);
  index++;
}

/**
 * find function
 */

const prices = [10, 20, 30, 40];
console.log(prices);

// find function finds the first occurence that
// passes the condition
const firstBigPrice = prices.find(function (price) {
  return price > 25;
});
console.log("Find function: " + firstBigPrice);

/**
 * filter function
 */
// filter function creates an array of all elements
// that pass the condition within the array.
const expensivePrices = prices.filter(function (price) {
  return price > 25;
});
console.log("Filter Function: ");
console.log(expensivePrices);

/**
 * Map function
 */
// transforms each elements of the array and stores it
// in a new array.
const formattedPrices = prices.map(function (price) {
  return "$" + price;
});

console.log(formattedPrices);

/**
 * Objects
 */

console.log("-------------");

const product = {
  name: "Keyboard",
  price: 49.99,
  inStock: true,
  describe: function () {
    return this.name + " costs $" + this.price;
  },
};

console.log(product.name);
console.log(product.describe());
