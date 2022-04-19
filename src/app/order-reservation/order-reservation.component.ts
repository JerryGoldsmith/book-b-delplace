import { Component, Input, OnInit } from '@angular/core';
import { OrderReservationService } from "../services/order-reservation.service";
import { ReservationDeleteButtonsService } from "../services/reservation-delete-buttons.service";
import { Subscription } from 'rxjs/Subscription';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DocumentChangeAction } from '@angular/fire/firestore';

@Component({
  selector: 'app-order-reservation',
  templateUrl: './order-reservation.component.html',
  styleUrls: ['./order-reservation.component.scss',
  './../order-reservation-list/order-reservation-list.component.scss',
  './../normalize.component.scss']
})
export class OrderReservationComponent implements OnInit {

  isShow = false;
  sortedData: any; // h3 > balcon/orchestre

  seatsForm: FormGroup;

  seatOnes: Array<any> = [];
  seatOneSubscription: Subscription;

  seatOneOrder = [];

  @Input() seatId: number;
  @Input() seatName: string;
  @Input() seatStatus: string;
  @Input() seatKind: string;
  @Input() index: number;

  showDiv = {
  previous : false,
  current : false,
  next : false
  }

  constructor(
    public reservationService: OrderReservationService,
    public deleteButtonsService: ReservationDeleteButtonsService,
    private router: Router
  ) { }

  ngOnInit(): void {

    /*
  AA > 1
  BA > 2 
  CA > 3
  DA > 4
  EA > 5
  FA > 6
  GA > 7
  HA > 8
  IA > 9
  JA > 10
  KA > 11
  LA > 12
  MA > 13
  NA > 14
  OA > 15
  PA > 16
  QA > 17
  RA > 18
  SA > 19
  TA > 20
  UA > 21
  VA > 22
  WA > 23
  XA > 24
  YA > 25
  ZA > 26
  AB > 27
  BB > 28
  CB > 29
  DB > 30
  EB > 31
  FB > 32
  */

    // this.getSeatIds();
    this.getDeleteButtonFA();

    this.seatOneSubscription = this.reservationService.seatOneSubject.subscribe(
      (seatOnes: any[]) => {
        this.seatOnes = seatOnes;
      }
    );
    this.reservationService.emitSeatOneSubject();

    // h3 > balcon/orchestre

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

  seatOneOrders: DocumentChangeAction<unknown>[];

  addSeatOne = (seatOne: any) => this.seatOneOrder.push(seatOne);

  getDeleteButtonFA = () =>
    this.deleteButtonsService
      .getSeatDeleteButtonFA()
      .subscribe(result => (this.seatOneOrders = result));

  // getSeatIdThree = () =>
  //   this.reservationService
  //     .getSeatId()
  //     .subscribe(result => (this.seatOneOrders = result));

  // getSeatIds = () =>
  //   this.reservationService
  //     .getSeatId()
  //     .subscribe(result => (this.seatOneOrders = result));

  markCompleted = (data: 
    { payload: 
      { doc: 
        { 
          id: string; 
        }; 
      }; 
    }): Promise<void> => {
      return this.reservationService.updateSeatOne(data);
  };

  deleteOrder = (data: 
    { payload: 
      { doc: 
        { 
          id: string;
        }; 
      }; 
    }) => this.reservationService.deleteSeatOneOrder(data);

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

  removeSeatOne = (seatOne: any) => {
    let index = this.seatOneOrder.indexOf(seatOne);
    if (index > -1) this.seatOneOrder.splice(index, 1);
  };

  onDestroy() {
    this.seatOneSubscription.unsubscribe();
  }

  // navigation

  onNewSeat() {
    this.router.navigate(['/seats']);
  }

  onViewSeat(id: number) {
    this.router.navigate(['/seats', 'view', id]);
  }

}
