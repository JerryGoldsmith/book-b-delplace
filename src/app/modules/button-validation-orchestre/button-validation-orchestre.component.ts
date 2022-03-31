import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { OrderReservationOrchestreService } from "../../services/order-reservation-orchestre.service";
// import { SeatService } from "../services/seat.service";
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-validation-orchestre',
  templateUrl: './button-validation-orchestre.component.html',
  styleUrls: ['./button-validation-orchestre.component.scss']
})
export class ButtonValidationOrchestreComponent implements OnInit {

  isShow = false;

  seatOrchestres: any[];
  seatOrchestreSubscription: Subscription; // subscrition (observables)

  buttonDisabled: boolean;

  showDiv = {
  previous : false,
  current : false,
  next : false
  }

  constructor(
    public ordersOrchestreService: OrderReservationOrchestreService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buttonDisabled = false;

    this.seatOrchestreSubscription = this.ordersOrchestreService.seatOrchestreSubject.subscribe( // subscrition (observables)
      (seatOrchestres: any[]) => {
        this.seatOrchestres = seatOrchestres;
      }
    );
    this.ordersOrchestreService.emitSeatOneOrchestreSubject();
  }

  seatOrchestre = [];

  addSeatOrchestre = seatOrchestre => this.seatOrchestres.push(seatOrchestre);

  removeSeatOrchestre = seatOrchestre => {
    let index = this.seatOrchestres.indexOf(seatOrchestre);
    if (index > -1) this.seatOrchestres.splice(index, 1);
  };

  onSubmitOrchestre() {
    this.ordersOrchestreService.form.value.seatOrchestres = this.seatOrchestres;

    let data = this.ordersOrchestreService.form.value;

    this.ordersOrchestreService.createSeatOneOrder(data).then(res => {
      /*do something here....maybe clear the form or give a success message*/
      console.log("OK");
    });
  }

  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  onSaveOrchestreOnFirebase() {
    this.ordersOrchestreService.saveSeatsOrchestreToFirebaseinServer();
  }

  onFetchOrchestreFromFirebase() { // pour recevoir de Firebase (fetch)
    this.ordersOrchestreService.saveSeatsOrchestreFromFirebaseinServer();
  }

  onNewSeat() {
    this.router.navigate(['/seats']);
  }

  onViewSeat(id: number) {
    this.router.navigate(['/seats', 'view', id]);
  }

}
