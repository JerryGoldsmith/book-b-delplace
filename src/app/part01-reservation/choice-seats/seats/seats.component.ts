import { Component, Input, OnInit } from '@angular/core';
import { OrderReservationService } from "src/app/services/order-reservation.service";
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

  // realtime database
  seatOneSubscription: Subscription; // subscrition (observables)
  seatOnes: any[];

  // firestore database
  seat = [];
  seatOneOrder = [];


  // seatOrchestres: any[];
  buttonDisabled: boolean;

  id: number      = 3;
  name: string    = 'SeatOn';
  status: string  = 'Status';
  kind: string    = 'Kind';

  showDiv = {
  previous : false,
  current : false,
  next : false
  }

  sortedData: any;

  // realtime database
  @Input() seatId: number;
  @Input() seatName: string;
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
    this.getId()
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

  // realtime database
  seatOneOrders = this.reservationService.getSeatOneOrders();

  addSeatOne = (seatOne: any) => this.seatOneOrder.push(seatOne);

  getSeatAdminOrders = () =>
    this.reservationService
      .getSeatAdminOrders()
      //@ts-ignore
      .subscribe(result => (this.seatOneOrders = result));

  // firestore database
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

  getId() {
    this.id = this.route.snapshot.params['id'];
    return this.id;
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

  onSwitchOnMiddle() {
    if(this.seatStatus === "allumé") {
      this.reservationService.switchMiddleOne(this.index);
    }
    else if(this.seatStatus === "éteint") {
      this.reservationService.switchOnOne(this.index);
    }
    console.log('onSwitch : this.seatStatus : ' + this.seatStatus);
    console.log('onSwitch : this.index : ' + this.index);
  }

  onSwitchMiddleOn() {
    if(this.seatStatus === "middle") {
      this.reservationService.switchOnOne(this.index);
    }
    console.log('onSwitch : this.seatStatus : ' + this.seatStatus);
    console.log('onSwitch : this.index : ' + this.index);
  }

  onSwitchOffMiddle() {
    if(this.seatStatus === "middle") {
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
