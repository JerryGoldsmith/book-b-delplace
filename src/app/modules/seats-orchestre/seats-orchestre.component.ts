import { Component, Input, OnInit } from '@angular/core';
import { SeatService } from "../../services/seat.service";
import { OrderReservationService } from "../../services/order-reservation.service";
import { Subscription } from 'rxjs/Subscription';
import { NgForm } from "@angular/forms";
import { ActivatedRoute } from '@angular/router'; // routes parametres avec id

@Component({
  selector: 'app-seats-orchestre',
  templateUrl: './seats-orchestre.component.html',
  styleUrls: ['./seats-orchestre.component.scss']
})
export class SeatsOrchestreComponent implements OnInit {

  // seatOrchestreSubscription: Subscription; // subscrition (observables)
  // seatOrchestres: any[];
  // buttonDisabled: boolean;
  //
  // name: string    = 'SeatOn';
  // status: string  = 'Status';
  // customerName: string  = 'customerName';

  // showDiv = {
  // previous : false,
  // current : false,
  // next : false
  // }
  //
  // @Input() seatName: string; // propriétés personnalisées pour transmettre des données depuis l'extérieur
  // // ne pas oublier d'importer Input en haut dans import
  // @Input() seatStatus: string;
  // // @Input() seatCustomerName: string;
  // @Input() seatCompleted: boolean;
  // @Input() index: number;

  constructor(
    public ordersService: OrderReservationService,
    public seatService: SeatService,
    private route: ActivatedRoute // routes parametres avec id
  ) { }

  ngOnInit(): void {

    // this.buttonDisabled = false;

    // this.name = this.route.snapshot.params['id']; // routes parametres avec id (étape 1 transitoire)
    // const id = this.route.snapshot.params['id']; // routes parametres avec id (étape 2 OK)
    // this.name = this.ordersService.getSeatOrchestreById(+id).name; // routes parametres avec id (étape 2 OK)
    // this.status = this.ordersService.getSeatOrchestreById(+id).status; // routes parametres avec id (étape 2 OK)
    // url pour y accéder : http://localhost:4200/nom-component/numeroDeId

    // this.seatOrchestreSubscription = this.ordersService.seatOrchestreSubject.subscribe( // subscrition (observables)
    //   (seatOrchestres: any[]) => {
    //     this.seatOrchestres = seatOrchestres;
    //   }
    // );
    // this.ordersService.emitSeatOneOrchestreSubject();
  }

  // getStatus() {
  //   return this.seatStatus;
  // }

  // seatOrchestreOrder = [];
  //
  // addSeatOrchestre = seatOrchestre => this.seatOrchestreOrder.push(seatOrchestre);
  //
  // removeSeatOrchestre = seatOrchestre => {
  //   let index = this.seatOrchestreOrder.indexOf(seatOrchestre);
  //   if (index > -1) this.seatOrchestreOrder.splice(index, 1);
  // };

  onSubmit() {
    // this.ordersService.form.value.seatOrchestreOrder = this.seatOrchestreOrder;

    let data = this.ordersService.form.value;

    this.ordersService.createSeatOneOrder(data).then(res => {
      /*do something here....maybe clear the form or give a success message*/
      console.log("OK");
    });
  }

  // onSwitch() {
  //   if(this.seatStatus === "allumé") {
  //     this.ordersService.switchOffOrchestreOne(this.index);
  //   }
  //   // else if(this.seatStatus === "éteint") {
  //   //   this.ordersService.switchOnOne(this.index);
  //   // }
  // }

  // onSaveOnFirebase() { // pour recevoir de Firebase (fetch)
  //   this.ordersService.saveSeatsOrchestreToFirebaseinServer();
  // }
  //
  // onFetchFromFirebase() { // pour recevoir de Firebase (fetch)
  //   this.ordersService.saveSeatsOrchestreFromFirebaseinServer();
  // }

}
