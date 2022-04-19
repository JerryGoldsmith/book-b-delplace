import { Component, Input, OnInit } from '@angular/core';
import { OrderReservationService } from "../../../services/order-reservation.service";
import { ReservationDeleteButtonsService } from "../../../services/reservation-delete-buttons.service";
import { Subscription } from 'rxjs/Subscription';
import { FormGroup } from '@angular/forms';
import { DocumentChangeAction } from '@angular/fire/firestore';

@Component({
  selector: 'app-button-ca',
  templateUrl: './button-ca.component.html',
  styleUrls: ['./../buttons.component.scss']
})
export class ButtonCAComponent implements OnInit {

  seatsForm: FormGroup;

  seatOnes: Array<any> = [];
  seatOneSubscription: Subscription;

  @Input() seatStatus: string;

  seatOneOrder = [];

  constructor(
    public reservationService: OrderReservationService,
    public deleteButtonsService: ReservationDeleteButtonsService
  ) { }

  ngOnInit(): void {

    this.getDeleteButtonCA();

    this.seatOneSubscription = this.reservationService.seatOneSubject.subscribe(
      (seatOnes: any[]) => {
        this.seatOnes = seatOnes;
      }
    );
    this.reservationService.emitSeatOneSubject();
  }

  // Cloud Firestore

  seatOneOrders: DocumentChangeAction<unknown>[];

  getDeleteButtonCA = () =>
    this.deleteButtonsService
      .getSeatDeleteButtonCA()
      .subscribe(result => (this.seatOneOrders = result));

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

  // realtime database

  onSaveOnFirebase() {
    this.reservationService.saveSeatsObjectToArrayToFirebaseinServer();
  }

  onDestroy() {
    this.seatOneSubscription.unsubscribe();
  }

}
