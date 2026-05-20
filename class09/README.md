# Web Interface Programming 2 — Session 9

## Lab-Lecture: Modules

## Modules: Organizing JavaScript Across Files

### Objective

In this lesson, you will learn how to split JavaScript into separate files using modules. You will see how to export code from one file and import it into another, then apply that idea in a small browser-based project.

# Part 1 — Reading Notes

## 1. What is a module?

A module is a JavaScript file with its own scope that can export code for use in other files.

Modules help us:

- organize code
- avoid one giant script file
- reuse logic
- separate responsibilities

## 2. Why not keep everything in one file?

As a project grows, one file can become hard to read and maintain.

For example, one file may contain:

- API requests
- rendering logic
- event handling
- utility functions

Modules let us separate these concerns.

## 3. How do modules work in the browser?

To use modules in the browser, your HTML must load the script like this:

```html id="20001"
<script type="module" src="app.js"></script>
```

The `type="module"` part is required.

## 4. Exporting

If a file wants to share a function, variable, or class, it must export it.

Example:

```javascript id="20002"
export function greet(name) {
  return `Hello, ${name}`;
}
```

## 5. Importing

Another file can import that function:

```javascript id="20003"
import { greet } from "./utils.js";

console.log(greet("Alice"));
```

Notice:

- the path starts with `./`
- the filename must be included

## 6. Why this matters in this course

In this course, modules will help you organize code such as:

- API functions
- rendering functions
- utility helpers
- event setup

That will become increasingly important in larger frontend projects.

# Part 2 — Small examples

## Example A — export one function

### `utils.js`

```javascript id="20004"
export function formatName(name) {
  return name.toUpperCase();
}
```

### `app.js`

```javascript id="20005"
import { formatName } from "./utils.js";

console.log(formatName("Mina"));
```

## Example B — export multiple things

### `helpers.js`

```javascript id="20006"
export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}
```

### `app.js`

```javascript id="20007"
import { add, multiply } from "./helpers.js";

console.log(add(2, 3));
console.log(multiply(2, 3));
```

## Example C — export a constant

### `config.js`

```javascript id="20008"
export const API_URL = "https://jsonplaceholder.typicode.com/users";
```

### `app.js`

```javascript id="20009"
import { API_URL } from "./config.js";

console.log(API_URL);
```

# Part 3 — Guided build

## Build a modular user viewer

You will create a small app that loads users and displays them in the page, but this time the code must be split into modules.

# Files to create

Create these files:

- `index.html`
- `app.js`
- `api.js`
- `ui.js`

Optional:

- `config.js`

---

# Step 1 — HTML

```html id="20010"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Modular User Viewer</title>
  </head>
  <body>
    <h1>Modular User Viewer</h1>
    <p id="status">Click the button to load users.</p>
    <button id="load-users-btn">Load Users</button>
    <div id="users-container"></div>

    <script type="module" src="app.js"></script>
  </body>
</html>
```

Important:
Use `type="module"`.

# Step 2 — API module

Create `api.js`.

Its job is to handle data loading.

```javascript id="20011"
export function fetchUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    },
  );
}
```

This file is responsible only for fetching data.

# Step 3 — UI module

Create `ui.js`.

Its job is to render users into HTML.

```javascript id="20012"
export function renderUsers(users, container) {
  container.innerHTML = "";

  users.slice(0, 5).forEach((user) => {
    const article = document.createElement("article");
    article.innerHTML = `
      <h2>${user.name}</h2>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>City:</strong> ${user.address.city}</p>
    `;
    container.appendChild(article);
  });
}
```

This file is responsible only for UI rendering.

# Step 4 — Main app module

Create `app.js`.

Its job is to connect everything together.

```javascript id="20013"
import { fetchUsers } from "./api.js";
import { renderUsers } from "./ui.js";

const loadUsersBtn = document.getElementById("load-users-btn");
const status = document.getElementById("status");
const usersContainer = document.getElementById("users-container");

loadUsersBtn.addEventListener("click", () => {
  status.textContent = "Loading users...";

  fetchUsers()
    .then((users) => {
      renderUsers(users, usersContainer);
      status.textContent = "Users loaded successfully.";
    })
    .catch((error) => {
      status.textContent = `Failed to load users: ${error.message}`;
    });
});
```

Explanation:
This file does not do everything itself.

It imports:

- data logic from `api.js`
- UI logic from `ui.js`

This is the key modular design idea.

# Part 4 — Independent task

Now improve the modular app.

## Required tasks

Add a **Clear** button and move the clear logic into `ui.js`.

### New HTML requirement

Add:

```html id="20014"
<button id="clear-btn">Clear</button>
```

### In `ui.js`

Add a function:

```javascript id="20015"
export function clearUsers(container) {
  container.innerHTML = "";
}
```

### In `app.js`

Import and use it when the clear button is clicked.

## Second required task

In `ui.js`, create a helper function:

```javascript id="20016"
export function createUserCard(user) {
  // return a DOM element
}
```

Then update `renderUsers()` to use that helper.

# Part 5 — Reflection questions

Students should answer these briefly:

1. What is the purpose of `type="module"` in HTML?
2. Why is it useful to separate `fetchUsers()` into `api.js`?
3. Why is it useful to separate rendering into `ui.js`?
4. What would happen if everything stayed in one file as the project grows?
5. What is the difference between exporting and importing?

# Suggested challenge tasks

Students who finish early can complete one or more of these.

## Challenge 1 — Add `config.js`

Move the API URL into a separate module:

```javascript id="20017"
export const USERS_URL = "https://jsonplaceholder.typicode.com/users";
```

Then import it into `api.js`.

## Challenge 2 — Add styling

Add simple CSS or Bootstrap and keep UI code modular.

## Challenge 3 — Add post support

Create another API function in `api.js` to fetch posts and another UI function in `ui.js` to render them.

## Challenge 4 — Split status handling into its own module

Create:

- `status.js`

with a function like:

```javascript id="20018"
export function setStatus(element, message) {
  element.textContent = message;
}
```

Then import it into `app.js`.

This is a very nice extra module exercise.

# Common mistakes:

## 1. Forgetting `type="module"`

Without it, imports will fail in the browser.

## 2. Wrong import path

This is wrong:

```javascript id="20019"
import { fetchUsers } from "api.js";
```

This is correct:

```javascript id="20020"
import { fetchUsers } from "./api.js";
```

## 3. Forgetting to export

If a function is not exported, it cannot be imported elsewhere.

## 4. Trying to use browser modules like normal scripts

Modules have their own scope and behave differently from plain script files.

## 5. Mixing responsibilities

Encourage students not to put everything back into `app.js`.
