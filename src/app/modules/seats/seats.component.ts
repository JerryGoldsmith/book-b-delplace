import { Component, Input, OnInit } from '@angular/core';
import { SeatService } from "../../services/seat.service";
import { OrderReservationService } from "../../services/order-reservation.service";
import { Subscription } from 'rxjs/Subscription';
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
    this.kind = this.ordersService.getSeatById(+id).kind;

    this.seatOneSubscription = this.ordersService.seatOneSubject.subscribe( // subscrition (observables)
      (seatOnes: any[]) => {
        this.seatOnes = seatOnes;
      }
    );
    this.ordersService.emitSeatOneSubject();

    // ------

    // this.sortedData = this.seatOnes.reduce((acc, curr) => {
    //   if (acc.hasOwnProperty(curr.fiche)) {
    //     acc[curr.fiche].push(curr);
    //     return acc;
    //   }

    //   acc[curr.fiche] = [curr];
    //   return acc;
    // }, {});
  }

  getStatus() {
    return this.seatStatus;
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
