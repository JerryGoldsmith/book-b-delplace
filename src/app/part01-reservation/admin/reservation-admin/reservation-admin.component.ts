import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { OrderReservationService } from "src/app/services/order-reservation.service";
import { Subscription } from 'rxjs/Subscription';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation-admin',
  templateUrl: './reservation-admin.component.html',
  styleUrls: ['./reservation-admin.component.scss']
})
export class ReservationAdminComponent implements OnInit, OnDestroy {

  isShow = false;

  seatsForm: FormGroup;

  buttonDisabled: boolean;

  seatOneSubscription: Subscription;
  seatOnes: any[];

  seat = [];
  seatOneOrder = [];

  name: string    = 'SeatOn';
  status: string  = 'Status';
  kind: string    = 'Kind';

  @Input() seatName: string;
  @Input() seatStatus: string;
  @Input() seatKind: string;
  @Input() seatCompleted: boolean;
  @Input() index: number;

  constructor(
    public reservationService: OrderReservationService,
    private route: ActivatedRoute
  ) {}

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
      }
    );
    this.reservationService.emitSeatOneSubject();
  }

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

  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  ngOnDestroy() {
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

  onSaveOnFirebase() {
    this.reservationService.saveSeatsSelectToFirebaseinServer();
  }

  onSaveSeatsOnFirebase() {
    this.reservationService.saveSeats();
  }

  addSeatOne = (seatOne: any) => this.seatOneOrder.push(seatOne);

  onSubmit() {
    this.reservationService.form.value.seatOneOrder = this.seatOneOrder;

    let data = this.reservationService.form.value;

    this.reservationService.createSeatOneOrder(data).then(res => {
      console.log("OK");
    });
  }

  onSwitch() {
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
