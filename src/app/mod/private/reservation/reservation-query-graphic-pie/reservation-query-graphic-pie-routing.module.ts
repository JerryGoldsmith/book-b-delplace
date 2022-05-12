import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservationQueryGraphicPieComponent } from 'src/app/part01-reservation/reservation-query-graphic-pie/reservation-query-graphic-pie.component';

const routes: Routes = [
  { path: '', component: ReservationQueryGraphicPieComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ReservationHomeQueryGraphicPieRoutingModule { }
