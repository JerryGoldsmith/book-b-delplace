import { Component, OnInit } from '@angular/core';
import { OrderReservationService } from "../services/order-reservation.service";

@Component({
  selector: 'app-order-reservation-list-query-graphics',
  templateUrl: './order-reservation-list-query-graphics.component.html',
  styleUrls: ['./../order-reservation-list/order-reservation-list.component.scss']
})
export class OrderReservationListQueryGraphicsComponent implements OnInit {

  constructor(
    public reservationService: OrderReservationService
  ) {
    
  }

  ngOnInit(): void {}

}
