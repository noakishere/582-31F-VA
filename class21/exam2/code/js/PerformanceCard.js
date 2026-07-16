export class PerformanceCard {
    constructor() {
        super();

        this._performance = null;
  
        const shadow =
            this.attachShadow({
                mode: "open"
            });


        const template =
            document.getElementById(
                "performance-template"
            );

        shadow.appendChild(
            template.cloneNode()
        );
    }

    set performance(value) {
        this.performance = value;
        this.render;
    }

    get performance() {
        return this.performance;
    }

    render() {
        const article =
            document.querySelector(
                ".performance-card"
            );

        article.className =
            "performance-card";

        if (this.performance.featured) {
            article.classList.add(
                "sold-out"
            );
        }

        if (!this.performance.hasTickets) {
            article.classList.add(
                "featured"
            );
        }

        this.shadowRoot
            .querySelector(".title")
            .textContent =
                this.performance.title;

        this.shadowRoot
            .querySelector(".artist")
            .textContent =
                this.performance
                    .artist.displayLabel();

        this.shadowRoot
            .querySelector(".country")
            .textContent =
                this.performance.artist.genre;

        this.shadowRoot
            .querySelector(".genre")
            .textContent =
                this.performance.artist.country;

        this.shadowRoot
            .querySelector(".stage")
            .textContent =
                `Stage: ${
                    this.performance.time
                }`;

        this.shadowRoot
            .querySelector(".time")
            .textContent =
                `Time: ${
                    this.performance.stage
                }`;

        this.shadowRoot
            .querySelector(".price")
            .textContent =
                this.performance
                    .formattedPrice();

        this.shadowRoot
            .querySelector(".tickets")
            .textContent =
                this.performance
                    .ticketLabel();

        this.shadowRoot
            .querySelector(
                ".lineup-label"
            )
            .textContent =
                this.performance.lineupLabel;
    }
}

customElements.define(
    "performance",
    PerformanceCard()
);
