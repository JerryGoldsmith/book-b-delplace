import { Component, Input, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { OrderReservationService } from "../services/order-reservation.service";
import { OrderReservationListComponent } from "../order-reservation-list/order-reservation-list.component";
import { Subscription } from 'rxjs/Subscription';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';

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
  // seatsForm = new FormGroup({
  //   id: new FormControl(this.afs.createId()),
  //   customerFirstName: new FormControl(""),
  //   customerName: new FormControl(""),
  //   customerCountry: new FormControl(""),
  //   customerAge: new FormControl(""),
  //   date: new FormControl(
  //     {
  //       time: firebase.firestore.FieldValue.serverTimestamp()
  //     }),
  //   seatOneOrder: new FormControl(""),
  //   completed: new FormControl(false)
  // });

  // seatOnes: any = [];
  seatOnes: Array<any> = [];
  seatOneSubscription: Subscription;

  buttonDisabled: boolean;

  seat = [];
  seatOneOrder = [];

  name: string    = 'SeatOn';
  status: string  = 'Status';
  kind: string    = 'Kind';

  toto = 'Welcome Test';
  @Input() seatId: number;
  @Input() seatName: string;
  @Input() seatStatus: string;
  @Input() seatKind: string;
  @Input() seatCompleted: boolean;
  @Input() index: number;

  @ViewChild(OrderReservationListComponent) child: any;
  // @ViewChild(OrderReservationListComponent) childId: any;
  // @ViewChild(OrderReservationListComponent) childName: any;
  // @ViewChild(OrderReservationListComponent) childStatus: any;
  // @ViewChild(OrderReservationListComponent) childKind: any;
  // @ViewChild(OrderReservationListComponent) childCompleted: any;
  // @ViewChild(OrderReservationListComponent) childIndex: any;

  showDiv = {
  previous : false,
  current : false,
  next : false
  }

  sortedData: any;

  constructor(
    public reservationService: OrderReservationService,
    private afs: AngularFirestore,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngAfterViewInit(): void {
    this.toto = this.child.toto;
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

    // const id = this.route.snapshot.params['id'];
    // this.getName();
    // this.getStatus();
    // this.getKind();

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

  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  // Cloud Firestore

  seatOneOrders = this.reservationService.getSeatOneOrders();

  addSeatOne = (seatOne: any) => this.seatOneOrder.push(seatOne);

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

  // realtime database

  onSaveOnFirebase() {
    this.reservationService.saveSeatsObjectToArrayToFirebaseinServer();
  }

  onFetchFromFirebase() { 
    this.reservationService.saveSeatsFromFirebaseinServer();
  }

  onDestroy() {
    this.seatOneSubscription.unsubscribe();
  }

  // ----

  onNewSeat() {
    this.router.navigate(['/seats']);
  }

  onViewSeat(id: number) {
    this.router.navigate(['/seats', 'view', id]);
  }

  // OnDestroy(){
  //   this.seatOneSubscription.unsubscribe();
  // }

  // onSubmit() {
  //   this.reservationService.form.value.seatOneOrder = this.seatOneOrder;

  //   let data = this.reservationService.form.value;

  //   this.reservationService.createSeatOneOrder(data).then(res => {
  //     /*do something here....maybe clear the form or give a success message*/
  //     console.log("OK");
  //   });
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

}
