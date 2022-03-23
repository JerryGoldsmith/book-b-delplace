import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AReservationRoutingModule } from './a-reservation-routing.module';
// import { AReservationComponent } from './a-reservation/a-reservation.component';


@NgModule({
  declarations: [
    // AReservationComponent
  ],
  imports: [
    CommonModule,
    AReservationRoutingModule
  ]
})
export class AReservationModule { }
