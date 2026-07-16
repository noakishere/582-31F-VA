export default class Artist {
  constructor(id, name, country, genre) {
    this.id = id;
    this.name = name;
    this.genre = genre;
    this.country = country;
  }

  get displayLabel() {
    return `${this.name} — ` + `${this.genre}`;
  }
}
