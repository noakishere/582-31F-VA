export class Event {
  constructor(id, title, artist, genre, venue, date, price) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.genre = genre;
    this.venue = venue;
    this.date = date;
    this.price = price;
  }

  get formattedPrice() {
    return `$${this.price.toFixed(2)}`;
  }

  get displayName() {
    return `${this.artist} -- ${this.title}`;
  }
}

// we use a class because it allows the applicaiton to add behaviour
// we dont need to do formatting logic through the UI
