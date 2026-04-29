// create a function that checks password
// takes password as a parameter
// it returns a Promise
// It compares the entered password with your password
// based on that has a reject or resolve (with a string value)

// call the function with 3 different passwords
//      all should have a .then() and .catch()

// bonus: wrap the resolve in a setTimeout of 2 seconds

const correct_password = "1234";

function checkPassword(entered_password) {
  const promise = new Promise((resolve, reject) => {
    if (correct_password == entered_password) {
      setTimeout(() => {
        resolve("Login successfully.");
      }, 2000);
    } else {
      reject("password is not correct.");
    }
  });

  return promise;
}

checkPassword("1234")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
