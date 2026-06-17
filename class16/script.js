// Review

class UserCard extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div>
            <h2>Alice</h2>
            <p>Role: Student</p>
        </div>
        `;
  }
}

customElements.define("user-card", UserCard);

// ^^ this works, but:

// 1. what if page-wide CSS changes the inside of this component?
// 2. what if the component's own styles affect other parts of the page?
// 3. what if we want a reusable element that behaves more like an isolated widget?

// Shadow DOM
//          creates a separate internal DOM tree for an element.
// a component can have:
// - its own internal HTML structure
// - its own internal styles
// - better protection from outside styling and markup conflicts

// Light DOM --> regular page DOM outside the component
//                       EX: document.getElementsByTagName("p")

// Shadow DOM -->  the internal DOM attached to a custom element.

class HelloShadow extends HTMLElement {
  connectedCallback() {
    // creating the shadow root for the element.
    const shadow = this.attachShadow({ mode: "open" });
    // mode: "open" means the shadow root can still be accessed in JS if needed.

    // We render the component's internal content inside the shadow root and
    // not inside the normal element body.
    shadow.innerHTML = `
    <style>
        h2 {
            color: blue;
        }
    </style>

    <div>
        <h2>Hello from Shadow DOM</h2>
        <p>This content lives inside the shadow root.</p>
    </div>
    `;
  }
}
// we're still rendering the element, but its internal structure belongs to
// its own DOM layer.

customElements.define("hello-shadow", HelloShadow);

// Without Shadow DOM:
// - outside page styles may change your component unexpectedly
// - your component's styles may leak into the rest of the page

// With Shadow DOM:
// - internal styles stay scoped to the component
// - component structure becomes more self-contained!

/**
 * Scoped Styles inside Shadow DOM
 */

class FancyCard extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });

    // style only affects the HTML inside the shadow root
    shadow.innerHTML = `
        <style>
         .card {
            border: 2px solid purple;
            padding: 1rem;
            background: #f1e3ff;
         }

         h2 {
            color: purple;
            margin-top: 0;
         }

        </style>


        <div class="card">
            <h2>Shadow Card</h2>
            <p>This style is scoped inside the component.</p>
        </div>
        
        `;
  }
}
customElements.define("fancy-card", FancyCard);

/**
 * Using attributes with Shadow DOM
 */

class PlayerCard extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });

    const name = this.getAttribute("name");
    const goals = this.getAttribute("goals");
    const imgUrl = this.getAttribute("image-url");

    shadow.innerHTML = `
    <style>
     .card {
        border: 1px solid #333;
        padding: 1rem; 
        margin-top: 1rem;
        background: #111;
        color: white;
        border-radius: 8px;
     }

     img {
      border: 1px;
      border-radius: 95%;
     }
    </style>
    
    <div class="card">
        <h2>${name}</h2>
        <p>Goals: ${goals}</h2>
        <img src="${imgUrl}">
    </div>
    `;
  }
}
customElements.define("player-card", PlayerCard);

/**
 * Organizing Components with helper methods
 */

class PaintingCard extends HTMLElement {
  // keep this function short
  connectedCallback() {
    this.render();
  }

  // read data in getters
  getArtist() {
    return this.getAttribute("artist") || "Unknown";
  }

  getImgURL() {
    return this.getAttribute("image-url") || "";
  }

  renderStyle() {
    return `
    <style>
         .card {
            border: 1px solid #333;
            padding: 1rem;
            background: #4e4e4e;
            color: white;
            border-radius: 8px;
            margin-top: 1rem;
         }

         img {
            max-width: 640px;
            max-height: 380px;
         }
        </style>
    `;
  }

  // handles the output
  render() {
    const shadow = this.attachShadow({ mode: "open" });

    shadow.innerHTML = `
        ${this.renderStyle()}

        <div class="card">
            <h2>${this.getArtist()}</h2>
            <img src="${this.getImgURL()}">
        </div>
        `;
  }
}

customElements.define("painting-card", PaintingCard);
