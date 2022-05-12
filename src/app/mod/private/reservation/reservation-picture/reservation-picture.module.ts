import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationHomePictureRoutingModule } from './reservation-picture-routing.module';
import { ReservationPictureComponent } from 'src/app/part01-reservation/reservation-picture/reservation-picture.component';

@NgModule({
  declarations: [
    ReservationPictureComponent
  ],
  imports: [
    CommonModule,
    ReservationHomePictureRoutingModule
  ],
  exports: [
    ReservationPictureComponent
  ]
})
export class ReservationHomePictureModule { }
