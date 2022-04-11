import { Component, Input, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { OrderReservationService } from "../services/order-reservation.service";
import { OrdersService } from "../services/orders.service";
import { OrderReservationListComponent } from "../order-reservation-list/order-reservation-list.component";
import { Subscription } from 'rxjs/Subscription';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-reservation',
  templateUrl: './order-reservation.component.html',
  styleUrls: ['./order-reservation.component.scss',
  './../order-reservation-list/order-reservation-list.component.scss',
  './../normalize.component.scss']
})
export class OrderReservationComponent implements OnInit, AfterViewInit {

  isShow = false;

  seatsForm: FormGroup;

  // seatOnes: any = [];
  seatOnes: Array<any> = [];

  seatOneSubscription: Subscription;

  buttonDisabled: boolean;

  seat = [];
  seatOneOrder = [];

  name: string    = 'SeatOn';
  status: string  = 'Status';
  kind: string    = 'Kind';

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

  showDiv = {
  previous : false,
  current : false,
  next : false
  }

  sortedData: any;

  constructor(
    public reservationService: OrderReservationService,
    public orderService: OrdersService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngAfterViewInit(): void {
    // this.seatId = this.childId.seatId;
    // this.seatName = this.childName.seatName;
    // this.seatStatus = this.childStatus.seatStatus;
    // this.seatKind = this.childKind.seatKind;
    // this.seatCompleted = this.childCompleted.seatCompleted;
    // this.index = this.childIndex.index;
  }

  ngOnInit(): void {

    this.buttonDisabled = false;

    this.getSeatAdminOrders();

    const id = this.route.snapshot.params['id'];
    this.getName();
    this.getStatus();
    this.getKind();

    this.seatOneSubscription = this.reservationService.seatOneSubject.subscribe(
      (seatOnes: any[]) => {
        this.seatOnes = seatOnes;
        // console.log('this.seatOnes : ' + seatOnes);
      }
    );
    // console.log('this.seatOneSubscription : ' + this.seatOneSubscription);
    this.reservationService.emitSeatOneSubject();

    // ---- h1 > Balcon / Orchestre --

    this.sortedData = this.seatOnes.reduce((acc, curr) => {
      if (acc.hasOwnProperty(curr.kind)) {
        acc[curr.kind].push(curr);
        return acc;
      }

      acc[curr.kind] = [curr];
      return acc;
    }, {});
  }

  addSeatOne = (seatOne: any) => this.seatOneOrder.push(seatOne);

  removeSeatOne = (seatOne: any) => {
    let index = this.seatOneOrder.indexOf(seatOne);
    if (index > -1) this.seatOneOrder.splice(index, 1);
  };

  onSubmit() {
    this.reservationService.form.value.seatOneOrder = this.seatOneOrder;

    let data = this.reservationService.form.value;

    this.reservationService.createSeatOneOrder(data).then(res => {
      console.log("OK");
    });
  }

  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  onSaveOnFirebase() {
    this.reservationService.saveSeatsObjectToArrayToFirebaseinServer();
  }

  onFetchFromFirebase() { 
    this.reservationService.saveSeatsFromFirebaseinServer();
  }

  // ----

  // onSaveSeatsOnFirebase() {
  //   this.reservationService.saveSeats();
  // }

  onNewSeat() {
    this.router.navigate(['/seats']);
  }

  onViewSeat(id: number) {
    this.router.navigate(['/seats', 'view', id]);
  }

  // OnDestroy(){
  //   this.seatOneSubscription.unsubscribe();
  // }

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

  // realtime database

  // onSubmit() {
  //   this.reservationService.form.value.seatOneOrder = this.seatOneOrder;

  //   let data = this.reservationService.form.value;

  //   this.reservationService.createSeatOneOrder(data).then(res => {
  //     /*do something here....maybe clear the form or give a success message*/
  //     console.log("OK");
  //   });
  // }

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

  onSwitch() {
    // for(let seatOne of this.seatOnes) {
    //   if(seatOne.status = "éteint") {
    //     this.seatOnes[i].status = 'allumé';
    //     console.log('seatOne.status : ' + seatOne.status);
    //   } else if(seatOne.status = "allumé") {
    //     this.seatOnes[i].status = 'éteint';
    //     console.log('seatOne.status : ' + seatOne.status);
    //   }
    // }
    if(this.status === "éteint") {
      this.reservationService.switchOnOne(this.index);
    }
    else if(this.status === "allumé") {
      this.reservationService.switchOffOne(this.index);
    }
    console.log('this.seatStatus : ' + this.status);
    console.log('this.index : ' + this.index);
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
