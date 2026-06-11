// Custom Elements

// a different approach to create our own HTML tags and teach the browser what they mean

// Custom elements offer a new path where:
//      we define a reusable HTML tag once
//      use it whenever needed.

// built-in tags are like:

//  <div> - <p> - <button>

// defining our own tags would be:

//  <user-card> - <movie-ticket> - <arcade-game>

// IMPORTANT RULE:

// custom element names MUST include a hyphen.

// <user-card> is valid
// <usercard> is invalid

// if we want to create custom elements we need to follow this recipe:

// 1. create a class that extends HTMLElement
// 2. register it with customElements.define()
// 3. use the new tag in HTML

class HelloBox extends HTMLElement {
  // This means the class is a custom HTML Elements

  // This is a lifecycle method, it runs when the element is inserted into the
  // document.
  connectedCallback() {
    this.innerHTML = `
        <div>
            <h2>Hello from a custom element</h2>
            <p>This content was created by the browser using our class.</p>
        </div>
        `;
  }
}

// This connects the tag name with the class.
customElements.define("hello-box", HelloBox);
// ^^^ now the browser knows what to do when it sees that tag.

// why connectedCallback matters?

// render content
// read attributes
// initialize UI behaviour.

// you don't need to overload with ever lifecycle method.

/**
 // let's make it Dynamic!
 * 
 */

class UserCard extends HTMLElement {
  connectedCallback() {
    // getAttribute reads the value from the HTML tag.
    const name = this.getAttribute("name"); // the data inside the component
    const role = this.getAttribute("role"); // the data inside the component

    // HTML provides the input, and the custom element renders
    // based on that input.

    this.innerHTML = `
        <div>
            <h2>Name: ${name} </h2>
            <p>Role: ${role} </p>
        </div>
        `;
  }
}

customElements.define("user-card", UserCard);

// A custom element becomes much more useful when it is not hard-coded.
