import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservationResultComponent } from 'src/app/part01-reservation/reservation-result/reservation-result.component';

const routes: Routes = [
  { path: '', component: ReservationResultComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ReservationResultRoutingModule { }
