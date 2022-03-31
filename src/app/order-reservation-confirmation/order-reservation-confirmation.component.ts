import { Component, Input, OnInit } from '@angular/core';
import { Seat } from "../models/seats.model";
import { OrderReservationService } from "../services/order-reservation.service";
import { Subscription } from 'rxjs/Subscription';
import { AngularFirestore } from "@angular/fire/firestore";
import { ActivatedRoute } from '@angular/router'; // routes parametres avec id

@Component({
  selector: 'app-order-reservation-confirmation',
  templateUrl: './order-reservation-confirmation.component.html',
  styleUrls: ['./order-reservation-confirmation.component.scss',
  './../normalize.component.scss']
})
export class OrderReservationConfirmationComponent implements OnInit {

  seatOneSubscription: Subscription; // subscrition (observables)
  seatOnes: any[];
  list: Seat[];

  @Input() seatOne: string; // propriétés personnalisées pour transmettre des données depuis l'extérieur
  // ne pas oublier d'importer Input en haut dans import
  @Input() seatTwo: string;
  @Input() seatThree: string;

  constructor(
    private db: AngularFirestore,
    public ordersService: OrderReservationService,
    private route: ActivatedRoute // routes parametres avec id
  ) {

    // this.db.collection('seatOneOrders', ref => ref.where ('customerName', '==', 'titi')).valueChanges()
    // .subscribe(val => console.log(val));

   }

  ngOnInit(): void {

    // this.getSeats();
    // this.getSeatOneOrders();
    this.getSeatTwoOrders();
    // this.getSeatThreeOrders();
  }

  seatOneOrders;

  getSeatOneOrders = () =>
    this.ordersService
      .getSeatOneOrders()
      .subscribe(result => (this.seatOneOrders = result));

  getSeatTwoOrders = () =>
    this.ordersService
      .getSeatOneOrders()
      .subscribe(result => (this.seatOneOrders = result));

  getSeatThreeOrders = () =>
    this.ordersService
      .getSeatThreeOrders()
      .subscribe(result => (this.seatOneOrders = result));


  markCompleted = data => this.ordersService.updateSeatOneOrder(data);

  deleteOrder = data => this.ordersService.deleteSeatOneOrder(data);

  getSeats() {
    if(this.seatOne === 'Siège 1') {
      return this.getSeatOneOrders();
    } else if(this.seatOne === 'Siège 2') {
      return this.getSeatTwoOrders();
    } else if(this.seatOne === 'Siège 3') {
      return this.getSeatThreeOrders();
    }

    // if('seatOnes.name' === 'Siège 1') {
    //   return this.getSeatTwoOrders();
    // } else if('seatOnes.name' === 'Siège 2') {
    //   return this.getSeatThreeOrders();
    // }
  }

}
