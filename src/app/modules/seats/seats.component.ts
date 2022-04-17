import { Component, Input, OnInit } from '@angular/core';
import { OrderReservationService } from "../../services/order-reservation.service";
import { Subscription } from 'rxjs/Subscription';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'; // routes parametres avec id
import { DocumentChangeAction } from '@angular/fire/firestore';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.scss']
})
export class SeatsComponent implements OnInit {

  buttonDisabled: boolean;

  seatsForm: FormGroup;

  // realtime database
  seatOneSubscription: Subscription; // subscrition (observables)
  seatOnes: any[];

  // firestore database
  // seat = [];
  seatOneOrder = [];

  // showDiv = {
  // previous : false,
  // current : false,
  // next : false
  // }

  // sortedData: any;

  id: number      = 3;
  name: string    = 'SeatOn';
  status: string  = 'Status';

  // realtime database
  @Input() seatId: number;
  @Input() seatName: string;
  @Input() seatStatus: string;
  @Input() seatKind: string;
  @Input() seatCompleted: boolean;
  @Input() index: number;

  constructor(
    public reservationService: OrderReservationService,
    private route: ActivatedRoute // with id
  ) { }

  ngOnInit(): void {

    this.buttonDisabled = false;

    this.getSeatQuery(); // display delate buttons

    const id = this.route.snapshot.params['id'];
    this.name = this.reservationService.getSeatById(+id).name;
    this.status = this.reservationService.getSeatById(+id).status;

    this.seatOneSubscription = this.reservationService.seatOneSubject
    .subscribe(
      (seatOnes: any[]) => {
        if(!seatOnes){
          return;
        }
        this.seatOnes = seatOnes;
      }
    );
    this.reservationService.emitSeatOneSubject();
  }

  // firestore database

  seatOneOrders: DocumentChangeAction<unknown>[];

  getSeatQuery = () =>
    this.reservationService
      .getSeatAdminOrders()
      .subscribe(result => (this.seatOneOrders = result));

  // realtime database

  onSaveOnFirebase() {
    this.reservationService.saveSeatsObjectToArrayToFirebaseinServer();
  }

  onSwitchOn() {
    if(this.seatStatus === "allumé") {
      this.reservationService.switchOffOne(this.index);
    }
    else if(this.seatStatus === "éteint") {
      this.reservationService.switchOnOne(this.index);
    }
    // console.log('onSwitch : this.seatStatus : ' + this.seatStatus);
    // console.log('onSwitch : this.index : ' + this.index);
  }

  onSwitchOff() {
    if(this.seatStatus === "éteint") {
      this.reservationService.switchOnOne(this.index);
    }
    else if(this.seatStatus === "allumé") {
      this.reservationService.switchOffOne(this.index);
    }
    // console.log('onSwitch : this.seatStatus : ' + this.seatStatus);
    // console.log('onSwitch : this.index : ' + this.index);
  }

  onDestroy() {
    this.seatOneSubscription.unsubscribe();
  }

}

