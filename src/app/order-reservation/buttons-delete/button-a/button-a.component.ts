import { Component, OnInit } from '@angular/core';
import { OrderReservationService } from "../../../services/order-reservation.service";
import { Subscription } from 'rxjs/Subscription';
import { FormGroup } from '@angular/forms';
import { DocumentChangeAction } from '@angular/fire/firestore';

@Component({
  selector: 'app-button-a',
  templateUrl: './button-a.component.html',
  styleUrls: ['./button-a.component.scss']
})
export class ButtonAComponent implements OnInit {

  seatsForm: FormGroup;

  seatOnes: Array<any> = [];
  seatOneSubscription: Subscription;

  seatOneOrder = [];

  constructor(
    public reservationService: OrderReservationService
  ) { }

  ngOnInit(): void {

    this.getSeatIds();

    this.seatOneSubscription = this.reservationService.seatOneSubject.subscribe(
      (seatOnes: any[]) => {
        this.seatOnes = seatOnes;
      }
    );
    this.reservationService.emitSeatOneSubject();
  }

  // Cloud Firestore

  seatOneOrders: DocumentChangeAction<unknown>[];

  getSeatIds = () =>
    this.reservationService
      .getSeatId()
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
