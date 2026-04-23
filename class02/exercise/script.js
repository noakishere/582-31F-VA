/**
 * Exercise
 */

// 1. load in DOM elements

// nameinput
const nameInput = document.getElementById("name-input");
// greet button
const greetButton = document.getElementById("greet-button");
// output
const output = document.querySelector("#output");

// 2. add an event listener to the button
// continuation function for it should be:
greetButton.addEventListener("click", () => {
  // 1. take the input value and trim it
  const name = nameInput.value.trim();
  // 2. (condition)
  // validate that the input is not an empty string
  // if it is --> update output text to :
  //                  Please enter something
  if (name == "") {
    output.textContent = "Please enter something";
    return; // this gets us out of the function and ignores
    // whatever's after!
  }

  // 3. after 1000ms , update the output with:
  //                  Hello, INPUT_VALUE
  setTimeout(() => {
    output.textContent = `Hello ${name}`;
  }, 1000);
});
