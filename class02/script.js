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
