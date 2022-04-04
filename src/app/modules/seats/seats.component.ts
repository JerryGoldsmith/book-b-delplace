import { Component, Input, OnInit } from '@angular/core';
// import { SeatService } from "../../services/seat.service";
import { OrderReservationService } from "../../services/order-reservation.service";
import { Seat } from "../../models/seats.model";
import { Subscription } from 'rxjs/Subscription';
// import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'; // routes parametres avec id

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.scss']
})
export class SeatsComponent implements OnInit {

  // public seatOnes$: Observable<Seat[]>;

  seatsForm: FormGroup;

  seatOneSubscription: Subscription; // subscrition (observables)
  seatOnes: any[];
  // seatOrchestres: any[];
  buttonDisabled: boolean;

  name: string    = 'SeatOn';
  status: string  = 'Status';
  kind: string    = 'Kind';
  // customerName: string  = 'customerName';

  showDiv = {
  previous : false,
  current : false,
  next : false
  }

  sortedData: any;

  @Input() seatName: string; // propriétés personnalisées pour transmettre des données depuis l'extérieur
  // ne pas oublier d'importer Input en haut dans import
  @Input() seatStatus: string;
  @Input() seatKind: string;
  @Input() seatCompleted: boolean;
  @Input() index: number;

  constructor(
    public reservationService: OrderReservationService,
    // public seatService: SeatService,
    private route: ActivatedRoute // routes parametres avec id
  ) { }

  ngOnInit(): void {

    this.buttonDisabled = false;

    // this.name = this.route.snapshot.params['id']; // routes parametres avec id (étape 1 transitoire)
    const id = this.route.snapshot.params['id'];
    this.getName();
    this.getStatus();
    this.getKind();
    // this.name = this.reservationService.getSeatById(+id).name;
    // this.status = this.reservationService.getSeatById(+id).status;
    // this.kind = this.reservationService.getSeatById(+id).kind;

    this.seatOneSubscription = this.reservationService.seatOneSubject.subscribe( // subscrition (observables)
      (seatOnes: any[]) => {
        this.seatOnes = seatOnes;
      }
    );
    this.reservationService.emitSeatOneSubject();
  }

  getName() {
    this.name = this.route.snapshot.params['id'];
    return this.name;
  }

  getStatus() {
    this.status = this.route.snapshot.params['id'];
    return this.status;
  }

  getKind() {
    this.kind = this.route.snapshot.params['id'];
    return this.kind;
  }

  seatOneOrder = [];

  addSeatOne = (seatOne: any) => this.seatOneOrder.push(seatOne);

  removeSeatOne = (seatOne: any) => {
    let index = this.seatOneOrder.indexOf(seatOne);
    if (index > -1) this.seatOneOrder.splice(index, 1);
  };

  onSubmit() {
    this.reservationService.form.value.seatOneOrder = this.seatOneOrder;

    let data = this.reservationService.form.value;

    this.reservationService.createSeatOneOrder(data).then(res => {
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
      this.reservationService.switchOffOne(this.index);
    }
    else if(this.seatStatus === "éteint") {
      this.reservationService.switchOnOne(this.index);
    }
    console.log('this.seatStatus : ' + this.seatStatus);
    console.log('this.index : ' + this.index);
  }

  // onSaveOnFirebase() { // pour recevoir de Firebase (fetch)
  //   this.reservationService.saveSeatsToFirebaseinServer();
  // }

  // onFetchFromFirebase() { // pour recevoir de Firebase (fetch)
  //   this.reservationService.saveSeatsFromFirebaseinServer();
  // }

  // onSwitch() {
  //   if(this.seatStatus === "allumé") {
  //     this.ordersService.switchOnAll();
  //   } else if(this.seatStatus === "éteint") {
  //     this.ordersService.switchOffAll();
  //   }
  // }

}
