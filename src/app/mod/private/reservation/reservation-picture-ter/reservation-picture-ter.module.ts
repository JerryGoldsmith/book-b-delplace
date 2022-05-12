import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationHomePictureTerRoutingModule } from './reservation-picture-ter-routing.module';
import { ReservationPictureTerComponent } from 'src/app/part01-reservation/reservation-picture-ter/reservation-picture-ter.component';

@NgModule({
  declarations: [
    ReservationPictureTerComponent
  ],
  imports: [
    CommonModule,
    ReservationHomePictureTerRoutingModule
  ],
  exports: [
    ReservationPictureTerComponent
  ]
})
export class ReservationHomePictureTerModule { }
