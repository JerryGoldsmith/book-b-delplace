import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationPictureRoutingModule } from './reservation-picture-routing.module';
import { ReservationPictureComponent } from 'src/app/part01-reservation/reservation-picture/reservation-picture.component';

@NgModule({
  declarations: [
    ReservationPictureComponent
  ],
  imports: [
    CommonModule,
    ReservationPictureRoutingModule
  ],
  exports: [
    ReservationPictureComponent
  ]
})
export class ReservationPictureModule { }
