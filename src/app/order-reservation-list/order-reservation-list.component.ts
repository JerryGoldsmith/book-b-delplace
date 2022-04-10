import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { OrderReservationService } from "../services/order-reservation.service";
import { Subscription } from 'rxjs/Subscription';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'; // with id

@Component({
  selector: 'app-order-reservation-list',
  templateUrl: './order-reservation-list.component.html',
  styleUrls: ['./order-reservation-list.component.scss']
})
export class OrderReservationListComponent implements OnInit {

  isShow = false;

  // seatsForm: FormGroup;

  seatsForm = new FormGroup({
    seatId: new FormControl(),
    seatName: new FormControl(''),
    seatStatus: new FormControl(''),
    seatKind: new FormControl(''),
    seatCompleted: new FormControl(),
    index: new FormControl()
  });

  buttonDisabled: boolean;

  seatOneSubscription: Subscription;
  seatOnes: Array<any> = [];
  // seatOnes: any[];

  seat = [];
  seatOneOrder = [];

  name: string    = 'SeatOn';
  status: string  = 'Status';
  kind: string    = 'Kind';

  // @Input() seatName: string;
  // @Input() seatStatus: string;
  // @Input() seatKind: string;
  // @Input() seatCompleted: boolean;
  // @Input() index: number;

  // seatName: string;
  // seatStatus: string;
  // seatKind: string;
  // seatCompleted: boolean;
  // index: number;

  @Output() seatName = new EventEmitter();
  @Output() seatStatus = new EventEmitter();
  @Output() seatKind = new EventEmitter();
  @Output() seatCompleted = new EventEmitter();
  @Output() index = new EventEmitter(); 
  
  setName = (seatName: { value: any; }): void => {  
   this.seatName.emit(seatName.value);  
  }

  setStatus = (seatStatus: { value: string; }): void => {  
    this.seatStatus.emit(seatStatus.value);  
  }

  setKind = (seatKind: { value: string; }): void => {  
    this.seatKind.emit(seatKind.value);  
  }

  setCompleted = (seatCompleted: { value: any; }): void => {  
    this.seatKind.emit(seatCompleted.value);  
  }
  
  setIndex = (index: { value: number; }): void =>{  
    this.index.emit(index.value);  
  } 
  
  // PostData() {
  //   this.seatNameEmitter.emit(this.seatName);
  //   this.seatStatusEmitter.emit(this.seatStatus); 
  //   this.seatKindEmitter.emit(this.seatKind); 
  //   this.seatCompletedEmitter.emit(this.seatCompleted); 
  //   this.indexEmitter.emit(this.index);   
  // }

  constructor(
    public reservationService: OrderReservationService,
    private route: ActivatedRoute
  ) {}

  // receiveName($event: string) {  
  //   this.seatName= $event;  
  // }

  // receiveStatus($event: string) {  
  //   this.seatStatus = $event;  
  // } 

  ngAfterViewInit(): void {
    // this.setName(this.seatName.);
  }

  ngOnInit(): void {

    this.buttonDisabled = false;
    
    // firestore database
    this.getSeatAdminOrders();

    // const id = this.route.snapshot.params['id'];
    // this.getName();
    // this.getStatus();
    // this.getKind();

    // realtime database
    this.seatOneSubscription = this.reservationService.seatOneSubject.subscribe(
      (seatOnes: any[]) => {
        this.seatOnes = seatOnes;
      }
    );
    this.reservationService.emitSeatOneSubject(); 
  }

  // realtime database

  // getName() {
  //   this.name = this.route.snapshot.params['id'];
  //   return this.name;
  // }

  // getStatus() {
  //   this.status = this.route.snapshot.params['id'];
  //   return this.status;
  // }

  // getKind() {
  //   this.kind = this.route.snapshot.params['id'];
  //   return this.kind;
  // }

  onSaveOnFirebase() {
    this.reservationService.saveSeatsObjectToArrayToFirebaseinServer();
  }

  onSwitch() {
    if(this.seatStatus as unknown === "éteint") {
      this.reservationService.switchOnOne(this.index[0]);
    }
    else if(this.seatStatus  as unknown === "allumé") {
      this.reservationService.switchOffOne(this.index[0]);
    }
    console.log('this.seatStatus list : ' + this.seatStatus);
    console.log('this.index list : ' + this.index);
  }

  // firestore database

  seatOneOrders = this.reservationService.getSeatOneOrders();

  addSeatOne = (seatOne: any) => this.seatOneOrder.push(seatOne);

  getSeatAdminOrders = () =>
    this.reservationService
      .getSeatByCountry()
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

  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  onDestroy() {
    this.seatOneSubscription.unsubscribe();
  }

  // onSubmit() {
  //   this.reservationService.form.value.seatOneOrder = this.seatOneOrder;

  //   let data = this.reservationService.form.value;

  //   this.reservationService.createSeatOneOrder(data).then(res => {
  //     console.log("OK");
  //   });
  // }

}
