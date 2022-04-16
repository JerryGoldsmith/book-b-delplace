import { Component, OnInit } from '@angular/core';
import { OrderReservationService } from "../services/order-reservation.service";
import { DocumentChangeAction } from '@angular/fire/firestore';

@Component({
  selector: 'app-order-reservation-list-query-country',
  templateUrl: './order-reservation-list-query-country.component.html',
  styleUrls: ['./order-reservation-list-query-country.component.scss']
})
export class OrderReservationListQueryCountryComponent implements OnInit {

  constructor(
    public reservationService: OrderReservationService
  ) {}

  ngOnInit(): void {
    this.getSeatByCountryOrders();
  }
  
  seatOneOrders: DocumentChangeAction<unknown>[];

  getSeatByCountryOrders = () =>
    this.reservationService
      .getSeatByCountry()
      .subscribe(result => (this.seatOneOrders = result));

}
