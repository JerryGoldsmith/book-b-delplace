import { Component, Input, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { OrderReservationService } from "../services/order-reservation.service";
import { Subscription } from 'rxjs/Subscription';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'; // routes parametres avec id
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-reservation-list',
  templateUrl: './order-reservation-list.component.html',
  styleUrls: ['./order-reservation-list.component.scss']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderReservationListComponent implements OnInit {

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

  @Input() seatName: string; // propriétés personnalisées pour transmettre des données depuis l'extérieur
  // ne pas oublier d'importer Input en haut dans import
  @Input() seatStatus: string;
  @Input() seatKind: string;
  @Input() seatCompleted: boolean;
  @Input() index: number;

  constructor(
    public reservationService: OrderReservationService,
    private route: ActivatedRoute
    // private cd: ChangeDetectorRef
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
        // this.cd.markForCheck();
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

  onDestroy() {
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
    // for(let seatOne of this.seatOnes) {
    //   if(seatOne.status = "éteint") {
    //     this.seatOnes[i].status = 'allumé';
    //     console.log('seatOne.status : ' + seatOne.status);
    //   } else if(seatOne.status = "allumé") {
    //     this.seatOnes[i].status = 'éteint';
    //     console.log('seatOne.status : ' + seatOne.status);
    //   }
    // }
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
