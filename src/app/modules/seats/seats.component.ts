import { Component, Input, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { OrderReservationService } from "../../services/order-reservation.service";
import { OrderReservationListComponent } from "../../order-reservation-list/order-reservation-list.component";
import { Subscription } from 'rxjs/Subscription';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'; // routes parametres avec id

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.scss']
})
export class SeatsComponent implements OnInit, AfterViewInit {

  // public seatOnes$: Observable<Seat[]>;

  // seatsForm: FormGroup;

  seatsForm = new FormGroup({
    seatId: new FormControl(),
    seatName: new FormControl(),
    seatStatus: new FormControl(),
    seatKind: new FormControl(),
    seatCompleted: new FormControl(),
    index: new FormControl()
  });

  // realtime database
  seatOneSubscription: Subscription; // subscrition (observables)
  seatOnes: any[];

  // firestore database
  seat = [];
  seatOneOrder = [];

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

  @ViewChild(OrderReservationListComponent) childId: any;
  @ViewChild(OrderReservationListComponent) childName: any;
  @ViewChild(OrderReservationListComponent) childStatus: any;
  @ViewChild(OrderReservationListComponent) childKind: any;
  @ViewChild(OrderReservationListComponent) childCompleted: any;
  @ViewChild(OrderReservationListComponent) childIndex: any;

  constructor(
    public reservationService: OrderReservationService,
    private route: ActivatedRoute // with id
  ) { }

  ngAfterViewInit(): void {
    this.seatId = this.childId.seatId;
    this.seatName = this.childName.seatName;
    this.seatStatus = this.childStatus.seatStatus;
    this.seatKind = this.childKind.seatKind;
    this.seatCompleted = this.childCompleted.seatCompleted;
    this.index = this.childIndex.index;
  }

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

    this.seatOneSubscription = this.reservationService.seatOneSubject
    .subscribe(
      (seatOnes: any[]) => {
        if(!seatOnes){
          return;
        }
        this.seatOnes = seatOnes;
      }
    );
    this.reservationService.emitSeatOneSubject();
  }

  // realtime database
  seatOneOrders = this.reservationService.getSeatOneOrders();

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
    this.reservationService.saveSeatsObjectToArrayToFirebaseinServer();
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

}

