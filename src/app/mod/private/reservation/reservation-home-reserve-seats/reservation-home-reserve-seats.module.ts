import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationHomeReserveSeatsRoutingModule } from './reservation-home-reserve-seats-routing.module';
import { ReservationHomeReserveSeatsComponent } from 'src/app/part01-reservation/reservation-home-reserve-seats/reservation-home-reserve-seats.component';

import { ReservationResultComponent } from 'src/app/part01-reservation/reservation-result/reservation-result.component';
import { ReservationPictureBisComponent } from 'src/app/part01-reservation/reservation-picture-bis/reservation-picture-bis.component';

@NgModule({
  declarations: [
    ReservationHomeReserveSeatsComponent,
    ReservationResultComponent,
    ReservationPictureBisComponent
  ],
  imports: [
    CommonModule,
    ReservationHomeReserveSeatsRoutingModule
  ],
  exports: [
    ReservationHomeReserveSeatsComponent,
    ReservationResultComponent,
    ReservationPictureBisComponent
  ]
})
export class ReservationHomeReserveSeatsModule { }
