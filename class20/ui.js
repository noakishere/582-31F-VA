const eventsContainer = document.getElementById("events");
const statusOutput = document.getElementById("status");
const countOutput = document.getElementById("event-count");

// when load events is hit first!
// loading state
export function renderLoading() {
  statusOutput.textContent = "Loading events..";

  eventsContainer.innerHTML = "";
  countOutput.textContent = "0";
}

// when we have an error
export function renderError(message) {
  statusOutput.textContent = `Error: ${message}`;

  eventsContainer.innerHTML = "";
  countOutput.textContent = "0";
}

export function renderEmpty() {
  statusOutput.textContent = "No events found!";

  eventsContainer.innerHTML = "";
  countOutput.textContent = "0";
}

export function renderEvents(events) {
  eventsContainer.innerHTML = "";

  if (events.length == 0) {
    renderEmpty();
    return;
  }

  statusOutput.textContent = "Events loaded successfully.";

  countOutput.textContent = String(events.length);

  events.forEach((event) => {
    const article = document.createElement("article");

    const title = document.createElement("h2");

    const genre = document.createElement("p");

    const details = document.createElement("p");

    const price = document.createElement("p");

    title.textContent = event.displayName;

    genre.textContent = `Genre: ${event.genre}`;

    details.textContent = `${event.date} at ${event.venue}`;

    price.textContent = `Price: ${event.formattedPrice}`;

    article.append(title, genre, details, price);

    eventsContainer.appendChild(article);
  });
}
