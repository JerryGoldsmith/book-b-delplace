import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservationQueryGraphicBarComponent } from 'src/app/part01-reservation/reservation-query-graphic-bar/reservation-query-graphic-bar.component';

const routes: Routes = [
  { path: '', component: ReservationQueryGraphicBarComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ReservationQueryGraphicBarRoutingModule { }
