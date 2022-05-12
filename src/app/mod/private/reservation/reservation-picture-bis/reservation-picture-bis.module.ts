import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationHomePictureBisRoutingModule } from './reservation-picture-bis-routing.module';
import { ReservationPictureBisComponent } from 'src/app/part01-reservation/reservation-picture-bis/reservation-picture-bis.component';

@NgModule({
  declarations: [
    ReservationPictureBisComponent
  ],
  imports: [
    CommonModule,
    ReservationHomePictureBisRoutingModule
  ],
  exports: [
    ReservationPictureBisComponent
  ]
})
export class ReservationHomePictureBisModule { }
