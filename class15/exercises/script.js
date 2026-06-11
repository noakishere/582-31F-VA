// 1. create a custom element called:
//              <movie-card></movie-card>

// this element should accept these attributes:

//   1. title 2. year 3. rating

// render it on your html file.

// 2. refactor a basic custom element

class HelloBox extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div>
        <h2>Hello!</h2>
        <p>Welcome to custom elements.</p>
      </div>
    `;
  }
}

customElements.define("hello-box", HelloBox);

// refactor it so that connectedCallback only calls render()
// All HTML generation happens inside render()

// 3. create another GameCard custom element with the following:

//      1. connectedCallback()
//      2. getTitle()
//      3. getYear()
//      4. getRating()
//      4.b formats Rating  -- ratingFormatter() X/5
//      5. render
