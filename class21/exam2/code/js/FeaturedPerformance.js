import Performance from "./Performance.js";

export class FeaturedPerformance {
    constructor(
        id,
        title,
        artist,
        stage,
        time,
        ticketPrice,
        ticketsRemaining,
        featured
    ) {
        super(
            title,
            id,
            stage,
            artist,
            ticketPrice,
            ticketsRemaining,
            time
        );

        this.featured = Boolean(featured);
    }

    get lineupLabel() {
        return "Featured Performance";
    }
}
