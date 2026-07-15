We want to have a sequence of steps to debug:

1. Did the module load?
2. Did the event listener run?
3. Did the request start?
4. Did the request succeed?
5. Did JSON parsing succeed?
6. Does the data have the expected structure?
7. Were objects created correctly?
8. Did the rendering function run?
9. Did the DOM elements exist?

## Debugging app.js

`console.log("app.js is loaded")`

if this doesn't appear: (and no errors)

1. check the script path (inside html)
2. check type="module"
3. check the browser console (for errors in case!)
4. check whether the page is being served properly!

## Inspecting raw data

`console.table(array)`

for an array of similarly shaped objects, this helps immensely!

## Inspecting one item

`console.log(array[0])`

A common bug is miscommunication between data and interface:

- interface is expecting `item.eventTitle`
- data contains `item.title`

## confirm rendering

At the bottom of your render function, you can add a `console.log("Rendering done", events)`

This determines whether the UI module received the expected array
