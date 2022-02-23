import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { OrderReservationService } from "../services/order-reservation.service";
import { Subscription } from 'rxjs/Subscription';
import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from '@angular/router';

@Component({
  selector: 'app-part01-single',
  templateUrl: './part01-single.component.html',
  styleUrls: ['./part01-single.component.scss']
})
export class Part01SingleComponent implements OnInit {

  seatOneSubscription: Subscription; // subscrition (observables)
  seatOnes: any[];

  constructor(
    private reservationService: OrderReservationService,
    private db: AngularFirestore,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getSeatOneOrders();

    this.seatOneSubscription = this.reservationService.seatOneSubject.subscribe( // subscrition (observables)
      (seatOnes: any[]) => {
        this.seatOnes = seatOnes;
      }
    );
    this.reservationService.emitSeatOneSubject();
  }

  seatOneOrders;
  seatOneOrder = [];

  getSeatOneOrders = () =>
    this.reservationService
      .getSeatOneOrders()
      .subscribe(result => (this.seatOneOrders = result));

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
    this.reservationService.saveSeatsToFirebaseinServer();
  }

  onFetchFromFirebase() { // pour recevoir de Firebase (fetch)
    this.reservationService.saveSeatsFromFirebaseinServer();
  }


}
