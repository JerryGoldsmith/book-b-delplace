import { Component, OnInit } from '@angular/core';
import { OrderReservationService } from "../services/order-reservation.service";
import { OrdersService } from "../services/orders.service";
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-reservation',
  templateUrl: './order-reservation.component.html',
  styleUrls: ['./order-reservation.component.scss',
  './../normalize.component.scss']
})
export class OrderReservationComponent implements OnInit {


  isShow = false;

  seatOnes: any[];
  seatOneSubscription: Subscription;

  buttonDisabled: boolean;

  showDiv = {
  previous : false,
  current : false,
  next : false
  }

  sortedData: any;

  constructor(
    public ordersService: OrderReservationService,
    public orderService: OrdersService,
    private router: Router
  ) { }

  // ngOnDestroy(): void {
  //   throw new Error('Method not implemented.');
  // }

  ngOnInit(): void {

    this.buttonDisabled = false;

    this.seatOneSubscription = this.ordersService.seatOneSubject.subscribe(
      (seatOnes: any[]) => {
        this.seatOnes = seatOnes;
        console.log('this.seatOnes : ' + this.seatOnes);
      }
    );
    console.log('this.seatOneSubscription : ' + this.seatOneSubscription);
    this.ordersService.emitSeatOneSubject();

    // ---- h1 > Balcon / Orchestre --

    this.sortedData = this.seatOnes.reduce((acc, curr) => {
      if (acc.hasOwnProperty(curr.kind)) {
        acc[curr.kind].push(curr);
        return acc;
      }

      acc[curr.kind] = [curr];
      return acc;
    }, {});
  }

  seat = [];
  seatOneOrder = [];

  addSeatOne = (seatOne: any) => this.seatOneOrder.push(seatOne);

  removeSeatOne = (seatOne: any) => {
    let index = this.seatOneOrder.indexOf(seatOne);
    if (index > -1) this.seatOneOrder.splice(index, 1);
  };

  onSubmit() {
    this.ordersService.form.value.seatOneOrder = this.seatOneOrder;

    let data = this.ordersService.form.value;

    this.ordersService.createSeatOneOrder(data).then(res => {
      console.log("OK");
    });
  }

  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  onSaveOnFirebase() {
    this.ordersService.saveSeatsToFirebaseinServer();
  }

  onFetchFromFirebase() { 
    this.ordersService.saveSeatsFromFirebaseinServer();
  }

  onNewSeat() {
    this.router.navigate(['/seats']);
  }

  onViewSeat(id: number) {
    this.router.navigate(['/seats', 'view', id]);
  }

  // OnDestroy(){
  //   this.seatOneSubscription.unsubscribe();
  // }

}
