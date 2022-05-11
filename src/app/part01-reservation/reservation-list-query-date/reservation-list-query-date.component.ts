import { Component, OnInit } from '@angular/core';
import { OrderReservationService } from "src/app/services/order-reservation.service";
import { DocumentChangeAction } from '@angular/fire/firestore';

@Component({
  selector: 'app-reservation-list-query-date',
  templateUrl: './reservation-list-query-date.component.html',
  styleUrls: ['./../../styles/normalize.scss',
  './../../styles/part01-reservation/reservation-query.scss']
})
export class ReservationListQueryDateComponent implements OnInit {

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
