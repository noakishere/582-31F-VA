export default class Performance {
  constructor(
    id,
    title,
    artist,
    stage,
    time,
    ticketPrice,
    ticketsRemaining,
    featured,
  ) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.stage = stage;
    this.time = time;
    this.ticketPrice = Number(ticketPrice);
    this.ticketsRemaining = Number(ticketsRemaining);
    this.featured = false;
  }

  get formattedPrice() {
    return `$${this.ticketPrice.toFixed(2)}`;
  }

  get hasTickets() {
    return this.ticketsRemaining > 0;
  }

  get ticketLabel() {
    if (!this.hasTickets) {
      return "Sold out";
    }

    return `${this.ticketsRemaining} ` + `tickets remaining`;
  }

  get lineupLabel() {
    return "Regular lineup";
  }

  static totalAvailableTickets(performances) {
    return performances.reduce(
      (total, performance) => total + performance.ticketsRemaining,
      0,
    );
  }

  static averagePrice(performances) {
    if (performances.length === 0) {
      return 0;
    }

    const total = performances.reduce(
      (sum, performance) => sum + performance.ticketPrice,
      0,
    );

    return total / performances.length;
  }
}
