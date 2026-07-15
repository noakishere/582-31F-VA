// API Integration, Modular Code Organization, Debugging Support

// const response = await fetch(
//     "file.json"
// );

// const data = await response.json();

// console.log(data);

// export function renderThings(things) {
//     // render..
// }

// ^ this is not organized!

// what does async function do? it takes it own thread and runs the code (in parallel)
// what does async function return? (object type) a promise
async function loadEvents() {
  // what does fetch return here? a promise (which is not the final JSON data)
  // why do we use await? (pauses the async function until the promise is settled)
  const response = await fetch("events.json");

  // does fetch() reject for every HTTP error? No, fetch also provides a Response object!

  // we have to check the Response object, to verify and reject
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  // what does response.json() return? Also returns a promise
  const data = await response.json();

  console.log(data);
}

loadEvents();
