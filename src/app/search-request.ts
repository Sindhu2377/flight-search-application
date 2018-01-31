export class SearchRequest {
  flightNumber: number;
  origin: string;
  destination: string;
  date: Date;
  constructor(config?) {
    config = config || {};
    this.flightNumber = config.flightNumber;
    this.origin = this.origin;
    this.destination = config.destination;
    this.date = config.date;
  }
}
