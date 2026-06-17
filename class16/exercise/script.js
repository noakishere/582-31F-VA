/**
 * Create a custom element called:
 *  <movie-box></movie-box>
 *
 * Requirements:
 *
 * The element must:
 *
 *  use Shadow DOM
 *  accept attributes:
 *      title (h2)
 *      year (p)
 *      director (p)
 *      poster (img)
 *
 * render a styled card inside the shadow root
 *
 * use helper methods
 *
 * example HTML:
 * <movie-box title="MOVIE_TITEL" year="0000" director="DIRECTOR_NAME"
 *  poster-url="POSTER_URL"></movie-box>
 *
 */

class MovieBox extends HTMLElement {
  //   constructor() {
  //     super();
  //     this.attachShadow({ mode: "open" });
  //     this.render();
  //   }
  //   getMovieData() {
  //     return `${this.getAttribute("title")} ${this.getAttribute("year")} ${this.getAttribute("poster-url")}`;
  //   }

  connectedCallback() {
    this.render();
  }

  getMovieData() {
    return {
      title: this.getAttribute("title") || "Unknown Movie",
      year: this.getAttribute("year") || "N\A",
      director: this.getAttribute("director") || "Unknown Director",
      poster: this.getAttribute("poster-url") || "",
    };
  }

  getTitle() {
    return this.getAttribute("title");
  }

  getDirector() {
    return this.getAttribute("director");
  }

  getYear() {
    return this.getAttribute("year");
  }

  getPosterURL() {
    return this.getAttribute("poster-url");
  }

  renderStyle() {
    return `
    <style>
        .movie-card{
            padding: 20px 30px;
            background-color: midnightblue;
            color: snow;
            display: flex;
            gap: 20px;
            margin-bottom: 20px;
        }

        .movie-card img{
            height: 200px;
        }
        
        .card-header .entry{
            display: flex;
            gap: 10px;
        }

        .card-header .name{
            font-weight: 700;
        }     
    </style>
    `;
  }

  render() {
    const movieBox = this.attachShadow({ mode: "open" });

    // you can use this too!
    const movieData = this.getMovieData();
    console.log(movieData);

    movieBox.innerHTML = `
    ${this.renderStyle()}
    <div class="movie-card">
    <img src="${movieData.poster}">
        <div class="card-header">
        <h2>${this.getTitle()}</h2>
            <div class="entry">
                <p class="name">${this.getYear()}</p>
                <p class="name">${this.getDirector()}</p>
            </div>
        </div>
    </div>
    `;
  }
}
customElements.define("movie-box", MovieBox);
