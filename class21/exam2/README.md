# Web Interface Programming 2

## Exam — Debugging a Modular Festival Lineup Application

### Theme

**Festival Lineup Manager**

### Duration

2 hours

### Type

Individual practical debugging exam

### Total

100 marks

---

# 1. Exam overview

You have been hired to repair an interactive festival lineup application.

The application loads information from two JSON files:

- `artists.json`
- `performances.json`

The application must combine the two datasets and display a complete festival lineup.

Each performance must be displayed using a reusable:

```html
<performance-card></performance-card>
```

custom element.

The custom element must render its internal interface by:

- cloning an HTML `<template>`
- attaching a Shadow DOM
- displaying performance and artist data
- applying different internal styling to sold-out performances

The application should also allow users to:

- search by artist or performance title
- filter by stage
- display only performances with available tickets
- sort performances by time
- view summary information
- reset all filters
- reload data after an error

The supplied application is incomplete and contains many defects.

Your task is to debug and complete the existing application.

You must preserve its modular architecture and component-based rendering.

---

# 2. Main challenge

The application must correctly integrate:

- two asynchronous requests
- two related datasets
- model classes
- class inheritance
- modular JavaScript
- array transformation
- filtering
- sorting
- summary calculations
- HTML templates
- Custom Elements
- Shadow DOM
- browser error handling
- DOM events
- application state

# 3. Project structure

```text
exam/
│
├── index.html
├── artists.json
├── performances.json
├── DEBUGGING_REPORT.md
│
├── css/
│   └── styles.css
│
└── js/
    ├── api.js
    ├── Artist.js
    ├── Performance.js
    ├── FeaturedPerformance.js
    ├── PerformanceCard.js
    ├── ui.js
    └── app.js
```

This structure must be preserved.

# 4. Application data

The application loads two separate datasets.

## Artist data

Each artist contains:

- `id`
- `name`
- `country`
- `genre`

## Performance data

Each performance contains:

- `id`
- `title`
- `artistId`
- `stage`
- `time`
- `ticketPrice`
- `ticketsRemaining`
- `featured`

The two resources are connected through:

```text
performance.artistId → artist.id
```

Example:

```json
{
  "artistId": 3
}
```

must be connected to the artist whose:

```json
{
  "id": 3
}
```

# 5. Required application behaviour

# Initial state

Before the data is loaded:

- the Load Lineup button is enabled
- all filters are disabled
- the Reset Filters button is disabled
- no performance cards appear
- the visible count is `0`
- the available-ticket count is `0`
- the average ticket price is `$0.00`
- the status displays:

```text
The festival lineup has not been loaded.
```

---

# Loading state

When Load Lineup is clicked:

- the status displays:

```text
Loading festival data...
```

- the Load Lineup button becomes disabled
- all filters remain disabled
- the Reset Filters button remains disabled
- previous cards are removed
- all summary values are reset

---

# Successful loading

After both JSON requests succeed:

- artist data is converted into `Artist` objects
- performance data is converted into `Performance` or `FeaturedPerformance` objects
- each performance is connected to the correct artist
- all performances are sorted by time
- all performances appear as `<performance-card>` elements
- the Load Lineup button becomes enabled
- all filter controls become enabled
- the Reset Filters button becomes enabled
- summary values are updated
- the status displays:

```text
Festival lineup loaded successfully.
```

---

# Custom Element rendering

Every visible performance must be represented by:

```html
<performance-card></performance-card>
```

The card must use:

- a Custom Element class
- Shadow DOM
- the provided `<template>`
- a deep clone of `template.content`

The page-level `ui.js` module must not construct the internal card markup directly.

It should create the custom element and give it a performance object.

Example:

```javascript
const card = document.createElement("performance-card");

card.performance = performance;
```

# Performance card content

Each card must display:

- performance title
- artist name
- artist country
- artist genre
- stage
- performance time
- formatted ticket price
- ticket availability
- release type

A normal performance must display:

```text
Regular lineup
```

A featured performance must display:

```text
Featured performance
```

A sold-out performance must display:

```text
Sold out
```

A performance with tickets must display:

```text
12 tickets remaining
```

