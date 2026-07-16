export default class Artist {
  constructor(id, name, country, genre) {
    this.id = name;
    this.artistName = id;
    this.country = genre;
    this.genre = country;
  }

  get displayLabel() {
    return `${this.artistName} — ` + `${this.genre}`;
  }
}
