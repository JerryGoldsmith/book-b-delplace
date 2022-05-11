import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrderReservationService } from "src/app/services/order-reservation.service";
import { Subscription } from 'rxjs/Subscription';
import { DocumentChangeAction } from "@angular/fire/firestore";

@Component({
  selector: 'app-reservation-result',
  templateUrl: './reservation-result.component.html',
  styleUrls: ['./../styles/normalize.scss',
  './../styles/part01-reservation/reservation-result.scss',
  './../styles/part01-reservation/animations/light-speed-in.scss']
})
export class ReservationResultComponent implements OnInit, OnDestroy {

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

    this.getSeatsCurrentDate();

    this.seatOneSubscription = this.reservationService.seatOneSubject.subscribe( // subscrition (observables)
      (seatOnes: any[]) => {
        this.seatOnes = seatOnes;
      }
    );
    this.reservationService.emitSeatOneSubject();
  }

  // firestore
  getSeatsCurrentDate = () =>
    this.reservationService
      .getSeatCurrentDate()
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
