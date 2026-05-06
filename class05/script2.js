// let's load all DOM
const loadUserBtn = document.getElementById("load-user-btn");
const status = document.getElementById("status");
const output = document.getElementById("output");

// addEventListener to button
loadUserBtn.addEventListener("click", () => {
  // first status update
  status.textContent = "Loading user..";
  output.innerHTML = "";

  // now let's fetch
  const userFetch = fetch("https://jsonplaceholder.typicode.com/users/7");
  // fetch resolves a Promise for us, and gives a Response object.

  userFetch
    .then((response) => {
      // convert Response object to JSON
      return response.json();
    })
    // update the output with user name
    .then((data) => {
      // both of these work data.username
      output.innerHTML = `${data["username"]}`;

      status.textContent = "User Loaded Successfully.";
    })
    .catch((error) => {
      status.textContent = "Failed to load user.";
      console.log(error);
    });
});
