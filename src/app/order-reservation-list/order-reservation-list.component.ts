import { Component, OnInit } from '@angular/core';
import { OrderReservationService } from "../services/order-reservation.service";
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-order-reservation-list',
  templateUrl: './order-reservation-list.component.html',
  styleUrls: ['./order-reservation-list.component.scss']
})
export class OrderReservationListComponent implements OnInit {

  isShow = false;

  seatOneSubscription: Subscription; // subscrition (observables)

  seatOnes: any[];

  constructor(
    public ordersService: OrderReservationService
  ) { }

  ngOnInit(): void {
    this.getSeatAdminOrders();
  }

  seatOneOrders$ = this.ordersService.getSeatOneOrders();

  getSeatAdminOrders = () =>
    this.ordersService
      .getSeatAdminOrders()
      //@ts-ignore
      .subscribe(result => (this.seatOneOrders$ = result));

  markCompleted = (data: { payload: { doc: { id: string; }; }; }) => this.ordersService.updateSeatOneOrder(data);

  deleteOrder = (data: { payload: { doc: { id: string; }; }; }) => this.ordersService.deleteSeatOneOrder(data);

  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  onDestroy() {
    this.seatOneSubscription.unsubscribe();
  }

}
