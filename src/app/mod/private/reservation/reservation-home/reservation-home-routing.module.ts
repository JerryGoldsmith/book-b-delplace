import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservationHomeComponent } from 'src/app/part01-reservation/reservation-home/reservation-home.component';

const routes: Routes = [
  { path: '', component: ReservationHomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ReservationHomeRoutingModule { }
