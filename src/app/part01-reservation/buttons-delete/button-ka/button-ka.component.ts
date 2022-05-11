import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrderReservationService } from "src/app/services/order-reservation.service";
import { ReservationDeleteButtonsService } from "src/app/services/reservation-delete-buttons.service";
import { Subscription } from 'rxjs/Subscription';
import { FormGroup } from '@angular/forms';
import { DocumentChangeAction } from '@angular/fire/firestore';

@Component({
  selector: 'app-button-ka',
  templateUrl: './button-ka.component.html',
  styleUrls: ['./../../styles/normalize.scss',
  './../../styles/part01-reservation/reservation-admin-buttons-delete.scss']
})
export class ButtonKAComponent implements OnInit, OnDestroy {

  isShow = false;

  seatsForm: FormGroup;

  seatOnes: Array<string> = [];
  seatOneSubscription: Subscription;

  seatOneOrder = [];

  constructor(
    public reservationService: OrderReservationService,
    public deleteButtonsService: ReservationDeleteButtonsService
  ) { }

  ngOnInit(): void {

    this.getDeleteButtonKA();

    this.seatOneSubscription = this.reservationService.seatOneSubject.subscribe(
      (seatOnes: string[]) => {
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

  getDeleteButtonKA = () =>
    this.deleteButtonsService
      .getSeatDeleteButtonKA()
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
