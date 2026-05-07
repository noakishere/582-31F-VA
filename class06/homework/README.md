## Objective

Build a small webpage that uses fetch() to load one user from an API and display the information in a nicely styled Bootstrap card.

## 1. Page structure

Create:

- a title
- a short description
- a Load User button
- a status/message area
- an empty area where the user card will appear

Use Bootstrap for layout and styling.

## 2. Fetch one user

When the button is clicked:

- show a loading message
- fetch this user:
  `https://jsonplaceholder.typicode.com/users/1`

- parse the JSON response
- display the user in the page
- handle errors if something goes wrong

## 3. Display the user in a Bootstrap card

The card must show at least:

- name
- email
- phone
- city

## 4. Use Bootstrap styling

Your page should use Bootstrap classes such as:

- container
- btn
- card
- alert

You do not need custom CSS unless you want it.

## Challenge options

Complete **one** of these: (**_or all!_**)

### Option A

Add a Clear button that removes the card and resets the message.

### Option B

Show a Bootstrap spinner while the data is loading.

### Option C

Also display the company name and website.

## What will be graded

- correct use of fetch()
- correct use of response.json()
- correct DOM updates
- basic error handling
- clean Bootstrap presentation

## Reflection Questions

Be ready to answer:

- What does fetch() return?
- Why do we need response.json()?
- What is the difference between the response object and the parsed user data?
- How does your page show that data is loading?
- How does your page handle an error?
