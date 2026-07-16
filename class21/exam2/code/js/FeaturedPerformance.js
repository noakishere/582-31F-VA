import Performance from "./Performance.js";

export class FeaturedPerformance extends Performance {
  constructor(
    title,
    id,
    artist,
    stage,
    time,
    ticketPrice,
    ticketsRemaining,
    featured,
  ) {
    super(title, id, artist, stage, time, ticketPrice, ticketsRemaining);

    this.featured = Boolean(featured);
  }

  get lineupLabel() {
    return "Featured performance lineup";
  }
}
