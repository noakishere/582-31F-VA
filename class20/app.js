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

// importing the exported functions and class
import { getEvents } from "./api.js";
import { Event } from "./Event.js";
import { renderLoading, renderEmpty, renderError, renderEvents } from "./ui.js";

console.log("app.js loaded");

const loadButton = document.getElementById("load-events");
const genreFilter = document.getElementById("genre-filter");

// stores the events currently loaded into the application
let events = [];

async function loadEvents() {
  // state flow:
  // loading state
  renderLoading();

  // disable controls
  // to prevent double clicking
  loadButton.disabled = true;
  genreFilter.disabled = true;

  try {
    // retrieve the raw data
    const rawEvents = await getEvents();

    console.log("Raw API data: ", rawEvents);

    // Convert data to class instances!
    events = rawEvents.map(
      (item) =>
        new Event(
          item.id,
          item.title,
          item.artist,
          item.genre,
          item.venue,
          item.date,
          item.price,
        ),
    );

    console.table(events);

    // final state: render the result!
    renderEvents(events);

    genreFilter.disabled = false;
    // catch the error
  } catch (error) {
    console.error("Failed to load events: ", error);

    renderError(error.message);
  } finally {
    // restore the button
    loadButton.disabled = false;
  }
}

loadButton.addEventListener("click", () => {
  loadEvents();
});

// why is there no new fetch involved?
// because when we load, data is stored in our app
function handleGenreFilter() {
  const selectedGenre = genreFilter.value;

  if (selectedGenre === "") {
    renderEvents(events);
    return;
  }

  // filtering is happening locally!
  // let events has all the data!
  const filteredEvents = events.filter(
    (event) => event.genre === selectedGenre,
  );

  renderEvents(filteredEvents);
}

genreFilter.addEventListener("change", handleGenreFilter);