or the corresponding ticket count.

---

# Shadow DOM styling

The internal template contains styles for:

- a normal performance
- a featured performance
- a sold-out performance

The component must add the correct internal class to its `<article>` element.

Examples:

```text
performance-card
performance-card featured
performance-card sold-out
```

The styling must remain inside the Shadow DOM.

---

# Search

The search field must match:

- performance title
- artist name

Search must be:

- case-insensitive
- updated while the user types
- safely trimmed

For example:

```text
Search: static
```

may match either:

- a performance title containing “Static”
- an artist name containing “Static”

# Stage filter

The stage dropdown must support:

- all stages
- Main Hall
- Basement
- Rooftop

Selecting a stage must show only matching performances.

---

# Ticket availability filter

When Available Tickets Only is checked:

- performances with zero remaining tickets are hidden

When it is not checked:

- both available and sold-out performances are shown

---

# Featured filter

When Featured Only is checked:

- only `FeaturedPerformance` objects are shown

When it is not checked:

- both normal and featured performances are shown

---

# Combined filtering

All filters must use AND logic.

For example:

```text
Search: echo
Stage: Basement
Available Tickets Only: checked
Featured Only: checked
```

must display performances satisfying every active condition.

The application must not show a record because only one condition matches.

# Sorting

The lineup must initially be sorted by performance time.

The sort dropdown must support:

- time ascending
- ticket price ascending
- ticket price descending
- artist name alphabetically

Sorting must apply to the currently filtered results.

Sorting must not permanently destroy or corrupt the original loaded data.

# Reset filters

The Reset Filters button must:

- clear the search field
- select All stages
- uncheck Available Tickets Only
- uncheck Featured Only
- restore Time ascending
- display the full lineup
- update all summary values

It must not send new API requests.

---

# Summary information

The application must display summary information for the currently visible performances.

## Visible performances

Display the number of currently visible performances.

## Available tickets

Display the total number of remaining tickets across visible performances.

Use the actual remaining-ticket values, not the number of performances with tickets.

## Average ticket price

Display the average price of visible performances.

It must:

- show two decimal places
- include a dollar sign
- display `$0.00` when no performances are visible

---

# Empty state

When no performances match:

- no cards appear
- visible performance count becomes `0`
- available-ticket count becomes `0`
- average price becomes `$0.00`
- the status displays:

```text
No performances match the current filters.
```

---

# Error state

If either JSON request fails:

- the error is logged using `console.error()`
- the interface displays a useful error message
- no incomplete lineup is rendered
- the Load Lineup button becomes enabled
- filters remain disabled
- Reset Filters remains disabled
- the performance container is cleared
- summary values return to zero

# 6. Required debugging stages

You should work through the application in the following order.

# Stage 1 — Application startup

Repair the project so that:

- `app.js` is loaded as a module
- every import path is correct
- every import matches its export
- capitalization matches file and class names
- all DOM selectors find existing elements
- no event handler runs immediately during registration
- the browser console has no initial module error

Do not continue until the project starts without module-loading errors.

# Stage 2 — API integration

Repair `api.js` so that:

- both requests are started correctly
- both requests are awaited
- the correct JSON files are requested
- both HTTP responses are checked
- failed responses throw useful errors
- `response.json()` is called
- JSON conversion is awaited
- both parsed arrays are returned
- incomplete data is not returned when one request fails

You should use `Promise.all()` or a correct equivalent.

# Stage 3 — Artist model

Repair `Artist.js` so that:

- constructor arguments are stored under the correct properties
- the artist label getter returns:

```text
Artist Name — Country
```

- the genre value remains available for rendering and filtering
- `__` or incorrect property names are not introduced

---

# Stage 4 — Performance inheritance

Repair `Performance.js` and `FeaturedPerformance.js` so that:

- constructor values are assigned correctly
- numeric values remain numbers
- the artist object is stored
- `formattedPrice` works
- `hasTickets` works
- `ticketLabel` works
- `lineupLabel` works
- static summary methods work
- `FeaturedPerformance` extends `Performance`
- `super()` receives arguments in the correct order
- featured objects identify themselves correctly
- the subclass correctly overrides the lineup label

