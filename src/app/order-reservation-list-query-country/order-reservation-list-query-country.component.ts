import { Component, OnInit } from '@angular/core';
import { OrderReservationService } from "../services/order-reservation.service";
import { DocumentChangeAction } from '@angular/fire/firestore';

@Component({
  selector: 'app-order-reservation-list-query-country',
  templateUrl: './order-reservation-list-query-country.component.html',
  styleUrls: ['./../order-reservation-list/order-reservation-list.component.scss']
})
export class OrderReservationListQueryCountryComponent implements OnInit {

  constructor(
    public reservationService: OrderReservationService
  ) {}

  ngOnInit(): void {
    this.getSeatsByCountry();
  }
  
  seatOneOrders: DocumentChangeAction<unknown>[];

  getSeatsByCountry = () =>
    this.reservationService
      .getSeatByCountry()
      .subscribe(result => (this.seatOneOrders = result));

}
