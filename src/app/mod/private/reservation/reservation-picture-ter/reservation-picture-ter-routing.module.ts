import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservationPictureTerComponent } from 'src/app/part01-reservation/reservation-picture-ter/reservation-picture-ter.component';

const routes: Routes = [
  { path: '', component: ReservationPictureTerComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ReservationPictureTerRoutingModule { }
