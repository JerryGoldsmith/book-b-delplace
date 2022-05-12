import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationHomeReserveSeatsRoutingModule } from './reservation-home-reserve-seats-routing.module';
import { ReservationHomeReserveSeatsComponent } from 'src/app/part01-reservation/reservation-home-reserve-seats/reservation-home-reserve-seats.component';

@NgModule({
  declarations: [
    ReservationHomeReserveSeatsComponent
  ],
  imports: [
    CommonModule,
    ReservationHomeReserveSeatsRoutingModule
  ],
  exports: [
    ReservationHomeReserveSeatsComponent
  ]
})
export class ReservationHomeReserveSeatsModule { }
