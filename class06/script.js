// we use fetch() to get external data.

// Most web APIs use --> they send JSON

//                                  JSON --> Javascript Object Notation

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    console.log(response);
    return response.json(); // what does .json() actually do here?
  })
  .then((user) => {
    console.log(user.name);
  });

// 1. servers responses with JSON text
// 2. JS needs to turn that text into usable objects
// 3. this conversion process is part of serialization/deserialization

let obj = {
  name: "Leanne Graham",
  address: "123 street",
  // and the rest
};

// serialization --> turning data into text.
// deserialization --> turning text back into usable data.

//          ^^ conversion / convert

// so what is JSON exactly??
// it is a text format used to represent structured data

// why do we use it?
//  it is readable --- it works well across systems -- it is widely used in web APIs

// JS object vs JSON

// JS object -->
const student = {
  name: "Alice",
  program: "Web Dev",
  semester: 4,
};

console.log(student);

// JSON text
const jsonText = '{"name":"Alice","program":"Web Dev","semester":4}';

console.log(jsonText);

// ^^ these are not the same thing. 1st is a JS Object, second is a string containing
//    JSON text.

// comparison -->

// JS object:
// - lives as a JS value
// - can have methods
// - keys do not need quotes
// - uses JS syntax rules

// JSON:
// - is plain text
// - used for exchanging data
// - keys must use double quotes
// - must follow string JSON syntax

/**
 * Valid JSON types
 */

// - string
// - number (int, float, etc.)
// - boolean
// - null
// - object
// - array

// IMPORTANT : JSON DOES NOT SUPPORT
//                          FUNCTIONS
//                          COMMENTS
//                          UNDEFINED

// now let's do some PARSE
