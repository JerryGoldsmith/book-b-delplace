import { Component, OnInit } from '@angular/core';
import { OrderReservationService } from "src/app/services/order-reservation.service";
import { DocumentChangeAction } from '@angular/fire/firestore';

@Component({
  selector: 'app-reservation-query-date',
  templateUrl: './reservation-query-date.component.html',
  styleUrls: ['./../../styles/normalize.scss',
  './../../styles/part01-reservation/reservation-query.scss']
})
export class ReservationQueryDateComponent implements OnInit {

  constructor(
    public reservationService: OrderReservationService
  ) {}

  ngOnInit(): void {
    this.getSeatsByDates();
  }
  
  seatOneOrders: DocumentChangeAction<unknown>[];

  getSeatsByDates = () =>
    this.reservationService
      .getSeatByDates()
      .subscribe(result => (this.seatOneOrders = result));

}
