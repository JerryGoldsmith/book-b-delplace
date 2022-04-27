import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { OrderReservationService } from "../services/order-reservation.service";
import { Subscription } from 'rxjs/Subscription';
import { DocumentChangeAction } from '@angular/fire/firestore';

@Component({
  selector: 'app-order-reservation-list',
  templateUrl: './order-reservation-list.component.html',
  styleUrls: ['./order-reservation-list.component.scss']
})
export class OrderReservationListComponent implements OnInit, OnDestroy {

  seat = [];
  seatOneOrder = [];

  seatOneSubscription: Subscription;
  seatOnes: Array<any> = [];

  @Input() seatStatus: string;
  @Input() index: number;

  constructor(
    public reservationService: OrderReservationService
  ) {}

  ngOnInit(): void {
    
    // firestore database
    this.getSeatAdminOrders();

    // realtime database
    this.seatOneSubscription = this.reservationService.seatOneSubject
    .subscribe(
      (seatOnes: any[]) => {
        this.seatOnes = seatOnes;
      }
    );
    this.reservationService.emitSeatOneSubject();
  }

  // realtime database

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

  ngOnDestroy() {
    this.seatOneSubscription.unsubscribe();
  }

  // firestore database

  seatOneOrders: DocumentChangeAction<unknown>[];

  getSeatAdminOrders = () =>
    this.reservationService
      .getSeatAdminOrders()
      .subscribe(result => (this.seatOneOrders = result));

  deleteOrder = (data: 
    { payload: 
      { doc: 
        { 
          id: string;
        }; 
      }; 
    }) => this.reservationService.deleteSeatOneOrder(data);

}
