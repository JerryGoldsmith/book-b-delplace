import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservationPictureComponent } from 'src/app/part01-reservation/reservation-picture/reservation-picture.component';

const routes: Routes = [
  { path: '', component: ReservationPictureComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ReservationPictureRoutingModule { }
