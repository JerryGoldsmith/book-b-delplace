import { Component, ElementRef, Input, OnInit, ViewChild, Renderer2, OnDestroy } from '@angular/core';
import { OrderReservationService } from "../../services/order-reservation.service";
import { ReservationDeleteButtonsService } from "../../services/reservation-delete-buttons.service";
import { Subscription } from 'rxjs/Subscription';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'; // routes parametres avec id
import { DocumentChangeAction } from '@angular/fire/firestore';

@Component({
  selector: 'app-seat-da',
  templateUrl: './seat-da.component.html',
  styleUrls: ['./../seats.component.scss']
})
export class SeatDAComponent implements OnInit, OnDestroy {

  buttonDisabled: boolean;
  isShow = false;

  seatsForm: FormGroup;

  // realtime database
  seatOneSubscription: Subscription; // subscrition (observables)
  seatOnes: any[];
  @Input() seatId: number;
  @Input() seatName: string;
  @Input() seatStatus: string;
  @Input() seatKind: string;
  @Input() index: number;

  // firestore database
  seatOneOrder = [];

  // id: number      = 3;
  // name: string    = 'SeatOn';
  // status: string  = 'Status';

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

    this.getSeatsByIdDA();

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

  getSeatsByIdDA = () =>
    this.deleteButtonsService
      .getSeatsByIdDA()
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

