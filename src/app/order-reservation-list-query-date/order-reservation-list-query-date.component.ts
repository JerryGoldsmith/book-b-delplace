import { Component, OnInit } from '@angular/core';
import { OrderReservationService } from "../services/order-reservation.service";
import { DocumentChangeAction } from '@angular/fire/firestore';

@Component({
  selector: 'app-order-reservation-list-query-date',
  templateUrl: './order-reservation-list-query-date.component.html',
  styleUrls: ['./../order-reservation-list/order-reservation-list.component.scss']
})
export class OrderReservationListQueryDateComponent implements OnInit {

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
