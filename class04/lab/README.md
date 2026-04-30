# Lab 1

### Promises, Asynchronous Flow, and DOM Updates

#### Objective

In this lab, you will practice using Promises to manage asynchronous operations in JavaScript. You will also update the DOM based on loading, success, and error states.

This lab will help you prepare for:

- asynchronous programming with Promises
- DOM updates after delayed operations
- fetch()
- API data rendering

#### Learning Goals

By the end of this lab, you should be able to:

- create and use Promises
- handle successful and failed Promise results
- update the DOM while waiting for asynchronous work
- render objects and arrays into HTML
- organize your code into reusable functions

### Student Profile Loader

You will build a small web page that simulates loading student data and course data asynchronously.

Your page must:

- let the user click buttons to load data
- show a loading message
- display data when loading succeeds
- show an error message when loading fails
- update the page dynamically with JavaScript

#### Create these files:

- index.html
- app.js

- You may also create a CSS file if you want, but it is optional.

### Part 1 — Basic Page Structure

Create a page with:

- a title
- a Load Student button
- a Load Courses button
- a Clear button
- a status paragraph
- a container for student data
- a container for course data

### Suggested HTML: (feel free to customize it)

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Student Profile Loader</title>
</head>
<body>
  <h1>Student Profile Loader</h1>

  <button id="load-student-btn">Load Student</button>
  <button id="load-courses-btn">Load Courses</button>
  <button id="clear-btn">Clear</button>

  <p id="status">Ready.</p>

  <section id="student-container"></section>
  <section id="courses-container"></section>

  <script src="app.js"></script>
</body>
</html>
```

---

### Part 2: Create a Promise to Load Student Data

In app.js, write a function called getStudentData().

This function must:

- return a Promise
- wait before finishing
- resolve with a student object
- The student object should include:
  - id
  - name
  - program
  - semester
  - bio

### Part 3 : Render Student Data in the DOM

Write a function called `renderStudent(student)`.

This function must:

- receive a student object
- display the student information inside `#student-container`

You may use:

- `innerHTML`
  or
- `createElement()`

#### Minimum required output

Show:

- student name
- program
- semester
- bio

### Part 4 : Create a Promise to Load Course Data

Write a function called `getCoursesData()`.

This function must:

- return a Promise
- wait before finishing
- resolve with an array of course objects

#### Each course object should include:

- code
- title

#### Example Data:

```
[
  { code: "WIP2", title: "Web Interface Programming 2" },
  { code: "AWP", title: "Advanced Programming" },
  { code: "DB2", title: "Database Management Systems 2" }
]
```

---

### Part 5 -- Render Course Data

Write a function called `renderCourses(courses)`.

This function must:

- receive an array of courses
- display them inside #courses-container
- show them in a list

---

### Part 6 -- Connect the Load Courses Button

When the Load Courses button is clicked:

- change the status text to "Loading courses..."
- clear old course content
- call `getCoursesData()`
- use `.then()` to render the courses
- use `.catch()` to handle errors
- update the status message

---

### Part 7 -- Clear Button

When the Clear button is clicked:

- clear the student container
- clear the courses container
- reset the status message to "Ready."

## Core Requirements Checklist

Your lab must include all of the following:

- a Promise-returning function for student data
- a Promise-returning function for course data
- one .then() for successful handling
- one .catch() for error handling
- DOM updates while loading
- DOM updates after success
- DOM updates after failure
- at least one rendered object
- at least one rendered array
- working buttons for interaction

### Bonus Challenge: (Optional)

Write a generic function such as:

```
function simulateAsync(data, delay, shouldSucceed = true) {
  // ...
}
```

Then use it for both student data and course data.
