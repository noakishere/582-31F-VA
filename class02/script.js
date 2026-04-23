// asynchronous vs synchronous!

// let's look at normal sequential code.

console.log("Start"); // 1
console.log("Middle"); // 2
console.log("End"); // 3

// in a sequential manner, code runs in order
// each line computes and completes before the next one

// now, we can look at deferred execution

console.log("=====");
console.log("now with time interval");

console.log("Start"); // 1

// we could use setTimeout(), to run the code
// after a certain amount of time!
setTimeout(() => {
  //   console.log("Middle");
}, 1000); // 2, but with 1000ms delay

// in the case above, the function inside setTimeout
// runs after 1000ms.

console.log("End"); // 3

console.log("=====");
console.log("callback functions");

function sayHello(name) {
  console.log("Hello " + name);
}

// sayHello("Jane");

function doSomethingLater(callback) {
  console.log("Doing setup...");
  console.log("Loading...");

  callback(); // the argument/parameter callback
  // is a function, not an integer or any
  // other data type.
}

// we have to pass the function as an argument
// to the doSomethingLater function.
doSomethingLater(() => {
  //   sayHello("Jane");
  console.log("Hello"); // this is our argument
});

doSomethingLater(() => {
  console.log("Nice to meet you!");
});

// in the case of a callback, our function needs to be
// wrapped around an arrow function.
/**
 * functionName(() => {
 *  whatever you want to do.
 * });
 */

// arrow function == lambda function!

// concept of Continuation!

// a continuation is the next piece of work the program
// should do!

// (it's often represented as a function to run later.)

/**
 * DOM Review!
 */

// both of these work!
// const title = document.querySelector("#title");
const title = document.getElementById("title");

const description = document.querySelector(".description");

const output = document.getElementById("output");

console.log(title);
console.log(description);
console.log(description.textContent); // just the content, no html tag
console.log(output);

// to update DOM content!
output.textContent = "I would like to have one red banana please.";

const topics = ["Big Ben", "Statue of Liberty", "Chichen Itza"];

const topicList = document.getElementById("topic-list");

for (let topic of topics) {
  // we create our element
  const li = document.createElement("li");

  // we add the list item as a text to our element
  li.textContent = topic;

  // add the list item to our 'ul'
  topicList.appendChild(li);
}

/**
 * Event Handling!
 */

const button = document.getElementById("my-button");
console.log(button);

// we can have functions triggered by specific events.
// we can do so by using addEventListener

button.addEventListener("click", () => {
  console.log("Button clicked.");
});
