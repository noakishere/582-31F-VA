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
