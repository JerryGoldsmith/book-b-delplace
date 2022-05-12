import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservationQueryDateComponent } from 'src/app/part01-reservation/reservation-query-date/reservation-query-date.component';

const routes: Routes = [
  { path: '', component: ReservationQueryDateComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ReservationHomeQueryDateRoutingModule { }
