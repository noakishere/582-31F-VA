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

// now let's do some parsing via parse()

// JSON.parse()
const studentJSON = '{"name":"Alice","program":"Web Dev","semester":4}';

const parsedStudent = JSON.parse(studentJSON);
console.log(parsedStudent);
console.log(typeof studentJSON);
console.log(typeof parsedStudent);

// Let's try an array

const arrayJSON = '["HTML","CSS","JavaScript"]';
const topics = JSON.parse(arrayJSON);

console.log(topics);

// Parsed JSON can become arrays too ^^^

/**
 * Nested Object example
 */

const nestedJSON = `
{
    "name":"Alice",
    "address":{
        "city": "Montreal",
        "postalCode": "H1A 1A1"
    }
}
`;

console.log("=========================");
const parsedUser = JSON.parse(nestedJSON);
console.log(parsedUser);
console.log(parsedUser.address.city);

const badJSON = "{name:'Alice'}";
// ^ This would throw a syntax error, because
// 1. single quote outside, double quote inside
// 2. key needs to be within quotation marks.

// JSON.parse(badJSON);

/**
 * JSON.stringify()
 * converts a JS value into JSON text.
 * This is serialization in the other direction.
 *
 * This would be useful when we want to convert our JS object
 * and send it somewhere else as a JSON text.
 */
console.log("=================");
// JS Object
const product = {
  name: "Keyboard",
  category: "Accessories",
  price: 20.99,
};

const objToJSON = JSON.stringify(product);
console.log("JS Object: ");
console.log(product); // JS Object
console.log(typeof product); // object

console.log("JSON text");
console.log(objToJSON); // stringified JS object
console.log(typeof objToJSON); // string

// input: JS object
// output: string

console.log("=================");
