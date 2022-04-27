import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from "@angular/forms";
import { OrderReservationService } from "../services/order-reservation.service";
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-reservation-show-result',
  templateUrl: './order-reservation-show-result.component.html',
  styleUrls: ['./order-reservation-show-result.component.scss']
})
export class OrderReservationShowResultComponent implements OnInit, OnDestroy {

  seatOneSubscription: Subscription; // subscrition (observables)
  seatOnes: any[];
  seatOneOrder = [];

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

  addSeatOne = seatOne => this.seatOneOrder.push(seatOne);

  removeSeatOne = seatOne => {
    let index = this.seatOneOrder.indexOf(seatOne);
    if (index > -1) this.seatOneOrder.splice(index, 1);
  };

  onSubmit() {
    this.ordersService.form.value.seatOneOrder = this.seatOneOrder;

    let data = this.ordersService.form.value;

    this.ordersService.updateSeatOneOrder(data).then(res => {
      /*do something here....maybe clear the form or give a success message*/
      console.log("OK");
    });
  }

  onSaveOnFirebase() {
    this.ordersService.saveSeatsToFirebaseinServer();
  }

  onFetchFromFirebase() { // pour recevoir de Firebase (fetch)
    this.ordersService.saveSeatsFromFirebaseinServer();
  }

  ngOnDestroy() {
    this.seatOneSubscription.unsubscribe();
  }

}
