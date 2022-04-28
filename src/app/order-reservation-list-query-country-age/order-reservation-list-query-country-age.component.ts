import { Component, OnInit } from '@angular/core';
import { OrderReservationService } from "../services/order-reservation.service";
import { DocumentChangeAction } from '@angular/fire/firestore';

@Component({
  selector: 'app-order-reservation-list-query-country-age',
  templateUrl: './order-reservation-list-query-country-age.component.html',
  styleUrls: ['./../order-reservation-list/order-reservation-list.component.scss']
})
export class OrderReservationListQueryCountryAgeComponent implements OnInit {

  constructor(
    public reservationService: OrderReservationService
  ) {}

  ngOnInit(): void {
    this.getSeatsByUSAAge();
  }
  
  seatOneOrders: DocumentChangeAction<unknown>[];

  getSeatsByUSAAge = () =>
    this.reservationService
      .getSeatByUSAAge()
      .subscribe(result => (this.seatOneOrders = result));

}
