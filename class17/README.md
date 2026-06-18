# Web Interface Programming 2 — Lab

## Student Handout: World Cup Dashboard Components

### Duration

2 hours

### Format

Guided VCS lab

---

# Objective

In this lab, you will build a small **World Cup 2026 Dashboard** using modular JavaScript and reusable UI components.

The goal is to build a small but well-structured frontend application using reusable components.

---

# Learning Goals

By the end of this lab, you should be able to:

- fetch and use JSON data
- organize code into modules
- model data with a JavaScript class
- use getters, setters, and static methods
- create a custom element
- use Shadow DOM to isolate a component’s internal HTML and CSS
- handle user interaction between components and the page
- manage errors cleanly
- track development with Git commits and a feature branch

---

# Repository Setup

You will complete this lab **inside your existing course repository**.

## Step 1

Open your existing repository.

## Step 2

Create a new folder for this lab.

## Step 3

All files for this lab should go inside that folder.

# Lab Theme

## World Cup Dashboard

You will build a mini dashboard that:

- loads World Cup team data from JSON
- displays each team as a reusable custom element
- uses Shadow DOM for component structure and styling
- allows the user to view more information about a selected team
- organizes the project into modules
- tracks work with Git

---

# Files Provided

You will be given:

- `teams.json`

Place this file inside your lab folder.

---

# Files You Must Create

Create at least these files inside your lab folder:

- `index.html`
- `app.js`
- `api.js`
- `team.js`
- `ui.js`
- `team-card.js`

You may create more files if needed.

---

# Provided JSON File

## `teams.json`

```json id="82003"
[
  {
    "id": 1,
    "name": "Argentina",
    "group": "A",
    "points": 6,
    "played": 2,
    "goalDifference": 3
  },
  {
    "id": 2,
    "name": "France",
    "group": "B",
    "points": 4,
    "played": 2,
    "goalDifference": 2
  },
  {
    "id": 3,
    "name": "Brazil",
    "group": "C",
    "points": 3,
    "played": 2,
    "goalDifference": 1
  },
  {
    "id": 4,
    "name": "Japan",
    "group": "D",
    "points": 6,
    "played": 2,
    "goalDifference": 4
  },
  {
    "id": 5,
    "name": "Morocco",
    "group": "E",
    "points": 4,
    "played": 2,
    "goalDifference": 1
  },
  {
    "id": 6,
    "name": "Canada",
    "group": "F",
    "points": 1,
    "played": 2,
    "goalDifference": -2
  }
]
```

---

# Part 1 — Build the HTML shell

Create `index.html`.

Your page must include:

- a title
- a short description
- a **Load Teams** button
- a **Clear** button
- a status/message area
- a container for team cards
- a container for selected team details

This page should make sense even before JavaScript loads the data.

That means your base HTML should already contain:

- headings
- placeholder text
- named sections

---

## Suggested HTML starter

```html id="82004"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>World Cup Dashboard</title>
  </head>
  <body>
    <main>
      <h1>World Cup Dashboard</h1>
      <p id="status">Click the button to load teams.</p>

      <button id="load-btn">Load Teams</button>
      <button id="clear-btn">Clear</button>

      <section>
        <h2>Teams</h2>
        <div id="teams-container"></div>
      </section>

      <section>
        <h2>Selected Team</h2>
        <div id="details-container">
          <p>No team selected yet.</p>
        </div>
      </section>
    </main>

    <script type="module" src="app.js"></script>
  </body>
</html>
```

---

## Git checkpoint

After creating the basic file structure and HTML shell, make a commit.

---

# Part 2 — Create the `Team` class

Create `team.js`.

You must create a class called:

```javascript id="82006"
Team;
```

---

## Constructor data

Your class must store:

- `id`
- `name`
- `group`
- `points`
- `played`
- `goalDifference`

---

## Required getter

Create a getter called:

```javascript id="82007"
summary;
```

It should return a readable text summary such as:

```text id="82008"
Argentina - Group A - 6 pts
```

---

## Required setter

Create a setter for:

```javascript id="82009"
points;
```

It must reject invalid values such as:

- negative numbers

---

## Required static method

Create a static method called:

```javascript id="82010"
fromObject(data);
```

It must:

- accept a plain object from JSON
- return a `Team` instance

---

## Git checkpoint