---

# Stage 5 — Data association

Repair `app.js` so that:

- artist records become `Artist` instances
- each raw performance finds the correct artist
- performance records with `featured: true` become `FeaturedPerformance`
- all other records become `Performance`
- performances with missing artists are handled appropriately
- the complete transformed array is stored in application state
- the source state is not overwritten by filtering

---

# Stage 6 — Custom Element registration

Repair `PerformanceCard.js` so that:

- the class extends `HTMLElement`
- `super()` is called correctly
- Shadow DOM is attached
- the template is found
- `template.content` is cloned deeply
- the clone is appended to the Shadow DOM
- the custom-element name contains a hyphen
- `customElements.define()` uses the correct class
- the component can receive a performance object

# Stage 7 — Component rendering

Repair the component so that:

- assigning `card.performance = performance` stores the object
- the component renders after receiving data
- all internal selectors query the Shadow DOM
- model getters are accessed correctly
- methods are called only when they are methods
- normal, featured, and sold-out classes are assigned correctly
- repeated rendering does not duplicate the template
- missing data does not silently produce unrelated output

# Stage 8 — UI rendering

Repair `ui.js` so that:

- `<performance-card>` elements are created
- performance objects are passed to the cards
- cards are appended to the correct container
- loading, success, empty, and error states work
- summary elements are updated correctly
- custom-element internals are not recreated in `ui.js`

# Stage 9 — Filtering and sorting

Repair `app.js` so that:

- search checks both title and artist name
- search is case-insensitive
- stage filtering uses the stage property
- availability filtering uses ticket data
- featured filtering correctly identifies featured objects
- all active filters use AND logic
- sorting uses a copied array
- time sorting is correct
- numeric price sorting is correct
- alphabetical artist sorting is correct
- the original state array is preserved

# Stage 10 — Final testing

Students must test:

1. page startup
2. module loading
3. successful loading of both files
4. failed artist request
5. failed performance request
6. data association
7. standard component rendering
8. featured component rendering
9. sold-out rendering
10. title search
11. artist search
12. stage filter
13. ticket filter
14. featured filter
15. combined filters
16. each sort option
17. empty results
18. reset filters
19. summary calculations
20. repeated loading

# 7. Git requirements

Make at least five meaningful commits.

Do not use vague commit messages such as:

```text
fix
stuff
changes
working
almost done
final
final final
```

The Git history should show a logical debugging process.

No new branch is required.

# 8. Debugging report

Create:

```text
DEBUGGING_REPORT.md
```

Document six significant bugs.

For each bug, include:

1. file name
2. original defective code or behaviour
3. correction
4. explanation of why the original failed
5. how the correction was tested

# 9. Starter files

# `index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />

    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <title>Underground Festival Lineup</title>

    <link rel="stylesheet" href="./css/styles.css" />
  </head>

  <body>
    <header class="site-header">
      <h1>Underground Festival Lineup</h1>
    </header>

    <main class="container">
      <section class="controls">
        <button id="load-lineup" type="button">Load Lineup</button>

        <label for="search-input"> Search </label>

        <input
          id="search-input"
          type="search"
          placeholder="Performance or artist"
        />

        <label for="stage-filter"> Stage </label>

        <select id="stage-filter">
          <option value="">All stages</option>

          <option value="Main Hall">Main Hall</option>

          <option value="Basement">Basement</option>

          <option value="Rooftop">Rooftop</option>
        </select>

        <label>
          <input id="tickets-filter" type="checkbox" />

          Available tickets only
        </label>

        <label>
          <input id="featured-filter" type="checkbox" />

          Featured only
        </label>

        <label for="sort-select"> Sort </label>

        <select id="sort-select">
          <option value="time-asc">Time ascending</option>

          <option value="price-asc">Price ascending</option>

          <option value="price-desc">Price descending</option>

          <option value="artist-asc">Artist A–Z</option>
        </select>

        <button id="reset-filters" type="button">Reset Filters</button>
      </section>

      <section class="summary">
        <p id="status">The festival lineup has not been loaded.</p>

        <p>
          <strong> Visible performances: </strong>

          <span id="performance-count"> 0 </span>
        </p>

        <p>
          <strong> Available tickets: </strong>

          <span id="ticket-count"> 0 </span>
        </p>

        <p>
          <strong> Average ticket price: </strong>

          <span id="average-price"> $0.00 </span>
        </p>
      </section>

      <section id="performance-list" class="performance-grid"></section>
    </main>

    <template id="performance-card-template">
      <style>
        :host {
          display: block;
        }

        .performance-card {
          height: 100%;
          padding: 1rem;
          border: 1px solid #bbb;
          border-radius: 0.5rem;
          background: white;
          box-sizing: border-box;
        }

        .performance-card.featured {
          border-width: 3px;
        }

        .performance-card.sold-out {
          opacity: 0.65;
        }

        h2 {
          margin-top: 0;
        }

        .lineup-label {
          font-weight: bold;
        }
      </style>

      <article class="performance-card">
        <h2 class="title"></h2>

        <p class="artist"></p>

        <p class="country"></p>

        <p class="genre"></p>

        <p class="stage"></p>

        <p class="time"></p>

        <p class="price"></p>

        <p class="tickets"></p>

        <p class="lineup-label"></p>
      </article>
    </template>

    <script src="./js/app.js"></script>
  </body>
