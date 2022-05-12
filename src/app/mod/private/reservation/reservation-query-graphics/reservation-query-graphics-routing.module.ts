import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservationQueryGraphicsComponent } from 'src/app/part01-reservation/reservation-query-graphics/reservation-query-graphics.component';

const routes: Routes = [
  { path: '', component: ReservationQueryGraphicsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ReservationHomeQueryGraphicsRoutingModule { }
