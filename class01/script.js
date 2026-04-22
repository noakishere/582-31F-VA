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
 */