</html>
```

# `artists.json`

```json
[
  {
    "id": 1,
    "name": "Charli xcx",
    "country": "United Kingdom",
    "genre": "Electronic Pop"
  },
  {
    "id": 2,
    "name": "JPEGMAFIA",
    "country": "United States",
    "genre": "Experimental Hip-Hop"
  },
  {
    "id": 3,
    "name": "Nine Inch Nails",
    "country": "United States",
    "genre": "Industrial Rock"
  },
  {
    "id": 4,
    "name": "The Chemical Brothers",
    "country": "United Kingdom",
    "genre": "Electronic"
  },
  {
    "id": 5,
    "name": "Aphex Twin",
    "country": "Ireland / United Kingdom",
    "genre": "Electronic / IDM"
  }
]
```

# `performances.json`

```json
[
  {
    "id": 101,
    "title": "Signal Fractures",
    "artistId": 1,
    "stage": "Main Hall",
    "time": "20:00",
    "ticketPrice": 32,
    "ticketsRemaining": 18,
    "featured": true
  },
  {
    "id": 102,
    "title": "Black Sail",
    "artistId": 2,
    "stage": "Basement",
    "time": "21:15",
    "ticketPrice": 26.5,
    "ticketsRemaining": 0,
    "featured": false
  },
  {
    "id": 103,
    "title": "Nature Morte",
    "artistId": 3,
    "stage": "Main Hall",
    "time": "22:30",
    "ticketPrice": 29,
    "ticketsRemaining": 7,
    "featured": true
  },
  {
    "id": 104,
    "title": "Movimiento Para Cambio",
    "artistId": 4,
    "stage": "Rooftop",
    "time": "19:30",
    "ticketPrice": 22,
    "ticketsRemaining": 24,
    "featured": false
  },
  {
    "id": 105,
    "title": "Threshold of Faith",
    "artistId": 5,
    "stage": "Basement",
    "time": "23:30",
    "ticketPrice": 35.75,
    "ticketsRemaining": 4,
    "featured": true
  },
  {
    "id": 106,
    "title": "Static Echo",
    "artistId": 1,
    "stage": "Rooftop",
    "time": "18:45",
    "ticketPrice": 20,
    "ticketsRemaining": 0,
    "featured": false
  }
]
```

---

# `js/api.js`

```javascript
export async function getFestivalData() {
  const artistResponse = fetch("./artist.json");

  const performanceResponse = fetch("./performances.json");

  const responses = Promise.all(artistResponse, performanceResponse);

  if (artistResponse.ok || performanceResponse.ok) {
    throw new Error("Festival data could not be loaded.");
  }

  const artists = artistResponse.json;

  const performances = performanceResponse.json();

  return {
    artist: artists,
    performance: performances,
  };
}
```

---

# `js/Artist.js`

```javascript
export default class Artist {
  constructor(id, name, country, genre) {
    this.id = name;
    this.artistName = id;
    this.country = genre;
    this.genre = country;
  }

