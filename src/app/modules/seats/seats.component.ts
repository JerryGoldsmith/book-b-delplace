import { Component, ElementRef, Input, OnInit, ViewChild, Renderer2, OnDestroy } from '@angular/core';
import { OrderReservationService } from "../../services/order-reservation.service";
import { ReservationDeleteButtonsService } from "../../services/reservation-delete-buttons.service";
import { Subscription } from 'rxjs/Subscription';
import { FormGroup } from '@angular/forms';
import { DocumentChangeAction } from '@angular/fire/firestore';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.scss']
})
export class SeatsComponent implements OnInit, OnDestroy {

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

  @ViewChild('items-delete-button-small') toggleButton: ElementRef;
  @ViewChild('menu') menu: ElementRef;

  constructor(
    public reservationService: OrderReservationService,
    public deleteButtonsService: ReservationDeleteButtonsService,
    private renderer: Renderer2
  ) { 
     this.renderer.listen('window', 'click',(e:Event) => {
      if(e.target !== this.toggleButton.nativeElement && e.target!==this.menu.nativeElement) {
         this.isMenuOpen=false;
     }
    });
   }

  ngOnInit(): void {

    this.buttonDisabled = false;

    if(this.seatName === 'Balcon 1') {
      this.getSeatsByIdAA();
    } else if(this.seatName === 'Balcon 2') {
      this.getSeatsByIdBA();
    } else if(this.seatName === 'Balcon 3') {
      this.getSeatsByIdCA();
    } else if(this.seatName === 'Balcon 4') {
      this.getSeatsByIdDA();
    } else if(this.seatName === 'Balcon 5') {
      this.getSeatsByIdEA();
    } else if(this.seatName === 'Balcon 6') {
      this.getSeatsByIdFA();
    } else if(this.seatName === 'Balcon 7') {
      this.getSeatsByIdGA();
    } else if(this.seatName === 'Balcon 8') {
      this.getSeatsByIdHA();
    } else if(this.seatName === 'Balcon 9') {
      this.getSeatsByIdIA();
    } else if(this.seatName === 'Balcon 10') {
      this.getSeatsByIdJA();
    } else if(this.seatName === 'Balcon 11') {
      this.getSeatsByIdKA();
    } else if(this.seatName === 'Balcon 12') {
      this.getSeatsByIdLA();
    } else if(this.seatName === 'Orchestre 13') {
      this.getSeatsByIdMA();
    } else if(this.seatName === 'Orchestre 14') {
      this.getSeatsByIdNA();
    } else if(this.seatName === 'Orchestre 15') {
      this.getSeatsByIdOA();
    } else if(this.seatName === 'Orchestre 16') {
      this.getSeatsByIdPA();
    } else if(this.seatName === 'Orchestre 17') {
      this.getSeatsByIdQA();
    } else if(this.seatName === 'Orchestre 18') {
      this.getSeatsByIdRA();
    } else if(this.seatName === 'Orchestre 19') {
      this.getSeatsByIdSA();
    } else if(this.seatName === 'Orchestre 20') {
      this.getSeatsByIdTA();
    } else if(this.seatName === 'Orchestre 21') {
      this.getSeatsByIdUA();
    } else if(this.seatName === 'Orchestre 22') {
      this.getSeatsByIdVA();
    } else if(this.seatName === 'Orchestre 23') {
      this.getSeatsByIdWA();
    } else if(this.seatName === 'Orchestre 24') {
      this.getSeatsByIdXA();
    } else if(this.seatName === 'Orchestre 25') {
      this.getSeatsByIdYA();
    } else if(this.seatName === 'Orchestre 26') {
      this.getSeatsByIdZA();
    } else if(this.seatName === 'Orchestre 27') {
      this.getSeatsByIdAB();
    } else if(this.seatName === 'Orchestre 28') {
      this.getSeatsByIdBB();
    } else if(this.seatName === 'Orchestre 29') {
      this.getSeatsByIdCB();
    } else if(this.seatName === 'Orchestre 30') {
      this.getSeatsByIdDB();
    } else if(this.seatName === 'Orchestre 31') {
      this.getSeatsByIdEB();
    } else if(this.seatName === 'Orchestre 32') {
      this.getSeatsByIdFB();
    }

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

  // get Seats By Id

  getSeatsByIdAA = () =>
    this.deleteButtonsService
      .getSeatsByIdAA()
      .subscribe((result: DocumentChangeAction<unknown>[]) => (this.seatOneOrders = result));

  getSeatsByIdBA = () =>
    this.deleteButtonsService
      .getSeatsByIdBA()
      .subscribe((result: DocumentChangeAction<unknown>[]) => (this.seatOneOrders = result));

  getSeatsByIdCA = () =>
    this.deleteButtonsService
      .getSeatsByIdCA()
      .subscribe((result: DocumentChangeAction<unknown>[]) => (this.seatOneOrders = result));

  getSeatsByIdDA = () =>
    this.deleteButtonsService
      .getSeatsByIdDA()
      .subscribe((result: DocumentChangeAction<unknown>[]) => (this.seatOneOrders = result));

  getSeatsByIdEA = () =>
    this.deleteButtonsService
      .getSeatsByIdEA()
      .subscribe((result: DocumentChangeAction<unknown>[]) => (this.seatOneOrders = result));

  getSeatsByIdFA = () =>
    this.deleteButtonsService
      .getSeatsByIdFA()
      .subscribe((result: DocumentChangeAction<unknown>[]) => (this.seatOneOrders = result));

  getSeatsByIdGA = () =>
    this.deleteButtonsService
      .getSeatsByIdGA()
      .subscribe((result: DocumentChangeAction<unknown>[]) => (this.seatOneOrders = result));

  getSeatsByIdHA = () =>
    this.deleteButtonsService
      .getSeatsByIdHA()
      .subscribe((result: DocumentChangeAction<unknown>[]) => (this.seatOneOrders = result));

  getSeatsByIdIA = () =>
    this.deleteButtonsService
      .getSeatsByIdIA()
      .subscribe((result: DocumentChangeAction<unknown>[]) => (this.seatOneOrders = result));

  getSeatsByIdJA = () =>
    this.deleteButtonsService
      .getSeatsByIdJA()
      .subscribe((result: DocumentChangeAction<unknown>[]) => (this.seatOneOrders = result));

  getSeatsByIdKA = () =>
    this.deleteButtonsService
      .getSeatsByIdKA()
      .subscribe((result: DocumentChangeAction<unknown>[]) => (this.seatOneOrders = result));

  getSeatsByIdLA = () =>
    this.deleteButtonsService
      .getSeatsByIdLA()
      .subscribe((result: DocumentChangeAction<unknown>[]) => (this.seatOneOrders = result));

  getSeatsByIdMA = () =>
    this.deleteButtonsService
      .getSeatsByIdMA()
      .subscribe((result: DocumentChangeAction<unknown>[]) => (this.seatOneOrders = result));

  getSeatsByIdNA = () =>
    this.deleteButtonsService
      .getSeatsByIdNA()
      .subscribe((result: DocumentChangeAction<unknown>[]) => (this.seatOneOrders = result));

  getSeatsByIdOA = () =>
    this.deleteButtonsService
      .getSeatsByIdOA()
      .subscribe((result: DocumentChangeAction<unknown>[]) => (this.seatOneOrders = result));

  getSeatsByIdPA = () =>
    this.deleteButtonsService
      .getSeatsByIdPA()
      .subscribe((result: DocumentChangeAction<unknown>[]) => (this.seatOneOrders = result));

  getSeatsByIdQA = () =>
    this.deleteButtonsService
      .getSeatsByIdQA()
      .subscribe((result: DocumentChangeAction<unknown>[]) => (this.seatOneOrders = result));

  getSeatsByIdRA = () =>
    this.deleteButtonsService
      .getSeatsByIdRA()
      .subscribe((result: DocumentChangeAction<unknown>[]) => (this.seatOneOrders = result));

  getSeatsByIdSA = () =>
    this.deleteButtonsService
      .getSeatsByIdSA()
      .subscribe((result: DocumentChangeAction<unknown>[]) => (this.seatOneOrders = result));

  getSeatsByIdTA = () =>
    this.deleteButtonsService
      .getSeatsByIdTA()
      .subscribe((result: DocumentChangeAction<unknown>[]) => (this.seatOneOrders = result));

  getSeatsByIdUA = () =>
    this.deleteButtonsService
      .getSeatsByIdUA()
      .subscribe((result: DocumentChangeAction<unknown>[]) => (this.seatOneOrders = result));

  getSeatsByIdVA = () =>
    this.deleteButtonsService
      .getSeatsByIdVA()
      .subscribe((result: DocumentChangeAction<unknown>[]) => (this.seatOneOrders = result));

  getSeatsByIdWA = () =>
    this.deleteButtonsService
      .getSeatsByIdWA()
      .subscribe((result: DocumentChangeAction<unknown>[]) => (this.seatOneOrders = result));

  getSeatsByIdXA = () =>
    this.deleteButtonsService
      .getSeatsByIdXA()
      .subscribe((result: DocumentChangeAction<unknown>[]) => (this.seatOneOrders = result));

  getSeatsByIdYA = () =>
    this.deleteButtonsService
      .getSeatsByIdYA()
      .subscribe((result: DocumentChangeAction<unknown>[]) => (this.seatOneOrders = result));

  getSeatsByIdZA = () =>
    this.deleteButtonsService
      .getSeatsByIdZA()
      .subscribe((result: DocumentChangeAction<unknown>[]) => (this.seatOneOrders = result));

  getSeatsByIdAB = () =>
    this.deleteButtonsService
      .getSeatsByIdAB()
      .subscribe((result: DocumentChangeAction<unknown>[]) => (this.seatOneOrders = result));

  getSeatsByIdBB = () =>
    this.deleteButtonsService
      .getSeatsByIdBB()
      .subscribe((result: DocumentChangeAction<unknown>[]) => (this.seatOneOrders = result));

  getSeatsByIdCB = () =>
    this.deleteButtonsService
      .getSeatsByIdCB()
      .subscribe((result: DocumentChangeAction<unknown>[]) => (this.seatOneOrders = result));

  getSeatsByIdDB = () =>
    this.deleteButtonsService
      .getSeatsByIdDB()
      .subscribe((result: DocumentChangeAction<unknown>[]) => (this.seatOneOrders = result));

  getSeatsByIdEB = () =>
    this.deleteButtonsService
      .getSeatsByIdEB()
      .subscribe((result: DocumentChangeAction<unknown>[]) => (this.seatOneOrders = result));

  getSeatsByIdFB = () =>
    this.deleteButtonsService
      .getSeatsByIdFB()
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

