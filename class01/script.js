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