  get displayLabel() {
    return `${this.artistName} — ` + `${this.genre}`;
  }
}
```

---

# `js/Performance.js`

```javascript
export class Performance {
  constructor(id, title, artist, stage, time, ticketPrice, ticketsRemaining) {
    this.id = id;
    this.name = title;
    this.artist = artist;
    this.stage = time;
    this.time = stage;
    this.ticketPrice = String(ticketPrice);
    this.ticketsRemaining = String(ticketsRemaining);
  }

  get formattedPrice() {
    return `$${this.ticketPrice.toFixed}`;
  }

  get hasTickets() {
    return this.ticketsRemaining < 0;
  }

  get ticketLabel() {
    if (this.hasTickets) {
      return "Sold out";
    }

    return `${this.ticketsRemaining} ` + `tickets remaining`;
  }

  get lineupLabel() {
    return "Featured performance";
  }

  static totalAvailableTickets(performances) {
    return performances.reduce(
      (total, performance) => total + performance.ticketsRemaining,
      "",
    );
  }

  static averagePrice(performances) {
    if (performances.length === 0) {
      return "$0.00";
    }

    const total = performances.reduce(
      (sum, performance) => sum + performance.ticketPrice,
      0,
    );

    return (total / performances).toFixed(2);
  }
}
```

---

# `js/FeaturedPerformance.js`

```javascript
import Performance from "./Performance.js";

export class FeaturedPerformance {
    constructor(
        id,
        title,
        artist,
        stage,
        time,
        ticketPrice,
        ticketsRemaining,
        featured
    ) {
        super(
            title,
            id,
            stage,
            artist,
            ticketPrice,
            ticketsRemaining,
            time
        );

        this.featured = false;
    }

    get lineupLabel() {
        return "Regular lineup";
    }
}
```

---

# `js/PerformanceCard.js`

```javascript
export class PerformanceCard {
    constructor() {
        const shadow =
            this.attachShadow({
                mode: "open"
            });

        super();

        const template =
            document.getElementById(
                "performance-template"
            );

        shadow.appendChild(
            template.cloneNode()
        );
    }

    set performance(value) {
        this.performance = value;
        this.render;
    }

    get performance() {
        return this.performance;
    }

    render() {
        const article =
            document.querySelector(
                ".performance-card"
            );

        article.className =
            "performance-card";

        if (this.performance.featured) {
            article.classList.add(
                "sold-out"
            );
        }

        if (!this.performance.hasTickets) {
            article.classList.add(
                "featured"
            );
        }

        this.shadowRoot
            .querySelector(".title")
            .textContent =
                this.performance.title;

        this.shadowRoot
            .querySelector(".artist")
            .textContent =
                this.performance
                    .artist.displayLabel();

        this.shadowRoot
            .querySelector(".country")
            .textContent =
                this.performance.artist.genre;

        this.shadowRoot
            .querySelector(".genre")
            .textContent =
                this.performance.artist.country;

        this.shadowRoot
            .querySelector(".stage")
            .textContent =
                `Stage: ${
                    this.performance.time
                }`;

        this.shadowRoot
            .querySelector(".time")
            .textContent =
                `Time: ${
                    this.performance.stage
                }`;

        this.shadowRoot
            .querySelector(".price")
            .textContent =
                this.performance
                    .formattedPrice();

        this.shadowRoot
            .querySelector(".tickets")
            .textContent =
                this.performance
                    .ticketLabel();

        this.shadowRoot
            .querySelector(
                ".lineup-label"
            )
            .textContent =
                this.performance.lineupLabel;
    }
}

customElements.define(
    "performance",
    PerformanceCard()
);
```

---

# `js/ui.js`

```javascript
import { Performance } from "./Performance.js";

const performanceContainer = document.getElementById("performances");

const statusOutput = document.getElementById("status");

const performanceCount = document.getElementById("performance-count");

const ticketCount = document.getElementById("available-tickets");

const averagePrice = document.getElementById("average-price");

