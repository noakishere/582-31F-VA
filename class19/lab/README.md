# Web Interface Programming 2

## Integrated Component-Based Mini-Project Workshop

### Theme: Festival Lineup Guide

## Duration

2 hours

## Format

Integrated mini-project workshop with Git checkpoints

---

# Session purpose

In this workshop, you will build a small but structured frontend website called **Festival Lineup Guide**.

This lab is designed to bring together the main interface concepts from the course into one coherent project.

Your mini-project must include:

- modules
- `fetch()`
- JSON
- DOM updates
- classes
- getter, setter, and static method
- one `<template>`
- one custom element
- Shadow DOM
- helper functions
- event handling
- error handling
- Git commits
- one feature branch and merge

---

# Project concept

You are building a **festival lineup website** that lets users:

- load artists from JSON
- view the lineup as reusable cards
- click an artist to see more information
- work with a component-based structure
- optionally add a feature such as filtering, highlighting, or favorites

---

# Files provided

You will be given:

- `artists.json`

Place it inside your lab folder.

---

# Files you must create

Create at least these files inside your lab folder:

- `index.html`
- `app.js`
- `api.js`
- `artist.js`
- `ui.js`
- `artist-card.js`

You may create additional files if needed.

# Git requirements

You must make multiple meaningful commits during the workshop.

You must also create **one feature branch**, complete one enhancement on that branch, and merge it back into `main`.

Your Git history should show the project growing in stages.

# Feature branch requirement

You must create a feature branch such as:

```bash
git checkout -b feature/highlight-headliners
```

Then complete one enhancement, commit it, and merge it back into `main`.

Example:

```bash
git add .
git commit -m "Highlight headliner artists"
git checkout main
git merge feature/highlight-headliners
```

---

# Provided JSON file

## `artists.json`

```json
[
  {
    "id": 1,
    "name": "Björk",
    "genre": "Art Pop",
    "stage": "Main Stage",
    "time": "18:00",
    "country": "Iceland",
    "headliner": true
  },
  {
    "id": 2,
    "name": "Radiohead",
    "genre": "Alternative Rock",
    "stage": "Main Stage",
    "time": "21:30",
    "country": "UK",
    "headliner": true
  },
  {
    "id": 3,
    "name": "Rosalía",
    "genre": "Pop / Flamenco",
    "stage": "River Stage",
    "time": "19:00",
    "country": "Spain",
    "headliner": false
  },
  {
    "id": 4,
    "name": "Tame Impala",
    "genre": "Psychedelic Pop",
    "stage": "River Stage",
    "time": "20:15",
    "country": "Australia",
    "headliner": false
  },
  {
    "id": 5,
    "name": "Aphex Twin",
    "genre": "Electronic",
    "stage": "Night Stage",
    "time": "23:00",
    "country": "UK",
    "headliner": true
  },
  {
    "id": 6,
    "name": "FKA twigs",
    "genre": "Experimental Pop",
    "stage": "Garden Stage",
    "time": "17:30",
    "country": "UK",
    "headliner": false
  }
]
```

---

# Part 1 — Build the base HTML page

Create `index.html`.

Your page must include:

- a title
- a short intro
- a **Load Lineup** button
- a **Clear** button
- a status message area
- one `<template>`
- one lineup container
- one details panel

---

## Important requirement

You must use **one `<template>`** for the artist card structure.

The template must contain:

- the artist card HTML
- component-specific CSS
- placeholders for artist information
- one **View Details** button

## Git checkpoint

After creating the lab folder, file structure, and base HTML shell, make a commit.

---

# Part 2 — Create the `Artist` class

Create `artist.js`.

You must create a class called:

```javascript
Artist;
```

---

## Constructor fields

Store:

- `id`
- `name`
- `genre`
- `stage`
- `time`
- `country`
- `headliner`

---

## Required getter

Create:

```javascript
summary;
```

It should return something like:

```text
Björk - Art Pop - Main Stage
```

---

## Required setter

Create a setter for:

```javascript
headliner;
```

It should only allow boolean values.

---

## Required static method

Create:

```javascript
fromObject(data);
```

It should convert raw JSON data into an `Artist` instance.

## Git checkpoint

