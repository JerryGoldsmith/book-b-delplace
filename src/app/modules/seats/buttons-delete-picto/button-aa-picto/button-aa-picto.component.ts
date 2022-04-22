import { Component, ElementRef, Input, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { OrderReservationService } from "../../../../services/order-reservation.service";
import { Subscription } from 'rxjs/Subscription';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'; // routes parametres avec id
import { DocumentChangeAction } from '@angular/fire/firestore';

@Component({
  selector: 'app-button-aa-picto',
  templateUrl: './button-aa-picto.component.html',
  styleUrls: ['./../../seats.component.scss']
})
export class ButtonAAPictoComponent implements OnInit {

  buttonDisabled: boolean;
  isShow = false;

  seatsForm: FormGroup;

  // realtime database
  seatOneSubscription: Subscription; // subscrition (observables)
  seatOnes: any[];

  // firestore database
  // seat = [];
  seatOneOrder = [];

  // realtime database
  @Input() seatId: number;
  @Input() seatName: string;
  @Input() seatStatus: string;
  @Input() seatKind: string;
  @Input() seatCompleted: boolean;
  @Input() isChecked: boolean;
  @Input() index: number;

  @ViewChild('items-delete-button-small') toggleButton: ElementRef;
  @ViewChild('menu') menu: ElementRef;

  constructor(
    public reservationService: OrderReservationService,
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

    this.getSeatQuery(); // display delete buttons

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

  getSeatQuery = () =>
    this.reservationService
      .getSeatAdminOrders()
      .subscribe(result => (this.seatOneOrders = result));

  // realtime database

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

  onSaveOnFirebase() {
    this.reservationService.saveSeatsObjectToArrayToFirebaseinServer();
  }

}
