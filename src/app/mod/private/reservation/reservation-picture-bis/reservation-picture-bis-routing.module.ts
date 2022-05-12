import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservationPictureBisComponent } from 'src/app/part01-reservation/reservation-picture-bis/reservation-picture-bis.component';

const routes: Routes = [
  { path: '', component: ReservationPictureBisComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ReservationPictureBisRoutingModule { }
