// let's load in DOM
const button = document.getElementById("load_button");
const output = document.getElementById("output");
const input_field = document.getElementById("inp");

function input_check(str) {
  let promise = new Promise((resolve, reject) => {
    if (str == "Hello") {
      // validation
      setTimeout(() => {
        resolve("Content loaded"); // validation passed
      }, 3000); // wait for 3 seconds
    } else {
      setTimeout(() => {
        reject("Content didn't load"); // validation didn't pass
      }, 3000); // wait for 3 seconds
    }
  });
  return promise; // return promise
}

// let's add our function to the button
button.addEventListener("click", () => {
  // first we update the text
  output.textContent = "Loading...";

  // then we update with the actual result
  input_check(input_field.value)
    .then((result) => {
      // successful promise
      output.textContent = result;
      input_field.value = "";
    })
    .catch((error) => {
      // rejected promise
      output.textContent = error;
      input_field.value = "";
    });
});
