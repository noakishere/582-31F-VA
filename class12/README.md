# Web Interface Programming 2 — Async Session

### Format

Self-paced lab-lecture

### Estimated time

2 hours

---

# Objective

In this lesson, you will learn how JavaScript handles errors and how you can write code that responds to errors safely.

You will:

- use `try`, `catch`, and `finally`
- throw your own errors with `throw`
- understand why error handling matters
- handle errors in asynchronous code
- connect error handling to `fetch()` and UI updates

This session builds directly on your earlier work with:

- Promises
- `fetch()`
- JSON
- DOM updates

---

# Learning Goals

By the end of this session, you should be able to:

- explain what an exception is
- use `try`, `catch`, and `finally`
- throw your own errors with `throw`
- explain the difference between a normal return value and an error
- handle invalid input safely
- handle errors in async code
- use `.catch()` in Promise chains
- show error messages in the page when something goes wrong

---

# Part 1 — Reading Notes

## 1. What is an exception?

An exception is an error that interrupts normal execution.

Examples:

- trying to use invalid data
- calling something that is not a function
- trying to parse invalid JSON
- receiving a failed HTTP response
- custom validation failure

If an exception is not handled, the program may stop or skip the rest of the intended logic.

---

## 2. Why does error handling matter?

A good program should not assume everything always works.

Things can go wrong:

- user input may be invalid
- a fetch request may fail
- JSON may be malformed
- required data may be missing

Error handling allows you to:

- prevent crashes
- show useful feedback
- recover more gracefully
- separate normal flow from error flow

---

## 3. The basic structure

JavaScript uses:

- `try`
- `catch`
- `finally`

Basic pattern:

```javascript id="51001"
try {
  // code that may fail
} catch (error) {
  // code that runs if an error happens
} finally {
  // code that always runs
}
```

---

# Part 2 — Small Examples

## Example A — basic `try` / `catch`

```javascript id="51002"
try {
  const result = JSON.parse('{"name":"Alice"}');
  console.log(result.name);
} catch (error) {
  console.log("Something went wrong");
  console.log(error.message);
}
```

### What happens?

- the code in `try` runs
- if an error happens, execution moves to `catch`

---

## Example B — parsing invalid JSON

```javascript id="51003"
try {
  const result = JSON.parse("{ name: Alice }");
  console.log(result);
} catch (error) {
  console.log("JSON parsing failed");
  console.log(error.message);
}
```

This is a useful real example because `JSON.parse()` throws an error on invalid JSON.

---

## Example C — `finally`

```javascript id="51004"
try {
  console.log("Trying something...");
  throw new Error("Example failure");
} catch (error) {
  console.log("Caught:", error.message);
} finally {
  console.log("This always runs");
}
```

### Important idea

`finally` runs whether or not an error happens.

This is useful for:

- cleanup
- resetting UI state
- stopping loading indicators

---

# Part 3 — Throwing Your Own Errors

## 1. Why throw your own errors?

Sometimes JavaScript will not automatically throw an error for your business logic.

For example:

- a number is negative when it should not be
- a username is blank
- a required field is missing
- a fetched response has a bad status

In those cases, you can create your own error with `throw`.

---

## Example A — input validation

```javascript id="51005"
function setAge(age) {
  if (age < 0) {
    throw new Error("Age cannot be negative");
  }

  return `Age set to ${age}`;
}

try {
  console.log(setAge(-5));
} catch (error) {
  console.log(error.message);
}
```

---

## Example B — empty name validation

```javascript id="51006"
function greetUser(name) {
  if (name.trim() === "") {
    throw new Error("Name cannot be empty");
  }

  return `Hello, ${name}`;
}

try {
  console.log(greetUser(""));
} catch (error) {
  console.log(error.message);
}
```

---

## Important idea

`throw` stops normal execution in that part of the code and sends control to the nearest matching error handler.

---

# Part 4 — Error Handling with `fetch()`

This is one of the most important parts of the session.

## Important note

`fetch()` does **not** reject automatically for every bad HTTP status.

That means a response like `404` does not always go directly to `.catch()`.

You often need to check:

```javascript id="51007"
response.ok;
```

and throw your own error if needed.

---

## Example A — fetch with manual error handling

```javascript id="51008"
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((user) => {
    console.log(user.name);
  })
  .catch((error) => {
    console.log("Failed to load user");
    console.log(error.message);
  });
```

### Why this matters

This is a common real-world pattern:

- check the response
- throw if it is not acceptable
- let `.catch()` handle it

---

## Example B — async error flow

A Promise chain has its own error-handling mechanism through `.catch()`.

So for async code:

- `try/catch` is common in synchronous code
- `.catch()` is common in Promise chains

