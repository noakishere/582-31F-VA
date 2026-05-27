# Web Interface Programming 2 — Async Session

## Student Handout: Inheritance in JavaScript

### Format

Self-paced lab-lecture

### Estimated time

2 hours

---

# Objective

In this lesson, you will learn how **inheritance** allows one object or class to build on another.

You will:

- review shared behavior through prototypes
- create a child type based on a parent type
- inherit shared methods
- add specialized behavior in the child
- connect prototype inheritance to modern `class` syntax

This session builds directly on the previous session about **prototypes**.

---

# Learning Goals

By the end of this session, you should be able to:

- explain what inheritance means in JavaScript
- explain why inheritance can reduce duplication
- create inheritance with constructor functions and prototypes
- use `Object.create()` to connect prototypes
- reset the `constructor` property correctly
- create inheritance with `class` and `extends`
- use `super()` in a child class
- distinguish inherited behavior from behavior added only to the child

---

# Part 1 — Reading Notes

## 1. What is inheritance?

Inheritance means one type can reuse behavior and structure from another type.

Very simple idea:

- a **parent** type defines common data and behavior
- a **child** type reuses that common behavior
- the child can also add its own specialized behavior

---

## 2. Why use inheritance?

Suppose you have several similar kinds of objects.

Examples:

- `Animal`, `Dog`, `Cat`
- `Vehicle`, `Car`, `ElectricCar`

These objects may share:

- some properties
- some methods

Instead of duplicating that code, inheritance lets a child type build on the parent.

---

## 3. Important design idea

A child should represent a **more specific version** of the parent.

For example:

- a `Dog` is an `Animal`
- a `Car` is a `Vehicle`

That is usually a good sign that inheritance may make sense.

---

## 4. Inheritance and prototypes

In JavaScript, inheritance is based on prototypes.

That means:

- the child object or child prototype links to the parent prototype
- if a method is not found on the child, JavaScript keeps looking higher in the chain

This is called the **prototype chain**.

---

# Part 2 — Example 1: Animals

## Example A — no inheritance, duplicated methods

```javascript id="42001"
function Dog(name) {
  this.name = name;
}

Dog.prototype.speak = function () {
  return `${this.name} says woof`;
};

function Cat(name) {
  this.name = name;
}

Cat.prototype.speak = function () {
  return `${this.name} says meow`;
};
```

This works, but there is duplication:

- both have `name`
- both are conceptually animals

A better design is to create an `Animal` parent.

---

## Example B — parent constructor

```javascript id="42002"
function Animal(name) {
  this.name = name;
}

Animal.prototype.describe = function () {
  return `This animal is named ${this.name}`;
};
```

Now `Dog` and `Cat` can inherit from `Animal`.

---

## Example C — child constructor: Dog

```javascript id="42003"
function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}
```

### Why `Animal.call(this, name)`?

This runs the parent constructor in the context of the new `Dog` object.

That means `Dog` gets the parent’s own properties, such as `name`.

---

## Example D — connect the prototype

```javascript id="42004"
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
```

Now `Dog` objects can use methods from `Animal.prototype`.

---

## Example E — add child-specific method

```javascript id="42005"
Dog.prototype.bark = function () {
  return `${this.name} barks loudly`;
};
```

---

## Example F — test it

```javascript id="42006"
const dog1 = new Dog("Buddy", "Golden Retriever");

console.log(dog1.describe());
console.log(dog1.bark());
```

Here:

- `describe()` is inherited from `Animal.prototype`
- `bark()` belongs to `Dog.prototype`

---

# Part 3 — Understanding the lookup chain

When you write:

```javascript id="42007"
dog1.describe();
```

JavaScript checks:

1. does `dog1` itself have `describe`?
2. if not, does `Dog.prototype` have it?
3. if not, does `Animal.prototype` have it?

Since `Animal.prototype` has it, JavaScript uses that method.

That is inheritance through the prototype chain.

---

# Part 4 — Guided Build

## Build `Vehicle` and `Car`

Now you will build your own inheritance example using **vehicles**.

Create these files:

- `index.html`
- `app.js`

Your page will display output in the browser.

---

# Step 1 — HTML

```html id="42008"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Inheritance Demo</title>
  </head>
  <body>
    <h1>Vehicle Inheritance Demo</h1>
    <button id="run-demo-btn">Run Demo</button>
    <div id="output"></div>

    <script src="app.js"></script>
  </body>
</html>
```

---

# Step 2 — Parent constructor in `app.js`

Create a parent constructor called `Vehicle`.

Each vehicle should have:

- `brand`

Add one shared method:

- `describe()`

```javascript id="42009"
function Vehicle(brand) {
  this.brand = brand;
}

Vehicle.prototype.describe = function () {
  return `Vehicle brand: ${this.brand}`;
};
```

---

# Step 3 — Child constructor: `Car`

Create a child constructor called `Car`.

Each car should have:

- `brand`
- `model`
- `running`

Use the parent constructor to set `brand`.

```javascript id="42010"
function Car(brand, model, running = false) {
  Vehicle.call(this, brand);
  this.model = model;
  this.running = running;
}
```

---

# Step 4 — Set up inheritance

```javascript id="42011"
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
```

---

# Step 5 — Add child-specific methods

Add:

- `start()`
- `stop()`
- `showModel()`

Example shape:

```javascript id="42012"
Car.prototype.start = function () {
  this.running = true;
  return `${this.model} is now running`;
};

Car.prototype.stop = function () {
  this.running = false;
  return `${this.model} has stopped`;
};

Car.prototype.showModel = function () {
  return `Model: ${this.model}`;
};
```

