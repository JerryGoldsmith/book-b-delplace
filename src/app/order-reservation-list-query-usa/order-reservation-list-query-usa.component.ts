import { Component, OnInit } from '@angular/core';
import { OrderReservationService } from "../services/order-reservation.service";
import { DocumentChangeAction } from '@angular/fire/firestore';

@Component({
  selector: 'app-order-reservation-list-query-usa',
  templateUrl: './order-reservation-list-query-usa.component.html',
  styleUrls: ['./../order-reservation-list/order-reservation-list.component.scss']
})
export class OrderReservationListQueryUsaComponent implements OnInit {

  constructor(
    public reservationService: OrderReservationService
  ) {}

  ngOnInit(): void {
    this.getSeatsByUSA();
  }
  
  seatOneOrders: DocumentChangeAction<unknown>[];

  getSeatsByUSA = () =>
    this.reservationService
      .getSeatByUSA()
      .subscribe(result => (this.seatOneOrders = result));

}
