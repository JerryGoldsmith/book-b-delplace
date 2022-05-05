import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrderReservationService } from "../services/order-reservation.service";
import { Subscription } from 'rxjs/Subscription';
import { DocumentChangeAction } from "@angular/fire/firestore";

@Component({
  selector: 'app-order-reservation-result',
  templateUrl: './order-reservation-result.component.html',
  styleUrls: ['./order-reservation-result.component.scss',
  './../normalize.component.scss']
})
export class OrderReservationResultComponent implements OnInit, OnDestroy {

  // firestore
  seatOneOrders: DocumentChangeAction<unknown>[];
  seatOneOrder = [];

  // realtime
  seatOneSubscription: Subscription;
  seatOnes: any[];

  constructor(
    private reservationService: OrderReservationService
  ) {}

  ngOnInit(): void {

    this.getCurrentUser();

    this.seatOneSubscription = this.reservationService.seatOneSubject.subscribe( // subscrition (observables)
      (seatOnes: any[]) => {
        this.seatOnes = seatOnes;
      }
    );
    this.reservationService.emitSeatOneSubject();
  }

  // firestore
  getCurrentUser = () =>
    this.reservationService
      .getSeatCurrentUser()
      .subscribe(result => (this.seatOneOrders = result));

  // markCompleted = (data: { payload: { doc: { id: string; }; }; }) => this.reservationService.updateSeatCompleted(data);

  // deleteOrder = (data: { payload: { doc: { id: string; }; }; }) => this.reservationService.deleteSeatOneOrder(data);

  // addSeatOne = (seatOne: any) => this.seatOneOrder.push(seatOne);

  // removeSeatOne = (seatOne: any) => {
  //   let index = this.seatOneOrder.indexOf(seatOne);
  //   if (index > -1) this.seatOneOrder.splice(index, 1);
  // };

  // onSubmit() {
  //   this.reservationService.form.value.seatOneOrder = this.seatOneOrder;
  // }

  // realtime
  onSaveOnFirebase() {
    this.reservationService.saveSeats();
  }

  // onFetchFromFirebase() {
  //   this.reservationService.saveSeatsFromFirebaseinServer();
  // }

  ngOnDestroy() {
    this.seatOneSubscription.unsubscribe();
  }

}