Commit after adding the `Artist` class.

---

# Part 3 — Create the API module

Create `api.js`.

This file is responsible for loading the JSON data.

## Required function

Create:

```javascript
fetchArtists();
```

It must:

- fetch `artists.json`
- check `response.ok`
- parse the JSON
- return the data

## Git checkpoint

Commit after adding the API module.

---

# Part 4 — Create the custom element with Shadow DOM

Create `artist-card.js`.

You must create a reusable custom element called:

```html
<artist-card></artist-card>
```

---

## Required concept combination

This part must combine all three of these:

### 1. Template

The card’s HTML structure comes from the `<template>` in `index.html`.

### 2. Custom Element

The card is rendered through a reusable custom element class.

### 3. Shadow DOM

The cloned template must be inserted into a shadow root so the component has isolated internal structure and styles.

---

## Requirements

Your custom element must:

- extend `HTMLElement`
- use `attachShadow({ mode: "open" })`
- clone the template
- fill the template with artist data
- append the clone into the shadow root
- include a **View Details** button
- dispatch a custom event when clicked

## Git checkpoint

Commit after adding the custom element with template + Shadow DOM.

---

# Part 5 — Render the lineup

Create `ui.js`.

## Required function

Create:

```javascript
renderArtists(artists, container);
```

It must:

- clear the container
- create one `<artist-card>` per artist
- set all required attributes
- append the card

## Git checkpoint

Commit after adding the rendering module.

# Part 6 — Connect everything in `app.js`

This file should coordinate:

- buttons
- fetching
- class conversion
- rendering
- details panel updates
- error handling

## Required behavior

When the user clicks **Load Lineup**:

- show loading status
- fetch the data
- convert each raw object into an `Artist` instance
- render the lineup
- update the status message

When the user clicks **Clear**:

- clear the lineup
- reset the details panel
- reset the status

When an artist card dispatches `artist-selected`:

- update the details panel

## Git checkpoint

Commit after wiring the app together.

# Part 7 — Error handling

Your project must visibly handle:

- failed fetch requests
- bad HTTP responses
- invalid `Artist` data
- clear / empty state

Use:

- `throw`
- `.catch()`
- or `try/catch` where appropriate

Your page should show useful status messages.

Examples:

- `Loading lineup...`
- `Lineup loaded successfully.`
- `Failed to load lineup.`
- `Lineup cleared.`

---

## Git checkpoint

Commit after improving error handling and page feedback.

# Part 8 — Feature branch enhancement

Now create one feature branch and add one enhancement.

## Required branch

For example:

```bash
git checkout -b feature/highlight-headliners
```

Complete **one** of the following:

### Option A — Highlight headliners

Give headliner artists a stronger visual style.

### Option B — Filter by stage

Add controls to filter by:

- Main Stage
- River Stage
- Night Stage
- Garden Stage

### Option C — Favorite artist

Add a second button that marks an artist as a favorite in the details panel or with a badge.

### Option D — Search by name

Add a text input that filters visible cards by artist name.

When finished:

- commit the feature
- switch back to `main`
- merge the branch

# Things to watch out for

## 1. Do not forget the template

This lab must actually use the `<template>` element.

The card structure should come from:

```html
<template id="artist-template"></template>
```

## 2. Do not forget Shadow DOM

You must actually attach a shadow root:

```javascript
const shadow = this.attachShadow({ mode: "open" });
```

## 3. Do not insert the clone into the normal DOM of the card

Append the clone into the shadow root:

```javascript
shadow.appendChild(clone);
```

## 4. Do not call `attachShadow()` more than once

Each custom element gets one shadow root.

## 5. Do not put all logic inside `connectedCallback()`

Use helper methods and a `render()` method.

## 6. Do not wait until the end to commit

This is also a Git workflow lab.

# What will be graded

Your work will be graded on:

- correct use of `fetch()`
- correct JSON handling
- correct use of modules
- correct use of the `Artist` class
- meaningful getter, setter, and static method
- actual use of the `<template>` element
- actual use of a custom element
- actual use of Shadow DOM
- working lineup rendering
- working details panel interaction
- visible error handling
- meaningful Git history
- correct use of one feature branch and merge
