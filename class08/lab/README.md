# Lab

## Objective

In this lab, you will build a small dashboard that loads users from an external API and displays related posts for each user.

This lab combines:

- fetch()
- JSON data
- DOM rendering
- related API data
- loading and error states
- Bootstrap styling
- Git and GitHub workflow

## Lab Theme

### User & Posts Dashboard

You will create a page that:

- loads the first 5 users from an API
- displays each user in a Bootstrap card
- includes a Load Posts button on each card
- loads posts related to that specific user
- shows the first 3 posts for that user

## APIs to Use

Users
`https://jsonplaceholder.typicode.com/users`

Posts
`https://jsonplaceholder.typicode.com/posts`

### Important relationship

Each post includes a userId.

That means:

- a post belongs to a specific user
- you can match posts to users by comparing:
  `post.userId === user.id`

### Files to Create

Create these files:

- index.html
- app.js

You may also create style.css if you want custom styles, but it is optional.

## Part 1 — Build the Page Structure

Create a page with:

- a title
- a short description
- a Load Users button
- a Clear button
- a global status area
- a responsive Bootstrap row where user cards will appear

You must use Bootstrap from a CDN. (Or make your own style.css)

## Part 2 — Load and Display Users

When the user clicks Load Users:

- show a loading message in the status area
- fetch the users from the API
- check the response
- parse the JSON
- display the first 5 users
- show a success message
- handle errors if something goes wrong

## User Card Requirements

Each Bootstrap card must display at least:

- name
- email
- phone
- city
- company name

Each card must also include a button:

- Load Posts

## Part 3 — Load Posts for One User

When a user’s Load Posts button is clicked:

- show a loading message inside that card
- fetch the posts from the posts API
- check the response
- parse the JSON
- filter the posts that belong to that user
- display the first 3 posts for that user

## Post Display Requirements

For each post, display at least:

- title
- body

You may display the posts:

- inside the user card
- below the user card
- in a separate section connected to the card

The simplest approach is to display them inside the same user card.

## Part 4 — Clear Button

When the Clear button is clicked:

- remove all user cards
- remove all post content
- reset the status area

## JavaScript Requirements

Your code should be organized into reusable functions.

Recommended functions:

```
setStatus(message, type)
clearDashboard()
loadUsers()
renderUserCard(user)
loadPostsForUser(user, postsContainer)
renderPosts(posts, container)
```

You do not have to use these exact names, but your code should be broken into clear functions.

## Git and GitHub Requirement

For this lab, you must also use Git and GitHub.

### Required tasks

You must:

- commit after every meaningful feature addition or change

### Important rule

- Do not wait until the end and make one giant commit.

**You must commit incrementally as you build the lab.**

Your repository should show a clear development history with multiple commits.

A good lab will usually have **many small commits**, not 2 or 3 huge ones.

## Suggested Workflow

A good order for completing the lab is:

- build the HTML structure
- make your first commit
- select DOM elements in JavaScript
- build setStatus()
- commit
- build loadUsers()
- commit
- render the first 5 users
- commit
- add a Load Posts button to each card
- commit
- build loadPostsForUser()
- commit
- filter posts by userId
- commit
- render the first 3 posts
- commit
- add the clear button
- commit
- improve styling and spacing
- commit
- complete a challenge task
- commit
- push everything to GitHub

## Challenge Tasks

Complete at least one of the following challenge tasks.

### Challenge 1 — Show/Hide Posts

After posts are loaded, let the user hide and show them again with a button.

### Challenge 2 — Cache Posts

If posts for a user have already been loaded once, do not fetch them again. Reuse the already loaded data.

### Challenge 3 — Search Users

Add a text input that lets the user filter visible user cards by name after users are loaded.

### Challenge 4 — Fetch Posts Once

Instead of fetching posts every time a user button is clicked, fetch all posts once and filter them locally.

### Challenge 5 — Better Loading UI

Use a Bootstrap spinner either:

- in the global status area
- inside each user card while posts are loading
- or both
