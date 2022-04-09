import { Component, Input, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { OrderReservationService } from "../services/order-reservation.service";
import { OrderReservationComponent } from "../order-reservation/order-reservation.component";
import { SeatsComponent } from "../modules/seats/seats.component";
import { Subscription } from 'rxjs/Subscription';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'; // with id

@Component({
  selector: 'app-order-reservation-list',
  templateUrl: './order-reservation-list.component.html',
  styleUrls: ['./order-reservation-list.component.scss']
})
export class OrderReservationListComponent implements OnInit, AfterViewInit {

  isShow = false;

  seatsForm: FormGroup;

  buttonDisabled: boolean;

  seatOneSubscription: Subscription;
  seatOnes: any[];

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

  // passing data from parent (OrderReservationComponent)
  seatName = 'Name';  
      @ViewChild(SeatsComponent) childName: any;
  
  seatStatus = '';  
      @ViewChild(SeatsComponent) childStatus: any;

  seatKind = 'Kind';  
      @ViewChild(SeatsComponent) childKind: any;

  seatCompleted = 'Completed';  
      @ViewChild(SeatsComponent) childCompleted: any;

  index = 3;  
      @ViewChild(SeatsComponent) childIndex: any;

  constructor(
    public reservationService: OrderReservationService,
    private route: ActivatedRoute
  ) {}

  ngAfterViewInit(): void {
    // passing data from parent (OrderReservationComponent)
    this.seatName = this.childName.seatName;
    this.seatStatus = this.childStatus.seatStatus;
    this.seatKind = this.childKind.seatKind;
    this.seatCompleted = this.childCompleted.seatCompleted;
    this.index = this.childIndex.index;
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

  onSaveSeatsOnFirebase() {
    this.reservationService.saveSeats();
  }

  onSwitch() {
    if(this.seatStatus === "éteint") {
      this.reservationService.switchOnOne(this.index);
    }
    else if(this.seatStatus === "allumé") {
      this.reservationService.switchOffOne(this.index);
    }
    console.log('this.seatStatus list : ' + this.status);
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
