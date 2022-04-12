import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { OrderReservationService } from "../services/order-reservation.service";
import { SeatsComponent } from "src/app/modules/seats/seats.component";
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router'; // with id

@Component({
  selector: 'app-order-reservation-list-query-country',
  templateUrl: './order-reservation-list-query-country.component.html',
  styleUrls: ['./order-reservation-list-query-country.component.scss']
})
export class OrderReservationListQueryCountryComponent implements OnInit, AfterViewInit {

  isShow = false;

  seatOneOrder = [];

  seatOneSubscription: Subscription;
  seatOnes: Array<any> = [];

  // id: number      = 3;
  // name: string    = 'SeatOn';
  // status: string  = 'Status';
  // kind: string    = 'Kind';

  @Input() seatName: string;
  @Input() seatStatus: string;
  @Input() seatKind: string;
  @Input() seatCompleted: boolean;
  @Input() index: number;

  // @Output() seatName = new EventEmitter();
  // @Output() seatStatus = new EventEmitter();
  // @Output() seatKind = new EventEmitter();
  // @Output() seatCompleted = new EventEmitter();

  @ViewChild(OrderReservationListQueryCountryComponent, { static: false }) seatNameRef: OrderReservationListQueryCountryComponent;
  @ViewChild(OrderReservationListQueryCountryComponent, { static: false }) seatStatusRef: OrderReservationListQueryCountryComponent;
  // @ViewChildren('OrderReservationListComponent') reservationListReferences: QueryList<SeatsComponent>;

  // childName: any;
  // childStatus: any;
  // childKind: any;
  // childCompleted: any;
  // childIndex: any;
  // seatName: string;
  // seatStatus: string;
  // @Output() index = new EventEmitter(); 
  
  // setName = (seatName: { value: any; }): void => {  
  //  this.seatName.emit(seatName.value);  
  // }

  // setStatus = (seatStatus: { value: string; }): void => {  
  //   this.seatStatus.emit(seatStatus.value);  
  // }

  // setKind = (seatKind: { value: string; }): void => {  
  //   this.seatKind.emit(seatKind.value);  
  // }

  // setCompleted = (seatCompleted: { value: any; }): void => {  
  //   this.seatKind.emit(seatCompleted.value);  
  // }
  
  // setIndex = (index: { value: number; }): void =>{  
  //   this.index.emit(index.value);  
  // } 
  
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
    console.log(this.seatNameRef.seatName);
    console.log(this.seatName); 
    // this.seatName = this.childName.seatName;
    // this.seatStatus = this.childStatus.seatStatus;
    // this.seatKind = this.childKind.seatKind;
    // this.seatCompleted = this.childCompleted.seatCompleted;
    // this.index = this.childIndex.index;
  }
  // seatName(seatName: any) {
  //   this.seatName = this.seatNameRef.seatName;
  //   // throw new Error('Method not implemented.');
  // }

  ngOnInit(): void {

    // this.buttonDisabled = false;
    
    // firestore database
    this.getSeatAdminOrders();

    // const id = this.route.snapshot.params['id'];
    // this.getId()
    // this.getName();
    // this.getStatus();
    // this.getKind();

    // realtime database
    this.seatOneSubscription = this.reservationService.seatOneSubject
    .subscribe(
      (seatOnes: any[]) => {
        // if(!seatOnes){
        //   return;
        // }
        this.seatOnes = seatOnes;
        // console.log('seatOnes : ' + seatOnes);
      }
    );
    this.reservationService.emitSeatOneSubject();
    // console.log('seatOneSubscription : ' + this.seatOneSubscription);
  }

  addSeatOne = (seatOne: any) => this.seatOneOrder.push(seatOne);

  // getId() {
  //   this.id = this.route.snapshot.params['id'];
  //   return this.id;
  // }

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
    if(this.seatStatus === "allumé") {
      this.reservationService.switchOnOne(this.index);
    }
    else if(this.seatStatus === "allumé") {
      this.reservationService.switchOffOne(this.index);
    }
    console.log('this.seatStatus list : ' + this.seatStatus);
    console.log('this.index list : ' + this.index);
  }

  // firestore database

  // seatOneOrders$ = this.reservationService.getSeatOneOrders();
  seatOneOrders = this.reservationService.getSeatOneOrders();

  // addSeatOne = (seatOne: any) => this.seatOneOrder.push(seatOne);

  getSeatAdminOrders = () =>
    this.reservationService
      .getSeatByUSA()
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