export function renderLoading() {
  statusOutput.textContent = "Festival lineup loaded successfully.";

  performanceContainer.innerHTML = "";

  performanceCount.textContent = "0";
  ticketCount.textContent = "0";
  averagePrice.textContent = "$0.00";
}

export function renderError(error) {
  statusOutput.textContent = `Error: ${error}`;

  performanceCount.textContent = "0";
}

export function renderPerformances(performance) {
  performanceContainer.innerHTML = "";

  if (!performance) {
    statusOutput.textContent =
      "No performances match " + "the current filters.";

    return;
  }

  performance.forEach((item) => {
    const card = document.createElement("performance");

    card.data = item;

    performanceContainer.appendChild(card);
  });

  statusOutput.textContent = "Festival lineup loaded successfully.";

  performanceCount.textContent = performances.length;

  ticketCount.textContent = Performance.totalAvailableTickets(performance);

  averagePrice.textContent = Performance.averagePrice;
}
```

---

# `js/app.js`

```javascript
import getFestivalData from "./api.js";

import { Artist } from "./Artist.js";

import { Performances } from "./Performance.js";

import { FeaturedPerformance } from "./FeaturedPerformance.js";

import "./PerformanceCards.js";

import { renderLoading, renderErrors, renderPerformance } from "./ui.js";

const loadButton = document.getElementById("load-festival");

const searchInput = document.getElementById("search");

const stageFilter = document.getElementById("stage-filter");

const ticketsFilter = document.getElementById("ticket-filter");

const featuredFilter = document.getElementById("featured-only");

const sortSelect = document.getElementById("sort-filter");

const resetButton = document.getElementById("reset");

let performances;

async function loadLineup() {
  renderLoading;

  loadButton.disabled = true;

  try {
    const data = getFestivalData();

    const artists = data.artists.map(
      (item) => new Artist(item.id, item.name, item.country, item.genre),
    );

    performances = data.performances.map((item) => {
      const artist = artists.filter((artist) => artist.id === item.artistId);

      if (item.featured) {
        return new FeaturedPerformance(
          item.id,
          item.title,
          artist,
          item.stage,
          item.time,
          item.ticketPrice,
          item.ticketsRemaining,
          item.featured,
        );
      }

      return new Performances(
        item.id,
        item.title,
        artist,
        item.stage,
        item.time,
        item.ticketPrice,
        item.ticketsRemaining,
      );
    });

    renderPerformance(performances);

    searchInput.disabled = false;
    stageFilter.disabled = false;
    ticketsFilter.disabled = false;
    featuredFilter.disabled = false;
    sortSelect.disabled = false;
    resetButton.disabled = false;
  } catch (error) {
    console.log("Lineup loaded:", error);

    renderErrors(error);
  }

  loadButton.disabled = true;
}

function applyFilters() {
  const searchTerm = searchInput.value;

  const stage = stageFilter.value;

  const availableOnly = ticketsFilter.value;

  const featuredOnly = featuredFilter.value;

  const sort = sortSelect.value;

  performances = performances.filter((performance) => {
    const matchesSearch =
      performance.title.includes(searchTerm) ||
      performance.artist.includes(searchTerm);

    const matchesStage = stage === "" || performance.time === stage;

    const matchesTickets = !availableOnly || performance.ticketsRemaining;

    const matchesFeatured = !featuredOnly || performance instanceof Performance;

    return matchesSearch || matchesStage || matchesTickets || matchesFeatured;
  });

  if (sort === "price-asc") {
    performances.sort((a, b) => a.ticketPrice > b.ticketPrice);
  }

  if (sort === "price-desc") {
    performances.sort((a, b) => a.ticketPrice < b.ticketPrice);
  }

  if (sort === "artist-asc") {
    performances.sort((a, b) => a.artist.name - b.artist.name);
  }

  renderPerformance(performances);
}

function resetFilters() {
  searchInput.value = "";
  stageFilter.value = "";
  ticketsFilter.value = false;
  featuredFilter.value = false;
  sortSelect.value = "time-asc";

  applyFilters;
}

loadButton.addEventListener("click", loadLineup());

searchInput.addEventListener("change", applyFilters);

