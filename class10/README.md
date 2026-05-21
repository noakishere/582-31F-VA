# Web Interface Programming 2 — Async Session

## Prototypes and Shared Behavior in JavaScript

### Format

Self-paced lab-lecture

### Estimated time

2 hours

---

# Objective

In this lesson, you will learn how JavaScript objects can share behavior through **prototypes**.

You will:

- compare duplicated methods with shared methods
- build objects using a constructor function
- add shared methods with `prototype`
- inspect the relationship between objects and their prototypes
- connect prototypes to the object-oriented ideas used later in the course

---

# Learning Goals

By the end of this session, you should be able to:

- explain what a prototype is
- explain why shared methods should not be duplicated on every object
- create objects with a constructor function
- add methods to a constructor’s prototype
- identify the difference between an own property and a prototype method
- inspect prototype relationships with JavaScript tools

---

# Part 1 — Reading Notes

## 1. What problem are prototypes solving?

Suppose you create many similar objects.

```javascript id="41001"
const user1 = {
  name: "Alice",
  greet() {
    return `Hello, I am ${this.name}`;
  },
};

const user2 = {
  name: "Mina",
  greet() {
    return `Hello, I am ${this.name}`;
  },
};
```

This works, but each object has its **own copy** of `greet()`.

If you create many similar objects, that becomes repetitive.

A better approach is:

- store each object’s own data on the object
- store shared behavior in one shared place

That shared place is the **prototype**.

---

## 2. What is a prototype?

A prototype is another object that JavaScript can check when a property or method is not found directly on the object itself.

Very simple model:

1. JavaScript checks the object
2. if the property is not there, it checks the prototype

This allows many objects to share the same method.

---

## 3. Why is this useful?

Prototypes help us:

- avoid repeating methods
- share behavior
- reduce duplication
- understand how JavaScript classes work underneath

---

## 4. Main design idea

Usually:

- object-specific data belongs on the object
- shared methods belong on the prototype

Examples of object-specific data:

- `name`
- `title`
- `price`
- `available`

Examples of shared behavior:

- `greet()`
- `displayInfo()`
- `borrow()`
- `returnBook()`

---

# Part 2 — Small Examples

## Example A — duplicated methods on each object

```javascript id="41002"
const student1 = {
  name: "Alice",
  introduce() {
    return `Hi, I am ${this.name}`;
  },
};

const student2 = {
  name: "Karim",
  introduce() {
    return `Hi, I am ${this.name}`;
  },
};

console.log(student1.introduce());
console.log(student2.introduce());
```

This works, but `introduce()` is duplicated.

---

## Example B — constructor function

```javascript id="41003"
function Student(name) {
  this.name = name;
}

const s1 = new Student("Alice");
const s2 = new Student("Karim");

console.log(s1.name);
console.log(s2.name);
```

This creates objects more systematically.

---

## Example C — shared method through the prototype

```javascript id="41004"
function Student(name) {
  this.name = name;
}

Student.prototype.introduce = function () {
  return `Hi, I am ${this.name}`;
};

const s1 = new Student("Alice");
const s2 = new Student("Karim");

console.log(s1.introduce());
console.log(s2.introduce());
```

Now both objects use the same shared method from `Student.prototype`.

---

## Example D — inspect the relationship

```javascript id="41005"
function Student(name) {
  this.name = name;
}

Student.prototype.introduce = function () {
  return `Hi, I am ${this.name}`;
};

const s1 = new Student("Alice");

console.log(Object.getPrototypeOf(s1) === Student.prototype);
```

This should output:

```text id="41006"
true
```

---

# Part 3 — Important Concept: Property Lookup

When you write:

```javascript id="41007"
s1.introduce();
```

JavaScript looks in this order:

1. does `s1` itself have `introduce`?
2. if not, check `s1`’s prototype
3. if found there, use it

This is called **prototype lookup**.

---

## Example: own property vs prototype method

```javascript id="41008"
function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.displayInfo = function () {
  return `${this.name} costs $${this.price}`;
};

const p1 = new Product("Keyboard", 49.99);

console.log(p1.name);
console.log(p1.displayInfo());
```

Here:

- `name` is an own property
- `displayInfo` is found on the prototype

---

# Part 4 — Guided Build

## Build a `Book` constructor with prototype methods

Create these files:

- `index.html`
- `app.js`

Your final page should display the output in the browser.

---

# Step 1 — HTML

```html id="41009"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Prototype Demo</title>
  </head>
  <body>
    <h1>Book Prototype Demo</h1>
    <button id="run-demo-btn">Run Demo</button>
    <div id="output"></div>

    <script src="app.js"></script>
  </body>
</html>
```

---

# Step 2 — Constructor function

In `app.js`, create a constructor function called `Book`.

Each book should store:

- `title`
- `author`
- `available`

```javascript id="41010"
function Book(title, author, available = true) {
  this.title = title;
  this.author = author;
  this.available = available;
}
```

---

# Step 3 — Add prototype methods

Add these shared methods on `Book.prototype`:

- `borrow()`
- `returnBook()`
- `displayInfo()`

Example structure:

