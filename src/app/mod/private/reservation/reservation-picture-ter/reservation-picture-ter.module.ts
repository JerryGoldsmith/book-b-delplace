import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationPictureTerRoutingModule } from './reservation-picture-ter-routing.module';
import { ReservationPictureTerComponent } from 'src/app/part01-reservation/reservation-picture-ter/reservation-picture-ter.component';

@NgModule({
  declarations: [
    ReservationPictureTerComponent
  ],
  imports: [
    CommonModule,
    ReservationPictureTerRoutingModule
  ],
  exports: [
    ReservationPictureTerComponent
  ]
})
export class ReservationPictureTerModule { }