stageFilter.addEventListener("input", applyFilters());

ticketsFilter.addEventListener("change", applyFilters);

featuredFilter.addEventListener("change", applyFilters);

sortSelect.addEventListener("change", applyFilters);

resetButton.addEventListener("click", resetFilters());
```

---

# `css/styles.css`

```css
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f3f3f3;
  color: #202020;
}

.site-header {
  padding: 1.5rem;
  background: #181818;
  color: white;
}

.container {
  width: min(1150px, 92%);
  margin: 2rem auto;
}

.controls {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.controls input,
.controls select,
.controls button {
  padding: 0.5rem;
}

.summary {
  margin-bottom: 1.5rem;
}

.performance-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
}
```

# 10. Expected architecture

The repaired application must preserve the following responsibilities.

## `api.js`

Responsible for:

- requesting both JSON resources
- validating both responses
- parsing both response bodies
- returning both datasets
- throwing data-loading errors

## `Artist.js`

Responsible for:

- artist data
- artist display label

## `Performance.js`

Responsible for:

- standard performance data
- ticket availability
- formatted ticket price
- ticket label
- regular lineup label
- summary calculations

## `FeaturedPerformance.js`

Responsible for:

- extending `Performance`
- identifying featured records
- overriding the lineup label

## `PerformanceCard.js`

Responsible for:

- registering `<performance-card>`
- attaching Shadow DOM
- cloning the HTML template
- receiving a performance object
- rendering the component
- applying internal visual states

## `ui.js`

Responsible for:

- loading state
- error state
- empty state
- creating component instances
- passing data to components
- updating summary values

## `app.js`

Responsible for:

- application state
- loading and transforming data
- associating artists and performances
- enabling and disabling controls
- filtering
- sorting
- resetting controls
- coordinating modules

# 11. Marking rubric

## Application startup and modules — 10 marks

Award marks for:

- `type="module"`
- valid import paths
- correct named and default imports
- correct capitalization
- component module loaded
- correct DOM selectors
- event handlers registered as references

## API integration — 12 marks

Award marks for:

- correct artist path
- correct performance path
- proper use of `Promise.all()` or an equivalent
- awaited responses
- correct `response.ok` checks
- meaningful errors
- called and awaited `response.json()`
- correct returned object structure

## Models and inheritance — 15 marks

Award marks for:

- correct `Artist` properties
- correct `Performance` properties
- numeric prices and ticket counts
- correct getters
- correct static methods
- proper `FeaturedPerformance` inheritance
- correct `super()` order
- correct overridden label

## Data association and application state — 12 marks

Award marks for:

- raw artists converted to `Artist`
- artist found using `find()`
- each performance connected to one artist object
- correct subclass selected
- source array stored
- source data preserved during filtering
- missing relationships handled sensibly

## Custom Element, Template, and Shadow DOM — 18 marks

Award marks for:

- extending `HTMLElement`
- calling `super()` before using `this`
- attaching Shadow DOM
- finding the correct template
- cloning `template.content`
- deep clone
- appending clone to Shadow DOM
- valid custom-element registration
- receiving a performance object
- correct setter without recursion
- rendering inside `shadowRoot`
- correct featured and sold-out classes
- no duplicated template content
- correct getter/property use

## UI rendering and summaries — 10 marks

Award marks for:

- correct performance container
- creation of `<performance-card>`
- performance assigned through the component interface
- loading state
- success state
- empty state
- error state
- correct visible count
- correct available-ticket total
- correctly formatted average price

## Filtering, sorting, and reset — 15 marks

Award marks for:

- trimmed case-insensitive search
- title search
- artist search
- stage filtering
- ticket filtering
- featured filtering
- AND logic
- sorting on copied results
- time sorting
- numeric price sorting
- alphabetical artist sorting
- reset controls
- source state remains intact

## Error handling — 3 marks

- `console.error()`
- visible useful error
- controls restored appropriately
- stale output cleared

## Git history — 2 marks

- at least five meaningful commits
- logical debugging progression

## Debugging report — 3 marks

Award marks for:

- six documented bugs
- all required categories represented
- accurate causes and corrections
- testing clearly described

Good luck!
