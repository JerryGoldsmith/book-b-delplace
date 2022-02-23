import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { OrderReservationService } from "../services/order-reservation.service";
// import { SeatService } from "../services/seat.service";
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-reservation',
  selector: 'app-order-reservation-orchestre',
  templateUrl: './order-reservation.component.html',
  styleUrls: ['./order-reservation.component.scss']
})
export class OrderReservationOrchestreComponent implements OnInit {

  isShow = false;
  // seatOneSubscription: Subscription; // subscrition (observables)
  seatOneOrchestreSubscription: Subscription; // subscrition (observables)
  // seatOnes: any[];
  seatOrchestres: any[];

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

    // this.seatOneSubscription = this.ordersService.seatOneSubject.subscribe( // subscrition (observables)
    //   (seatOnes: any[]) => {
    //     this.seatOnes = seatOnes;
    //   }
    // );
    this.seatOneOrchestreSubscription = this.ordersService.seatOneOrchestreSubject.subscribe( // subscrition (observables)
      (seatOrchestres: any[]) => {
        this.seatOrchestres = seatOrchestres;
      }
    );
    // this.ordersService.emitSeatOneSubject();
    this.ordersService.emitSeatOneOrchestreSubject();
  }

  // seatOnes = [
  //   "One",
  //   "two"
  // ];

  // seat = [];
  // seatOneOrder = [];
  seatOrchestre = [];

  // addSeatOne = seatOne => this.seatOneOrder.push(seatOne);
  addSeatOrchestre = seatOrchestre => this.seatOrchestres.push(seatOrchestre);
  // addSeat = seatOne => this.seat.push(seatOne);

  // removeSeatOne = seatOne => {
  //   let index = this.seatOneOrder.indexOf(seatOne);
  //   if (index > -1) this.seatOneOrder.splice(index, 1);
  // };

  removeSeatOrchestre = seatOrchestre => {
    let index = this.seatOrchestres.indexOf(seatOrchestre);
    if (index > -1) this.seatOrchestres.splice(index, 1);
  };

  // onSubmit() {
  //   this.ordersService.form.value.seatOneOrder = this.seatOneOrder;
  //
  //   // this.ordersService.form.value.seat = this.seat;
  //
  //   let data = this.ordersService.form.value;
  //
  //   this.ordersService.createSeatOneOrder(data).then(res => {
  //     /*do something here....maybe clear the form or give a success message*/
  //     console.log("OK");
  //   });
  //
  //   // this.ordersService.getSeatTransactionOrders(data).then(res => {
  //   //   /*do something here....maybe clear the form or give a success message*/
  //   //   console.log("OK");
  //   // });
  //
  //   // this.ordersService.updateSeatsCount();
  //
  //   // this.ordersService.createOneSingle().then(res => {
  //   //   /*do something here....maybe clear the form or give a success message*/
  //   //   console.log("singleOne OK");
  //   // });
  //   //
  //   // this.ordersService.createTwoSingle().then(res => {
  //   //   /*do something here....maybe clear the form or give a success message*/
  //   //   console.log("singleTwo OK");
  //   // });
  //
  //   // this.ordersService.createSeatOneOrderFinalResult(data).then(res => {
  //   //   /*do something here....maybe clear the form or give a success message*/
  //   //   console.log("OK");
  //   // });
  //
  //   // this.ordersService.createSeatTransactionOrders();
  // }

  onSubmitOrchestre() {
    this.ordersService.form.value.seatOrchestres = this.seatOrchestres;

    // this.ordersService.form.value.seat = this.seat;

    let data = this.ordersService.form.value;

    this.ordersService.createSeatOneOrder(data).then(res => {
      /*do something here....maybe clear the form or give a success message*/
      console.log("OK");
    });
  }

  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  // onUpdateCount() {
  //   this.ordersService.updateCountOrder();
  // }

  onSaveOnFirebase() {
    this.ordersService.saveSeatsToFirebaseinServer();
  }

  onSaveOrchestreOnFirebase() {
    this.ordersService.saveSeatsOrchestreToFirebaseinServer();
  }

  onFetchFromFirebase() { // pour recevoir de Firebase (fetch)
    this.ordersService.saveSeatsFromFirebaseinServer();
  }

  onFetchOrchestreFromFirebase() { // pour recevoir de Firebase (fetch)
    this.ordersService.saveSeatsOrchestreFromFirebaseinServer();
  }

  onNewSeat() {
    this.router.navigate(['/seats']);
  }

  onViewSeat(id: number) {
    this.router.navigate(['/seats', 'view', id]);
  }

}
