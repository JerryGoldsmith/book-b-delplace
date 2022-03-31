import { Component, Input, OnInit } from '@angular/core';
import { SeatService } from "../../services/seat.service";
import { OrderReservationService } from "../../services/order-reservation.service";
import { Subscription } from 'rxjs/Subscription';
// import { NgForm } from "@angular/forms";
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'; // routes parametres avec id

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.scss']
})
export class SeatsComponent implements OnInit {

  seatsForm: FormGroup;

  seatOneSubscription: Subscription; // subscrition (observables)
  seatOnes: any[];
  // seatOrchestres: any[];
  buttonDisabled: boolean;

  name: string    = 'SeatOn';
  status: string  = 'Status';
  // customerName: string  = 'customerName';

  showDiv = {
  previous : false,
  current : false,
  next : false
  }

  @Input() seatName: string; // propriétés personnalisées pour transmettre des données depuis l'extérieur
  // ne pas oublier d'importer Input en haut dans import
  @Input() seatStatus: string;
  @Input() seatCompleted: boolean;
  @Input() index: number;

  constructor(
    public ordersService: OrderReservationService,
    public seatService: SeatService,
    private route: ActivatedRoute // routes parametres avec id
  ) { }

  ngOnInit(): void {

    this.buttonDisabled = false;

    // this.name = this.route.snapshot.params['id']; // routes parametres avec id (étape 1 transitoire)
    const id = this.route.snapshot.params['id']; // routes parametres avec id (étape 2 OK)
    this.name = this.ordersService.getSeatById(+id).name; // routes parametres avec id (étape 2 OK)
    this.status = this.ordersService.getSeatById(+id).status; // routes parametres avec id (étape 2 OK)
    // url pour y accéder : http://localhost:4200/nom-component/numeroDeId

    this.seatOneSubscription = this.ordersService.seatOneSubject.subscribe( // subscrition (observables)
      (seatOnes: any[]) => {
        this.seatOnes = seatOnes;
      }
    );
    this.ordersService.emitSeatOneSubject();
  }

  getStatus() {
    return this.seatStatus;
  }

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

  // getColor() {
  //   if(this.seatStatus === 'allumé') {
  //     return 'green';
  //   } else if(this.seatStatus === 'éteint') {
  //     return 'red';
  //   }
  // }

  onSwitch() {
    if(this.seatStatus === "allumé") {
      this.ordersService.switchOffOne(this.index);
    }
    // else if(this.seatStatus === "éteint") {
    //   this.ordersService.switchOnOne(this.index);
    // }
  }

  onSaveOnFirebase() { // pour recevoir de Firebase (fetch)
    this.ordersService.saveSeatsToFirebaseinServer();
  }

  onFetchFromFirebase() { // pour recevoir de Firebase (fetch)
    this.ordersService.saveSeatsFromFirebaseinServer();
  }

  // onSwitch() {
  //   if(this.seatStatus === "allumé") {
  //     this.ordersService.switchOnAll();
  //   } else if(this.seatStatus === "éteint") {
  //     this.ordersService.switchOffAll();
  //   }
  // }

}