---

# Step 6 — Display results in the page

```javascript id="42013"
const runDemoBtn = document.getElementById("run-demo-btn");
const output = document.getElementById("output");

runDemoBtn.addEventListener("click", () => {
  const car1 = new Car("Toyota", "Corolla");
  const car2 = new Car("Honda", "Civic", true);

  output.innerHTML = `
    <p>${car1.describe()}</p>
    <p>${car1.showModel()}</p>
    <p>${car1.start()}</p>
    <hr>
    <p>${car2.describe()}</p>
    <p>${car2.showModel()}</p>
    <p>${car2.stop()}</p>
  `;
});
```

---

# Part 5 — Required Independent Tasks

## Task 1 — Add another animal child

Create a `Cat` constructor that also inherits from `Animal`.

A cat should have:

- `name`
- `color`

It must inherit `describe()` from `Animal`.

It must also have its own method:

- `meow()`

### Example shape

```javascript id="42014"
function Cat(name, color) {
  Animal.call(this, name);
  this.color = color;
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.meow = function () {
  return `${this.name} meows`;
};
```

---

## Task 2 — Add another vehicle child

Create an `ElectricCar` constructor that inherits from `Car`.

An electric car should have:

- `brand`
- `model`
- `batteryLevel`

It should inherit existing vehicle/car behavior and add its own method:

- `charge()`

### Example idea

```javascript id="42015"
function ElectricCar(brand, model, batteryLevel) {
  Car.call(this, brand, model);
  this.batteryLevel = batteryLevel;
}
```

Then connect the prototype chain correctly.

---

## Task 3 — Show both inheritance chains in the page

Update your browser output so it displays:

- one `Dog`
- one `Cat`
- one `Car`
- one `ElectricCar`

Show:

- inherited behavior
- child-specific behavior

---

## Task 4 — Prove inheritance works

Add console checks such as:

```javascript id="42016"
console.log(Object.getPrototypeOf(Dog.prototype) === Animal.prototype);
console.log(Object.getPrototypeOf(Car.prototype) === Vehicle.prototype);
console.log(Object.getPrototypeOf(ElectricCar.prototype) === Car.prototype);
```

Also test whether inherited methods are shared correctly.

---

# Part 6 — Modern class syntax

JavaScript also supports a cleaner syntax for inheritance through `class`.

You should know this syntax too.

## Parent class: `AnimalClass`

```javascript id="42017"
class AnimalClass {
  constructor(name) {
    this.name = name;
  }

  describe() {
    return `This animal is named ${this.name}`;
  }
}
```

## Child class: `DogClass`

```javascript id="42018"
class DogClass extends AnimalClass {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  bark() {
    return `${this.name} barks`;
  }
}
```

### Important ideas

- `extends` sets up inheritance
- `super(name)` calls the parent constructor

---

# Part 7 — Required class-syntax comparison task

Create a second version of one of your examples using `class` syntax.

You may choose either:

- `AnimalClass` + `DogClass`
  or
- `VehicleClass` + `CarClass`

Then test it in your code.

### Example

```javascript id="42019"
const dog2 = new DogClass("Max", "Beagle");
console.log(dog2.describe());
console.log(dog2.bark());
```

---

# Part 8 — Reflection Questions

Answer these briefly.

1. What is inheritance?
2. Why do we use `Animal.call(this, name)` or `Vehicle.call(this, brand)` in child constructors?
3. Why do we use `Object.create(...)`?
4. Why do we reset the `constructor` property?
5. What is the difference between inherited methods and child-specific methods?
6. How does `class ... extends ...` relate to prototypes?

---

# Challenge Tasks

Complete at least **one**.

## Challenge 1 — Override an inherited method

Override `describe()` in `Dog` or `Car` so that it gives a more specific result.

Example:

```javascript id="42020"
Dog.prototype.describe = function () {
  return `${this.name} is a ${this.breed}`;
};
```

Then compare this with the inherited version.

---

## Challenge 2 — Add a shared property to the parent prototype

Add:

```javascript id="42021"
Animal.prototype.kingdom = "Animalia";
Vehicle.prototype.type = "Transport";
```

Then observe how child objects use these properties.

---

## Challenge 3 — Add another child type

Create one more child type of your choice, such as:

- `Bird` from `Animal`
- `Truck` from `Vehicle`

Give it one unique method.

---

## Challenge 4 — Compare constructor-function inheritance and class inheritance

Write 3–4 sentences explaining:

- what is similar
- what is easier to read
- how both still rely on prototypes

---

# Things to Watch Out For

## 1. Do not forget to call the parent constructor

If you skip:

```javascript id="42022"
Animal.call(this, name);
```

or:

```javascript id="42023"
Vehicle.call(this, brand);
```

then the child may not receive the parent’s own properties correctly.

---

## 2. Do not forget to connect the prototype

If you skip:

```javascript id="42024"
Dog.prototype = Object.create(Animal.prototype);
```

or:

```javascript id="42025"
Car.prototype = Object.create(Vehicle.prototype);
```

then the child objects will not inherit the parent’s methods.

---

## 3. Do not forget to reset `constructor`

After changing the prototype, remember:

```javascript id="42026"
Dog.prototype.constructor = Dog;
Car.prototype.constructor = Car;
```

---

## 4. In class syntax, do not forget `super()`

Inside a child class constructor, you must call `super(...)` before using `this`.

---

## 5. Keep inheritance meaningful

Use inheritance when the child is a more specific kind of the parent.

Good examples:

- `Dog` is an `Animal`
- `Car` is a `Vehicle`
