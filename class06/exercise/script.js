// Task 1:
const jsonText =
  '{"title":"Web Interface Programming 2","credits":3,"active":true}';

// 1. Parse it
const obj = JSON.parse(jsonText);

// 2. log the object
console.log(obj);
// 3. log the title
console.log(obj.title);
// 4. log the credits
console.log(obj.credits);

// Task 2:
const course = {
  title: "Advanced Programming",
  credits: 3,
  active: true,
};

// 1. convert it to JSON text
const courseJSON = JSON.stringify(course);
// 2. log the result
console.log(courseJSON);
// 3. log the type
console.log(typeof courseJSON);

// Task 3:
// make it pretty print
// const prettyCourse = JSON.stringify(course, ["title"], 2);
const prettyCourse = JSON.stringify(course, null, 2);
console.log(prettyCourse);
