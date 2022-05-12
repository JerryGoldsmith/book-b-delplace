import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import { ReservationHomeReserveSeatsComponent } from 'src/app/part01-reservation/reservation-home-reserve-seats/reservation-home-reserve-seats.component';

const routes: Routes = [
  { path: '', component: ReservationHomeReserveSeatsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ]
})
export class ReservationHomeReserveSeatsRoutingModule { }
