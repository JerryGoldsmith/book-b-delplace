import { Component, OnInit } from '@angular/core';
import { OrderReservationService } from "../services/order-reservation.service";
import { DocumentChangeAction } from '@angular/fire/firestore';

@Component({
  selector: 'app-order-reservation-list-query-usa-tom-age',
  templateUrl: './order-reservation-list-query-usa-tom-age.component.html',
  styleUrls: ['./../order-reservation-list/order-reservation-list.component.scss']
})
export class OrderReservationListQueryUsaTomAgeComponent implements OnInit {

  constructor(
    public reservationService: OrderReservationService
  ) {}

  ngOnInit(): void {
    this.getSeatsByCountryFirstNameAge();
  }
  
  seatOneOrders: DocumentChangeAction<unknown>[];

  getSeatsByCountryFirstNameAge = () =>
    this.reservationService
      .getSeatByCountryFirstNameAge()
      .subscribe(result => (this.seatOneOrders = result));

}
