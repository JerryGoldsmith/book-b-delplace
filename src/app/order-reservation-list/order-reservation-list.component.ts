import { Component, OnDestroy, OnInit } from '@angular/core';
import { OrderReservationService } from "../services/order-reservation.service";
import { OrderReservationOrchestreService } from "../services/order-reservation-orchestre.service";
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-order-reservation-list',
  templateUrl: './order-reservation-list.component.html',
  styleUrls: ['./order-reservation-list.component.scss']
})
export class OrderReservationListComponent implements OnInit {

  isShow = false;

  seatOneSubscription: Subscription; // subscrition (observables)
  // seatOneOrchestreSubscription: Subscription;

  seatOnes: any[];
  // seatOrchestres: any[];

  constructor(
    public ordersService: OrderReservationService,
    public ordersOrchestreService: OrderReservationOrchestreService,
  ) { }

  ngOnInit(): void {
    this.getSeatAdminOrders();
  }

  seatOneOrders$ = this.ordersService.getSeatOneOrders();

  getSeatAdminOrders = () =>
    this.ordersService
      .getSeatAdminOrders()
      .subscribe(result => (this.seatOneOrders = result));

  markCompleted = data => this.ordersService.updateSeatOneOrder(data);

  deleteOrder = data => this.ordersService.deleteSeatOneOrder(data);

  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  onDestroy() {
    this.seatOneSubscription.unsubscribe();
  }

}
