import { Component, OnInit } from '@angular/core';
import { OrderReservationService } from "../services/order-reservation.service";
import { DocumentChangeAction } from '@angular/fire/firestore';

@Component({
  selector: 'app-order-reservation-list-query-all',
  templateUrl: './order-reservation-list-query-all.component.html',
  styleUrls: ['./../order-reservation-list/order-reservation-list.component.scss']
})
export class OrderReservationListQueryAllComponent implements OnInit {

  constructor(
    public reservationService: OrderReservationService
  ) {}

  ngOnInit(): void {
    this.getSeatsAdminOrders();
  }
  
  seatOneOrders: DocumentChangeAction<unknown>[];

  getSeatsAdminOrders = () =>
    this.reservationService
      .getSeatAdminOrders()
      .subscribe(result => (this.seatOneOrders = result));

}
