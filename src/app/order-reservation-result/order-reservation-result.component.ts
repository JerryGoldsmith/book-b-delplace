import { Component, OnInit } from '@angular/core';
// import { NgForm } from "@angular/forms";
import { OrderReservationService } from "../services/order-reservation.service";
import { Subscription } from 'rxjs/Subscription';
import { AngularFirestore, DocumentChangeAction } from "@angular/fire/firestore";
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-reservation-result',
  templateUrl: './order-reservation-result.component.html',
  styleUrls: ['./order-reservation-result.component.scss',
  './../normalize.component.scss']
})
export class OrderReservationResultComponent implements OnInit {

  seatOneSubscription: Subscription; // subscrition (observables)
  seatOnes: any[];

  constructor(
    private reservationService: OrderReservationService,
    private db: AngularFirestore,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.getSeatOneOrders();
    this.getSeatTwoOrders();
    // this.getSeatThreeOrders();
    // this.addSeatOne();
    // this.getSeatThreeOrders();
    // this.getSeatTransactionOrders();
    // this.getSeatConpareOrders();
    // this.createSingleSeatOne();
    // this.getSeatOneSingle();
    // this.getTransactionTest();
    // this.getSeatThreeOrders();
    // this.initGetSingleReservationById();

    this.seatOneSubscription = this.reservationService.seatOneSubject.subscribe( // subscrition (observables)
      (seatOnes: any[]) => {
        this.seatOnes = seatOnes;
      }
    );
    this.reservationService.emitSeatOneSubject();
  }

  seatOneOrders: DocumentChangeAction<unknown>[];
  seatOneOrder = [];

  // getSeatOneOrders = () =>
  //   this.reservationService
  //     .getSeatOneOrders()
  //     .subscribe(result => (this.seatOneOrders = result));

  getSeatTwoOrders = () =>
    this.reservationService
      .getSeatTwoOrders()
      .subscribe(result => (this.seatOneOrders = result));

  // getSeatTransactionOrders = () =>
  //   this.reservationService
  //     .getSeatTransactionOrders()
  //     .subscribe(result => (this.seatOneOrders = result));

  // getSeatConpareOrders = () =>
  //   this.reservationService
  //     .getSeatOneSingle()
  //     .subscribe(result => (this.seatOneOrders = result));

  markCompleted = data => this.reservationService.updateSeatOneOrder(data);

  deleteOrder = data => this.reservationService.deleteSeatOneOrder(data);

  // Part 2

  addSeatOne = seatOne => this.seatOneOrder.push(seatOne);

  removeSeatOne = seatOne => {
    let index = this.seatOneOrder.indexOf(seatOne);
    if (index > -1) this.seatOneOrder.splice(index, 1);
  };

  onSubmit() {
    this.reservationService.form.value.seatOneOrder = this.seatOneOrder;
  }

  onSaveOnFirebase() {
    this.reservationService.saveSeats();
  }

  onFetchFromFirebase() { // pour recevoir de Firebase (fetch)
    this.reservationService.saveSeatsFromFirebaseinServer();
  }

  onDestroy() {
    this.seatOneSubscription.unsubscribe();
  }

}
