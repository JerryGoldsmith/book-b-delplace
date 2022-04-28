import { Component, OnInit } from '@angular/core';
import { OrderReservationService } from "../services/order-reservation.service";
import { DocumentChangeAction } from '@angular/fire/firestore';

@Component({
  selector: 'app-order-reservation-list-query-france-age',
  templateUrl: './order-reservation-list-query-france-age.component.html',
  styleUrls: ['./../order-reservation-list/order-reservation-list.component.scss']
})
export class OrderReservationListQueryFranceAgeComponent implements OnInit {

  constructor(
    public reservationService: OrderReservationService
  ) {}

  ngOnInit(): void {
    this.getSeatsByFranceAge();
  }
  
  seatOneOrders: DocumentChangeAction<unknown>[];

  getSeatsByFranceAge = () =>
    this.reservationService
      .getSeatByFranceAge()
      .subscribe(result => (this.seatOneOrders = result));

}
