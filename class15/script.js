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
  connectedCallback() {
    this.innerHTML = `
        <div>
            <h2>Hello from a custom element</h2>
            <p>This content was created by the browser using our class.</p>
        </div>
        `;
  }
}

customElements.define("hello-box", HelloBox);
