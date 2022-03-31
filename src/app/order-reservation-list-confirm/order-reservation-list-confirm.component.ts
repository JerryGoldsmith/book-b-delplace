import { Component, OnInit } from '@angular/core';
import { Seat } from "../models/seats.model";
import { OrderReservationService } from "../services/order-reservation.service";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-reservation-list-confirm',
  templateUrl: './order-reservation-list-confirm.component.html',
  styleUrls: ['./order-reservation-list-confirm.component.scss',
  './../normalize.component.scss']
})
export class OrderReservationListConfirmComponent implements OnInit {

  seat: Seat;

  constructor(
    private route: ActivatedRoute,
    private service: OrderReservationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.initGetSingleReservationById();
  }

  // initGetSingleReservationById(): void {
  //   this.seat = new Seat('', '', '', '');
  //   const id = this.route.snapshot.params['id'];
  //   this.service.getSeatTwoOrders(+id).then(
  //     (seat: Seat) => {
  //       this.seat = seat;
  //     }
  //   );
  // }

  onBack() {
    this.router.navigate(['/orders']);
  }


}
