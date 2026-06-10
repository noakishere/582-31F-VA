# Web Interface Programming 2 — Project Exam

## Arcade Tournament Dashboard

### Duration

2 hours

### Format

Individual, project-based

---

# Objective

In this exam, you will build a small JavaScript web application that loads and displays arcade tournaments and their related player registrations.

Your application must be functional, readable, and organized.

---

# Files Provided

You are given these two JSON files:

- `tournaments.json`
- `registrations.json`

You must use these files in your solution.

---

# Files You Must Create

Create at least these files:

- `index.html`
- `app.js`
- `api.js`
- `ui.js`
- `tournament.js`

You may create more files if needed.

---

# Theme

A retro arcade is hosting several game tournaments and wants a dashboard to view tournament information and player registrations.

Your application should allow a user to:

- load tournaments
- view tournament details
- see registrations for a selected tournament
- see useful summary information

---

# Part 1 — Page Structure

Create a page with:

- a title
- a short description
- a **Load Tournaments** button
- a **Clear** button
- a status/message area
- a Bootstrap grid/container where tournament cards will appear
- a section where registration details for a selected tournament will appear

Your page must use Bootstrap from a CDN.

Your HTML should already provide a meaningful structure before any JavaScript runs.

That means your page should include:

- headings
- instructions or placeholder text
- clearly named sections for content

JavaScript should enhance this base page by loading and displaying data.

---

# Part 2 — Fetch and Render Tournaments

When the user clicks **Load Tournaments**:

1. show a loading message
2. fetch `tournaments.json`
3. check the response
4. parse the JSON
5. create `Tournament` objects from the data
6. render each tournament as a Bootstrap card

Each tournament card must display at least:

- tournament name
- game title
- entry fee
- max players
- registered players
- status

Each card must also include a button:

- **View Registrations**

---

# Part 3 — Tournament Class

Create a class called:

```javascript
Tournament;
```

Your class must include:

## Constructor data

- `id`
- `name`
- `game`
- `entryFee`
- `maxPlayers`
- `registeredPlayers`
- `status`

---

## Required getter

Create a getter called:

```javascript
spotsLeft;
```

It must return:

```javascript
maxPlayers - registeredPlayers;
```

---

## Required setter

Create a setter for:

```javascript
maxPlayers;
```

It must reject invalid values such as:

- `maxPlayers <= 0`
- `maxPlayers < registeredPlayers`

You should use proper error handling for invalid data.

---

## Required static method

Create a static method called:

```javascript
fromObject(data);
```

This method must:

- take a plain object from JSON
- return a `Tournament` instance

---

# Part 4 — Fetch and Display Related Registrations

When the user clicks **View Registrations** for one tournament:

1. show a loading message in the registration section
2. fetch `registrations.json`
3. check the response
4. parse the JSON
5. filter the registrations related to the selected tournament using the tournament ID
6. display the matching registrations

Each registration must display at least:

- player name
- gamer tag
- ticket type
- registration status

---

# Part 5 — Display Summary Information

When registrations are shown for a selected tournament, also display a summary that includes:

- total number of registrations for that tournament
- total number of **confirmed** players
- total expected revenue based on confirmed players and the tournament entry fee
- spots left from the `Tournament` object

This summary must be rendered in the page.

---

# Part 6 — Error Handling

Your application must handle errors clearly.

At minimum, handle:

- failed fetch requests
- bad HTTP responses
- invalid `Tournament` data
- no registrations found for a selected tournament

Use:

- `throw`
- `.catch()`
- and/or `try/catch` where appropriate

The page must show visible feedback to the user when something goes wrong.

---

# Part 7 — Modules

Your code must be organized into modules.

At minimum:

## `api.js`

Responsible for fetching data

## `ui.js`

Responsible for rendering the interface

## `tournament.js`

Responsible for the `Tournament` class

## `app.js`

Responsible for connecting everything together

Your main JavaScript file must be loaded with:

```html
<script type="module" src="app.js"></script>
```

---

# Part 8 — Bootstrap Styling

You must use Bootstrap seriously in this exam.

Your interface should include several of the following:

- `container`
- `row`
- `col-*`
- `card`
- `card-body`
- `btn`
- `alert`
- spacing utilities
- optionally a spinner

Your page should not look like plain unstyled HTML.

---

# Part 9 — Progressive Enhancement

Your page should have a meaningful base structure before JavaScript loads data.

That means your HTML should already include:

- headings
- placeholder text or instructions
- named sections for content

JavaScript should enhance the page by replacing placeholders with fetched content.

---

# Bonus Option

For bonus challenges, complete at least **one** of the following:

## Bonus A — Inheritance

Create a subclass such as:

```javascript
FeaturedTournament extends Tournament
```

or

```javascript
PremiumTournament extends Tournament
```

and give it one specialized behavior or property.

---

## Bonus B — Search/Filter

Add an input that filters visible tournament cards by tournament name or game title.

---

## Bonus C — Cache Registrations

If registrations for a tournament were already loaded once, do not fetch them again.

---

# Important Notes About the Data

Use the data as provided.

You may assume:

- `status` in tournaments is a string such as `"open"` or `"full"`
- registration `status` may be values such as:
  - `"confirmed"`
  - `"pending"`
  - `"cancelled"`

When computing summary data:

- only **confirmed** registrations count toward expected revenue
- only **confirmed** registrations count toward confirmed players

# Final Reminder

This is a **project exam**, so focus on:

- correctness
- clean structure
- meaningful integration of course concepts

A smaller, correct, well-organized solution is better than a large incomplete one.
