import { String } from "lodash";

export class Seat {

  constructor(
    public date: number,
    public customerName: string,
    public customerFirstName: string,
    public customerCountry: string,
    public customerAge: number,
    public seatOneOrder: String
  ) {}
}
