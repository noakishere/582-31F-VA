// 1.
// Create a Book class with:
//  title
//  pages
//  getter summary
//  getter/setter for pages
//  static method isValidPageCount()

class Book {
  constructor(title, pages) {
    this.title = title;
    this.pages = pages;
  }

  get summary() {
    return `${this.title} has ${this.pages} pages. `;
  }

  set pages(value) {
    if (Book.isValidPageCount(value)) {
      this.__pages = value;
    } else {
      throw new Error("Invalid page count");
    }
  }

  get pages() {
    return this.__pages;
  }

  static isValidPageCount(value) {
    return typeof value === "number" && value > 0;
  }
}

// 2.
// Create a BankAccount class with:
//  owner
//  balance
//  getter for balance
//  setter that rejects negative balances
//  static method isValidAmount()

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  get balance() {
    return this.__balance;
  }

  static isValidAmount(amount) {
    return typeof amount === "number" && amount >= 0;
  }

  set balance(value) {
    if (BankAccount.isValidAmount(value)) {
      this.__balance = value;
    } else {
      throw new Error("Invalid amount");
    }
  }
}

// 3.
// Create a Course class with:
//  title
//  credits
//  getter label
//  getter/setter for credits
//  static property for schoolName

class Course {
  static schoolName = "Vanier College";

  constructor(title, credits) {
    this.title = title;
    this.credits = credits;
  }

  set credits(value) {
    if (value > 0 && typeof value === "number") {
      this.__credits = value;
    } else {
      throw new Error("Credits must be a positive number");
    }
  }

  get credits() {
    return this.__credits;
  }

  get label() {
    return `${Course.schoolName} -- ${this.title} : ${this.credits} credits`;
  }
}

// 4.
// Create a class called Movie.
// Code the following:
//  constructor with title and rating
//  getter description that returns something like:
//                                                      "Inception has a rating of 9"

//  getter/setter for rating
//  setter must reject values outside 0–10

//  static method isValidRating(value)

class Movie {
  constructor(title, rating) {
    this.title = title;
    this.rating = rating;
  }

  get description() {
    return `${this.title} has a rating of ${this.rating}`;
  }

  get rating() {
    return this.__rating;
  }

  set rating(value) {
    if (Movie.isValidRating(value)) {
      this.__rating = value; // beware of recursive!
    } else {
      throw new Error("Invalid value");
    }
  }

  static isValidRating(value) {
    return value >= 0 && value <= 10 && typeof value === "number";
  }
}

inception = new Movie("Inception", 0);
console.log(inception);

lotr = new Movie("Lord of the Ring", 10);
