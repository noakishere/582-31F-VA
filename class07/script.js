// Progressive Enhancement

// Is a design approach for building web interfaces.

// the premise is to build a website at a basic level first,
// then make it richer when CSS and JavaScript are available.

// Design Question:
//       Should a web page only work when JS runs?
//       or,
//       Should JS improve something that already works?

// In a nutshell: Progressive Enhancement means starting
//              with a usable base and then adding improvements.

/**
 // That base is usually:
 * 1. Meaningful HTML
 * 2. Core Content
 * 3. Basic Navigation or Interaction
 */

/**
 * Enhancements may include:
 * 1. styling
 * 2. Dynamic Behaviour
 * 3. Async loading
 * 4. Nicer feedback
 * 5. Richer Layout
 */

// Comparison and Contrast

/**
 * Progressive Enhancement
 * base page works first
 * content is meaningful without JS
 * JS only improves the experience
 */

/**
 * JS dependent design
 * page is empty until script runs
 * all content appears only thorugh JS
 * failure in JS may break everything!
 */

// HTML = structure and meaning
// CSS = presentation
// JavaScript = enhancement and behaviour

/**
 * HTML Semantics
 *  main
 *  section
 *  headings
 *  paragraphs
 *  buttons
 */

// Let's enhance the page with JS now:

// DOM
const loadUserBtn = document.getElementById("load-user-btn");
const status = document.getElementById("status");
const userProfile = document.getElementById("user-profile");

// addEventListener for btn
loadUserBtn.addEventListener("click", () => {
  status.textContent = "Loading user...";

  fetch("https://jsonplaceholder.typicode.com/users/4")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      return response.json();
    })
    .then((user) => {
      userProfile.innerHTML = `
            <h2>Profile Information</h2>
            <p>Name: ${user.name}</p>
            <p>Email: ${user.email}</p>
            <p>City: ${user.address.city}</p>
            `;

      status.textContent = "User loaded successfully";
    })
    .catch((error) => {
      status.textContent = `Failed to load user: ${error.message}`;
    });
});

// JS is improving the page:

// replacing placeholder content
// adding dynamic data
// improving user feedback
