import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationHomeQueryGraphicsRoutingModule } from './reservation-query-graphics-routing.module';
import { ReservationQueryGraphicsComponent } from 'src/app/part01-reservation/reservation-query-graphics/reservation-query-graphics.component';

@NgModule({
  declarations: [
    ReservationQueryGraphicsComponent
  ],
  imports: [
    CommonModule,
    ReservationHomeQueryGraphicsRoutingModule
  ],
  exports: [
    ReservationQueryGraphicsComponent
  ]
})
export class ReservationHomeQueryGraphicsModule { }