```javascript id="41011"
Book.prototype.borrow = function () {
  if (this.available) {
    this.available = false;
    return `${this.title} has been borrowed.`;
  }
  return `${this.title} is already borrowed.`;
};

Book.prototype.returnBook = function () {
  this.available = true;
  return `${this.title} has been returned.`;
};

Book.prototype.displayInfo = function () {
  return `${this.title} by ${this.author} | Available: ${this.available}`;
};
```

---

# Step 4 — Create objects

Create at least two book objects:

```javascript id="41012"
const book1 = new Book("Clean Code", "Robert C. Martin");
const book2 = new Book("Eloquent JavaScript", "Marijn Haverbeke", false);
```

---

# Step 5 — Display the results in the page

Use the button to run a demo and show output in the browser.

```javascript id="41013"
const runDemoBtn = document.getElementById("run-demo-btn");
const output = document.getElementById("output");

runDemoBtn.addEventListener("click", () => {
  const book1 = new Book("Clean Code", "Robert C. Martin");
  const book2 = new Book("Eloquent JavaScript", "Marijn Haverbeke", false);

  output.innerHTML = `
    <p>${book1.displayInfo()}</p>
    <p>${book1.borrow()}</p>
    <p>${book1.displayInfo()}</p>
    <hr>
    <p>${book2.displayInfo()}</p>
    <p>${book2.returnBook()}</p>
    <p>${book2.displayInfo()}</p>
  `;
});
```

---

# Step 6 — Inspect shared behavior

Add these console checks:

```javascript id="41014"
console.log(Object.getPrototypeOf(book1) === Book.prototype);
console.log(book1.hasOwnProperty("title"));
console.log(book1.hasOwnProperty("displayInfo"));
```

Think about what each line means.

---

# Part 5 — Required Independent Tasks

## Task 1 — Add another prototype method

Add:

- `toggleAvailability()`

It should switch `available` between `true` and `false`.

Example idea:

```javascript id="41015"
Book.prototype.toggleAvailability = function () {
  this.available = !this.available;
  return `${this.title} availability is now ${this.available}`;
};
```

Update your page output to demonstrate it.

---

## Task 2 — Prove the method is shared

Add this console line:

```javascript id="41016"
console.log(book1.displayInfo === book2.displayInfo);
```

You should observe that it is `true`.

This is an important piece of evidence that both objects are using the same shared method.

---

## Task 3 — Add a prototype property

Add a shared property on the prototype:

```javascript id="41017"
Book.prototype.category = "General";
```

Then test:

```javascript id="41018"
console.log(book1.category);
console.log(book2.category);
```

---

## Task 4 — Override the shared property on one object

Now do:

```javascript id="41019"
book1.category = "Programming";
```

Then compare:

```javascript id="41020"
console.log(book1.category);
console.log(book2.category);
```

This will help you see the difference between:

- a shared prototype property
- an own property added directly to one object

---

# Part 6 — Reflection Questions

Answer these briefly.

1. What problem do prototypes solve?
2. What is the difference between an own property and a prototype method?
3. Where does JavaScript look if a method is not found directly on an object?
4. Why is `book1.displayInfo === book2.displayInfo` useful evidence?
5. What happened when you changed `book1.category`?
6. Why is it better to put shared behavior on the prototype instead of inside every object?

---

# Challenge Tasks

Complete at least **two**.

## Challenge 1 — Add another constructor

Create an `Author` constructor with:

- `name`
- `country`

Add a prototype method:

- `describe()`

Example idea:

```javascript id="41021"
function Author(name, country) {
  this.name = name;
  this.country = country;
}

Author.prototype.describe = function () {
  return `${this.name} is from ${this.country}`;
};
```

---

## Challenge 2 — Compare with class syntax

Rewrite your `Book` example using `class` syntax and compare the behavior.

Example start:

```javascript id="41022"
class BookClass {
  constructor(title, author, available = true) {
    this.title = title;
    this.author = author;
    this.available = available;
  }

  displayInfo() {
    return `${this.title} by ${this.author} | Available: ${this.available}`;
  }
}
```

## Challenge 3 — Show own properties clearly

Use:

```javascript id="41023"
console.log(book1.hasOwnProperty("title"));
console.log(book1.hasOwnProperty("category"));
console.log(book1.hasOwnProperty("displayInfo"));
```

Then explain what changed before and after setting:

```javascript id="41024"
book1.category = "Programming";
```

---

# Things to Watch Out For

## 1. Do not forget `new`

This is wrong:

```javascript id="41025"
const book1 = Book("Clean Code", "Robert C. Martin");
```

This is correct:

```javascript id="41026"
const book1 = new Book("Clean Code", "Robert C. Martin");
```

---

## 2. Do not define shared methods inside the constructor unless required

This works:

```javascript id="41027"
function Book(title, author) {
  this.title = title;
  this.author = author;
  this.displayInfo = function () {
    return `${this.title} by ${this.author}`;
  };
}
```

But it creates a separate copy of `displayInfo` for every object.

For this lesson, shared methods should go on the prototype.

---

## 3. Distinguish data from shared behavior

Usually:

- data belongs directly on the object
- shared methods belong on the prototype

---

## 4. Prototype properties can also be shadowed

If a property exists on the prototype and you assign the same property directly on one object, that object now has its own version.
