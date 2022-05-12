import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Part01ReservationHomeComponent } from 'src/app/part01-reservation-home/part01-reservation-home.component';

const routes: Routes = [
  { path: '', component: Part01ReservationHomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AReservationRoutingModule { }
