import { Component, ElementRef, Input, OnInit, ViewChild, Renderer2, OnDestroy } from '@angular/core';
import { OrderReservationService } from "../../services/order-reservation.service";
import { ReservationDeleteButtonsService } from "../../services/reservation-delete-buttons.service";
import { Subscription } from 'rxjs/Subscription';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'; // routes parametres avec id
import { DocumentChangeAction } from '@angular/fire/firestore';

@Component({
  selector: 'app-seat-ba',
  templateUrl: './seat-ba.component.html',
  styleUrls: ['./../seats.component.scss']
})
export class SeatBAComponent implements OnInit, OnDestroy {

  buttonDisabled: boolean;
  isShow = false;

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
  // @Input() seatCompleted: boolean;
  // @Input() seatChecked: boolean;
  @Input() index: number;

  @ViewChild('items-delete-button-small') toggleButton: ElementRef;
  @ViewChild('menu') menu: ElementRef;

  constructor(
    public reservationService: OrderReservationService,
    public deleteButtonsService: ReservationDeleteButtonsService,
    private renderer: Renderer2,
    private route: ActivatedRoute // with id
  ) { 
     this.renderer.listen('window', 'click',(e:Event) => {
      if(e.target !== this.toggleButton.nativeElement && e.target!==this.menu.nativeElement) {
         this.isMenuOpen=false;
     }
    });
   }

  ngOnInit(): void {

    this.buttonDisabled = false;

    this.getSeatsByIdBA();

    // const id = this.route.snapshot.params['id'];
    // this.name = this.reservationService.getSeatById(+id).name;
    // this.status = this.reservationService.getSeatById(+id).status;

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

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  // firestore database

  seatOneOrders: DocumentChangeAction<unknown>[]

  onSubmit() {
    this.reservationService.form.value.seatOneOrder = this.seatOneOrder;

    let data = this.reservationService.form.value;

    this.reservationService.createSeatOneOrder(data).then(res => {
      console.log("OK");
    });
  }

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

  getSeatsByIdBA = () =>
    this.deleteButtonsService
      .getSeatsByIdBA()
      .subscribe((result: DocumentChangeAction<unknown>[]) => (this.seatOneOrders = result));

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
  }

  onSwitchOff() {
    if(this.seatStatus === "éteint") {
      this.reservationService.switchOnOne(this.index);
    }
    else if(this.seatStatus === "allumé") {
      this.reservationService.switchOffOne(this.index);
    }
  }

  ngOnDestroy() {
    this.seatOneSubscription.unsubscribe();
  }

}