Later, with `async/await`, these ideas connect even more directly.

---

# Part 5 — Guided Build

## Build a simple error-aware post loader

Create these files:

- `index.html`
- `app.js`

You will build a small page that:

- loads a post from an API
- displays the result if successful
- displays an error if something goes wrong
- always updates the UI cleanly

---

# Step 1 — HTML

```html id="51009"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Error Handling Demo</title>
  </head>
  <body>
    <h1>Post Loader</h1>
    <button id="load-post-btn">Load Post</button>
    <p id="status">Click the button to load a post.</p>
    <div id="output"></div>

    <script src="app.js"></script>
  </body>
</html>
```

---

# Step 2 — Add the basic fetch flow

```javascript id="51010"
const loadPostBtn = document.getElementById("load-post-btn");
const status = document.getElementById("status");
const output = document.getElementById("output");

loadPostBtn.addEventListener("click", () => {
  status.textContent = "Loading post...";
  output.innerHTML = "";

  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then((post) => {
      output.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      `;
      status.textContent = "Post loaded successfully.";
    })
    .catch((error) => {
      status.textContent = `Failed to load post: ${error.message}`;
    });
});
```

This is the base example for the session.

---

# Part 6 — Add synchronous validation

Now add a separate validation function.

## Task

Create a function:

```javascript id="51011"
function validatePostId(id) {
  // throw an error if invalid
}
```

Rules:

- `id` must be a number
- `id` must be greater than 0

Example:

```javascript id="51012"
function validatePostId(id) {
  if (typeof id !== "number" || id <= 0) {
    throw new Error("Post ID must be a positive number");
  }
}
```

Now test it with `try/catch` separately.

```javascript id="51013"
try {
  validatePostId(-1);
} catch (error) {
  console.log(error.message);
}
```

This helps you practice manual error throwing in synchronous code.

---

# Part 7 — Required Independent Tasks

## Task 1 — Add an input for post ID

Update your HTML so the user can type a post ID.

### Add:

- an input
- the load button
- status and output areas

Example:

```html id="51014"
<input type="number" id="post-id-input" placeholder="Enter post ID" />
<button id="load-post-btn">Load Post</button>
```

---

## Task 2 — Validate before fetching

Before calling `fetch()`, validate the input using `try/catch`.

If the input is invalid:

- do not fetch
- show an error message in the status area

---

## Task 3 — Use `finally`

Add `.finally()` to your Promise chain.

Use it to:

- log that the request finished
  or
- re-enable a button
  or
- update some UI state

Example:

```javascript id="51015"
.finally(() => {
  console.log("Request finished");
});
```

---

## Task 4 — Add a reset or clear button

Create a **Clear** button that:

- removes the post content
- resets the status text

This gives you another way to manage interface state.

---

# Part 8 — Reflection Questions

Answer these briefly.

1. What is the purpose of `try/catch`?
2. What does `throw new Error(...)` do?
3. Why do we check `response.ok` in fetch code?
4. What is the difference between sync error handling and Promise `.catch()`?
5. What is `finally` useful for?

---

# Challenge Tasks

Complete at least **one**.

## Challenge 1 — Invalid JSON example

Write a small example using `JSON.parse()` with bad JSON and catch the error.

Example idea:

```javascript id="51016"
try {
  JSON.parse("{ bad json }");
} catch (error) {
  console.log(error.message);
}
```

---

## Challenge 2 — Load comments instead of posts

Create a second button that loads a comment from:

```text id="51017"
https://jsonplaceholder.typicode.com/comments/1
```

Handle errors the same way.

---

## Challenge 3 — Disable the button while loading

When the fetch starts:

- disable the button

When the request finishes:

- re-enable it

A good place to do this is with `.finally()`.

---

## Challenge 4 — Display error messages in styled HTML

Instead of only updating plain text, display errors in a more visible way using HTML.

For example:

- red text
- an alert-like box
- separate error section

---

# Things to Watch Out For

## 1. `try/catch` does not automatically catch Promise errors outside the Promise flow

For asynchronous Promise chains, use `.catch()`.

For synchronous code, use `try/catch`.

---

## 2. `fetch()` does not reject every bad HTTP response automatically

You must often check `response.ok` and throw your own error.

---

## 3. Do not confuse throwing an error with returning a value

This returns normally:

```javascript id="51018"
return "Something went wrong";
```

This throws an actual exception:

```javascript id="51019"
throw new Error("Something went wrong");
```

---

## 4. Use `error.message`

When catching an error, this is often the most useful part to display:

```javascript id="51020"
console.log(error.message);
```

---

## 5. Use `finally` for cleanup, not main logic

`finally` is usually best for:

- cleanup
- resetting UI state
- turning off loading indicators
