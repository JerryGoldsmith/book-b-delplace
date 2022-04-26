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

    this.getSeatsById();

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

  getSeatsById = () =>
    this.deleteButtonsService
      .getSeatsById()
      .subscribe((result: DocumentChangeAction<unknown>[]) => (this.seatOneOrders = result));

  getDeleteButtonAA = () =>
    this.deleteButtonsService
      .getSeatDeleteButtonAA()
      .subscribe(result => (this.seatOneOrders = result));

  getDeleteButtonBA = () =>
    this.deleteButtonsService
      .getSeatDeleteButtonBA()
      .subscribe(result => (this.seatOneOrders = result));

  getDeleteButtonCA = () =>
    this.deleteButtonsService
      .getSeatDeleteButtonCA()
      .subscribe(result => (this.seatOneOrders = result));

  getDeleteButtonDA = () =>
    this.deleteButtonsService
      .getSeatDeleteButtonCA()
      .subscribe(result => (this.seatOneOrders = result));

  getDeleteButtonEA = () =>
    this.deleteButtonsService
      .getSeatDeleteButtonCA()
      .subscribe(result => (this.seatOneOrders = result));

  getDeleteButtonFA = () =>
    this.deleteButtonsService
      .getSeatDeleteButtonCA()
      .subscribe(result => (this.seatOneOrders = result));

  getDeleteButtonInit = () =>
    this.deleteButtonsService
      .getSeatDeleteButtonInit()
      .subscribe(result => (this.seatOneOrders = result));

  getSeatAdminOrders = () =>
    this.reservationService
      .getSeatAdminOrders()
      .subscribe(result => (this.seatOneOrders = result));

  markCompleted = (data: 
    { payload: 
      { doc: 
        { 
          id: string; 
        }; 
      }; 
    }): Promise<void> => {
      return this.reservationService.updateSeatCompleted(data);
  };

  markChecked = (data: 
    { payload: 
      { doc: 
        { 
          id: string; 
        }; 
      }; 
    }): Promise<void> => {
      return this.reservationService.updateSeatChecked(data);
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

  onSwitchOff() {
    if(this.seatStatus === "éteint") {
      this.reservationService.switchOnOne(this.index);
    }
    else if(this.seatStatus === "allumé") {
      this.reservationService.switchOffOne(this.index);
    }
  }

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
