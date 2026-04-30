// common mistake 1:

// Expecting the Promise itself to be the final value

const loadProfile = new Promise(resolve(5));

// here we would only get the Promise object!
const result = loadProfile();

// we would need to extract the result from this Promise.

// Common Mistake 2:
// Forgetting to return inside a function

function loadUserData() {
  let promise = new Promise((resolve, reject) => {
    if (auth == true) {
      resolve(student);
    } else {
      reject("Authentication Failed");
    }
  });
  // Here we're missing return!
  // So, calling this function would not give us
  // anything..
}

// Likewise..
Promise.resolve(5)
  .then((number) => {
    number * 2;
    // we're missing a return statement.
  })
  .then((result) => {
    console.log(result); // undefined!
  });

// we need to have a return in our first .then()

// Mistake 3 .

// No catch for failures --> breaks the code (eventually)!

// if we only handle success, in case of rejection our code stops working...

// .catch says "if rejection is possible, i'll handle it."

// Mistake 4

// difference between setTimeout and a Promise?

// setTimeout() : Executes code after the indicated time. (schedule work later)
// Promise : It wraps future completion in a structured way ?
//           If the condition is matched (human-imposed), it either passes resolved or reject
//           Avoiding callback hell. (Allows us to execute properly)
//           Dynamic elements can be used by either reject or resolve ?

// Mistake 5:

// global variable -- accessible by anything anywhere
let data = 0; // 1

loadProfile().then((result) => {
  // 2
  data = result; // 4
});

// 3
console.log(data); // what does this print?
// prints 0
// prints result

// concurrency in motion!
