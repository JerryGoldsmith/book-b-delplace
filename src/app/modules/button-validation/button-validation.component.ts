import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { OrderReservationService } from "../../services/order-reservation.service";
// import { SeatService } from "../services/seat.service";
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-validation',
  templateUrl: './button-validation.component.html',
  styleUrls: ['./button-validation.component.scss']
})
export class ButtonValidationComponent implements OnInit {

  isShow = false;

  seatOnes: any[];
  seatOneSubscription: Subscription; // subscrition (observables)

  buttonDisabled: boolean;

  showDiv = {
  previous : false,
  current : false,
  next : false
  }

  constructor(
    public ordersService: OrderReservationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buttonDisabled = false;

    this.seatOneSubscription = this.ordersService.seatOneSubject.subscribe( // subscrition (observables)
      (seatOnes: any[]) => {
        this.seatOnes = seatOnes;
      }
    );
    this.ordersService.emitSeatOneSubject();
  }

  seatOneOrder = [];

  addSeatOne = (seatOne: any) => this.seatOneOrder.push(seatOne);

  removeSeatOne = (seatOne: any) => {
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

  onNewSeat() {
    this.router.navigate(['/seats']);
  }

  onViewSeat(id: number) {
    this.router.navigate(['/seats', 'view', id]);
  }

}
