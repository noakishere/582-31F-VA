// Ex 01

// fetch from https://jsonplaceholder.typicode.com/users

// addeventlistener to button to load the users
// update the DOM with the first 5 users as li elements.

// hint: try fetching just users without any ids.

const userList = document.getElementById("list");
const status = document.getElementById("status");
const button = document.getElementById("load-user-btn");

button.addEventListener("click", () => {
  status.textContent = "Loading...";
  userList.innerHTML = "";

  const userFetch = fetch("https://jsonplaceholder.typicode.com/users");

  userFetch
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (let i = 0; i < 5; i++) {
        // option 1
        let li = document.createElement("li");
        li.textContent = data[i].username;

        userList.appendChild(li);

        userList.append(`<li>${data[i].username}</li>`);

        // option 2
        // userList.innerHTML += `<li>${data[i].username}</li>`;
      }
    })
    .catch((error) => {
      console.log(error);
    });
});