Commit after creating the `Team` class.

---

# Part 3 — Create the fetch module

Create `api.js`.

This file is responsible for fetching the team data.

---

## Requirement

Create a function:

```javascript id="82013"
fetchTeams();
```

It must:

- fetch `teams.json`
- check the response
- parse the JSON
- return the result

---

## Git checkpoint

Commit after creating the fetch module.

---

# Part 4 — Create the custom element with Shadow DOM

Create `team-card.js`.

You must create a reusable custom element called:

```html id="82016"
<team-card></team-card>
```

---

## Requirements

Your custom element must:

- extend `HTMLElement`
- use `attachShadow({ mode: "open" })`
- render its content inside the shadow root
- use attributes for team data
- include scoped CSS inside the shadow root
- include a **View Details** button

---

## Attributes to use

Your component should read at least these attributes:

- `name`
- `group`
- `points`
- `played`
- `goal-difference`

## Important note

Your component should use helper methods like:

- `getName()`
- `getGroup()`
- `getPoints()`

Do not put all logic directly inside `connectedCallback()`.

---

## Git checkpoint

Commit after creating the custom element.

---

# Part 5 — Render teams into the page

Create `ui.js`.

This file is responsible for rendering team cards into the page.

---

## Requirement

Create a function:

```javascript id="82019"
renderTeams(teams, container);
```

It must:

- clear the container
- create a `team-card` for each `Team`
- set the appropriate attributes
- append the card to the container

## Git checkpoint

Commit after creating the rendering module.

---

# Part 6 — Connect everything in `app.js`

Create `app.js`.

This file should connect:

- the page buttons
- the fetch logic
- the `Team` class
- the UI rendering

---

## Requirements

When the user clicks **Load Teams**:

1. show a loading message
2. fetch the raw JSON
3. convert each object into a `Team` instance using `Team.fromObject()`
4. render the teams
5. update the status message

When the user clicks **Clear**:

- remove all cards
- reset the details section
- reset the status message

---

## Suggested DOM elements

You will likely need:

- `load-btn`
- `clear-btn`
- `status`
- `teams-container`
- `details-container`

---

## Git checkpoint

Commit after wiring the app together.

---

# Part 7 — Add team details interaction

Now make the page interactive.

When the user clicks **View Details** inside a `team-card`, the details section should update with more information about the selected team.

---

## Recommended approach

Inside the custom element:

- add a click listener to the button
- dispatch a custom event called:

```javascript id="82023"
team - selected;
```

Use `detail` to send the team data.

Then in `app.js`:

- listen for the event
- update the details container

---

## Details section requirements

The selected team display must show at least:

- name
- group
- points
- matches played
- goal difference

---

## Git checkpoint

Commit after adding details-panel interaction.

---

# Part 8 — Error handling

Your app must handle errors clearly.

At minimum, handle:

- failed fetch requests
- bad HTTP responses
- invalid data passed into the `Team` class
- empty/cleared state

Use:

- `throw`
- `.catch()`
- and/or `try/catch`

The page should show visible feedback to the user when something goes wrong.

---

## Suggested status messages

Examples:

- `Loading teams...`
- `Teams loaded successfully.`
- `Failed to load teams.`
- `Dashboard cleared.`

---

## Git checkpoint

Commit after adding error handling improvements.

---

# Part 9 — Feature branch enhancement

Now create a small feature branch for one improvement.

You must create a branch such as:

```bash id="82027"
git checkout -b feature/highlight-leaders
```

Complete **one** of these enhancements:

## Option A — Highlight leaders

Highlight teams with 5 or more points.

## Option B — Group badge

Display a styled badge for the team’s group.

## Option C — Search field

Add a text input that filters visible team cards by team name.

After finishing your feature:

- commit it
- merge it back into `main`

### Example commands

```bash id="82028"
git add .
git commit -m "Add highlight feature for top teams"
git checkout main
git merge feature/highlight-leaders
```

# Suggested Workflow

A good order for completing the lab is:

1. create the new lab folder in your repository
2. build the HTML shell
3. create the `Team` class
4. create the API module
5. create the `team-card` custom element
6. create the rendering module
7. connect everything in `app.js`
8. add details interaction
9. improve error handling
10. create a feature branch
11. implement one enhancement
12. merge back into `main`
