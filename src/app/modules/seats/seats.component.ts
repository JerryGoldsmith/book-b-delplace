import { Component, Input, OnInit } from '@angular/core';
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

  // public seatOnes$: Observable<Seat[]>;

  seatsForm: FormGroup;

  seatOneSubscription: Subscription; // subscrition (observables)
  seatOnes: any[];

  seat = [];
  seatOneOrder = [];


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

    this.getSeatAdminOrders();

    // this.name = this.route.snapshot.params['id']; // routes parametres avec id (étape 1 transitoire)
    const id = this.route.snapshot.params['id'];
    this.getName();
    this.getStatus();
    this.getKind();
    // this.name = this.reservationService.getSeatById(+id).name;
    // this.status = this.reservationService.getSeatById(+id).status;
    // this.kind = this.reservationService.getSeatById(+id).kind;

    this.seatOneSubscription = this.reservationService.seatOneSubject.subscribe(
      (seatOnes: any[]) => {
        this.seatOnes = seatOnes;
      }
    );
    this.reservationService.emitSeatOneSubject();
  }

  addSeatOne = (seatOne: any) => this.seatOneOrder.push(seatOne);

  seatOneOrders = this.reservationService.getSeatOneOrders();

  getSeatAdminOrders = () =>
    this.reservationService
      .getSeatAdminOrders()
      //@ts-ignore
      .subscribe(result => (this.seatOneOrders = result));

  markCompleted = (data: 
    { payload: 
      { doc: 
        { 
          id: string; 
        }; 
      }; 
    }) => this.reservationService.updateSeatOneOrder(data);

  deleteOrder = (data: 
    { payload: 
      { doc: 
        { 
          id: string;
        }; 
      }; 
    }) => this.reservationService.deleteSeatOneOrder(data);

  onDestroy() {
    this.seatOneSubscription.unsubscribe();
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

  // getColor() {
  //   if(this.seatStatus === 'allumé') {
  //     return 'green';
  //   } else if(this.seatStatus === 'éteint') {
  //     return 'red';
  //   }
  // }

  onSubmit() {
    this.reservationService.form.value.seatOneOrder = this.seatOneOrder;

    let data = this.reservationService.form.value;

    this.reservationService.createSeatOneOrder(data).then(res => {
      /*do something here....maybe clear the form or give a success message*/
      console.log("OK");
    });
  }

  onSaveOnFirebase() {
    this.reservationService.saveSeatsToFirebaseinServer();
  }

  onSwitch() {
    if(this.seatStatus === "allumé") {
      this.reservationService.switchOffOne(this.index);
    }
    else if(this.seatStatus === "éteint") {
      this.reservationService.switchOnOne(this.index);
    }
    console.log('onSwitch : this.seatStatus : ' + this.seatStatus);
    console.log('onSwitch : this.index : ' + this.index);
  }

  onSwitchDelete() {
    if(this.seatStatus === "éteint") {
      this.reservationService.switchOnOne(this.index);
    }
    else if(this.seatStatus === "allumé") {
      this.reservationService.switchOffOne(this.index);
    }
    console.log('onSwitchDelete : this.seatStatus : ' + this.seatStatus);
    console.log('onSwitchDelete : this.index : ' + this.index);
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
