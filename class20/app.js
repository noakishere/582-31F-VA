// // Loading DOM
// const button = document.getElementById("load-events");
// const container = document.getElementById("events");

// // Adding event listener to button
// button.addEventListener("click", async () => {
//   // fetching data
//   const response = await fetch("events.json");

//   // parsing data
//   const events = await response.json();

//   // populating DOM elements
//   container.innerHTML = "";

//   // iterating through data
//   events.forEach((event) => {
//     const article = document.createElement("article");

//     article.innerHTML = `<h2>${event.title}</h2>
//                             <p>${event.artist}</p>
//                             `;

//     container.appendChild(article);
//   });
// });

// This code works! what's the main problem?
// working code is not automatically well-organized code!

// 4 application layers are:

// 1. something that retrieves data (api.js)
// 2. something that represents one event (Event.js)
// 3. something that display data and messages (ui.js)
// 4. something that coordinates the application (app.js)

// each module should have one clear reason to change!
// and have its own responsibility
