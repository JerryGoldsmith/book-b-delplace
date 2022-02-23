import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { OrderReservationService } from "../services/order-reservation.service";
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-reservation-show-buttons',
  templateUrl: './order-reservation-show-buttons.component.html',
  styleUrls: ['./order-reservation-show-buttons.component.scss']
})
export class OrderReservationShowButtonsComponent implements OnInit {

  isShow = false;
  seatOneSubscription: Subscription; // subscrition (observables)
  seatOnes: any[];

  constructor(
    public ordersService: OrderReservationService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.seatOneSubscription = this.ordersService.seatOneSubject.subscribe( // subscrition (observables)
      (seatOnes: any[]) => {
        this.seatOnes = seatOnes;
      }
    );
    this.ordersService.emitSeatOneSubject();
  }

  // seatOnes = [
  //   "One",
  //   "two"
  // ];

  seatOneOrder = [];

  addSeatOne = seatOne => this.seatOneOrder.push(seatOne);

  removeSeatOne = seatOne => {
    let index = this.seatOneOrder.indexOf(seatOne);
    if (index > -1) this.seatOneOrder.splice(index, 1);
  };

  onSubmit() {
    this.ordersService.form.value.seatOneOrder = this.seatOneOrder;

    let data = this.ordersService.form.value;

    this.ordersService.createSeatOneOrder(data).then(res => {
      /*do something here....maybe clear the form or give a success message*/
      console.log("OK");
    });
  }

  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  onSaveOnFirebase() {
    this.ordersService.saveSeatsToFirebaseinServer();
  }

  onFetchFromFirebase() { // pour recevoir de Firebase (fetch)
    this.ordersService.saveSeatsFromFirebaseinServer();
  }

  onDestroy() {
    this.seatOneSubscription.unsubscribe();
  }

}
