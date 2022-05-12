import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservationQueryGraphicPolarareaComponent } from 'src/app/part01-reservation/reservation-query-graphic-polararea/reservation-query-graphic-polararea.component';

const routes: Routes = [
  { path: '', component: ReservationQueryGraphicPolarareaComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ReservationHomeQueryGraphicPolarareaRoutingModule { }
