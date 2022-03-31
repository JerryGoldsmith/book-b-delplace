import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrderReservationService } from "../../services/order-reservation.service"; // méthode template
import { Router } from '@angular/router'; // méthode template

@Component({
  selector: 'app-edit-seat',
  templateUrl: './edit-seat.component.html',
  styleUrls: ['./edit-seat.component.sass']
})
export class EditSeatComponent implements OnInit {

  constructor(
    public ordersService: OrderReservationService,
    private router: Router // méthode template
  ) { }

  ngOnInit(): void {
  }

  // onSubmit(form: NgForm) { // méthode template
  //   console.log(form.value);
  //
  //   const name = form.value['name']; // méthode template
  //   const status = form.value['status'];
  //   const fiche = form.value['fiche'];
  //
  //   this.ordersService.addSeat(name, status, fiche); // méthode template
  //   // this.router.navigate('/mainStart'); // ne fonctionne pas
  // }

}
