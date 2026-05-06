// Fetch

// A javascript native tool
// it's for requesting external data over HTTP.

// Last week we looked at Promises
// Today, we see how fetch returns a Promise

// fetch() is how browser JS asks a server for information

function getStudentData() {
  return new Promise((resolve) => {
    // resolve(55); a value
    // resolve("hello"); a string
    // a JS object
    resolve({ name: "Alice", Program: "Web dev" });
  });
}

getStudentData().then((result) => {
  console.log(result);
});

// now we're moving to fetch to make actual server
// requests.

// The general flow is that
// 1. our browser sends a request to a server.
// 2. The server sends back a response.
// 3. That response may contain data, often in JSON.

// this is the first thing to do, we dont get any data
// back
fetch("https://jsonplaceholder.typicode.com/users/1");

// we're logging a Promise, not the data
const fetchRequest = fetch("https://jsonplaceholder.typicode.com/users/1");
console.log(fetchRequest);

// ^^ Promise now --> result later

// .then gets a Response object, not the final parsed JSON data.
fetchRequest
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// fetch() gives us the response first.
// then, we will need to extract and parse the data from that response.

// we need to understand that :::::
// when fetch() succseeds, the Promise resolves with a Response object.

// Promise Object --> Response Object

// some important properties/attributes of a Response object are:
//  response.status for example: 200, 400, 404, etc. CHECK MDN DOC
//  response.ok

// and important method:
//  response.json()
fetchRequest
  .then((result) => {
    console.log("===================================");
    console.log("Status: ", result.status); // HTTP status code
    console.log("OK: ", result.ok); // when the resposne is successful we get ok
    console.log(result); // the Response object
  })
  .catch((error) => {
    console.log(error);
  });

// in general:
//              200 range = success
//              400 range = not found, not authorized, etc.
//              500 range = server error/issues

// now let's parse it!
fetchRequest
  .then((response) => {
    // we first parse our response to a JSON format.
    return response.json();
  })
  .then((result) => {
    console.log("===================================");
    console.log("Successful Response: ");
    console.log("Parsed JSON: ");
    console.log(result.name); // specific properties of json response
    console.log(result.email);
    console.log(result.company);
    console.log(result); // full response
  })
  .catch((error) => {
    console.log(error);
  });

// 404 example
badFetchRequest = fetch("https://jsonplaceholder.typicode.com/users/100");

badFetchRequest
  .then((response) => {
    // we first parse our response to a JSON format.
    return response.json();
  })
  .then((result) => {
    console.log("===================================");
    console.log("Not Found Response: ");
    console.log("Parsed JSON: ");
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
