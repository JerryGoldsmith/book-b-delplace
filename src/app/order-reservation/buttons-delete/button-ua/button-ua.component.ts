import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrderReservationService } from "../../../services/order-reservation.service";
import { ReservationDeleteButtonsService } from "../../../services/reservation-delete-buttons.service";
import { Subscription } from 'rxjs/Subscription';
import { FormGroup } from '@angular/forms';
import { DocumentChangeAction } from '@angular/fire/firestore';

@Component({
  selector: 'app-button-ua',
  templateUrl: './button-ua.component.html',
  styleUrls: ['./../buttons.component.scss']
})
export class ButtonUAComponent implements OnInit, OnDestroy {

  isShow = false;

  seatsForm: FormGroup;

  seatOnes: Array<any> = [];
  seatOneSubscription: Subscription;

  seatOneOrder = [];

  constructor(
    public reservationService: OrderReservationService,
    public deleteButtonsService: ReservationDeleteButtonsService
  ) { }

  ngOnInit(): void {

    this.getDeleteButtonUA();

    this.seatOneSubscription = this.reservationService.seatOneSubject.subscribe(
      (seatOnes: any[]) => {
        this.seatOnes = seatOnes;
      }
    );
    this.reservationService.emitSeatOneSubject();
  }

  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  // Cloud Firestore

  seatOneOrders: DocumentChangeAction<unknown>[];

  getDeleteButtonUA = () =>
    this.deleteButtonsService
      .getSeatDeleteButtonUA()
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

  deleteOrder = (data: 
    { payload: 
      { doc: 
        { 
          id: string;
        }; 
      }; 
    }) => this.reservationService.deleteSeatOneOrder(data);

  // realtime database

  onSaveOnFirebase() {
    this.reservationService.saveSeatsObjectToArrayToFirebaseinServer();
  }

  ngOnDestroy() {
    this.seatOneSubscription.unsubscribe();
  }

}
